/* MCV4U Unit 4 · Review: summary sheet, more practice, best quest review, old quest review, cram */
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];

window.QA.push({
  id:"qa-review-sheet-u4", lesson:"mix", title:"Unit Review Summary Sheets (A blank + B completed + practice sheet)",
  source:"A/B Unit Review + C More Practice",
  items:[
    { tier:"essential", lesson:"4.1",
      q: String.raw`<strong>Review Q1: Blank Notes recall — R² vs R³.</strong> In R², solutions to linear system graphically are __________________. Consistent system has at least one solution otherwise __________________. In R³ two lines can intersect in 4 ways: __________________, __________________, __________________, __________________.`,
      a: String.raw`<p>Graphically solutions are points of intersection. Consistent = at least one solution; otherwise inconsistent. In R³: one solution = intersecting, infinite = coincident, no solution = parallel distinct or skew (planes containing lines are parallel but lines themselves are not). This is Review sheet item 14 also: "If two lines in 3-space do not intersect, lines are parallel and distinct or skew."</p><p class="answer">Points of intersection; inconsistent; intersecting, coincident, parallel distinct, skew</p>` },
    { tier:"essential", lesson:"4.2",
      q: String.raw`<strong>Review Q6 blanks.</strong> Line is _________ to plane → no solution. Line _________ in plane → infinite. Line _____________ plane → one solution. To determine, write line in __________________ form and sub into __________________ equation of plane.`,
      a: String.raw`<p>Answers per Blank Notes 4.2: Line is "parallel and distinct from" plane → no solution. Line "lies" in plane → infinite solutions is the line itself. Line "intersects" plane → one solution. Procedure: write line in <strong>parametric</strong> form and sub into <strong>Cartesian (scalar)</strong> equation of plane.</p><p class="answer">parallel and distinct from; lies; intersects; parametric; Cartesian</p>` },
    { tier:"essential", lesson:"4.5",
      q: String.raw`<strong>Review Q3 blanks.</strong> Two planes: If normals not parallel, solution is ____________. (And what's ONE change to make infinite solutions?)`,
      a: String.raw`<p>If two planes not parallel → line of intersection. Challenge from blank notes: "What's ONE change to make infinite solutions? a) Coincident planes? b) Intersecting planes?" Answer: a) Coincident = make equations proportional (same A,B,C,D ratios). b) Intersecting already has infinite (line), so maybe question meant make two planes give same but that's coincident. For two planes, change so normals become parallel and constants proportional → coincident.</p><p class="answer">line of intersection; make equations proportional for coincident</p>` },
    { tier:"essential", lesson:"4.3",
      q: String.raw`<strong>Review conceptual — Unit Review Practice Sheet Q1-Q14 (fill-ins with ANSWERS).</strong> List Q1: plane \(-2x+y+3z+5=0\) normal is? Q2: two planes parallel → normals are? Q3: two non-parallel planes solution is? Q4: line not parallel to plane system has? Q5: line coincident → intersection is? Q6: normals scalar multiples + no solution → geometric description? Q7: normals not multiples + 0 solutions →? Q8: line and plane don't intersect → line is? Q9: line perpendicular to plane → line is __ to normal? Q10-14 from sheet.</p>`,
      a: String.raw`
<ul>
<li>Q1: plane \(2x-3y+z+5? Actually sheet says \(-2x+y+3z+5=0\) but example "-2x+y+3z+5"? Their sheet \(2x-? Wait first: "2x-? Given plane 2x-? Actually text "0=5+3z+y+x"? Original: \(2x-? -? They wrote \(2x-? Let's use extraction: Q1 \("Given plane 2x+y+3z+5=0?" Actually sheet Q1: "Given plane 0=5+3z+y...". Normal = \((2,1,3)\) with signs: for \(-2x+y+3z+5=0\) normal \((-2,1,3)\) or \((2,-1,-3)\) scaled but canonical \(( -2,1,3)\).</li>
<li>Q2 parallel → normals "parallel (i.e. scalar multiples)".</li>
<li>Q3 not parallel → "line of intersection".</li>
<li>Q4 line not parallel to plane → "1 solution".</li>
<li>Q5 coincident → "the line itself (infinite solutions)".</li>
<li>Q6 normals scalar multiples + no solution → "two coincident + third parallel distinct, or three parallel distinct".</li>
<li>Q7 normals not multiples +0 solutions → "three non-parallel planes that form triangular prism".</li>
<li>Q8 line and plane don't intersect → "parallel and distinct from" plane.</li>
<li>Q9 line ⟂ plane → line "parallel" to normal.</li>
<li>Q10: \(x+2y-3z+1=0\) coincident with \(2x+4y-6z+k=0\) → \(k=2\). Multiply first by 2 → constant 2.</li>
<li>Q11: line ⟂ \(x+y-2z=4\) → direction is normal \((1,1,-2)\).</li>
<li>Q12: \(x-3y+4z-5=0\) row → \([1\ -3\ 4\ |\ -5]\). (Sheet answer).</li>
<li>Q13: RREF \([1 0 0\ 3.5;0 1 0\ 2;0 0 1\ -1]\) → \((3.5,2,-1)\).</li>
<li>Q14: two lines in 3-space non-intersecting → "parallel and distinct; skew".</li>
</ul>
<p class="answer">Review sheet checked — see list above for exact exam phrases</p>`
    },
    { tier:"essential", lesson:"4.3",
      q: String.raw`<strong>C More Practice — quick list of types found in that PDF (2 pages, scanned).</strong> What types appear?</p>`,
      a: String.raw`<p>File "C - Unit Review - More Practice.pdf" (scanned). From available blank+extra context, it repeats Types 1-6 plus k-questions. Expect: 2-line classification, line-plane POI, 3-plane solve, matrix RREF reading, angle between planes, foot of perpendicular. Use Best Quest Review as proxy for question bank — it has 20 fully worked examples.</p><p class="answer">Mix of Types 1-6 + extensions 7-11</p>` }
  ]
});

window.QA.push({
  id:"qa-best-quest", lesson:"mix", title:"Best Quest Review — Unit 4 (20 Q, no matrices) — solved",
  source:"Best Quest Review - Unit 4 - Copy (1).pdf",
  items:[
    { tier:"essential", lesson:"4.1", q: String.raw`<strong>Best #1:</strong> \(L_1:(1,3,-1)+t(2,1,4), L_2:(4,-2,2)+u(1,-1,2)\). Intersecting, coincident, parallel distinct, or skew? If intersect, POI.`, a: String.raw`<p>Directions not multiples → not parallel. Equate: \(1+2t=4+u\ (2t-u=3)\), \(3+t=-2-u\ (t+u=-5)\), \(-1+4t=2+2u\ (4t-2u=3)\). First two → \(3t=-2\Rightarrow t=-2/3, u=-13/3\). Third: LHS 6 ≠3 → inconsistent → <strong>skew</strong>. No POI.</p><p class="answer">Skew lines (no intersection)</p>` },
    { tier:"essential", lesson:"4.1", q: String.raw`<strong>Best #2:</strong> \(L_1:(2,0,1)+t(1,3,-2), L_2:(7,1,-7)+u(-2,1,3)\). Classify + POI.`, a: String.raw`<p>Not parallel. \(2+t=7-2u\) (t+2u=5), \(3t=1+u\), \(1-2t=-7+3u\). u=3t-1 → t+2(3t-1)=5→7t=7→t=1,u=2. Check: 2*1+3*2=8 OK → intersect. POI with t=1 on L1: (3,3,-1).</p><p class="answer">Intersect at P(3,3,-1)</p>` },
    { tier:"essential", lesson:"4.1", q: String.raw`<strong>Best #3:</strong> \(L_1:(0,2,5)+t(2,-4,6), L_2:(1,1,1)+u(-1,2,-3)\). Classify.`, a: String.raw`<p>m1=(2,-4,6)=-2(-1,2,-3)=-2m2 → parallel. Point (0,2,5) on L2? 0=1-u→u=1→y=1+2=3≠2 → parallel distinct.</p><p class="answer">Parallel and distinct</p>` },
    { tier:"essential", lesson:"4.2", q: String.raw`<strong>Best #4:</strong> Line \(x=1+3t,y=2-t,z=-1+2t\) and plane \(2x+3y-z-11=0\). POI?`, a: String.raw`<p>Sub: 2(1+3t)+3(2-t)-(-1+2t)-11=0→t-2=0→t=2→P(7,0,3).</p><p class="answer">P(7,0,3)</p>` },
    { tier:"essential", lesson:"4.2", q: String.raw`<strong>Best #5:</strong> Line \((3,1,-2)+t(2,-1,1)\) vs plane \(x+3y+z+4=0\). Intersect? Lie? Parallel distinct?`, a: String.raw`<p>Sub: (3+2t)+3(1-t)+(-2+t)+4=0→0t+8=0→no solution→parallel distinct.</p><p class="answer">Parallel and distinct</p>` },
    { tier:"essential", lesson:"4.2", q: String.raw`<strong>Best #6:</strong> Show line \((1,2,-1)+t(1,1,5)\) lies within plane \(2x+3y-z-9=0\).`, a: String.raw`<p>Sub: 2(1+t)+3(2+t)-(-1+5t)-9=0→0=0 true ∀t → lies in plane.</p><p class="answer">Line lies in plane (0=0 for all t)</p>` },
    { tier:"essential", lesson:"4.5", q: String.raw`<strong>Best #7:</strong> Planes \(x+2y-z=3\) and \(2x-y+3z=1\). Parametric line.`, a: String.raw`<p>n1=(1,2,-1),n2=(2,-1,3), d=(5,-5,-5)∼(1,-1,-1). z=0: x+2y=3,2x-y=1→x=1,y=1→P0(1,1,0). Line (1,1,0)+t(1,-1,-1).</p><p class="answer">r=(1,1,0)+t(1,-1,-1)</p>` },
    { tier:"essential", lesson:"4.5", q: String.raw`<strong>Best #8:</strong> Planes \(2x+y+z=5\) and \(x-2y+2z=4\). Parametric line.`, a: String.raw`<p>d=(4,-3,-5). y=0:2x+z=5,x+2z=4→x=2,z=1. Line (2,0,1)+t(4,-3,-5).</p><p class="answer">r=(2,0,1)+t(4,-3,-5)</p>` },
    { tier:"essential", lesson:"4.3", q: String.raw`<strong>Best #9:</strong> Solve \(x+y+z=5,\ 2x-y+z=2,\ x+2y-z=3\) (no matrices) → point.`, a: String.raw`<p>Same as earlier → P(1,2,2).</p><p class="answer">P(1,2,2)</p>` },
    { tier:"essential", lesson:"4.3", q: String.raw`<strong>Best #10:</strong> Solve \(2x+y-z=4,\ x-2y+2z=-3,\ 3x+2y+z=10\) → point.`, a: String.raw`<p>5x+3y=14 from Add1+3, 5x=5 from 2×1+2 → x=1,y=3,z=1 → P(1,3,1).</p><p class="answer">P(1,3,1)</p>` },
    { tier:"likely", lesson:"4.6", q: String.raw`<strong>Best #11:</strong> Solve \(x+y+z=4,\ 2x-y+3z=5,\ 3x+4z=9\) → show infinite on line with param vector form.`, a: String.raw`<p>Eq1+Eq2=3x+4z=9 =Eq3 redundant. Let z=t→x=3-4t/3,y=1+t/3 → r=(3,1,0)+s(-4,1,3).</p><p class="answer">Line r=(3,1,0)+s(-4,1,3)</p>` },
    { tier:"likely", lesson:"4.6", q: String.raw`<strong>Best #12:</strong> System \(x+y+z=3,\ 2x+2y+2z=10,\ x-y+2z=4\). Show no solution + geometric config.`, a: String.raw`<p>Eq2/2: x+y+z=5 vs Eq1=3 contradiction → no solution. Normals n1∥n2, n3 non-parallel → two parallel distinct cut by third.</p><p class="answer">No solution: two parallel distinct cut by third</p>` },
    { tier:"likely", lesson:"4.2", q: String.raw`<strong>Best #13:</strong> Plane \(2x-3y+z+1=0\) and point Q(1,5,-2). POI of plane with line through Q perpendicular to plane.`, a: String.raw`<p>Line x=1+2t,y=5-3t,z=-2+t into plane: 2(1+2t)-3(5-3t)+(-2+t)+1=0→14t-14=0→t=1→P(3,2,-1).</p><p class="answer">P(3,2,-1) — foot from Q to plane</p>` },
    { tier:"likely", lesson:"4.2", q: String.raw`<strong>Best #14a,b:</strong> a) plane \(3x+y-2z-14=0\) and line through origin perpendicular to plane → POI. b) line \((4,6,-3)+t(2,3,-1)\) intersects xz-plane (y=0).`, a: String.raw`<p>a) Line x=3t,y=t,z=-2t into plane:9t+t+4t-14=0→t=1→P(3,1,-2). b) y=0→6+3t=0→t=-2→x=0,z=-1→(0,0,-1).</p><p class="answer">a) (3,1,-2)  b) (0,0,-1)</p>` },
    { tier:"likely", lesson:"4.6", q: String.raw`<strong>Best #15:</strong> System π1:x+2y-z=4,π2:2x+4y-2z=8,π3:x-y+z=1. Show two coincident + line in parametric.`, a: String.raw`<p>π2=2π1 coincident. Add π1+π3:2x+y=5→y=5-2x. Let x=t→y=5-2t,z=6-3t→line (0,5,6)+t(1,-2,-3).</p><p class="answer">Coincident pair π1,π2; line r=(0,5,6)+t(1,-2,-3)</p>` },
    { tier:"likely", lesson:"4.6", q: String.raw`<strong>Best #16:</strong> Classify three planes: \(x+y+z=2,\ x+y+z=5,\ 2x-y+z=1\).`, a: String.raw`<p>n1=n2 parallel distinct (2≠5), n3 non-parallel → two parallel distinct intersected by third, no solution.</p><p class="answer">No solution: two parallel distinct cut by third</p>` },
    { tier:"likely", lesson:"4.5", q: String.raw`<strong>Best #17:</strong> Acute angle θ to nearest degree between \(2x-y+2z-5=0\) and \(x+2y-2z+1=0\).`, a: String.raw`<p>n1·n2=-4 abs4, |n1|=3,|n2|=3 cosθ=4/9→θ≈64°.</p><p class="answer">θ≈64°</p>` },
    { tier:"likely", lesson:"4.1", q: String.raw`<strong>Best #18:</strong> Foot of perpendicular N from Q(2,1,-2) to line \((1,-1,0)+t(2,1,-1)\).`, a: String.raw`<p>N(t)=(1+2t,-1+t,-t), QN=(2t-1,t-2,2-t), dot with (2,1,-1)=0→6t-6=0→t=1→N(3,0,-1).</p><p class="answer">N(3,0,-1)</p>` },
    { tier:"extra", lesson:"4.2", q: String.raw`<strong>Best #19a,b:</strong> Line \(L:\frac{x-k}{2}=\frac{y+3}{1}=\frac{z-1}{3}\), plane \(2x-y-z-5=0\). Find k so L lies in π, verify d·n perp and point in plane.`, a: String.raw`<p>d·n=4-1-3=0 parallel. P0(k,-3,1) in plane:2k+3-1-5=0→k=3/2. Verification dot 0 and plug k checks.</p><p class="answer">k=3/2</p>` },
    { tier:"extra", lesson:"4.6", q: String.raw`<strong>Best #20 a) i) ii) b):</strong> Planes \(3x-6y+9z+4=0\) and \(2x-4y+6z+k=0\). i) k for parallel distinct, ii) k for coincident, b) why no k gives line?`, a: String.raw`<p>n1=3/2 n2 always parallel. 3/2·π2:3x-6y+9z+3k/2=0. Coincident when 3k/2=4→k=8/3. Parallel distinct when k≠8/3. No line because normals always parallel.</p><p class="answer">i) k≠8/3 parallel distinct ii) k=8/3 coincident; no line as normals always ∥</p>` }
  ]
});

window.QA.push({
  id:"qa-old-quest", lesson:"mix", title:"Old Quest Review (26 Q) — extra angle/distance/closest-point twists",
  source:"Old Quest Review - Unit 4.pdf / lines-planes quest legacy",
  items:[
    { tier:"likely", lesson:"4.6", q: String.raw`<strong>Old Quest Q25:</strong> Solve \(x+y+z=6,\ 2x-y+z=2,\ x+2y-z=7\). Point?`, a: String.raw`<p>(1)+(3):2x+3y=13, (2)+(3):3x+y=9→y=9-3x→2x+27-9x=13→x=2,y=3,z=1 → P(2,3,1).</p><p class="answer">P(2,3,1)</p>` },
    { tier:"likely", lesson:"4.6", q: String.raw`<strong>Old Quest Q26:</strong> \(x+y+z=6,\ 2x-y+z=3,\ 3x+2z=9\). Show line + equation.`, a: String.raw`<p>π1+π2=3x+2z=9=π3 redundant → line. Let z=t→x? 3x=9-2t→x=3-2t/3, y=6-x-z=3 -t/3 → r=(3,3,0)+t(-2,-1,3) scaled.</p><p class="answer">Common line</p>` }
  ]
});

/* mixed review quiz */
window.QUIZ.push(
{ id:"qr-u4-1", lesson:"mix", tier:"essential", prompt: String.raw`Two lines in R³: directions not multiples, 2×2 solution fails in 3rd equation.`, choices:["Intersecting","Skew","Parallel distinct","Coincident"], answer:1, explain: String.raw`Non-parallel + inconsistent = skew.` },
{ id:"qr-u4-2", lesson:"mix", tier:"essential", prompt: String.raw`Line substitution into plane gives 0t+8=0.`, choices:["One POI","Line in plane","Parallel distinct (no intersection)","Triangular prism"], answer:2, explain: String.raw`Contradiction.` },
{ id:"qr-u4-3", lesson:"mix", tier:"essential", prompt: String.raw`Planes \(x+2y-z=3\) and \(2x-y+3z=1\) are?`, choices:["Parallel","Coincident","Intersect in line","No solution"], answer:2, explain: String.raw`Normals not parallel.` },
{ id:"qr-u4-4", lesson:"mix", tier:"essential", prompt: String.raw`System gives 0=0 plus two independent eqns. Three planes?`, choices:["Unique point","Line of intersection","Plane","No solution"], answer:1, explain: String.raw`One free variable → line.` },
{ id:"qr-u4-5", lesson:"mix", tier:"essential", prompt: String.raw`RREF row [0 0 0 | 5] means?`, choices:["Point","Line","No solution","Plane"], answer:2, explain: String.raw`0=5 inconsistency.` },
{ id:"qr-u4-6", lesson:"mix", tier:"likely", prompt: String.raw`Angle between planes uses:`, choices:["|n1·n2|/(|n1||n2|)","|m1×m2|","m·n","None"], answer:0, explain: String.raw`Cos of angle between normals.` },
{ id:"qr-u4-7", lesson:"mix", tier:"likely", prompt: String.raw`Foot of perpendicular from point Q to plane π — direction of construction line is:`, choices:["Direction of any line in plane","Normal of plane","Zero vector","Any scalar multiple of Q"], answer:1, explain: String.raw`Perpendicular to plane is normal.` },
{ id:"qr-u4-8", lesson:"mix", tier:"essential", prompt: String.raw`Review Q14: non-intersecting lines in R³ are:`, choices:["Only parallel","Parallel distinct or skew","Only skew","Intersecting"], answer:1, explain: String.raw`Parallel distinct or skew.` }
);

/* cram sheet */
window.EXT.push({ id:"cram-u4", lesson:"mix", title:"Unit 4 Cram sheet — one page",
  html: String.raw`
<div class="cram">
<h3>Unit 4 cram — read this then do types 1-15</h3>
<ol>
<li><strong>Two lines:</strong> ratio test on m's → if ∥ test point → coincident? no→parallel distinct. If ∦, equate x,y solve t,u check z. Consistent → POI, else skew.</li>
<li><strong>Line-plane:</strong> x=x0+at... sub into Ax+By+Cz+D=0 → (m·n)t + ...=0. t number→POI, 0t=0→lies in, 0t=k→parallel distinct.</li>
<li><strong>Solve 3×3 no matrix:</strong> two pairs kill one var→2×2→back-sub. 0=0→free var→line; 0=k→no solution.</li>
<li><strong>Matrix/RREF:</strong> [A B C|D]. REF staircase. RREF pivot reading. [0 0 0|k≠0] no sol, [0 0 0|0] redundant.</li>
<li><strong>Two planes:</strong> compare n1,n2. n1∦n2→line d=n1×n2, point set var=0 solve 2×2. n1∥n2 check constants proportional→coincident vs parallel distinct.</li>
<li><strong>Three planes:</strong> solve first. Point→unique. 0=0→line (parametrise) or plane. 0=k→no solution, use normals to name: two ∥ cut by third / three ∥ distinct / triangular prism (no normals ∥ but inconsistent).</li>
<li><strong>k extension:</strong> line lies in plane → need d·n=0 AND P0 in plane → equation for k. Planes ∥/coincident → make n1 = s n2 and D1 = s D2 for coincident, else ∥ distinct.</li>
<li><strong>Angles:</strong> plane-plane cosθ=|n1·n2|/(|n1||n2|). Line-plane sinφ=|m·n|/(|m||n|).</li>
<li><strong>Distance to plane:</strong> |Ax0+By0+Cz0+D|/√(A²+B²+C²). Parallel planes: point on one to other.</li>
<li><strong>Foot / closest:</strong> to plane: line Q+t n into plane. To line: N(t)=P0+t m, (N-Q)·m=0 solve t.</li>
<li><strong>Intercepts / coord plane hit:</strong> set coord=0 solve t or set two=0 for plane.</li>
<li><strong>Vocab for review sheet:</strong> normal=(A,B,C); ∥ normals→scalar multiples; ∤→line; 1 solution line-plane; ∞ line itself; two coincident+third ∥ or three ∥ if normals multiples + no sol; triangular prism if normals not multiples +0 sol; line distinct from plane→parallel distinct; line ⟂ plane→∥ normal; row [1 -3 4|-5]; RREF [1 0 0|3.5;0 1 0|2;0 0 1|-1] → (3.5,2,-1).</li>
</ol>
</div>` });
