/* MCV4U Unit 4 · Question types playbook: every intersection question type, with recipe, traps and k/extension variants. */
window.TYPES = window.TYPES || [];

window.TYPES_INTRO = String.raw`<p>Unit 4 has a small set of core intersection types and a large set of extension twists where the same core is asked with a parameter \(k\), with a distance/angle/foot twist, or with "classify geometry". Every worksheet in the Colosimo folder, every review sheet, and all 20 Best Quest + 14 Review + Old Quest questions are one row below (or two rows back to back for the hard ones). The left column tells you how to spot it, the middle column is the page, the right column is the first move you write down.</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>If the question says / gives you …</th><th>It's this type</th><th>First move</th></tr></thead>
<tbody>
<tr><th colspan="3">Core — intersections (what the blank notes teach)</th></tr>
<tr><td>"intersection of two lines", "coincident, parallel distinct, or skew", "point of intersection", symmetric or vector lines in R³</td><td><a href="#/types/1">Two lines in R³ — classify + POI</a></td><td>Ratio test on \(\vec m_1,\vec m_2\); not parallel → equate x,y solve t,u check z</td></tr>
<tr><td>"intersection of line and plane", "line intersects plane / lies in plane / is parallel distinct"</td><td><a href="#/types/2">Line and plane</a></td><td>Write line \(x(t),y(t),z(t)\) and sub into \(Ax+By+Cz+D=0\)</td></tr>
<tr><td>"solve the system", "using algebraic elimination (no matrices)", "state point P(x,y,z)" for 3 eqns</td><td><a href="#/types/3">Solve 3×3 system algebraically (no matrices)</a></td><td>Kill one variable from two pairs → 2×2, then back-sub</td></tr>
<tr><td>"augmented matrix", "row-echelon", "RREF is … solution is …", "[A|B] row entry"</td><td><a href="#/types/4">Solve with matrices / read RREF</a></td><td>Row \([A\ B\ C\ |\ D]\) per equation; REF/RREF → read pivots/free/contradiction</td></tr>
<tr><td>"line of intersection between two non-parallel planes", "where two planes meet", "equation of line common to π1 and π2"</td><td><a href="#/types/5">Two planes → line of intersection</a></td><td>\(\vec d=\vec n_1\times\vec n_2\); set one var=0 solve 2×2 for point</td></tr>
<tr><td>"solve system of three planes", "common point / line / plane", "classify geometric interaction", "no solution describe configuration"</td><td><a href="#/types/6">Three planes — point, line, plane, or no solution</a></td><td>Eliminate or RREF; use normal parallelism to name geometry if 0 solutions</td></tr>
<tr><th colspan="3">Extensions — same core with k, distance, angle, perpendicular twist</th></tr>
<tr><td>"find k such that line lies in plane / is parallel to plane", "line \(\frac{x-k}{a}=…\) in plane …", "for what k are vectors coplanar" (also old)</td><td><a href="#/types/7">k-value — make line lie in / parallel to plane, or planes parallel/coincident</a></td><td>Condition gives equation(s) in k: \(\vec d\cdot\vec n=0\) and \(P_0\) in plane; or make equations proportional</td></tr>
<tr><td>"angle between two planes", "acute angle θ to nearest degree"</td><td><a href="#/types/8">Angle between planes</a></td><td>\(\cos\theta=|\vec n_1\cdot\vec n_2|/(|\vec n_1||\vec n_2|)\)</td></tr>
<tr><td>"angle between line and plane", "φ line-plane"</td><td><a href="#/types/9">Angle between line and plane (extension from U3)</a></td><td>\(\sin\phi=|\vec m\cdot\vec n|/(|\vec m||\vec n|)\) (complement of line-normal angle)</td></tr>
<tr><td>"distance from point to plane", "distance between parallel planes", "distance to coordinate plane"</td><td><a href="#/types/10">Distance to a plane / between parallel planes</a></td><td>\(|Ax_0+By_0+Cz_0+D|/\sqrt{A^2+B^2+C^2}\); for plane-plane pick a point on one</td></tr>
<tr><td>"foot of perpendicular N from Q to line", "closest point on line to P", "where line through Q perpendicular to plane meets plane"</td><td><a href="#/types/11">Foot of perpendicular / closest point</a></td><td>Line through Q with direction = normal (plane case) or general point N(t) + \(\vec{QN}\cdot\vec m=0\)</td></tr>
<tr><td>"where line meets xy-plane / xz-plane / yz-plane / x-axis", "intercepts", "intersects coordinate plane"</td><td><a href="#/types/12">Hit coordinate plane / axis</a></td><td>Set coordinate(s)=0 and solve for t (or for plane set two=0)</td></tr>
<tr><td>"classify if review says parallel, perpendicular, triangular prism, two coincident, etc." (review sheet fill-in)</td><td><a href="#/types/13">Concept vocabulary + RREF reading (review fill-in)</a></td><td>Write normal, test multiples, know phrase bank from Review Sheet answers</td></tr>
<tr><td>"solve with two coincident and third crossing", "show two planes coincident and write line", "best quest 15 style"</td><td><a href="#/types/14">Two coincident + third → line (special three-plane)</a></td><td>Spot proportionality, discard duplicate, intersect remaining pair as Type 5</td></tr>
<tr><td>"distance point to line R³", "shortest distance", Old Quest Q17/20</td><td><a href="#/types/15">Point-to-line distance R³ + closest point (U3 recap but tested here)</a></td><td>\(|\vec{P_0Q}\times\vec m|/|\vec m|\) for distance; foot via dot=0</td></tr>
</tbody></table></div>`;

window.TYPES.push(
{ id:"t4-1", lesson:"4.1", tier:"essential", title:"Two lines in R³ — classify + POI", spot: String.raw`<p>Keywords: "determine whether two 3D lines intersect at a single point, are coincident, parallel and distinct, or skew" (Best Quest 1-3). Both lines given vector \(\vec r = \vec r_0 + t\vec m\) or symmetric. Asked to classify and, if intersecting, "calculate exact coordinates of POI".</p>`, steps:[
String.raw`Get \(\vec m_1=(a_1,b_1,c_1)\), \(\vec m_2=(a_2,b_2,c_2)\). Are they scalar multiples? Compute \(\frac{a_1}{a_2}\) (watch zero). If all equal (with sign) → parallel family. If not → non-parallel family.`,
String.raw`If parallel: pick point \(P_{01}\) from L1, try to solve for its parameter on L2. E.g. \(x_{01}=x_{02}+a_2 u\). One equation gives \(u\). Check y and z with that \(u\). If both match → coincident (∞). If any fails → parallel distinct (0). State "Parallel and Distinct" not just "Parallel".`,
String.raw`If not parallel: equate components → 3 equations, 2 unknowns (t,u). Write them numbered (1)(2)(3). Solve any two (usually x and y) for t,u. Example: from (1)(2) elimination gives t then u.`,
String.raw`Consistency check — the step many skip: plug t,u into the remaining equation. Compute LHS vs RHS explicitly writing LS=... RS=... If equal → intersecting, POI with either line using t or u. If not equal → skew. Write "Since LS≠RS, inconsistent → skew lines" — that is the full justification Colosimo wants.`,
String.raw`Perpendicular check (extension): if intersecting, dot \(\vec m_1\cdot\vec m_2\). If 0 → perpendicular intersection, otherwise non-perp.`
], example: String.raw`<p><strong>Best Quest #2:</strong> \(L_1:(2,0,1)+t(1,3,-2)\), \(L_2:(7,1,-7)+u(-2,1,3)\).</p><p>Directions not multiples. Equations: \(2+t=7-2u\ (t+2u=5)\), \(3t=1+u\), \(1-2t=-7+3u\). From second \(u=3t-1\). Into first \(t+2(3t-1)=5\Rightarrow7t=7\Rightarrow t=1,u=2\). Check third: \(1-2= -7+6\Rightarrow-1=-1\) true → intersect. POI \(P(3,3,-1)\).</p>`, traps:[
String.raw`Solving only x and y and forgetting to check z will lose the skew case.`,
String.raw`Writing "parallel" when you mean "parallel and distinct" — worksheet wants full phrase.`,
String.raw`Using same letter for both parameters (two t's) — use t and u or s.`
], practice: String.raw`\(L_1:(0,2,5)+t(2,-4,6)\), \(L_2:(1,1,1)+u(-1,2,-3)\). Classify. (Answer: parallel distinct, see 4.1 Worksheet Q3.)` },

{ id:"t4-2", lesson:"4.2", tier:"essential", title:"Line and plane", spot: String.raw`<p>"Determine the exact point of intersection between parametric line and plane …", "determine whether line intersects plane, lies in plane, or is parallel distinct" (Best Quest 4-6, blank notes 4.2 Ex1-3). Line vector or parametric or symmetric; plane Cartesian.</p>`, steps:[
String.raw`Write line as \(x=x_0+at,\ y=y_0+bt,\ z=z_0+ct,\ t\in\mathbb R\). If symmetric given, set each fraction = t to get same.`,
String.raw`Substitute into plane \(Ax+By+Cz+D=0\): \(A(x_0+at)+B(y_0+bt)+C(z_0+ct)+D=0\). Expand and collect t: \((A a+B b+C c)t + (A x_0+B y_0+C z_0+D)=0\). Note coefficient = \(\vec m\cdot\vec n\).`,
String.raw`Solve: if coefficient ≠0 → \(t=-(Ax_0+By_0+Cz_0+D)/(Aa+Bb+Cc)\). Then \(P = (x_0+at,\ y_0+bt,\ z_0+ct)\).`,
String.raw`If coefficient =0: look at constant term. If constant =0 → \(0=0\) → "True for all \(t\) → line lies completely within plane". If constant ≠0 → "0 = non-zero → no solution → parallel and distinct".`,
String.raw`Conclusion sentence: state case name and POI with exact coordinates.`
], example: String.raw`<p><strong>Best Quest #4:</strong> \(x=1+3t,y=2-t,z=-1+2t\), plane \(2x+3y-z-11=0\). Sub: \(2(1+3t)+3(2-t)-(-1+2t)-11=0\Rightarrow t-2=0\Rightarrow t=2\). POI \(P(7,0,3)\).</p><p><strong>Parallel distinct:</strong> same as above but get \(0t+8=0\).</p><p><strong>Lies in:</strong> get \(0=0\).</p>`, traps:[
String.raw`Mixing sign on D: plane is \(Ax+By+Cz+D=0\) with D already including = side; keep as given.`,
String.raw`Stopping after t value and not writing POI coordinates — question asks "calculate exact coordinates".`,
String.raw`For "show line lies in plane" you must prove 0=0 for all t, not just test 2 points (those could be coincidentally on plane if parallel but distinct? No, but proof requires all t).`
], practice: String.raw`Line \((3,1,-2)+t(2,-1,1)\), plane \(x+3y+z+4=0\). (Answer: 0t+8=0 → parallel distinct).` },

{ id:"t4-3", lesson:"4.3", tier:"essential", title:"Solve 3×3 system algebraically (no matrices)", spot: String.raw`<p>"Solve system using algebraic elimination (do not use matrices). State complete point of intersection P(x,y,z)" (Best Quest 9-10) "Show that system has infinitely many solutions and write common line in parametric vector form" (Best Quest 11).</p>`, steps:[
String.raw`Number equations (1)(2)(3). Choose variable to eliminate first (smallest coefficients). Multiply to make coefficients match and subtract/add to create two new equations (4)(5) with one fewer variable.`,
String.raw`Solve resulting 2×2 for two vars. Then back-sub into any original to get third.`,
String.raw`If (4) and (5) conflict → 0=k → no solution. If one is 0=0 → redundant, you have ∞. In ∞ case let free variable =t, express others, write vector line \(\vec r = \vec r_0 + t\vec d\).`,
String.raw`Always state P(x,y,z) or line with t∈R.`
], example: String.raw`<p>\(x+y+z=5,\ 2x-y+z=2,\ x+2y-z=3\) → 2*(1)-(2): \(3y+z=8\) (4), (3)-(1): \(y-2z=-2\) (5) → y=2z-2 → into (4): 7z=14→z=2,y=2,x=1 → P(1,2,2).</p>`, traps:[
String.raw`Arithmetic sign flips when subtracting equations. Write step "2×(1): 2x+2y+2z=10" explicitly.`,
String.raw`On infinite case, picking wrong free variable: pick one that lets you divide cleanly.`
], practice: String.raw`Solve \(x+y+z=4, 2x-y+3z=5, 3x+4z=9\) and parametrize line if ∞. (Answer: line (3,1,0)+s(-4,1,3)).` },

{ id:"t4-4", lesson:"4.4", tier:"essential", title:"Solve with matrices / read RREF", spot: String.raw`<p>"Solving systems using matrices", "Augmented matrix", "If RREF is … solution is …", "row entry describing plane…" (Review Sheet Q12-13). Also "solve linear system using matrices".</p>`, steps:[
String.raw`Write \([A\ B\ C\ |\ D]\) per plane. Keep signs exactly. For plane \(x-3y+4z=-5\) → \([1\ -3\ 4\ |\ -5]\) (Review Q12).`,
String.raw`Allowed row ops: swap rows \(R_i\leftrightarrow R_j\), multiply row by non-zero \(kR_i\), replace \(R_i→R_i\pm kR_j\).`,
String.raw`Goal REF: staircase leading 1's; RREF: leading 1's with zeros above/below. Do elimination.`,
String.raw`Read: \([1\ 0\ 0\ |\ a;\ 0\ 1\ 0\ |\ b;\ 0\ 0\ 1\ |\ c]\) → point \((a,b,c)\). Row \([0\ 0\ 0\ |\ k\neq0]\) → no solution. One or two zero rows \([0\ 0\ 0\ |\ 0]\) → one free → line, two free → plane.`
], example: String.raw`<p>RREF \(\begin{bmatrix}1&0&0&3.5\\0&1&0&2\\0&0&1&-1\end{bmatrix}\) → \((3.5,2,-1)\) (Review Q13). Matrix [[1 2 -1 4],[2 4 -2 8],[1 -1 1 1]] → R2→R2-2R1 gives [0 0 0 |0] → coincident pair.</p>`, traps:[
String.raw`Forgetting vertical bar — augmented matrix shows last column as constants, not part of coefficient matrix.`,
String.raw`Dividing by zero when trying to get pivot =1 — swap rows first.`
], practice: String.raw`Write augmented matrix for \(3x-2y+6z-1=0\) and \(x+y-4=0\) with z-free? (Answer: pick variable order).` },

{ id:"t4-5", lesson:"4.5", tier:"essential", title:"Two planes → line of intersection", spot: String.raw`<p>"Determine parametric vector equation for line of intersection between two non-parallel planes" (Best Quest 7-8). "Determine angle of intersection", "coincident, parallel distinct, or intersecting".</p>`, steps:[
String.raw`If question asks classify: compare normals \(\vec n_1,\vec n_2\). If multiples → check constant proportionality for coincident vs parallel distinct. If not multiples → must intersect in line.`,
String.raw`For line: direction \(\vec d=\vec n_1\times\vec n_2\). Compute cross; simplify dividing by GCD.`,
String.raw`Point: set one coordinate to 0 (choose easiest 2×2). Example set z=0 → solve \(\begin{cases}A_1x+B_1y=D_1\\A_2x+B_2y=D_2\end{cases}\) for x,y. If determinant 0 (parallel rows after fixing), try x=0 or y=0 instead.`,
String.raw`Write \(\vec r = P_0 + t\vec d\). Good answer includes parametric \(x=...,y=...,z=...\) as well.`
], example: String.raw`<p>\(x+2y-z=3,\ 2x-y+3z=1\). \(\vec d=(5,-5,-5)\sim(1,-1,-1)\). Set z=0: \(x+2y=3,\ 2x-y=1\) → \(y=2x-1\) → \(5x=5\Rightarrow x=1,y=1\) → \((1,1,0)+t(1,-1,-1)\).</p>`, traps:[
String.raw`Setting z=0 that gives dependent equations (no unique point) — pick different variable =0.`,
String.raw`Not simplifying direction — always scale down, e.g. (5,-5,-5)→(1,-1,-1).`,
String.raw`Forgetting to state t∈R.`
], practice: String.raw`\(2x+y+z=5,\ x-2y+2z=4\). Find line. (Answer: (2,0,1)+t(4,-3,-5)).` },

{ id:"t4-6", lesson:"4.6", tier:"essential", title:"Three planes — point, line, plane, or no solution", spot: String.raw`<p>"Solve system of three planes algebraically", "classify geometric interaction", "describe configuration", "if no solution describe configuration", "triangular prism" (Review Q6-7, Best Quest 12,15,16, Old Quest 25-26).</p>`, steps:[
String.raw`Step A: Check normals parallelism to know which geometries possible. If no normals parallel, possible = unique point, common line, or triangular prism (no solution). If some normals parallel, possible includes parallel distinct families.`,
String.raw`Step B: Solve 3×3 via elimination or matrices. If you get point (a,b,c) → unique point, done.`,
String.raw`Step C: If you get 0=0 → redundancy → ∞ solutions. If one 0=0 left → common line (parametrise). If two 0=0 left → common plane (all coincident or two coincident redundant + third same). If you know coincident pair, intersect that plane with third via Type 5 for line.`,
String.raw`Step D: If you get 0=k≠0 → no solution. Name geometry:
- Two normals parallel & third not → "two parallel distinct intersected by third" (Best Quest 12,16)
- All three normals parallel → "three parallel distinct" or if two equations proportional incl constant "two coincident + one parallel distinct"
- No normals parallel but 0=k → "triangular prism / three non-parallel planes forming prism" (Review Q7). Optionally note pairwise direction vectors parallel.`
], example: String.raw`<p><strong>Point:</strong> \(x+y+z=5, 2x-y+z=2, x+2y-z=3\) → (1,2,2).</p><p><strong>Line — redundant:</strong> \(x+y+z=4,2x-y+3z=5,3x+4z=9\) → add first two = third → line (3,1,0)+s(-4,1,3).</p><p><strong>Line — coincident pair:</strong> \(x+2y-z=4,2x+4y-2z=8\) coincident + \(x-y+z=1\) → line (0,5,6)+t(1,-2,-3).</p><p><strong>No — parallel distinct:</strong> \(x+y+z=3,2x+2y+2z=10,x-y+2z=4\) → two parallel distinct.</p>`, traps:[
String.raw`Saying "no solution" without geometry name loses marks — must write "Two parallel distinct planes cut by third" etc.`,
String.raw`For line case, just saying "infinitely many" without parametric line loses marks — must write \(\vec r\).`,
String.raw`Confusing triangular prism (no normals parallel) with parallel cases.`
], practice: String.raw`Classify: \(x+y+z=2,\ x+y+z=5,\ 2x-y+z=1\). (Answer: two parallel distinct \(x+y+z=2,5\) cut by third → no solution).` },

{ id:"t4-7", lesson:"4.6", tier:"likely", title:"k-value — make line lie in / parallel to plane, or planes parallel/coincident", spot: String.raw`<p>"Determine exact scalar k such that line L lies completely within plane π", "verify by d·n", "determine k for which planes do not intersect / are coincident" (Best Quest 19,20, Review Q10). Old Quest Q9 "k so vectors coplanar".</p>`, steps:[
String.raw`For line-plane with parameter inside line: line \(\frac{x-k}{a}=\frac{y-y_0}{b}=...\) with point \(P_0(k,\dots)\). First condition for parallel or containment: \(\vec d\cdot\vec n=0\) (line parallel to plane). This condition may involve k if d contains k, but often d is constant → check it is 0 as validation.`,
String.raw`Second condition for lying in plane: \(P_0\) satisfies plane equation: \(A(k)+By_0+Cz_0+D=0\) → solve for k.`,
String.raw`For plane-plane parallel: \(\vec n_1 = s\vec n_2\) must hold. If n1,n2 given with k inside one, set ratios equal to solve s then k. Then check constants proportionality: multiply one plane by s and equate constant term. Coincident when constants match same ratio, parallel distinct when not.`,
String.raw`Verification phrase: show \(d·n=0\) and point works.`
], example: String.raw`<p><strong>19a:</strong> \(L:\frac{x-k}{2}=\frac{y+3}{1}=\frac{z-1}{3}\), plane \(2x-y-z-5=0\). \(d=(2,1,3), n=(2,-1,-1), d·n=4-1-3=0\) → parallel. Need \(P_0(k,-3,1)\) in plane: \(2k+3-1-5=0\Rightarrow k=3/2\).</p><p><strong>20:</strong> \(π1:3x-6y+9z+4=0, π2:2x-4y+6z+k=0\). \(n1=3/2 n2\) always parallel. Multiply π2 by 3/2: \(3x-6y+9z+3k/2=0\). Coincident when \(3k/2=4\Rightarrow k=8/3\); otherwise parallel distinct. No value gives line because normals always parallel.</p><p><strong>Review Q10:</strong> \(x+2y-3z+1=0\) coincident with \(2x+4y-6z+k=0\) → multiply first by 2 → k=2.</p>`, traps:[
String.raw`Only doing dot check and forgetting point check — parallel includes both distinct and contained; k determines which.`,
String.raw`For plane-plane, solving only for parallel and ignoring constant → will mix up parallel distinct vs coincident.`,
String.raw`In Review Q10, constant matching includes sign: careful with D side.`
], practice: String.raw`\(π1:2x-y+z=3,\ π2:4x-2y+2z+k=0\). k for coincident? (Answer: k=6).` },

{ id:"t4-8", lesson:"4.5", tier:"likely", title:"Angle between planes", spot: String.raw`<p>"Calculate acute angle θ (to nearest degree) between two intersecting planes" (Best Quest 17, Old Quest 21).</p>`, steps:[
String.raw`Get normals \(\vec n_1=(A1,B1,C1),\ \vec n_2=(A2,B2,C2)\).`,
String.raw`Compute \(|\vec n_1\cdot\vec n_2|\) absolute for acute. Magnitudes \(|\vec n_1|,|\vec n_2|\).`,
String.raw`\(\cos\theta = \frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}\). θ= arccos. Report nearest degree.`
], example: String.raw`<p>Best Quest 17: \(2x-y+2z-5=0,\ x+2y-2z+1=0\). \(n1·n2=2-2-4=-4\) abs4, |n1|=3,|n2|=3 → cosθ=4/9 → θ≈64°.</p>`, traps:[
String.raw`Forgetting absolute → obtuse angle sometimes.`,
String.raw`Using degrees vs rad on calculator — set degree mode for arccos degree answer.`
], practice: String.raw`Angle between \(3x-2y+6z-1=0\) and \(x+y-4=0\). (Expect cos=|3-2|/(7*√2)=1/(7√2)≈84°).` },

{ id:"t4-9", lesson:"4.2", tier:"extra", title:"Angle between line and plane (extension from U3)", spot: String.raw`<p>"Calculate exact acute angle φ between line and plane" (Old Quest 23). Combines line-plane knowledge. Not in blank notes but appears in Old Quest Review.</p>`, steps:[
String.raw`Direction \(\vec m\) of line, normal \(\vec n\) of plane. Angle between line and normal is \(\cos\alpha = |\vec m\cdot\vec n|/(|m||n|)\). Angle between line and plane φ = 90°−α, so \(\sin\phi = |\vec m\cdot\vec n|/(|m||n|)\) or \(\cos(90-φ)=\dots\). Equivalent formulas: φ = arcsin(...).`,
String.raw`Compute dot abs, magnitudes, sinφ, then φ = arcsin.`
], example: String.raw`<p>Old Quest 23: \(L:(1,0,-2)+t(1,-2,2),\ π:2x-y-z+4=0\). \(m·n=2+2-2=2? Actually (1,-2,2)·(2,-1,-1)=2+2-2=2. |m|=3,|n|=√6, sinφ=2/(3√6) → φ≈16°.</p>`, traps:[String.raw`Using cos for line-plane but cos is for plane-plane or line-line; line-plane uses sin.`], practice: String.raw`Line (2,1,-3)+t(1,-2,3), plane 2x+y-5=0? Direction *?Actually m·n? Could be perpendicular?` },

{ id:"t4-10", lesson:"4.6", tier:"likely", title:"Distance to a plane / between parallel planes", spot: String.raw`<p>"Calculate exact perpendicular distance from point to plane" (Old Quest 16,18), "distance between parallel planes" (Old Quest 19). Not core of blank notes but always in quest review.</p>`, steps:[
String.raw`Distance point \(P_0(x_0,y_0,z_0)\) to plane \(Ax+By+Cz+D=0\): \(d=|Ax_0+By_0+Cz_0+D|/√(A²+B²+C²)\).`,
String.raw`Parallel planes distance: pick any point on one plane (set two coords=0 solve for third) then use point-to-plane formula to other.`,
String.raw`Ensure planes truly parallel (normals ∥) before using.`
], example: String.raw`<p>Old Quest 18: \(P(-2,5,3)\) to \(2x-y+2z-11=0\): \(| -4-5+6-11|/3 =14/3\). Old Quest 19: \(2x-y+2z-8=0\) vs \(4x-2y+4z+5=0\) → scale second? Divide π2 by2? Write as \(2x-y+2z+2.5=0\). Point (0,0,4) on first? Actually use formula: distance = | -8 -2.5|/3 =10.5/3=3.5.</p>`, traps:[
String.raw`Not making RHS zero form \(Ax+By+Cz+D=0\) — D sign matters.`,
String.raw`Using parallel planes formula when planes not parallel (gives nonsense).`
], practice: String.raw`Distance from (1,4,-2) to \(3x-4y+7=0\) (no z). \(\sqrt{9+16}=5\), numerator |3-16+7|=6 → 6/5.` },

{ id:"t4-11", lesson:"4.2", tier:"likely", title:"Foot of perpendicular / closest point", spot: String.raw`<p>"Determine exact coordinates of foot of perpendicular N from point Q to 3D line", "point N lying on line L closest to P", "point of intersection between plane and line through Q perpendicular to plane" (Best Quest 13,14a,18, Old Quest 20). This is the extension that turns line-plane into optimization.</p>`, steps:[
String.raw`Case A — foot to plane: line through Q with direction = normal \(\vec n\) of plane. Param \(Q+t\vec n\), plug into plane, solve t, compute POI — that POI is foot.`,
String.raw`Case B — foot to line in R³: write general point \(N(t)=P_0+t\vec m\) on line. Vector \(\vec{QN}=N(t)-Q\). Impose \(\vec{QN}\cdot\vec m=0\) (orthogonality). Solve for t, compute N.`,
String.raw`Case C — closest point on line to external point: same as B. Distance then is |QN|.`
], example: String.raw`<p><strong>Best Quest 18:</strong> Q(2,1,-2) to line \((1,-1,0)+t(2,1,-1)\). General N=(1+2t,-1+t,-t). QN=(2t-1,t-2,2-t). Dot with (2,1,-1)=0: 2(2t-1)+(t-2)-(2-t)=0→6t-6=0→t=1→N(3,0,-1).</p><p><strong>Best Quest 13:</strong> Q(1,5,-2) to plane 2x-3y+z+1=0: line x=1+2t,y=5-3t,z=-2+t into plane → t=1→P(3,2,-1) which is foot.</p>`, traps:[
String.raw`Using QN = Q - N instead of N - Q sign matters but dot zero sign cancels? Keep consistent N-Q.`,
String.raw`For plane case, direction is normal, not direction of plane.`
], practice: String.raw`Find foot from origin to plane 3x+y-2z-14=0 perpendicular through origin. (Answer: 14a: (3,1,-2)).` },

{ id:"t4-12", lesson:"4.2", tier:"likely", title:"Hit coordinate plane / axis", spot: String.raw`<p>"Determine exact coordinates where line intersects xz-coordinate plane (y=0)", "plane intersects xy-plane (z=0)", "x-, y-, z-intercepts of plane". (Best Quest 14, Old Quest 4,14). Look for wording "where it crosses …", "intercepts".</p>`, steps:[
String.raw`For line hitting coordinate plane: coordinate plane is \(x=0\) (yz), \(y=0\) (xz), \(z=0\) (xy). Set that coordinate expression from line =0, solve t, plug back to get other two coordinates, third is 0.`,
String.raw`For plane intercepts: set two variables =0 solve for third. x-intercept: y=0,z=0 → \(Ax+D=0\) → \(x=-D/A\). Similarly y,z.`,
String.raw`For plane vs xy-plane intersection: set z=0 in plane's vector/parametric? For vector plane \(\vec r =...\) set z-component =0 solve relation between s,t, then write as line in xy-plane.`
], example: String.raw`<p>Best Quest 14b: \(\vec r=(4,6,-3)+t(2,3,-1)\) hits xz? Actually y=0 plane: y=6+3t=0→t=-2→(0,0,-1).</p><p>Old Quest 14a: plane 3x-4y+2z-12=0: x-int y=0,z=0→x=4, y-int x=0,z=0→y=-3, z-int x=0,y=0→z=6.</p><p>Old Quest 4: vector plane \((0,2,-3)+s(1,1,2)+t(-2,1,1)\) intersect z=0: -3+2s+t=0→t=3-2s → line x=s-2(3-2s)=-6+5s, y=2+s+3-2s=5-s.</p>`, traps:[
String.raw`Mixing which coordinate zero: xz-plane is y=0 (the missing letter is zero).`,
String.raw`Trying to find "intersection with xy-plane" of line that is parallel to it — check m·k=0 case first.`
], practice: String.raw`Where does \(x=3t, y=t, z=-2t\) meet plane \(3x+y-2z-14=0\)? (That's foot from origin).` },

{ id:"t4-13", lesson:"4.3", tier:"essential", title:"Concept vocabulary + RREF reading (review fill-in)", spot: String.raw`<p>Unit Review Practice Sheet Q1-14: "Given plane Ax+By+Cz+D=0 normal is __", "If two planes parallel normals are __", "If two planes not parallel solution is __", "If line not parallel to plane system has __ solution(s)", "If normals of three planes are scalar multiples and no solution geometric description is __", "If normals not scalar multiples and 0 solutions → __", "RREF [...] solution is __", etc. (A unit review sheet).</p>`, steps:[
String.raw`Normal is \((A,B,C)\). Two planes parallel → normals parallel (scalar multiples). Two planes not parallel → line of intersection.`,
String.raw`Line not parallel to plane → one solution. Line coincident with plane → infinite: "the line itself".`,
String.raw`Three normals scalar multiples + no solution → "two coincident + third parallel distinct OR three parallel distinct".`,
String.raw`Three normals not scalar multiples + 0 solutions → "three non-parallel planes forming triangular prism" (Review Q7).`,
String.raw`Line & plane no intersect → "parallel and distinct". Line perpendicular to plane → line parallel to normal: \(\vec m \parallel \vec n\).`,
String.raw`Coincident planes test: if \(x+2y-3z+1=0\) coincident with \(2x+4y-6z+k=0\) → k=2 (multiply by 2).`,
String.raw`If line perpendicular to \(x+y-2z=4\) → direction = \((1,1,-2)\) (normal).`,
String.raw`Row \([1\ -3\ 4\ |\ -5]\) for plane \(x-3y+4z-5=0\). RREF \([1\ 0\ 0\ 3.5;0\ 1\ 0\ 2;0\ 0\ 1\ -1]\) → \((3.5,2,-1)\). Two lines non-intersecting → "parallel distinct or skew".`
], example: String.raw`<p>Review Sheet Q10: \(x+2y-3z+1=0\) coincident with \(2x+4y-6z+k=0\). Multiply first by 2: \(2x+4y-6z+2=0\) → for coincident \(k=2\). Q12: plane \(x-3y+4z-5=0\) → row \([1\ -3\ 4\ |\ -5]\).</p>`, traps:[
String.raw`Review answers expect exact phrases — write "scalar multiples" not just "parallel", "the line itself (infinite solutions)", "[0 0 0 | ...]".`,
String.raw`For Q6 geometry description, there are two possibilities — list both.`
], practice: String.raw`If RREF is \([[1,0,0,0,5.3],[0,1,0,2],[0,0,1,-1]]\)? Wait shape? Actually Review Q13 style: interpret.` },

{ id:"t4-14", lesson:"4.6", tier:"likely", title:"Two coincident + third → line (special three-plane)", spot: String.raw`<p>"Show that two planes are coincident and third crosses, and write line of intersection" (Best Quest 15). Old Quest 26 style.</p>`, steps:[
String.raw`Check pairwise proportionality: is \(\vec n_2 = k\vec n_1\) and \(D_2 = kD_1\)? If yes → π1,π2 coincident. Note which pair.`,
String.raw`Then you really have only two distinct planes: coincident plane + third. Use Type 5 to find line: cross normals (note cross of parallel normals is zero, use the coincident normal and third's normal).`,
String.raw`Find point by setting a variable 0 and solving remaining two distinct equations.`
], example: String.raw`<p>π1:x+2y-z=4, π2:2x+4y-2z=8 (=2π1) coincident, π3:x-y+z=1. Cross (1,2,-1)×(1,-1,1)=(1,-2,-3). Add π1+π3: 2x+y=5 → y=5-2t let x=t → z=6-3t → line (0,5,6)+t(1,-2,-3).</p>`, traps:[
String.raw`Trying to cross coincident pair normals (0) — cross coincident normal with third.`,
String.raw`Forgetting to state coincident pair explicitly before line.`
], practice: String.raw`π1:x+y+z=6, π2:2x-y+z=3, π3:3x+2z=9. Show common line.</p>(Hint: π1+π2=π3).` },

{ id:"t4-15", lesson:"4.1", tier:"extra", title:"Point-to-line distance R³ + closest point (U3 recap but tested here)", spot: String.raw`<p>"Find exact distance from point Q to 3D line L", "Find point N on line closest to P" (Old Quest Q17,20). Often paired with other Unit 4 questions, uses U3 methods but appears in U4 review.</p>`, steps:[
String.raw`Let \(P_0\) point on line, \(\vec m\) direction, \(\vec{P_0Q}=Q-P_0\). Distance \(d=|\vec{P_0Q}\times\vec m|/|\vec m|\).`,
String.raw`For foot N: general point \(N(t)=P_0+t\vec m\), impose \(\vec{QN}\cdot\vec m=0\) to solve t, as Type 11 Case B.`,
String.raw`If asked distance between point and line where point-to-line is perpendicular distance, you can use either formula; distance should match |QN| after finding N.`
], example: String.raw`<p>Old Quest 17: Q(2,-3,1), line (-1,0,2)+t(1,2,-2). \(P_0Q=(3,-3,-1)\), cross with (1,2,-2) magnitude → (8,5,9) → | | =√170, |m|=3 → d=√170/3.</p><p>Old Quest 20: A(1,0,-1) line direction (2,-1,2), P(4,2,1). General N(1+2t,-t,-1+2t), PN=(2t-3,-t-2,2t-2), dot with m 9t-8=0 → t=8/9 → N(25/9,-8/9,7/9).</p>`, traps:[
String.raw`Cross product arithmetic errors — compute carefully and check magnitude.`,
String.raw`For closest point, ensure vector is N-Q (or QN) but consistent; dot=0 eliminates sign anyway for solving t but magnitude step needs correct.`
], practice: String.raw`Distance from (2,1,-2) to line (1,-1,0)+t(2,1,-1) — foot is (3,0,-1) with t=1, distance √( (1)²+... ) =?` }
);
