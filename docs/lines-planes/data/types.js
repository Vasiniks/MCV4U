/* MCV4U Unit 3 · Question types playbook: every question type in the worksheets, unit review and quest, with the recipe for each. */
window.TYPES = window.TYPES || [];

window.TYPES_INTRO = String.raw`<p>This unit asks a fixed set of question types, and every worksheet, unit review and quest question is one of the 32 below. The hard review questions are usually two of them back to back. Match the wording in the left column, make the first move, then open that type for the full recipe, a worked example taken from your own sheets, the usual traps and a fresh question to try. Notation throughout: \(\vec m\) is a direction vector, \(\vec n\) a normal, \(\vec r_0\) a known point, and \(t \in \mathbb{R}\) (or \(s, t \in \mathbb{R}\) for a plane).</p>
<div class="table-wrap"><table class="data">
<thead><tr><th>If the question says / gives you …</th><th>It's this type</th><th>First move</th></tr></thead>
<tbody>
<tr><th colspan="3">Lines in R² (3.1, 3.2)</th></tr>
<tr><td>"vector / parametric equation of the line through A and B", "with slope …", "through P with direction vector …", "state a direction vector", a graph</td><td><a href="#/types/1">Vector and parametric equations of a line in R²</a></td><td>\(\vec m = \overrightarrow{AB}\) (slope \(\frac{b}{a}\) gives \((a, b)\)), then \(\vec r = \vec r_0 + t\vec m\)</td></tr>
<tr><td>"is the point on the line", "show that the line contains P", "find two points on the line", "if \((a, b, -3)\) lies on the line, find a and b", "the segment from P to Q"</td><td><a href="#/types/2">Points on a line</a></td><td>Set the point equal to the parametric equations and solve every coordinate for \(t\)</td></tr>
<tr><td>"scalar / Cartesian equation … with normal \(\vec n\)", "find a normal vector, a direction vector and a point"</td><td><a href="#/types/3">Cartesian equation of a line in R²</a></td><td>\(\vec n = (A, B)\) are the coefficients of \(Ax + By + C = 0\)</td></tr>
<tr><td>"find the Cartesian equation of \(\vec r = \ldots\)", "find vector, parametric and symmetric equations of \(5x - 3y + 15 = 0\)"</td><td><a href="#/types/4">Convert a line between forms (R²)</a></td><td>Swap the two components and change one sign: \(\vec m \leftrightarrow \vec n\)</td></tr>
<tr><td>"passes through P and is parallel / perpendicular to the line …" (two coordinates)</td><td><a href="#/types/5">Line through a point, parallel or perpendicular (R²)</a></td><td>Parallel keeps the vector; perpendicular turns the given \(\vec n\) into your \(\vec m\) (or \(\vec m\) into your \(\vec n\))</td></tr>
<tr><th colspan="3">Lines in R³ (3.3)</th></tr>
<tr><td>"vector, parametric and symmetric equations" of a line in R³; "parallel to the y-axis"; "x-intercept … and z-intercept …"; "parallel to the line through B and C"; "through the midpoint"</td><td><a href="#/types/6">Equations of a line in R³</a></td><td>Get \(\vec m\) from the clue, then write all three forms</td></tr>
<tr><td>"state a point and a direction vector" of something like \(\frac{x - 1}{3} = \frac{2 - y}{4} = z + 5\)</td><td><a href="#/types/7">Read a point and direction off symmetric equations</a></td><td>Rewrite every part as \(\frac{x - x_0}{a}\)</td></tr>
<tr><td>"same line, parallel lines, or neither", "coincident", "parallel and distinct, perpendicular, or none of these"</td><td><a href="#/types/8">Classify two lines</a></td><td>Are \(\vec m_1, \vec m_2\) multiples? If yes, test a point; if no, dot them</td></tr>
<tr><td>"direction cosines", "direction angles"</td><td><a href="#/types/9">Direction cosines and direction angles</a></td><td>\(\cos\alpha = \frac{a}{|\vec m|}\), and the same for \(b\) and \(c\)</td></tr>
<tr><th colspan="3">Distances (3.4, 3.7)</th></tr>
<tr><td>"distance / minimum distance from Q to the line" with two coordinates</td><td><a href="#/types/10">Distance from a point to a line in R²</a></td><td>Cartesian form, then \(\frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\)</td></tr>
<tr><td>"shortest / perpendicular distance from a point to a line" in R³, "distance between the parallel lines", "between the points"</td><td><a href="#/types/11">Distance from a point to a line in R³</a></td><td>\(\overrightarrow{P_0P}\), then \(\frac{|\overrightarrow{P_0P}\times\vec m|}{|\vec m|}\) (two points: just \(|\overrightarrow{AB}|\))</td></tr>
<tr><td>"the point on the line closest to P", "foot of the perpendicular"</td><td><a href="#/types/12">Closest point on a line</a></td><td>General point \(R\) on the line, then \(\overrightarrow{PR}\cdot\vec m = 0\)</td></tr>
<tr><td>"distance between the point / line / plane and the plane", "shortest distance to the plane", "plane with x-intercept …"</td><td><a href="#/types/25">Distance to a plane</a></td><td>\(\frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\) (check parallel first for a line or plane)</td></tr>
<tr><th colspan="3">Vectors (3.5)</th></tr>
<tr><td>"express \(\vec w\) as a linear combination of \(\vec u\) and \(\vec v\)" (two components), "in terms of \(\hat\imath\) and \(\hat\jmath\)", "can every vector in the xy-plane be written …", "basis"</td><td><a href="#/types/13">Linear combination in R² (and basis check)</a></td><td>Check not collinear, then \(\vec w = a\vec u + b\vec v\): two equations</td></tr>
<tr><td>"can \(\vec x\) be expressed as a linear combination of \(\vec y\) and \(\vec z\)" (three components), "which can be written in the form \(s\vec u + t\vec v\)"</td><td><a href="#/types/14">Linear combination in R³</a></td><td>Three equations: solve two, check the third</td></tr>
<tr><td>"are the vectors coplanar", "by using the triple scalar product", "do they form a basis for space"</td><td><a href="#/types/15">Are three vectors coplanar?</a></td><td>Is \(\vec u\cdot(\vec v\times\vec w) = 0\)?</td></tr>
<tr><td>"find values of a, b and c which satisfy …", "find x and y for which \(2\vec u - \vec v = \vec w\)"</td><td><a href="#/types/16">Solve for unknown scalars</a></td><td>One equation per component (or per non-collinear vector), then eliminate</td></tr>
<tr><th colspan="3">Planes (3.6, 3.7)</th></tr>
<tr><td>"vector and parametric equations of the plane through P parallel to \(\vec a\) and \(\vec b\)", "parallel to the plane …", "the xz-plane", "state two direction vectors / two points"</td><td><a href="#/types/17">Vector and parametric equations of a plane</a></td><td>\(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\)</td></tr>
<tr><td>"the plane containing / passing through the three points"</td><td><a href="#/types/18">Plane through three points</a></td><td>\(\overrightarrow{AB}, \overrightarrow{AC}\); for Cartesian, \(\vec n = \overrightarrow{AB}\times\overrightarrow{AC}\)</td></tr>
<tr><td>"does the point lie on the plane", "determine algebraically whether Q lies on π"</td><td><a href="#/types/19">Is the point on the plane?</a></td><td>Cartesian: substitute. Vector: solve two equations for \(s, t\), check the third</td></tr>
<tr><td>"explain why … do not determine a plane"</td><td><a href="#/types/20">Do these determine a plane?</a></td><td>Collinear points, or the point is on the line</td></tr>
<tr><td>"scalar equation … with normal \(\vec n\)", "parallel to the plane …", "perpendicular to the line …", "normal parallel to the y-axis"</td><td><a href="#/types/21">Cartesian plane from a point and a normal</a></td><td>Find \(\vec n\), write \(Ax + By + Cz + D = 0\), substitute the point</td></tr>
<tr><td>"scalar equation of \(\vec r = \ldots\)", "convert the parametric equations into \(Ax + By + Cz + D = 0\)", "vector equation of the plane with scalar equation …", "x-, y- and z-intercepts"</td><td><a href="#/types/22">Convert a plane between forms</a></td><td>\(\vec n = \vec a\times\vec b\); backwards, use the intercepts as three points</td></tr>
<tr><td>"coincident, parallel and distinct, or neither", "parallel, coincident, or intersecting" (two planes)</td><td><a href="#/types/23">Two planes</a></td><td>Compare normals, then the whole equations</td></tr>
<tr><td>"is the line parallel to the plane", "does it lie in the plane", "find the point of intersection"</td><td><a href="#/types/24">Line and plane</a></td><td>\(\vec m\cdot\vec n = 0\)? Then test a point, or substitute the line into the plane</td></tr>
<tr><th colspan="3">Review-style combinations</th></tr>
<tr><td>"plane containing the line … and the point …", "containing the x-axis and the point …"</td><td><a href="#/types/26">Plane containing a line and a point</a></td><td>Directions \(\vec m\) and \(\overrightarrow{P_0P}\)</td></tr>
<tr><td>"plane containing the two intersecting / parallel lines"</td><td><a href="#/types/27">Plane containing two lines</a></td><td>Intersecting: \(\vec m_1, \vec m_2\). Parallel: \(\vec m\) and \(\overrightarrow{P_1P_2}\)</td></tr>
<tr><td>"contains … and is parallel to the z-axis / the line …", "perpendicular to the plane …", "does not intersect the z-axis", "parallel to the vectors \(6\hat k\) and …"</td><td><a href="#/types/28">Plane from parallel and perpendicular clues</a></td><td>Each clue is one direction vector lying in the plane</td></tr>
<tr><td>"for what value of k", "find k such that the vectors are coplanar / the line is parallel to the plane / the planes are perpendicular", "find k and m"</td><td><a href="#/types/29">Find k so that a condition holds</a></td><td>Write the condition as an equation in \(k\)</td></tr>
<tr><td>"x- and y-intercepts of the line", "where it crosses the xy-plane", "line of intersection with the xy-plane", "where the plane meets the z-axis"</td><td><a href="#/types/30">Where a line or plane crosses an axis or coordinate plane</a></td><td>Set the right coordinate(s) to 0 and solve for the parameter(s)</td></tr>
<tr><td>"angle between the lines / planes", "acute angle of intersection"</td><td><a href="#/types/31">Angle between two lines or two planes</a></td><td>\(\cos\theta = \frac{|\vec v_1\cdot\vec v_2|}{|\vec v_1||\vec v_2|}\), with normals for planes</td></tr>
<tr><td>"prove", "show that", "demonstrate", "explain why", "how can you tell by inspection"</td><td><a href="#/types/32">Explain or prove a general statement</a></td><td>Write the general vectors with letters and apply the definition</td></tr>
</tbody></table></div>`;

window.TYPES.push(

/* ============ 3.1 ============ */
{ id: "t-line-r2", lesson: "3.1", tier: "essential",
  title: "Vector and parametric equations of a line in R²",
  spot: String.raw`<p>The question asks for a <strong>vector equation</strong> or <strong>parametric equations</strong> of a line in the xy-plane and gives you a point plus something that fixes the direction: a direction vector, a second point, a slope, a graph, "horizontal", "vertical" or "the x-axis". "State a direction vector for …" questions are just step 1 on its own, and "graph the line" is the reverse (plot \(\vec r_0\), then step along \(\vec m\)).</p>`,
  steps: [
    String.raw`Get a direction vector \(\vec m\) from whatever is given, because a line needs one direction: two points \(A, B\) give \(\vec m = \overrightarrow{AB} = B - A\); a slope \(\frac{b}{a}\) gives \(\vec m = (a, b)\) (run, rise), so \(y = 3x + 6\) gives \((1, 3)\); parallel to a given line means copy its \(\vec m\); horizontal is \((1, 0)\); vertical is \((0, 1)\).`,
    String.raw`Simplify \(\vec m\) by dividing out a common factor (e.g. \((-8, -10) \to (4, 5)\)). Any non-zero multiple points along the same line, so this is allowed and keeps the arithmetic small.`,
    String.raw`Pick a known point for \(\vec r_0\): a given point, or the y-intercept read off a graph or off \(y = mx + b\).`,
    String.raw`Write the vector equation \(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\), i.e. \((x, y) = (x_0, y_0) + t(a, b)\).`,
    String.raw`Split it by component for the parametric equations \(x = x_0 + ta,\ y = y_0 + tb,\ t \in \mathbb{R}\). The teacher always finishes with \(t \in \mathbb{R}\).`,
    String.raw`Check: choose the \(t\) that should give the second point (or any \(t\)) and confirm you land on it.`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (lines) Q2a and Q3a.</strong> (a) Find a vector equation of the line through \((3, 9)\) and \((-4, 2)\). (b) Find parametric equations of the line through \((-9, 8)\) with slope \(-\frac{2}{3}\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Direction from two points.</strong> \(\vec m = (-4, 2) - (3, 9) = (-7, -7)\). Divide by \(-7\): \(\vec m = (1, 1)\), the same direction.</li>
<li><strong>Point.</strong> Use \((3, 9)\) as \(\vec r_0\).</li>
<li><strong>Write it.</strong> \(\vec r = (3, 9) + t(1, 1),\ t \in \mathbb{R}\).</li>
<li><strong>Check.</strong> \(t = -7\) gives \((3 - 7, 9 - 7) = (-4, 2)\), the second point.</li>
<li><strong>(b) Direction from a slope.</strong> Slope \(= \frac{\text{rise}}{\text{run}} = \frac{-2}{3}\), so \(\vec m = (3, -2)\).</li>
<li><strong>Parametric.</strong> With \((x_0, y_0) = (-9, 8)\): \(x = -9 + 3t,\ y = 8 - 2t\).</li>
</ol>
<p class="answer">(a) \(\vec r = (3, 9) + t(1, 1),\ t \in \mathbb{R}\) &nbsp; (b) \(x = -9 + 3t,\ y = 8 - 2t,\ t \in \mathbb{R}\)</p>`
  },
  traps: [
    String.raw`Slope \(\frac{b}{a}\) means \(\vec m = (a, b)\), run first: \(y = 3x + 6\) has \(\vec m = (1, 3)\), not \((3, 1)\).`,
    String.raw`A vertical line has \(\vec m = (0, 1)\) and no slope, so \(y = mx + b\) cannot describe it. Unit review Q2b (parallel to \(\vec r = (4, 0) + t(0, 5)\)) needs \(\vec m = (0, 1)\); the printed key's \((1, 0)\) is wrong, as your teacher noted.`,
    String.raw`Leaving off \(t \in \mathbb{R}\). The teacher writes it every time; treat it as part of the answer.`,
    String.raw`Your equation can look different from the key and still be right: another point on the line or a multiple of \(\vec m\) describes the same line. Check by substituting rather than comparing digits.`
  ],
  seen: String.raw`Lesson 3.1: Example 1 · Worksheet 3.1: Q2, Q4, Q5, Q6, Q7, Q8 · Unit review (lines): Q2a, Q2b, Q3a, Q3c`,
  tryq: String.raw`<p>Find vector and parametric equations of (a) the line through \(A(5, -1)\) and \(B(-3, 3)\); (b) the horizontal line through \((2, -7)\).</p>`,
  trya: String.raw`<p>(a) \(\overrightarrow{AB} = (-8, 4) = -4(2, -1)\), so use \(\vec m = (-2, 1)\). \(\vec r = (5, -1) + t(-2, 1),\ t \in \mathbb{R}\); \(x = 5 - 2t,\ y = -1 + t\). Check: \(t = 4\) gives \((-3, 3) = B\).</p><p>(b) Horizontal means \(\vec m = (1, 0)\): \(\vec r = (2, -7) + t(1, 0)\); \(x = 2 + t,\ y = -7,\ t \in \mathbb{R}\).</p>`
},

{ id: "t-points-on-line", lesson: "3.1", tier: "essential",
  title: "Points on a line: test a point, find missing coordinates, describe a segment",
  spot: String.raw`<p>You have a line (vector or parametric, R² or R³) and a point, and the question says "is P on the line?", "show that the line contains P", "find the point when \(t = 3\)", "state two points on the line", "if \((a, b, -3)\) lies on the line, find \(a\) and \(b\)", or "describe the segment from P to Q". All of these rest on one idea: a point is on the line exactly when <em>one</em> value of \(t\) produces all of its coordinates.</p>`,
  steps: [
    String.raw`To <em>get</em> points, choose values of \(t\) and evaluate each coordinate (\(t = 0\) gives \(\vec r_0\); \(t = 1\) gives \(\vec r_0 + \vec m\)).`,
    String.raw`To <em>test</em> a point, set it equal to the equation, \((x, y, z) = \vec r_0 + t\vec m\), and solve each coordinate equation for \(t\) separately.`,
    String.raw`Compare the \(t\)-values: all the same means the point is on the line; any difference means it is not. Say it in words, as the teacher does ("same t, \(\therefore\) on the line").`,
    String.raw`For unknown coordinates, use the coordinate you <em>do</em> know to find \(t\) first, then substitute that \(t\) into the other equations to get the unknowns.`,
    String.raw`For a segment from \(P\) to \(Q\), find the \(t\)-values that give \(P\) and \(Q\) and restrict the parameter between them, e.g. \(-1 \le t \le 5\).`
  ],
  example: {
    q: String.raw`<p><strong>Worksheet 3.1 Q17.</strong> (a) Show that \(P(5, 8)\) and \(Q(17, -22)\) are points on the line through \(A(7, 3)\) with direction vector \((2, -5)\). (b) Describe the line segment from \(P\) to \(Q\) using parametric equations with suitable restrictions on the parameter.</p>`,
    a: String.raw`<ol class="work">
<li><strong>Write the line.</strong> \(\vec r = (7, 3) + t(2, -5),\ t \in \mathbb{R}\), so \(x = 7 + 2t,\ y = 3 - 5t\).</li>
<li><strong>Test P.</strong> \(5 = 7 + 2t \Rightarrow t = -1\); \(8 = 3 - 5t \Rightarrow t = -1\). Same \(t\), so \(P\) is on the line.</li>
<li><strong>Test Q.</strong> \(17 = 7 + 2t \Rightarrow t = 5\); \(-22 = 3 - 5t \Rightarrow t = 5\). Same \(t\), so \(Q\) is on the line.</li>
<li><strong>(b) Restrict t.</strong> \(P\) is at \(t = -1\) and \(Q\) at \(t = 5\); the segment is every \(t\) in between, endpoints included.</li>
</ol>
<p class="answer">(b) \(x = 7 + 2t,\ y = 3 - 5t,\ -1 \le t \le 5\) &nbsp; (or, starting at P: \(x = 5 + 2t,\ y = 8 - 5t,\ 0 \le t \le 6\))</p>`
  },
  traps: [
    String.raw`Solving only one coordinate. One equation always gives some \(t\); the point is on the line only if every coordinate gives the <em>same</em> \(t\). In Worksheet 3.3 Q6a, \(Q(-2, 2, 1)\) gives \(t = -1, -1, 0\): not on the line.`,
    String.raw`If a component of \(\vec m\) is 0, that coordinate never changes: for \(x = 1,\ y = 0,\ z = -t\), any point with \(x \ne 1\) is off the line at once.`,
    String.raw`Unit review Q7b: \((-4, m, n)\) on \(x = 6 + 5t,\ y = 4 - 2t,\ z = -3t\) gives \(t = -2\), so \(m = 8\) and \(n = 6\). The printed key's \(n = -2\) is wrong, as your teacher noted.`,
    String.raw`For a segment, use \(\le\) (the endpoints are included) and keep the same \(\vec m\); if you restart at \(P\), the range becomes \(0 \le t \le\) (number of steps).`
  ],
  seen: String.raw`Lesson 3.1: Example 1c, 1d · Worksheet 3.1: Q3, Q6, Q13, Q17 · Worksheet 3.3: Q3, Q6a, Q6b · Worksheet 3.6: Q10b · Unit review (lines): Q7b`,
  tryq: String.raw`<p>The line \(L\) is \(x = 1 + 2t,\ y = -4 + t,\ z = 3 - 3t,\ t \in \mathbb{R}\). (a) Is \(P(5, -2, -3)\) on \(L\)? (b) Is \(Q(3, -3, 1)\) on \(L\)? (c) If \((a, b, 12)\) is on \(L\), find \(a\) and \(b\).</p>`,
  trya: String.raw`<p>(a) \(5 = 1 + 2t \Rightarrow t = 2\); \(-2 = -4 + t \Rightarrow t = 2\); \(-3 = 3 - 3t \Rightarrow t = 2\). Same \(t\): yes.</p><p>(b) \(3 = 1 + 2t \Rightarrow t = 1\); \(-3 = -4 + t \Rightarrow t = 1\); \(1 = 3 - 3t \Rightarrow t = \frac{2}{3}\). Different: no.</p><p>(c) Use the known \(z\): \(12 = 3 - 3t \Rightarrow t = -3\). Then \(a = 1 + 2(-3) = -5\) and \(b = -4 + (-3) = -7\).</p><p class="answer">(a) yes (b) no (c) \(a = -5,\ b = -7\)</p>`
},

/* ============ 3.2 ============ */
{ id: "t-cartesian-line", lesson: "3.2", tier: "essential",
  title: "Cartesian equation of a line in R²: build it from a point and a normal, or read it",
  spot: String.raw`<p>The words <strong>scalar equation</strong>, <strong>Cartesian equation</strong> or <strong>normal vector</strong> \(\vec n\) appear with a line in R². Either you get a point \(P_0\) and \(\vec n\) and must write \(Ax + By + C = 0\), or you get \(Ax + By + C = 0\) (or \(y = mx + b\), or \(x = 5\)) and must state a normal, a direction vector and a point.</p>`,
  steps: [
    String.raw`Remember the key fact: in \(Ax + By + C = 0\) the normal is \(\vec n = (A, B)\), because \(\overrightarrow{P_0P}\cdot\vec n = 0\) expands to exactly this form.`,
    String.raw`<strong>Building:</strong> write \(Ax + By + C = 0\) with the components of \(\vec n\) as \(A\) and \(B\), substitute the given point for \(x\) and \(y\), and solve for \(C\).`,
    String.raw`Tidy up the teacher's way: make \(A > 0\) (multiply through by \(-1\) if needed) and divide out any common factor.`,
    String.raw`<strong>Reading:</strong> rearrange to \(Ax + By + C = 0\) first (\(y = 3x - 10\) becomes \(3x - y - 10 = 0\)), then \(\vec n = (A, B)\).`,
    String.raw`Get \(\vec m\) by swapping the components of \(\vec n\) and changing one sign: \((A, B) \to (B, -A)\) or \((-B, A)\). Check \(\vec m\cdot\vec n = 0\).`,
    String.raw`Get a point by choosing a convenient \(x\) (often 0) and solving for \(y\), or the other way round.`
  ],
  example: {
    q: String.raw`<p><strong>Worksheet 3.2 Q3a and Q4d.</strong> (a) Find the scalar equation of the line through \(P_0(4, -2)\) with normal \(\vec n = (2, 7)\). (b) For \(y = 3x - 10\), find a normal vector, a direction vector and a point on the line.</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Normal gives the coefficients.</strong> \(\vec n = (2, 7)\), so \(2x + 7y + C = 0\).</li>
<li><strong>Point gives C.</strong> \(2(4) + 7(-2) + C = 0 \Rightarrow 8 - 14 + C = 0 \Rightarrow C = 6\).</li>
<li><strong>(b) Standard form first.</strong> \(y = 3x - 10 \Rightarrow 3x - y - 10 = 0\), so \(\vec n = (3, -1)\).</li>
<li><strong>Direction by swap-and-negate.</strong> \(\vec m = (1, 3)\); check \((3)(1) + (-1)(3) = 0\).</li>
<li><strong>A point.</strong> Let \(y = 2\): \(2 = 3x - 10 \Rightarrow x = 4\), so \((4, 2)\). (\(x = 0\), giving \((0, -10)\), works too.)</li>
</ol>
<p class="answer">(a) \(2x + 7y + 6 = 0\) &nbsp; (b) \(\vec n = (3, -1),\ \vec m = (1, 3),\ P(4, 2)\)</p>`
  },
  traps: [
    String.raw`Reading the coefficients as the direction. \((A, B)\) is the <em>normal</em>; the direction is perpendicular to it.`,
    String.raw`Vertical and horizontal lines: \(x = 5\) is \(1x + 0y - 5 = 0\), so \(\vec n = (1, 0)\), \(\vec m = (0, 1)\), and any point must have \(x = 5\), e.g. \((5, -3)\).`,
    String.raw`Leaving \(A < 0\), as in \(-4x + 5y + 53 = 0\). The teacher wants \(4x - 5y - 53 = 0\) ("do not start with a negative").`
  ],
  seen: String.raw`Lesson 3.2: Examples 1, 2 · Worksheet 3.2: Q3, Q4, Q7c, Q7d · Summary sheet: Cartesian row of the table`,
  tryq: String.raw`<p>(a) Find the Cartesian equation of the line through \(P_0(-3, 5)\) with normal \(\vec n = (-2, 3)\), with \(A > 0\). (b) State a normal, a direction vector and a point for \(y = -2x + 7\).</p>`,
  trya: String.raw`<p>(a) \(-2x + 3y + C = 0\); \(-2(-3) + 3(5) + C = 0 \Rightarrow 21 + C = 0 \Rightarrow C = -21\). So \(-2x + 3y - 21 = 0\); multiply by \(-1\): \(2x - 3y + 21 = 0\). Check: \(-6 - 15 + 21 = 0\).</p><p>(b) \(2x + y - 7 = 0\): \(\vec n = (2, 1)\), \(\vec m = (1, -2)\) (check \(2 - 2 = 0\)), point \((0, 7)\).</p>`
},

{ id: "t-convert-r2", lesson: "3.2", tier: "essential",
  title: "Convert a line between vector/parametric and Cartesian form (R²)",
  spot: String.raw`<p>A line in R² is given in one form and another is wanted: "find the Cartesian equation of \(\vec r = (2, 3) + t(-1, 5)\)", "find vector, parametric and symmetric equations of \(5x - 3y + 15 = 0\)", "find a vector equation of \(y = \frac{3}{4}x + \frac{1}{2}\)". It also hides inside distance questions (Worksheet 3.4 Q11b, Q11c), because the R² distance formula needs \(Ax + By + C = 0\).</p>`,
  steps: [
    String.raw`<strong>Vector/parametric to Cartesian:</strong> read off \(\vec m\) (the numbers multiplying \(t\)) and a point \(\vec r_0\) (the constants).`,
    String.raw`Turn \(\vec m = (a, b)\) into a normal by swap-and-negate, \(\vec n = (b, -a)\), because the Cartesian form is built on the normal. Simplify common factors.`,
    String.raw`Write \(Ax + By + C = 0\) with \(\vec n\), substitute the point and solve for \(C\). (The notes' alternative: write the symmetric equation \(\frac{x - x_0}{a} = \frac{y - y_0}{b}\) and cross-multiply.)`,
    String.raw`<strong>Cartesian to vector:</strong> read \(\vec n = (A, B)\) and swap-and-negate to get \(\vec m\). From \(y = mx + b\), the slope \(\frac{\text{rise}}{\text{run}}\) gives \(\vec m\) directly.`,
    String.raw`Find a point by setting \(x = 0\) (or another value that avoids fractions) and solving for \(y\).`,
    String.raw`Write \(\vec r = \vec r_0 + t\vec m\), then the parametric equations, then the symmetric equation \(\frac{x - x_0}{a} = \frac{y - y_0}{b}\) (only if both components of \(\vec m\) are non-zero).`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (lines) Q10.</strong> In the xy-plane, (a) find the Cartesian equation of \(\vec r = (2, 3) + t(-1, 5)\); (b) find a vector equation of \(5x - 2y + 10 = 0\); (c) find a vector equation of \(y = \frac{3}{4}x + \frac{1}{2}\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Normal from direction.</strong> \(\vec m = (-1, 5)\), so \(\vec n = (5, 1)\) (check \(-5 + 5 = 0\)).</li>
<li><strong>Find C.</strong> \(5x + y + C = 0\) through \((2, 3)\): \(10 + 3 + C = 0 \Rightarrow C = -13\).</li>
<li><strong>(b) Direction from normal.</strong> \(\vec n = (5, -2)\), so \(\vec m = (2, 5)\).</li>
<li><strong>A point.</strong> \(x = 0\): \(-2y + 10 = 0 \Rightarrow y = 5\), so \((0, 5)\).</li>
<li><strong>(c) Slope gives the direction.</strong> Slope \(\frac{3}{4}\) means \(\vec m = (4, 3)\). Choose \(x = 2\) to avoid fractions: \(y = \frac{3}{2} + \frac{1}{2} = 2\), so \((2, 2)\).</li>
</ol>
<p class="answer">(a) \(5x + y - 13 = 0\) &nbsp; (b) \(\vec r = (0, 5) + t(2, 5),\ t \in \mathbb{R}\) &nbsp; (c) \(\vec r = (2, 2) + t(4, 3),\ t \in \mathbb{R}\)</p>`
  },
  traps: [
    String.raw`Putting \(\vec m\) into \(Ax + By + C = 0\). The coefficients must be the normal, so swap-and-negate first.`,
    String.raw`Choosing a point that creates fractions. In (c), \(x = 0\) gives \(\left(0, \frac{1}{2}\right)\), which is right but messier; pick an \(x\) that clears the denominator.`,
    String.raw`A zero component: for \(x = 2t,\ y = -2\) there is no symmetric form (you cannot divide by 0), and the Cartesian equation is simply \(y + 2 = 0\) (Worksheet 3.2 Q6d).`
  ],
  seen: String.raw`Lesson 3.2: Example 3 · Worksheet 3.2: Q6, Q8, Q9 · Worksheet 3.4: Q11b, Q11c · Unit review (lines): Q10a, Q10b, Q10c`,
  tryq: String.raw`<p>(a) Find the Cartesian equation of \(x = 4 - 3t,\ y = -1 + 2t\). (b) Find vector, parametric and symmetric equations of \(2x + 5y - 10 = 0\).</p>`,
  trya: String.raw`<p>(a) \(\vec m = (-3, 2) \Rightarrow \vec n = (2, 3)\). \(2x + 3y + C = 0\) through \((4, -1)\): \(8 - 3 + C = 0 \Rightarrow C = -5\). \(\therefore\ 2x + 3y - 5 = 0\). Check \(t = 1\): \((1, 1)\) gives \(2 + 3 - 5 = 0\).</p><p>(b) \(\vec n = (2, 5) \Rightarrow \vec m = (5, -2)\). \(x = 0\): \(5y = 10\), point \((0, 2)\). \(\vec r = (0, 2) + t(5, -2),\ t \in \mathbb{R}\); \(x = 5t,\ y = 2 - 2t\); \(\frac{x}{5} = \frac{y - 2}{-2}\).</p>`
},

{ id: "t-par-perp-r2", lesson: "3.2", tier: "essential",
  title: "Line through a point, parallel or perpendicular to a given line (R²)",
  spot: String.raw`<p>"Find the equation of the line that passes through \(P\) and is <strong>parallel</strong> / <strong>perpendicular</strong> to …", in R², with the given line in any form and the answer wanted in any form. The whole question is deciding which vector carries over.</p>`,
  steps: [
    String.raw`Identify what the given line hands you: vector or parametric form gives \(\vec m\); Cartesian form gives \(\vec n = (A, B)\).`,
    String.raw`Identify what your answer needs: vector or parametric form needs \(\vec m\); Cartesian form needs \(\vec n\).`,
    String.raw`Parallel lines share both vectors: \(\vec m\) stays \(\vec m\) and \(\vec n\) stays \(\vec n\).`,
    String.raw`Perpendicular lines swap roles: the given line's \(\vec n\) is your \(\vec m\), and the given line's \(\vec m\) is your \(\vec n\). If you need the same kind of vector you were given, swap-and-negate it instead.`,
    String.raw`Use the point: write \(\vec r = \vec r_0 + t\vec m\), or write \(Ax + By + C = 0\) and substitute to find \(C\).`,
    String.raw`Check with a dot product: the two directions dot to 0 for perpendicular lines, or are multiples for parallel ones.`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (lines) Q6b and Q2c.</strong> (a) Find the Cartesian equation of the line through \((-7, 3)\) perpendicular to \(x = 2 + t,\ y = -3 + 2t\). (b) Find a vector equation of the line perpendicular to \(2x - 5y - 6 = 0\) through \((0, -3)\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) What carries over.</strong> The given \(\vec m = (1, 2)\) is perpendicular to the new line, so it is the new line's normal: \(\vec n = (1, 2)\).</li>
<li><strong>Find C.</strong> \(x + 2y + C = 0\) through \((-7, 3)\): \(-7 + 6 + C = 0 \Rightarrow C = 1\).</li>
<li><strong>(b) What carries over.</strong> The given normal \((2, -5)\) is perpendicular to the given line, so it points along the new line: \(\vec m = (2, -5)\).</li>
<li><strong>Write it and check.</strong> \(\vec r = (0, -3) + t(2, -5)\). The given line's direction is \((5, 2)\), and \((2, -5)\cdot(5, 2) = 0\).</li>
</ol>
<p class="answer">(a) \(x + 2y + 1 = 0\) &nbsp; (b) \(\vec r = (0, -3) + t(2, -5),\ t \in \mathbb{R}\)</p>`
  },
  traps: [
    String.raw`Swap-and-negating when you should not. For "perpendicular to a Cartesian line, answer in vector form", the normal <em>is</em> already the direction you need; swapping it would give a parallel line.`,
    String.raw`For "parallel to \(2x - 3y + 8 = 0\)", the new line is \(2x - 3y + C = 0\); only the constant changes (Worksheet 3.2 Q7a: \(2x - 3y - 22 = 0\)).`,
    String.raw`Thinking in slopes ("negative reciprocal") works, but breaks for vertical lines; the vector rule never does.`
  ],
  seen: String.raw`Lesson 3.1: Example 2 · Worksheet 3.1: Q11 · Worksheet 3.2: Q7, Q8 · Unit review (lines): Q2b, Q2c, Q3b, Q6a, Q6b, Q6c`,
  tryq: String.raw`<p>(a) Find a vector equation of the line through \((4, -1)\) parallel to \(3x + 2y - 6 = 0\). (b) Find the Cartesian equation of the line through \((-2, 5)\) perpendicular to \(\vec r = (1, 0) + t(4, -3)\).</p>`,
  trya: String.raw`<p>(a) You need \(\vec m\) and were given \(\vec n = (3, 2)\); parallel lines share the normal, so take \(\vec m \perp (3, 2)\): \(\vec m = (2, -3)\). \(\vec r = (4, -1) + t(2, -3),\ t \in \mathbb{R}\).</p><p>(b) The given \(\vec m = (4, -3)\) becomes the normal: \(4x - 3y + C = 0\); \(-8 - 15 + C = 0 \Rightarrow C = 23\). \(\therefore\ 4x - 3y + 23 = 0\).</p>`
},

/* ============ 3.3 ============ */
{ id: "t-line-r3", lesson: "3.3", tier: "essential",
  title: "Vector, parametric and symmetric equations of a line in R³",
  spot: String.raw`<p>Any "find the equations of the line" in R³: through a point with a direction vector, through two points, through a point and a midpoint, parallel to a given line or an axis, perpendicular to a plane, or with given intercepts. Expect to give all three forms. (A line in R³ has no Cartesian equation: it has no single normal.)</p>`,
  steps: [
    String.raw`Get \(\vec m\): two points, subtract; parallel to a line, copy its \(\vec m\); "the line through B and C", use \(\overrightarrow{BC}\); parallel to the x-, y- or z-axis, use \((1, 0, 0)\), \((0, 1, 0)\) or \((0, 0, 1)\); perpendicular to a plane, use the plane's \(\vec n\). If a midpoint is involved, find it first: \(M = \frac{1}{2}(A + B)\).`,
    String.raw`Intercepts are points: an x-intercept of \(-7\) is \((-7, 0, 0)\) and a z-intercept of 4 is \((0, 0, 4)\). Then use two points.`,
    String.raw`Write \(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\), with \(\vec r_0\) a point the line must pass through.`,
    String.raw`Parametric: \(x = x_0 + ta,\ y = y_0 + tb,\ z = z_0 + tc,\ t \in \mathbb{R}\).`,
    String.raw`Symmetric: solve each for \(t\) and set them equal, \(\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}\) (when \(a, b, c \ne 0\)).`,
    String.raw`One zero component: write the mixed form from the notes, e.g. \(\frac{x - 3}{4} = \frac{z - 2}{-5},\ y = -1\). Two zero components: no symmetric form; give the parametric equations.`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (lines) Q7a and Q5b.</strong> (a) Find parametric (and symmetric) equations of the line \(l\) through \(A(6, 4, 0)\) parallel to the line through \(B(-2, 0, 4)\) and \(C(3, -2, 1)\). (b) Find parametric equations of the line through \((6, -4, 5)\) parallel to the y-axis.</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Direction.</strong> Parallel to line BC, so \(\vec m = \overrightarrow{BC} = (3 - (-2), -2 - 0, 1 - 4) = (5, -2, -3)\).</li>
<li><strong>Parametric.</strong> Through \(A(6, 4, 0)\): \(x = 6 + 5t,\ y = 4 - 2t,\ z = -3t\).</li>
<li><strong>Symmetric.</strong> \(\frac{x - 6}{5} = \frac{y - 4}{-2} = \frac{z}{-3}\).</li>
<li><strong>(b) Axis direction.</strong> Parallel to the y-axis means \(\vec m = (0, 1, 0)\).</li>
<li><strong>Parametric.</strong> \(x = 6,\ y = -4 + t,\ z = 5\). Two zero components, so there is no symmetric form.</li>
</ol>
<p class="answer">(a) \(x = 6 + 5t,\ y = 4 - 2t,\ z = -3t,\ t \in \mathbb{R}\) &nbsp; (b) \(x = 6,\ y = -4 + t,\ z = 5,\ t \in \mathbb{R}\)</p>`
  },
  traps: [
    String.raw`Using \(B\) or \(C\) as the point in (a). The line must pass through \(A\); \(B\) and \(C\) only supply the direction.`,
    String.raw`Intercept questions: Unit review Q4b (x-intercept \(-7\), z-intercept 4) uses \((-7, 0, 0)\) and \((0, 0, 4)\), so \(\vec m = (7, 0, 4)\). The printed key's \((7, 4, 0)\) is wrong, as your teacher noted.`,
    String.raw`Dividing by zero in the symmetric form. Each zero component becomes its own equation (\(y = -1\)).`
  ],
  seen: String.raw`Lesson 3.3: Examples 1, 3 · Worksheet 3.3: Q2b, Q4, Q7, Q8 · Unit review (lines): Q4a, Q4b, Q4c, Q5a, Q5b, Q7a`,
  tryq: String.raw`<p>Find vector, parametric and symmetric equations of the line through \(P(2, 0, -1)\) and \(Q(5, -4, -1)\).</p>`,
  trya: String.raw`<p>\(\vec m = \overrightarrow{PQ} = (3, -4, 0)\). \(\vec r = (2, 0, -1) + t(3, -4, 0),\ t \in \mathbb{R}\); \(x = 2 + 3t,\ y = -4t,\ z = -1\); symmetric (mixed, since the z-component is 0): \(\frac{x - 2}{3} = \frac{y}{-4},\ z = -1\). Check \(t = 1\): \((5, -4, -1) = Q\).</p>`
},

{ id: "t-read-symmetric", lesson: "3.3", tier: "essential",
  title: "Read a point and a direction vector off symmetric or parametric equations",
  spot: String.raw`<p>"State a point and a direction vector", "give the coordinates of two points on the line", or any question that starts from a line written like \(\frac{x - 1}{3} = \frac{2 - y}{4} = z + 5\) or as parametric equations. It is the first move in most R³ questions (distance, classifying lines, line and plane), so it has to be automatic.</p>`,
  steps: [
    String.raw`Make every numerator look like \(x - x_0\), \(y - y_0\), \(z - z_0\): \(x + 2 = x - (-2)\); \(2 - y = -(y - 2)\), so move the minus sign into the denominator; \(-x = \frac{x}{-1}\).`,
    String.raw`Make every part a fraction: \(z + 5 = \frac{z + 5}{1}\).`,
    String.raw`Read the point from the numerators (sign flipped: \(x - 1 \to 1\), \(z + 5 \to -5\)) and the direction from the denominators.`,
    String.raw`For parametric equations, the constants are the point and the coefficients of \(t\) are \(\vec m\); a coordinate with no \(t\) has a 0 component.`,
    String.raw`For a second point, add \(\vec m\) to the first (that is \(t = 1\)).`
  ],
  example: {
    q: String.raw`<p><strong>Summary sheet practice Q3 and Worksheet 3.3 Q2c.</strong> State a point and a direction vector of (a) \(\frac{x - 1}{3} = \frac{2 - y}{4} = z + 5\); (b) \(-x = \frac{y - 3}{2} = \frac{z}{4}\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Fix the y-part.</strong> \(\frac{2 - y}{4} = \frac{-(y - 2)}{4} = \frac{y - 2}{-4}\).</li>
<li><strong>Fix the z-part.</strong> \(z + 5 = \frac{z - (-5)}{1}\).</li>
<li><strong>Read.</strong> \(\frac{x - 1}{3} = \frac{y - 2}{-4} = \frac{z - (-5)}{1}\): point \((1, 2, -5)\), \(\vec m = (3, -4, 1)\).</li>
<li><strong>(b) Fix the x-part.</strong> \(-x = \frac{x - 0}{-1}\), so \(\frac{x}{-1} = \frac{y - 3}{2} = \frac{z}{4}\): point \((0, 3, 0)\), \(\vec m = (-1, 2, 4)\).</li>
</ol>
<p class="answer">(a) \((1, 2, -5)\), \(\vec m = (3, -4, 1)\) &nbsp; (b) \((0, 3, 0)\), \(\vec m = (-1, 2, 4)\)</p>`
  },
  traps: [
    String.raw`Reading \(\frac{2 - y}{4}\) as point \(y = -2\) and component \(+4\). Both are wrong: the point has \(y = 2\) and the component is \(-4\).`,
    String.raw`Forgetting the invisible denominator 1 in \(z + 3\) (Unit review Q5a: \(\vec m = (-3, -2, 1)\)).`,
    String.raw`Copying the point with the wrong sign: \(\frac{y + 6}{2}\) means \(y_0 = -6\).`
  ],
  seen: String.raw`Worksheet 3.3: Q2a, Q2c, Q3 · Unit review (lines): Q4c, Q5a, Q12a, Q14d · Quest: Q14 · Summary sheet practice: Q1, Q2, Q3`,
  tryq: String.raw`<p>State a point and a direction vector for (a) \(\frac{x + 2}{5} = \frac{3 - y}{2} = -z\); (b) \(x = 4,\ \frac{y - 1}{3} = \frac{z + 2}{-2}\); (c) \(x = -t,\ y = 7,\ z = 2 + 3t\).</p>`,
  trya: String.raw`<p>(a) \(\frac{x - (-2)}{5} = \frac{y - 3}{-2} = \frac{z - 0}{-1}\): point \((-2, 3, 0)\), \(\vec m = (5, -2, -1)\).</p><p>(b) \(x\) is fixed at 4, so its component is 0: point \((4, 1, -2)\), \(\vec m = (0, 3, -2)\).</p><p>(c) Point \((0, 7, 2)\), \(\vec m = (-1, 0, 3)\).</p>`
},

{ id: "t-classify-lines", lesson: "3.3", tier: "essential",
  title: "Classify two lines: coincident, parallel, perpendicular or neither",
  spot: String.raw`<p>Two lines are given and the question asks whether they are "the same line (coincident, equivalent), parallel and distinct, perpendicular, or none of these". It appears in R² and R³, with the lines in any mix of forms.</p>`,
  steps: [
    String.raw`Read \(\vec m_1\) and \(\vec m_2\), converting forms first if needed (symmetric: read the denominators; Cartesian in R²: swap-and-negate the normal).`,
    String.raw`Parallel test: is \(\vec m_1 = k\vec m_2\) with one consistent \(k\)? Factoring each vector shows it quickly: \((3, -6, 3) = 3(1, -2, 1)\) and \((2, -4, 2) = 2(1, -2, 1)\).`,
    String.raw`If parallel, test a point: substitute a known point of line 1 into line 2. The same \(t\) in every coordinate means coincident; otherwise parallel and distinct.`,
    String.raw`If not parallel, test perpendicular: \(\vec m_1\cdot\vec m_2 = 0\).`,
    String.raw`Otherwise the answer is "neither". (In R³ such lines either intersect or are skew; if asked, set the two parametric forms equal with different parameters, solve two equations and check the third.)`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (lines) Q8a and Q8d.</strong> Parallel and distinct, coincident, perpendicular, or none of these? (a) \(\vec r = (2, 3) + t(-3, 1)\) and \(\vec r = (-1, 4) + u(6, -2)\); (d) \((x, y, z) = (1, 7, 2) + t(-1, -1, 1)\) and \((x, y, z) = (-3, 0, 1) + u(2, -2, -2)\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Directions.</strong> \((6, -2) = -2(-3, 1)\), so the lines are parallel.</li>
<li><strong>Point test.</strong> Is \((-1, 4)\) on line 1? \(-1 = 2 - 3t \Rightarrow t = 1\); \(4 = 3 + t \Rightarrow t = 1\). Same \(t\): coincident.</li>
<li><strong>(d) Parallel?</strong> \((-1, -1, 1) = k(2, -2, -2)\) needs \(k = -\frac{1}{2}\) from \(x\) but \(k = \frac{1}{2}\) from \(y\): not parallel.</li>
<li><strong>Perpendicular?</strong> \((-1)(2) + (-1)(-2) + (1)(-2) = -2 \ne 0\): not perpendicular. So neither.</li>
<li><strong>(Optional) Do they meet?</strong> \(1 - t = -3 + 2u\) and \(7 - t = -2u\) give \(u = -\frac{3}{4},\ t = \frac{11}{2}\); then \(z\): \(2 + \frac{11}{2} = \frac{15}{2}\) but \(1 - 2u = \frac{5}{2}\). No common point, so the lines are skew.</li>
</ol>
<p class="answer">(a) coincident &nbsp; (d) neither parallel nor perpendicular (skew)</p>`
  },
  traps: [
    String.raw`Stopping at "parallel". Parallel lines can be the same line, so always do the point test (Worksheet 3.3 Q9a is parallel and distinct; Q9c is coincident).`,
    String.raw`Checking only two components for \(k\). In R³ all three must give the same \(k\).`,
    String.raw`Unit review Q8d: the printed key says "neither parallel nor perpendicular" and your teacher's note shortens it to "neither"; both mean the same.`
  ],
  seen: String.raw`Lesson 3.3: Example 2 · Worksheet 3.1: Q10 · Worksheet 3.3: Q9 · Unit review (lines): Q8a, Q8b, Q8c, Q8d`,
  tryq: String.raw`<p>Classify each pair. (a) \(L_1: \vec r = (1, -2, 4) + t(2, -1, 3)\) and \(L_2: \vec r = (5, -4, 10) + s(-4, 2, -6)\). (b) \(L_3: \vec r = (0, 1, 1) + t(1, 2, 0)\) and \(L_4: \vec r = (3, 2, 6) + s(2, -1, 5)\).</p>`,
  trya: String.raw`<p>(a) \((-4, 2, -6) = -2(2, -1, 3)\): parallel. Is \((5, -4, 10)\) on \(L_1\)? \(5 = 1 + 2t\), \(-4 = -2 - t\), \(10 = 4 + 3t\) all give \(t = 2\): coincident.</p><p>(b) \((1, 2, 0)\) and \((2, -1, 5)\) are not multiples; \((1)(2) + (2)(-1) + (0)(5) = 0\): perpendicular. (They do meet: \(t = 1\) on \(L_3\) and \(s = -1\) on \(L_4\) both give \((1, 3, 1)\).)</p>`
},

{ id: "t-direction-cosines", lesson: "3.3", tier: "likely",
  title: "Direction cosines and direction angles of a line",
  spot: String.raw`<p>"Find the direction cosines and the direction angles (to the nearest degree) of the direction vector of the line …". The direction angles \(\alpha, \beta, \gamma\) are the angles \(\vec m\) makes with the positive x-, y- and z-axes.</p>`,
  steps: [
    String.raw`Read \(\vec m = (a, b, c)\) from the line, in whatever form it is given.`,
    String.raw`Find \(|\vec m| = \sqrt{a^2 + b^2 + c^2}\).`,
    String.raw`Direction cosines: \(\cos\alpha = \frac{a}{|\vec m|},\ \cos\beta = \frac{b}{|\vec m|},\ \cos\gamma = \frac{c}{|\vec m|}\), rationalized (your teacher's note on Q12: no radicals in denominators).`,
    String.raw`Direction angles: take \(\cos^{-1}\) of each and round to the nearest degree. A negative cosine gives an angle over \(90^\circ\).`,
    String.raw`Check: \(\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1\).`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (lines) Q12a.</strong> Find the direction cosines and direction angles of the direction vector of \(\frac{x - 3}{5} = \frac{y + 6}{2} = \frac{z - 1}{-1}\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Direction.</strong> \(\vec m = (5, 2, -1)\), \(|\vec m| = \sqrt{25 + 4 + 1} = \sqrt{30}\).</li>
<li><strong>Cosines, rationalized.</strong> \(\cos\alpha = \frac{5}{\sqrt{30}} = \frac{\sqrt{30}}{6}\), \(\cos\beta = \frac{2}{\sqrt{30}} = \frac{\sqrt{30}}{15}\), \(\cos\gamma = -\frac{1}{\sqrt{30}} = -\frac{\sqrt{30}}{30}\).</li>
<li><strong>Angles.</strong> \(\alpha = \cos^{-1}(0.913) \approx 24^\circ\), \(\beta = \cos^{-1}(0.365) \approx 69^\circ\), \(\gamma = \cos^{-1}(-0.183) \approx 101^\circ\).</li>
<li><strong>Check.</strong> \(\frac{25 + 4 + 1}{30} = 1\).</li>
</ol>
<p class="answer">\(\cos\alpha = \frac{\sqrt{30}}{6},\ \cos\beta = \frac{\sqrt{30}}{15},\ \cos\gamma = -\frac{\sqrt{30}}{30}\); \(\alpha \approx 24^\circ,\ \beta \approx 69^\circ,\ \gamma \approx 101^\circ\)</p>`
  },
  traps: [
    String.raw`Forcing the angles to be acute. A negative component gives an obtuse direction angle (\(\gamma \approx 101^\circ\) here).`,
    String.raw`Using the point instead of the direction vector. Only \(\vec m\) matters.`,
    String.raw`Leaving \(\frac{5}{\sqrt{30}}\) unrationalized; the teacher marks the rationalized form.`
  ],
  seen: String.raw`Unit review (lines): Q12a, Q12b, Q12c`,
  tryq: String.raw`<p>Find the direction cosines and direction angles of the line \(x = 1 + 2t,\ y = -6t,\ z = 4 + 3t\).</p>`,
  trya: String.raw`<p>\(\vec m = (2, -6, 3)\), \(|\vec m| = \sqrt{4 + 36 + 9} = 7\). \(\cos\alpha = \frac{2}{7},\ \cos\beta = -\frac{6}{7},\ \cos\gamma = \frac{3}{7}\) (already rational). \(\alpha \approx 73^\circ,\ \beta \approx 149^\circ,\ \gamma \approx 65^\circ\). Check: \(\frac{4 + 36 + 9}{49} = 1\).</p>`
},

/* ============ 3.4 ============ */
{ id: "t-dist-r2", lesson: "3.4", tier: "essential",
  title: "Distance from a point to a line in R²",
  spot: String.raw`<p>"Find the (minimum, shortest) distance from the point \(Q\) to the line …" where everything has two coordinates. The shortest distance is always the perpendicular distance.</p>`,
  steps: [
    String.raw`Get the line into Cartesian form \(Ax + By + C = 0\), because the formula needs \(A\), \(B\) and \(C\). From symmetric form, cross-multiply; from vector form, swap-and-negate \(\vec m\) to get \(\vec n\) and find \(C\); \(x = -5\) is \(x + 5 = 0\).`,
    String.raw`Label the point \((x_1, y_1)\).`,
    String.raw`Substitute into \(d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\). (It is the length of the projection of \(\overrightarrow{P_0P}\) onto \(\vec n\).)`,
    String.raw`Simplify the absolute value and rationalize: \(\frac{7}{\sqrt{13}} = \frac{7\sqrt{13}}{13}\).`,
    String.raw`If you get \(d = 0\), say so in words: the point is on the line.`
  ],
  example: {
    q: String.raw`<p><strong>Worksheet 3.4 Q11b.</strong> Find the distance from \(Q(3, -2)\) to the line \(\frac{x - 3}{2} = \frac{y - 4}{7}\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Cartesian form.</strong> Cross-multiply: \(7(x - 3) = 2(y - 4) \Rightarrow 7x - 21 = 2y - 8 \Rightarrow 7x - 2y - 13 = 0\).</li>
<li><strong>Substitute.</strong> \(d = \frac{|7(3) - 2(-2) - 13|}{\sqrt{7^2 + (-2)^2}} = \frac{|21 + 4 - 13|}{\sqrt{53}} = \frac{12}{\sqrt{53}}\).</li>
<li><strong>Rationalize.</strong> \(\frac{12}{\sqrt{53}}\cdot\frac{\sqrt{53}}{\sqrt{53}} = \frac{12\sqrt{53}}{53}\).</li>
</ol>
<p class="answer">\(d = \frac{12\sqrt{53}}{53}\) units</p>`
  },
  traps: [
    String.raw`Plugging a symmetric or vector equation straight into the formula. Convert first; even \(2x - 3y = 7\) must become \(2x - 3y - 7 = 0\) (Unit review Q14b: \(\frac{22\sqrt{13}}{13}\)).`,
    String.raw`Dropping the absolute value. A distance is never negative.`,
    String.raw`Using this formula in R³. With three coordinates you need the cross-product formula (next type).`
  ],
  seen: String.raw`Lesson 3.4: Example 1 · Worksheet 3.4: Q11, Q12 · Unit review (lines): Q14b · Quest: Q15 · Summary sheet practice: Q4`,
  tryq: String.raw`<p>Find the distance from \(P(-2, 5)\) to the line \(\vec r = (1, 3) + t(4, -3)\).</p>`,
  trya: String.raw`<p>\(\vec m = (4, -3) \Rightarrow \vec n = (3, 4)\); \(3x + 4y + C = 0\) through \((1, 3)\): \(3 + 12 + C = 0 \Rightarrow C = -15\). \(d = \frac{|3(-2) + 4(5) - 15|}{\sqrt{9 + 16}} = \frac{|-1|}{5} = \frac{1}{5}\) units.</p>`
},

{ id: "t-dist-r3", lesson: "3.4", tier: "essential",
  title: "Distance from a point to a line in R³ (and between parallel lines)",
  spot: String.raw`<p>"Find the (shortest, perpendicular) distance from the point \(P\) to the line …" with three coordinates, or "find the distance between the parallel lines …". Lines in R³ have no single normal, so the R² formula cannot be used. (If it asks for the distance between two <em>points</em>, as in Unit review Q14a, just use \(|\overrightarrow{AB}|\): \(3\sqrt{5}\) there.)</p>`,
  steps: [
    String.raw`From the line, read a point \(P_0\) and the direction \(\vec m\). For two parallel lines, \(P_0\) is a point on one line and \(P\) a point on the other.`,
    String.raw`Form \(\overrightarrow{P_0P} = P - P_0\) (head minus tail).`,
    String.raw`Compute \(\overrightarrow{P_0P}\times\vec m\) (write the components twice and cross-multiply, as in class).`,
    String.raw`Find both magnitudes and divide: \(d = \frac{|\overrightarrow{P_0P}\times\vec m|}{|\vec m|}\). This comes from \(\sin\theta = \frac{d}{|\overrightarrow{P_0P}|}\) and \(|\vec a\times\vec b| = |\vec a||\vec b|\sin\theta\).`,
    String.raw`Simplify the radical and rationalize the denominator.`,
    String.raw`Optional check: \(d^2 = |\overrightarrow{P_0P}|^2 - \left(\frac{\overrightarrow{P_0P}\cdot\vec m}{|\vec m|}\right)^2\).`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q16.</strong> Calculate the exact perpendicular distance from \(Q(2, -3, 1)\) to the line \(L: \vec r = (-1, 0, 2) + t(1, 2, -2),\ t \in \mathbb{R}\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Read the line.</strong> \(P_0(-1, 0, 2)\), \(\vec m = (1, 2, -2)\), \(|\vec m| = \sqrt{1 + 4 + 4} = 3\).</li>
<li><strong>Connecting vector.</strong> \(\overrightarrow{P_0Q} = (2 - (-1), -3 - 0, 1 - 2) = (3, -3, -1)\).</li>
<li><strong>Cross product.</strong> \(\overrightarrow{P_0Q}\times\vec m = \big((-3)(-2) - (-1)(2),\ (-1)(1) - (3)(-2),\ (3)(2) - (-3)(1)\big) = (8, 5, 9)\).</li>
<li><strong>Magnitude.</strong> \(|(8, 5, 9)| = \sqrt{64 + 25 + 81} = \sqrt{170}\).</li>
<li><strong>Divide and check.</strong> \(d = \frac{\sqrt{170}}{3}\). Check: \(\overrightarrow{P_0Q}\cdot\vec m = 3 - 6 + 2 = -1\), so \(d^2 = 19 - \frac{1}{9} = \frac{170}{9}\).</li>
</ol>
<p class="answer">\(d = \frac{\sqrt{170}}{3} \approx 4.35\) units</p>
<p>The quest's printed solution has \((4, 5, 9)\) and \(\frac{\sqrt{122}}{3}\). Its first component should be \((-3)(-2) - (-1)(2) = 6 + 2 = 8\), so \(\frac{\sqrt{170}}{3}\) is the correct answer.</p>`
  },
  traps: [
    String.raw`Sign slips in the cross product, like the one in the printed quest solution. Run the check in the last step, or verify that the cross product is perpendicular to \(\vec m\): \((8, 5, 9)\cdot(1, 2, -2) = 8 + 10 - 18 = 0\).`,
    String.raw`Using the outside point as \(P_0\). \(P_0\) must be on the line; the outside point is \(P\).`,
    String.raw`Dividing by \(|\overrightarrow{P_0P}|\) instead of \(|\vec m|\).`,
    String.raw`Parallel lines (Worksheet 3.4 Q15c): use the shared \(\vec m\) and one point from each line. The key's \(\frac{\sqrt{115070}}{74}\) is just \(\frac{\sqrt{1555}}{\sqrt{74}}\) rationalized.`
  ],
  seen: String.raw`Lesson 3.4: Example 2 · Worksheet 3.4: Q15a (proof), Q15b, Q15c · Unit review (lines): Q14a, Q14c, Q14d · Quest: Q16`,
  tryq: String.raw`<p>Find the distance between the parallel lines \(\vec r = (1, 0, 2) + t(2, 1, -2)\) and \(\vec r = (4, 3, -1) + s(-4, -2, 4)\).</p>`,
  trya: String.raw`<p>\((-4, -2, 4) = -2(2, 1, -2)\), so use \(\vec m = (2, 1, -2)\), \(|\vec m| = 3\). \(P_0(1, 0, 2)\) on the first line, \(P(4, 3, -1)\) on the second: \(\overrightarrow{P_0P} = (3, 3, -3)\). \(\overrightarrow{P_0P}\times\vec m = \big((3)(-2) - (-3)(1),\ (-3)(2) - (3)(-2),\ (3)(1) - (3)(2)\big) = (-3, 0, -3)\), magnitude \(\sqrt{18} = 3\sqrt{2}\). \(d = \frac{3\sqrt{2}}{3} = \sqrt{2}\) units.</p>`
},

{ id: "t-closest-point", lesson: "3.4", tier: "extra",
  title: "Closest point on a line (foot of the perpendicular)",
  spot: String.raw`<p>"Find the point on the line that is closest to \(P\)" or "find the foot of the perpendicular from \(P\) to the line". It is not set on your worksheets, review or quest, but it is the natural follow-up to any 3.4 distance question and a second way to check a distance.</p>`,
  steps: [
    String.raw`Write the general point of the line from its parametric equations: \(R = (x_0 + ta,\ y_0 + tb,\ z_0 + tc)\).`,
    String.raw`Form \(\overrightarrow{PR} = R - P\) in terms of \(t\).`,
    String.raw`The closest point makes \(\overrightarrow{PR}\) perpendicular to the line, so solve \(\overrightarrow{PR}\cdot\vec m = 0\) for \(t\).`,
    String.raw`Substitute that \(t\) into \(R\) to get the point.`,
    String.raw`The distance is \(|\overrightarrow{PR}|\) at that \(t\); it must match the formula answer.`
  ],
  example: {
    q: String.raw`<p><strong>Extension of Lesson 3.4 Example 2.</strong> Find the point on \(\vec r = (1, 0, -5) + t(2, -2, 3)\) closest to \(P(3, -2, 1)\), and confirm the lesson's distance \(\frac{6\sqrt{34}}{17}\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>General point.</strong> \(R = (1 + 2t,\ -2t,\ -5 + 3t)\).</li>
<li><strong>Connecting vector.</strong> \(\overrightarrow{PR} = (-2 + 2t,\ 2 - 2t,\ -6 + 3t)\).</li>
<li><strong>Perpendicular condition.</strong> \(2(-2 + 2t) - 2(2 - 2t) + 3(-6 + 3t) = 17t - 26 = 0 \Rightarrow t = \frac{26}{17}\).</li>
<li><strong>The point.</strong> \(R = \left(\frac{69}{17}, -\frac{52}{17}, -\frac{7}{17}\right)\).</li>
<li><strong>Distance.</strong> \(\overrightarrow{PR} = \left(\frac{18}{17}, -\frac{18}{17}, -\frac{24}{17}\right)\), so \(|\overrightarrow{PR}| = \frac{\sqrt{324 + 324 + 576}}{17} = \frac{\sqrt{1224}}{17} = \frac{6\sqrt{34}}{17}\), matching the lesson.</li>
</ol>
<p class="answer">\(\left(\frac{69}{17}, -\frac{52}{17}, -\frac{7}{17}\right)\), at distance \(\frac{6\sqrt{34}}{17}\)</p>`
  },
  traps: [
    String.raw`Dotting with the wrong vector. The condition is \(\overrightarrow{PR}\cdot\vec m = 0\), with \(\vec m\) the line's direction.`,
    String.raw`A wrong \(t\) still gives a point on the line, so the answer looks plausible. Always compare \(|\overrightarrow{PR}|\) with the formula distance.`
  ],
  seen: String.raw`Not set on the worksheets, unit review or quest; builds on Lesson 3.4 and Worksheet 3.4.`,
  tryq: String.raw`<p>Find the point on \(\vec r = (1, 2, 3) + t(1, -1, 2)\) closest to \(P(4, 1, 0)\), and the distance.</p>`,
  trya: String.raw`<p>\(R = (1 + t, 2 - t, 3 + 2t)\), \(\overrightarrow{PR} = (-3 + t, 1 - t, 3 + 2t)\). \((-3 + t) - (1 - t) + 2(3 + 2t) = 6t + 2 = 0 \Rightarrow t = -\frac{1}{3}\). \(R = \left(\frac{2}{3}, \frac{7}{3}, \frac{7}{3}\right)\); \(\overrightarrow{PR} = \left(-\frac{10}{3}, \frac{4}{3}, \frac{7}{3}\right)\), \(d = \frac{\sqrt{100 + 16 + 49}}{3} = \frac{\sqrt{165}}{3}\). Formula check: \(\frac{|(3, -1, -3)\times(1, -1, 2)|}{\sqrt{6}} = \frac{\sqrt{110}}{\sqrt{6}} = \frac{\sqrt{165}}{3}\).</p>`
},

/* ============ 3.5 ============ */
{ id: "t-lincomb-r2", lesson: "3.5", tier: "essential",
  title: "Write a vector as a linear combination in R² (and check for a basis)",
  spot: String.raw`<p>"Express \(\vec w\) as a linear combination of \(\vec u\) and \(\vec v\)", "write \(\vec p\) in terms of \(\hat\imath\) and \(\hat\jmath\)", or "can every vector in the xy-plane be written as a linear combination of \(\vec u\) and \(\vec v\)?", with two-component vectors.</p>`,
  steps: [
    String.raw`Basis check first: two vectors span (form a basis for) R² exactly when they are not collinear, i.e. not scalar multiples. If they are multiples, the answer to "can every vector …" is no.`,
    String.raw`Let \(a, b \in \mathbb{R}\) such that \(\vec w = a\vec u + b\vec v\), and write it in components.`,
    String.raw`Make one equation per component: two equations, two unknowns.`,
    String.raw`Solve by elimination or substitution, as the teacher does, then substitute back for the other scalar.`,
    String.raw`Check by recombining: \(a\vec u + b\vec v\) must give \(\vec w\).`,
    String.raw`For \(\hat\imath, \hat\jmath\): \((x, y) = x\hat\imath + y\hat\jmath\). From a magnitude \(r\) and angle \(\theta\), \(x = r\cos\theta\) and \(y = r\sin\theta\) (so 6 at \(150^\circ\) is \(-3\sqrt{3}\hat\imath + 3\hat\jmath\)).`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q6.</strong> Express \(\vec w = (-5, 17)\) as a linear combination \(\vec w = a\vec u + b\vec v\) of \(\vec u = (3, 1)\) and \(\vec v = (-2, 4)\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Basis check.</strong> \((3, 1)\) and \((-2, 4)\) are not multiples (\(\frac{-2}{3} \ne \frac{4}{1}\)), so a unique answer exists.</li>
<li><strong>Set up.</strong> \((-5, 17) = a(3, 1) + b(-2, 4)\) gives \(3a - 2b = -5\) ① and \(a + 4b = 17\) ②.</li>
<li><strong>Solve.</strong> From ②, \(a = 17 - 4b\). Into ①: \(3(17 - 4b) - 2b = -5 \Rightarrow 51 - 14b = -5 \Rightarrow b = 4\), then \(a = 17 - 16 = 1\).</li>
<li><strong>Check.</strong> \(1(3, 1) + 4(-2, 4) = (3 - 8, 1 + 16) = (-5, 17)\).</li>
</ol>
<p class="answer">\(a = 1,\ b = 4\): \(\vec w = \vec u + 4\vec v\)</p>`
  },
  traps: [
    String.raw`Mixing up which scalar goes with which vector. Keep \(a\) with \(\vec u\) and \(b\) with \(\vec v\) in every component.`,
    String.raw`Answering "yes" for collinear vectors. \((-4, -6) = -2(2, 3)\) and \((10, 15) = 5(2, 3)\) only reach vectors along one line (Worksheet 3.5 Q6).`
  ],
  seen: String.raw`Lesson 3.5: Example 1 · Worksheet 3.5: Q4, Q5, Q6 · Quest: Q6 · Summary sheet practice: Q6`,
  tryq: String.raw`<p>(a) Can every vector in the xy-plane be written as a linear combination of \(\vec u = (2, -1)\) and \(\vec v = (-6, 3)\)? (b) Write \(\vec w = (7, 0)\) as a linear combination of \(\vec u = (1, 2)\) and \(\vec v = (3, -1)\).</p>`,
  trya: String.raw`<p>(a) No: \(\vec v = -3\vec u\), so they are collinear and only reach vectors along one line.</p><p>(b) \(a + 3b = 7\) and \(2a - b = 0\). From the second, \(b = 2a\); then \(7a = 7\), so \(a = 1,\ b = 2\). Check: \((1, 2) + 2(3, -1) = (7, 0)\). \(\therefore\ \vec w = \vec u + 2\vec v\).</p>`
},

{ id: "t-lincomb-r3", lesson: "3.5", tier: "essential",
  title: "Is a vector a linear combination of two others? (R³)",
  spot: String.raw`<p>In R³: "can \(\vec x\) be expressed as a linear combination of \(\vec y\) and \(\vec z\)?", "which of the following vectors can be written in the form \(s\vec u + t\vec v\)?", "find another vector that cannot be expressed …". There are three components but only two scalars, so there is a built-in check.</p>`,
  steps: [
    String.raw`Glance at the two given vectors: if they are collinear they only span a line, and the answer is yes only if the target is a multiple of them too (Quest Q8).`,
    String.raw`Let \(\vec w = a\vec u + b\vec v\) and write the three component equations ①, ②, ③.`,
    String.raw`Solve two of them (pick the pair that eliminates fastest) for \(a\) and \(b\).`,
    String.raw`Substitute into the third. LS = RS means yes, so state \(\vec w = a\vec u + b\vec v\); LS \(\ne\) RS means it is not possible.`,
    String.raw`Geometric meaning: yes means the three vectors are coplanar; no means \(\vec w\) points out of the plane of \(\vec u\) and \(\vec v\).`
  ],
  example: {
    q: String.raw`<p><strong>Worksheet 3.5 Q8a (iii) and (iv).</strong> If \(\vec u = (2, 1, 1)\) and \(\vec v = (-1, 1, 3)\), can (iii) \((1, 5, 11)\) and (iv) \((4, 5, 8)\) be written in the form \(s\vec u + t\vec v\)?</p>`,
    a: String.raw`<ol class="work">
<li><strong>(iii) Set up.</strong> \((1, 5, 11) = a(2, 1, 1) + b(-1, 1, 3)\): \(2a - b = 1\) ①, \(a + b = 5\) ②, \(a + 3b = 11\) ③.</li>
<li><strong>Solve two.</strong> ① + ②: \(3a = 6 \Rightarrow a = 2\); then \(b = 3\).</li>
<li><strong>Check the third.</strong> ③: \(2 + 3(3) = 11\). LS = RS, so \((1, 5, 11) = 2\vec u + 3\vec v\).</li>
<li><strong>(iv) Same moves.</strong> \(2a - b = 4\) and \(a + b = 5\) give \(a = 3,\ b = 2\).</li>
<li><strong>Check the third.</strong> \(a + 3b = 3 + 6 = 9 \ne 8\). Not possible.</li>
</ol>
<p class="answer">(iii) yes, \(2\vec u + 3\vec v\) &nbsp; (iv) no</p>`
  },
  traps: [
    String.raw`Skipping the check in the third equation. Two equations in two unknowns almost always have a solution; only the third decides (the teacher stars this step).`,
    String.raw`Saying "no" when the two given vectors are collinear but the target lies on that same line. Check for multiples first.`
  ],
  seen: String.raw`Lesson 3.5: Example 2 · Worksheet 3.5: Q7a, Q8a, Q8b, Q8c · Quest: Q8`,
  tryq: String.raw`<p>Let \(\vec u = (1, 1, 2)\) and \(\vec v = (2, -1, 0)\). Is (a) \((5, -1, 4)\), (b) \((4, 1, 4)\) a linear combination of \(\vec u\) and \(\vec v\)?</p>`,
  trya: String.raw`<p>(a) \(a + 2b = 5,\ a - b = -1,\ 2a = 4\). From the first two: \(3b = 6\), so \(b = 2,\ a = 1\). Third: \(2(1) = 2 \ne 4\). No.</p><p>(b) \(a + 2b = 4,\ a - b = 1\) give \(b = 1,\ a = 2\). Third: \(2(2) = 4\). Yes: \((4, 1, 4) = 2\vec u + \vec v\).</p>`
},

{ id: "t-coplanar", lesson: "3.5", tier: "essential",
  title: "Are three vectors coplanar?",
  spot: String.raw`<p>"Are the vectors coplanar?", "determine whether \(\vec a, \vec b, \vec c\) are coplanar", "by using the triple scalar product …", or "do three vectors form a basis for space?" (they do exactly when they are <em>not</em> coplanar).</p>`,
  steps: [
    String.raw`Fast way (summary sheet): compute the triple scalar product \(\vec u\cdot(\vec v\times\vec w)\). Its size is the volume of the box the three vectors make.`,
    String.raw`First the cross product \(\vec v\times\vec w\) (write the components twice and cross-multiply).`,
    String.raw`Then dot the result with \(\vec u\).`,
    String.raw`Zero means coplanar (no volume); non-zero means not coplanar. Write the conclusion with the reason.`,
    String.raw`Long way, if asked or as a check: solve \(\vec w = a\vec u + b\vec v\) with two equations and test the third (previous type).`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q7.</strong> Determine whether \(\vec a = (2, -1, 3)\), \(\vec b = (1, 4, -2)\) and \(\vec c = (5, 7, -1)\) are coplanar.</p>`,
    a: String.raw`<ol class="work">
<li><strong>Cross product.</strong> \(\vec b\times\vec c = \big((4)(-1) - (-2)(7),\ (-2)(5) - (1)(-1),\ (1)(7) - (4)(5)\big) = (10, -9, -13)\).</li>
<li><strong>Dot product.</strong> \(\vec a\cdot(\vec b\times\vec c) = 2(10) + (-1)(-9) + 3(-13) = 20 + 9 - 39 = -10\).</li>
<li><strong>Conclude.</strong> \(-10 \ne 0\), so the vectors span a box with non-zero volume.</li>
</ol>
<p class="answer">\(\vec a\cdot(\vec b\times\vec c) = -10 \ne 0\): not coplanar</p>`
  },
  traps: [
    String.raw`Stopping after the cross product. \(\vec v\times\vec w\) is a vector; you must still dot it with the third vector to get a number.`,
    String.raw`Middle-component sign slips: the middle component is \(v_3w_1 - v_1w_3\). The teacher's "write it twice" layout avoids the minus sign in front of \(\hat\jmath\).`,
    String.raw`Worrying about the order. \(\vec a\cdot(\vec b\times\vec c)\) or \(\vec u\cdot(\vec v\times\vec w)\) in any arrangement gives the same size; only zero versus non-zero matters.`
  ],
  seen: String.raw`Lesson 3.5: Examples 2, 3 · Worksheet 3.5: Q7, Q11 · Quest: Q7 · Summary sheet practice: Q8, Q13`,
  tryq: String.raw`<p>Are \(\vec u = (1, 2, -1)\), \(\vec v = (3, 0, 2)\) and \(\vec w = (5, 4, 0)\) coplanar?</p>`,
  trya: String.raw`<p>\(\vec v\times\vec w = \big((0)(0) - (2)(4),\ (2)(5) - (3)(0),\ (3)(4) - (0)(5)\big) = (-8, 10, 12)\). \(\vec u\cdot(\vec v\times\vec w) = -8 + 20 - 12 = 0\): coplanar. (Indeed \(\vec w = 2\vec u + \vec v\).)</p>`
},

{ id: "t-solve-scalars", lesson: "3.5", tier: "likely",
  title: "Solve for unknown scalars in a vector equation",
  spot: String.raw`<p>"Find values of \(a\), \(b\) and \(c\) which satisfy \(a(2, 1, 0) + b(-3, 4, 5) + c(2, 0, 3) = (-4, 10, 7)\)", or "given \(\vec u = x\vec a + 2y\vec b\), … where \(\vec a\) and \(\vec b\) are not collinear, find \(x\) and \(y\) for which \(2\vec u - \vec v = \vec w\)".</p>`,
  steps: [
    String.raw`With components: write one equation per component (three equations for three unknowns), numbered ①, ②, ③.`,
    String.raw`Eliminate the same unknown from two different pairs, as the teacher does ("eliminate b"), to get two equations in two unknowns.`,
    String.raw`Solve that pair, then back-substitute to find the third unknown.`,
    String.raw`Check in the equation you used least.`,
    String.raw`With letters \(\vec a, \vec b\): expand and collect everything as \((\ldots)\vec a + (\ldots)\vec b\). Because \(\vec a\) and \(\vec b\) are not collinear, the coefficients of \(\vec a\) must match on both sides, and so must those of \(\vec b\).`
  ],
  example: {
    q: String.raw`<p><strong>Worksheet 3.5 Q10b.</strong> Find \(a, b, c\) such that \(a(3, -1, 2) + b(-1, 1, 3) + c(2, 1, 5) = (2, 5, 16)\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Equations.</strong> \(3a - b + 2c = 2\) ①, \(-a + b + c = 5\) ②, \(2a + 3b + 5c = 16\) ③.</li>
<li><strong>Eliminate b twice.</strong> ① + ②: \(2a + 3c = 7\) ④. ② \(\times 3\) − ③: \(-5a - 2c = -1\) ⑤.</li>
<li><strong>Solve ④ and ⑤.</strong> ④ \(\times 2\) + ⑤ \(\times 3\): \(-11a = 11 \Rightarrow a = -1\); then ④: \(-2 + 3c = 7 \Rightarrow c = 3\).</li>
<li><strong>Back-substitute.</strong> ①: \(-3 - b + 6 = 2 \Rightarrow b = 1\).</li>
<li><strong>Check ③.</strong> \(-2 + 3 + 15 = 16\).</li>
</ol>
<p class="answer">\(a = -1,\ b = 1,\ c = 3\)</p>`
  },
  traps: [
    String.raw`Eliminating different unknowns from the two pairs. Both new equations must be missing the same variable.`,
    String.raw`In the letter version (Worksheet 3.5 Q9), forgetting to distribute the minus sign: \(2\vec u - \vec v = 2x\vec a + 4y\vec b + 2y\vec a - 3y\vec b\).`
  ],
  seen: String.raw`Worksheet 3.5: Q9, Q10a, Q10b`,
  tryq: String.raw`<p>(a) Find \(a, b, c\): \(a(1, 0, 2) + b(2, 1, 0) + c(0, 3, 1) = (5, 5, 3)\). (b) If \(\vec a\) and \(\vec b\) are not collinear and \((x + y)\vec a + (x - y)\vec b = 5\vec a + \vec b\), find \(x\) and \(y\).</p>`,
  trya: String.raw`<p>(a) \(a + 2b = 5\), \(b + 3c = 5\), \(2a + c = 3\). From the first, \(a = 5 - 2b\); then \(c = 3 - 2a = -7 + 4b\); into the second: \(b + 3(-7 + 4b) = 5 \Rightarrow 13b = 26 \Rightarrow b = 2\). So \(a = 1,\ c = 1\). Check: \((1 + 4,\ 2 + 3,\ 2 + 1) = (5, 5, 3)\).</p><p>(b) Match coefficients: \(x + y = 5\) and \(x - y = 1\), so \(x = 3,\ y = 2\).</p>`
},

/* ============ 3.6 ============ */
{ id: "t-plane-vector", lesson: "3.6", tier: "essential",
  title: "Vector and parametric equations of a plane",
  spot: String.raw`<p>"Determine the vector (and parametric) equations of the plane through \(P\) parallel to \(\vec a\) and \(\vec b\)", "… parallel to the plane …", "write parametric equations for this plane", "state two direction vectors / two points on the plane", or a coordinate plane such as "the xz-plane".</p>`,
  steps: [
    String.raw`You need one point and two direction vectors that are not collinear, because two independent directions span a plane.`,
    String.raw`Collect them from the question: given vectors; "parallel to the plane …" means copy that plane's two direction vectors; a coordinate plane uses its axis vectors (the xz-plane: \((1, 0, 0)\) and \((0, 0, 1)\) through the origin).`,
    String.raw`Check the two directions are not multiples of each other.`,
    String.raw`Write \(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\).`,
    String.raw`Split into \(x = x_0 + sa_1 + tb_1,\ y = y_0 + sa_2 + tb_2,\ z = z_0 + sa_3 + tb_3,\ s, t \in \mathbb{R}\).`,
    String.raw`To list points, choose values of \(s\) and \(t\): \(s = t = 0\) gives \(\vec r_0\); \(s = 1, t = 0\) gives \(\vec r_0 + \vec a\).`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q1.</strong> Determine both the vector equation and the parametric equations of the plane through \(A(2, 3, -1)\) parallel to \(\vec d_1 = (1, -2, 4)\) and \(\vec d_2 = (3, 0, -1)\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Check the directions.</strong> \((1, -2, 4)\) and \((3, 0, -1)\) are not multiples (the y-components \(-2\) and 0 alone show it).</li>
<li><strong>Vector equation.</strong> \(\vec r = (2, 3, -1) + s(1, -2, 4) + t(3, 0, -1),\ s, t \in \mathbb{R}\).</li>
<li><strong>Parametric.</strong> \(x = 2 + s + 3t,\ y = 3 - 2s,\ z = -1 + 4s - t\).</li>
</ol>
<p class="answer">\(\vec r = (2, 3, -1) + s(1, -2, 4) + t(3, 0, -1)\); \(x = 2 + s + 3t,\ y = 3 - 2s,\ z = -1 + 4s - t,\ s, t \in \mathbb{R}\)</p>`
  },
  traps: [
    String.raw`Using one parameter twice. A plane needs two different parameters, \(s\) and \(t\).`,
    String.raw`Zero terms: \(y = 3 - 2s + 0t\) is just \(y = 3 - 2s\). Drop the zero term, not the whole equation.`,
    String.raw`Two collinear "directions" only give a line, not a plane.`
  ],
  seen: String.raw`Lesson 3.6 notes · Worksheet 3.6: Q2, Q3a, Q3b, Q4, Q5, Q6, Q7a, Q8a, Q9a · Unit review (planes): Q2a · Quest: Q1, Q2a · Summary sheet practice: Q5`,
  tryq: String.raw`<p>Find vector and parametric equations of the plane through \((-1, 4, 2)\) parallel to the plane \(\vec r = (3, 0, 1) + s(2, -1, 0) + t(1, 1, 5)\).</p>`,
  trya: String.raw`<p>Parallel planes share direction vectors: \(\vec r = (-1, 4, 2) + s(2, -1, 0) + t(1, 1, 5),\ s, t \in \mathbb{R}\); \(x = -1 + 2s + t,\ y = 4 - s + t,\ z = 2 + 5t\).</p>`
},

{ id: "t-plane-3pts", lesson: "3.6", tier: "essential",
  title: "Plane through three points",
  spot: String.raw`<p>"The plane containing (passing through) the three points A, B and C", in vector, parametric or Cartesian form, sometimes followed by "is the point D on this plane?" (are four points coplanar?).</p>`,
  steps: [
    String.raw`Make two vectors from one point: \(\vec a = \overrightarrow{AB}\), \(\vec b = \overrightarrow{AC}\). (Any two of \(\overrightarrow{AB}, \overrightarrow{BC}, \overrightarrow{AC}\), or their multiples, work.)`,
    String.raw`Check they are not collinear; if they are, the points lie on one line and do not determine a plane.`,
    String.raw`Vector form: \(\vec r = \overrightarrow{OA} + s\vec a + t\vec b,\ s, t \in \mathbb{R}\); split it for the parametric form.`,
    String.raw`Cartesian form: \(\vec n = \vec a\times\vec b\), simplified, with \(A > 0\) if possible.`,
    String.raw`Write \(Ax + By + Cz + D = 0\) and substitute \(A\)'s coordinates to find \(D\).`,
    String.raw`Check \(B\) and \(C\) in the equation (both must give 0). A fourth point is on the plane only if it gives 0 too.`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q11.</strong> Find the Cartesian equation of the plane through \(A(2, 1, 0)\), \(B(4, -1, 3)\) and \(C(1, 3, -2)\), with integer coefficients and \(A > 0\). Give a vector equation as well.</p>`,
    a: String.raw`<ol class="work">
<li><strong>Two vectors.</strong> \(\overrightarrow{AB} = (2, -2, 3)\), \(\overrightarrow{AC} = (-1, 2, -2)\); not multiples.</li>
<li><strong>Vector form.</strong> \(\vec r = (2, 1, 0) + s(2, -2, 3) + t(-1, 2, -2),\ s, t \in \mathbb{R}\).</li>
<li><strong>Normal.</strong> \(\overrightarrow{AB}\times\overrightarrow{AC} = \big((-2)(-2) - (3)(2),\ (3)(-1) - (2)(-2),\ (2)(2) - (-2)(-1)\big) = (-2, 1, 2)\); use \(\vec n = (2, -1, -2)\) so that \(A > 0\).</li>
<li><strong>Find D.</strong> \(2x - y - 2z + D = 0\) through A: \(4 - 1 - 0 + D = 0 \Rightarrow D = -3\).</li>
<li><strong>Check.</strong> B: \(8 + 1 - 6 - 3 = 0\). C: \(2 - 3 + 4 - 3 = 0\).</li>
</ol>
<p class="answer">\(2x - y - 2z - 3 = 0\); \(\vec r = (2, 1, 0) + s(2, -2, 3) + t(-1, 2, -2),\ s, t \in \mathbb{R}\)</p>`
  },
  traps: [
    String.raw`Using the position vectors \(\overrightarrow{OA}, \overrightarrow{OB}\) as directions. Directions are differences of points.`,
    String.raw`Not checking for collinear points (Worksheet 3.6 Q10a: \(\overrightarrow{AB} = (6, 2, -4) = -2\overrightarrow{AC}\), so no plane).`,
    String.raw`Your normal may be a multiple of the key's, e.g. \((-2, 1, 2)\) versus \((2, -1, -2)\). Both are right, but the teacher prefers \(A > 0\) and no common factor.`
  ],
  seen: String.raw`Lesson 3.6: Example 1 · Lesson 3.7: Example 2 · Worksheet 3.6: Q7e, Q8e, Q9b · Worksheet 3.7: Q7 · Unit review (planes): Q3b · Quest: Q11 · Summary sheet practice: Q9, Q10`,
  tryq: String.raw`<p>For \(P(1, 0, 2)\), \(Q(3, 1, 1)\) and \(R(0, 2, 5)\), find a vector equation and the Cartesian equation of plane PQR, then decide whether \(S(4, 3, 4)\) lies on it.</p>`,
  trya: String.raw`<p>\(\overrightarrow{PQ} = (2, 1, -1)\), \(\overrightarrow{PR} = (-1, 2, 3)\): \(\vec r = (1, 0, 2) + s(2, 1, -1) + t(-1, 2, 3)\). \(\vec n = \big((1)(3) - (-1)(2),\ (-1)(-1) - (2)(3),\ (2)(2) - (1)(-1)\big) = (5, -5, 5) \to (1, -1, 1)\). \(x - y + z + D = 0\) through P: \(1 + 2 + D = 0 \Rightarrow D = -3\), so \(x - y + z - 3 = 0\) (Q: \(3 - 1 + 1 - 3 = 0\); R: \(0 - 2 + 5 - 3 = 0\)). S: \(4 - 3 + 4 - 3 = 2 \ne 0\), so S is not on the plane.</p>`
},

{ id: "t-point-on-plane", lesson: "3.6", tier: "essential",
  title: "Is the point on the plane?",
  spot: String.raw`<p>"Determine algebraically whether the point Q lies on the plane", "does A lie in the plane \(\vec r = \ldots\)?". It also hides inside other questions: checking that a line lies in a plane, or that two planes are coincident.</p>`,
  steps: [
    String.raw`If the plane is Cartesian, substitute the point: LS = 0 means on the plane; anything else means not. Done.`,
    String.raw`If the plane is in vector form, set the point equal to the equation to get three equations in \(s\) and \(t\).`,
    String.raw`Solve two of the equations for \(s\) and \(t\).`,
    String.raw`Substitute into the third: LS = RS means on the plane; LS \(\ne\) RS means not (the teacher: "check in ③ for uniqueness").`,
    String.raw`Alternative: convert the plane to Cartesian form first (\(\vec n = \vec a\times\vec b\)) and substitute. This is quicker when several points must be tested.`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q2b.</strong> Determine algebraically whether \(Q(7, 3, -7)\) lies on \(\vec r = (4, -1, 2) + s(2, 1, -3) + t(-1, 2, 5)\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Equations.</strong> \(4 + 2s - t = 7\) ①, \(-1 + s + 2t = 3\) ②, \(2 - 3s + 5t = -7\) ③.</li>
<li><strong>Solve ① and ②.</strong> ① gives \(t = 2s - 3\). Into ②: \(s + 2(2s - 3) = 4 \Rightarrow 5s = 10 \Rightarrow s = 2,\ t = 1\).</li>
<li><strong>Check ③.</strong> \(2 - 3(2) + 5(1) = 1 \ne -7\).</li>
<li><strong>Cartesian cross-check.</strong> \(\vec n = (2, 1, -3)\times(-1, 2, 5) = (11, -7, 5)\), so the plane is \(11x - 7y + 5z - 61 = 0\); Q gives \(77 - 21 - 35 - 61 = -40 \ne 0\).</li>
</ol>
<p class="answer">Q does not lie on the plane.</p>`
  },
  traps: [
    String.raw`Stopping after finding \(s\) and \(t\). Any two of the equations have a solution; only the third gives the answer.`,
    String.raw`Treating a vector equation like a Cartesian one. A vector equation has no single "LS" to evaluate; you must solve for \(s\) and \(t\).`
  ],
  seen: String.raw`Lesson 3.6: Example 3 · Quest: Q2b · Worksheet 3.7: Q12 (a line's point tested in a Cartesian plane)`,
  tryq: String.raw`<p>(a) Do \(A(3, 4, 0)\) and \(B(3, 4, 1)\) lie on \(\vec r = (1, 2, 1) + s(1, 0, -1) + t(0, 1, 1)\)? (b) Is \((2, -1, 5)\) on \(3x + y - z = 0\)?</p>`,
  trya: String.raw`<p>(a) \(x\): \(1 + s = 3 \Rightarrow s = 2\); \(y\): \(2 + t = 4 \Rightarrow t = 2\); then \(z = 1 - s + t = 1\). A has \(z = 0 \ne 1\): not on the plane. B has \(z = 1\): on the plane.</p><p>(b) \(3(2) + (-1) - 5 = 0\): yes.</p>`
},

{ id: "t-determine-plane", lesson: "3.6", tier: "likely",
  title: "Do these determine a plane?",
  spot: String.raw`<p>"Explain why the three points … do not determine a plane", or "explain why the line … and the point … do not determine a plane". The answer is always one of two reasons.</p>`,
  steps: [
    String.raw`Three points: form \(\overrightarrow{AB}\) and \(\overrightarrow{AC}\). If they are scalar multiples the points are collinear, and infinitely many planes contain that line, so there is no unique plane.`,
    String.raw`A line and a point: test whether the point is on the line (solve for \(t\) in each coordinate). If one \(t\) works, the point is on the line, so again infinitely many planes contain them.`,
    String.raw`Equivalent test: the vector from a point of the line to the given point is a multiple of \(\vec m\).`,
    String.raw`Finish with a sentence: "not enough information to determine a unique plane, because …".`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (planes) Q10.</strong> Explain why the point \((2, 21, 8)\) and the line \(\vec r = (-4, -3, -1) + t(2, 8, 3)\) do not determine a plane.</p>`,
    a: String.raw`<ol class="work">
<li><strong>Test the point.</strong> \(2 = -4 + 2t \Rightarrow t = 3\); \(21 = -3 + 8t \Rightarrow t = 3\); \(8 = -1 + 3t \Rightarrow t = 3\).</li>
<li><strong>Interpret.</strong> The single value \(t = 3\) gives the point, so it is on the line. A line alone lies in infinitely many planes, like pages fanning around a book's spine.</li>
</ol>
<p class="answer">The point is on the line (\(t = 3\)), so infinitely many planes contain both: no unique plane.</p>`
  },
  traps: [
    String.raw`Writing only "they are collinear". Show the scalar multiple or the common \(t\) first, then give the reason.`
  ],
  seen: String.raw`Worksheet 3.6: Q10a, Q10b · Unit review (planes): Q10`,
  tryq: String.raw`<p>(a) Do \(A(1, 2, 3)\), \(B(3, 5, 4)\) and \(C(7, 11, 6)\) determine a plane? (b) Do the point \((5, 1, 1)\) and the line \(\vec r = (1, 3, 2) + t(2, -1, -1)\)?</p>`,
  trya: String.raw`<p>(a) \(\overrightarrow{AB} = (2, 3, 1)\) and \(\overrightarrow{AC} = (6, 9, 3) = 3\overrightarrow{AB}\): collinear, so no.</p><p>(b) \(5 = 1 + 2t \Rightarrow t = 2\); \(1 = 3 - t \Rightarrow t = 2\); \(1 = 2 - t \Rightarrow t = 1\). Different values, so the point is off the line: yes, they determine exactly one plane.</p>`
},

/* ============ 3.7 ============ */
{ id: "t-plane-normal", lesson: "3.7", tier: "essential",
  title: "Cartesian equation of a plane from a point and a normal",
  spot: String.raw`<p>"Find the scalar (Cartesian) equation of the plane through \(P\) with normal \(\vec n\)", or the normal arrives in disguise: "parallel to the plane …", "perpendicular to the line …", "has a normal parallel to the y-axis / perpendicular to the xy-plane / parallel to the normal of …", "a line through the origin meets the plane at P and is perpendicular to it".</p>`,
  steps: [
    String.raw`Find \(\vec n = (A, B, C)\): given directly; a parallel plane has the same \(\vec n\); perpendicular to a line means \(\vec n = \vec m\) of that line; a normal parallel to an axis is that axis vector; a perpendicular line from the origin to \(P\) gives \(\vec n = \overrightarrow{OP}\).`,
    String.raw`Write \(Ax + By + Cz + D = 0\) with those components.`,
    String.raw`Substitute the point and solve for \(D\) (\(D = -Ax_0 - By_0 - Cz_0\)).`,
    String.raw`Tidy: \(A > 0\) and no common factor.`,
    String.raw`Check by substituting the point again.`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q14 and Unit review (planes) Q3c.</strong> (a) Find the Cartesian equation of the plane perpendicular to \(L: \frac{x - 1}{2} = \frac{y + 3}{-1} = \frac{z - 4}{3}\) through \(M(-1, 2, 5)\). (b) Find the scalar equation of the plane through \((0, 0, 6)\) parallel to \(y + z = 5\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Normal from the line.</strong> A plane perpendicular to a line has the line's direction as its normal: \(\vec n = \vec m = (2, -1, 3)\).</li>
<li><strong>Find D.</strong> \(2x - y + 3z + D = 0\) through M: \(-2 - 2 + 15 + D = 0 \Rightarrow D = -11\).</li>
<li><strong>(b) Normal from the parallel plane.</strong> \(y + z = 5\) is \(0x + 1y + 1z - 5 = 0\), so \(\vec n = (0, 1, 1)\).</li>
<li><strong>Find D.</strong> \(y + z + D = 0\) through \((0, 0, 6)\): \(6 + D = 0 \Rightarrow D = -6\).</li>
</ol>
<p class="answer">(a) \(2x - y + 3z - 11 = 0\) &nbsp; (b) \(y + z - 6 = 0\)</p>`
  },
  traps: [
    String.raw`Missing variables are zero components: \(x - 5 = 0\) has \(\vec n = (1, 0, 0)\). In R³ it is a plane, not a point or a line.`,
    String.raw`Confusing "perpendicular to a line" (\(\vec n = \vec m\)) with "parallel to a line" (only \(\vec n\cdot\vec m = 0\), which does not fix \(\vec n\) on its own).`,
    String.raw`By inspection: \(D = 0\) exactly when the plane passes through the origin (Worksheet 3.7 Q3).`
  ],
  seen: String.raw`Lesson 3.7 notes · Worksheet 3.7: Q1, Q2, Q3 · Unit review (planes): Q3a, Q3c, Q8 · Quest: Q10, Q14 · Summary sheet practice: Q7`,
  tryq: String.raw`<p>Find the Cartesian equation of the plane through \((2, -1, 4)\) that (a) is parallel to \(3x - y + 2z + 7 = 0\); (b) is perpendicular to the line \(\vec r = (0, 1, 1) + t(1, 4, -2)\); (c) has a normal parallel to the x-axis.</p>`,
  trya: String.raw`<p>(a) \(3x - y + 2z + D = 0\): \(6 + 1 + 8 + D = 0 \Rightarrow D = -15\). \(3x - y + 2z - 15 = 0\).</p><p>(b) \(\vec n = (1, 4, -2)\): \(2 - 4 - 8 + D = 0 \Rightarrow D = 10\). \(x + 4y - 2z + 10 = 0\).</p><p>(c) \(\vec n = (1, 0, 0)\): \(x - 2 = 0\).</p>`
},

{ id: "t-convert-plane", lesson: "3.7", tier: "essential",
  title: "Convert a plane between vector/parametric and Cartesian form",
  spot: String.raw`<p>"Find the scalar equation of the plane \(\vec r = \ldots\)", "convert the parametric equations into \(Ax + By + Cz + D = 0\)", "find a vector equation for the plane with scalar equation …", "state the x-, y- and z-intercepts of the plane".</p>`,
  steps: [
    String.raw`<strong>Vector or parametric to Cartesian:</strong> read the point \(\vec r_0\) and the two direction vectors \(\vec a, \vec b\) (the coefficients of \(s\) and of \(t\)).`,
    String.raw`\(\vec n = \vec a\times\vec b\), because the normal is perpendicular to both directions. Simplify and make \(A > 0\).`,
    String.raw`Write \(Ax + By + Cz + D = 0\) and substitute \(\vec r_0\) for \(D\).`,
    String.raw`<strong>Cartesian to vector:</strong> find three points, usually the intercepts: set two variables to 0 and solve for the third.`,
    String.raw`Make two direction vectors from the three points (e.g. intercept minus intercept) and write \(\vec r = \vec r_0 + s\vec a + t\vec b\).`,
    String.raw`Check: each direction vector dotted with \(\vec n\) gives 0.`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q12 and Q13.</strong> (a) Convert \(x = 1 + 2s - t,\ y = -2 + s + 3t,\ z = 3 - s + 2t\) into \(Ax + By + Cz + D = 0\). (b) For \(3x - 4y + 2z - 12 = 0\), state the intercepts and write a vector equation.</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Read.</strong> Point \((1, -2, 3)\); \(\vec a = (2, 1, -1)\), \(\vec b = (-1, 3, 2)\).</li>
<li><strong>Normal.</strong> \(\vec a\times\vec b = \big((1)(2) - (-1)(3),\ (-1)(-1) - (2)(2),\ (2)(3) - (1)(-1)\big) = (5, -3, 7)\).</li>
<li><strong>Find D.</strong> \(5(1) - 3(-2) + 7(3) + D = 0 \Rightarrow 32 + D = 0 \Rightarrow D = -32\).</li>
<li><strong>(b) Intercepts.</strong> \(y = z = 0\): \(3x = 12\), so \((4, 0, 0)\). \(x = z = 0\): \(-4y = 12\), so \((0, -3, 0)\). \(x = y = 0\): \(2z = 12\), so \((0, 0, 6)\).</li>
<li><strong>Directions and check.</strong> \(\vec a = (0, -3, 0) - (4, 0, 0) = (-4, -3, 0)\), \(\vec b = (0, 0, 6) - (4, 0, 0) = (-4, 0, 6)\). With \(\vec n = (3, -4, 2)\): \(-12 + 12 + 0 = 0\) and \(-12 + 0 + 12 = 0\).</li>
</ol>
<p class="answer">(a) \(5x - 3y + 7z - 32 = 0\) &nbsp; (b) intercepts \(4, -3, 6\); \(\vec r = (4, 0, 0) + s(-4, -3, 0) + t(-4, 0, 6),\ s, t \in \mathbb{R}\)</p>`
  },
  traps: [
    String.raw`A missing variable means no intercept on that axis: \(3x - 5z + 15 = 0\) has no y-intercept, and \(y\) can be anything, so \((0, 1, 0)\) is one direction (Worksheet 3.7 Q11b).`,
    String.raw`Through the origin (\(D = 0\)) all three intercepts are \((0, 0, 0)\); pick other easy points instead.`,
    String.raw`A cross-product sign slip ruins everything after it. Check \(\vec n\cdot\vec a = 0\) and \(\vec n\cdot\vec b = 0\) before finding \(D\).`
  ],
  seen: String.raw`Lesson 3.7: Example 1 · Worksheet 3.7: Q5, Q6, Q11 · Quest: Q12, Q13 · Summary sheet practice: Q11`,
  tryq: String.raw`<p>(a) Find the Cartesian equation of \(\vec r = (1, 0, -2) + s(1, 2, 0) + t(0, 1, 3)\). (b) Find a vector equation of \(2x + 3y - z - 6 = 0\).</p>`,
  trya: String.raw`<p>(a) \(\vec n = (1, 2, 0)\times(0, 1, 3) = \big((2)(3) - (0)(1),\ (0)(0) - (1)(3),\ (1)(1) - (2)(0)\big) = (6, -3, 1)\). \(6(1) - 3(0) + (-2) + D = 0 \Rightarrow D = -4\): \(6x - 3y + z - 4 = 0\).</p><p>(b) Intercepts \((3, 0, 0)\), \((0, 2, 0)\), \((0, 0, -6)\). \(\vec a = (-3, 2, 0)\), \(\vec b = (-3, 0, -6) \to (1, 0, 2)\). \(\vec r = (3, 0, 0) + s(-3, 2, 0) + t(1, 0, 2),\ s, t \in \mathbb{R}\). Check: \((2, 3, -1)\cdot(-3, 2, 0) = 0\) and \((2, 3, -1)\cdot(1, 0, 2) = 0\).</p>`
},

{ id: "t-two-planes", lesson: "3.7", tier: "essential",
  title: "Two planes: coincident, parallel, perpendicular or intersecting",
  spot: String.raw`<p>"Determine whether the planes are coincident, parallel and distinct, or neither", "parallel, coincident, or intersecting", "which of the planes are coincident?", "the planes are parallel because …".</p>`,
  steps: [
    String.raw`Get both normals. Cartesian: read the coefficients. Vector form: \(\vec n = \vec a\times\vec b\) for each plane.`,
    String.raw`Parallel test: \(\vec n_1 = k\vec n_2\) with one consistent \(k\).`,
    String.raw`If parallel, compare the whole equations: if one Cartesian equation (including \(D\)) is a multiple of the other, the planes are coincident; if only the \(A, B, C\) part is, they are parallel and distinct. (Or test a point of one plane in the other.)`,
    String.raw`If not parallel, they intersect in a line. Also test \(\vec n_1\cdot\vec n_2 = 0\) for perpendicular planes.`,
    String.raw`State the conclusion with the reason (scalar multiples, or the dot product).`
  ],
  example: {
    q: String.raw`<p><strong>Worksheet 3.7 Q10a, b, c.</strong> Coincident, parallel and distinct, or neither? (a) \(x + 3y - z - 2 = 0\) and \(2x + 6y - 2z - 8 = 0\); (b) \(2x + y + z - 3 = 0\) and \(6x + 2y + 2z - 9 = 0\); (c) \(3x - 3y + z - 2 = 0\) and \(6x - 6y + 2z - 4 = 0\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Normals.</strong> \((2, 6, -2) = 2(1, 3, -1)\): parallel.</li>
<li><strong>Whole equation.</strong> \(2\times\) the first is \(2x + 6y - 2z - 4 = 0\), but the second ends in \(-8\): parallel and distinct.</li>
<li><strong>(b) Normals.</strong> \((2, 1, 1) = k(6, 2, 2)\) needs \(k = \frac{1}{3}\) and \(k = \frac{1}{2}\): not parallel, so the planes meet in a line (neither). The dot product \(12 + 2 + 2 = 16 \ne 0\), so not perpendicular either.</li>
<li><strong>(c) Whole equation.</strong> The second is exactly \(2\times\) the first: coincident.</li>
</ol>
<p class="answer">(a) parallel and distinct &nbsp; (b) neither (intersecting) &nbsp; (c) coincident</p>`
  },
  traps: [
    String.raw`Comparing direction vectors of planes in vector form. Two planes can have completely different direction vectors and still be parallel; compare normals (Quest Q5 needs both cross products first).`,
    String.raw`Calling planes coincident because the normals match. Compare the \(D\)'s too.`,
    String.raw`In R³, two non-parallel planes always intersect in a line; there is no "skew" for planes.`
  ],
  seen: String.raw`Lesson 3.7 notes (parallel, perpendicular, intersecting planes) · Worksheet 3.7: Q5, Q10 · Quest: Q5 · Summary sheet practice: Q12`,
  tryq: String.raw`<p>Classify: (a) \(2x - y + 3z - 4 = 0\) and \(-4x + 2y - 6z + 8 = 0\); (b) \(x + 2y - z + 1 = 0\) and \(3x - y + z - 5 = 0\); (c) \(\pi_1: \vec r = (1, 0, 0) + s(1, 1, 0) + t(0, 1, 1)\) and \(\pi_2: x - y + z + 4 = 0\).</p>`,
  trya: String.raw`<p>(a) The second equation is \(-2\times\) the first: coincident.</p><p>(b) Normals \((1, 2, -1)\) and \((3, -1, 1)\) are not multiples; dot \(= 3 - 2 - 1 = 0\): perpendicular (meeting in a line).</p><p>(c) \(\vec n_1 = (1, 1, 0)\times(0, 1, 1) = (1, -1, 1) = \vec n_2\): parallel. The point \((1, 0, 0)\) of \(\pi_1\) in \(\pi_2\): \(1 + 4 = 5 \ne 0\): parallel and distinct.</p>`
},

{ id: "t-line-plane", lesson: "3.7", tier: "essential",
  title: "Line and plane: parallel, in the plane, or crossing it",
  spot: String.raw`<p>"Which of the following lines is parallel to the plane? Do any lie in the plane?", "is the line parallel to, lies within, or intersects the plane? If it intersects, find the point of intersection".</p>`,
  steps: [
    String.raw`Read \(\vec m\) from the line and \(\vec n\) from the plane.`,
    String.raw`Compute \(\vec m\cdot\vec n\). Zero means the line runs perpendicular to the normal, i.e. parallel to the plane.`,
    String.raw`If \(\vec m\cdot\vec n = 0\): substitute a point of the line into the plane. LS = 0 means the line lies in the plane; otherwise it is parallel and not in the plane.`,
    String.raw`If \(\vec m\cdot\vec n \ne 0\): the line crosses the plane at exactly one point. Substitute the parametric equations \(x(t), y(t), z(t)\) into \(Ax + By + Cz + D = 0\) and solve for \(t\).`,
    String.raw`Put that \(t\) back into the line to get the point, and check it in the plane equation.`
  ],
  example: {
    q: String.raw`<p><strong>Worksheet 3.7 Q12.</strong> Which lines are parallel to \(4x + y - z - 10 = 0\)? Do any lie in it? (a) \(\vec r = (3, 0, 2) + t(1, -2, 2)\); (b) \(x = -3t,\ y = -5 + 2t,\ z = -10t\); (c) \(\frac{x - 1}{4} = \frac{y + 6}{-1} = \frac{z}{1}\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Normal.</strong> \(\vec n = (4, 1, -1)\).</li>
<li><strong>(a)</strong> \(\vec m\cdot\vec n = 4 - 2 - 2 = 0\): parallel. Point \((3, 0, 2)\): \(12 + 0 - 2 - 10 = 0\), so the line lies in the plane.</li>
<li><strong>(b)</strong> \(\vec m\cdot\vec n = -12 + 2 + 10 = 0\): parallel. Point \((0, -5, 0)\): \(-5 - 10 = -15 \ne 0\), so parallel but not in the plane.</li>
<li><strong>(c)</strong> \(\vec m\cdot\vec n = 16 - 1 - 1 = 14 \ne 0\): not parallel, so it crosses the plane once.</li>
<li><strong>(c) Where it crosses.</strong> \(x = 1 + 4t,\ y = -6 - t,\ z = t\): \(4(1 + 4t) + (-6 - t) - t - 10 = 0 \Rightarrow 14t - 12 = 0 \Rightarrow t = \frac{6}{7}\), giving \(\left(\frac{31}{7}, -\frac{48}{7}, \frac{6}{7}\right)\). Check: \(\frac{124 - 48 - 6}{7} - 10 = 0\).</li>
</ol>
<p class="answer">(a) parallel and in the plane &nbsp; (b) parallel, not in the plane &nbsp; (c) not parallel; it meets the plane at \(\left(\frac{31}{7}, -\frac{48}{7}, \frac{6}{7}\right)\)</p>`
  },
  traps: [
    String.raw`Testing "parallel" with \(\vec m = k\vec n\). That condition means the line is <em>perpendicular</em> to the plane. Parallel to the plane is \(\vec m\cdot\vec n = 0\).`,
    String.raw`Stopping at \(\vec m\cdot\vec n = 0\). The point test decides between "in the plane" and "parallel and distinct" (Quest Q19: the point satisfies the plane, so the line lies in it).`,
    String.raw`Quest Q20: \(\vec m\cdot\vec n = 2k - 2k - 4 = -4\) can never be 0, so no \(k\) makes the line parallel and it always crosses the plane.`
  ],
  seen: String.raw`Worksheet 3.7: Q12 · Quest: Q19, Q20 · Unit review (planes): Q11c (parallel line, then distance)`,
  tryq: String.raw`<p>Take the line \(\vec r = (1, 2, 0) + t(2, -1, 1)\). Classify it against (a) \(x + 3y + z - 4 = 0\) and (b) \(2x + y + z - 9 = 0\), giving any intersection point.</p>`,
  trya: String.raw`<p>(a) \((2, -1, 1)\cdot(1, 3, 1) = 2 - 3 + 1 = 0\): parallel. Point \((1, 2, 0)\): \(1 + 6 - 4 = 3 \ne 0\): parallel, not in the plane.</p><p>(b) \((2, -1, 1)\cdot(2, 1, 1) = 4 \ne 0\): it crosses once. \(2(1 + 2t) + (2 - t) + t - 9 = 0 \Rightarrow 4t - 5 = 0 \Rightarrow t = \frac{5}{4}\). Point \(\left(\frac{7}{2}, \frac{3}{4}, \frac{5}{4}\right)\); check: \(7 + \frac{3}{4} + \frac{5}{4} - 9 = 0\).</p>`
},

{ id: "t-dist-plane", lesson: "3.7", tier: "essential",
  title: "Distance from a point, line or plane to a plane",
  spot: String.raw`<p>"Find the distance between the point … and the plane …", "between the line … and the plane …", "between the planes …", "the shortest distance from R to the plane", or a plane described only by its intercepts.</p>`,
  steps: [
    String.raw`Get the plane in Cartesian form \(Ax + By + Cz + D = 0\) (from intercepts or three points, find \(\vec n\) and \(D\) first).`,
    String.raw`Point to plane: \(d = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\), boxed in the 3.7 notes. The worksheet solutions also use \(\frac{|\overrightarrow{P_0P}\cdot\vec n|}{|\vec n|}\) with \(P_0\) on the plane; it is the same thing.`,
    String.raw`Line to plane: first check \(\vec m\cdot\vec n = 0\) (otherwise the line hits the plane and the distance is 0), then use any point of the line.`,
    String.raw`Plane to plane: check the normals are parallel, pick any point on one plane (set two variables to 0), and use the formula with the other plane.`,
    String.raw`Simplify and rationalize.`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (planes) Q12.</strong> Find the distance from \((1, -2, -2)\) to the plane with x-intercept \(-1\), y-intercept 2 and z-intercept 3.</p>`,
    a: String.raw`<ol class="work">
<li><strong>Three points.</strong> \(A(-1, 0, 0)\), \(B(0, 2, 0)\), \(C(0, 0, 3)\); \(\overrightarrow{AB} = (1, 2, 0)\), \(\overrightarrow{AC} = (1, 0, 3)\).</li>
<li><strong>Normal.</strong> \(\overrightarrow{AB}\times\overrightarrow{AC} = \big((2)(3) - (0)(0),\ (0)(1) - (1)(3),\ (1)(0) - (2)(1)\big) = (6, -3, -2)\).</li>
<li><strong>Plane.</strong> \(6x - 3y - 2z + D = 0\) through A: \(-6 + D = 0 \Rightarrow D = 6\). Check B: \(-6 + 6 = 0\); C: \(-6 + 6 = 0\).</li>
<li><strong>Distance.</strong> \(d = \frac{|6(1) - 3(-2) - 2(-2) + 6|}{\sqrt{36 + 9 + 4}} = \frac{|6 + 6 + 4 + 6|}{7} = \frac{22}{7}\).</li>
</ol>
<p class="answer">\(d = \frac{22}{7}\) units</p>`
  },
  traps: [
    String.raw`Forgetting \(D\) in the numerator, or using the R² formula with only \(A\) and \(B\).`,
    String.raw`Line–plane and plane–plane distances only make sense when they are parallel, so check first (Unit review Q11c: \((1, 2, -1)\cdot(0, 1, 2) = 0\), then \(d = \frac{|3 + 4 - 5|}{\sqrt{5}} = \frac{2}{\sqrt{5}}\)).`,
    String.raw`Parallel planes whose equations are not exact multiples (Q11d: \(x + 2y - 5z - 10 = 0\) and \(2x + 4y - 10z - 17 = 0\)): take \((10, 0, 0)\) on the first, then \(d = \frac{|20 - 17|}{\sqrt{120}} = \frac{3}{2\sqrt{30}}\).`
  ],
  seen: String.raw`Lesson 3.7 notes (boxed formula) · Worksheet 3.7: extra Q11a, Q11b · Unit review (planes): Q11a, Q11b, Q11c, Q11d, Q12 · Quest: Q17`,
  tryq: String.raw`<p>(a) Find the distance between the line \(\vec r = (2, 0, 1) + t(1, 1, -1)\) and the plane \(x - 2y - z + 4 = 0\). (b) Find the distance between the planes \(2x - y + 2z - 3 = 0\) and \(4x - 2y + 4z + 12 = 0\).</p>`,
  trya: String.raw`<p>(a) \((1, 1, -1)\cdot(1, -2, -1) = 1 - 2 + 1 = 0\): parallel. Using \((2, 0, 1)\): \(d = \frac{|2 - 0 - 1 + 4|}{\sqrt{6}} = \frac{5}{\sqrt{6}} = \frac{5\sqrt{6}}{6}\).</p><p>(b) \((4, -2, 4) = 2(2, -1, 2)\): parallel. A point on the first: \(x = y = 0 \Rightarrow z = \frac{3}{2}\). \(d = \frac{|4(\frac{3}{2}) + 12|}{\sqrt{16 + 4 + 16}} = \frac{18}{6} = 3\) units.</p>`
},

/* ============ Review-style combinations ============ */
{ id: "t-plane-line-point", lesson: "mix", tier: "essential",
  title: "Plane containing a line and a point",
  spot: String.raw`<p>"Find the (vector, scalar) equation of the plane containing the line … and the point …", including "the plane containing the x-axis and the point …". The point must be off the line, otherwise there is no unique plane.</p>`,
  steps: [
    String.raw`From the line read a point \(P_0\) and its direction \(\vec m\); \(\vec m\) is your first direction vector. (The x-axis is the line through \((0, 0, 0)\) with \(\vec m = (1, 0, 0)\).)`,
    String.raw`Make the second direction from the two points you know: \(\overrightarrow{P_0P} = P - P_0\).`,
    String.raw`Check \(\overrightarrow{P_0P}\) is not a multiple of \(\vec m\) (otherwise \(P\) is on the line).`,
    String.raw`Vector form: \(\vec r = \overrightarrow{OP_0} + s\vec m + t\overrightarrow{P_0P},\ s, t \in \mathbb{R}\).`,
    String.raw`Cartesian form: \(\vec n = \vec m\times\overrightarrow{P_0P}\), then substitute a point to find \(D\).`,
    String.raw`Check that the other point also satisfies the Cartesian equation.`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (planes) Q3d.</strong> Find the scalar equation of the plane that contains the point \((3, -3, 0)\) and the line \(x = 2,\ y = 3 + t,\ z = -4 - 2t\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Read the line.</strong> \(P_0(2, 3, -4)\), \(\vec m = (0, 1, -2)\) (x never changes, so its component is 0).</li>
<li><strong>Second direction.</strong> \(\overrightarrow{P_0P} = (3 - 2, -3 - 3, 0 - (-4)) = (1, -6, 4)\), not a multiple of \(\vec m\).</li>
<li><strong>Normal.</strong> \(\vec m\times\overrightarrow{P_0P} = \big((1)(4) - (-2)(-6),\ (-2)(1) - (0)(4),\ (0)(-6) - (1)(1)\big) = (-8, -2, -1)\); use \((8, 2, 1)\).</li>
<li><strong>Find D.</strong> \(8x + 2y + z + D = 0\) through \((3, -3, 0)\): \(24 - 6 + D = 0 \Rightarrow D = -18\).</li>
<li><strong>Check the line's point.</strong> \(16 + 6 - 4 - 18 = 0\).</li>
</ol>
<p class="answer">\(8x + 2y + z - 18 = 0\) &nbsp; (vector form: \(\vec r = (2, 3, -4) + s(0, 1, -2) + t(1, -6, 4)\))</p>`
  },
  traps: [
    String.raw`Using the outside point's position vector \(\overrightarrow{OP}\) as a direction. The direction must join a point of the line to \(P\).`,
    String.raw`Reading the direction of \(x = 2,\ y = 3 + t,\ z = -4 - 2t\) as \((2, 1, -2)\). The 2 is a coordinate of the point; the x-component of \(\vec m\) is 0.`
  ],
  seen: String.raw`Lesson 3.6: Example 2 · Worksheet 3.6: Q7c, Q8c, Q9c · Worksheet 3.7: Q8 · Unit review (planes): Q3d · Quest: Q3`,
  tryq: String.raw`<p>Find vector and Cartesian equations of the plane containing \(P(1, 4, -2)\) and the line \(x = 2 + t,\ y = -1 + 3t,\ z = 5 - t\).</p>`,
  trya: String.raw`<p>\(P_0(2, -1, 5)\), \(\vec m = (1, 3, -1)\), \(\overrightarrow{P_0P} = (-1, 5, -7)\). Vector form: \(\vec r = (2, -1, 5) + s(1, 3, -1) + t(-1, 5, -7),\ s, t \in \mathbb{R}\). \(\vec n = \big((3)(-7) - (-1)(5),\ (-1)(-1) - (1)(-7),\ (1)(5) - (3)(-1)\big) = (-16, 8, 8) \to (2, -1, -1)\). Through P: \(2 - 4 + 2 + D = 0 \Rightarrow D = 0\), so \(2x - y - z = 0\) (check \(P_0\): \(4 + 1 - 5 = 0\)).</p>`
},

{ id: "t-plane-two-lines", lesson: "mix", tier: "essential",
  title: "Plane containing two lines (intersecting or parallel)",
  spot: String.raw`<p>"Find the equation of the plane containing the two intersecting lines …" or "… the parallel and distinct lines …", with the lines in vector or symmetric form.</p>`,
  steps: [
    String.raw`Read \(P_1, \vec m_1\) from line 1 and \(P_2, \vec m_2\) from line 2.`,
    String.raw`Decide the case: \(\vec m_1\) and \(\vec m_2\) multiples means parallel lines; otherwise they intersect (the question usually tells you).`,
    String.raw`Intersecting: the two directions are \(\vec m_1\) and \(\vec m_2\), and either line's point will do.`,
    String.raw`Parallel: \(\vec m_1\) and \(\vec m_2\) are the same direction, so you need another one: \(\overrightarrow{P_1P_2}\), joining a point of each line.`,
    String.raw`Write \(\vec r = \overrightarrow{OP_1} + s\vec a + t\vec b\); for Cartesian, \(\vec n = \vec a\times\vec b\) and substitute \(P_1\) for \(D\).`,
    String.raw`Check \(P_2\) in the Cartesian equation.`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (planes) Q5.</strong> Find the scalar equation of the plane that contains the parallel and distinct lines \(x = 1,\ \frac{y - 3}{4} = \frac{z}{2}\) and \(x = 5,\ \frac{y + 5}{2} = \frac{z - 3}{1}\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Read the lines.</strong> Line 1: \(P_1(1, 3, 0)\), \(\vec m_1 = (0, 4, 2) = 2(0, 2, 1)\). Line 2: \(P_2(5, -5, 3)\), \(\vec m_2 = (0, 2, 1)\). Parallel, as stated.</li>
<li><strong>Second direction.</strong> \(\overrightarrow{P_1P_2} = (4, -8, 3)\).</li>
<li><strong>Normal.</strong> \((0, 2, 1)\times(4, -8, 3) = \big((2)(3) - (1)(-8),\ (1)(4) - (0)(3),\ (0)(-8) - (2)(4)\big) = (14, 4, -8) \to (7, 2, -4)\).</li>
<li><strong>Find D.</strong> \(7x + 2y - 4z + D = 0\) through \(P_1\): \(7 + 6 + D = 0 \Rightarrow D = -13\).</li>
<li><strong>Check \(P_2\).</strong> \(35 - 10 - 12 - 13 = 0\).</li>
</ol>
<p class="answer">\(7x + 2y - 4z - 13 = 0\)</p>`
  },
  traps: [
    String.raw`Crossing the two directions of parallel lines. \(\vec m_1\times\vec m_2 = \vec 0\) is no normal at all; use \(\overrightarrow{P_1P_2}\).`,
    String.raw`Missing that "\(x = 1\)" in a line means its x-component is 0.`,
    String.raw`For intersecting lines in symmetric form (Worksheet 3.7 Q9, Unit review Q9) both lines often show the same point in their numerators; that point is where they meet.`
  ],
  seen: String.raw`Worksheet 3.6: Q3c, Q7b, Q7d, Q8b, Q8d · Worksheet 3.7: Q9 · Unit review (planes): Q5, Q9`,
  tryq: String.raw`<p>Show that \(L_1: \vec r = (1, -1, 2) + t(2, 1, -1)\) and \(L_2: \vec r = (3, 0, 1) + s(1, -2, 3)\) intersect, then find the Cartesian equation of the plane containing them.</p>`,
  trya: String.raw`<p>\(t = 1\) on \(L_1\) gives \((3, 0, 1)\), the point of \(L_2\), so they meet there (and the directions are not multiples). \(\vec n = (2, 1, -1)\times(1, -2, 3) = \big((1)(3) - (-1)(-2),\ (-1)(1) - (2)(3),\ (2)(-2) - (1)(1)\big) = (1, -7, -5)\). Through \((1, -1, 2)\): \(1 + 7 - 10 + D = 0 \Rightarrow D = 2\). \(\therefore\ x - 7y - 5z + 2 = 0\). Check \(s = 1\) on \(L_2\), \((4, -2, 4)\): \(4 + 14 - 20 + 2 = 0\).</p>`
},

{ id: "t-plane-clues", lesson: "mix", tier: "essential",
  title: "Plane from parallel and perpendicular clues",
  spot: String.raw`<p>The plane is described by clues: "contains the points … and is parallel to the z-axis", "contains the line … and is parallel to the line …", "contains the origin and P and is perpendicular to the plane …", "parallel to the vectors \(6\hat k\) and \(\hat\imath + 2\hat\jmath - 3\hat k\)", "contains the line … and does not intersect the z-axis".</p>`,
  steps: [
    String.raw`Keep the target in mind: one point and two non-parallel direction vectors (then cross them if you need the Cartesian form).`,
    String.raw`Turn each clue into a direction vector lying in the plane: two points give their difference; containing or being parallel to a line gives that line's \(\vec m\); parallel to an axis, or "does not intersect" an axis, gives the axis vector; perpendicular to another plane gives that plane's normal \(\vec n\) (it lies flat in your plane); \(6\hat k\) is \((0, 0, 6)\).`,
    String.raw`Take any known point: a given point, a point on a contained line, or the origin.`,
    String.raw`Write \(\vec r = \vec r_0 + s\vec a + t\vec b\).`,
    String.raw`For the Cartesian form: \(\vec n = \vec a\times\vec b\), simplify, and substitute the point for \(D\).`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (planes) Q6 and Q3e.</strong> (a) Find a vector equation of the plane that contains the origin and \((2, -3, 2)\) and is perpendicular to \(x + 2y - z + 3 = 0\). (b) Find the scalar equation of the plane that contains \(\vec r = (2, 1, 7) + s(0, 1, 0)\) and is parallel to \(\vec r = (3, 0, 4) + t(2, -1, 0)\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>(a) Directions.</strong> From the two points: \((2, -3, 2) - (0, 0, 0) = (2, -3, 2)\). Perpendicular to the given plane: its normal \((1, 2, -1)\) lies in our plane.</li>
<li><strong>(a) Write it.</strong> Through the origin: \(\vec r = s(1, 2, -1) + t(2, -3, 2)\).</li>
<li><strong>(b) Directions.</strong> The contained line gives \((0, 1, 0)\); the parallel line gives \((2, -1, 0)\). Point: \((2, 1, 7)\).</li>
<li><strong>(b) Normal.</strong> \((0, 1, 0)\times(2, -1, 0) = \big((1)(0) - (0)(-1),\ (0)(2) - (0)(0),\ (0)(-1) - (1)(2)\big) = (0, 0, -2) \to (0, 0, 1)\).</li>
<li><strong>(b) Find D.</strong> \(z + D = 0\) through \((2, 1, 7)\): \(D = -7\).</li>
</ol>
<p class="answer">(a) \(\vec r = s(1, 2, -1) + t(2, -3, 2),\ s, t \in \mathbb{R}\) &nbsp; (b) \(z - 7 = 0\)</p>`
  },
  traps: [
    String.raw`Using the other plane's normal as <em>your</em> normal when the planes are perpendicular. Perpendicular planes have perpendicular normals; the other normal is one of your <em>directions</em>.`,
    String.raw`"Parallel to the z-axis" does not mean \(\vec n = (0, 0, 1)\); it means \((0, 0, 1)\) is a direction in the plane (Unit review Q3f: \(x - 3y - 3 = 0\), no z-term).`,
    String.raw`"Does not intersect the z-axis" (Worksheet 3.6 Q11) is the same clue as "parallel to the z-axis".`
  ],
  seen: String.raw`Worksheet 3.6: Q9a, Q11 · Unit review (planes): Q2a, Q2b, Q3e, Q3f, Q6, Q7`,
  tryq: String.raw`<p>(a) Find a vector equation of the plane through \(A(2, 1, -1)\) and \(B(0, 3, 1)\) parallel to the x-axis. (b) Find the Cartesian equation of the plane that contains the line \(\vec r = (1, 0, 4) + t(2, -1, 1)\) and is perpendicular to the plane \(x + y + 3z - 2 = 0\).</p>`,
  trya: String.raw`<p>(a) \(\overrightarrow{AB} = (-2, 2, 2) \to (-1, 1, 1)\) and \((1, 0, 0)\): \(\vec r = (2, 1, -1) + s(-1, 1, 1) + t(1, 0, 0),\ s, t \in \mathbb{R}\). (Cartesian: \(y - z - 2 = 0\).)</p><p>(b) Directions \((2, -1, 1)\) and \((1, 1, 3)\). \(\vec n = \big((-1)(3) - (1)(1),\ (1)(1) - (2)(3),\ (2)(1) - (-1)(1)\big) = (-4, -5, 3) \to (4, 5, -3)\). Through \((1, 0, 4)\): \(4 - 12 + D = 0 \Rightarrow D = 8\). \(\therefore\ 4x + 5y - 3z + 8 = 0\). Check: \((4, 5, -3)\cdot(1, 1, 3) = 0\).</p>`
},

{ id: "t-find-k", lesson: "mix", tier: "essential",
  title: "Find k so that a condition holds",
  spot: String.raw`<p>"For what value of k, if any …", "find the value of the scalar parameter k such that …", "find the relationship between k and m such that \(\pi_1 \perp \pi_2\)", "find k and m such that \(\pi_1 \parallel \pi_2\)". An unknown sits inside a vector or an equation, and a geometric condition is named.</p>`,
  steps: [
    String.raw`Name the condition and translate it: coplanar vectors, \(\vec u\cdot(\vec v\times\vec w) = 0\); parallel lines or planes, \(\vec m_1 = c\,\vec m_2\) or \(\vec n_1 = c\,\vec n_2\) with one \(c\) for every component; perpendicular, dot product \(= 0\); line parallel to plane, \(\vec m\cdot\vec n = 0\); point on a line or plane, substitute and solve.`,
    String.raw`Write that condition with \(k\) left in, and expand.`,
    String.raw`Solve: a linear equation, a quadratic (factor it), or a ratio chain such as \(\frac{1}{2} = \frac{k}{3} = \frac{-1}{m}\).`,
    String.raw`Interpret odd results: an impossible equation (like \(-4 = 0\)) means no value of \(k\) works; two roots mean two answers.`,
    String.raw`Check by substituting \(k\) back (and, for parallel, decide coincident or distinct if asked).`
  ],
  example: {
    q: String.raw`<p><strong>Unit review (planes) Q4.</strong> For what value(s) of \(k\), if any, will \(3x + ky + z - 6 = 0\) and \(6x + (1 - k)y + 2z - 9 = 0\) be (a) parallel, (b) perpendicular?</p>`,
    a: String.raw`<ol class="work">
<li><strong>Normals.</strong> \(\vec n_1 = (3, k, 1)\), \(\vec n_2 = (6, 1 - k, 2)\).</li>
<li><strong>(a) Parallel means \(\vec n_1 = c\,\vec n_2\).</strong> The x- and z-components give \(c = \frac{1}{2}\). Then \(k = \frac{1}{2}(1 - k) \Rightarrow 2k = 1 - k \Rightarrow k = \frac{1}{3}\).</li>
<li><strong>Check.</strong> \(\vec n_1 = \left(3, \frac{1}{3}, 1\right)\), \(\vec n_2 = \left(6, \frac{2}{3}, 2\right) = 2\vec n_1\). (Distinct, since \(2\times(-6) \ne -9\).)</li>
<li><strong>(b) Perpendicular means \(\vec n_1\cdot\vec n_2 = 0\).</strong> \(18 + k(1 - k) + 2 = 0 \Rightarrow k^2 - k - 20 = 0 \Rightarrow (k - 5)(k + 4) = 0\).</li>
<li><strong>Check.</strong> \(k = 5\): \((3, 5, 1)\cdot(6, -4, 2) = 18 - 20 + 2 = 0\). \(k = -4\): \((3, -4, 1)\cdot(6, 5, 2) = 18 - 20 + 2 = 0\).</li>
</ol>
<p class="answer">(a) \(k = \frac{1}{3}\) &nbsp; (b) \(k = 5\) or \(k = -4\)</p>`
  },
  traps: [
    String.raw`Using the dot product for "parallel planes". Parallel needs scalar multiples; the dot product is for perpendicular.`,
    String.raw`Not trusting "no solution". In Quest Q20a, \(\vec m\cdot\vec n = 2k - 2k - 4 = -4\), never 0, so the answer is "no real \(k\)".`,
    String.raw`Quest Q21b: \(\frac{1}{2} = \frac{k}{3} = \frac{-1}{m}\) gives \(k = \frac{3}{2}\) and \(m = -2\). Every ratio must equal the same \(c\).`
  ],
  seen: String.raw`Unit review (planes): Q4 · Quest: Q9, Q20a, Q21 · Related: Unit review (lines) Q7b and Worksheet 3.3 Q6b (unknown coordinates of a point on a line)`,
  tryq: String.raw`<p>(a) Find \(k\) so that \(\vec u = (2, 1, 0)\), \(\vec v = (1, -1, 3)\) and \(\vec w = (k, 2, 3)\) are coplanar. (b) Find \(k\) so that \(\vec r = (0, 1, 2) + t(k, 2, -1)\) is parallel to \(3x - y + kz + 5 = 0\); does the line then lie in the plane?</p>`,
  trya: String.raw`<p>(a) \(\vec v\times\vec w = \big((-1)(3) - (3)(2),\ (3)(k) - (1)(3),\ (1)(2) - (-1)(k)\big) = (-9, 3k - 3, 2 + k)\). \(\vec u\cdot(\vec v\times\vec w) = -18 + 3k - 3 = 3k - 21 = 0 \Rightarrow k = 7\). (Check: \((7, 2, 3) = 3\vec u + \vec v\).)</p><p>(b) \((k, 2, -1)\cdot(3, -1, k) = 3k - 2 - k = 2k - 2 = 0 \Rightarrow k = 1\). The point \((0, 1, 2)\) in \(3x - y + z + 5 = 0\): \(0 - 1 + 2 + 5 = 6 \ne 0\), so the line is parallel to the plane but not in it.</p>`
},

{ id: "t-crossings", lesson: "mix", tier: "likely",
  title: "Where a line or plane crosses an axis or coordinate plane",
  spot: String.raw`<p>"Find the points where the line intersects the x- and y-axes", "where does the line cross the xy-plane?", "find the line of intersection of the plane and the xy-coordinate plane (\(z = 0\))", "the point at which the plane intersects the z-axis", or the reverse, "the line with an x-intercept of \(-7\) and a z-intercept of 4".</p>`,
  steps: [
    String.raw`Translate the target into coordinates: x-axis, \(y = 0\) (and \(z = 0\)); xy-plane, \(z = 0\); xz-plane, \(y = 0\); yz-plane, \(x = 0\); z-axis, \(x = y = 0\).`,
    String.raw`Write the line or plane in parametric form.`,
    String.raw`Set those coordinates to 0 and solve for the parameter(s).`,
    String.raw`Line: one parameter, so you get one point; substitute \(t\) back into every coordinate.`,
    String.raw`Plane meeting a coordinate plane: one equation in \(s\) and \(t\), so solve for one parameter in terms of the other and substitute; what is left is a line with one free parameter.`,
    String.raw`Check the result in the original equation (or in the Cartesian form).`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q4.</strong> A plane passes through \(P_0(0, 2, -3)\) and is parallel to \(\vec u = (1, 1, 2)\) and \(\vec v = (-2, 1, 1)\). Find parametric equations of its line of intersection with the xy-plane (\(z = 0\)).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Parametric plane.</strong> \(x = s - 2t,\ y = 2 + s + t,\ z = -3 + 2s + t\).</li>
<li><strong>The xy-plane means \(z = 0\).</strong> \(-3 + 2s + t = 0 \Rightarrow t = 3 - 2s\).</li>
<li><strong>Substitute.</strong> \(x = s - 2(3 - 2s) = 5s - 6\); \(y = 2 + s + (3 - 2s) = 5 - s\); \(z = 0\).</li>
<li><strong>Check.</strong> In Cartesian form, \(\vec n = (1, 1, 2)\times(-2, 1, 1) = (-1, -5, 3)\) and the plane is \(x + 5y - 3z - 19 = 0\). On our line, \(x + 5y = 5s - 6 + 25 - 5s = 19\) with \(z = 0\).</li>
</ol>
<p class="answer">\(x = -6 + 5s,\ y = 5 - s,\ z = 0,\ s \in \mathbb{R}\)</p>`
  },
  traps: [
    String.raw`Setting the wrong coordinate to zero. The xy-plane is where \(z = 0\); \(x = y = 0\) is the z-axis.`,
    String.raw`A line parallel to an axis may never cross the other one: \(x = 6,\ y = 1 + 7t\) has no y-intercept (Worksheet 3.1 Q12a).`,
    String.raw`Forgetting to substitute \(t\) back into every coordinate.`
  ],
  seen: String.raw`Worksheet 3.1: Q12 · Lesson 3.6: Challenge (the plane meets the z-axis at \(\left(0, 0, \frac{17}{6}\right)\)) · Unit review (lines): Q4b; Q9 (the question is not printed on your sheet, but its key lists coordinate-plane crossings) · Quest: Q4`,
  tryq: String.raw`<p>(a) Where does \(\vec r = (2, -1, 4) + t(1, 1, -2)\) cross each coordinate plane? (b) Find the x- and y-intercepts of \(\vec r = (4, -3) + t(2, 3)\).</p>`,
  trya: String.raw`<p>(a) xy-plane (\(z = 0\)): \(4 - 2t = 0 \Rightarrow t = 2\), point \((4, 1, 0)\). xz-plane (\(y = 0\)): \(t = 1\), point \((3, 0, 2)\). yz-plane (\(x = 0\)): \(t = -2\), point \((0, -3, 8)\).</p><p>(b) \(y = 0\): \(-3 + 3t = 0 \Rightarrow t = 1\), x-intercept \((6, 0)\). \(x = 0\): \(4 + 2t = 0 \Rightarrow t = -2\), y-intercept \((0, -9)\).</p>`
},

{ id: "t-angle", lesson: "mix", tier: "likely",
  title: "Angle between two lines or two planes",
  spot: String.raw`<p>"Find the acute angle of intersection of these lines", "determine the angle \(\theta\) (\(0^\circ \le \theta \le 90^\circ\)) between the given planes", "calculate the acute angle between the intersecting planes".</p>`,
  steps: [
    String.raw`Pick the right vectors: for lines, the direction vectors \(\vec m_1, \vec m_2\); for planes, the normals \(\vec n_1, \vec n_2\) (the angle between planes is defined as the angle between their normals).`,
    String.raw`Compute the dot product and both magnitudes.`,
    String.raw`\(\cos\theta = \frac{|\vec v_1\cdot\vec v_2|}{|\vec v_1||\vec v_2|}\); the absolute value gives the acute angle.`,
    String.raw`\(\theta = \cos^{-1}(\ldots)\), rounded as asked. A dot product of 0 means \(\theta = 90^\circ\) (perpendicular).`
  ],
  example: {
    q: String.raw`<p><strong>Quest Q18.</strong> Calculate the acute angle (to the nearest degree) between \(\pi_1: 3x - 2y + 6z - 1 = 0\) and \(\pi_2: x + y - 4 = 0\).</p>`,
    a: String.raw`<ol class="work">
<li><strong>Normals.</strong> \(\vec n_1 = (3, -2, 6)\), \(\vec n_2 = (1, 1, 0)\) (no z-term means a 0 component).</li>
<li><strong>Dot and magnitudes.</strong> \(\vec n_1\cdot\vec n_2 = 3 - 2 + 0 = 1\); \(|\vec n_1| = \sqrt{49} = 7\); \(|\vec n_2| = \sqrt{2}\).</li>
<li><strong>Angle.</strong> \(\cos\theta = \frac{1}{7\sqrt{2}} \approx 0.101\), so \(\theta \approx 84.2^\circ\).</li>
</ol>
<p class="answer">\(\theta \approx 84^\circ\)</p>`
  },
  traps: [
    String.raw`Using direction vectors of a plane, or looking for a normal of a line in R³. Planes: normals. Lines: directions.`,
    String.raw`Reporting an obtuse angle. If the dot product is negative, take its absolute value (or subtract from \(180^\circ\)) to get the acute angle.`
  ],
  seen: String.raw`Worksheet 3.1: Q13 · Worksheet 3.7: Q13 · Lesson 3.7 notes (normals and the angle between planes) · Quest: Q18`,
  tryq: String.raw`<p>(a) Find the acute angle between \(x + y - z + 2 = 0\) and \(2x - y + 3z - 1 = 0\). (b) Find the acute angle between \(\vec r = (1, 2) + t(3, 4)\) and \(\vec r = (0, 5) + s(5, -12)\).</p>`,
  trya: String.raw`<p>(a) \((1, 1, -1)\cdot(2, -1, 3) = 2 - 1 - 3 = -2\); \(\cos\theta = \frac{2}{\sqrt{3}\sqrt{14}} = \frac{2}{\sqrt{42}} \approx 0.309\), so \(\theta \approx 72^\circ\).</p><p>(b) \((3, 4)\cdot(5, -12) = 15 - 48 = -33\); \(\cos\theta = \frac{33}{5 \times 13} \approx 0.508\), so \(\theta \approx 59^\circ\).</p>`
},

{ id: "t-explain", lesson: "mix", tier: "likely",
  title: "Explain or prove a general statement",
  spot: String.raw`<p>Communication questions with letters instead of numbers: "prove that \((-b, a)\) and \((b, -a)\) are perpendicular to \((a, b)\)", "prove the distance formula", "demonstrate that a plane of the form … passes through the origin", "how can you tell by inspection …", "what is a direction vector?", and the fill-in-the-blanks on the summary sheet.</p>`,
  steps: [
    String.raw`Turn what must be shown into a calculation: perpendicular means a dot product of 0; on the plane or line means some parameter values produce the point; parallel means a scalar multiple.`,
    String.raw`Write the general objects with letters exactly as given, and do the algebra just as you would with numbers.`,
    String.raw`Choose parameter values cleverly when you can (e.g. \(s = 0,\ t = -1\)) instead of solving a whole system.`,
    String.raw`Finish with a sentence that names the property and why it holds for all values.`
  ],
  example: {
    q: String.raw`<p><strong>Worksheet 3.6 Q12.</strong> Demonstrate that a plane with vector equation \(\vec r = (a, b, c) + s(d, e, f) + t(a, b, c)\) passes through the origin.</p>`,
    a: String.raw`<ol class="work">
<li><strong>What to show.</strong> Some values of \(s, t\) give \(\vec r = (0, 0, 0)\).</li>
<li><strong>Spot the values.</strong> The point \((a, b, c)\) is also a direction vector, so \(t = -1\) cancels it, and \(s = 0\) removes the other term. (The teacher's solution finds the same values by elimination.)</li>
<li><strong>Verify.</strong> \(\vec r = (a, b, c) + 0(d, e, f) - 1(a, b, c) = (0, 0, 0)\).</li>
</ol>
<p class="answer">With \(s = 0,\ t = -1\) the equation gives the origin, so the plane passes through \((0, 0, 0)\) for all values of \(a, \ldots, f\).</p>`
  },
  traps: [
    String.raw`Proving with one numerical example. A proof must work for every value of the letters.`,
    String.raw`Not saying why. End with the property, e.g. "the dot product is 0, so the vectors are perpendicular".`
  ],
  seen: String.raw`Worksheet 3.1: Q1 · Worksheet 3.2: Q5 · Worksheet 3.4: Q15a · Worksheet 3.6: Q10, Q12 · Worksheet 3.7: Q3 · Unit review (planes): Q10 · Summary sheet practice: Q6, Q8, Q10, Q12, Q13`,
  tryq: String.raw`<p>(a) Prove that \((-b, a)\) is perpendicular to \((a, b)\) for all \(a, b\). (b) Show that if \(\vec n\) is perpendicular to both \(\vec u\) and \(\vec v\), it is perpendicular to \(2\vec u - 5\vec v\). (c) How can you tell by inspection that a plane passes through the origin?</p>`,
  trya: String.raw`<p>(a) \((-b, a)\cdot(a, b) = -ab + ab = 0\) for all \(a, b\), so they are perpendicular.</p><p>(b) \(\vec n\cdot(2\vec u - 5\vec v) = 2(\vec n\cdot\vec u) - 5(\vec n\cdot\vec v) = 2(0) - 5(0) = 0\). (This is the theorem behind normals in Lesson 3.7.)</p><p>(c) Substituting \((0, 0, 0)\) into \(Ax + By + Cz + D = 0\) leaves \(D = 0\); so the plane passes through the origin exactly when \(D = 0\).</p>`
}

);
