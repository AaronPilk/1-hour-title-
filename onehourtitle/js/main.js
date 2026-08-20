/* One Hour Title — interactions */
(function () {
  'use strict';

  // Sticky header background on scroll
  var header = document.querySelector('.header');
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 12) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile menu toggle
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.mobile-menu');
  function toggleMenu(force) {
    if (!burger || !menu) return;
    var open = force !== undefined ? force : !menu.classList.contains('open');
    menu.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () { toggleMenu(); });
  if (menu) menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { toggleMenu(false); });
  });

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  // Subtle pointer-parallax tilt on elements marked [data-tilt]
  var tilts = document.querySelectorAll('[data-tilt]');
  tilts.forEach(function (el) {
    var rect;
    function move(ev) {
      rect = rect || el.getBoundingClientRect();
      var x = (ev.clientX - rect.left) / rect.width - 0.5;
      var y = (ev.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = 'perspective(900px) rotateY(' + (x * 6).toFixed(2) + 'deg) rotateX(' + (-y * 6).toFixed(2) + 'deg) translateY(-6px)';
    }
    function reset() { el.style.transform = ''; rect = null; }
    el.addEventListener('mousemove', move);
    el.addEventListener('mouseleave', reset);
  });

  // Animated count-up for stats
  var nums = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && nums.length) {
    var io2 = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var dur = 1400, start = null;
        function tick(ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var eased = 1 - Math.pow(1 - p, 3);
          var val = target * eased;
          el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        io2.unobserve(el);
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { io2.observe(n); });
  }

  // Contact form (front-end only — mailto fallback)
  var form = document.querySelector('#contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var name = encodeURIComponent(data.get('name') || '');
      var email = encodeURIComponent(data.get('email') || '');
      var phone = encodeURIComponent(data.get('phone') || '');
      var type = encodeURIComponent(data.get('type') || '');
      var msg = encodeURIComponent(data.get('message') || '');
      var body = 'Name: ' + name + '%0D%0AEmail: ' + email + '%0D%0APhone: ' + phone +
                 '%0D%0AService: ' + type + '%0D%0A%0D%0A' + msg;
      var note = form.querySelector('.form-status');
      if (note) { note.textContent = 'Opening your email client…'; note.style.color = 'var(--gold-deep)'; }
      window.location.href = 'mailto:orders@1hourtitle.com?subject=Title%20Order%20Request%20-%20' + name + '&body=' + body;
    });
  }

  // Footer year
  var yr = document.querySelector('#year');
  if (yr) yr.textContent = new Date().getFullYear();
})();
