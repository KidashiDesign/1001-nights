/* ══════════════════════════════════════════════════════════════════════════
   1001 Nights — Speisekarte, Bedienung
   ──────────────────────────────────────────────────────────────────────────
   Das Markup der Karte steht fertig im HTML (erzeugt von tools/build-menu.mjs
   aus js/menu-data.js). Diese Datei fügt nur die Bedienung hinzu und liest
   ausschließlich aus dem DOM — die Gerichtedaten müssen dafür nicht in den
   Browser geladen werden.

   Funktionen: Volltextsuche, Diät-Filter (UND-Verknüpfung), Scrollspy für
   die Kategorie-Chips, Zurücksetzen.
   ═════════════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var root = document.getElementById('menu-root');
  if (!root) return;

  var cats = [].slice.call(root.querySelectorAll('[data-cat]'));
  if (!cats.length) return;

  /* Muss zeichengleich zu norm() in tools/build-menu.mjs sein */
  function norm(s) {
    return String(s || '').toLowerCase()
      .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  var chips      = document.getElementById('menu-chips');
  var filters    = document.getElementById('menu-filters');
  var search     = document.getElementById('menu-search-input');
  var noResults  = document.getElementById('no-results');
  var resetBtn   = document.getElementById('reset-all');

  var terms = [];   // Suchbegriffe, alle müssen zutreffen
  var active = {};  // aktive Diät-Filter

  /* ── Filtern ─────────────────────────────────────────────────────────── */
  function apply() {
    var activeTags = Object.keys(active).filter(function (k) { return active[k]; });
    var total = 0;

    cats.forEach(function (sec) {
      var shown = 0;
      [].forEach.call(sec.querySelectorAll('[data-dish]'), function (d) {
        var hay = d.dataset.search || '';
        var okQ = terms.every(function (t) { return hay.indexOf(t) !== -1; });
        var dTags = d.dataset.tags ? d.dataset.tags.split(' ') : [];
        var okT = activeTags.every(function (t) { return dTags.indexOf(t) !== -1; });
        var show = okQ && okT;
        d.hidden = !show;
        if (show) shown++;
      });
      sec.hidden = shown === 0;
      total += shown;
    });

    if (noResults) noResults.hidden = total !== 0;
  }

  if (search) {
    var timer;
    search.addEventListener('input', function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        terms = norm(search.value).split(/\s+/).filter(Boolean);
        apply();
      }, 120);
    });
  }

  if (filters) {
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-filter]');
      if (!btn) return;
      var t = btn.dataset.filter;
      active[t] = !active[t];
      btn.classList.toggle('is-on', active[t]);
      btn.setAttribute('aria-pressed', String(!!active[t]));
      apply();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', function () {
      active = {}; terms = [];
      if (search) search.value = '';
      [].forEach.call(document.querySelectorAll('[data-filter]'), function (b) {
        b.classList.remove('is-on');
        b.setAttribute('aria-pressed', 'false');
      });
      apply();
      if (search) search.focus();
    });
  }

  /* ── Scrollspy für die Kategorie-Chips ───────────────────────────────── */
  if (chips && 'IntersectionObserver' in window) {
    var order = cats.map(function (s) { return s.id; });
    var chipFor = {};
    [].forEach.call(chips.querySelectorAll('[data-chip]'), function (c) {
      chipFor['cat-' + c.dataset.chip] = c;
    });

    var visible = {};
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { visible[e.target.id] = e.isIntersecting; });

      var firstId = null;
      for (var i = 0; i < order.length; i++) {
        if (visible[order[i]]) { firstId = order[i]; break; }
      }
      if (!firstId) return;

      order.forEach(function (id) {
        if (chipFor[id]) chipFor[id].classList.toggle('is-active', id === firstId);
      });

      var el = chipFor[firstId];
      if (el && chips.scrollWidth > chips.clientWidth + 4) {
        chips.scrollTo({ left: Math.max(0, el.offsetLeft - chips.clientWidth / 2 + el.offsetWidth / 2),
                         behavior: 'smooth' });
      }
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

    cats.forEach(function (s) { spy.observe(s); });
  }
})();
