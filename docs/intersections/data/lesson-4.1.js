/* MCV4U Unit 4 · Lesson 4.1 Intersection of Two Lines */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "4.1", title: "Intersection of Two Lines", stage: "c1",
  where: "R³ intersections",
  summary: String.raw`Two lines in R² must either intersect once or be parallel. In R³ a third outcome appears: skew lines that are not parallel and never meet. This lesson is the decision tree you will use on every Unit 4 test: check directions → equate components → solve the 2×2 → check the third → name the POI and the case.`,
  objectives: [
    String.raw`Recall consistent vs inconsistent systems in R² and why R³ adds skew lines.`,
    String.raw`List the four outcomes for two lines in R³: intersecting (1 POI), coincident (∞), parallel distinct (0), skew (0).`,
    String.raw`Implement the full check: direction ratio test, then equating x and y to solve for t,u, then consistency check in z.`,
    String.raw`Write a complete solution with conclusion sentences and exact POI.`,
    String.raw`Use the symmetric form trick: write one line parametric and plug into the other form.`,
    String.raw`Classify perpendicular vs non-perpendicular intersection via \(\vec m_1\cdot\vec m_2\).`
  ],
  html: String.raw`
<h3 data-tier="essential">The four cases — what can happen</h3>
<p>In R², two lines either meet once or are parallel. In R³ they can also go around each other.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Case</th><th>Directions \(\vec m_1,\vec m_2\)</th><th>Point test</th><th># solutions</th></tr></thead>
<tbody>
<tr><td><strong>Intersecting</strong></td><td>not scalar multiples</td><td>2×2 solution works in third equation</td><td>1 — point of intersection</td></tr>
<tr><td><strong>Coincident</strong> (same line)</td><td>scalar multiples \(\vec m_1 = k\vec m_2\)</td><td>a point from L1 satisfies L2</td><td>∞ — the line itself</td></tr>
<tr><td><strong>Parallel distinct</strong></td><td>scalar multiples</td><td>point test fails</td><td>0</td></tr>
<tr><td><strong>Skew</strong></td><td>not scalar multiples</td><td>2×2 solution fails in third equation</td><td>0 — planes containing lines are parallel but lines aren't</td></tr>
</tbody></table></div>
<div class="callout key"><p class="callout-title">Decision tree (write this first on a test)</p>
<ol>
<li><strong>Directions:</strong> are \(\vec m_1,\vec m_2\) scalar multiples? Ratio test or check if one is \(k\) times the other.</li>
<li><strong>If multiples:</strong> test if \(P_{01}\) (point on L1) lies on L2. If yes → coincident. If no → parallel distinct.</li>
<li><strong>If not multiples:</strong> equate components → 3 equations in 2 unknowns \(t,u\). Solve any 2 (usually x and y) for \(t,u\). Plug into the 3rd (usually z). If it holds → intersecting, find POI with either line. If it fails → skew.</li>
</ol>
</div>

<h3 data-tier="essential">Worked recipe with full sentences</h3>
<p>Given \(L_1:\vec r=(x_{01},y_{01},z_{01})+t(a_1,b_1,c_1)\) and \(L_2:\vec r=(x_{02},y_{02},z_{02})+u(a_2,b_2,c_2)\):</p>
<ol class="work">
<li>Extract \(\vec m_1=(a_1,b_1,c_1),\ \vec m_2=(a_2,b_2,c_2)\). Check \( \frac{a_1}{a_2} \stackrel{?}{=} \frac{b_1}{b_2} = \frac{c_1}{c_2}\) (watch zeros: use scalar form).</li>
<li>If \(\vec m_1\parallel\vec m_2\): solve for \(u\) from \(P_{01}\) in L2 — e.g. \(x_{01}=x_{02}+a_2 u\). Test remaining coords.</li>
<li>If not parallel: write
\[ \begin{cases} x_{01}+a_1 t = x_{02}+a_2 u \\ y_{01}+b_1 t = y_{02}+b_2 u \\ z_{01}+c_1 t = z_{02}+c_2 u \end{cases} \]
Solve first two for \(t,u\) (elimination). Suppose \(t=t_0,\ u=u_0\). Plug into third: LHS vs RHS. State consistent or inconsistent.</li>
<li>Conclusion: "Not scalar multiples and inconsistent → skew" or "Consistent → intersect at \(P(\dots)\) obtained with \(t=\dots\) on L1".</li>
</ol>

<h3 data-tier="essential">Example — from Best Quest Review #2</h3>
<p>\(L_1:\vec r=(2,0,1)+t(1,3,-2)\), \(L_2:\vec r=(7,1,-7)+u(-2,1,3)\).</p>
<p>Directions \((1,3,-2)\) and \((-2,1,3)\) are not multiples → not parallel/coincident.</p>
<div class="eq">\[
\begin{aligned}
(1)&\ 2+t = 7-2u \Rightarrow t+2u=5\\
(2)&\ 3t = 1+u\\
(3)&\ 1-2t = -7+3u
\end{aligned}
\]</div>
<p>From (2) \(u=3t-1\). Into (1): \(t+2(3t-1)=5\Rightarrow 7t=7\Rightarrow t=1,\ u=2\).</p>
<p>Check (3): \(2(1)+3(2)=8\) and RHS is 8 after moving terms → consistent. POI with \(t=1\) on L1: \(P(3,3,-1)\).</p>
<figure class="diagram narrow"><svg viewBox="0 0 340 220" role="img"><line x1="40" y1="180" x2="200" y2="40" stroke="var(--etc)" stroke-width="2"/><line x1="80" y1="40" x2="240" y2="180" stroke="var(--krebs)" stroke-width="2"/><circle cx="140" cy="110" r="5" fill="var(--ink)"/><text x="152" y="108" font-size="13" font-family="var(--body)">POI (3,3,−1)</text></svg><figcaption>Two non-parallel lines that pass the consistency check — one point of intersection.</figcaption></figure>

<h3 data-tier="likely">Skew example — Best Quest Review #1</h3>
<p>\(L_1:(1,3,-1)+t(2,1,4),\ L_2:(4,-2,2)+u(1,-1,2)\). Directions not multiples. Equate: \(1+2t=4+u,\ 3+t=-2-u,\ -1+4t=2+2u\). From first two \(t=-2/3,\ u=-13/3\). Third gives \(6\neq 3\) → inconsistent → skew.</p>
<div class="callout warn"><p class="callout-title">Trap</p><p>Many students solve two equations and stop. The third equation IS the test. Always show LS vs RS and write "inconsistent → skew" or "consistent → POI".</p></div>

<h3 data-tier="likely">Symmetric form shortcut</h3>
<p>If one line is symmetric \(\frac{x-x_0}{a}=\frac{y-y_0}{b}=\frac{z-z_0}{c}\), write the other in parametric \(x=...,y=...,z=...\) and substitute into symmetric equality. You get two equations in one parameter; solve, then check the other equality — same idea, fewer letters.</p>

<h3 data-tier="extra">Perpendicular intersection?</h3>
<p>If lines intersect, you may be asked if they are perpendicular: compute \(\vec m_1\cdot\vec m_2\). If 0 → perpendicular. This is <strong>type 8 extension</strong> and appears in old quest review.</p>

<div class="callout tip"><p class="callout-title">How to spot this type on the sheet</p><p>"Determine whether the two 3D lines intersect at a single point, are coincident, parallel and distinct, or skew" → immediately start the direction ratio test. "If they intersect, calculate POI" → consistency check is mandatory.</p></div>
`
});

window.QA.push(
{ id:"4.1-q1", lesson:"4.1", type:"worksheet", title:"Worksheet 4.1 — Q1 basic intersect check", prompt: String.raw`\(L_1:\vec r=(1,3,-1)+t(2,1,4)\), \(L_2:\vec r=(4,-2,2)+u(1,-1,2)\). Intersecting, coincident, parallel distinct, or skew?`, solution: String.raw`Directions \((2,1,4)\) and \((1,-1,2)\) are not multiples (2/1 ≠1/−1). Equate: \(1+2t=4+u\Rightarrow 2t-u=3\); \(3+t=-2-u\Rightarrow t+u=-5\); \(-1+4t=2+2u\Rightarrow 4t-2u=3\). Add first two: \(3t=-2\Rightarrow t=-2/3,\ u=-13/3\). Third: LHS \(4(-2/3)-2(-13/3)=6\), RHS 3 → inconsistent → skew. No POI.` },
{ id:"4.1-q2", lesson:"4.1", type:"worksheet", title:"Worksheet 4.1 — Q2 POI", prompt: String.raw`\(L_1:(2,0,1)+t(1,3,-2)\), \(L_2:(7,1,-7)+u(-2,1,3)\). Classify and find POI if it exists.`, solution: String.raw`Not parallel. Solve x,y: \(t+2u=5,\ u=3t-1\) → \(t=1,u=2\). Check z: \(1-2(1)=-7+3(2)\) gives \(-1=-1\) true. POI: using L1 \(t=1\) → \(P(3,3,-1)\).` },
{ id:"4.1-q3", lesson:"4.1", type:"worksheet", title:"Worksheet 4.1 — Q3 parallel distinct", prompt: String.raw`\(L_1:(0,2,5)+t(2,-4,6)\), \(L_2:(1,1,1)+u(-1,2,-3)\). Classify.`, solution: String.raw`\(\vec m_1=(2,-4,6)=-2(-1,2,-3)=-2\vec m_2\) → parallel. Test \(P_{01}(0,2,5)\) on L2: \(0=1-u\Rightarrow u=1\), then y should be \(1+2(1)=3\neq2\) → parallel and distinct.` },
{ id:"4.1-q4", lesson:"4.1", type:"worksheet", title:"Worksheet 4.1 — point containment trick", prompt: String.raw`The line \(L:\vec r=(0,1,1)+t(3,4,2)\) and point \((a,b,-3)\) lies on it. Find \(a,b\)?`, solution: String.raw`Set \(-3=1+2t\Rightarrow t=-2\). Then \(x=0+3(-2)=-6=a\), \(y=1+4(-2)=-7=b\). Always solve the coordinate you know fully first.` }
);

window.QUIZ.push(
{ id:"q-4.1-1", lesson:"4.1", tier:"essential", prompt: String.raw`Two lines in R³ have direction vectors \(\vec m_1=(2,1,4)\) and \(\vec m_2=(1,-1,2)\). Can they be parallel?`, choices:["Yes (scalar multiple)","No","Only if they share a point","Need more info"], answer:1, explain: String.raw`Check ratios: 2/1=2, 1/−1=−1 not equal → not parallel.` },
{ id:"q-4.1-2", lesson:"4.1", tier:"essential", prompt: String.raw`You solved the x and y equations for two lines and got \(t=1, u=2\). The z check fails. The lines are…`, choices:["Intersecting","Coincident","Parallel distinct","Skew"], answer:3, explain: String.raw`Non-parallel directions + inconsistency = skew.` },
{ id:"q-4.1-3", lesson:"4.1", tier:"likely", prompt: String.raw`\(L_1:(0,2,5)+t(2,-4,6)\) and \(L_2:(1,1,1)+u(-1,2,-3)\). What is true?`, choices:["Intersecting at (0,2,5)","Parallel distinct","Coincident","Skew"], answer:1, explain: String.raw`\(\vec m_1=-2\vec m_2\) parallel, point test fails.` },
{ id:"q-4.1-4", lesson:"4.1", tier:"essential", prompt: String.raw`To find POI of two lines you should:`, choices:["Equate parametric coords, solve 2 equations, check 3rd","Cross the direction vectors","Set direction vectors equal","Solve only x equation"], answer:0, explain: String.raw`Standard 3-equation, 2-unknown system. 2 to solve, 1 to verify.` },
{ id:"q-4.1-5", lesson:"4.1", tier:"extra", prompt: String.raw`If two lines intersect and \(\vec m_1\cdot\vec m_2=0\), they are…`, choices:["Skew","Perpendicular and intersecting","Parallel distinct","Coincident"], answer:1, explain: String.raw`Dot zero means 90°, still intersecting.` }
);

window.EXT.push(
{ id:"ext-4.1-1", lesson:"4.1", title:"Shortest distance between skew lines", prompt: String.raw`Given two skew lines, what formula gives the shortest distance between them?`, solution: String.raw`Let \(\vec p=\overrightarrow{P_{01}P_{02}}\) connecting points on each line. Then distance \(d=\frac{| \vec p\cdot(\vec m_1\times\vec m_2)|}{|\vec m_1\times\vec m_2|}\) — absolute scalar triple product over magnitude of cross. Geometric meaning: volume of parallelepiped divided by base area.` },
{ id:"ext-4.1-2", lesson:"4.1", title:"Find t such that L intersects xy-plane", prompt: String.raw`Where does \(\vec r=(4,6,-3)+t(2,3,-1)\) hit \(y=0\) (xz-plane)?`, solution: String.raw`Set y=0: \(6+3t=0\Rightarrow t=-2\). Then \(x=4+2(-2)=0,\ z=-3+(-1)(-2)=-1\) → \((0,0,-1)\). This pattern appears as Best Quest 14b extension.` }
);

window.EXTRA.push(
{ id:"xa-4.1-k", lesson:"4.1", title:"k makes lines intersect", stem: String.raw`\(L_1:\frac{x-1}{2}=\frac{y+1}{1}=\frac{z-2}{k}\) and \(L_2:\vec r=(0,1,3)+u(1,2,1)\). For what \(k\) do they intersect?`, solution: String.raw`Write L1 as \((1, -1, 2)+t(2,1,k)\). Equate: \(1+2t=u,\ -1+t=1+2u,\ 2+kt=3+u\). Solve first two: from second \(t=2+2u\). Into first \(1+2(2+2u)=u\Rightarrow5+4u=u\Rightarrow u=-5/3,\ t=2-10/3=-4/3\). Third: \(2+k(-4/3)=3-5/3=4/3\Rightarrow -4k/3= -2/3\Rightarrow k=1/2\). Always solve x,y first, impose z condition to solve k.` }
);

window.GLOSSARY.push(
{ term:"Skew lines", def: String.raw`Two lines in R³ that are not parallel and do not intersect. They lie in parallel but distinct planes. Detected by non-parallel directions plus inconsistency in the third equation.` },
{ term:"Point of intersection (POI)", def: String.raw`The single point where two intersecting lines (or a line and plane) meet. Found by solving for the parameter values and substituting back.` },
{ term:"Coincident lines", def: String.raw`Two vector equations that describe the exact same geometric line: direction vectors are parallel and a point from one lies on the other.` }
);
