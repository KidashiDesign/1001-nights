/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — Interaktionen
   Nachbau der Webflow-Bewegungen der Vorlage, ohne jQuery und ohne
   Webflow-Runtime: IntersectionObserver + CSS-Transitions.
   Bewegungsarten: Einstiegs-Staffel (Hero), Scroll-Reveal (up/left/right/
   fade/mask), Shrink-in für Fotos, zeilenweiser Text, Zähler, Parallax.
   ═════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.remove('no-js');

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ── 1. Einstiegs-Staffel: läuft direkt nach dem ersten Paint ────────── */
  function playEnter() {
    var els = document.querySelectorAll('[data-enter]');
    els.forEach(function (el, i) {
      var d = el.dataset.delay;
      el.style.setProperty('--d', (d != null ? d : i * 110) + 'ms');
      el.classList.add('is-in');
    });
  }
  requestAnimationFrame(function () { requestAnimationFrame(playEnter); });

  /* ── 2. Scroll-Reveal ────────────────────────────────────────────────── */
  var revealSelector = '[data-reveal], [data-shrink], .line-mask';

  function markIn(el) {
    if (el.dataset.delay != null) el.style.setProperty('--d', el.dataset.delay + 'ms');
    el.classList.add('is-in');
  }

  if (!('IntersectionObserver' in window) || reduced) {
    document.querySelectorAll(revealSelector).forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        markIn(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });

    var observeAll = function (scope) {
      (scope || document).querySelectorAll(revealSelector).forEach(function (el) {
        if (!el.classList.contains('is-in')) io.observe(el);
      });
    };
    observeAll();
    // Nachgerenderte Blöcke (Speisekarte) nachtragen
    document.addEventListener('content:rendered', function (ev) { observeAll(ev.detail && ev.detail.scope); });

    /* Gestaffelte Gruppen: [data-stagger] verteilt Verzögerungen auf die Kinder */
    document.querySelectorAll('[data-stagger]').forEach(function (group) {
      var step = parseInt(group.dataset.stagger, 10) || 90;
      var kids = group.querySelectorAll(':scope > [data-reveal], :scope > * > [data-reveal]');
      kids.forEach(function (k, i) { if (k.dataset.delay == null) k.dataset.delay = i * step; });
    });
  }

  /* ── 3. Navigation ───────────────────────────────────────────────────── */
  var nav = document.querySelector('.nav');
  var hero = document.querySelector('.hero');
  var drawer = document.querySelector('.nav-drawer');
  var burger = document.querySelector('.burger');

  if (nav) {
    var onScroll = function () {
      var solid = window.scrollY > (hero ? 40 : 8);
      nav.classList.toggle('is-solid', solid);
      if (hero) nav.classList.toggle('over-hero', window.scrollY < hero.offsetHeight - 90);
    };
    if (hero) nav.classList.add('over-hero');
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () { onScroll(); ticking = false; });
    }, { passive: true });
    onScroll();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    if (burger) burger.setAttribute('aria-expanded', 'false');
    document.body.style.removeProperty('overflow');
  }

  if (burger && drawer) {
    burger.addEventListener('click', function () {
      var open = drawer.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });
    drawer.addEventListener('click', function (e) { if (e.target.closest('a')) closeDrawer(); });
    window.addEventListener('resize', function () { if (window.innerWidth > 900) closeDrawer(); });
  }

  /* ── 4. Parallax im Hero (nur Desktop, rAF-gedrosselt) ───────────────── */
  var heroMedia = document.querySelector('.hero-media img');
  if (heroMedia && !reduced && window.matchMedia('(min-width: 900px)').matches) {
    var pTicking = false;
    window.addEventListener('scroll', function () {
      if (pTicking) return;
      pTicking = true;
      requestAnimationFrame(function () {
        var y = Math.min(window.scrollY, 900);
        heroMedia.style.transform = 'translate3d(0,' + (y * 0.16).toFixed(1) + 'px,0)';
        pTicking = false;
      });
    }, { passive: true });
  }

  /* ── 5. Zähler ───────────────────────────────────────────────────────── */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      counters.forEach(function (el) { el.textContent = el.dataset.count; });
    } else {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (!e.isIntersecting) return;
          var el = e.target, target = parseInt(el.dataset.count, 10) || 0, t0 = null;
          var tick = function (t) {
            if (t0 === null) t0 = t;
            var p = Math.min((t - t0) / 1200, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          cio.unobserve(el);
        });
      }, { threshold: 0.6 });
      counters.forEach(function (el) { cio.observe(el); });
    }
  }

  /* ── 6. Lightbox ─────────────────────────────────────────────────────── */
  var lb = null, lastFocus = null;

  function buildLightbox() {
    lb = document.createElement('div');
    lb.className = 'lightbox';
    lb.setAttribute('role', 'dialog');
    lb.setAttribute('aria-modal', 'true');
    lb.hidden = false;
    lb.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="Schließen">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5">' +
      '<path d="M18 6 6 18M6 6l12 12"/></svg></button>' +
      '<figure class="lightbox-fig"><img alt=""><figcaption class="lightbox-cap">' +
      '<strong></strong><span></span></figcaption></figure>';
    document.body.appendChild(lb);
    lb.addEventListener('click', function (e) {
      if (e.target === lb || e.target.closest('.lightbox-close')) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && lb.classList.contains('is-open')) closeLightbox();
    });
  }

  function openLightbox(src, title, caption) {
    if (!lb) buildLightbox();
    lastFocus = document.activeElement;
    var img = lb.querySelector('img');
    img.src = src;
    img.alt = title || '';
    lb.querySelector('.lightbox-cap strong').textContent = title || '';
    lb.querySelector('.lightbox-cap span').textContent = caption || '';
    lb.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    lb.querySelector('.lightbox-close').focus();
  }

  function closeLightbox() {
    if (!lb) return;
    lb.classList.remove('is-open');
    document.body.style.removeProperty('overflow');
    if (lastFocus) lastFocus.focus();
    setTimeout(function () { if (!lb.classList.contains('is-open')) lb.querySelector('img').src = ''; }, 400);
  }

  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-lightbox]');
    if (!trigger) return;
    e.preventDefault();
    openLightbox(trigger.dataset.lightbox, trigger.dataset.lightboxTitle, trigger.dataset.lightboxCaption);
  });

  /* ── 7. Jahreszahl im Footer ─────────────────────────────────────────── */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  window.NIGHTS = { openLightbox: openLightbox, reduced: reduced };
})();

/* ── Sprachumschalter: außerhalb klicken oder Escape schließt ihn ─────── */
(function () {
  'use strict';
  var boxes = document.querySelectorAll('[data-lang-switch]');
  if (!boxes.length) return;
  document.addEventListener('click', function (e) {
    boxes.forEach(function (d) { if (!d.contains(e.target)) d.open = false; });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') boxes.forEach(function (d) {
      if (d.open) { d.open = false; d.querySelector('summary').focus(); }
    });
  });
})();
