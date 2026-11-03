/* Lines & planes lab: type a line or plane, see it drawn in 2D/3D, and read every equation form.
   Registers window.LAB; app.js routes #/lab here. Math output is typeset by app.js. */
(function () {
  'use strict';

  /* ---------- numbers ---------- */
  function parseNum(s) {
    s = String(s == null ? '' : s).trim().replace(/[−–]/g, '-');
    if (!s) return 0;
    var m = /^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/.exec(s);
    if (m) { var d = parseFloat(m[2]); return d ? parseFloat(m[1]) / d : NaN; }
    return /^-?(\d+\.?\d*|\.\d+)$/.test(s) ? parseFloat(s) : NaN;
  }
  function near(a, b) { return Math.abs(a - b) < 1e-9; }
  function isInt(x) { return near(x, Math.round(x)); }
  function gcd(a, b) { a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b)); while (b) { var t = a % b; a = b; b = t; } return a; }
  function fracParts(x) {         // [p, q] when x is a fraction with a small denominator
    for (var q = 1; q <= 24; q++) { var p = x * q; if (Math.abs(p - Math.round(p)) < 1e-7) return [Math.round(p), q]; }
    return null;
  }
  function fmt(x) {                // for TeX
    var f = fracParts(x);
    if (f) return f[1] === 1 ? String(f[0]) : (f[0] < 0 ? '-' : '') + '\\frac{' + Math.abs(f[0]) + '}{' + f[1] + '}';
    return String(Math.round(x * 1000) / 1000);
  }
  function fmtPlain(x) {           // for canvas labels
    var f = fracParts(x);
    if (f) return f[1] === 1 ? String(f[0]) : f[0] + '/' + f[1];
    return String(Math.round(x * 100) / 100);
  }
  function ratTex(p, q) {           // p/q for numbers; exact when both are integers
    if (near(q, 0)) return '\\text{undefined}';
    if (isInt(p) && isInt(q)) {
      p = Math.round(p); q = Math.round(q);
      var g = gcd(p, q) || 1; p /= g; q /= g;
      if (q < 0) { p = -p; q = -q; }
      if (q === 1) return String(p);
      return (p < 0 ? '-' : '') + '\\frac{' + Math.abs(p) + '}{' + q + '}';
    }
    return fmt(p / q);
  }
  function sqrtTex(n) {             // simplified √n for a non-negative integer, else decimal
    if (!isInt(n)) return '\\sqrt{' + fmt(n) + '}';
    n = Math.round(n);
    if (n === 0) return '0';
    var a = 1, b = n;
    for (var k = 2; k * k <= b; k++) while (b % (k * k) === 0) { b /= k * k; a *= k; }
    if (b === 1) return String(a);
    return (a === 1 ? '' : a) + '\\sqrt{' + b + '}';
  }
  function vecTex(v) { return '(' + v.map(fmt).join(', ') + ')'; }
  // c0 + c1·t, written the way you would by hand
  function affine(c0, c1, t) {
    var s = '';
    if (!near(c0, 0)) s = fmt(c0);
    if (near(c1, 0)) return s || '0';
    var k = near(Math.abs(c1), 1) ? '' : fmt(Math.abs(c1));
    if (!s) return (c1 < 0 ? '-' : '') + k + t;
    return s + (c1 < 0 ? ' - ' : ' + ') + k + t;
  }
  function shiftTex(v, c) { return near(c, 0) ? v : v + (c > 0 ? ' - ' + fmt(c) : ' + ' + fmt(-c)); }
  // A x + B y + C z + D, skipping zero terms
  function linTex(coefs, vars) {
    var s = '';
    coefs.forEach(function (c, i) {
      if (near(c, 0)) return;
      var v = vars[i] || '';
      var mag = (v && near(Math.abs(c), 1)) ? '' : fmt(Math.abs(c));
      if (!s) s = (c < 0 ? '-' : '') + mag + v;
      else s += (c < 0 ? ' - ' : ' + ') + mag + v;
    });
    return s || '0';
  }
  function scaleNice(v) {           // divide integer vector by gcd, make the first non-zero positive
    if (!v.every(isInt)) return v.slice();
    var g = v.reduce(function (a, x) { return gcd(a, x); }, 0) || 1;
    var w = v.map(function (x) { return Math.round(x) / g; });
    var first = w.filter(function (x) { return x !== 0; })[0];
    return first < 0 ? w.map(function (x) { return -x || 0; }) : w;
  }
  function sub(a, b) { return a.map(function (x, i) { return x - b[i]; }); }
  function add(a, b) { return a.map(function (x, i) { return x + b[i]; }); }
  function mul(a, k) { return a.map(function (x) { return x * k; }); }
  function dot(a, b) { return a.reduce(function (s, x, i) { return s + x * b[i]; }, 0); }
  function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function norm(a) { return Math.sqrt(dot(a, a)); }
  function isZero(v) { return v.every(function (x) { return near(x, 0); }); }

  /* ---------- state ---------- */
  var KEY = 'mcv4u-lab';
  var DEFAULTS = {
    mode: 'line2',
    line2: { p: ['2', '1'], m: ['3', '-2'] },
    line3: { p: ['1', '-2', '3'], m: ['2', '1', '-1'] },
    plane: { p: ['1', '2', '1'], a: ['2', '0', '1'], b: ['0', '3', '-1'] },
    dist2: { abc: ['3', '4', '-12'], q: ['5', '6'] },
    dist3: { p: ['1', '0', '2'], m: ['2', '-1', '2'], q: ['4', '3', '-1'] }
  };
  var state;
  try { state = JSON.parse(localStorage.getItem(KEY)); } catch (e) { state = null; }
  if (!state || !state.mode) state = JSON.parse(JSON.stringify(DEFAULTS));
  Object.keys(DEFAULTS).forEach(function (k) { if (!state[k]) state[k] = JSON.parse(JSON.stringify(DEFAULTS[k])); });
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  var MODES = [
    { key: 'line2', label: 'Line in R²' },
    { key: 'line3', label: 'Line in R³' },
    { key: 'plane', label: 'Plane in R³' },
    { key: 'dist2', label: 'Distance in R²' },
    { key: 'dist3', label: 'Distance in R³' }
  ];
  var FIELDS = {
    line2: [['p', 'Point P₀', 2], ['m', 'Direction m', 2]],
    line3: [['p', 'Point P₀', 3], ['m', 'Direction m', 3]],
    plane: [['p', 'Point P₀', 3], ['a', 'Direction a', 3], ['b', 'Direction b', 3]],
    dist2: [['abc', 'Line A, B, C', 3], ['q', 'Point P', 2]],
    dist3: [['p', 'Line point P₀', 3], ['m', 'Direction m', 3], ['q', 'Point P', 3]]
  };
  var PH = { 2: ['x', 'y'], 3: ['x', 'y', 'z'] };

  /* ---------- page ---------- */
  var root, canvas, ctx, out, cam = { az: 0.62, el: 0.38 }, drag = null, lastModel = null;

  function render(view) {
    view.removeAttribute('data-stage');
    view.innerHTML = '<header class="lesson-head"><div class="lesson-kicker"><span>Interactive</span><span>Every lesson in the unit</span></div>' +
      '<h1>Lines &amp; planes lab</h1>' +
      '<p class="lede">Type a point and a direction (or two, for a plane). The lab draws it and writes it out in every form from the unit, so you can check your own conversions. Fractions like 1/2 work.</p></header>' +
      '<div class="chips lab-modes" role="group" aria-label="What to draw">' + MODES.map(function (m) {
        return '<button class="fchip" data-mode="' + m.key + '" aria-pressed="' + (state.mode === m.key) + '">' + m.label + '</button>';
      }).join('') + '</div>' +
      '<div class="lab"><div class="lab-controls" id="labControls"></div>' +
      '<div><div class="lab-stage"><canvas id="labCanvas" width="800" height="600" aria-label="Drawing of the line or plane"></canvas><span class="lab-hint" id="labHint"></span></div>' +
      '<div class="lab-legend" id="labLegend"></div></div></div>' +
      '<div class="lab-out" id="labOut" aria-live="polite"></div>';
    root = view;
    canvas = view.querySelector('#labCanvas');
    ctx = canvas.getContext('2d');
    out = view.querySelector('#labOut');
    Array.prototype.forEach.call(view.querySelectorAll('[data-mode]'), function (b) {
      b.addEventListener('click', function () {
        state.mode = b.getAttribute('data-mode'); save();
        Array.prototype.forEach.call(view.querySelectorAll('[data-mode]'), function (x) { x.setAttribute('aria-pressed', String(x === b)); });
        drawControls(); update();
      });
    });
    canvas.addEventListener('pointerdown', function (e) { if (is3D()) { drag = { x: e.clientX, y: e.clientY }; canvas.setPointerCapture(e.pointerId); } });
    canvas.addEventListener('pointermove', function (e) {
      if (!drag) return;
      cam.az -= (e.clientX - drag.x) * 0.008;
      cam.el = Math.max(-1.45, Math.min(1.45, cam.el + (e.clientY - drag.y) * 0.008));
      drag = { x: e.clientX, y: e.clientY };
      paint();
    });
    canvas.addEventListener('pointerup', function () { drag = null; });
    canvas.addEventListener('pointercancel', function () { drag = null; });
    drawControls(); update();
  }
  function is3D() { return state.mode === 'line3' || state.mode === 'plane' || state.mode === 'dist3'; }

  function drawControls() {
    var box = root.querySelector('#labControls');
    var mode = state.mode, vals = state[mode];
    box.innerHTML = FIELDS[mode].map(function (f) {
      var names = mode === 'dist2' && f[0] === 'abc' ? ['A', 'B', 'C'] : PH[f[2]];
      return '<div class="lab-row' + (f[2] === 2 ? ' r2' : '') + '"><label>' + f[1] + '</label>' + names.map(function (n, i) {
        return '<input inputmode="decimal" data-f="' + f[0] + '" data-i="' + i + '" value="' + MCVesc(vals[f[0]][i]) + '" aria-label="' + f[1] + ' ' + n + '" placeholder="' + n + '">';
      }).join('') + '</div>';
    }).join('') +
      '<div class="toolbar" style="margin:4px 0 0"><button class="btn ghost" id="labReset">Reset example</button>' + (is3D() ? '<button class="btn ghost" id="labView">Reset view</button>' : '') + '</div>' +
      '<p class="lab-note">' + {
        line2: 'A line in R² needs a point and a direction. The normal and slope come from the direction.',
        line3: 'A line in R³ has vector, parametric and symmetric forms, but no Cartesian equation.',
        plane: 'Two non-collinear directions span the plane; their cross product is the normal.',
        dist2: 'Line written as Ax + By + C = 0. The shortest distance is measured along the normal.',
        dist3: 'The shortest distance is the perpendicular from P to the line.'
      }[mode] + '</p>';
    Array.prototype.forEach.call(box.querySelectorAll('input'), function (inp) {
      inp.addEventListener('input', function () { state[mode][inp.getAttribute('data-f')][+inp.getAttribute('data-i')] = inp.value; save(); update(); });
    });
    box.querySelector('#labReset').addEventListener('click', function () { state[mode] = JSON.parse(JSON.stringify(DEFAULTS[mode])); save(); drawControls(); update(); });
    var rv = box.querySelector('#labView'); if (rv) rv.addEventListener('click', function () { cam = { az: 0.62, el: 0.38 }; paint(); });
    root.querySelector('#labHint').textContent = is3D() ? 'Drag to rotate' : '';
  }
  function MCVesc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  function read(f) { return state[state.mode][f].map(parseNum); }
  function bad(v) { return v.some(function (x) { return !isFinite(x); }); }

  /* ---------- compute + describe ---------- */
  function row(head, tex) { return '<tr><th>' + head + '</th><td>' + tex + '</td></tr>'; }
  function table(rows) { return '<div class="table-wrap"><table class="data"><tbody>' + rows.join('') + '</tbody></table></div>'; }
  function warnBox(msg) { return '<div class="callout warn"><p class="callout-title">Check your input</p><p>' + msg + '</p></div>'; }

  function update() {
    var mode = state.mode, html = '', model = { mode: mode };
    var legend = [];
    try {
      if (mode === 'line2') {
        var p = read('p'), m = read('m');
        if (bad(p) || bad(m)) throw 'Every box needs a number (fractions like 3/4 are fine).';
        if (isZero(m)) throw 'The direction vector cannot be the zero vector (0, 0): it has no direction.';
        var n = scaleNice([m[1], -m[0]]), C = -(n[0] * p[0] + n[1] * p[1]);
        var rows = [
          row('Vector', '\\(\\vec r = ' + vecTex(p) + ' + t' + vecTex(m) + ',\\ t \\in \\mathbb{R}\\)'),
          row('Parametric', '\\(\\begin{aligned} x &= ' + affine(p[0], m[0], 't') + ' \\\\ y &= ' + affine(p[1], m[1], 't') + ' \\end{aligned},\\quad t \\in \\mathbb{R}\\)'),
          row('Symmetric', near(m[0], 0) || near(m[1], 0) ? 'None: a component of \\(\\vec m\\) is 0, so the line is ' + (near(m[0], 0) ? 'vertical, \\(x = ' + fmt(p[0]) + '\\)' : 'horizontal, \\(y = ' + fmt(p[1]) + '\\)') + '.' :
            '\\(\\dfrac{' + shiftTex('x', p[0]) + '}{' + fmt(m[0]) + '} = \\dfrac{' + shiftTex('y', p[1]) + '}{' + fmt(m[1]) + '}\\)'),
          row('Cartesian', '\\(' + linTex([n[0], n[1], C], ['x', 'y', '']) + ' = 0\\)'),
          row('Normal', '\\(\\vec n = ' + vecTex(n) + '\\) (swap the components of \\(\\vec m\\) and change one sign)'),
          row('Slope', near(m[0], 0) ? 'Undefined (vertical line)' : '\\(\\dfrac{b}{a} = ' + ratTex(m[1], m[0]) + '\\), so \\(y = ' + (function () {
            var s = ratTex(m[1], m[0]), k = p[1] - (m[1] / m[0]) * p[0];
            var kt = isInt(m[0]) && isInt(m[1]) && isInt(p[0]) && isInt(p[1]) ? ratTex(p[1] * m[0] - m[1] * p[0], m[0]) : fmt(k);
            var xs = s === '0' ? '' : (s === '1' ? 'x' : s === '-1' ? '-x' : s + 'x');
            if (!xs) return kt;
            return xs + (kt === '0' ? '' : (kt.charAt(0) === '-' ? ' - ' + kt.slice(1) : ' + ' + kt));
          })() + '\\)')
        ];
        var xi = near(n[0], 0) ? null : -C / n[0], yi = near(n[1], 0) ? null : -C / n[1];
        rows.push(row('Intercepts', (xi === null ? 'no x-intercept' : '\\(x\\)-int \\(' + ratTex(-C, n[0]) + '\\)') + ', ' + (yi === null ? 'no y-intercept' : '\\(y\\)-int \\(' + ratTex(-C, n[1]) + '\\)')));
        html = '<h3>All forms of this line</h3>' + table(rows);
        model.p = p; model.m = m; model.n = n;
        legend = [['blue', 'line'], ['amber', 'direction m'], ['teal', 'position vector r₀'], ['magenta', 'normal n']];
      } else if (mode === 'line3') {
        var p3 = read('p'), m3 = read('m');
        if (bad(p3) || bad(m3)) throw 'Every box needs a number (fractions like 3/4 are fine).';
        if (isZero(m3)) throw 'The direction vector cannot be (0, 0, 0).';
        var V = ['x', 'y', 'z'];
        var nz = [0, 1, 2].filter(function (i) { return !near(m3[i], 0); });
        var zs = [0, 1, 2].filter(function (i) { return near(m3[i], 0); });
        var sym = nz.length === 1 ? 'Only one non-zero component, so there is nothing to set equal: \\(' + zs.map(function (i) { return V[i] + ' = ' + fmt(p3[i]); }).join(',\\ ') + '\\), and \\(' + V[nz[0]] + '\\) is free.' :
          '\\(' + nz.map(function (i) { return '\\dfrac{' + shiftTex(V[i], p3[i]) + '}{' + fmt(m3[i]) + '}'; }).join(' = ') + '\\)' + (zs.length ? ',\\ \\(' + zs.map(function (i) { return V[i] + ' = ' + fmt(p3[i]); }).join(',\\ ') + '\\)' : '');
        var tr = [];
        [0, 1, 2].forEach(function (i) {
          var plane = ['yz', 'xz', 'xy'][i];
          if (near(m3[i], 0)) { tr.push(plane + '-plane: ' + (near(p3[i], 0) ? 'the line lies in it' : 'none (parallel)')); return; }
          var t = -p3[i] / m3[i], pt = add(p3, mul(m3, t));
          tr.push(plane + '-plane at \\(t = ' + ratTex(-p3[i], m3[i]) + '\\): \\(' + vecTex(pt) + '\\)');
        });
        html = '<h3>All forms of this line</h3>' + table([
          row('Vector', '\\(\\vec r = ' + vecTex(p3) + ' + t' + vecTex(m3) + ',\\ t \\in \\mathbb{R}\\)'),
          row('Parametric', '\\(\\begin{aligned} x &= ' + affine(p3[0], m3[0], 't') + ' \\\\ y &= ' + affine(p3[1], m3[1], 't') + ' \\\\ z &= ' + affine(p3[2], m3[2], 't') + ' \\end{aligned},\\quad t \\in \\mathbb{R}\\)'),
          row('Symmetric', sym),
          row('Cartesian', 'None. A line in R³ has no single normal direction, so no one equation \\(Ax + By + Cz + D = 0\\) describes it (that equation is a plane).'),
          row('Other points', '\\(t = 1:\\ ' + vecTex(add(p3, m3)) + '\\),\\ \\(t = -1:\\ ' + vecTex(sub(p3, m3)) + '\\)'),
          row('Crosses', tr.join('<br>'))
        ]);
        model.p = p3; model.m = m3;
        legend = [['blue', 'line'], ['amber', 'direction m'], ['teal', 'position vector r₀']];
      } else if (mode === 'plane') {
        var pp = read('p'), a = read('a'), b = read('b');
        if (bad(pp) || bad(a) || bad(b)) throw 'Every box needs a number (fractions like 3/4 are fine).';
        if (isZero(a) || isZero(b)) throw 'Neither direction vector can be (0, 0, 0).';
        var raw = cross(a, b);
        if (isZero(raw)) throw 'These directions are collinear (scalar multiples), so they only span a line. A plane needs two non-collinear directions.';
        var nn = scaleNice(raw), D = -dot(nn, pp);
        html = '<h3>All forms of this plane</h3>' + table([
          row('Vector', '\\(\\vec r = ' + vecTex(pp) + ' + s' + vecTex(a) + ' + t' + vecTex(b) + ',\\ s, t \\in \\mathbb{R}\\)'),
          row('Parametric', '\\(\\begin{aligned} x &= ' + affine2(pp[0], a[0], b[0]) + ' \\\\ y &= ' + affine2(pp[1], a[1], b[1]) + ' \\\\ z &= ' + affine2(pp[2], a[2], b[2]) + ' \\end{aligned},\\quad s, t \\in \\mathbb{R}\\)'),
          row('Normal', '\\(\\vec a \\times \\vec b = ' + vecTex(raw) + '\\)' + (vecTex(raw) !== vecTex(nn) ? ', simplified \\(\\vec n = ' + vecTex(nn) + '\\)' : '')),
          row('Cartesian', '\\(' + linTex([nn[0], nn[1], nn[2], D], ['x', 'y', 'z', '']) + ' = 0\\)<br><span class="muted">\\(D = -(\\vec n \\cdot \\overrightarrow{OP_0}) = -(' + [0, 1, 2].map(function (i) { return fmt(nn[i]) + '(' + fmt(pp[i]) + ')'; }).join(' + ') + ') = ' + fmt(D) + '\\)</span>'),
          row('Check', '\\(\\vec n \\cdot \\vec a = ' + fmt(dot(nn, a)) + '\\) and \\(\\vec n \\cdot \\vec b = ' + fmt(dot(nn, b)) + '\\), so \\(\\vec n\\) is perpendicular to both.'),
          row('Intercepts', [0, 1, 2].map(function (i) { return near(nn[i], 0) ? ['x', 'y', 'z'][i] + ': none' : '\\(' + ['x', 'y', 'z'][i] + ' = ' + ratTex(-D, nn[i]) + '\\)'; }).join(',\\ '))
        ]);
        model.p = pp; model.a = a; model.b = b; model.n = nn; model.D = D;
        legend = [['blue', 'plane'], ['amber', 'direction a'], ['teal', 'direction b'], ['magenta', 'normal n']];
      } else if (mode === 'dist2') {
        var abc = read('abc'), q = read('q');
        if (bad(abc) || bad(q)) throw 'Every box needs a number (fractions like 3/4 are fine).';
        if (near(abc[0], 0) && near(abc[1], 0)) throw 'A and B cannot both be 0: then Ax + By + C = 0 is not a line.';
        var A = abc[0], B = abc[1], Cc = abc[2], N = A * q[0] + B * q[1] + Cc, S = A * A + B * B;
        var tq = -N / S, foot = [q[0] + A * tq, q[1] + B * tq];
        var exactOK = [A, B, Cc, q[0], q[1]].every(isInt);
        var dTex = exactOK ? (function () { var r = sqrtTex(S); return isInt(Math.sqrt(S)) ? ratTex(Math.abs(N), Math.sqrt(S)) : '\\dfrac{' + fmt(Math.abs(N)) + '}{' + r + '}'; })() : fmt(Math.abs(N) / Math.sqrt(S));
        html = '<h3>Distance from P to the line</h3>' + table([
          row('Line', '\\(' + linTex([A, B, Cc], ['x', 'y', '']) + ' = 0\\), normal \\(\\vec n = ' + vecTex([A, B]) + '\\)'),
          row('Formula', '\\(d = \\dfrac{|Ax_1 + By_1 + C|}{\\sqrt{A^2 + B^2}}\\)'),
          row('Substitute', '\\(d = \\dfrac{|' + fmt(A) + '(' + fmt(q[0]) + ') + ' + '(' + fmt(B) + ')(' + fmt(q[1]) + ') + (' + fmt(Cc) + ')|}{\\sqrt{(' + fmt(A) + ')^2 + (' + fmt(B) + ')^2}} = \\dfrac{' + fmt(Math.abs(N)) + '}{\\sqrt{' + fmt(S) + '}}\\)'),
          row('Distance', '\\(d = ' + dTex + (isInt(Math.abs(N) / Math.sqrt(S)) ? '' : ' \\approx ' + (Math.abs(N) / Math.sqrt(S)).toFixed(3)) + '\\)' + (near(N, 0) ? ' (P is on the line)' : '')),
          row('Closest point', '\\(Q = ' + vecTex(foot) + '\\), the foot of the perpendicular from P')
        ]);
        model.abc = abc; model.q = q; model.foot = foot;
        legend = [['blue', 'line'], ['red', 'shortest distance'], ['magenta', 'normal n']];
      } else {
        var P0 = read('p'), mm = read('m'), Q = read('q');
        if (bad(P0) || bad(mm) || bad(Q)) throw 'Every box needs a number (fractions like 3/4 are fine).';
        if (isZero(mm)) throw 'The direction vector cannot be (0, 0, 0).';
        var w = sub(Q, P0), cr = cross(w, mm), c2 = dot(cr, cr), m2 = dot(mm, mm);
        var dist = Math.sqrt(c2 / m2), tt = dot(w, mm) / m2, F = add(P0, mul(mm, tt));
        var allInt = P0.concat(mm, Q).every(isInt);
        var dExact = allInt ? (function () { var g = gcd(c2, m2) || 1, top = c2 / g, bot = m2 / g; if (bot === 1) return sqrtTex(top); return '\\sqrt{' + ratTex(top, bot) + '}'; })() : fmt(dist);
        html = '<h3>Distance from P to the line</h3>' + table([
          row('Line', '\\(\\vec r = ' + vecTex(P0) + ' + t' + vecTex(mm) + ',\\ t \\in \\mathbb{R}\\)'),
          row('Formula', '\\(d = \\dfrac{|\\overrightarrow{P_0P} \\times \\vec m|}{|\\vec m|}\\)'),
          row('Step 1', '\\(\\overrightarrow{P_0P} = ' + vecTex(Q) + ' - ' + vecTex(P0) + ' = ' + vecTex(w) + '\\)'),
          row('Step 2', '\\(\\overrightarrow{P_0P} \\times \\vec m = ' + vecTex(cr) + ',\\quad |\\overrightarrow{P_0P} \\times \\vec m| = \\sqrt{' + fmt(c2) + '}\\)'),
          row('Step 3', '\\(|\\vec m| = \\sqrt{' + fmt(m2) + '}\\)'),
          row('Distance', '\\(d = \\dfrac{\\sqrt{' + fmt(c2) + '}}{\\sqrt{' + fmt(m2) + '}} = ' + dExact + (isInt(dist) ? '' : ' \\approx ' + dist.toFixed(3)) + '\\)' + (near(dist, 0) ? ' (P is on the line)' : '')),
          row('Closest point', '\\(t = \\dfrac{\\overrightarrow{P_0P} \\cdot \\vec m}{|\\vec m|^2} = ' + ratTex(dot(w, mm), m2) + '\\), so \\(Q = ' + vecTex(F) + '\\). Check: \\(\\overrightarrow{QP} \\cdot \\vec m = ' + fmt(dot(sub(Q, F), mm)) + '\\).')
        ]);
        model.p = P0; model.m = mm; model.q = Q; model.foot = F;
        legend = [['blue', 'line'], ['amber', 'direction m'], ['red', 'shortest distance']];
      }
    } catch (msg) {
      if (typeof msg !== 'string' && window.console) console.error(msg);
      html = warnBox(typeof msg === 'string' ? msg : 'Something in the input does not work. Check each box.');
      model = { mode: mode, empty: true };
    }
    out.innerHTML = html;
    root.querySelector('#labLegend').innerHTML = legend.map(function (l) { return '<span><i style="background:var(--' + { blue: 'etc', teal: 'link', amber: 'glyco', magenta: 'krebs', red: 'proton' }[l[0]] + ')"></i>' + l[1] + '</span>'; }).join('');
    lastModel = model;
    paint();
  }
  // one parametric component of a plane: c0 + s·ca + t·cb
  function affine2(c0, ca, cb) {
    var s = affine(c0, ca, 's');
    if (near(cb, 0)) return s;
    var k = near(Math.abs(cb), 1) ? '' : fmt(Math.abs(cb));
    if (s === '0') return (cb < 0 ? '-' : '') + k + 't';
    return s + (cb < 0 ? ' - ' : ' + ') + k + 't';
  }

  /* ---------- drawing ---------- */
  function colors() {
    var cs = getComputedStyle(document.documentElement);
    var g = function (n) { return cs.getPropertyValue(n).trim() || '#888'; };
    return { ink: g('--ink'), ink2: g('--ink-2'), line: g('--line'), surface: g('--surface'), blue: g('--etc'), blueSoft: g('--etc-soft'), teal: g('--link'), amber: g('--glyco'), magenta: g('--krebs'), red: g('--proton') };
  }
  function sizeCanvas() {
    var r = canvas.getBoundingClientRect(), dpr = window.devicePixelRatio || 1;
    var w = Math.max(300, Math.round(r.width)), h = Math.round(w * 0.75);
    if (canvas.width !== Math.round(w * dpr)) { canvas.width = Math.round(w * dpr); canvas.height = Math.round(h * dpr); }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w: w, h: h };
  }
  function arrow(x1, y1, x2, y2, col, width, dashed) {
    var dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy); if (len < 1) return;
    ctx.save(); ctx.strokeStyle = col; ctx.fillStyle = col; ctx.lineWidth = width || 2.5; ctx.lineCap = 'round';
    if (dashed) ctx.setLineDash([6, 5]);
    var ux = dx / len, uy = dy / len, hl = Math.min(13, len * 0.4);
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2 - ux * hl * 0.8, y2 - uy * hl * 0.8); ctx.stroke();
    ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(x2, y2); ctx.lineTo(x2 - ux * hl - uy * hl * 0.45, y2 - uy * hl + ux * hl * 0.45); ctx.lineTo(x2 - ux * hl + uy * hl * 0.45, y2 - uy * hl - ux * hl * 0.45); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function dotAt(x, y, col, label, lcol) {
    ctx.save(); ctx.fillStyle = col; ctx.beginPath(); ctx.arc(x, y, 4.5, 0, Math.PI * 2); ctx.fill();
    if (label) { ctx.fillStyle = lcol || col; ctx.font = '600 13px "Bricolage Grotesque", system-ui, sans-serif'; ctx.fillText(label, x + 8, y - 8); }
    ctx.restore();
  }
  function txt(s, x, y, col, align, size) { ctx.save(); ctx.fillStyle = col; ctx.font = '600 ' + (size || 13) + 'px "Bricolage Grotesque", system-ui, sans-serif'; ctx.textAlign = align || 'left'; ctx.fillText(s, x, y); ctx.restore(); }
  function u(s) { return String(s).replace(/-/g, '−'); }
  function ptLabel(name, v) { return name + '(' + v.map(function (x) { return u(fmtPlain(x)); }).join(', ') + ')'; }

  function paint() {
    if (!canvas || !document.body.contains(canvas)) return;
    var S = sizeCanvas(), C = colors(), M = lastModel || {};
    ctx.clearRect(0, 0, S.w, S.h);
    if (M.empty) { txt('Fix the input to see the drawing', S.w / 2, S.h / 2, C.ink2, 'center', 15); return; }
    if (M.mode === 'line2' || M.mode === 'dist2') paint2D(S, C, M); else paint3D(S, C, M);
  }

  /* 2D */
  function paint2D(S, C, M) {
    var pts = M.mode === 'line2' ? [M.p, add(M.p, M.m)] : [M.q, M.foot];
    var R = Math.max(6, Math.ceil(Math.max.apply(null, pts.reduce(function (a, p) { return a.concat(p.map(Math.abs)); }, [])) + 2));
    var sc = Math.min(S.w, S.h) / (2 * R) * 0.94, ox = S.w / 2, oy = S.h / 2;
    var X = function (x) { return ox + x * sc; }, Y = function (y) { return oy - y * sc; };
    var RX = R * S.w / S.h;
    var step = R > 14 ? 5 : R > 8 ? 2 : 1;
    ctx.save(); ctx.lineWidth = 1; ctx.strokeStyle = C.line;
    for (var k = -Math.ceil(RX); k <= Math.ceil(RX); k++) { if (k % step) continue; ctx.beginPath(); ctx.moveTo(X(k), 0); ctx.lineTo(X(k), S.h); ctx.stroke(); }
    for (k = -R; k <= R; k++) { if (k % step) continue; ctx.beginPath(); ctx.moveTo(0, Y(k)); ctx.lineTo(S.w, Y(k)); ctx.stroke(); }
    ctx.strokeStyle = C.ink2; ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.moveTo(0, oy); ctx.lineTo(S.w, oy); ctx.moveTo(ox, 0); ctx.lineTo(ox, S.h); ctx.stroke();
    ctx.restore();
    for (k = -Math.floor(RX); k <= Math.floor(RX); k++) if (k && !(k % (step * 2 > R ? step : step * 2))) txt(u(k), X(k), oy + 15, C.ink2, 'center', 11);
    for (k = -R; k <= R; k++) if (k && !(k % (step * 2 > R ? step : step * 2))) txt(u(k), ox - 6, Y(k) + 4, C.ink2, 'right', 11);
    txt('x', S.w - 10, oy - 8, C.ink2, 'right'); txt('y', ox + 8, 14, C.ink2);
    // the line: through point p0 with direction d
    var p0, d;
    if (M.mode === 'line2') { p0 = M.p; d = M.m; }
    else { var A = M.abc[0], B = M.abc[1], Cc = M.abc[2]; d = [-B, A]; p0 = near(B, 0) ? [-Cc / A, 0] : [0, -Cc / B]; }
    var big = 4 * RX / Math.max(1e-9, Math.hypot(d[0], d[1]));
    ctx.save(); ctx.strokeStyle = C.blue; ctx.lineWidth = 2.5;
    ctx.beginPath(); ctx.moveTo(X(p0[0] - d[0] * big), Y(p0[1] - d[1] * big)); ctx.lineTo(X(p0[0] + d[0] * big), Y(p0[1] + d[1] * big)); ctx.stroke(); ctx.restore();
    if (M.mode === 'line2') {
      arrow(X(0), Y(0), X(p0[0]), Y(p0[1]), C.teal, 2);
      arrow(X(p0[0]), Y(p0[1]), X(p0[0] + d[0]), Y(p0[1] + d[1]), C.amber, 3);
      var nl = Math.hypot(M.n[0], M.n[1]), dl = Math.hypot(d[0], d[1]), ns = Math.min(dl, 3) / nl;
      arrow(X(p0[0]), Y(p0[1]), X(p0[0] + M.n[0] * ns), Y(p0[1] + M.n[1] * ns), C.magenta, 2, true);
      dotAt(X(p0[0]), Y(p0[1]), C.ink, ptLabel('P₀', p0), C.ink);
      txt('m', X(p0[0] + d[0]) + 8, Y(p0[1] + d[1]) + 4, C.amber);
      txt('n', X(p0[0] + M.n[0] * ns) + 8, Y(p0[1] + M.n[1] * ns) + 4, C.magenta);
    } else {
      ctx.save(); ctx.strokeStyle = C.red; ctx.lineWidth = 2.5; ctx.setLineDash([6, 5]);
      ctx.beginPath(); ctx.moveTo(X(M.q[0]), Y(M.q[1])); ctx.lineTo(X(M.foot[0]), Y(M.foot[1])); ctx.stroke(); ctx.restore();
      rightAngle2D(X, Y, M.foot, d, sub(M.q, M.foot), C.ink2);
      dotAt(X(M.q[0]), Y(M.q[1]), C.ink, ptLabel('P', M.q));
      dotAt(X(M.foot[0]), Y(M.foot[1]), C.red, ptLabel('Q', M.foot));
    }
  }
  function rightAngle2D(X, Y, at, d1, d2, col) {
    var l1 = Math.hypot(d1[0], d1[1]), l2 = Math.hypot(d2[0], d2[1]); if (l1 < 1e-9 || l2 < 1e-9) return;
    var s = 0.35, a = [d1[0] / l1 * s, d1[1] / l1 * s], b = [d2[0] / l2 * s, d2[1] / l2 * s];
    ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = 1.2; ctx.beginPath();
    ctx.moveTo(X(at[0] + a[0]), Y(at[1] + a[1])); ctx.lineTo(X(at[0] + a[0] + b[0]), Y(at[1] + a[1] + b[1])); ctx.lineTo(X(at[0] + b[0]), Y(at[1] + b[1])); ctx.stroke(); ctx.restore();
  }

  /* 3D: orthographic camera at azimuth/elevation, z up */
  function paint3D(S, C, M) {
    var ref = [M.p || [0, 0, 0]];
    if (M.q) ref.push(M.q);
    if (M.m) ref.push(add(M.p, M.m));
    if (M.a) ref.push(add(M.p, M.a), add(M.p, M.b));
    var L = Math.max(5, Math.ceil(Math.max.apply(null, ref.reduce(function (a, p) { return a.concat(p.map(Math.abs)); }, [])) + 1));
    var ca = Math.cos(cam.az), sa = Math.sin(cam.az), ce = Math.cos(cam.el), se = Math.sin(cam.el);
    var Rv = [-sa, ca, 0], Uv = [-se * ca, -se * sa, ce];
    var sc = Math.min(S.w, S.h) * 0.36 / L, ox = S.w / 2, oy = S.h / 2;
    var P = function (v) { return [ox + dot(v, Rv) * sc, oy - dot(v, Uv) * sc]; };
    var seg = function (a, b, col, w, dash) { var A = P(a), B = P(b); ctx.save(); ctx.strokeStyle = col; ctx.lineWidth = w || 1.5; if (dash) ctx.setLineDash([6, 5]); ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke(); ctx.restore(); };
    var arr = function (a, b, col, w, dash) { var A = P(a), B = P(b); arrow(A[0], A[1], B[0], B[1], col, w, dash); };
    // floor grid (z = 0)
    var step = L > 10 ? 5 : L > 6 ? 2 : 1;
    ctx.save(); ctx.globalAlpha = 0.55;
    for (var k = -L; k <= L; k++) { if (k % step) continue; seg([k, -L, 0], [k, L, 0], C.line, 1); seg([-L, k, 0], [L, k, 0], C.line, 1); }
    ctx.restore();
    // plane patch clipped to the box
    if (M.mode === 'plane') {
      var poly = planeInBox(M.n, M.D, L);
      if (poly.length >= 3) {
        ctx.save(); ctx.fillStyle = C.blue; ctx.globalAlpha = 0.16; ctx.beginPath();
        poly.forEach(function (v, i) { var q = P(v); if (i) ctx.lineTo(q[0], q[1]); else ctx.moveTo(q[0], q[1]); });
        ctx.closePath(); ctx.fill(); ctx.globalAlpha = 0.9; ctx.strokeStyle = C.blue; ctx.lineWidth = 1.5; ctx.stroke(); ctx.restore();
      }
    }
    // axes
    [[1, 0, 0, 'x'], [0, 1, 0, 'y'], [0, 0, 1, 'z']].forEach(function (a) {
      var e = [a[0], a[1], a[2]];
      seg(mul(e, -L), mul(e, L), C.ink2, 1.3);
      arr(mul(e, L * 0.98), mul(e, L * 1.08), C.ink2, 1.3);
      var t = P(mul(e, L * 1.16)); txt(a[3], t[0], t[1] + 4, C.ink2, 'center', 14);
      for (var j = -L; j <= L; j++) {
        if (!j || j % step) continue;
        var q = P(mul(e, j)); ctx.save(); ctx.fillStyle = C.ink2; ctx.beginPath(); ctx.arc(q[0], q[1], 1.6, 0, 7); ctx.fill(); ctx.restore();
        if (!(j % (step * 2))) txt(u(j), q[0] + 4, q[1] + 13, C.ink2, 'left', 10);
      }
    });
    var O = [0, 0, 0];
    if (M.mode === 'line3' || M.mode === 'dist3') {
      var tr = lineInBox(M.p, M.m, L * 1.05);
      if (tr) seg(add(M.p, mul(M.m, tr[0])), add(M.p, mul(M.m, tr[1])), C.blue, 2.6);
      if (M.mode === 'line3') arr(O, M.p, C.teal, 2);
      arr(M.p, add(M.p, M.m), C.amber, 3);
      var mp = P(add(M.p, M.m)); txt('m', mp[0] + 8, mp[1] + 4, C.amber);
      var pp = P(M.p); dotAt(pp[0], pp[1], C.ink, ptLabel('P₀', M.p), C.ink);
      if (M.mode === 'dist3') {
        seg(M.q, M.foot, C.red, 2.5, true);
        var qq = P(M.q), ff = P(M.foot);
        dotAt(qq[0], qq[1], C.ink, ptLabel('P', M.q));
        dotAt(ff[0], ff[1], C.red, ptLabel('Q', M.foot));
      }
    } else if (M.mode === 'plane') {
      arr(M.p, add(M.p, M.a), C.amber, 3);
      arr(M.p, add(M.p, M.b), C.teal, 3);
      var nl = norm(M.n), ns = Math.min(3, L * 0.5) / nl;
      arr(M.p, add(M.p, mul(M.n, ns)), C.magenta, 2.5, true);
      var a1 = P(add(M.p, M.a)), b1 = P(add(M.p, M.b)), n1 = P(add(M.p, mul(M.n, ns)));
      txt('a', a1[0] + 8, a1[1] + 4, C.amber); txt('b', b1[0] + 8, b1[1] + 4, C.teal); txt('n', n1[0] + 8, n1[1] + 4, C.magenta);
      var p1 = P(M.p); dotAt(p1[0], p1[1], C.ink, ptLabel('P₀', M.p), C.ink);
    }
    var o = P(O); txt('O', o[0] - 14, o[1] + 14, C.ink2, 'left', 12);
  }
  function lineInBox(p, m, L) {
    var lo = -Infinity, hi = Infinity;
    for (var i = 0; i < 3; i++) {
      if (near(m[i], 0)) { if (Math.abs(p[i]) > L) return null; continue; }
      var t1 = (-L - p[i]) / m[i], t2 = (L - p[i]) / m[i];
      lo = Math.max(lo, Math.min(t1, t2)); hi = Math.min(hi, Math.max(t1, t2));
    }
    return lo < hi ? [lo, hi] : null;
  }
  function planeInBox(n, D, L) {
    var V = [], E = [], pts = [];
    for (var i = 0; i < 8; i++) V.push([(i & 1 ? L : -L), (i & 2 ? L : -L), (i & 4 ? L : -L)]);
    for (i = 0; i < 8; i++) for (var b = 0; b < 3; b++) { var j = i | (1 << b); if (j !== i) E.push([i, j]); }
    E.forEach(function (e) {
      var A = V[e[0]], B = V[e[1]], fa = dot(n, A) + D, fb = dot(n, B) + D;
      if ((fa <= 0 && fb >= 0) || (fa >= 0 && fb <= 0)) {
        if (near(fa - fb, 0)) return;
        pts.push(add(A, mul(sub(B, A), fa / (fa - fb))));
      }
    });
    if (pts.length < 3) return pts;
    var c = mul(pts.reduce(add), 1 / pts.length);
    var e1 = sub(pts[0], c); if (norm(e1) < 1e-9) e1 = sub(pts[1], c);
    var e2 = cross(n, e1);
    return pts.map(function (p) { var w = sub(p, c); return { p: p, a: Math.atan2(dot(w, e2), dot(w, e1)) }; })
      .sort(function (x, y) { return x.a - y.a; }).map(function (x) { return x.p; });
  }

  window.addEventListener('resize', function () { if (canvas && document.body.contains(canvas)) paint(); });
  new MutationObserver(function () { if (canvas && document.body.contains(canvas)) paint(); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  if (window.matchMedia) { var mq = window.matchMedia('(prefers-color-scheme: dark)'); if (mq.addEventListener) mq.addEventListener('change', paint); }

  window.LAB = { render: render };
})();
