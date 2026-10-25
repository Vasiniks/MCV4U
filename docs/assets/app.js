(function () {
  'use strict';

  var COURSE = 'MCV4U';
  var REPO = 'https://github.com/Vasiniks/MCV4U/blob/main/';
  var UNITS = window.UNITS || {};
  var UNIT_KEY = window.UNIT_KEY || 'lines-planes';
  var ALL = UNIT_KEY === 'all';
  var UNIT = UNITS[UNIT_KEY] || { key: UNIT_KEY, lessons: [] };
  function unitList() { return Object.keys(UNITS).map(function (k) { return UNITS[k]; }).sort(function (a, b) { return a.order - b.order; }); }

  var LESSONS = (window.LESSONS || []).slice().sort(function (a, b) { return a.id.localeCompare(b.id); });
  var QA = window.QA || [];
  var QUIZ = ALL ? (window.ALLQ || []) : (window.QUIZ || []).concat(window.QUIZ_APPLIED || [], window.DRILL || []);
  var EXT = window.EXT || [];
  var EXTRA = (window.EXTRA || []).map(function (e, i) { return [e, i]; }).sort(function (a, b) { return a[0].lesson.localeCompare(b[0].lesson) || a[1] - b[1]; }).map(function (p) { return p[0]; });
  var VIS = window.VIS || {};
  var GLOSSARY = (window.GLOSSARY || []).slice().sort(function (a, b) { return a.term.localeCompare(b.term); });

  var LESSON_META = { mix: { title: 'Whole unit', stage: 'c6' } };
  var LESSON_IDS = [];
  (ALL ? unitList() : [UNIT]).forEach(function (u) {
    (u.lessons || []).forEach(function (l) { LESSON_META[l.id] = { title: l.title, stage: l.stage, unit: u.key }; LESSON_IDS.push(l.id); });
    if (ALL) LESSON_META['mix-' + u.key] = { title: u.code + ' whole unit', stage: 'c6', unit: u.key };
  });
  LESSONS.forEach(function (l) { var m = LESSON_META[l.id] || (LESSON_META[l.id] = {}); m.title = l.title; m.stage = l.stage || m.stage; });
  function mixIds() { return ALL ? unitList().map(function (u) { return 'mix-' + u.key; }) : ['mix']; }
  function lessonHref(id) {
    if (!ALL) return '#/lesson/' + id;
    var u = UNITS[(LESSON_META[id] || {}).unit]; return u ? '../' + u.path + '/#/lesson/' + id : '#';
  }

  var view = document.getElementById('view');

  /* ---------- knowledge tiers ---------- */
  var TIER_RANK = { essential: 1, likely: 2, extra: 3 };
  var TIER_NAME = { essential: 'Essential', likely: 'Likely', extra: 'Extra' };
  var DEPTH_HINT = {
    essential: 'Only must-know content: the equation forms, formulas and standard methods.',
    likely: 'Essential plus special cases, derivations and harder variants from class.',
    extra: 'Everything, including enrichment beyond the notes.'
  };
  function getDepth() { var d = store('depth'); return TIER_RANK[d] ? d : 'extra'; }
  function tierOf(x) { if (!x) return 'essential'; var t = x.tier || (x.core === 'deeper' ? 'extra' : x.core) ; return TIER_RANK[t] ? t : 'essential'; }
  function kindOf(q) { return q.kind || (q.level === 3 ? 'applied' : 'knowledge'); }
  function visible(t) { return TIER_RANK[t || 'essential'] <= TIER_RANK[getDepth()]; }
  function tierBadge(t) { return '<span class="tier-badge t-' + t + '">' + TIER_NAME[t] + '</span>'; }
  function applyDepth() {
    var d = getDepth();
    document.documentElement.setAttribute('data-depth', d);
    $$('.depth button').forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-depth') === d)); });
    var h = document.getElementById('depthHint'); if (h) h.textContent = DEPTH_HINT[d];
  }
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  var PREFIX = 'mcv4u-' + UNIT_KEY + '-';
  function store(key, val) {
    try {
      var k = (key === 'depth' ? 'mcv4u-' : PREFIX) + key;
      if (val === undefined) { var v = localStorage.getItem(k); return v ? JSON.parse(v) : null; }
      localStorage.setItem(k, JSON.stringify(val));
    } catch (e) { return null; }
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function stageOf(id) { return (LESSON_META[id] || {}).stage || 'etc'; }
  function lessonLabel(id) { if (/^mix/.test(id)) return (LESSON_META[id] || {}).title || 'Whole unit'; return id + ' ' + (LESSON_META[id] ? LESSON_META[id].title : ''); }
  function setWide(on) { view.classList.toggle('wide', !!on); }

  /* ---------- theme ---------- */
  function currentTheme() {
    var t = document.documentElement.getAttribute('data-theme');
    if (t) return t;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  $$('[data-theme-toggle]').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('mcv4u-theme', next); } catch (e) {}
    });
  });

  /* ---------- mobile menu ---------- */
  var sidebar = $('#sidebar'), scrim = $('#scrim'), menuBtn = $('#menuBtn');
  function closeMenu() { sidebar.classList.remove('open'); scrim.hidden = true; menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = !sidebar.classList.contains('open');
    sidebar.classList.toggle('open', open); scrim.hidden = !open; menuBtn.setAttribute('aria-expanded', String(open));
  });
  scrim.addEventListener('click', closeMenu);
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  $$('.depth button').forEach(function (b) {
    b.addEventListener('click', function () { store('depth', b.getAttribute('data-depth')); applyDepth(); route(true); });
  });

  /* ---------- nav ---------- */
  if ($('#navLessons')) $('#navLessons').innerHTML = LESSON_IDS.map(function (id) {
    return '<li><a href="#/lesson/' + id + '" data-route="lesson/' + id + '" data-stage="' + stageOf(id) + '"><span class="dot"></span><span class="num">' + id + '</span><span>' + esc(LESSON_META[id].title) + '</span></a></li>';
  }).join('');

  function markNav(route) {
    $$('.nav a[data-route]').forEach(function (a) {
      var r = a.getAttribute('data-route');
      var on = r === route || (r === 'beyond' && route.indexOf('beyond') === 0);
      if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
  }

  /* ---------- router ---------- */
  function route(keepScroll) {
    var h = location.hash.replace(/^#\/?/, '');
    var parts = h.split('?');
    var path = parts[0], query = {};
    (parts[1] || '').split('&').forEach(function (kv) { if (kv) { var p = kv.split('='); query[p[0]] = decodeURIComponent(p[1] || ''); } });
    var seg = path.split('/');
    closeMenu();
    setRail(null);
    view.removeAttribute('data-stage');
    setWide(false);
    if (ALL) { renderQuizSetup(query); markNav('quiz'); }
    else if (!path) { renderHome(); markNav('home'); }
    else if (seg[0] === 'cram') { renderCram(seg[1]); markNav('cram'); }
    else if (seg[0] === 'lesson') { renderLesson(seg[1], seg[2]); markNav('lesson/' + seg[1]); }
    else if (seg[0] === 'qa') { var g = renderQA(query, seg[1]); markNav(g && g.lesson === 'mix' ? 'review' : 'qa'); }
    else if (seg[0] === 'quiz') { renderQuizSetup(query); markNav('quiz'); }
    else if (seg[0] === 'apply') { renderApply(query); markNav('apply'); }
    else if (seg[0] === 'beyond') { seg[1] ? renderBeyondTopic(seg[1]) : renderBeyond(); markNav('beyond'); }
    else if (seg[0] === 'glossary') { renderGlossary(); markNav('glossary'); }
    else if (seg[0] === 'files') { renderFiles(); markNav('files'); }
    else if (seg[0] === 'types') { renderTypes(seg[1]); markNav('types'); }
    else if (seg[0] === 'lab' && window.LAB) { setWide(true); window.LAB.render(view, seg[1], query); markNav('lab'); }
    else { renderHome(); markNav('home'); }
    fitDiagrams();
    if (pendingScroll) { var ps = pendingScroll; pendingScroll = null; ps.scrollIntoView({ block: 'start' }); }
    else if (keepScroll !== true) window.scrollTo(0, 0);
    var h1 = view.querySelector('h1, h2');
    document.title = (h1 ? h1.textContent + ' · ' : '') + (ALL ? COURSE : COURSE + ' ' + (UNIT.title || ''));
  }
  window.addEventListener('hashchange', function () { route(); });

  /* ---------- math: typeset TeX in anything the views draw ---------- */
  var mathRoot = document.getElementById('main'), mathObs = null, mathQueued = false;
  function typeset() {
    mathQueued = false;
    if (!window.renderMathInElement) return;
    if (mathObs) mathObs.disconnect();
    try {
      window.renderMathInElement(mathRoot, {
        delimiters: [{ left: '\\[', right: '\\]', display: true }, { left: '\\(', right: '\\)', display: false }],
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'option', 'svg'],
        throwOnError: false,
        strict: 'ignore'
      });
    } catch (e) {}
    if (mathObs) mathObs.observe(mathRoot, { childList: true, subtree: true });
  }
  function queueTypeset() { if (!mathQueued) { mathQueued = true; (window.requestAnimationFrame || setTimeout)(typeset); } }
  if (window.MutationObserver) { mathObs = new MutationObserver(queueTypeset); mathObs.observe(mathRoot, { childList: true, subtree: true }); }
  window.addEventListener('load', queueTypeset);
  window.MCV = { typeset: typeset, esc: esc };

  /* ---------- home ---------- */
  function heroHTML() {
    return '<section class="hero"><p class="hero-course">' + COURSE + ' · ' + esc(UNIT.code || '') + ' study guide</p>' +
      '<h1>' + (UNIT.headline || esc(UNIT.title || '')) + '</h1>' +
      (UNIT.lede ? '<p class="lede">' + UNIT.lede + '</p>' : '') +
      (VIS.overview ? '<figure class="map">' + VIS.overview + '</figure>' : '') + '</section>';
  }
  function renderHome() {
    var lessonCards = LESSON_IDS.map(function (id) {
      var l = LESSONS.filter(function (x) { return x.id === id; })[0];
      return '<a class="row-link" data-stage="' + stageOf(id) + '" href="#/lesson/' + id + '"><span class="rl-num">' + id + '</span><span class="rl-body"><b>' + esc(LESSON_META[id].title) + '</b>' +
        (l && l.summary ? '<span>' + l.summary + '</span>' : '') + '</span></a>';
    }).join('');
    view.innerHTML =
      heroHTML() +
      '<h2>Three levels of depth</h2>' +
      '<div class="tier-explain">' +
        '<div>' + tierBadge('essential') + '<p>Must-know for the test: every equation form, conversion, formula and standard method.</p></div>' +
        '<div>' + tierBadge('likely') + '<p>Probably tested or shown in class: special cases, derivations, harder worksheet variants.</p></div>' +
        '<div>' + tierBadge('extra') + '<p>Enrichment beyond the notes, for full marks on thinking questions.</p></div>' +
      '</div>' +
      '<p class="muted">Use <strong>How much to show</strong> in the menu to hide lower levels everywhere. Short on time? <a href="#/cram">Open cram mode</a>: every formula and method on one page.</p>' +
      '<h2>Start here</h2>' +
      '<div class="rows tools start">' +
        '<a href="#/types"><b>Question types playbook</b><span>The unit only asks a set number of kinds of question. ' + (TYPES.length ? TYPES.length + ' types, each' : 'Each type') + ' with how to spot it, the recipe, a worked example and the traps.</span></a>' +
        '<a href="#/qa?set=qa-review"><b>Unit review &amp; quest package</b><span>The hardest questions in the unit. Every one solved with the question type and the plan spelled out before the algebra.</span></a>' +
      '</div>' +
      '<h2>Lessons</h2><div class="rows">' + lessonCards + '</div>' +
      '<h2>Test yourself</h2>' +
      '<div class="rows tools">' +
        '<a href="#/qa"><b>Worksheets &amp; review solutions</b><span>' + countQA() + ' questions from every worksheet, the unit review and the quest review package, each solved step by step.</span></a>' +
        '<a href="#/quiz"><b>Practice quiz</b><span>' + QUIZ.length + ' multiple-choice and true/false questions with explanations. Filter by lesson.</span></a>' +
        '<a href="#/apply"><b>Apply &amp; extend</b><span>' + EXT.length + ' test-style application and thinking problems with hints and full solutions.</span></a>' +
        (window.LAB ? '<a href="#/lab"><b>Lines &amp; planes lab</b><span>Type in a point and direction (or a plane) and see it in 2D or 3D, with every equation form written out for you.</span></a>' : '') +
        '<a href="#/beyond"><b>Beyond the notes</b><span>' + EXTRA.length + ' topics that go past what the notes covered, marked by how likely they are to come up.</span></a>' +
        '<a href="#/files"><b>Class handouts</b><span>The original PDFs: blank notes, completed lesson notes, worksheets and solutions.</span></a>' +
      '</div>';
  }

  /* ---------- class handouts ---------- */
  function fileHref(name) { return REPO + encodeURIComponent(UNIT.source || '') + '/' + encodeURIComponent(name); }
  function fileLabel(name) {
    var m = /^([A-D]) - (Blank Notes|Lesson Notes|Worksheet Solutions|Worksheet|Unit Review Summary Sheet Completed|Unit Review Summary Sheet|Unit Review Questions)/.exec(name);
    if (m) return { 'Blank Notes': 'Blank notes', 'Lesson Notes': 'Lesson notes (completed)', 'Worksheet': 'Worksheet', 'Worksheet Solutions': 'Worksheet solutions', 'Unit Review Summary Sheet': 'Summary sheet (blank)', 'Unit Review Summary Sheet Completed': 'Summary sheet (completed)', 'Unit Review Questions': 'Unit review questions' }[m[2]];
    return name.replace(/\.pdf$/i, '').replace(/ - Copy$/, '');
  }
  function fileLinks(files) {
    return '<div class="handouts">' + files.map(function (f) { return '<a href="' + fileHref(f) + '" target="_blank" rel="noopener">' + esc(fileLabel(f)) + '<span>PDF</span></a>'; }).join('') + '</div>';
  }
  function renderFiles() {
    view.innerHTML = '<h1>Class handouts</h1><p class="lede">The original PDFs from class. They open on GitHub, where you can read or download them.</p>' +
      (UNIT.lessons || []).filter(function (l) { return l.files; }).map(function (l) {
        return '<section class="handout-set" data-stage="' + l.stage + '"><h3><span class="num">' + l.id + '</span> ' + esc(l.title) + '</h3>' + fileLinks(l.files) + '</section>';
      }).join('') +
      (UNIT.review ? '<section class="handout-set" data-stage="c6"><h3>Unit review</h3>' + fileLinks(UNIT.review) + '</section>' : '');
  }

  /* ---------- question types playbook ---------- */
  var TYPES = window.TYPES || [];
  function typeHTML(t) {
    return '<h3 data-tier="' + tierOf(t) + '" data-title="' + esc((t.lesson === 'mix' ? 'Review' : t.lesson) + ' · ' + t.title) + '">' + esc(t.title) + '</h3>' +
      '<p class="type-meta"><span class="pill">' + (t.lesson === 'mix' ? 'Review-style: combines lessons' : esc(lessonLabel(t.lesson))) + '</span></p>' +
      '<h4>How to spot it</h4>' + t.spot +
      '<h4>The recipe</h4><ol class="steps">' + (t.steps || []).map(function (s) { return '<li>' + s + '</li>'; }).join('') + '</ol>' +
      (t.example ? '<div class="example"><p class="example-title">Worked example</p>' + t.example.q + '<details class="check type-sol"><summary>Show the worked solution</summary><div class="ans">' + t.example.a + '</div></details></div>' : '') +
      (t.traps && t.traps.length ? '<div class="callout warn"><p class="callout-title">Traps</p><ul>' + t.traps.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul></div>' : '') +
      (t.seen ? '<p class="type-seen"><strong>Where it shows up:</strong> ' + t.seen + '</p>' : '') +
      (t.tryq ? '<details class="check"><summary>Try one yourself</summary><div class="ans">' + t.tryq + '<details class="check"><summary>Answer</summary><div class="ans">' + t.trya + '</div></details></div></details>' : '');
  }
  function renderTypes(want) {
    if (!TYPES.length) { view.innerHTML = '<h1>Question types</h1><p class="empty">The playbook is still being written.</p>'; return; }
    var html = '<h3 data-tier="essential" data-title="Which type is it?">Which type is it?</h3>' + (window.TYPES_INTRO || '') + TYPES.map(typeHTML).join('');
    var S = sectionsOf(html), secs = S.secs, base = '#/types';
    var tabs = secs.map(function (sec, k) { return { href: base + '/' + k, label: esc(secTitle(sec)), tier: secTier(sec), current: k === 0 }; });
    view.setAttribute('data-stage', 'c4');
    view.innerHTML = '<header class="lesson-head"><div class="lesson-kicker"><span>Question types playbook</span><span>' + TYPES.length + ' types, worksheets to quest</span></div>' +
      '<h1>Every question type in the unit</h1>' +
      '<p class="lede">The unit only asks a set number of kinds of question. Learn to spot each one and you always know the first move. Each type has the cue, the recipe, a worked example, the traps and where it shows up in the worksheets, the unit review and the quest package.</p></header>' +
      '<article class="lesson-body types-body"></article>';
    setRail('Question types', tabs);
    mountLong($('.lesson-body', view), secs, base, want);
  }
  function countQA() { return QA.reduce(function (n, g) { return n + g.items.length; }, 0); }

  /* ---------- diagram sizing ---------- */
  // Never upscale a diagram past its drawn size; on narrow screens keep labels >= 10px and scroll sideways.
  function fitDiagrams() {
    $$('figure svg', view).forEach(function (svg) {
      if (svg.parentNode.classList.contains('fig-scroll')) return;
      var vb = svg.viewBox && svg.viewBox.baseVal;
      if (!vb || !vb.width) return;
      var minF = 99;
      $$('text', svg).forEach(function (t) { var f = parseFloat(getComputedStyle(t).fontSize); if (f && f < minF) minF = f; });
      if (minF === 99) minF = 12;
      var wrap = document.createElement('div');
      wrap.className = 'fig-scroll';
      svg.parentNode.insertBefore(wrap, svg);
      wrap.appendChild(svg);
      svg.style.maxWidth = vb.width + 'px';
      svg.style.minWidth = Math.min(vb.width, Math.round(vb.width * 10 / minF)) + 'px';
      if (wrap.scrollWidth > wrap.clientWidth + 2) wrap.classList.add('scrolls');
    });
  }
  window.addEventListener('resize', function () {
    $$('.fig-scroll', view).forEach(function (w) { w.classList.toggle('scrolls', w.scrollWidth > w.clientWidth + 2); });
  });

  /* ---------- right rail: the parts of this page or section ---------- */
  var mainEl = $('#main');
  mainEl.insertAdjacentHTML('beforeend', '<aside class="rail" id="rail" hidden></aside>');
  var rail = $('#rail'), spy = null, railJump = null;
  function setRail(label, items) {
    if (spy) { window.removeEventListener('scroll', spy); spy = null; }
    railJump = null;
    var on = !!(label && items && items.length);
    mainEl.classList.toggle('has-rail', on);
    rail.hidden = !on;
    rail.innerHTML = on ? '<nav aria-label="' + esc(label) + '"><details' + (window.innerWidth > 1100 ? ' open' : '') + '><summary>' + esc(label) + '</summary><ol>' + items.map(function (t) {
      return '<li' + (t.tier ? ' data-tier="' + t.tier + '"' : '') + '><a href="' + t.href + '"' + (t.current ? ' aria-current="true"' : '') + '>' + t.label + '</a></li>';
    }).join('') + '</ol></details></nav>' : '';
  }
  rail.addEventListener('click', function (ev) {
    var a = ev.target.closest('a'); if (!a || !railJump) return;
    var el = railJump(a.getAttribute('href') || ''); if (!el) return;
    ev.preventDefault(); closeMenu();
    el.scrollIntoView({ block: 'start' });
  });
  window.addEventListener('resize', function () { var d = $('details', rail); if (d && window.innerWidth > 1100) d.open = true; });
  // Split lesson-style HTML into one section per h3.
  function sectionsOf(html, prep) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    tierizeBody(tmp);
    var kids = Array.prototype.slice.call(tmp.children);
    var secs = kids.filter(function (c) { return c.classList.contains('tier-sec'); });
    var lead = kids.filter(function (c) { return !c.classList.contains('tier-sec'); });
    if (!secs.length) {
      var one = document.createElement('section'); one.className = 'tier-sec'; one.setAttribute('data-tier', 'essential');
      lead.forEach(function (c) { one.appendChild(c); }); secs = [one]; lead = [];
    }
    if (prep) prep(secs);
    return { secs: secs, lead: lead };
  }
  function secTier(sec) { return sec.getAttribute('data-tier') || 'essential'; }
  function secTitle(sec) { var h = sec.querySelector('h3'); return h ? (h.getAttribute('data-title') || h.textContent) : 'Overview'; }
  function stepVisible(secs, i, dir) { for (var k = i + dir; k >= 0 && k < secs.length; k += dir) if (visible(secTier(secs[k]))) return k; return -1; }
  function pickSection(secs, want) {
    var i = Math.max(0, Math.min(secs.length - 1, parseInt(want, 10) || 0));
    if (visible(secTier(secs[i]))) return i;
    var f = stepVisible(secs, -1, 1); return f > -1 ? f : i;
  }

  /* ---------- one long page, with the rail tracking the section you are reading ---------- */
  var pendingScroll = null;
  function mountLong(art, secs, base, want) {
    secs.forEach(function (sec, k) { sec.id = 'sec-' + k; art.appendChild(sec); });
    railJump = function (href) { return href.indexOf(base + '/') === 0 ? document.getElementById('sec-' + href.slice(base.length + 1)) : null; };
    var links = $$('a', rail), cur = -1, ticking = false;
    function update() {
      ticking = false;
      var k = -1;
      secs.forEach(function (sec, i) { if (sec.offsetParent !== null && (k < 0 || sec.getBoundingClientRect().top <= 120)) k = i; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        for (var j = secs.length - 1; j >= 0; j--) if (secs[j].offsetParent !== null) { k = j; break; }
      }
      if (k < 0 || k === cur) return;
      cur = k;
      links.forEach(function (a, i) { if (i === k) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current'); });
      try { history.replaceState(null, '', k ? base + '/' + k : base); } catch (e) {}
    }
    spy = function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    window.addEventListener('scroll', spy, { passive: true });
    requestAnimationFrame(update);
    var w = parseInt(want, 10);
    if (w > 0 && secs[w]) pendingScroll = secs[w];
  }

  /* ---------- lesson ---------- */
  function renderLesson(id, want) {
    var l = LESSONS.filter(function (x) { return x.id === id; })[0];
    view.setAttribute('data-stage', stageOf(id));
    if (!l) { view.innerHTML = '<h1>' + esc(lessonLabel(id)) + '</h1><p class="empty">This lesson is still being written. Check back soon.</p>'; return; }
    var idx = LESSON_IDS.indexOf(id);
    var prevL = LESSON_IDS[idx - 1], nextL = LESSON_IDS[idx + 1];
    var meta = (UNIT.lessons || []).filter(function (x) { return x.id === id; })[0] || {};
    var nQ = QUIZ.filter(function (q) { return q.lesson === id; }).length;
    var base = '#/lesson/' + id;
    var S = sectionsOf(l.html), secs = S.secs;
    S.lead.slice().reverse().forEach(function (c) { secs[0].insertBefore(c, secs[0].firstChild); });
    var tabs = secs.map(function (sec, k) { return { href: base + '/' + k, label: esc(secTitle(sec)), tier: secTier(sec), current: k === 0 }; });
    view.innerHTML =
      '<header class="lesson-head">' +
        '<div class="lesson-kicker"><span>Lesson ' + l.id + '</span>' + (l.where ? '<span class="pill">' + esc(l.where) + '</span>' : '') + '</div>' +
        '<h1>' + esc(l.title) + '</h1>' +
        (l.summary ? '<p class="lede">' + l.summary + '</p>' : '') +
        (l.objectives && l.objectives.length ? '<div class="objectives"><p>By the end of this lesson you can</p><ul>' + l.objectives.map(function (o) { return '<li>' + o + '</li>'; }).join('') + '</ul></div>' : '') +
        (meta.files ? '<details class="handout-box"><summary>Class handouts for this lesson</summary>' + fileLinks(meta.files) + '</details>' : '') +
      '</header>' +
      '<article class="lesson-body"></article>' +
      '<div class="practice-cta"><p>Ready to test ' + esc(l.title) + '?</p><span><a class="btn" href="#/quiz?lesson=' + id + '">Practice ' + nQ + ' questions</a> <a class="btn ghost" href="#/qa?lesson=' + id + '">Worksheet solutions</a></span></div>' +
      '<nav class="pager" aria-label="Lessons">' +
        (prevL ? '<a class="prev" href="#/lesson/' + prevL + '"><small>Previous lesson</small>' + prevL + ' ' + esc(LESSON_META[prevL].title) + '</a>' : '') +
        (nextL ? '<a class="next" href="#/lesson/' + nextL + '"><small>Next lesson</small>' + nextL + ' ' + esc(LESSON_META[nextL].title) + '</a>' : '') +
      '</nav>';
    setRail('On this page', tabs);
    mountLong($('.lesson-body', view), secs, base, want);
  }

  // Group each h3 and the blocks after it into a tier section; flag lower-tier blocks inside.
  function tierizeBody(body) {
    if (!body) return;
    var kids = Array.prototype.slice.call(body.children);
    var sec = null;
    kids.forEach(function (el) {
      if (el.tagName === 'H3') {
        var t = TIER_RANK[el.getAttribute('data-tier')] ? el.getAttribute('data-tier') : 'essential';
        el.removeAttribute('data-tier');
        sec = document.createElement('section');
        sec.className = 'tier-sec';
        sec.setAttribute('data-tier', t);
        body.insertBefore(sec, el);
        if (!el.hasAttribute('data-title')) el.setAttribute('data-title', el.textContent);
        if (t !== 'essential') el.insertAdjacentHTML('beforeend', ' ' + tierBadge(t));
      }
      if (sec) sec.appendChild(el);
    });
    // A tiered h4 owns the blocks after it, up to the next heading.
    $$('h4[data-tier]', body).forEach(function (h) {
      var t = h.getAttribute('data-tier');
      var wrap = document.createElement('div');
      wrap.className = 'tier-sub';
      wrap.setAttribute('data-tier', t);
      h.parentNode.insertBefore(wrap, h);
      h.removeAttribute('data-tier');
      if (TIER_RANK[t] && t !== 'essential') h.insertAdjacentHTML('beforeend', ' ' + tierBadge(t));
      var n = h;
      while (n && !(n !== h && /^H[34]$/.test(n.tagName))) { var next = n.nextElementSibling; wrap.appendChild(n); n = next; }
    });
    $$('[data-tier]', body).forEach(function (el) {
      if (el.classList.contains('tier-sec') || el.classList.contains('tier-sub') || el.tagName === 'TR' || el.tagName === 'LI') return;
      var t = el.getAttribute('data-tier');
      var parentSec = el.closest('.tier-sec');
      if (!TIER_RANK[t] || t === 'essential' || (parentSec && parentSec.getAttribute('data-tier') === t)) return;
      el.insertAdjacentHTML('beforebegin', '<div class="tier-flag" data-tier="' + t + '">' + tierBadge(t) + '</div>');
    });
  }

  /* ---------- cram mode ---------- */
  function renderCram(want) {
    var ess = QUIZ.filter(function (q) { return tierOf(q) === 'essential'; }).length;
    view.setAttribute('data-stage', 'c1');
    var S = sectionsOf(window.CRAM || '<p class="empty">Cram sheet missing.</p>', function (secs) {
      secs.forEach(function (sec) {
        $$('tr[data-tier]', sec).forEach(function (tr) { var c = tr.cells[0]; if (c) c.insertAdjacentHTML('beforeend', ' ' + tierBadge(tr.getAttribute('data-tier'))); });
      });
    });
    var secs = S.secs, base = '#/cram';
    var tabs = secs.map(function (sec, k) { return { href: base + '/' + k, label: esc(secTitle(sec)), current: k === 0 }; });
    view.innerHTML = '<header class="lesson-head"><div class="lesson-kicker">' + tierBadge('essential') + '<span>The whole unit, essentials only</span></div>' +
      '<h1>Cram mode</h1>' +
      '<p class="lede">Every equation form, conversion, formula and method in the unit. Scroll straight through, then take the cram quiz.</p>' +
      '<div class="toolbar"><button class="btn" id="cramQuiz"' + (ess ? '' : ' disabled') + '>Cram quiz: ' + Math.min(25, ess) + ' essential questions</button><button class="btn ghost" id="cramPrint">Print the cram sheet</button></div></header>' +
      '<article class="lesson-body cram"></article>';
    setRail('Cram topics', tabs);
    mountLong($('.lesson-body', view), secs, base, want);
    $('#cramQuiz').addEventListener('click', function () {
      startQuiz(shuffle(QUIZ.filter(function (q) { return tierOf(q) === 'essential'; })).slice(0, 25));
    });
    $('#cramPrint').addEventListener('click', function () { window.print(); });
  }

  /* ---------- filter chips helper ---------- */
  function lessonChips(selected, includeMix) {
    var ids = LESSON_IDS.slice(); if (includeMix) ids.push('mix');
    return '<div class="chips" role="group" aria-label="Filter by lesson"><button class="fchip" data-l="all" aria-pressed="' + (!selected || selected === 'all') + '">All</button>' +
      ids.map(function (id) { return '<button class="fchip" data-l="' + id + '" aria-pressed="' + (selected === id) + '">' + (id === 'mix' ? 'Whole unit' : id) + '</button>'; }).join('') + '</div>';
  }

  /* ---------- Q&A ---------- */
  function renderQA(query, want) {
    if (!QA.length) { view.innerHTML = '<h1>Worksheets &amp; review solutions</h1><p class="empty">Questions are still being written.</p>'; return; }
    var i = parseInt(want, 10);
    if (isNaN(i) && query.set) QA.forEach(function (g, k) { if (isNaN(i) && g.id === query.set) i = k; });
    if (isNaN(i) && query.lesson) QA.forEach(function (g, k) { if (isNaN(i) && g.lesson === query.lesson) i = k; });
    if (isNaN(i) || i < 0 || i >= QA.length) i = 0;
    var g = QA[i];
    var tabs = QA.map(function (x, k) { return { href: '#/qa/' + k, label: esc(x.title.split(':')[0]), current: k === i }; });
    view.setAttribute('data-stage', stageOf(g.lesson));
    view.innerHTML = '<header class="lesson-head"><div class="lesson-kicker"><span>Worksheets &amp; review solutions</span><span>' + countQA() + ' questions in ' + QA.length + ' sets</span></div>' +
      '<h1>' + esc(g.title) + '</h1>' + (g.source ? '<p class="qa-source">' + esc(g.source) + '</p>' : '') + '</header>' +
      '<div class="toolbar"><button class="btn ghost" id="openAll">Show all answers</button><button class="btn ghost" id="closeAll">Hide all answers</button></div>' +
      '<section class="qa-group">' + g.items.map(function (it, k) {
        var t = tierOf(it);
        // Worksheet items carry their own label ("2a.", "Extra 11b."); show it as a tag instead of a running number.
        var lm = /^\s*<strong>([^<]{1,40}?)\.?<\/strong>\s*/.exec(it.q) || /^\s*((?:Extra\s+)?\d{1,2}[a-z]?(?:\s?\([a-z]{1,4}\))?)[.)]\s+/i.exec(it.q);
        var head = lm ? '<span class="qn tag">' + lm[1] + '</span>' + it.q.slice(lm[0].length) : '<span class="qn">' + (k + 1) + '.</span>' + it.q;
        return '<details class="qa-item' + (lm ? ' lbl' : '') + '" data-tier="' + t + '"><summary>' + head + (t !== 'essential' ? ' ' + tierBadge(t) : '') + '</summary><div class="qa-a">' + (it.note ? '<p class="qa-note">' + it.note + '</p>' : '') + it.a + '</div></details>';
      }).join('') + '</section>' +
      '<nav class="pager" aria-label="Question sets">' +
        (i > 0 ? '<a class="prev" href="#/qa/' + (i - 1) + '"><small>Previous set</small>' + esc(QA[i - 1].title) + '</a>' : '') +
        (i < QA.length - 1 ? '<a class="next" href="#/qa/' + (i + 1) + '"><small>Next set</small>' + esc(QA[i + 1].title) + '</a>' : '') +
      '</nav>';
    setRail('Question sets', tabs);
    $('#openAll').addEventListener('click', function () { $$('.qa-item', view).forEach(function (d) { d.open = true; }); });
    $('#closeAll').addEventListener('click', function () { $$('.qa-item', view).forEach(function (d) { d.open = false; }); });
    return g;
  }

  /* ---------- quiz ---------- */
  var quiz = null;
  function stats() { return store('stats') || {}; }
  function renderQuizSetup(query) {
    var st = stats();
    var sel = query.lesson ? [query.lesson] : [];
    var type = 'both', count = 20, kind = query.kind || 'both', exam = ALL;
    var byLesson = LESSON_IDS.concat(mixIds()).map(function (id) {
      var qs = QUIZ.filter(function (q) { return q.lesson === id; });
      var seen = 0, right = 0;
      qs.forEach(function (q) { var s = st[q.id]; if (s) { seen++; if (s.last) right++; } });
      return { id: id, total: qs.length, seen: seen, right: right };
    });
    var missedIds = Object.keys(st).filter(function (k) { return st[k] && st[k].last === false; });
    var groups = ALL ? unitList().map(function (u) { return { label: u.code + ': ' + u.title, ids: u.lessons.map(function (l) { return l.id; }).concat(['mix-' + u.key]) }; })
      : [{ label: '', ids: LESSON_IDS.concat(['mix']) }];
    view.innerHTML = '<h1>' + (ALL ? 'All-units test' : 'Practice quiz') + '</h1>' +
      '<p class="lede">' + QUIZ.length + ' multiple-choice and true/false questions' + (ALL ? ' from every unit. Pick units or lessons, or leave them all off for a full mixed test.' : '. You get the answer and an explanation right after each one.') + '</p>' +
      '<div class="quiz-panel">' +
        '<span class="field-label">' + (ALL ? 'Units and lessons' : 'Lessons') + '</span>' +
        '<div id="qLessons">' + groups.map(function (g, gi) {
          return (g.label ? '<p class="chip-group"><span>' + esc(g.label) + '</span><button class="linkish" data-group="' + gi + '">Select all</button></p>' : '') +
            '<div class="chips" data-group="' + gi + '">' + g.ids.map(function (id) {
              var n = QUIZ.filter(function (q) { return q.lesson === id; }).length;
              if (!n && ALL) return '';
              return '<button class="fchip" data-l="' + id + '" aria-pressed="' + (sel.indexOf(id) > -1) + '">' + (/^mix/.test(id) ? 'Whole unit' : id + ' ' + esc(LESSON_META[id].title)) + '</button>';
            }).join('') + '</div>';
        }).join('') + '</div>' +
        '<p class="muted" style="font-size:14px;margin-top:-6px">Leave all unselected to use every ' + (ALL ? 'unit' : 'lesson') + '.</p>' +
        '<span class="field-label">Feedback</span>' +
        '<div class="chips" id="qExam"><button class="fchip" data-x="0" aria-pressed="' + !exam + '">After each question</button><button class="fchip" data-x="1" aria-pressed="' + exam + '">At the end (test conditions)</button></div>' +
        '<span class="field-label">Kind</span>' +
        '<div class="chips" id="qKind">' + [['both', 'Both'], ['knowledge', 'Concepts: forms, definitions, reasoning'], ['applied', 'Calculations: find, convert, compute']].map(function (k) {
          var c = QUIZ.filter(function (q) { return k[0] === 'both' || kindOf(q) === k[0]; }).length;
          return '<button class="fchip" data-k="' + k[0] + '" aria-pressed="' + (kind === k[0]) + '">' + k[1] + ' <span class="muted">' + c + '</span></button>';
        }).join('') + '</div>' +
        '<span class="field-label">Question type</span>' +
        '<div class="chips" id="qType"><button class="fchip" data-t="both" aria-pressed="true">Both</button><button class="fchip" data-t="mcq" aria-pressed="false">Multiple choice</button><button class="fchip" data-t="tf" aria-pressed="false">True / false</button></div>' +
        '<span class="field-label">Depth</span>' +
        '<p class="muted" style="font-size:15px;margin:0">Using <strong>' + { essential: 'Essential only', likely: 'Essential + Likely', extra: 'Everything' }[getDepth()] + '</strong> (' + QUIZ.filter(function (q) { return visible(tierOf(q)); }).length + ' questions). Change it under <em>How much to show</em> in the menu.</p>' +
        '<span class="field-label">Length</span>' +
        '<div class="chips" id="qCount">' + [10, 20, 40, 0].map(function (c) { return '<button class="fchip" data-c="' + c + '" aria-pressed="' + (c === 20) + '">' + (c ? c + ' questions' : 'Everything') + '</button>'; }).join('') + '</div>' +
        '<div class="toolbar" style="margin-top:22px"><button class="btn" id="qStart">Start quiz</button>' +
          (missedIds.length ? '<button class="btn ghost" id="qMissed">Retry the ' + missedIds.length + ' I last got wrong</button>' : '') + '</div>' +
      '</div>' +
      (Object.keys(st).length ? '<h3>Your progress</h3><div class="bars">' + byLesson.filter(function (b) { return b.total; }).map(function (b) {
        var pct = b.seen ? Math.round(100 * b.right / b.seen) : 0;
        return '<div class="bar-row" data-stage="' + stageOf(b.id) + '"><span>' + esc(lessonLabel(b.id)) + '</span><span class="bar"><i style="width:' + pct + '%;background:var(--accent)"></i></span><span>' + (b.seen ? pct + '%' : '–') + '</span></div>';
      }).join('') + '</div><p class="muted" style="font-size:14px">Based on your latest answer to each question you have seen. Saved in this browser only. <button class="btn ghost" id="qReset" style="padding:3px 10px;font-size:13px">Reset progress</button></p>' : '');

    $$('#qLessons .fchip', view).forEach(function (b) { b.addEventListener('click', function () { b.setAttribute('aria-pressed', String(b.getAttribute('aria-pressed') !== 'true')); }); });
    function single(groupSel, cb) { $$(groupSel + ' .fchip', view).forEach(function (b) { b.addEventListener('click', function () { $$(groupSel + ' .fchip', view).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); b.setAttribute('aria-pressed', 'true'); cb(b); }); }); }
    single('#qType', function (b) { type = b.getAttribute('data-t'); });
    single('#qKind', function (b) { kind = b.getAttribute('data-k'); });
    single('#qExam', function (b) { exam = b.getAttribute('data-x') === '1'; });
    $$('#qLessons .linkish', view).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var chips = $$('.chips[data-group="' + btn.getAttribute('data-group') + '"] .fchip', view);
        var on = chips.some(function (c) { return c.getAttribute('aria-pressed') !== 'true'; });
        chips.forEach(function (c) { c.setAttribute('aria-pressed', String(on)); });
        btn.textContent = on ? 'Clear' : 'Select all';
      });
    });
    single('#qCount', function (b) { count = +b.getAttribute('data-c'); });
    $('#qStart').addEventListener('click', function () {
      var ls = $$('#qLessons .fchip[aria-pressed="true"]', view).map(function (b) { return b.getAttribute('data-l'); });
      var pool = QUIZ.filter(function (q) { return visible(tierOf(q)) && (kind === 'both' || kindOf(q) === kind) && (!ls.length || ls.indexOf(q.lesson) > -1) && (type === 'both' || q.type === type); });
      pool = shuffle(pool); if (count) pool = pool.slice(0, count);
      startQuiz(pool, exam);
    });
    var m = $('#qMissed'); if (m) m.addEventListener('click', function () { startQuiz(shuffle(QUIZ.filter(function (q) { return missedIds.indexOf(q.id) > -1; }))); });
    var r = $('#qReset'); if (r) r.addEventListener('click', function () { store('stats', {}); renderQuizSetup(query); });
  }

  function startQuiz(pool, exam) {
    if (!pool.length) { view.insertAdjacentHTML('beforeend', '<p class="empty">No questions match those filters. Pick another lesson or type.</p>'); return; }
    quiz = { pool: pool, i: 0, answers: [], exam: !!exam };
    showQuestion();
  }

  function showQuestion() {
    var q = quiz.pool[quiz.i];
    view.setAttribute('data-stage', stageOf(q.lesson));
    var opts = q.type === 'tf' ? ['True', 'False'] : q.options;
    var keys = q.type === 'tf' ? ['T', 'F'] : ['A', 'B', 'C', 'D'];
    view.innerHTML = '<h2>Practice quiz</h2><div class="quiz-panel">' +
      '<div class="quiz-top"><span>Question ' + (quiz.i + 1) + ' of ' + quiz.pool.length + '</span><span>' + (kindOf(q) === 'applied' ? 'Calculation · ' : 'Concept · ') + esc(lessonLabel(q.lesson)) + '</span></div>' +
      '<div class="progress"><i style="width:' + (100 * quiz.i / quiz.pool.length) + '%"></i></div>' +
      '<p class="q-text">' + (q.type === 'tf' ? '<span class="pill" style="margin-right:8px">True or false</span>' : '') + q.q + (tierOf(q) !== 'essential' ? ' ' + tierBadge(tierOf(q)) : '') + '</p>' +
      '<div class="opts' + (q.type === 'tf' ? ' tf-row' : '') + '">' + opts.map(function (o, i) { return '<button class="opt" data-i="' + i + '"><span class="k">' + keys[i] + '</span>' + o + '</button>'; }).join('') + '</div>' +
      '<div id="fb"></div>' +
      '<div class="quiz-actions"><button class="btn ghost" id="qQuit">End quiz</button><button class="btn" id="qNext" hidden>' + (quiz.i + 1 < quiz.pool.length ? 'Next question' : 'See results') + '</button></div>' +
      '<p class="kbd-hint">Keyboard: ' + (q.type === 'tf' ? 'T or F' : '1–4 or A–D') + ' to answer, Enter for next.</p>' +
      '</div>';
    $$('.opt', view).forEach(function (b) { b.addEventListener('click', function () { answer(+b.getAttribute('data-i')); }); });
    $('#qNext').addEventListener('click', nextQ);
    $('#qQuit').addEventListener('click', results);
  }

  function answer(i) {
    var q = quiz.pool[quiz.i];
    if (quiz.answers[quiz.i] !== undefined) return;
    var correctIdx = q.type === 'tf' ? (q.answer ? 0 : 1) : q.answer;
    var ok = i === correctIdx;
    quiz.answers[quiz.i] = i;
    var st = stats(); var s = st[q.id] || { n: 0, c: 0 }; s.n++; if (ok) s.c++; s.last = ok; st[q.id] = s; store('stats', st);
    if (quiz.exam) {
      $$('.opt', view).forEach(function (b, j) { b.disabled = true; if (j === i) b.classList.add('chosen'); });
      var nx = $('#qNext'); nx.hidden = false; nx.focus();
      return;
    }
    $$('.opt', view).forEach(function (b, j) { b.disabled = true; if (j === correctIdx) b.classList.add('right'); else if (j === i) b.classList.add('wrong'); });
    $('#fb').innerHTML = '<div class="feedback ' + (ok ? 'ok' : 'no') + '"><p class="verdict">' + (ok ? 'Correct' : 'Not quite') + '</p><p>' + (q.explain || '') + '</p></div>';
    var n = $('#qNext'); n.hidden = false; n.focus();
  }
  function nextQ() { if (quiz.i + 1 < quiz.pool.length) { quiz.i++; showQuestion(); window.scrollTo(0, 0); } else results(); }

  function results() {
    var done = quiz.answers.filter(function (a) { return a !== undefined; }).length;
    var right = 0, wrong = [];
    var per = {};
    quiz.pool.forEach(function (q, i) {
      var a = quiz.answers[i]; if (a === undefined) return;
      var c = q.type === 'tf' ? (q.answer ? 0 : 1) : q.answer;
      per[q.lesson] = per[q.lesson] || { n: 0, c: 0 }; per[q.lesson].n++;
      if (a === c) { right++; per[q.lesson].c++; } else wrong.push({ q: q, a: a, c: c });
    });
    var pct = done ? Math.round(100 * right / done) : 0;
    view.removeAttribute('data-stage');
    var label = function (q, i) { return q.type === 'tf' ? (i === 0 ? 'True' : 'False') : q.options[i]; };
    view.innerHTML = '<h2>Your results</h2><div class="quiz-panel">' +
      '<p class="score-big">' + right + ' / ' + done + '</p><p class="muted">' + pct + '% correct' + (done < quiz.pool.length ? ' (ended early)' : '') + '</p>' +
      '<div class="bars">' + Object.keys(per).sort().map(function (id) {
        var p = Math.round(100 * per[id].c / per[id].n);
        return '<div class="bar-row" data-stage="' + stageOf(id) + '"><span>' + esc(lessonLabel(id)) + '</span><span class="bar"><i style="width:' + p + '%;background:var(--accent)"></i></span><span>' + per[id].c + '/' + per[id].n + '</span></div>';
      }).join('') + '</div>' +
      '<div class="toolbar">' + (wrong.length ? '<button class="btn" id="rRetry">Retry the ' + wrong.length + ' I missed</button>' : '') + '<a class="btn ghost" href="' + (ALL ? '#/' : '#/quiz') + '" id="rNew">New ' + (ALL ? 'test' : 'quiz') + '</a></div>' +
      '</div>' +
      (wrong.length ? '<h3>Review what you missed</h3>' + wrong.map(function (w) {
        return '<div class="review-item" data-stage="' + stageOf(w.q.lesson) + '"><p class="q-text">' + w.q.q + '</p><p class="your">You said: ' + label(w.q, w.a) + '</p><p class="correct">Answer: ' + label(w.q, w.c) + '</p><p>' + (w.q.explain || '') + '</p><p>' + (/^mix/.test(w.q.lesson) ? '' : '<a href="' + lessonHref(w.q.lesson) + '">Review lesson ' + w.q.lesson + '</a>') + '</p></div>';
      }).join('') : '');
    var rr = $('#rRetry'); if (rr) rr.addEventListener('click', function () { startQuiz(shuffle(wrong.map(function (w) { return w.q; })), false); });
    var rn = $('#rNew'); if (rn && ALL) rn.addEventListener('click', function (e) { e.preventDefault(); route(); });
    window.scrollTo(0, 0);
  }

  document.addEventListener('keydown', function (e) {
    if (!quiz || !$('.opt', view) || e.metaKey || e.ctrlKey || e.altKey) return;
    if (/input|textarea/i.test((e.target.tagName || ''))) return;
    var q = quiz.pool[quiz.i]; var k = e.key.toLowerCase();
    if (k === 'enter') { var n = $('#qNext'); if (n && !n.hidden && document.activeElement !== n) { e.preventDefault(); nextQ(); } return; }
    var map = q.type === 'tf' ? { t: 0, f: 1, '1': 0, '2': 1 } : { a: 0, b: 1, c: 2, d: 3, '1': 0, '2': 1, '3': 2, '4': 3 };
    if (k in map) answer(map[k]);
  });

  /* ---------- apply & extend ---------- */
  function applyTabs(sel) {
    var ids = ['all'].concat(LESSON_IDS, ['mix']).filter(function (id) { return id === 'all' || EXT.some(function (x) { return x.lesson === id; }); });
    return ids.map(function (id) { return { href: '#/apply' + (id === 'all' ? '' : '?lesson=' + id), label: id === 'all' ? 'All' : id === 'mix' ? 'Whole unit' : id + ' ' + esc(LESSON_META[id].title), current: sel === id }; });
  }
  function renderApply(query) {
    var sel = query.lesson || 'all';
    var items = EXT.filter(function (x) { return sel === 'all' || x.lesson === sel; });
    var levelName = { apply: 'Apply', analyze: 'Analyze', extend: 'Beyond the notes' };
    view.innerHTML = '<h1>Apply &amp; extend</h1>' +
      '<p class="lede">The thinking questions that come at the end of a test. Work it out on paper first, use a hint if you are stuck, then compare with the full solution.</p>' +
      (items.length ? items.map(function (x) {
        var saved = store('ans-' + x.id) || '';
        return '<article class="x-card" data-stage="' + stageOf(x.lesson) + '" data-id="' + x.id + '" data-tier="' + tierOf(x) + '">' +
          '<div class="x-meta">' + tierBadge(tierOf(x)) + '<span class="pill">' + (levelName[x.level] || x.level) + '</span><span>' + esc(lessonLabel(x.lesson)) + '</span>' + (x.marks ? '<span>' + x.marks + ' marks</span>' : '') + '</div>' +
          '<h3>' + esc(x.title) + '</h3>' + x.prompt +
          '<label class="field-label" for="ta-' + x.id + '">Your notes</label><textarea id="ta-' + x.id + '" placeholder="Jot your answers or working here. It is saved in this browser.">' + esc(saved) + '</textarea>' +
          '<div class="x-hints"></div>' +
          '<div class="toolbar">' + (x.hints && x.hints.length ? '<button class="btn ghost" data-act="hint">Show a hint</button>' : '') + '<button class="btn" data-act="answer">Show full solution</button></div>' +
          '<div class="x-answer" hidden><p class="x-label">Full solution</p>' + x.answer + '</div>' +
          '</article>';
      }).join('') : '<p class="empty">No questions for this lesson yet.</p>');
    setRail('By lesson', applyTabs(sel));
    $$('.x-card', view).forEach(function (card) {
      var x = EXT.filter(function (e) { return e.id === card.getAttribute('data-id'); })[0];
      var shown = 0;
      var ta = $('textarea', card);
      ta.addEventListener('input', function () { store('ans-' + x.id, ta.value); });
      var hb = $('[data-act="hint"]', card);
      if (hb) hb.addEventListener('click', function () {
        if (shown < x.hints.length) { $('.x-hints', card).insertAdjacentHTML('beforeend', '<p class="x-hint"><strong>Hint ' + (shown + 1) + ':</strong> ' + x.hints[shown] + '</p>'); shown++; }
        if (shown >= x.hints.length) { hb.disabled = true; hb.textContent = 'No more hints'; } else hb.textContent = 'Show another hint';
      });
      var ab = $('[data-act="answer"]', card);
      ab.addEventListener('click', function () { var box = $('.x-answer', card); box.hidden = !box.hidden; ab.textContent = box.hidden ? 'Show full solution' : 'Hide full solution'; });
    });
  }

  /* ---------- beyond the notes ---------- */
  function renderBeyond() {
    view.innerHTML = '<h1>Beyond the notes</h1>' +
      '<p class="lede">The notes can\'t hold everything said in class, and they skip some of the reasoning. These topics fill those gaps. ' + tierBadge('likely') + ' topics were probably mentioned in class or could show up on the test; ' + tierBadge('extra') + ' topics are for full understanding and extension questions.</p>' +
      (getDepth() === 'essential' ? '<p class="empty">You are in Essential depth, so this section is hidden. Switch <em>How much to show</em> to <strong>+ Likely</strong> or <strong>Everything</strong> to see it.</p>' : '') +
      (EXTRA.length ? LESSON_IDS.concat(['mix']).map(function (id) {
        var items = EXTRA.filter(function (e) { return e.lesson === id; });
        if (!items.length) return '';
        return '<h3>' + esc(id === 'mix' ? 'Whole unit' : id + ' ' + LESSON_META[id].title) + '</h3><div class="beyond-list">' + items.map(function (e) {
          return '<a href="#/beyond/' + e.id + '" data-stage="' + stageOf(e.lesson) + '" data-tier="' + tierOf(e) + '"><b>' + e.title + '</b>' + tierBadge(tierOf(e)) + (e.why ? '<span class="why">' + e.why + '</span>' : '') + '</a>';
        }).join('') + '</div>';
      }).join('') : '<p class="empty">This section is still being written.</p>');
  }
  function beyondTabs(cur) { return EXTRA.map(function (e) { return { href: '#/beyond/' + e.id, label: e.title, tier: tierOf(e), current: e.id === cur }; }); }
  function renderBeyondTopic(id) {
    var i = -1; EXTRA.forEach(function (e, j) { if (e.id === id) i = j; });
    var e = EXTRA[i];
    if (!e) { renderBeyond(); return; }
    view.setAttribute('data-stage', stageOf(e.lesson));
    var prev = EXTRA[i - 1], next = EXTRA[i + 1];
    view.innerHTML = '<header class="lesson-head"><div class="lesson-kicker"><a href="#/beyond">Beyond the notes</a><span>Extends ' + esc(lessonLabel(e.lesson)) + '</span>' + tierBadge(tierOf(e)) + '</div>' +
      '<h1>' + e.title + '</h1>' + (e.why ? '<p class="lede">' + e.why + '</p>' : '') + '</header>' +
      '<article class="lesson-body beyond-body">' + e.html + '</article>' +
      '<nav class="pager" aria-label="Topics">' +
        (prev ? '<a class="prev" href="#/beyond/' + prev.id + '"><small>Previous topic</small>' + prev.title + '</a>' : '') +
        (next ? '<a class="next" href="#/beyond/' + next.id + '"><small>Next topic</small>' + next.title + '</a>' : '') +
      '</nav>';
    setRail('Topics', beyondTabs(id));
  }

  /* ---------- glossary ---------- */
  function renderGlossary() {
    view.innerHTML = '<h1>Glossary</h1><p class="lede">' + GLOSSARY.length + ' terms from the unit. Search by name or by any word in the definition.</p>' +
      '<label class="field-label" for="gq">Search terms</label><input type="search" id="gq" placeholder="Try “normal”, “skew” or “span”" autocomplete="off">' +
      lessonChips('all', false) + '<dl class="gloss" id="gl"></dl>';
    var lesson = 'all';
    function draw() {
      var q = $('#gq').value.trim().toLowerCase();
      var rows = GLOSSARY.filter(function (g) {
        if (lesson !== 'all' && g.lesson !== lesson) return false;
        if (!q) return true;
        return (g.term + ' ' + g.def).replace(/<[^>]+>/g, '').toLowerCase().indexOf(q) > -1;
      });
      $('#gl').innerHTML = rows.length ? rows.map(function (g) {
        return '<div class="gloss-row" data-stage="' + stageOf(g.lesson) + '" data-tier="' + tierOf(g) + '"><dt>' + g.term + (tierOf(g) !== 'essential' ? ' ' + tierBadge(tierOf(g)) : '') + (g.lesson ? '<small><a href="#/lesson/' + g.lesson + '">' + esc(lessonLabel(g.lesson)) + '</a></small>' : '') + '</dt><dd>' + g.def + '</dd></div>';
      }).join('') : '<p class="empty">No terms match “' + esc(q) + '”. Try a shorter word.</p>';
    }
    $('#gq').addEventListener('input', draw);
    $$('.fchip', view).forEach(function (b) { b.addEventListener('click', function () { $$('.fchip', view).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); }); b.setAttribute('aria-pressed', 'true'); lesson = b.getAttribute('data-l'); draw(); }); });
    draw();
  }

  applyDepth();
  route();
})();
