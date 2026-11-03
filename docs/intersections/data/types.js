/* MCV4U Unit 4 · Question types playbook: every intersection question type, with recipe, traps and k/extension variants. */
window.TYPES = window.TYPES || [];

window.TYPES_INTRO = String.raw`<p>Unit 4 asks only six core intersection types. Everything else is those six with a twist: a parameter \(k\) hiding inside the line or plane, an angle or distance, or a "name the geometry" sentence. Every Colosimo drill sheet (A/B/C/D), unit review, and quest review question is one of the rows below — or two rows back-to-back for the hard ones. Use the "If the question says" column to match the wording, do the first move in the right column, then open that type for full recipe, worked example, traps and a try-yourself.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>If the question says…</th><th>It's this type</th><th>First move</th></tr></thead>
<tbody>
<tr><th colspan="3">Core — intersections (blank notes)</th></tr>
<tr><td>"two 3D lines", "coincident / parallel distinct / skew", "POI"</td><td><a href="#/types/0">Two lines in R³</a></td><td>Ratio test on \(\vec m_1,\vec m_2\); not ∥ → equate x,y solve t,u check z</td></tr>
<tr><td>"line meets plane", "intersects / lies in / parallel distinct"</td><td><a href="#/types/1">Line and plane</a></td><td>Parametric line \(x(t),y(t),z(t)\) into \(Ax+By+Cz+D=0\)</td></tr>
<tr><td>"solve system", "no matrices", "point P(x,y,z)"</td><td><a href="#/types/2">3×3 system algebraically</a></td><td>Kill one var from two pairs → 2×2 → back-sub</td></tr>
<tr><td>"augmented matrix", "REF / RREF", "[A|B] row"</td><td><a href="#/types/3">Matrices & RREF</a></td><td>Row = plane; row ops → stair case; read pivots</td></tr>
<tr><td>"line of intersection of two planes", "angle between planes"</td><td><a href="#/types/4">Two planes → line + angle</a></td><td>\(d=n_1×n_2\), point with one var=0</td></tr>
<tr><td>"three planes", "unique / line / plane / no solution", "triangular prism / two parallel cut by third"</td><td><a href="#/types/5">Three planes</a></td><td>Solve; if 0 sol use normals to name geometry</td></tr>
<tr><th colspan="3">Extensions — same core with k / distance / foot / axis</th></tr>
<tr><td>"find k so line lies in plane / plane ∥ or coincident"</td><td><a href="#/types/6">k-value extensions</a></td><td>\(d·n=0\) + point in plane; or make eqns proportional</td></tr>
<tr><td>"foot of perpendicular N", "closest point on line", "line through Q ⟂ plane"</td><td><a href="#/types/7">Foot / closest point</a></td><td>Plane case: line \(Q+tn\); line case: \(QN·m=0\)</td></tr>
<tr><td>"where line meets xy/xz/yz plane", "x-intercept of plane", "hits coordinate plane"</td><td><a href="#/types/8">Hits coordinate plane / axis</a></td><td>Set that coord=0 solve t</td></tr>
<tr><td>"distance to plane", "distance between parallel planes / point to line"</td><td><a href="#/types/9">Distances (recap, tested here)</a></td><td>\(|Ax_0+...|/√(...)\) or \(|P_0Q×m|/|m|\)</td></tr>
<tr><td>Review sheet fill-ins (normals, RREF reading, vocab)</td><td><a href="#/types/10">Concept sheet + RREF reading</a></td><td>Normal=(A,B,C); row=[...|...]; phrases from answer key</td></tr>
</tbody></table></div>
<p style="margin-top:10px"><em>Tip: the hard quest questions are usually one core + one extension. Example Best #13 = Type 2 (line-plane) with Type 7 twist (foot is Q+tn). Best #15 = Type 6 + Type 5.</em></p>`;

window.TYPES.push(
{
  id: "t4-two-lines",
  lesson: "4.1",
  tier: "essential",
  title: "Two lines in R³ — classify + POI",
  spot: String.raw`<p>Question says "determine whether the two 3D lines intersect at a single point, are coincident, parallel and distinct, or skew" (Best Quest 1-3, Worksheet 4.1, Old Quest 1-3) and "if they intersect, calculate exact POI". Both lines given as \(\vec r = \vec r_0 + t\vec m\) or symmetric \(\frac{x-x_0}{a}=\dots\). One question type the entire lesson is built on.</p>`,
  steps: [
    String.raw`Extract \(\vec m_1,\vec m_2\). Scalar multiple test: try \(k\) such that \(\vec m_1 = k\vec m_2\). Ratio method \(\frac{a_1}{a_2}=\frac{b_1}{b_2}=\frac{c_1}{c_2}\) works when no zero, otherwise check "is (2,-4,6) = -2×(-1,2,-3)?".`,
    String.raw`If \(\vec m_1\parallel\vec m_2\): point test. Take \(P_{01}\) from L1, attempt to find its \(u\) on L2 from one coordinate (e.g. \(x_{01}=x_{02}+a_2u\)). Check other two coords with that \(u\). Match all → coincident (same line, ∞). Any mismatch → parallel distinct (0).`,
    String.raw`If not parallel: equate components system of 3 eqns in 2 unknowns \(t,u\). Number them (1)(2)(3). Solve (1)&(2) for \(t,u\) (elimination). Suppose \(t=t_0,u=u_0\).`,
    String.raw`Consistency check — write LS vs RS: plug \(t_0,u_0\) into (3). If LS=RS → intersecting. POI by plugging \(t_0\) into L1 (or \(u_0\) into L2). If LS≠RS → skew. No POI. Sentence: "Non-parallel and inconsistent → skew lines".`,
    String.raw`If intersecting and question asks perpendicular: compute \(\vec m_1\cdot\vec m_2\). If 0 → perpendicular intersection.`
  ],
  example: {
    q: String.raw`<p><strong>Best Quest #2:</strong> \(L_1:(2,0,1)+t(1,3,-2)\), \(L_2:(7,1,-7)+u(-2,1,3)\). Classify and POI.</p>`,
    a: String.raw`<ol class="work">
<li>Directions \((1,3,-2)\) and \((-2,1,3)\) not multiples → may intersect or be skew.</li>
<li>Equate: \(2+t=7-2u\) → \(t+2u=5\) (1); \(3t=1+u\) → \(u=3t-1\) (2); \(1-2t=-7+3u\) (3).</li>
<li>From (2) into (1): \(t+2(3t-1)=5\Rightarrow7t=7\Rightarrow t=1\), \(u=2\).</li>
<li>Check (3): LHS \(1-2(1)=-1\), RHS \(-7+3(2)=-1\) → consistent.</li>
<li>POI via L1 \(t=1\): \((2+1,0+3,1-2)=(3,3,-1)\).</li>
</ol><p class="answer">Intersect at \(P(3,3,-1)\)</p>`
  },
  traps: [
    String.raw`Solving x&y and forgetting z check — you'd never detect skew. The z (or any third) equation IS the test.`,
    String.raw`Using same letter t for both lines. Use t and u (or s). Otherwise you force t=u and miss intersection where parameters differ (example above t=1,u=2 same point).`,
    String.raw`Writing just "parallel" on worksheet — teacher wants "parallel and distinct" vs "coincident". Distinguish with point test.`
  ],
  seen: String.raw`B Blank 4.1 Ex1-3 · C Worksheet 4.1 Q1-3 (skew, intersect+POI, parallel distinct) · Best Quest 1-3 · Old Quest 1-3`,
  tryq: String.raw`<p>\(L_1:(0,2,5)+t(2,-4,6)\), \(L_2:(1,1,1)+u(-1,2,-3)\). Classify.</p>`,
  trya: String.raw`<p>\(\vec m_1=-2\vec m_2\) → parallel. Test (0,2,5) on L2: 0=1-u→u=1→y=1+2(1)=3≠2 → parallel distinct. Point test fails.</p>`
},
{
  id: "t4-line-plane",
  lesson: "4.2",
  tier: "essential",
  title: "Line and plane — POI / lies in / parallel distinct",
  spot: String.raw`<p>"Determine point of intersection between parametric line and plane", "determine whether line intersects plane, lies in plane, or is parallel and distinct" (Blank 4.2 Ex1-3, Best 4-6). Line vector/parametric/symmetric, plane Cartesian \(Ax+By+Cz+D=0\).</p>`,
  steps: [
    String.raw`Write line as \(x=x_0+at,\ y=y_0+bt,\ z=z_0+ct,\ t\in\mathbb R\). If symmetric \(\frac{x-x_0}{a}=\dots\) set each = t first.`,
    String.raw`Substitute into plane: \(A(x_0+at)+B(y_0+bt)+C(z_0+ct)+D=0\). Expand → \((Aa+Bb+Cc)t + (Ax_0+By_0+Cz_0+D)=0\). Note \(Aa+Bb+Cc=\vec m\cdot\vec n\).`,
    String.raw`Solve: if coeff of t ≠0 → \(t=-(Ax_0+By_0+Cz_0+D)/(Aa+Bb+Cc)\). POI = \((x_0+at,\dots)\). If coeff=0 and constant=0 → \(0=0\) ∀t → line lies in plane (∞). If coeff=0 and constant≠0 → \(0=k\) → parallel distinct (0).`,
    String.raw`Fast pre-check: \(\vec m\cdot\vec n=0\) means line ∥ plane (so either lies in or parallel distinct). ≠0 guarantees one POI. Still need constant check for distinction when =0.`
  ],
  example: {
    q: String.raw`<p><strong>Best #4, #5, #6 as one sheet:</strong> (a) \(x=1+3t,y=2-t,z=-1+2t\) & \(2x+3y-z-11=0\) → POI. (b) \((3,1,-2)+t(2,-1,1)\) vs \(x+3y+z+4=0\). (c) Show \((1,2,-1)+t(1,1,5)\) lies in \(2x+3y-z-9=0\).</p>`,
    a: String.raw`<ol class="work">
<li>(a) Sub: \(2(1+3t)+3(2-t)-(-1+2t)-11=0\Rightarrow t-2=0\Rightarrow t=2\). POI \((7,0,3)\).</li>
<li>(b) \(x=3+2t,y=1-t,z=-2+t\): \((3+2t)+3(1-t)+(-2+t)+4=0\Rightarrow0t+8=0\) → no solution → parallel distinct.</li>
<li>(c) \((1+t,2+t,-1+5t)\) into plane: \(2(1+t)+3(2+t)-(-1+5t)-9=0\Rightarrow0=0\) true ∀t ∈ℝ → line lies completely within plane. Prove by showing identity for all t, not just two points.</li>
</ol><p class="answer">(a) \(P(7,0,3)\) (b) parallel distinct (c) \(0=0\) ∀t → lies in plane</p>`
  },
  traps: [
    String.raw`Sign on D: plane \(2x+3y-z-11=0\) has D=-11. Keep as \(+D\).`,
    String.raw`Stopping after t value — question says "calculate exact coordinates of POI" so plug back.`,
    String.raw`"Show line lies in plane" requires proof \(0=0\) for all t, not just testing two points (two points could coincidentally lie on plane while direction not in plane? No — but proof needs general t).`
  ],
  seen: String.raw`Blank 4.2 Ex1-3 (one POI, parallel, lies in) · Worksheet 4.2 · Best 4-6 · Old Quest line-plane items`,
  tryq: String.raw`<p>Where does \(\vec r=(4,6,-3)+t(2,3,-1)\) hit plane \(y=0\) (xz-plane)?</p>`,
  trya: String.raw`<p>Set y=0: 6+3t=0→t=-2→(0,0,-1). This is Type 8 but uses same substitution.</p>`
},
{
  id: "t4-systems",
  lesson: "4.3",
  tier: "essential",
  title: "Solve 3×3 system algebraically (no matrices)",
  spot: String.raw`<p>"Solve the following system using algebraic elimination (do not use matrices). State the complete point P(x,y,z)" (Best 9-10). "Show system has infinitely many solutions and write common line in parametric vector form" (Best 11). Worksheet 4.3 + Review.</p>`,
  steps: [
    String.raw`Number eqns (1)(2)(3). Choose variable to kill first (smallest coefficients). Multiply to make coefficients match and add/sub to create two new eqns (4)(5) with one fewer variable.`,
    String.raw`Solve resulting 2×2 for two vars, then back-sub into original for third. State \(P(\dots)\).`,
    String.raw`If during elimination you get \(0=k\neq0\) → no solution (inconsistent). If \(0=0\) → redundancy → one free variable. Let free var = t, express others in it, write line \(\vec r=\vec r_0+t\vec d,\ t\in\mathbb R\).`,
    String.raw`Always check all three originals with your triple.`
  ],
  example: {
    q: String.raw`<p><strong>Best #9:</strong> \(x+y+z=5,\ 2x-y+z=2,\ x+2y-z=3\) → point. <strong>Best #11:</strong> \(x+y+z=4,\ 2x-y+3z=5,\ 3x+4z=9\) → line.</p>`,
    a: String.raw`<ol class="work">
<li>(9): 2×(1): \(2x+2y+2z=10\) minus (2): \(3y+z=8\) (4). (3)-(1): \(y-2z=-2\) (5) → y=2z-2. Into (4): 7z=14→z=2,y=2,x=1 → P(1,2,2).</li>
<li>(11): Add (1)+(2): \(3x+4z=9\) which is exactly (3) → third redundant. Let z=t→x=3-4t/3, y=1+t/3. Line \(\vec r=(3,1,0)+s(-4,1,3)\).</li>
</ol><p class="answer">P(1,2,2); line (3,1,0)+s(-4,1,3)</p>`
  },
  traps: [
    String.raw`Sign flip when subtracting equations — write "2×(1): ..." explicitly.`,
    String.raw`"Do not use matrices" means write "Replace Eq2 by Eq2-2Eq1" not "R2→R2-2R1". Teacher checks wording.`,
    String.raw`Infinite case: picking free variable that forces fractions vs clean one — either works but choose clean for speed.`
  ],
  seen: String.raw`Blank 4.3 Ex1-3 · Worksheet 4.3 · Best 9-11 · Old Quest 25`,
  tryq: String.raw`<p>\(2x+y-z=4,\ x-2y+2z=-3,\ 3x+2y+z=10\) → point?</p>`,
  trya: String.raw`<p>2×(1)+(2) not needed — Add (1)+(3):5x+3y=14, 2×(1)+(2):5x=5→x=1,y=3,z=1 → P(1,3,1).</p>`
},
{
  id: "t4-matrices",
  lesson: "4.4",
  tier: "essential",
  title: "Solve with matrices — augmented, REF, RREF",
  spot: String.raw`<p>"Solve using matrices", "write augmented matrix", "if RREF is [...] solution is ..." (Review Q12-13, Worksheet 4.4). Also "solve linear system using matrices" variant of Type 3.</p>`,
  steps: [
    String.raw`Write \([A\ B\ C\ |\ D]\) per plane. Keep signs exactly: for \(x-3y+4z=-5\) row is \([1\ -3\ 4\ |\ -5]\) (Review Q12 answer).`,
    String.raw`Allowed row ops: swap \(R_i\leftrightarrow R_j\), multiply by non-zero \(kR_i\), replace \(R_i→R_i±kR_j\).`,
    String.raw`Goal REF: stair-case leading 1s, zeros below pivots. RREF also zeros above.`,
    String.raw`Read: \([1\ 0\ 0\ |\ a;0\ 1\ 0\ |\ b;0\ 0\ 1\ |\ c]\) → point \((a,b,c)\). Row \([0\ 0\ 0\ |\ k≠0]\) → no solution (inconsistent). One zero row \([0\ 0\ 0\ |\ 0]\) + two pivots → line (one free). Two zero rows + one pivot → plane.`
  ],
  example: {
    q: String.raw`<p><strong>Review Q13:</strong> RREF \(\begin{bmatrix}1&0&0&3.5\\0&1&0&2\\0&0&1&-1\end{bmatrix}\) → solution? <strong>Worksheet:</strong> \(\begin{cases}x+y+z=5\\2x-y+z=2\\x+2y-z=3\end{cases}\) as matrix → solve.</p>`,
    a: String.raw`<ol class="work">
<li>RREF reading: \([1\ 0\ 0\ |\ 3.5]\) means \(x=3.5\), \(y=2\), \(z=-1\) → (3.5,2,-1). Exactly Review Q13 answer.</li>
<li>Matrix [[1 1 1 5],[2 -1 1 2],[1 2 -1 3]]: R2→R2-2R1, R3→R3-R1 → [[1 1 1 5],[0 -3 -1 -8],[0 1 -2 -2]]. Continue → RREF [[1 0 0 1],[0 1 0 2],[0 0 1 2]] → (1,2,2).</li>
<li>Row [0 0 0 |0] → coincident pair signal; [0 0 0 |2] → parallel distinct.</li>
</ol><p class="answer">(3.5,2,-1); (1,2,2)</p>`
  },
  traps: [
    String.raw`Missing vertical bar in notation — augmented matrix has [...]|... not just coefficients.`,
    String.raw`Dividing by zero trying to get pivot 1 — swap rows first.`,
    String.raw`Writing RREF as answer when question asks just augmented matrix (Q12) — only row needed.`
  ],
  seen: String.raw`Blank 4.4 · Worksheet 4.4 · Unit Review Q12 row + Q13 RREF → point · Old Quest matrix items`,
  tryq: String.raw`<p>RREF [[1 0 1 3],[0 1 -1 2],[0 0 0 0]] →?</p>`,
  trya: String.raw`<p>Two pivots, one free (z). Let z=t→x=3-t,y=2+t → line (3,2,0)+t(-1,1,1).</p>`
},
{
  id: "t4-two-planes",
  lesson: "4.5",
  tier: "essential",
  title: "Two planes → line of intersection + angle",
  spot: String.raw`<p>"Determine parametric vector equation for line of intersection between two non-parallel planes" (Best 7-8) "angle of intersection / acute angle θ" (Best 17, Blank 4.5 Ex3, Old 21).</p>`,
  steps: [
    String.raw`Classify first: compare normals \(n_1,n_2\). If multiples → check constant proportionality for coincident vs parallel distinct. If not multiples → must intersect in line.`,
    String.raw`Direction: \(\vec d = \vec n_1×\vec n_2\). Simplify dividing by GCD, make first non-zero positive.`,
    String.raw`Point: set one coordinate =0 (choose easiest 2×2). Example set z=0 → solve \(\begin{cases}A_1x+B_1y=D_1\\A_2x+B_2y=D_2\end{cases}\) for x,y. If determinant 0, try x=0 or y=0.`,
    String.raw`Write \(\vec r = P_0 + t\vec d,\ t\in\mathbb R\). Also parametric x=...,y=...,z=... and optionally symmetric.`,
    String.raw`Angle: \(\cos\theta = |\vec n_1·\vec n_2|/(|n_1||n_2|)\) (absolute for acute). Line-plane angle uses sin (see ext).`
  ],
  example: {
    q: String.raw`<p><strong>Best #7:</strong> \(x+2y-z=3,\ 2x-y+3z=1\) → line. <strong>Best #17:</strong> \(2x-y+2z-5=0\) & \(x+2y-2z+1=0\) → angle.</p>`,
    a: String.raw`<ol class="work">
<li>Normals (1,2,-1) & (2,-1,3) not parallel → line. Cross = (5,-5,-5) ∼ (1,-1,-1). Set z=0: x+2y=3,2x-y=1→y=2x-1→5x=5→x=1,y=1→P0(1,1,0). Line (1,1,0)+t(1,-1,-1).</li>
<li>Angle: n1=(2,-1,2), n2=(1,2,-2), dot=-4 abs 4, |n1|=3,|n2|=3 → cosθ=4/9→θ≈64°.</li>
</ol><p class="answer">Line (1,1,0)+t(1,-1,-1); θ≈64°</p>`
  },
  traps: [
    String.raw`Setting z=0 that yields dependent equations (no unique point) — pick different var =0.`,
    String.raw`Not scaling direction: leave (5,-5,-5) instead of (1,-1,-1) — technically correct but unwieldy.`,
    String.raw`Angle forgetting absolute → obtuse sometimes. Use |dot| for acute.`
  ],
  seen: String.raw`Blank 4.5 Ex1-2 line + Ex3 angle · Worksheet 4.5 Q1-3 · Best 7-8 line, 17-18 angle · Challenge "make coincident?"`,
  tryq: String.raw`<p>\(2x+y+z=5,\ x-2y+2z=4\) → line? Angle?</p>`,
  trya: String.raw`<p>d=(4,-3,-5), y=0→2x+z=5,x+2z=4→x=2,z=1 → line (2,0,1)+t(4,-3,-5). Angle cos=|2·1+1·(-2)+1·2|/(√6·3)=2/(3√6)≈74°.</p>`
},
{
  id: "t4-three-planes",
  lesson: "4.6",
  tier: "essential",
  title: "Three planes — point / line / plane / no solution geometry",
  spot: String.raw`<p>"Solve system of three planes", "classify geometric interaction", "no solution describe configuration", "triangular prism", "two coincident" (Review Q6-7, Best 12,15,16, Worksheet 4.6).</p>`,
  steps: [
    String.raw`Step A — normal parallelism: any normals parallel? This tells which no-sol geometries are possible. No normals parallel → only point, common line, or prism. Some parallel → parallel-distinct families possible.`,
    String.raw`Step B — solve 3×3 via elimination or RREF. Point (a,b,c) → unique point. Done.`,
    String.raw`If 0=0 appears → redundancy: one 0=0 → one free → common line (param). Two 0=0 → plane (all coincident or two coincident redundant pair). For coincident pair+third, intersect as Type 5.`,
    String.raw`If 0=k≠0 → no solution. Name geometry:
• Two normals ∥ + third ∦ → "two parallel distinct cut by third" (Best 12,16)
• All three normals ∥ → "three parallel distinct" or "two coincident + one parallel distinct" if two eqns proportional incl constant
• No normals ∥ but 0=k → "triangular prism / three non-parallel planes forming prism" (Review Q7). Pairwise lines ∥.`
  ],
  example: {
    q: String.raw`<p><strong>Point:</strong> Best 9 → (1,2,2). <strong>Line redundant:</strong> Best 11. <strong>Line coincident pair:</strong> Best 15. <strong>No:</strong> Best 12.</p>`,
    a: String.raw`<ol class="work">
<li><strong>Point:</strong> x+y+z=5,2x-y+z=2,x+2y-z=3 → elimination → P(1,2,2).</li>
<li><strong>Line redundant:</strong> x+y+z=4,2x-y+3z=5,3x+4z=9. Add first two = 3x+4z=9 = third → redundant. Let z=t→x=3-4t/3,y=1+t/3 → r=(3,1,0)+s(-4,1,3).</li>
<li><strong>Coincident pair:</strong> π1:x+2y-z=4, π2:2x+4y-2z=8 (=2π1) coincident, π3:x-y+z=1. Add π1+π3 2x+y=5→y=5-2t let x=t→z=6-3t → line (0,5,6)+t(1,-2,-3).</li>
<li><strong>No:</strong> x+y+z=3,2x+2y+2z=10,x-y+2z=4 → first two conflict 3 vs 5 → n1∥n2 ∦ n3 → two parallel distinct cut by third.</li>
</ol><p class="answer">Point (1,2,2); lines as above; no sol as named</p>`
  },
  traps: [
    String.raw`Saying just "no solution" without geometry name — Review Q6-Q7 marks require phrase "two coincident and third parallel but distinct..." / "triangular prism".`,
    String.raw`For line case just "infinitely many" without param line \(\vec r\) — must write line.`,
    String.raw`Mixing prism (no normals parallel) with parallel cases.`
  ],
  seen: String.raw`Blank 4.6 diagram + Ex1-2 · Worksheet 4.6 Q1-4 · Review Q6-Q7 · Best 9-12,15,16 · Old 25-26`,
  tryq: String.raw`<p>Classify: \(x+y+z=2,\ x+y+z=5,\ 2x-y+z=1\).</p>`,
  trya: String.raw`<p>n1=n2 parallel distinct (2≠5), n3 ∦ → two parallel distinct intersected by third, no solution.</p>`
},
{
  id: "t4-k",
  lesson: "4.6",
  tier: "likely",
  title: "k-value — line in plane / planes ∥ / coincident",
  spot: String.raw`<p>"Determine k such that line lies completely within plane" (Best 19a,b), "k for which planes do not intersect / are coincident" (Best 20, Review Q10). Old Q9 "k so vectors coplanar". Extension of core.</p>`,
  steps: [
    String.raw`Line inside plane: need two conditions. (1) Direction ∥ plane: \(\vec d·\vec n=0\). Check this first — often holds for all k (validation). If d contains k, set dot=0 and solve k.`,
    String.raw`(2) Point on line lies in plane: \(P_0(k,\dots)\) satisfies \(Ax+By+Cz+D=0\) → solve for k.`,
    String.raw`Planes parallel/coincident: \(\vec n_1 = s\vec n_2\) must hold. If normals contain k, set ratios equal → solve s then k. Then check constants: multiply one plane by s, equate constant. Coincident when constants match same ratio, parallel distinct otherwise.`,
    String.raw`Verification sentence teacher wants: show \(d·n=0\) and point works (Best 19b).`
  ],
  example: {
    q: String.raw`<p><strong>19a:</strong> \(L:\frac{x-k}{2}=\frac{y+3}{1}=\frac{z-1}{3}\) in \(2x-y-z-5=0\) → k. <strong>20:</strong> \(3x-6y+9z+4=0\) & \(2x-4y+6z+k=0\) → k for i) parallel distinct ii) coincident. <strong>Review Q10:</strong> \(x+2y-3z+1=0\) coincident with \(2x+4y-6z+k=0\).</p>`,
    a: String.raw`<ol class="work">
<li>19a: d=(2,1,3), n=(2,-1,-1), d·n=4-1-3=0 already. P0(k,-3,1) in plane: 2k+3-1-5=0→k=3/2.</li>
<li>20: n1=(3,-6,9)=3/2(2,-4,6)=3/2 n2 always ∥. Multiply π2 by 3/2: 3x-6y+9z+3k/2=0. Match 3k/2=4→k=8/3 coincident, else k≠8/3 parallel distinct. No k gives line because normals always ∥.</li>
<li>Q10: First ×2 → 2x+4y-6z+2=0 → for coincident with second k=2.</li>
</ol><p class="answer">k=3/2; i) k≠8/3 parallel distinct ii) k=8/3 coincident; Q10 k=2</p>`
  },
  traps: [
    String.raw`Only doing dot check forgetting point check — parallel includes both distinct and contained, k decides which.`,
    String.raw`Plane-plane: solving only for parallel and ignoring constant → mix up coincident vs distinct.`,
    String.raw`Sign of D when matching constants.`
  ],
  seen: String.raw`Best 19-20 · Review Q10 (×2 gives k) · Old Q9 coplanar vectors`,
  tryq: String.raw`<p>\(π1:2x-y+z=3,\ π2:4x-2y+2z+k=0\). k for coincident?</p>`,
  trya: String.raw`<p>π2=2×π1 would be 4x-2y+2z=6, so need k=6 for coincident, else parallel distinct.</p>`
},
{
  id: "t4-foot",
  lesson: "4.2",
  tier: "likely",
  title: "Foot of perpendicular / closest point",
  spot: String.raw`<p>"Determine exact foot N from point Q to 3D line", "point N on line closest to P", "point of intersection between plane and line through Q perpendicular to plane" (Best 13,14a,18, Old 20). Optimization twist on line-plane.</p>`,
  steps: [
    String.raw`Case A — foot to plane: line through Q with direction = normal \(\vec n\) of plane. Param \(Q+t\vec n\), plug into plane, solve t → POI = foot.`,
    String.raw`Case B — foot to line R³: general point \(N(t)=P_0+t\vec m\) on line. Vector \(\vec{QN}=N(t)-Q\). Impose \(\vec{QN}·\vec m=0\) (orthogonality). Solve t, compute N.`,
    String.raw`Closest point = same as B. Distance then |QN|.`
  ],
  example: {
    q: String.raw`<p><strong>Best 18:</strong> Q(2,1,-2) to line \((1,-1,0)+t(2,1,-1)\) → N. <strong>Best 13:</strong> Q(1,5,-2) to plane \(2x-3y+z+1=0\) → foot.</p>`,
    a: String.raw`<ol class="work">
<li>18: N(t)=(1+2t,-1+t,-t), QN=(2t-1,t-2,2-t). Dot with (2,1,-1): 2(2t-1)+(t-2)-(2-t)=0→6t-6=0→t=1→N(3,0,-1).</li>
<li>13: Line x=1+2t,y=5-3t,z=-2+t into plane: 2(1+2t)-3(5-3t)+(-2+t)+1=0→14t=14→t=1→P(3,2,-1) foot.</li>
</ol><p class="answer">N(3,0,-1); foot (3,2,-1)</p>`
  },
  traps: [
    String.raw`Vector direction confusion: for plane foot direction is normal, not direction lying in plane.`,
    String.raw`QN = N-Q vs Q-N sign doesn't affect dot=0 solving but affects distance direction — keep consistent.`
  ],
  seen: String.raw`Best 13 foot to plane, 14a foot from origin, 18 foot to line · Old 20 closest point`,
  tryq: String.raw`<p>Foot from origin O(0,0,0) to plane \(3x+y-2z-14=0\) perpendicular through origin.</p>`,
  trya: String.raw`<p>Line x=3t,y=t,z=-2t into plane:9t+t+4t-14=0→t=1→(3,1,-2) which is Best 14a.</p>`
},
{
  id: "t4-coord",
  lesson: "4.2",
  tier: "likely",
  title: "Where line/plane hits coordinate plane or axis",
  spot: String.raw`<p>"Where line meets xz-plane (y=0)", "intersects xy-plane (z=0)", "x-, y-, z-intercepts of plane" (Best 14b, Old 4,14). Look for "crosses", "intercepts", "meets".</p>`,
  steps: [
    String.raw`Line hitting plane: coordinate plane is x=0 (yz), y=0 (xz), z=0 (xy). Set that coordinate expression =0, solve t, get other two.`,
    String.raw`Plane intercepts: set two variables=0 solve for third. x-int: y=0,z=0 → Ax+D=0. Similarly y,z.`,
    String.raw`Vector plane hitting xy: set its parametric z(s,t)=0 solve relation s(t) then write line with that relation.`
  ],
  example: {
    q: String.raw`<p><strong>Best 14b:</strong> \(r=(4,6,-3)+t(2,3,-1)\) hits xz? (y=0) where? <strong>Old 14a:</strong> plane \(3x-4y+2z-12=0\) intercepts? <strong>Old 4:</strong> vector plane \((0,2,-3)+s(1,1,2)+t(-2,1,1)\) vs z=0 → line?</p>`,
    a: String.raw`<ol class="work">
<li>14b: y=6+3t=0→t=-2→x=0,z=-1→(0,0,-1).</li>
<li>14a: x-int y=0,z=0→x=4, y-int x=0,z=0→y=-3, z-int x=0,y=0→z=6.</li>
<li>Old 4: z=-3+2s+t=0→t=3-2s → x=s-2(3-2s)=-6+5s, y=2+s+3-2s=5-s → line x=-6+5s,y=5-s,z=0.</li>
</ol><p class="answer">(0,0,-1); (4,0,0),(0,-3,0),(0,0,6); line (-6+5s,5-s,0)</p>`
  },
  traps: [
    String.raw`xz-plane is y=0 (missing letter zero). Most common mix: xy is z=0, yz is x=0, xz is y=0.`,
    String.raw`Trying to find "intersection with xy-plane" of line parallel to it — check m·k=0 first → no single point.`
  ],
  seen: String.raw`Best 14a,b · Old 4 plane vs xy, 14 intercepts · Extension of 4.2`,
  tryq: String.raw`<p>Where does t line x=3t,y=t,z=-2t meet plane \(3x+y-2z-14=0\)? (Trick also foot from origin).</p>`,
  trya: String.raw`<p>Same as 14a — that's line through origin ⟂ plane, so foot is intersection = (3,1,-2).</p>`
},
{
  id: "t4-dist",
  lesson: "4.6",
  tier: "extra",
  title: "Distances — to plane / between parallel planes / point to line",
  spot: String.raw`<p>"Calculate exact perpendicular distance from point to plane" (Old 16,18), "distance between parallel planes" (Old 19), "distance from point to 3D line" (Old 17,20). Recap of U3 distance formulas now tested inside U4.</p>`,
  steps: [
    String.raw`Point \(P_0\) to plane \(Ax+By+Cz+D=0\): \(d=|Ax_0+By_0+Cz_0+D|/√(A²+B²+C²)\). Make form \(...=0\) first.`,
    String.raw`Parallel planes distance: pick any point on one plane (set two coords=0 solve third) then use point-to-plane to other.`,
    String.raw`Point to line R³: \(d=|P_0Q×m|/|m|\) where P0 point on line, m direction, \(P_0Q=Q-P_0\). Closest point foot then |QN| should match d.`
  ],
  example: {
    q: String.raw`<p><strong>Old 18:</strong> \(P(-2,5,3)\) to \(2x-y+2z-11=0\) distance. <strong>Old 19:</strong> \(2x-y+2z-8=0\) vs \(4x-2y+4z+5=0\). <strong>Old 17:</strong> Q(2,-3,1) to line \((-1,0,2)+t(1,2,-2)\).</p>`,
    a: String.raw`<ol class="work">
<li>18: |2(-2)-5+2·3-11|=|-4-5+6-11|=14, denom √(4+1+4)=3 →14/3.</li>
<li>19: n1=(2,-1,2), n2=2×n1 → ∥. Write second as 2x-y+2z+2.5=0. Point on first? y=0,z=0→x=4. Distance to second = |2·4+2.5|/3=10.5/3=3.5.</li>
<li>17: P0=(-1,0,2), P0Q=(3,-3,-1), cross with (1,2,-2) = (8,5,9), |cross|=√170, |m|=3 → d=√170/3.</li>
</ol><p class="answer">14/3; 3.5; √170/3</p>`
  },
  traps: [
    String.raw`Not making RHS zero form before distance — D sign errors.`,
    String.raw`Using parallel-planes distance when planes not parallel.`,
    String.raw`Point-to-line cross product arithmetic — double-check.`
  ],
  seen: String.raw`Old Quest Q16-20 (distance, foot); Best 18 foot inside but distance same; U3 Types 10-12 recap`,
  tryq: String.raw`<p>Distance from (1,4,-2) to \(3x-4y+7=0\) (no z term). Angle? No, distance.</p>`,
  trya: String.raw`<p>|3·1-4·4+7|=|3-16+7|=6, denom 5 →6/5.</p>`
},
{
  id: "t4-concept",
  lesson: "mix",
  tier: "essential",
  title: "Concept vocab + RREF reading (review sheet)",
  spot: String.raw`<p>Unit Review Practice Sheet Q1-14 fill-ins: "normal is…", "normals are…", "solution is line/1/∞", "geometric description is…", "row entry …", "RREF solution …", "non-intersecting 3D lines are parallel distinct or skew".</p>`,
  steps: [
    String.raw`Normal of \(Ax+By+Cz+D=0\) is \((A,B,C)\).`,
    String.raw`Two planes ∥ → normals parallel (scalar multiples). Two not ∥ → line of intersection. Line not ∥ plane → one solution.`,
    String.raw`Line coincident with plane → intersection is "the line itself (infinite solutions)".`,
    String.raw`Three normals scalar multiples + no solution → "two coincident and third parallel distinct, or three parallel distinct". (Q6)`,
    String.raw`Three normals not multiples + 0 solutions → "three non-parallel planes forming triangular prism". (Q7)`,
    String.raw`Line & plane no intersect → "parallel and distinct from" plane. Line ⟂ plane → line "parallel" to normal (direction = normal).`,
    String.raw`Coincident test: \(x+2y-3z+1=0\) with \(2x+4y-6z+k=0\) → ×2 → k=2 (Q10).`,
    String.raw`Line ⟂ \(x+y-2z=4\) → direction \((1,1,-2)\) = normal (Q11). Row for \(x-3y+4z-5=0\) → \([1\ -3\ 4\ |\ -5]\) (Q12). RREF \([1\ 0\ 0\ 3.5;0\ 1\ 0\ 2;0\ 0\ 1\ -1]\) → \((3.5,2,-1)\) (Q13). Two non-intersecting 3D lines → "parallel distinct or skew" (Q14).`
  ],
  example: {
    q: String.raw`<p><strong>Review Q10,12,13 from sheet — with answers:</strong> (10) \(x+2y-3z+1=0\) coincident with \(2x+4y-6z+k=0\) → k? (12) Row entry for \(x-3y+4z-5=0\). (13) RREF as above → solution?</p>`,
    a: String.raw`<ol class="work">
<li>10: Multiply first by 2: 2x+4y-6z+2=0 → for coincident need k=2.</li>
<li>12: \([1\ -3\ 4\ |\ -5]\).</li>
<li>13: x=3.5,y=2,z=-1 → (3.5,2,-1) which matches answer key.</li>
</ol><p class="answer">k=2; [1 -3 4|-5]; (3.5,2,-1)</p>`
  },
  traps: [
    String.raw`Answer key expects exact phrases — write "scalar multiples" not just "parallel", "the line itself (infinite)" etc.`,
    String.raw`Q6 has two possibilities — list both: two coincident+third ∥ OR three ∥ distinct.`
  ],
  seen: String.raw`A Unit Review Practice Sheet Q1-14 full — this type is the whole sheet`,
  tryq: String.raw`<p>If RREF row [0 0 0 |5] appears, what's geometry for two planes? Three planes?</p>`,
  trya: String.raw`<p>Two planes: parallel distinct (no intersection). Three: no common point — then need normal check to name which no-sol family (prism vs parallel).</p>`
}
);
