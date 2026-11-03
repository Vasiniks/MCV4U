/* MCV4U Unit 4 · Lesson 4.6 Intersection of Three Planes */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "4.6", title: "Intersection of Three Planes", stage: "c6",
  summary: String.raw`Three planes can meet at a point, along a common line, in a common plane, or not at all. The algebra is the 3×3 system from Lessons 4.3/4.4, but now you must name the geometric configuration when there is no unique point. Cases depend on whether normals are parallel and whether the system is consistent. This is the capstone of Unit 4 and where Colosimo's "describe the geometric configuration" questions live.`,
  objectives: [
    String.raw`List all seven distinct geometric configurations for three planes.`,
    String.raw`Decide from normals whether we could have parallel distinct, coincident, triangular prism, etc.`,
    String.raw`Solve 3×3 system by elimination or RREF to get point, line (with parameter), or detect 0= k vs 0=0.`,
    String.raw`Parametrize line of intersection when one equation redundant (or two planes coincident).`,
    String.raw`Write geometric description for no-solution cases: two parallel cut by third, three parallel distinct, triangular prism, etc.`,
    String.raw`Answer "classify algebraically" by citing normal ratios and elimination result.`
  ],
  html: String.raw`
<h3 data-tier="essential">All configurations for three planes</h3>
<p>From blank notes Lesson 4.6 diagram table + Unit Review Q6-7 + Best Quest Q12,15,16:</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>Diagram idea</th><th>Normals</th><th># equations after elimination</th><th># solutions</th><th>Name</th></tr></thead>
<tbody>
<tr><td>Three planes cut at one point</td><td>no two parallel, not coplanar triple</td><td>3 pivots</td><td>1 — \(P(x,y,z)\)</td><td>Unique point</td></tr>
<tr><td>All three meet along one line</td><td>no two parallel but one eq redundant</td><td>2 pivots + 0=0</td><td>∞ — common line</td><td>Line (pencil / sheaf with one redundancy)</td></tr>
<tr><td>Two coincident, third cuts them</td><td>two normals parallel identical, third not</td><td>2 pivots + 0=0</td><td>∞ — line where third cuts coincident pair</td><td>Line — coincident pair</td></tr>
<tr><td>Three coincident</td><td>all parallel, all same</td><td>1 pivot + two 0=0</td><td>∞ — plane</td><td>Plane (coincident)</td></tr>
<tr><td>Two parallel distinct, third cuts</td><td>two normals parallel, third not, constants wrong</td><td>contradiction row \([0\ 0\ 0\ |\ k]\)</td><td>0</td><td>Two parallel cut by third</td></tr>
<tr><td>Three parallel distinct</td><td>all normals parallel, constants all different ratios</td><td>contradiction</td><td>0</td><td>Three parallel distinct</td></tr>
<tr><td>Triangular prism</td><td>no two normals parallel, but system inconsistent 0=k</td><td>contradiction even though normals not parallel multiples</td><td>0</td><td>Three planes form triangular prism — pairwise lines ∥</td></tr>
</tbody></table></div>

<h3 data-tier="essential">How to decide without drawing</h3>
<ol class="work">
<li><strong>Check normal parallelism.</strong> Are \(\vec n_1\parallel\vec n_2\)? etc. Compute ratios or note scalar multiples. This gives you possible geometric families.</li>
<li><strong>Solve 3×3.</strong> Use elimination (if question says "do not use matrices") or RREF. If you get a point — done, unique.</li>
<li><strong>If \(0=0\) appears:</strong> one or two equations redundant. Parameterize free var(s). If two planes coincident, state that and then find line of intersection of coincident plane with third (Lesson 4.5 method) or reuse line parametrization.</li>
<li><strong>If \(0=k\neq0\) appears:</strong> no solution. Now use step 1 to name which no-solution geometry:
<ul>
<li>Two normals parallel + third non-parallel → "two parallel distinct cut by third".</li>
<li>All three normals parallel → "three parallel distinct" or "two coincident + one parallel distinct if two proportional including constant".</li>
<li>No normals parallel but still \(0=k\) → "triangular prism" (pairwise intersections are three parallel lines).</li>
</ul>
</li>
</ol>

<h3 data-tier="essential">Example — unique point</h3>
<p>Best Quest 9: \(x+y+z=5,\ 2x-y+z=2,\ x+2y-z=3\). Elimination gave \(P(1,2,2)\). Normals \((1,1,1),(2,-1,1),(1,2,-1)\) no two parallel → if algebra gave point, it must be unique point of three.</p>

<h3 data-tier="essential">Example — line (redundant equation)</h3>
<p>Best Quest 11: \(x+y+z=4,\ 2x-y+3z=5,\ 3x+4z=9\). Add first two → \(3x+4z=9\) = third → third redundant → ∞ solutions on line. Param as earlier.</p>
<p>Another variant Best Quest 15: \(\pi_1:x+2y-z=4,\ \pi_2:2x+4y-2z=8,\ \pi_3:x-y+z=1\). Note \(\pi_2=2\pi_1\) → \(\pi_1,\pi_2\) coincident, \(\pi_3\) cuts → line. Add \(\pi_1+\pi_3\): \(2x+y=5\Rightarrow y=5-2x\), set \(x=t\Rightarrow y=5-2t,\ z=1-x+y=6-3t\) → line \((0,5,6)+t(1,-2,-3)\).</p>

<h3 data-tier="essential">Example — no solution parallel-distinct</h3>
<p>Best Quest 12: \(x+y+z=3,\ 2x+2y+2z=10,\ x-y+2z=4\). First two conflict → no solution. Normals first two parallel, third not → "two parallel distinct cut by third" (or "two coincident? No, constants wrong so parallel distinct").</p>

<h3 data-tier="likely">Triangular prism detection</h3>
<p>Unit Review Q7 / Old Quest conceptual: three normals not scalar multiples but after elimination you get \(0=2\). Means each pair meets in a line, but all three pairwise lines are parallel — side view looks like triangle. To confirm prism: show normals not all parallel, but system inconsistent. Optionally compute three pairwise \(\vec n_i\times\vec n_j\) — they should be parallel to each other.</p>

<h3 data-tier="likely">How Colosimo wants classification sentences</h3>
<div class="callout key"><p class="callout-title">Exact phrases</p>
<ul>
<li>"Two coincident planes and the third parallel but distinct, or three parallel distinct" — for when normals scalar multiples and no solution (Review Q6).</li>
<li>"Three non-parallel planes that form a triangular prism" — normals not scalar multiples and 0 solutions (Review Q7).</li>
<li>"Coincident — common plane" / "Two coincident, one intersecting along line".</li>
<li>For line case: "Infinitely many solutions on line \(\vec r = (x_0,y_0,z_0)+t\vec d\)".</li>
</ul>
</div>

<h3 data-tier="extra">Matrix view of three-plane cases</h3>
<p>RREF table is fastest mental model:</p>
<ul>
<li>\([I\ |\ b]\) → point.</li>
<li>One zero row \([0 0 0 | 0]\) + 2 pivots → line.</li>
<li>Two zero rows + 1 pivot → plane (all three coincident or one redundant pair leading to plane if two equations same and third multiple? Actually plane case needs two redundancy).</li>
<li>Row \([0 0 0 | k\neq0]\) → no solution; inspect normals for which no-solution geometry.</li>
</ul>
`
});

window.QA.push(
{ id:"4.6-q1", lesson:"4.6", type:"worksheet", title:"Worksheet 4.6 — point", prompt: String.raw`\(x+y+z=5,\ 2x-y+z=2,\ x+2y-z=3\). Intersection?`, solution: String.raw`Elimination gave (1,2,2). 3 planes meet at point (1,2,2).` },
{ id:"4.6-q2", lesson:"4.6", type:"worksheet", title:"Worksheet 4.6 — line (redundant)", prompt: String.raw`\(x+y+z=4,\ 2x-y+3z=5,\ 3x+4z=9\). Classify.`, solution: String.raw`Eq3 = Eq1+Eq2 → redundant → line \(\vec r=(3,1,0)+s(-4,1,3)\). Three planes intersect in common line.` },
{ id:"4.6-q3", lesson:"4.6", type:"worksheet", title:"Worksheet 4.6 — no solution parallel", prompt: String.raw`\(x+y+z=3,\ 2x+2y+2z=10,\ x-y+2z=4\). No solution geometry?`, solution: String.raw`First two: x+y+z=3 vs 5 contradiction. Normals n1∥n2, n3 not parallel → two parallel distinct cut by third. No solution.` },
{ id:"4.6-q4", lesson:"4.6", type:"worksheet", title:"Worksheet 4.6 — coincident pair line", prompt: String.raw`\(x+2y-z=4,\ 2x+4y-2z=8,\ x-y+z=1\).`, solution: String.raw`π1,π2 coincident (×2). Intersect with π3: x+2y-z=4 & x-y+z=1 → 2x+y=5 → y=5-2x, let x=t → (0,5,6)+t(1,-2,-3).` }
);

window.QUIZ.push(
{ id:"q-4.6-1", lesson:"4.6", tier:"essential", prompt: String.raw`Three planes: elimination gives unique x,y,z. Geometry?`, choices:["Common point","Common line","Prism","No solution"], answer:0, explain: String.raw`3 pivots → point.` },
{ id:"q-4.6-2", lesson:"4.6", tier:"essential", prompt: String.raw`You get 0=0 plus two independent equations. Means?`, choices:["Point","Line of intersection","Plane","No solution"], answer:1, explain: String.raw`One redundancy → one free variable → common line.` },
{ id:"q-4.6-3", lesson:"4.6", tier:"essential", prompt: String.raw`You get 0=2. Normals n1∥n2 not parallel n3. Geometry?`, choices:["Triangular prism","Two parallel distinct cut by third","All coincident","Line"], answer:1, explain: String.raw`Two normals parallel + contradiction.` },
{ id:"q-4.6-4", lesson:"4.6", tier:"likely", prompt: String.raw`No normals parallel, but system inconsistent (0=k). Geometry?`, choices:["Two parallel cut by third","Triangular prism","Unique point","Coincident"], answer:1, explain: String.raw`Definition of triangular prism case.` },
{ id:"q-4.6-5", lesson:"4.6", tier:"likely", prompt: String.raw`π1: x+y+z=2, π2: x+y+z=5, π3:2x−y+z=1.`, choices:["Point","Coincident pair line","Two parallel distinct + one cutting (no solution)","Triangular prism"], answer:2, explain: String.raw`π1∥π2 distinct, π3 non-parallel cuts them.` }
);

window.EXT.push(
{ id:"ext-4.6-k", lesson:"4.6", title:"k for parallel distinct vs coincident (Best Quest 20)", prompt: String.raw`π1:3x−6y+9z+4=0, π2:2x−4y+6z+k=0. k for i) parallel distinct ii) coincident iii) why no line?`, solution: String.raw`n1=(3,−6,9)=3/2(2,−4,6)=3/2 n2 → always parallel. Multiply π2 by 3/2: 3x−6y+9z+3k/2=0. Coincident when 3k/2=4→k=8/3. Parallel distinct when k≠8/3. No line because parallel planes never meet in line.` }
);

window.GLOSSARY.push(
{ term:"Triangular prism (three planes)", def: String.raw`No two normals parallel, but system has no solution. Pairwise intersections are three parallel lines forming sides of infinitely long prism. Detected by normals not multiples plus inconsistency row.` },
{ term:"Coincident planes", def: String.raw`Two or three equations proportional including constant term. Same geometric plane described multiple times. Leads to line or plane of solutions depending on third plane.` }
);
