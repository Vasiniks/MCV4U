/* MCV4U Unit 3 · Lesson 3.7 Cartesian Equation of a Plane in R³: lesson, worksheet Q&A, quiz, apply & extend, beyond the notes, glossary. */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "3.7", title: "Cartesian Equation of a Plane in R³", stage: "c2",
  where: "R³",
  summary: String.raw`A plane in R³ can be described by one equation with no parameters, \(Ax + By + Cz + D = 0\), where \(\vec n = (A, B, C)\) is a normal vector: a vector perpendicular to every vector in the plane. This lesson proves why one normal is enough, finds it with a cross product, converts between vector, parametric and Cartesian forms, and then uses normals to measure the distance from a point to a plane and to compare planes (parallel, coincident, perpendicular, or meeting at an angle).`,
  objectives: [
    String.raw`State and prove the theorem: a vector perpendicular to two non-collinear vectors is perpendicular to every vector coplanar with them.`,
    String.raw`Find a normal to a plane as \(\vec n = k(\vec u \times \vec v)\) and check it with dot products.`,
    String.raw`Derive \(Ax + By + Cz + D = 0\) from \(\vec n \cdot \overrightarrow{P_0P} = 0\) and explain what \(A, B, C\) and \(D\) tell you.`,
    String.raw`Find the Cartesian (scalar) equation of a plane from a point and a normal, a vector or parametric equation, three points, or two intersecting lines.`,
    String.raw`Convert a Cartesian equation back into vector and parametric equations.`,
    String.raw`Find the minimum distance from a point to a plane and the angle between two planes.`,
    String.raw`Decide whether two planes are coincident, parallel and distinct, perpendicular or neither, and whether a line is parallel to or lies in a plane.`
  ],
  html: String.raw`
<h3 data-tier="essential">From two parameters to one equation</h3>
<p>In 3.6 you described a plane with a vector equation \(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\): one point and two non-collinear direction vectors. It works, but it is clumsy. To check whether a point is on the plane you have to solve three equations for the two unknowns \(s\) and \(t\), and two very different-looking vector equations can describe the same plane.</p>
<p>This lesson gives a plane a single equation with no parameters at all:</p>
<div class="eq">\[ Ax + By + Cz + D = 0 \]</div>
<p>This is the <span class="term">Cartesian equation</span> of the plane. The worksheet and textbook call it the <span class="term">scalar equation</span>; the two names mean the same thing. The idea is the one you used for a line in R² in 3.2, where \(Ax + By + C = 0\) has normal \(\vec n = (A, B)\). Instead of listing the directions you can travel <em>within</em> the plane, you name the one direction that sticks straight <em>out</em> of it.</p>
<div class="callout warn"><p class="callout-title">In R³ a linear equation is a plane, not a line</p><p>In R², \(Ax + By + C = 0\) is a line. In R³, \(Ax + By + Cz + D = 0\) is a <em>plane</em>. Even an equation with a missing variable, such as \(2x + y - 4 = 0\), is a plane in R³, because \(z\) is free to be anything. This is also why a line in R³ has no Cartesian equation (3.3): one equation in \(x, y, z\) always leaves two directions of freedom.</p></div>

<h3 data-tier="likely">The theorem: perpendicular to two means perpendicular to all</h3>
<p>Everything in this lesson rests on one fact. A plane contains infinitely many directions, so how could you ever check that a vector is perpendicular to all of them? The answer: you only need to check two.</p>
<div class="callout key"><p class="callout-title">Theorem</p><p>If \(\vec u\) and \(\vec v\) are not collinear vectors and \(\vec n\) is a vector perpendicular to both \(\vec u\) and \(\vec v\), then \(\vec n\) is perpendicular to EVERY vector coplanar with \(\vec u\) and \(\vec v\).</p></div>
<p>Here is the proof from the notes, with the reason for each line.</p>
<div class="example"><p class="example-title">Proof</p>
<ol class="work">
<li>Set up the names. Let \(\vec u\) and \(\vec v\) be two non-collinear vectors. Let \(\vec w\) be <em>any</em> vector in the plane containing \(\vec u\) and \(\vec v\). Let \(\vec n\) be a vector \(\perp\) to both \(\vec u\) and \(\vec v\). Choosing \(\vec w\) arbitrary is what makes the conclusion hold for every vector in the plane.</li>
<li>Write \(\vec w\) in terms of \(\vec u\) and \(\vec v\). Since \(\vec w\) is coplanar with the non-collinear vectors \(\vec u\) and \(\vec v\), it is a linear combination of them (3.5):
<div class="eq">\[ \vec w = a\vec u + b\vec v,\quad a, b \in \mathbb{R} \]</div></li>
<li>Test perpendicularity with a dot product, using the distributive law and pulling the scalars out:
<div class="eq">\[ \begin{aligned} \vec n \cdot \vec w &= \vec n \cdot (a\vec u + b\vec v) \\ &= a(\vec n \cdot \vec u) + b(\vec n \cdot \vec v) \end{aligned} \]</div></li>
<li>Use what you know about \(\vec n\). Since \(\vec n \perp \vec u\) and \(\vec n \perp \vec v\), both \(\vec n \cdot \vec u = 0\) and \(\vec n \cdot \vec v = 0\). So
<div class="eq">\[ \vec n \cdot \vec w = a(0) + b(0) = 0 \]</div></li>
<li>A zero dot product between non-zero vectors means they are perpendicular.</li>
</ol>
<p class="answer">\(\therefore\ \vec n \perp \vec w\) for every vector \(\vec w\) in the plane. \(\blacksquare\)</p></div>
<figure class="diagram narrow"><svg viewBox="0 0 520 270" role="img" aria-labelledby="fig37-thm"><title id="fig37-thm">A plane containing vectors u and v drawn from one point, a third vector w equal to a u plus b v, and a normal vector n standing perpendicular to the plane at that point</title>
<polygon class="f-soft s-mute" stroke-width="1.5" points="60,250 360,250 460,160 160,160"/>
<line class="s-mute dash" x1="330" y1="222" x2="379.5" y2="186" stroke-width="1.5"/>
<line class="s-blue" x1="210" y1="215" x2="322" y2="221.5" stroke-width="2.5"/><polygon class="f-blue" points="330,222 318.7,226.4 319.3,216.4"/>
<line class="s-teal" x1="210" y1="215" x2="258.5" y2="179.7" stroke-width="2.5"/><polygon class="f-teal" points="265,175 259,185.5 253.2,177.4"/>
<line class="s-amber" x1="210" y1="215" x2="371.6" y2="187.3" stroke-width="2.5"/><polygon class="f-amber" points="379.5,186 369.5,192.8 367.8,182.9"/>
<line class="s-magenta" x1="210" y1="215" x2="210" y2="58" stroke-width="2.5"/><polygon class="f-magenta" points="210,50 215,61 205,61"/>
<polyline class="s-ink" fill="none" stroke-width="1.5" points="210,202 223,202.8 223,215.8"/>
<circle class="f-ink" cx="210" cy="215" r="3"/>
<text class="t-magenta" x="220" y="70" font-size="16" font-style="italic">n</text>
<text class="t-blue" x="324" y="244" font-size="16" font-style="italic">u</text>
<text class="t-teal" x="262" y="167" font-size="16" font-style="italic">v</text>
<text class="t-amber" x="388" y="182" font-size="15" font-style="italic">w = au + bv</text>
<text class="t-mute" x="84" y="243" font-size="13">plane of u and v</text>
</svg><figcaption>\(\vec n\) is perpendicular to \(\vec u\) and \(\vec v\). Every vector in their plane is a combination \(\vec w = a\vec u + b\vec v\), so \(\vec n\) is perpendicular to \(\vec w\) too.</figcaption></figure>
<p>Why does the theorem insist on <em>non-collinear</em>? If \(\vec v = k\vec u\), the two vectors lie along one line, and a whole wheel of directions is perpendicular to that line (picture the spokes around an axle). Those directions are not all normal to one plane. Non-collinear vectors span a plane (3.5), and only then does step 2 work for every \(\vec w\).</p>
<details class="check"><summary>A vector \(\vec n\) satisfies \(\vec n \cdot (1, 2, 0) = 0\) and \(\vec n \cdot (2, 4, 0) = 0\). Can you conclude that \(\vec n\) is normal to a plane containing both vectors?</summary><div class="ans"><p>No. \((2, 4, 0) = 2(1, 2, 0)\), so the two vectors are collinear and do not determine a plane. Both \((2, -1, 0)\) and \((0, 0, 1)\) pass the test, yet they point in different directions. The theorem needs non-collinear vectors.</p></div></details>

<h3 data-tier="essential">The normal vector of a plane</h3>
<p>A <span class="term">normal vector</span> to a plane is a vector that is <strong>perpendicular</strong> to every vector in the plane.</p>
<p>By the theorem, you only need a vector perpendicular to two non-collinear vectors in the plane, and the cross product builds exactly that: \(\vec u \times \vec v\) is perpendicular to both \(\vec u\) and \(\vec v\).</p>
<div class="callout key"><p class="callout-title">Normal vector (plane)</p><p>Let \(\vec u\) and \(\vec v\) be two non-collinear vectors in the plane. Then the normal is</p><div class="eq">\[ \vec n = k(\vec u \times \vec v) = (A, B, C),\quad k \neq 0 \]</div></div>
<p>The \(k\) is there because any non-zero scalar multiple of a normal is also a normal: it lies along the same line, only longer, shorter or reversed. In practice you compute \(\vec u \times \vec v\), divide out any common factor, and (as the teacher does) multiply by \(-1\) if needed so that \(A > 0\). A simpler normal means smaller numbers in every later step.</p>
<p>The teacher's "write it twice" layout for \(\vec u \times \vec v\), with \(\vec u = (u_1, u_2, u_3)\) and \(\vec v = (v_1, v_2, v_3)\): write each vector's components twice in a row, cross out the first and last columns, then for each pair of neighbouring columns multiply top-left × bottom-right and subtract top-right × bottom-left.</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{u_1} & u_2 & u_3 & u_1 & u_2 & \cancel{u_3} \\ \cancel{v_1} & v_2 & v_3 & v_1 & v_2 & \cancel{v_3} \end{array} \qquad \vec u \times \vec v = (u_2v_3 - u_3v_2,\ u_3v_1 - u_1v_3,\ u_1v_2 - u_2v_1) \]</div>
<div class="callout tip"><p class="callout-title">Always check your normal</p><p>Dot your normal with each direction vector. Both results must be 0. This catches nearly every sign slip in a cross product and takes ten seconds.</p></div>

<h3 data-tier="essential">Deriving the Cartesian equation</h3>
<p>Now build the equation. All you need is a normal and one point.</p>
<p>Let \(P_0(x_0, y_0, z_0)\) be a known point on the plane, and let \(P(x, y, z)\) be <em>any</em> point on the plane. Let \(\vec n = (A, B, C)\) be a normal.</p>
<figure class="diagram narrow"><svg viewBox="0 0 520 262" role="img" aria-labelledby="fig37-derive"><title id="fig37-derive">A plane with a known point P zero and a general point P. The vector from P zero to P lies in the plane, and the normal n stands perpendicular to it at P zero</title>
<polygon class="f-soft s-mute" stroke-width="1.5" points="50,245 350,245 470,145 170,145"/>
<line class="s-blue" x1="190" y1="205" x2="352.1" y2="181.2" stroke-width="2.5"/><polygon class="f-blue" points="360,180 349.8,186.5 348.4,176.7"/>
<line class="s-magenta" x1="190" y1="205" x2="190" y2="53" stroke-width="2.5"/><polygon class="f-magenta" points="190,45 195,56 185,56"/>
<polyline class="s-ink" fill="none" stroke-width="1.5" points="190,192 202.9,190.1 202.9,203.1"/>
<circle class="f-ink" cx="190" cy="205" r="3.5"/><circle class="f-ink" cx="360" cy="180" r="3.5"/>
<text class="t-magenta" x="200" y="62" font-size="15">n = (A, B, C)</text>
<text class="t-ink" x="184" y="229" font-size="15" text-anchor="end">P₀(x₀, y₀, z₀)</text>
<text class="t-ink" x="368" y="200" font-size="15">P(x, y, z)</text>
<text class="t-blue" x="272" y="181" font-size="15">P₀P</text>
</svg><figcaption>\(\overrightarrow{P_0P}\) lies in the plane, so it is perpendicular to the normal \(\vec n\). That single fact is the whole equation.</figcaption></figure>
<div class="example"><p class="example-title">Derivation</p><ol class="work">
<li>\(\overrightarrow{P_0P}\) joins two points of the plane, so it is a vector on the plane. By the definition of a normal, \(\overrightarrow{P_0P} \perp \vec n\).</li>
<li>Perpendicular vectors have a zero dot product, so \(\vec n \cdot \overrightarrow{P_0P} = 0\).</li>
<li>Write both vectors in components, using \(\overrightarrow{P_0P} = P - P_0\):
<div class="eq">\[ (A, B, C) \cdot (x - x_0,\ y - y_0,\ z - z_0) = 0 \]</div></li>
<li>Expand the dot product:
<div class="eq">\[ A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \]</div></li>
<li>Distribute and collect the constant terms in one bracket:
<div class="eq">\[ Ax + By + Cz + (-Ax_0 - By_0 - Cz_0) = 0 \]</div></li>
<li>The bracket contains only known numbers, so give it one name: let \(D = -Ax_0 - By_0 - Cz_0\).</li>
</ol></div>
<div class="callout key"><p class="callout-title">Cartesian equation of a plane in R³</p><div class="eq">\[ Ax + By + Cz + D = 0 \]</div><p>where the normal vector to the plane is \(\vec n = (A, B, C)\).</p></div>
<p>Two things to take from the derivation:</p>
<ul>
<li><strong>The coefficients of \(x, y, z\) are the normal.</strong> You can read \(\vec n\) straight off any Cartesian equation, and you can write the left side of the equation as soon as you know \(\vec n\).</li>
<li><strong>\(D\) fixes the position.</strong> All planes with normal \((A, B, C)\) are parallel; \(D\) picks out which one. You do not need the formula \(D = -Ax_0 - By_0 - Cz_0\) by heart: substitute a known point into \(Ax + By + Cz + D = 0\) and solve for \(D\). That is step ② of every example below.</li>
</ul>
<p>The middle line, \(A(x - x_0) + B(y - y_0) + C(z - z_0) = 0\), is sometimes called the point-normal form. It is a correct equation of the plane too; expanding it gives the Cartesian form.</p>

<h3 data-tier="essential">Reading a Cartesian equation</h3>
<p>Once a plane is written as \(Ax + By + Cz + D = 0\), a lot can be read off by inspection.</p>
<ul>
<li><strong>Normal:</strong> \(5x - 2y + z - 8 = 0\) has \(\vec n = (5, -2, 1)\). Watch the signs. A missing variable means a zero component: \(3x - 5z + 15 = 0\) has \(\vec n = (3, 0, -5)\).</li>
<li><strong>Is a point on the plane?</strong> Substitute it. The point is on the plane exactly when the left side comes out to 0. For \((1, 2, 1)\) in \(5x - 2y + z - 8 = 0\): \(5 - 4 + 1 - 8 = -6 \neq 0\), so it is not on the plane.</li>
<li><strong>Finding a point:</strong> set two variables to 0 and solve for the third. In \(5x - 2y + z - 8 = 0\), setting \(x = y = 0\) gives \(z = 8\), so \((0, 0, 8)\) is on the plane. Points found this way are the <span class="term">intercepts</span> of the plane.</li>
<li><strong>Through the origin?</strong> Substituting \((0, 0, 0)\) leaves only \(D\). So the plane passes through the origin exactly when \(D = 0\) (worksheet question 3).</li>
</ul>
<h4>Missing variables: planes parallel to an axis</h4>
<p>If a variable is missing, that normal component is 0, so the normal is perpendicular to that axis and the plane runs parallel to it. The missing variable can take any value.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Equation</th><th>Normal</th><th>What the plane looks like</th></tr></thead><tbody>
<tr><th>\(x - 5 = 0\)</th><td>\((1, 0, 0)\)</td><td>Every point has \(x = 5\); \(y\) and \(z\) are free. Parallel to the \(yz\)-plane.</td></tr>
<tr><th>\(z - 3 = 0\)</th><td>\((0, 0, 1)\)</td><td>A horizontal plane 3 units above the \(xy\)-plane.</td></tr>
<tr><th>\(2x + 3z + 6 = 0\)</th><td>\((2, 0, 3)\)</td><td>\(y\) is free: the plane is parallel to the \(y\)-axis.</td></tr>
<tr><th>\(y + 2z = 0\)</th><td>\((0, 1, 2)\)</td><td>\(x\) is free and \(D = 0\): the plane contains the whole \(x\)-axis (worksheet question 8).</td></tr>
</tbody></table></div>
<details class="check"><summary>Give a normal for \(4y - z + 7 = 0\), say whether the plane passes through the origin, and name an axis it is parallel to.</summary><div class="ans"><p>\(\vec n = (0, 4, -1)\). It does not pass through the origin, since \(D = 7 \neq 0\). There is no \(x\)-term, so \(x\) is free and the plane is parallel to the \(x\)-axis.</p></div></details>

<h3 data-tier="essential">Example 1 · From a vector equation to Cartesian</h3>
<p>Every "find the Cartesian equation" question uses the same two steps from the notes: <strong>① need a normal</strong>, then <strong>② use a point to solve for \(D\)</strong>. Step ① settles the tilt of the plane; step ② slides it into the right position.</p>
<div class="example"><p class="example-title">Example 1 · Determine the Cartesian equation of the plane \(\vec r = (2, -1, 4) + s(1, -3, 0) + t(-4, 1, 1),\ s, t \in \mathbb{R}\)</p>
<ol class="work">
<li><strong>① Need normal.</strong> The normal must be perpendicular to both direction vectors, so take them from the vector equation: \(\vec a = (1, -3, 0)\) and \(\vec b = (-4, 1, 1)\). They are not scalar multiples, so their cross product is a genuine normal.</li>
<li>Write the components twice and cross-multiply each pair of neighbouring columns:
<div class="eq">\[ \begin{array}{cccccc} \cancel{1} & -3 & 0 & 1 & -3 & \cancel{0} \\ \cancel{-4} & 1 & 1 & -4 & 1 & \cancel{1} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n = \vec a \times \vec b &= \big((-3)(1) - (0)(1),\ (0)(-4) - (1)(1),\ (1)(1) - (-3)(-4)\big) \\ &= (-3, -1, -11) \end{aligned} \]</div></li>
<li>Any non-zero multiple of a normal is a normal, so multiply by \(-1\) to make \(A > 0\) (the teacher's "want \(A > 0\)"): \(\vec n = (3, 1, 11)\).</li>
<li>Check it, because a sign slip here ruins everything after: \((3, 1, 11) \cdot (1, -3, 0) = 3 - 3 + 0 = 0\) and \((3, 1, 11) \cdot (-4, 1, 1) = -12 + 1 + 11 = 0\). Both perpendicular.</li>
<li><strong>② Use a point to solve for \(D\).</strong> The normal gives the left side at once: \(3x + y + 11z + D = 0\). The only unknown left is \(D\), and any point on the plane must satisfy the equation, so substitute \(P_0(2, -1, 4)\) from the vector equation:
<div class="eq">\[ \begin{aligned} 3(2) + (-1) + 11(4) + D &= 0 \\ 6 - 1 + 44 + D &= 0 \\ D &= -49 \end{aligned} \]</div></li>
</ol>
<p class="answer">\(\therefore\ 3x + y + 11z - 49 = 0\)</p></div>
<p>Notice what was <em>not</em> used: the position vector \((2, -1, 4)\) never goes into the cross product. It is an arrow from the origin, and the origin is usually not on the plane, so it is not a direction within the plane.</p>
<div class="callout tip"><p class="callout-title">Parametric equations work the same way</p><p>If the plane is given in parametric form, read the point from the constant terms and the direction vectors from the coefficients of \(s\) and \(t\). For example \(x = 4 + 3s - 2t,\ y = 2 + 4s + 4t,\ z = 1 - 2s - 3t\) has point \((4, 2, 1)\), \(\vec a = (3, 4, -2)\) and \(\vec b = (-2, 4, -3)\). If an equation has no \(s\) term, that component of \(\vec a\) is 0 (worksheet question 6).</p></div>

<h3 data-tier="essential">Example 2 · From three points to Cartesian</h3>
<p>Three points give no direction vectors directly, so you make them: subtract points to get two vectors that lie in the plane, then run the same two steps.</p>
<div class="example"><p class="example-title">Example 2 · Determine the Cartesian equation of the plane through the points \(A(2, 3, -1)\), \(B(-1, 2, 2)\) and \(C(3, -1, 2)\)</p>
<ol class="work">
<li><strong>① Need normal.</strong> A vector joining two points of the plane lies in the plane, so build two of them:
<div class="eq">\[ \begin{aligned} \vec a = \overrightarrow{AB} &= (-1 - 2,\ 2 - 3,\ 2 - (-1)) = (-3, -1, 3) \\ \vec b = \overrightarrow{AC} &= (3 - 2,\ -1 - 3,\ 2 - (-1)) = (1, -4, 3) \end{aligned} \]</div></li>
<li>Check they are not collinear, because collinear vectors give a zero cross product. \((-3, -1, 3)\) is not a multiple of \((1, -4, 3)\) (the first components need \(k = -3\), the second \(k = \frac14\)). Good: the three points really determine one plane.</li>
<li>Cross product:
<div class="eq">\[ \begin{array}{cccccc} \cancel{-3} & -1 & 3 & -3 & -1 & \cancel{3} \\ \cancel{1} & -4 & 3 & 1 & -4 & \cancel{3} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n = \vec a \times \vec b &= \big((-1)(3) - (3)(-4),\ (3)(1) - (-3)(3),\ (-3)(-4) - (-1)(1)\big) \\ &= (-3 + 12,\ 3 + 9,\ 12 + 1) = (9, 12, 13) \end{aligned} \]</div></li>
<li>Check: \((9, 12, 13) \cdot (-3, -1, 3) = -27 - 12 + 39 = 0\) and \((9, 12, 13) \cdot (1, -4, 3) = 9 - 48 + 39 = 0\). There is no common factor and \(A > 0\), so keep it.</li>
<li><strong>② Sub in point \(A\), \(B\) or \(C\).</strong> All three lie on the plane, so any one fixes \(D\). Using \(A(2, 3, -1)\) in \(9x + 12y + 13z + D = 0\):
<div class="eq">\[ \begin{aligned} 9(2) + 12(3) + 13(-1) + D &= 0 \\ 18 + 36 - 13 + D &= 0 \\ D &= -41 \end{aligned} \]</div></li>
<li>Check with the two points you did not use: \(B\): \(-9 + 24 + 26 - 41 = 0\). \(C\): \(27 - 12 + 26 - 41 = 0\).</li>
</ol>
<p class="answer">\(\therefore\ 9x + 12y + 13z - 41 = 0\)</p></div>
<p>Any two of \(\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{BC}\) (or their reverses) would work, and every point gives the same \(D\). Two correct answers can only differ by an overall scalar multiple, such as \(-9x - 12y - 13z + 41 = 0\).</p>
<div class="callout warn"><p class="callout-title">Collinear points do not give a plane</p><p>If \(\overrightarrow{AB}\) and \(\overrightarrow{AC}\) are scalar multiples, the three points lie on one line and infinitely many planes pass through them. The cross product comes out as \((0, 0, 0)\), which cannot be a normal. That is why the notes say "not collinear, good" before crossing.</p></div>

<h3 data-tier="essential">Going back: Cartesian to vector and parametric</h3>
<p>A vector equation needs one point and two non-collinear direction vectors in the plane. The teacher's method (worksheet question 11): <strong>find three points</strong>, then join them. The easiest three points are usually the intercepts.</p>
<div class="example"><p class="example-title">Example 3 · Find vector and parametric equations of the plane \(3x + 2y - z - 6 = 0\)</p>
<ol class="work">
<li>Find three points. Setting two variables to 0 leaves a one-step equation each time:
<div class="eq">\[ \begin{aligned} x\text{-int: } 3x - 6 = 0 &\Rightarrow x = 2 && (2, 0, 0) \\ y\text{-int: } 2y - 6 = 0 &\Rightarrow y = 3 && (0, 3, 0) \\ z\text{-int: } -z - 6 = 0 &\Rightarrow z = -6 && (0, 0, -6) \end{aligned} \]</div></li>
<li>Join the points to get two vectors that lie in the plane:
<div class="eq">\[ \begin{aligned} \vec a &= (0, 3, 0) - (2, 0, 0) = (-2, 3, 0) \\ \vec b &= (0, 0, -6) - (2, 0, 0) = (-2, 0, -6) \end{aligned} \]</div>
Divide \(\vec b\) by \(-2\) to get \((1, 0, 3)\); any non-zero multiple of a direction vector is still a direction vector, and smaller numbers are easier.</li>
<li>Check that both really lie in the plane by dotting with \(\vec n = (3, 2, -1)\): \((3, 2, -1) \cdot (-2, 3, 0) = -6 + 6 + 0 = 0\) and \((3, 2, -1) \cdot (1, 0, 3) = 3 + 0 - 3 = 0\). They are clearly not collinear.</li>
<li>Use one of the three points, say \((2, 0, 0)\), as the position vector.</li>
</ol>
<p class="answer">\(\therefore\ \vec r = (2, 0, 0) + s(-2, 3, 0) + t(1, 0, 3),\ s, t \in \mathbb{R}\); parametric: \(x = 2 - 2s + t,\ y = 3s,\ z = 3t\)</p></div>
<p>To confirm, substitute the parametric equations into the Cartesian one: \(3(2 - 2s + t) + 2(3s) - 3t - 6 = 6 - 6s + 3t + 6s - 3t - 6 = 0\) for every \(s\) and \(t\). Every point produced lies on the plane.</p>
<h4>When the intercepts let you down</h4>
<ul>
<li><strong>A variable is missing.</strong> In \(3x - 5z + 15 = 0\) there is no \(y\)-intercept, because \(y\) can be anything. The intercepts give \((-5, 0, 0)\) and \((0, 0, 3)\); for a third point keep \(x = 0,\ z = 3\) and choose \(y = 1\): \((0, 1, 3)\) (worksheet 11b).</li>
<li><strong>\(D = 0\).</strong> All three intercepts are the origin. Pick other easy points instead: for \(x + 3y + z = 0\), use \((0, 0, 0)\), \((3, -1, 0)\) and \((1, 0, -1)\).</li>
</ul>
<div class="callout tip"><p class="callout-title">Another route: solve for one variable</p><p>Solve the Cartesian equation for a variable that has a non-zero coefficient, and let the other two variables be the parameters. From \(3x + 2y - z - 6 = 0\): \(z = 3x + 2y - 6\). Let \(x = s\) and \(y = t\). Then \(x = s,\ y = t,\ z = -6 + 3s + 2t\), so \(\vec r = (0, 0, -6) + s(1, 0, 3) + t(0, 1, 2)\). This looks different from Example 3 but describes the same plane: a vector equation of a plane is never unique.</p></div>

<h3 data-tier="essential">Minimum distance from a point to a plane</h3>
<p>The notes box a formula that mirrors the one for a line in R² from 3.4. The shortest distance from a point to a plane is measured straight along the normal, perpendicular to the plane.</p>
<div class="callout key"><p class="callout-title">Minimum distance from a point to a plane in R³</p><div class="eq">\[ d = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}} \]</div><p>for the plane \(Ax + By + Cz + D = 0\), with \(\vec n = (A, B, C)\), and the point \((x_1, y_1, z_1)\).</p></div>
<figure class="diagram narrow"><svg viewBox="0 0 520 268" role="img" aria-labelledby="fig37-dist"><title id="fig37-dist">A point P one above a plane, the perpendicular distance d dropped straight down to the plane, a point P zero on the plane, the vector from P zero to P one, and the normal n at P zero</title>
<polygon class="f-soft s-mute" stroke-width="1.5" points="50,250 350,250 470,150 170,150"/>
<line class="s-ink dash" x1="320" y1="50" x2="320" y2="200" stroke-width="2"/>
<polyline class="s-ink" fill="none" stroke-width="1.5" points="320,189 331,189 331,200"/>
<line class="s-blue" x1="160" y1="225" x2="314.6" y2="55.9" stroke-width="2.5"/><polygon class="f-blue" points="320,50 316.3,61.5 308.9,54.7"/>
<line class="s-magenta" x1="160" y1="225" x2="160" y2="128" stroke-width="2.5"/><polygon class="f-magenta" points="160,120 165,131 155,131"/>
<circle class="f-ink" cx="320" cy="50" r="3.5"/><circle class="f-ink" cx="160" cy="225" r="3.5"/><circle class="f-mute" cx="320" cy="200" r="3"/>
<text class="t-ink" x="330" y="46" font-size="15">P₁(x₁, y₁, z₁)</text>
<text class="t-ink" x="328" y="132" font-size="16" font-style="italic">d</text>
<text class="t-ink" x="150" y="244" font-size="15" text-anchor="end">P₀</text>
<text class="t-magenta" x="150" y="136" font-size="16" font-style="italic" text-anchor="end">n</text>
<text class="t-blue" x="236" y="128" font-size="15" text-anchor="end">P₀P₁</text>
</svg><figcaption>The distance \(d\) is the length of the projection of \(\overrightarrow{P_0P_1}\) onto the normal \(\vec n\), for any point \(P_0\) on the plane.</figcaption></figure>
<h4 data-tier="likely">Why the formula works</h4>
<p>Let \(P_1(x_1, y_1, z_1)\) be the point and \(P_0(x_0, y_0, z_0)\) any point on the plane. Travelling from \(P_0\) to \(P_1\), only the part of the trip along the normal moves you away from the plane, so \(d\) is the length of the projection of \(\overrightarrow{P_0P_1}\) onto \(\vec n\):</p>
<div class="eq">\[ d = \frac{|\overrightarrow{P_0P_1} \cdot \vec n|}{|\vec n|} \]</div>
<p>Expand the dot product in the numerator:</p>
<div class="eq">\[ \begin{aligned} \overrightarrow{P_0P_1} \cdot \vec n &= A(x_1 - x_0) + B(y_1 - y_0) + C(z_1 - z_0) \\ &= Ax_1 + By_1 + Cz_1 + (-Ax_0 - By_0 - Cz_0) \\ &= Ax_1 + By_1 + Cz_1 + D \end{aligned} \]</div>
<p>using \(D = -Ax_0 - By_0 - Cz_0\) from the derivation. Since \(|\vec n| = \sqrt{A^2 + B^2 + C^2}\), the boxed formula follows. The absolute value is needed because the dot product is negative when \(P_1\) is on the side the normal points away from, and a distance is never negative.</p>
<p>The worksheet solutions use the projection form \(d = \frac{|\overrightarrow{P_0P} \cdot \vec n|}{|\vec n|}\) directly. Both give the same number. The boxed formula is faster because you do not need a point on the plane.</p>
<div class="example"><p class="example-title">Example 4 · Find the distance from \(P(2, -1, 3)\) to the plane \(2x - y + 2z + 4 = 0\)</p>
<ol class="work">
<li>The equation is already in the form \(\ldots = 0\), so read off \(A = 2,\ B = -1,\ C = 2,\ D = 4\), and the point \((x_1, y_1, z_1) = (2, -1, 3)\).</li>
<li>Substitute into the formula. The numerator is just the left side of the plane's equation evaluated at the point:
<div class="eq">\[ d = \frac{|2(2) - (-1) + 2(3) + 4|}{\sqrt{2^2 + (-1)^2 + 2^2}} = \frac{|4 + 1 + 6 + 4|}{\sqrt{9}} = \frac{15}{3} = 5 \]</div></li>
<li>Check with the projection method. Find a point on the plane by setting \(y = z = 0\): \(2x + 4 = 0\), so \(P_0(-2, 0, 0)\). Then \(\overrightarrow{P_0P} = (2, -1, 3) - (-2, 0, 0) = (4, -1, 3)\) and
<div class="eq">\[ d = \frac{|(4, -1, 3) \cdot (2, -1, 2)|}{|(2, -1, 2)|} = \frac{|8 + 1 + 6|}{3} = 5 \]</div></li>
</ol>
<p class="answer">\(\therefore\ d = 5\) units</p></div>
<div class="callout warn"><p class="callout-title">Get the equation into "= 0" form first</p><p>The numerator uses the whole left side, including \(D\). If the plane is written \(3x + 2y + z = 10\), rewrite it as \(3x + 2y + z - 10 = 0\), so \(D = -10\), not \(+10\). And if the point is on the plane, the numerator is 0 and \(d = 0\), as it should be.</p></div>

<h3 data-tier="essential">Parallel, perpendicular and intersecting planes</h3>
<p>The notes finish with: <em>normals are used to determine the angle between two planes</em>. Two planes tilt relative to each other exactly as much as their normals do, so every question about how two planes sit can be answered with \(\vec n_1\) and \(\vec n_2\).</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Planes are</th><th>Normals are</th><th>Test</th></tr></thead><tbody>
<tr><th>Parallel</th><td>parallel: \(\vec n_1 \parallel \vec n_2\)</td><td>\(\vec n_1 = k\vec n_2\) (scalar multiples)</td></tr>
<tr><th>Perpendicular</th><td>perpendicular: \(\vec n_1 \perp \vec n_2\)</td><td>\(\vec n_1 \cdot \vec n_2 = 0\)</td></tr>
<tr><th>Intersecting at angle θ</th><td>at angle θ</td><td>\(\cos\theta = \dfrac{\vec n_1 \cdot \vec n_2}{|\vec n_1||\vec n_2|}\)</td></tr>
</tbody></table></div>
<figure class="diagram narrow"><svg viewBox="0 0 520 270" role="img" aria-labelledby="fig37-angle"><title id="fig37-angle">Two planes seen edge-on, crossing at a point. Each plane has a normal drawn from that point, and the angle between the normals equals the angle between the planes</title>
<line class="s-blue" x1="60" y1="180" x2="470" y2="180" stroke-width="3"/>
<line class="s-teal" x1="168.1" y1="257.1" x2="436.2" y2="32.2" stroke-width="3"/>
<line class="s-blue" x1="260" y1="180" x2="260" y2="78" stroke-width="2"/><polygon class="f-blue" points="260,70 265,81 255,81"/>
<line class="s-teal" x1="260" y1="180" x2="194.4" y2="101.9" stroke-width="2"/><polygon class="f-teal" points="189.3,95.7 200.2,100.9 192.5,107.4"/>
<path class="s-amber" fill="none" stroke-width="2" d="M 320 180 A 60 60 0 0 0 306 141.4"/>
<path class="s-amber" fill="none" stroke-width="2" d="M 260 140 A 40 40 0 0 0 234.3 149.4"/>
<circle class="f-ink" cx="260" cy="180" r="3.5"/>
<text class="t-blue" x="452" y="202" font-size="16">π₁</text>
<text class="t-teal" x="444" y="48" font-size="16">π₂</text>
<text class="t-blue" x="268" y="84" font-size="16" font-style="italic">n₁</text>
<text class="t-teal" x="184" y="92" font-size="16" font-style="italic" text-anchor="end">n₂</text>
<text class="t-amber" x="328" y="164" font-size="16" font-style="italic">θ</text>
<text class="t-amber" x="244" y="128" font-size="16" font-style="italic" text-anchor="middle">θ</text>
<text class="t-mute" x="272" y="204" font-size="13">line of intersection, seen end-on</text>
</svg><figcaption>Looking along the line where the planes meet, each plane shows up as a line. Turning a plane by θ turns its normal by θ, so the angle between the normals equals the angle between the planes.</figcaption></figure>
<h4>Parallel planes: coincident or distinct?</h4>
<p>Parallel normals mean the planes are parallel, but that still leaves two possibilities: they are the same plane (<span class="term">coincident</span>) or two separate planes that never meet (<span class="term">parallel and distinct</span>). To decide, check whether the <em>whole equations</em>, constant included, are scalar multiples of each other.</p>
<div class="example"><p class="example-title">Example 5 · Classify each pair of planes</p>
<ol class="work">
<li>\(x - 2y + 3z - 4 = 0\) and \(2x - 4y + 6z - 8 = 0\). Compare normals first because they settle the tilt: \((2, -4, 6) = 2(1, -2, 3)\), so the planes are parallel. Then compare positions: doubling the first equation gives exactly \(2x - 4y + 6z - 8 = 0\). <strong>Coincident.</strong></li>
<li>\(x - 2y + 3z - 4 = 0\) and \(2x - 4y + 6z + 5 = 0\). The normals are still multiples, but doubling the first equation gives constant \(-8\), not \(+5\). Same tilt, different position: <strong>parallel and distinct.</strong></li>
<li>\(x - 2y + 3z - 4 = 0\) and \(4x + 5y + 2z - 1 = 0\). The normals are not multiples, so try the dot product: \((1, -2, 3) \cdot (4, 5, 2) = 4 - 10 + 6 = 0\). <strong>Perpendicular.</strong></li>
<li>\(x - 2y + 3z - 4 = 0\) and \(x + y - z = 0\). Not multiples (\(k\) would be 1 from the first components and \(-\frac12\) from the second), and \((1, -2, 3) \cdot (1, 1, -1) = 1 - 2 - 3 = -4 \neq 0\). <strong>Neither</strong>: the planes meet in a line at an angle other than 90°.</li>
</ol></div>
<div class="example"><p class="example-title">Example 6 · Find the angle between the planes \(2x - y + z - 5 = 0\) and \(x + y + 2z + 7 = 0\)</p>
<ol class="work">
<li>The angle between planes is the angle between their normals, so read them off: \(\vec n_1 = (2, -1, 1)\) and \(\vec n_2 = (1, 1, 2)\).</li>
<li>Compute the pieces of the formula: \(\vec n_1 \cdot \vec n_2 = 2 - 1 + 2 = 3\), \(|\vec n_1| = \sqrt{4 + 1 + 1} = \sqrt6\), \(|\vec n_2| = \sqrt{1 + 1 + 4} = \sqrt6\).</li>
<li>Substitute:
<div class="eq">\[ \cos\theta = \frac{\vec n_1 \cdot \vec n_2}{|\vec n_1||\vec n_2|} = \frac{3}{\sqrt6\,\sqrt6} = \frac36 = \frac12 \]</div></li>
</ol>
<p class="answer">\(\therefore\ \theta = 60^\circ\)</p></div>
<div class="callout tip"><p class="callout-title">Keep the angle between 0° and 90°</p><p>The worksheet defines the angle between two planes as the angle between their normals, with \(0^\circ \le \theta \le 90^\circ\). Reversing one normal does not change the plane but turns \(\theta\) into \(180^\circ - \theta\). So if \(\cos\theta\) comes out negative, report \(180^\circ - \theta\), or put absolute value bars on the numerator from the start: \(\cos\theta = \frac{|\vec n_1 \cdot \vec n_2|}{|\vec n_1||\vec n_2|}\).</p></div>
<details class="check"><summary>Are \(4x - 2y + 6z = 1\) and \(-2x + y - 3z + 5 = 0\) coincident, parallel and distinct, or neither?</summary><div class="ans"><p>\((4, -2, 6) = -2(-2, 1, -3)\), so the normals are parallel. Multiply the second equation by \(-2\): \(4x - 2y + 6z - 10 = 0\). The first equation in "= 0" form is \(4x - 2y + 6z - 1 = 0\). The constants differ, so the planes are <strong>parallel and distinct</strong>.</p></div></details>

<h3 data-tier="likely">A line and a plane: parallel, lying in it, or crossing</h3>
<p>Worksheet question 12 brings back lines from 3.3. The normal does the work again. A line with direction vector \(\vec m\) is parallel to a plane when \(\vec m\) runs along the plane, which means \(\vec m\) is perpendicular to the normal:</p>
<div class="eq">\[ \text{line} \parallel \text{plane} \iff \vec n \cdot \vec m = 0 \]</div>
<p>If the line is parallel, test one point of the line in the plane's equation. If the point satisfies it, the whole line lies in the plane; if not, the line runs alongside the plane without touching it. If \(\vec n \cdot \vec m \neq 0\), the line crosses the plane at exactly one point. (If \(\vec m = k\vec n\), the line is perpendicular to the plane.)</p>
<div class="example"><p class="example-title">Example 7 · Does the line \(\vec r = (1, 0, 2) + t(2, -1, 3),\ t \in \mathbb{R}\) lie in the plane \(x + 5y + z - 3 = 0\)?</p>
<ol class="work">
<li>First decide whether the line is even parallel to the plane: \(\vec n \cdot \vec m = (1, 5, 1) \cdot (2, -1, 3) = 2 - 5 + 3 = 0\). Yes, it is parallel.</li>
<li>A parallel line is either entirely in the plane or entirely off it, so one point decides. Test \((1, 0, 2)\): \(1 + 5(0) + 2 - 3 = 0\). The point is on the plane.</li>
</ol>
<p class="answer">\(\therefore\) the line lies in the plane.</p></div>
<div class="callout warn"><p class="callout-title">The tests look opposite, and that is correct</p><p>A <em>line</em> is parallel to a plane when \(\vec n \cdot \vec m = 0\). Two <em>planes</em> are parallel when \(\vec n_1 = k\vec n_2\). A line's direction vector runs inside the plane, while a normal sticks out of it, which is why one test uses a zero dot product and the other uses scalar multiples.</p></div>

<h3 data-tier="essential">Common mistakes and the big picture</h3>
<div class="callout warn"><p class="callout-title">Mistakes that cost marks</p><ul>
<li>Crossing the <em>position</em> vector with a direction vector. Only the two direction vectors go into the cross product.</li>
<li>Using the normal as a direction vector when writing a vector equation. \((A, B, C)\) points out of the plane; a direction vector \(\vec a\) must satisfy \(\vec n \cdot \vec a = 0\).</li>
<li>A sign slip in the middle component of the cross product. Always dot the normal back with both direction vectors.</li>
<li>Skipping step ②. \(3x + y + 11z = 0\) has the right normal but passes through the origin, so it is the wrong plane unless \(D\) really is 0.</li>
<li>Calling two planes coincident because their normals are parallel. Compare the constants too.</li>
<li>Reporting an obtuse angle between planes. Keep \(0^\circ \le \theta \le 90^\circ\).</li>
</ul></div>
<p>Here is how the plane fits with everything else in the unit, following the teacher's unit summary sheet:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Form</th><th>Line in R²</th><th>Line in R³</th><th>Plane in R³</th></tr></thead><tbody>
<tr><th>Vector</th><td>\(\vec r = \vec r_0 + t\vec m\)</td><td>\(\vec r = \vec r_0 + t\vec m\)</td><td>\(\vec r = \vec r_0 + s\vec a + t\vec b\)</td></tr>
<tr><th>Parametric</th><td>2 equations, 1 parameter</td><td>3 equations, 1 parameter</td><td>3 equations, 2 parameters</td></tr>
<tr><th>Symmetric</th><td>\(\frac{x - x_0}{a} = \frac{y - y_0}{b}\)</td><td>\(\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}\)</td><td>none</td></tr>
<tr><th>Cartesian (scalar)</th><td>\(Ax + By + C = 0,\ \vec n = (A, B)\)</td><td>none</td><td>\(Ax + By + Cz + D = 0,\ \vec n = (A, B, C)\)</td></tr>
<tr><th>Distance from a point</th><td>\(\frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\)</td><td>\(\frac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\)</td><td>\(\frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\)</td></tr>
</tbody></table></div>
<p>The summary sheet also pairs the tests: lines are parallel if \(\vec m_1 = k\vec m_2\) and perpendicular if \(\vec m_1 \cdot \vec m_2 = 0\); planes are parallel if \(\vec n_1 = k\vec n_2\) and perpendicular if \(\vec n_1 \cdot \vec n_2 = 0\).</p>
<p>Looking ahead: two planes that are not parallel meet in a line, and a line that is not parallel to a plane meets it in a single point. Finding those intersections is the next step, and it is done with exactly the Cartesian equations from this lesson.</p>
`
});

window.QA.push({
  id: "qa-37", lesson: "3.7",
  title: "3.7 Worksheet: Cartesian Equation of a Plane in R³",
  source: "C - Worksheet (questions) and D - Worksheet Solutions (teacher's answers)",
  items: [
    { tier: "essential",
      q: String.raw`<strong>1a.</strong> For each of the following, find the scalar equation of the plane that passes through the point \(P_0\) and has normal \(\vec n\). \(P_0(2, 1, -3),\ \vec n = (7, 1, -1)\)`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a normal · <strong>Plan:</strong> the normal is handed to you, so step ① is already done. Write \(\vec n\) as the coefficients, then substitute the point to find \(D\).</p>
<p>The coefficients of \(x, y, z\) are the components of \(\vec n\):</p>
<div class="eq">\[ 7x + y - z + D = 0 \]</div>
<p>\(P_0\) is on the plane, so it must satisfy the equation:</p>
<div class="eq">\[ \begin{aligned} 7(2) + (1) - (-3) + D &= 0 \\ 18 + D &= 0 \\ D &= -18 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 7x + y - z - 18 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>1b.</strong> \(P_0(5, 1, 9),\ \vec n = (1, 0, 0)\)`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a normal · <strong>Plan:</strong> same two steps. The zero components mean the \(y\)- and \(z\)-terms vanish.</p>
<p>With \(\vec n = (1, 0, 0)\) the equation is \(1x + 0y + 0z + D = 0\), that is</p>
<div class="eq">\[ x + D = 0 \]</div>
<p>Substitute \(P_0(5, 1, 9)\); only the \(x\)-coordinate matters:</p>
<div class="eq">\[ \begin{aligned} (5) + D &= 0 \\ D &= -5 \end{aligned} \]</div>
<p class="answer">\(\therefore\ x - 5 = 0\)</p>`,
      note: String.raw`Every point with \(x = 5\) is on this plane, whatever \(y\) and \(z\) are: it is the plane parallel to the \(yz\)-plane, 5 units along the \(x\)-axis.` },
    { tier: "essential",
      q: String.raw`<strong>1c.</strong> \(P_0(0, 6, -2),\ \vec n = (2, 0, 3)\)`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a normal · <strong>Plan:</strong> write the coefficients from \(\vec n\) (no \(y\)-term since its component is 0), then solve for \(D\).</p>
<div class="eq">\[ 2x + 3z + D = 0 \]</div>
<p>Substitute \(P_0(0, 6, -2)\):</p>
<div class="eq">\[ \begin{aligned} 2(0) + 3(-2) + D &= 0 \\ -6 + D &= 0 \\ D &= 6 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 2x + 3z + 6 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>1d.</strong> \(P_0(0, 0, 0),\ \vec n = (2, -1, 4)\)`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a normal · <strong>Plan:</strong> same steps; the point is the origin, so expect \(D = 0\).</p>
<div class="eq">\[ 2x - y + 4z + D = 0 \]</div>
<p>Substitute \((0, 0, 0)\):</p>
<div class="eq">\[ \begin{aligned} 2(0) - (0) + 4(0) + D &= 0 \\ D &= 0 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 2x - y + 4z = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>2a.</strong> Determine the scalar equation of the plane that passes through \((1, -2, 3)\) and has a normal parallel to the \(y\)-axis.`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a described normal · <strong>Plan:</strong> turn the description into a vector. A vector parallel to the \(y\)-axis is any multiple of \(\hat\jmath = (0, 1, 0)\). Then substitute the point.</p>
<p>\(\vec n \parallel y\)-axis, \(\therefore\ \vec n = (0, 1, 0)\). The equation is</p>
<div class="eq">\[ y + D = 0 \]</div>
<p>Substitute \((1, -2, 3)\); only \(y = -2\) appears:</p>
<div class="eq">\[ \begin{aligned} -2 + D &= 0 \\ D &= 2 \end{aligned} \]</div>
<p class="answer">\(\therefore\ y + 2 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>2b.</strong> … has a normal perpendicular to the \(xy\)-plane.`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a described normal · <strong>Plan:</strong> a vector perpendicular to the flat \(xy\)-plane points straight up, along the \(z\)-axis. Use that as \(\vec n\), then substitute \((1, -2, 3)\).</p>
<p>\(\vec n \perp xy\)-plane, \(\therefore\ \vec n \parallel z\)-axis, \(\therefore\ \vec n = (0, 0, 1)\). The equation is</p>
<div class="eq">\[ z + D = 0 \]</div>
<p>Substitute \((1, -2, 3)\):</p>
<div class="eq">\[ \begin{aligned} (3) + D &= 0 \\ D &= -3 \end{aligned} \]</div>
<p class="answer">\(\therefore\ z - 3 = 0\)</p>`,
      note: String.raw`The normal is perpendicular to the \(xy\)-plane, so the plane itself is horizontal (parallel to the \(xy\)-plane), at height \(z = 3\). Do not confuse "normal perpendicular to the \(xy\)-plane" with "plane perpendicular to the \(xy\)-plane".` },
    { tier: "essential",
      q: String.raw`<strong>2c.</strong> … has a normal parallel to the normal of the plane \(x - y - 2z + 19 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation of a parallel plane through a point · <strong>Plan:</strong> parallel normals can be taken equal, so read the normal off the given plane and keep it. Only \(D\) changes.</p>
<p>The normal of \(x - y - 2z + 19 = 0\) is \((1, -1, -2)\), so \(\vec n = (1, -1, -2)\) and</p>
<div class="eq">\[ x - y - 2z + D = 0 \]</div>
<p>Substitute \((1, -2, 3)\):</p>
<div class="eq">\[ \begin{aligned} 1(1) - (-2) - 2(3) + D &= 0 \\ 1 + 2 - 6 + D &= 0 \\ D &= 3 \end{aligned} \]</div>
<p class="answer">\(\therefore\ x - y - 2z + 3 = 0\)</p>`,
      note: String.raw`The answer is parallel to \(x - y - 2z + 19 = 0\) and distinct from it (same normal, different constant).` },
    { tier: "likely",
      q: String.raw`<strong>3a.</strong> Find the scalar equation of the plane that passes through the origin and has a normal \(\vec n = (A, B, C)\).`,
      a: String.raw`<p><strong>Type:</strong> general Cartesian equation through a point · <strong>Plan:</strong> do exactly what you do with numbers, but with letters: write the equation from \(\vec n\) and substitute \((0, 0, 0)\).</p>
<p>With \(\vec n = (A, B, C)\): \(Ax + By + Cz + D = 0\). Substitute the point \((0, 0, 0)\):</p>
<div class="eq">\[ \begin{aligned} A(0) + B(0) + C(0) + D &= 0 \\ \therefore\ D &= 0 \end{aligned} \]</div>
<p class="answer">\(\therefore\ Ax + By + Cz = 0\)</p>` },
    { tier: "likely",
      q: String.raw`<strong>3b.</strong> How can you tell by inspection of the scalar equation of a plane whether or not the plane passes through the origin?`,
      a: String.raw`<p><strong>Type:</strong> reading a Cartesian equation · <strong>Plan:</strong> ask what happens when you substitute the origin: every term with a variable becomes 0, leaving only \(D\).</p>
<p>Substituting \((0, 0, 0)\) into \(Ax + By + Cz + D = 0\) gives \(D = 0\). So the origin satisfies the equation exactly when the constant term is 0.</p>
<p class="answer">If \(D = 0\), then the plane passes through the origin (and if \(D \neq 0\), it does not).</p>`,
      note: String.raw`The worksheet has no question 4; it jumps from 3 to 5.` },
    { tier: "essential",
      q: String.raw`<strong>5a.</strong> Find the scalar equation of each of the following planes. State which of the planes, if any, are coincident. \(\vec r = (-8, -1, 8) + s(-5, 1, 4) + t(3, 2, -4)\)`,
      a: String.raw`<p><strong>Type:</strong> vector equation to Cartesian · <strong>Plan:</strong> ① the normal is the cross product of the two direction vectors; ② substitute the point \((-8, -1, 8)\) to find \(D\).</p>
<p>① Need normal: \(\vec n = (-5, 1, 4) \times (3, 2, -4)\).</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{-5} & 1 & 4 & -5 & 1 & \cancel{4} \\ \cancel{3} & 2 & -4 & 3 & 2 & \cancel{-4} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((1)(-4) - (4)(2),\ (4)(3) - (-5)(-4),\ (-5)(2) - (1)(3)\big) \\ &= (-12, -8, -13) \quad\text{or}\quad (12, 8, 13) \end{aligned} \]</div>
<p>Multiplying by \(-1\) makes \(A > 0\). Check: \((12, 8, 13) \cdot (-5, 1, 4) = -60 + 8 + 52 = 0\) and \((12, 8, 13) \cdot (3, 2, -4) = 36 + 16 - 52 = 0\).</p>
<p>② Use the point \((-8, -1, 8)\) in \(12x + 8y + 13z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 12(-8) + 8(-1) + 13(8) + D &= 0 \\ -96 - 8 + 104 + D &= 0 \\ D &= 0 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 12x + 8y + 13z = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>5b.</strong> \(\vec r = (-2, -2, 5) + s(3, 1, -1) + t(4, 1, -4)\)`,
      a: String.raw`<p><strong>Type:</strong> vector equation to Cartesian · <strong>Plan:</strong> cross the direction vectors for the normal, then use \((-2, -2, 5)\) for \(D\).</p>
<p>① \(\vec n = (3, 1, -1) \times (4, 1, -4)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{3} & 1 & -1 & 3 & 1 & \cancel{-1} \\ \cancel{4} & 1 & -4 & 4 & 1 & \cancel{-4} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((1)(-4) - (-1)(1),\ (-1)(4) - (3)(-4),\ (3)(1) - (1)(4)\big) \\ &= (-3, 8, -1) \quad\text{or}\quad (3, -8, 1) \end{aligned} \]</div>
<p>Check: \((3, -8, 1) \cdot (3, 1, -1) = 9 - 8 - 1 = 0\) and \((3, -8, 1) \cdot (4, 1, -4) = 12 - 8 - 4 = 0\).</p>
<p>② Substitute \((-2, -2, 5)\) into \(3x - 8y + z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 3(-2) - 8(-2) + (5) + D &= 0 \\ -6 + 16 + 5 + D &= 0 \\ D &= -15 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 3x - 8y + z - 15 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>5c.</strong> \(\vec r = (2, 0, 0) + s(0, 4, 0) + t(0, 0, -3)\)`,
      a: String.raw`<p><strong>Type:</strong> vector equation to Cartesian (special directions) · <strong>Plan:</strong> the direction vectors are multiples of \(\hat\jmath\) and \(\hat k\), so a normal can be spotted without a full cross product: it must be perpendicular to both the \(y\)- and \(z\)-axes.</p>
<p>\((0, 4, 0) = 4\hat\jmath\) and \((0, 0, -3) = -3\hat k\). A vector \(\perp\) to both \(\hat\jmath\) and \(\hat k\) is \(\hat\imath\):</p>
<div class="eq">\[ \vec n = (1, 0, 0) \]</div>
<p>(The cross product agrees: \((0, 4, 0) \times (0, 0, -3) = (-12, 0, 0)\), a multiple of \((1, 0, 0)\).)</p>
<p>② Substitute \((2, 0, 0)\) into \(x + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 2 + D &= 0 \\ D &= -2 \end{aligned} \]</div>
<p class="answer">\(\therefore\ x - 2 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>5d.</strong> \(\vec r = (-8, 2, 0) + s(4, 0, 3) + t(0, -2, -5)\)`,
      a: String.raw`<p><strong>Type:</strong> vector equation to Cartesian · <strong>Plan:</strong> cross the direction vectors, simplify the normal, then substitute \((-8, 2, 0)\).</p>
<p>① \(\vec n = (4, 0, 3) \times (0, -2, -5)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{4} & 0 & 3 & 4 & 0 & \cancel{3} \\ \cancel{0} & -2 & -5 & 0 & -2 & \cancel{-5} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((0)(-5) - (3)(-2),\ (3)(0) - (4)(-5),\ (4)(-2) - (0)(0)\big) \\ &= (6, 20, -8) \quad\text{or}\quad (3, 10, -4) \end{aligned} \]</div>
<p>Dividing by 2 keeps the numbers small. Check: \((3, 10, -4) \cdot (4, 0, 3) = 12 + 0 - 12 = 0\) and \((3, 10, -4) \cdot (0, -2, -5) = 0 - 20 + 20 = 0\).</p>
<p>② Substitute \((-8, 2, 0)\) into \(3x + 10y - 4z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 3(-8) + 10(2) - 4(0) + D &= 0 \\ -24 + 20 + D &= 0 \\ D &= 4 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 3x + 10y - 4z + 4 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>5e.</strong> \(\vec r = (2, -11, -17) + s(0, 5, 13) + t(0, 3, 10)\)`,
      a: String.raw`<p><strong>Type:</strong> vector equation to Cartesian · <strong>Plan:</strong> both direction vectors have \(x\)-component 0, so they lie parallel to the \(yz\)-plane and the normal should point along the \(x\)-axis. Confirm with the cross product, then find \(D\).</p>
<p>① \(\vec n = (0, 5, 13) \times (0, 3, 10)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{0} & 5 & 13 & 0 & 5 & \cancel{13} \\ \cancel{0} & 3 & 10 & 0 & 3 & \cancel{10} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((5)(10) - (13)(3),\ (13)(0) - (0)(10),\ (0)(3) - (5)(0)\big) \\ &= (11, 0, 0) \quad\text{or}\quad (1, 0, 0) \end{aligned} \]</div>
<p>As predicted, \(\vec n\) is along the \(x\)-axis (perpendicular to the \(yz\)-plane).</p>
<p>② Substitute \((2, -11, -17)\) into \(x + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 2 + D &= 0 \\ D &= -2 \end{aligned} \]</div>
<p class="answer">\(\therefore\ x - 2 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>5f.</strong> \(\vec r = (13, 0, -12) + s(-1, 8, -4) + t(11, 3, -12)\)`,
      a: String.raw`<p><strong>Type:</strong> vector equation to Cartesian · <strong>Plan:</strong> cross the direction vectors, pull out the common factor, then substitute \((13, 0, -12)\).</p>
<p>① \(\vec n = (-1, 8, -4) \times (11, 3, -12)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{-1} & 8 & -4 & -1 & 8 & \cancel{-4} \\ \cancel{11} & 3 & -12 & 11 & 3 & \cancel{-12} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((8)(-12) - (-4)(3),\ (-4)(11) - (-1)(-12),\ (-1)(3) - (8)(11)\big) \\ &= (-96 + 12,\ -44 - 12,\ -3 - 88) \\ &= (-84, -56, -91) = -7(12, 8, 13) \end{aligned} \]</div>
<p>So use \(\vec n = (12, 8, 13)\).</p>
<p>② Substitute \((13, 0, -12)\) into \(12x + 8y + 13z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 12(13) + 8(0) + 13(-12) + D &= 0 \\ 156 - 156 + D &= 0 \\ D &= 0 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 12x + 8y + 13z = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>5 (conclusion).</strong> State which of the planes in 5a–5f, if any, are coincident.`,
      a: String.raw`<p><strong>Type:</strong> identifying coincident planes · <strong>Plan:</strong> two vector equations can look completely different and still describe the same plane. Once each is in Cartesian form, coincident planes have equations that are scalar multiples (here, identical).</p>
<ul>
<li>5a and 5f both give \(12x + 8y + 13z = 0\).</li>
<li>5c and 5e both give \(x - 2 = 0\).</li>
<li>5b (\(3x - 8y + z - 15 = 0\)) and 5d (\(3x + 10y - 4z + 4 = 0\)) do not match any other plane.</li>
</ul>
<p class="answer">\(\therefore\) a and f are coincident, and c and e are coincident.</p>`,
      note: String.raw`This is the big advantage of the Cartesian form: once \(\vec n\) is simplified and \(A > 0\), the same plane always gives the same equation, so you can compare by eye.` },
    { tier: "essential",
      q: String.raw`<strong>6a.</strong> Find the scalar equation of each of the following planes. \(x = 4 + 3s - 2t,\ y = 2 + 4s + 4t,\ z = 1 - 2s - 3t\)`,
      a: String.raw`<p><strong>Type:</strong> parametric equations to Cartesian · <strong>Plan:</strong> read the point from the constants and the direction vectors from the coefficients of \(s\) and \(t\); then cross and substitute exactly as for a vector equation.</p>
<p>Point \((4, 2, 1)\); \(s\)-direction \((3, 4, -2)\); \(t\)-direction \((-2, 4, -3)\).</p>
<p>① \(\vec n = (3, 4, -2) \times (-2, 4, -3)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{3} & 4 & -2 & 3 & 4 & \cancel{-2} \\ \cancel{-2} & 4 & -3 & -2 & 4 & \cancel{-3} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((4)(-3) - (-2)(4),\ (-2)(-2) - (3)(-3),\ (3)(4) - (4)(-2)\big) \\ &= (-4, 13, 20) \quad\text{or}\quad (4, -13, -20) \end{aligned} \]</div>
<p>Check: \((4, -13, -20) \cdot (3, 4, -2) = 12 - 52 + 40 = 0\) and \((4, -13, -20) \cdot (-2, 4, -3) = -8 - 52 + 60 = 0\).</p>
<p>② Substitute \((4, 2, 1)\) into \(4x - 13y - 20z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 4(4) - 13(2) - 20(1) + D &= 0 \\ 16 - 26 - 20 + D &= 0 \\ D &= 30 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 4x - 13y - 20z + 30 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>6b.</strong> \(x = -2t,\ y = 2 - s - 3t,\ z = 5 + 3s\)`,
      a: String.raw`<p><strong>Type:</strong> parametric equations to Cartesian · <strong>Plan:</strong> careful reading is the whole challenge here. A missing constant is 0, and a missing \(s\) or \(t\) term gives a 0 component.</p>
<p>Constants: \(x\) has none, so the point is \((0, 2, 5)\). Coefficients of \(s\): \(x\) has none, \(y\) has \(-1\), \(z\) has \(3\), so \(\vec a = (0, -1, 3)\). Coefficients of \(t\): \(-2, -3\), and none in \(z\), so \(\vec b = (-2, -3, 0)\).</p>
<p>① \(\vec n = (0, -1, 3) \times (-2, -3, 0)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{0} & -1 & 3 & 0 & -1 & \cancel{3} \\ \cancel{-2} & -3 & 0 & -2 & -3 & \cancel{0} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((-1)(0) - (3)(-3),\ (3)(-2) - (0)(0),\ (0)(-3) - (-1)(-2)\big) \\ &= (9, -6, -2) \end{aligned} \]</div>
<p>Check: \((9, -6, -2) \cdot (0, -1, 3) = 0 + 6 - 6 = 0\) and \((9, -6, -2) \cdot (-2, -3, 0) = -18 + 18 + 0 = 0\).</p>
<p>② Substitute \((0, 2, 5)\) into \(9x - 6y - 2z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 9(0) - 6(2) - 2(5) + D &= 0 \\ -12 - 10 + D &= 0 \\ D &= 22 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 9x - 6y - 2z + 22 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>7a.</strong> For each of the following, find the scalar equation of the plane that passes through the given points. \((1, 1, -1), (1, 2, 3), (3, -1, 2)\)`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from three points · <strong>Plan:</strong> subtract points to make two vectors in the plane, cross them for the normal, then substitute any of the points.</p>
<p>Two vectors in the plane (the teacher joins the first point to the second, and the second to the third):</p>
<div class="eq">\[ \begin{aligned} \vec a &= (1, 2, 3) - (1, 1, -1) = (0, 1, 4) \\ \vec b &= (3, -1, 2) - (1, 2, 3) = (2, -3, -1) \end{aligned} \]</div>
<p>① \(\vec n = (0, 1, 4) \times (2, -3, -1)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{0} & 1 & 4 & 0 & 1 & \cancel{4} \\ \cancel{2} & -3 & -1 & 2 & -3 & \cancel{-1} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((1)(-1) - (4)(-3),\ (4)(2) - (0)(-1),\ (0)(-3) - (1)(2)\big) \\ &= (11, 8, -2) \end{aligned} \]</div>
<p>② Substitute \((1, 1, -1)\) into \(11x + 8y - 2z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 11(1) + 8(1) - 2(-1) + D &= 0 \\ 21 + D &= 0 \\ D &= -21 \end{aligned} \]</div>
<p>Check the other points: \((1, 2, 3)\): \(11 + 16 - 6 - 21 = 0\); \((3, -1, 2)\): \(33 - 8 - 4 - 21 = 0\).</p>
<p class="answer">\(\therefore\ 11x + 8y - 2z - 21 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>7b.</strong> \((2, -2, 4), (1, 1, -4), (3, 1, -6)\)`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from three points · <strong>Plan:</strong> make two vectors from a shared point, cross, simplify, substitute.</p>
<p>Using \((1, 1, -4)\) as the shared point:</p>
<div class="eq">\[ \begin{aligned} \vec a &= (2, -2, 4) - (1, 1, -4) = (1, -3, 8) \\ \vec b &= (3, 1, -6) - (1, 1, -4) = (2, 0, -2) \end{aligned} \]</div>
<p>① \(\vec n = (1, -3, 8) \times (2, 0, -2)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{1} & -3 & 8 & 1 & -3 & \cancel{8} \\ \cancel{2} & 0 & -2 & 2 & 0 & \cancel{-2} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((-3)(-2) - (8)(0),\ (8)(2) - (1)(-2),\ (1)(0) - (-3)(2)\big) \\ &= (6, 18, 6) \quad\text{or}\quad (1, 3, 1) \end{aligned} \]</div>
<p>② Substitute \((2, -2, 4)\) into \(x + 3y + z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} (2) + 3(-2) + (4) + D &= 0 \\ D &= 0 \end{aligned} \]</div>
<p>Check: \((1, 1, -4)\): \(1 + 3 - 4 = 0\); \((3, 1, -6)\): \(3 + 3 - 6 = 0\).</p>
<p class="answer">\(\therefore\ x + 3y + z = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>7c.</strong> \((1, 1, 1), (-1, 1, 1), (2, 1, 2)\)`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from three points · <strong>Plan:</strong> same method. Notice in advance that every point has \(y = 1\), so expect the plane \(y = 1\).</p>
<div class="eq">\[ \begin{aligned} \vec a &= (1, 1, 1) - (-1, 1, 1) = (2, 0, 0) \\ \vec b &= (2, 1, 2) - (1, 1, 1) = (1, 0, 1) \end{aligned} \]</div>
<p>① \(\vec n = (2, 0, 0) \times (1, 0, 1)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{2} & 0 & 0 & 2 & 0 & \cancel{0} \\ \cancel{1} & 0 & 1 & 1 & 0 & \cancel{1} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((0)(1) - (0)(0),\ (0)(1) - (2)(1),\ (2)(0) - (0)(1)\big) \\ &= (0, -2, 0) \quad\text{or}\quad (0, 1, 0) \end{aligned} \]</div>
<p>② Substitute \((1, 1, 1)\) into \(y + D = 0\):</p>
<div class="eq">\[ \begin{aligned} (1) + D &= 0 \\ D &= -1 \end{aligned} \]</div>
<p class="answer">\(\therefore\ y - 1 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>7d.</strong> \((1, 3, 0), (0, 5, 2), (3, 4, -2)\)`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from three points · <strong>Plan:</strong> make two vectors from \((0, 5, 2)\), cross, substitute.</p>
<div class="eq">\[ \begin{aligned} \vec a &= (1, 3, 0) - (0, 5, 2) = (1, -2, -2) \\ \vec b &= (3, 4, -2) - (0, 5, 2) = (3, -1, -4) \end{aligned} \]</div>
<p>① \(\vec n = (1, -2, -2) \times (3, -1, -4)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{1} & -2 & -2 & 1 & -2 & \cancel{-2} \\ \cancel{3} & -1 & -4 & 3 & -1 & \cancel{-4} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((-2)(-4) - (-2)(-1),\ (-2)(3) - (1)(-4),\ (1)(-1) - (-2)(3)\big) \\ &= (8 - 2,\ -6 + 4,\ -1 + 6) = (6, -2, 5) \end{aligned} \]</div>
<p>② Substitute \((1, 3, 0)\) into \(6x - 2y + 5z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 6(1) - 2(3) + 5(0) + D &= 0 \\ D &= 0 \end{aligned} \]</div>
<p>Check: \((0, 5, 2)\): \(0 - 10 + 10 = 0\); \((3, 4, -2)\): \(18 - 8 - 10 = 0\).</p>
<p class="answer">\(\therefore\ 6x - 2y + 5z = 0\)</p>` },
    { tier: "likely",
      q: String.raw`<strong>8.</strong> What is the scalar equation of the plane that contains the \(x\)-axis and the point \((4, -2, 1)\)?`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a line and a point · <strong>Plan:</strong> "contains the \(x\)-axis" gives you one direction vector, \((1, 0, 0)\), and a point on it, the origin. Join the origin to \((4, -2, 1)\) for a second direction, then cross.</p>
<p>\(\vec a = (1, 0, 0)\) (direction of the \(x\)-axis). Another point on the \(x\)-axis is \((0, 0, 0)\), so</p>
<div class="eq">\[ \vec b = (4, -2, 1) - (0, 0, 0) = (4, -2, 1) \]</div>
<p>① \(\vec n = (1, 0, 0) \times (4, -2, 1)\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{1} & 0 & 0 & 1 & 0 & \cancel{0} \\ \cancel{4} & -2 & 1 & 4 & -2 & \cancel{1} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((0)(1) - (0)(-2),\ (0)(4) - (1)(1),\ (1)(-2) - (0)(4)\big) \\ &= (0, -1, -2) \quad\text{or}\quad (0, 1, 2) \end{aligned} \]</div>
<p>② The origin is on the plane, so substitute \((0, 0, 0)\) into \(y + 2z + D = 0\): \(D = 0\).</p>
<p>Check \((4, -2, 1)\): \(-2 + 2(1) = 0\).</p>
<p class="answer">\(\therefore\ y + 2z = 0\)</p>` },
    { tier: "likely",
      q: String.raw`<strong>9.</strong> Find the scalar equation of the plane that contains the intersecting lines \(\dfrac{x - 2}{1} = \dfrac{y}{2} = \dfrac{z + 3}{3}\) and \(\dfrac{x - 2}{-3} = \dfrac{y}{4} = \dfrac{z + 3}{2}\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from two intersecting lines · <strong>Plan:</strong> each line lies in the plane, so each line's direction vector is a direction of the plane. Read them from the denominators, read a shared point from the numerators, then cross and substitute.</p>
<p>Both symmetric equations have numerators \(x - 2,\ y,\ z + 3\), so both lines pass through \((2, 0, -3)\). The denominators give the direction vectors:</p>
<div class="eq">\[ \vec a = (1, 2, 3), \qquad \vec b = (-3, 4, 2) \]</div>
<p>① \(\vec n = \vec a \times \vec b\):</p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{1} & 2 & 3 & 1 & 2 & \cancel{3} \\ \cancel{-3} & 4 & 2 & -3 & 4 & \cancel{2} \end{array} \]</div>
<div class="eq">\[ \begin{aligned} \vec n &= \big((2)(2) - (3)(4),\ (3)(-3) - (1)(2),\ (1)(4) - (2)(-3)\big) \\ &= (-8, -11, 10) \quad\text{or}\quad (8, 11, -10) \end{aligned} \]</div>
<p>Check: \((8, 11, -10) \cdot (1, 2, 3) = 8 + 22 - 30 = 0\) and \((8, 11, -10) \cdot (-3, 4, 2) = -24 + 44 - 20 = 0\).</p>
<p>② Substitute \((2, 0, -3)\) into \(8x + 11y - 10z + D = 0\):</p>
<div class="eq">\[ \begin{aligned} 8(2) + 11(0) - 10(-3) + D &= 0 \\ 16 + 30 + D &= 0 \\ D &= -46 \end{aligned} \]</div>
<p class="answer">\(\therefore\ 8x + 11y - 10z - 46 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>10a.</strong> Determine whether the following pairs of planes are coincident, parallel and distinct, or neither. \(x + 3y - z - 2 = 0\) and \(2x + 6y - 2z - 8 = 0\)`,
      a: String.raw`<p><strong>Type:</strong> comparing two planes · <strong>Plan:</strong> first compare normals (parallel or not?). If parallel, compare the whole equations, constant included, to separate coincident from distinct.</p>
<p>\(\vec n_1 = (1, 3, -1)\), \(\vec n_2 = (2, 6, -2)\). \(\vec n_2 = 2\vec n_1\), so the normals are parallel and the planes are parallel.</p>
<p>Are the Cartesian equations scalar multiples? Multiply the first by 2:</p>
<div class="eq">\[ 2(x + 3y - z - 2) = 2x + 6y - 2z - 4 = 0 \]</div>
<p>The constant is \(-4\), not \(-8\), so the equations are not scalar multiples.</p>
<p class="answer">\(\therefore\) not coincident, but parallel: parallel and distinct.</p>` },
    { tier: "essential",
      q: String.raw`<strong>10b.</strong> \(2x + y + z - 3 = 0\) and \(6x + 2y + 2z - 9 = 0\)`,
      a: String.raw`<p><strong>Type:</strong> comparing two planes · <strong>Plan:</strong> test whether one normal is a scalar multiple of the other by solving for \(k\) component by component.</p>
<p>\(\vec n_1 = (2, 1, 1)\), \(\vec n_2 = (6, 2, 2)\). Let \(\vec n_1 = k\vec n_2\):</p>
<div class="eq">\[ 2 = 6k \Rightarrow k = \tfrac13, \qquad 1 = 2k \Rightarrow k = \tfrac12, \qquad 1 = 2k \Rightarrow k = \tfrac12 \]</div>
<p>Since \(k\) is not consistent, the normals are not parallel, so the planes are not parallel (and cannot be coincident).</p>
<p class="answer">\(\therefore\) neither: the planes intersect (in a line).</p>`,
      note: String.raw`A common trap: two of the three components match with \(k = \frac12\). All three must give the same \(k\).` },
    { tier: "essential",
      q: String.raw`<strong>10c.</strong> \(3x - 3y + z - 2 = 0\) and \(6x - 6y + 2z - 4 = 0\)`,
      a: String.raw`<p><strong>Type:</strong> comparing two planes · <strong>Plan:</strong> look for a single number that turns the first equation into the second, constant included.</p>
<p>Multiply the first equation by 2:</p>
<div class="eq">\[ 2(3x - 3y + z - 2) = 6x - 6y + 2z - 4 = 0 \]</div>
<p>This is exactly the second equation, so the equations are scalar multiples.</p>
<p class="answer">\(\therefore\) coincident planes.</p>` },
    { tier: "essential",
      q: String.raw`<strong>10d.</strong> \(2x - 4y + 2z - 6 = 0\) and \(3x - 6y + 3z - 9 = 0\)`,
      a: String.raw`<p><strong>Type:</strong> comparing two planes · <strong>Plan:</strong> the multiplier does not have to be a whole number. Compare \(x\)-coefficients: \(2 \to 3\) suggests \(\times\frac32\).</p>
<p>Multiply the first equation by \(\frac32\):</p>
<div class="eq">\[ \tfrac32(2x - 4y + 2z - 6) = 3x - 6y + 3z - 9 = 0 \]</div>
<p>This is the second equation, so the equations are scalar multiples.</p>
<p class="answer">\(\therefore\) coincident planes.</p>`,
      note: String.raw`An easier way to see it: both equations simplify to \(x - 2y + z - 3 = 0\) (divide the first by 2 and the second by 3).` },
    { tier: "essential",
      q: String.raw`<strong>11a.</strong> Find a vector equation for the plane with scalar equation \(2x - y + 3z - 24 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian to vector equation · <strong>Plan:</strong> a vector equation needs a point and two directions in the plane. Find three easy points (the intercepts), join them to get two direction vectors, and use one point as \(\vec r_0\).</p>
<p>Find 3 points (easy: \(x\)-int, \(y\)-int, \(z\)-int), setting the other two variables to 0 each time:</p>
<div class="eq">\[ \begin{aligned} x\text{-int: } 2x - 24 = 0 &\Rightarrow x = 12 && (12, 0, 0) \\ y\text{-int: } -y - 24 = 0 &\Rightarrow y = -24 && (0, -24, 0) \\ z\text{-int: } 3z - 24 = 0 &\Rightarrow z = 8 && (0, 0, 8) \end{aligned} \]</div>
<p>Join the points to get two vectors in the plane:</p>
<div class="eq">\[ \begin{aligned} \vec a &= (12, 0, 0) - (0, -24, 0) = (12, 24, 0) \\ \vec b &= (12, 0, 0) - (0, 0, 8) = (12, 0, -8) \end{aligned} \]</div>
<p>Check with \(\vec n = (2, -1, 3)\): \((2, -1, 3) \cdot (12, 24, 0) = 24 - 24 = 0\) and \((2, -1, 3) \cdot (12, 0, -8) = 24 - 24 = 0\). Both lie in the plane, and they are not collinear.</p>
<p class="answer">\(\therefore\ \vec r = (12, 0, 0) + s(12, 24, 0) + t(12, 0, -8),\ s, t \in \mathbb{R}\), or simplified, \(\vec r = (12, 0, 0) + s(1, 2, 0) + t(3, 0, -2)\)</p>`,
      note: String.raw`The handwritten solution has \(\vec b = (12, 0, 8)\) and carries it into the boxed answer; it should be \((12, 0, -8)\), the vector from \((0, 0, 8)\) to \((12, 0, 0)\). You can see the slip with the normal check: \((2, -1, 3) \cdot (12, 0, 8) = 48 \neq 0\), so \((12, 0, 8)\) does not lie in the plane. The printed answer key gives \(\vec r = (0, -24, 0) + s(1, 2, 0) + t(0, 3, 1)\), which is also correct: vector equations of a plane are not unique.` },
    { tier: "essential",
      q: String.raw`<strong>11b.</strong> \(3x - 5z + 15 = 0\)`,
      a: String.raw`<p><strong>Type:</strong> Cartesian to vector equation (missing variable) · <strong>Plan:</strong> same idea, but there is no \(y\)-term, so there is no \(y\)-intercept. Since \(y\) can be anything, get the third point by changing \(y\) in a point you already have.</p>
<p>Find 3 points:</p>
<div class="eq">\[ \begin{aligned} x\text{-int: } 3x + 15 = 0 &\Rightarrow x = -5 && (-5, 0, 0) \\ z\text{-int: } -5z + 15 = 0 &\Rightarrow z = 3 && (0, 0, 3) \end{aligned} \]</div>
<p>\(y\) can be anything: let \(y = 1\) with \(x = 0, z = 3\) to get \((0, 1, 3)\).</p>
<p>Two vectors in the plane:</p>
<div class="eq">\[ \begin{aligned} \vec a &= (0, 1, 3) - (-5, 0, 0) = (5, 1, 3) \\ \vec b &= (0, 1, 3) - (0, 0, 3) = (0, 1, 0) \end{aligned} \]</div>
<p>Check with \(\vec n = (3, 0, -5)\): \((3, 0, -5) \cdot (5, 1, 3) = 15 - 15 = 0\) and \((3, 0, -5) \cdot (0, 1, 0) = 0\).</p>
<p class="answer">\(\therefore\ \vec r = (-5, 0, 0) + s(5, 1, 3) + t(0, 1, 0),\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`The printed answer key gives \(\vec r = (0, 0, 3) + s(5, 0, 3) + t(0, 1, 0)\). Same plane: \((5, 0, 3) = (5, 1, 3) - (0, 1, 0)\), and \((0, 0, 3)\) is on the plane. Notice \(\vec b = (0, 1, 0)\) appears in both: the plane is parallel to the \(y\)-axis, as the missing \(y\) told you.` },
    { tier: "likely",
      q: String.raw`<strong>12a.</strong> Which of the following lines is parallel to the plane \(4x + y - z - 10 = 0\)? Do any of the lines lie in the plane? \(\vec r = (3, 0, 2) + t(1, -2, 2)\)`,
      a: String.raw`<p><strong>Type:</strong> line versus plane · <strong>Plan:</strong> if the line is parallel to the plane, its direction vector is perpendicular to the normal, so test \(\vec n \cdot \vec m = 0\). If it is parallel, test one point of the line in the plane's equation to see whether the line lies in it.</p>
<p>If \(\parallel\), then \(\vec n \cdot \vec m = 0\). Here \(\vec n = (4, 1, -1)\) and \(\vec m = (1, -2, 2)\):</p>
<div class="eq">\[ \vec n \cdot \vec m = 4 - 2 - 2 = 0 \]</div>
<p>So the line is parallel to the plane. Check the point \((3, 0, 2)\):</p>
<div class="eq">\[ \begin{aligned} \text{LS} &= 4x + y - z - 10 = 4(3) + (0) - (2) - 10 = 0 \\ \text{RS} &= 0 \end{aligned} \]</div>
<p>LS = RS, so the point is on the plane, and a parallel line with one point in the plane lies entirely in it.</p>
<p class="answer">\(\therefore\) parallel to the plane, and the line lies on the plane.</p>` },
    { tier: "likely",
      q: String.raw`<strong>12b.</strong> \(x = -3t,\ y = -5 + 2t,\ z = -10t\)`,
      a: String.raw`<p><strong>Type:</strong> line versus plane · <strong>Plan:</strong> read \(\vec m\) from the coefficients of \(t\) and a point from the constants, then run the same two tests.</p>
<p>\(\vec n = (4, 1, -1)\), \(\vec m = (-3, 2, -10)\):</p>
<div class="eq">\[ \vec n \cdot \vec m = -12 + 2 + 10 = 0 \]</div>
<p>So the line is parallel to the plane. Check the point \((0, -5, 0)\):</p>
<div class="eq">\[ \begin{aligned} \text{LS} &= 4(0) + (-5) - (0) - 10 = -15 \\ \text{RS} &= 0 \end{aligned} \]</div>
<p>LS \(\neq\) RS, so the line is not in the plane.</p>
<p class="answer">\(\therefore\) parallel to the plane, but the line does not lie in the plane.</p>` },
    { tier: "likely",
      q: String.raw`<strong>12c.</strong> \(\dfrac{x - 1}{4} = \dfrac{y + 6}{-1} = \dfrac{z}{1}\)`,
      a: String.raw`<p><strong>Type:</strong> line versus plane · <strong>Plan:</strong> read \(\vec m\) from the denominators and test \(\vec n \cdot \vec m\). If it is not zero, the line is not parallel, so it cannot lie in the plane.</p>
<p>\(\vec n = (4, 1, -1)\), \(\vec m = (4, -1, 1)\):</p>
<div class="eq">\[ \vec n \cdot \vec m = 16 - 1 - 1 = 14 \neq 0 \]</div>
<p class="answer">\(\therefore\) the line is not parallel to the plane, so it does not lie in the plane (it crosses the plane at one point).</p>`,
      note: String.raw`Overall for question 12: lines a and b are parallel to the plane, and only line a lies in it. If you want the crossing point for c: substitute \(x = 1 + 4t,\ y = -6 - t,\ z = t\) into the plane to get \(14t - 12 = 0\), so \(t = \frac67\) and the point is \(\left(\frac{31}{7}, -\frac{48}{7}, \frac67\right)\).` },
    { tier: "essential",
      q: String.raw`<strong>13a.</strong> The angle between two planes is defined as the angle between their normals. Determine the angle \(\theta\ (0^\circ \le \theta \le 90^\circ)\), to the nearest degree, between the given planes. \(2x + 3y - z + 9 = 0\) and \(x + 2y + 4 = 0\)`,
      a: String.raw`<p><strong>Type:</strong> angle between two planes · <strong>Plan:</strong> read both normals and use the dot-product angle formula. Watch the missing \(z\) in the second plane: its \(z\)-component is 0.</p>
<p>\(\vec n_1 = (2, 3, -1)\), \(\vec n_2 = (1, 2, 0)\).</p>
<div class="eq">\[ \begin{aligned} \cos\theta &= \frac{\vec n_1 \cdot \vec n_2}{|\vec n_1||\vec n_2|} \\ &= \frac{2 + 6 + 0}{\sqrt{14}\,\sqrt5} \\ &= \frac{8}{\sqrt{70}} \approx 0.956 \end{aligned} \]</div>
<p class="answer">\(\therefore\ \theta \approx 17^\circ\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>13b.</strong> \(x - y - z - 1 = 0\) and \(2x + 3y - z + 4 = 0\)`,
      a: String.raw`<p><strong>Type:</strong> angle between two planes · <strong>Plan:</strong> same formula; compute the dot product first, since a zero dot product ends the question immediately.</p>
<p>\(\vec n_1 = (1, -1, -1)\), \(\vec n_2 = (2, 3, -1)\).</p>
<div class="eq">\[ \begin{aligned} \cos\theta &= \frac{\vec n_1 \cdot \vec n_2}{|\vec n_1||\vec n_2|} = \frac{2 - 3 + 1}{\sqrt3\,\sqrt{14}} \\ \cos\theta &= 0 \end{aligned} \]</div>
<p class="answer">\(\therefore\ \theta = 90^\circ\) (the planes are perpendicular)</p>` },
    { tier: "essential",
      q: String.raw`<strong>Extra 11a.</strong> Find the distance between the point \((7, 7, -7)\) and the plane \(6y - z + 5 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> minimum distance from a point to a plane · <strong>Plan:</strong> the teacher projects \(\overrightarrow{P_0P}\) onto the normal, which needs a point \(P_0\) on the plane. The boxed formula gives the same result in one line, shown as a check.</p>
<p>Need a point \(P_0\) on the plane. Set \(x = y = 0\) in \(6y - z + 5 = 0\): \(-z + 5 = 0\), so \(z = 5\) and \(P_0 = (0, 0, 5)\). The normal is \(\vec n = (0, 6, -1)\) (no \(x\)-term).</p>
<div class="eq">\[ \overrightarrow{P_0P} = (7, 7, -7) - (0, 0, 5) = (7, 7, -12) \]</div>
<div class="eq">\[ \begin{aligned} d &= \frac{|\overrightarrow{P_0P} \cdot \vec n|}{|\vec n|} = \frac{|(7, 7, -12) \cdot (0, 6, -1)|}{\sqrt{0 + 36 + 1}} \\ &= \frac{|0 + 42 + 12|}{\sqrt{37}} = \frac{54}{\sqrt{37}} = \frac{54\sqrt{37}}{37} \end{aligned} \]</div>
<p>Check with the formula: \(d = \frac{|0(7) + 6(7) - (-7) + 5|}{\sqrt{37}} = \frac{|42 + 7 + 5|}{\sqrt{37}} = \frac{54}{\sqrt{37}}\).</p>
<p class="answer">\(\therefore\ d = \dfrac{54\sqrt{37}}{37} \approx 8.88\) units</p>`,
      note: String.raw`The worksheet numbers two different questions "11". This distance question is the second one, labelled "Extra 11" in the answer key.` },
    { tier: "essential",
      q: String.raw`<strong>Extra 11b.</strong> Find the distance between the point \((3, 2, 1)\) and the plane \(3x + 2y + z = 10\).`,
      a: String.raw`<p><strong>Type:</strong> minimum distance from a point to a plane · <strong>Plan:</strong> get the plane into "= 0" form so that \(D = -10\), find a point on it, then project onto the normal.</p>
<p>Rewrite as \(3x + 2y + z - 10 = 0\), so \(\vec n = (3, 2, 1)\). A point on the plane: set \(x = y = 0\), then \(z = 10\), so \(P_0 = (0, 0, 10)\).</p>
<div class="eq">\[ \overrightarrow{P_0P} = (3, 2, 1) - (0, 0, 10) = (3, 2, -9) \]</div>
<div class="eq">\[ \begin{aligned} d &= \frac{|\overrightarrow{P_0P} \cdot \vec n|}{|\vec n|} = \frac{|9 + 4 - 9|}{\sqrt{9 + 4 + 1}} \\ &= \frac{4}{\sqrt{14}} = \frac{4\sqrt{14}}{14} = \frac{2\sqrt{14}}{7} \end{aligned} \]</div>
<p>Check with the formula: \(d = \frac{|3(3) + 2(2) + 1 - 10|}{\sqrt{14}} = \frac{4}{\sqrt{14}}\).</p>
<p class="answer">\(\therefore\ d = \dfrac{2\sqrt{14}}{7} \approx 1.07\) units</p>` }
  ]
});

window.QUIZ.push(
  { id: "q37-01", lesson: "3.7", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`What is a normal vector to the plane \(4x - 3y + z - 7 = 0\)?`,
    options: [String.raw`\((-3, 4, 1)\)`, String.raw`\((4, -3, -7)\)`, String.raw`\((4, -3, 1)\)`, String.raw`\((4, 3, 1)\)`],
    answer: 2,
    explain: String.raw`The coefficients of \(x, y, z\) are the normal: \((4, -3, 1)\). The constant \(-7\) is \(D\), which sets the position of the plane, not its tilt, so \((4, -3, -7)\) is wrong. \((4, 3, 1)\) drops the minus sign on \(y\), and \((-3, 4, 1)\) swaps the first two components.` },
  { id: "q37-02", lesson: "3.7", type: "tf", kind: "knowledge", tier: "likely",
    q: String.raw`If \(\vec n \cdot \vec u = 0\) and \(\vec n \cdot \vec v = 0\) for two vectors \(\vec u\) and \(\vec v\) in a plane, then \(\vec n\) must be a normal to the plane.`,
    answer: false,
    explain: String.raw`False. The theorem needs \(\vec u\) and \(\vec v\) to be <em>non-collinear</em>. If \(\vec v = k\vec u\), many vectors are perpendicular to both (any vector perpendicular to the line along \(\vec u\)), and most of them are not normal to the plane. With non-collinear \(\vec u, \vec v\), every vector in the plane is \(a\vec u + b\vec v\), and the statement becomes true.` },
  { id: "q37-03", lesson: "3.7", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which is the Cartesian equation of the plane through \(P_0(1, -2, 3)\) with normal \(\vec n = (2, 1, -4)\)?`,
    options: [String.raw`\(2x + y - 4z + 12 = 0\)`, String.raw`\(2x + y - 4z - 12 = 0\)`, String.raw`\(x - 2y + 3z + 12 = 0\)`, String.raw`\(2x + y - 4z = 0\)`],
    answer: 0,
    explain: String.raw`Start with \(2x + y - 4z + D = 0\) and substitute the point: \(2(1) + (-2) - 4(3) + D = 0\), so \(-12 + D = 0\) and \(D = 12\). The option with \(-12\) has the sign of \(D\) flipped. \(x - 2y + 3z + 12 = 0\) uses the point as the normal (the roles are swapped). \(2x + y - 4z = 0\) forgets step ② and passes through the origin, which \(P_0\) does not satisfy.` },
  { id: "q37-04", lesson: "3.7", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Find a normal to the plane \(\vec r = (1, 0, 2) + s(1, 2, 0) + t(0, 1, 3),\ s, t \in \mathbb{R}\).`,
    options: [String.raw`\((1, 3, 3)\)`, String.raw`\((6, 3, 1)\)`, String.raw`\((1, 0, 2)\)`, String.raw`\((6, -3, 1)\)`],
    answer: 3,
    explain: String.raw`Cross the direction vectors: \((1, 2, 0) \times (0, 1, 3) = \big((2)(3) - (0)(1),\ (0)(0) - (1)(3),\ (1)(1) - (2)(0)\big) = (6, -3, 1)\). Check: \((6, -3, 1) \cdot (1, 2, 0) = 0\) and \((6, -3, 1) \cdot (0, 1, 3) = 0\). \((6, 3, 1)\) is the classic middle-component sign slip. \((1, 3, 3)\) adds the direction vectors instead of crossing them. \((1, 0, 2)\) is the position vector, which says where the plane is, not how it tilts.` },
  { id: "q37-05", lesson: "3.7", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Using the normal \((6, -3, 1)\), what is the Cartesian equation of the plane \(\vec r = (1, 0, 2) + s(1, 2, 0) + t(0, 1, 3)\)?`,
    options: [String.raw`\(6x - 3y + z + 8 = 0\)`, String.raw`\(6x - 3y + z - 8 = 0\)`, String.raw`\(6x - 3y + z = 0\)`, String.raw`\(x + 2z - 5 = 0\)`],
    answer: 1,
    explain: String.raw`Substitute the point \((1, 0, 2)\) into \(6x - 3y + z + D = 0\): \(6 - 0 + 2 + D = 0\), so \(D = -8\). The \(+8\) option has the sign of \(D\) wrong. \(6x - 3y + z = 0\) skips step ②. \(x + 2z - 5 = 0\) wrongly uses the position vector \((1, 0, 2)\) as the normal.` },
  { id: "q37-06", lesson: "3.7", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`The plane \(3x - 5y + 2z = 0\) passes through the origin.`,
    answer: true,
    explain: String.raw`True. Substituting \((0, 0, 0)\) leaves only \(D\), and here \(D = 0\), so the origin satisfies the equation. In general a plane passes through the origin exactly when \(D = 0\).` },
  { id: "q37-07", lesson: "3.7", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`The planes \(2x - y + 3z - 4 = 0\) and \(-4x + 2y - 6z + 8 = 0\) are`,
    options: [String.raw`parallel and distinct`, String.raw`perpendicular`, String.raw`coincident`, String.raw`intersecting at an angle that is not 90°`],
    answer: 2,
    explain: String.raw`The normals \((2, -1, 3)\) and \((-4, 2, -6)\) are multiples (\(k = -2\)), so the planes are parallel. Multiply the whole first equation by \(-2\): \(-4x + 2y - 6z + 8 = 0\), exactly the second equation, constant included. So they are the same plane. "Parallel and distinct" would need the constants to disagree. Perpendicular would need \(\vec n_1 \cdot \vec n_2 = 0\), but here it is \(-28\).` },
  { id: "q37-08", lesson: "3.7", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which plane is perpendicular to \(x + 2y - z + 5 = 0\)?`,
    options: [String.raw`\(2x + 4y - 2z + 1 = 0\)`, String.raw`\(x + 2y + z = 0\)`, String.raw`\(-x - 2y + z = 0\)`, String.raw`\(3x - y + z - 2 = 0\)`],
    answer: 3,
    explain: String.raw`Perpendicular planes have perpendicular normals: \((1, 2, -1) \cdot (3, -1, 1) = 3 - 2 - 1 = 0\). The normals \((2, 4, -2)\) and \((-1, -2, 1)\) are scalar multiples of \((1, 2, -1)\), so those planes are <em>parallel</em>, not perpendicular. For \(x + 2y + z = 0\), the dot product is \(1 + 4 - 1 = 4 \neq 0\).` },
  { id: "q37-09", lesson: "3.7", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`What is the distance from the point \((1, 2, -1)\) to the plane \(2x + y - 2z + 3 = 0\)?`,
    options: [String.raw`\(9\)`, String.raw`\(3\)`, String.raw`\(\frac53\)`, String.raw`\(1\)`],
    answer: 1,
    explain: String.raw`\(d = \frac{|2(1) + 2 - 2(-1) + 3|}{\sqrt{4 + 1 + 4}} = \frac{|2 + 2 + 2 + 3|}{3} = \frac93 = 3\). Answering 9 forgets to divide by \(|\vec n|\). \(\frac53\) comes from treating \(-2z\) as \(-2\) at \(z = -1\) (it is \(+2\)). 1 comes from using \(D = -3\) instead of \(+3\).` },
  { id: "q37-10", lesson: "3.7", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Find the angle between the planes \(x + y - 3 = 0\) and \(x + z + 2 = 0\).`,
    options: [String.raw`\(30^\circ\)`, String.raw`\(45^\circ\)`, String.raw`\(60^\circ\)`, String.raw`\(90^\circ\)`],
    answer: 2,
    explain: String.raw`The normals are \((1, 1, 0)\) and \((1, 0, 1)\) (a missing variable gives a 0 component). \(\cos\theta = \frac{1 + 0 + 0}{\sqrt2\,\sqrt2} = \frac12\), so \(\theta = 60^\circ\). \(90^\circ\) would need a zero dot product. \(30^\circ\) is what you get by mistaking \(\frac12\) for \(\sin\theta\). \(45^\circ\) comes from using only one of the magnitudes, \(\frac{1}{\sqrt2}\).` },
  { id: "q37-11", lesson: "3.7", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`In R³, the plane \(y - 4 = 0\) is`,
    options: [String.raw`parallel to the \(y\)-axis`, String.raw`parallel to the \(xz\)-plane`, String.raw`a line parallel to the \(x\)-axis`, String.raw`parallel to the \(xy\)-plane`],
    answer: 1,
    explain: String.raw`Its normal is \((0, 1, 0)\), along the \(y\)-axis, and \(x\) and \(z\) are free. So it is the "wall" of points with \(y = 4\), parallel to the \(xz\)-plane. It is <em>perpendicular</em> to the \(y\)-axis, not parallel to it. In R³ one linear equation is a plane, never a line. The \(xy\)-plane is \(z = 0\), whose normal is \((0, 0, 1)\).` },
  { id: "q37-12", lesson: "3.7", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`How is the line \(\vec r = (2, 1, 0) + t(1, 1, -3)\) related to the plane \(2x + y + z - 7 = 0\)?`,
    options: [String.raw`It crosses the plane at exactly one point.`, String.raw`It is perpendicular to the plane.`, String.raw`It lies in the plane.`, String.raw`It is parallel to the plane but does not lie in it.`],
    answer: 3,
    explain: String.raw`\(\vec n \cdot \vec m = (2, 1, 1) \cdot (1, 1, -3) = 2 + 1 - 3 = 0\), so the line is parallel to the plane and cannot cross it at one point. Test the point \((2, 1, 0)\): \(4 + 1 + 0 - 7 = -2 \neq 0\), so it is not on the plane and the line does not lie in it. Perpendicular would need \(\vec m\) to be a multiple of \(\vec n\), which it is not.` },
  { id: "q37-13", lesson: "3.7", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`In \(Ax + By + Cz + D = 0\), the vector \((A, B, C)\) is a direction vector of the plane.`,
    answer: false,
    explain: String.raw`False. \((A, B, C)\) is the <em>normal</em>: it is perpendicular to every direction vector of the plane. A direction vector \(\vec a\) in the plane satisfies \((A, B, C) \cdot \vec a = 0\). Using the normal as a direction vector when converting to vector form is a common mistake.` },
  { id: "q37-14", lesson: "3.7", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which point lies on the plane \(2x - 3y + z - 6 = 0\)?`,
    options: [String.raw`\((1, -1, 1)\)`, String.raw`\((2, -3, 1)\)`, String.raw`\((0, 2, 0)\)`, String.raw`\((3, 0, -1)\)`],
    answer: 0,
    explain: String.raw`Substitute each point; it is on the plane only if the left side is 0. \((1, -1, 1)\): \(2 + 3 + 1 - 6 = 0\). \((2, -3, 1)\) is the normal, not a point on the plane: \(4 + 9 + 1 - 6 = 8\). \((0, 2, 0)\): \(-6 - 6 = -12\); the true \(y\)-intercept is \((0, -2, 0)\). \((3, 0, -1)\): \(6 - 1 - 6 = -1\).` },
  { id: "q37-15", lesson: "3.7", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Find the Cartesian equation of the plane through \(A(1, 0, 0)\), \(B(0, 2, 0)\) and \(C(0, 0, 3)\).`,
    options: [String.raw`\(x + 2y + 3z - 1 = 0\)`, String.raw`\(6x + 3y + 2z + 6 = 0\)`, String.raw`\(6x - 3y + 2z - 6 = 0\)`, String.raw`\(6x + 3y + 2z - 6 = 0\)`],
    answer: 3,
    explain: String.raw`\(\overrightarrow{AB} = (-1, 2, 0)\), \(\overrightarrow{AC} = (-1, 0, 3)\), and \(\overrightarrow{AB} \times \overrightarrow{AC} = (6, 3, 2)\). Substituting \(A\): \(6 + D = 0\), so \(D = -6\). Check \(B\): \(6 - 6 = 0\); \(C\): \(6 - 6 = 0\). The \(+6\) option has the wrong sign on \(D\). \(6x - 3y + 2z - 6 = 0\) has the middle-component sign slip (it fails for \(B\)). \(x + 2y + 3z - 1 = 0\) wrongly uses the intercepts as the normal; it fails for \(B\) and \(C\).` },
  { id: "q37-16", lesson: "3.7", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`When finding a plane through three points \(A, B, C\), why do you check that \(\overrightarrow{AB}\) and \(\overrightarrow{AC}\) are not collinear?`,
    options: [String.raw`The cross product of collinear vectors is undefined, so the calculation cannot be done.`, String.raw`If they are collinear, their cross product is \((0, 0, 0)\), and the three points lie on a line, so they do not determine one plane.`, String.raw`Collinear vectors always give \(D = 0\), so the plane would have to pass through the origin.`, String.raw`Collinear vectors produce a normal with \(A < 0\).`],
    answer: 1,
    explain: String.raw`Three collinear points lie on one line, and infinitely many planes contain a line. The cross product reflects this: it is defined but comes out as the zero vector, which cannot be a normal. Nothing about collinearity forces \(D = 0\) or a negative \(A\).` },
  { id: "q37-17", lesson: "3.7", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which is a vector equation of the plane \(x - 2y + 4z - 8 = 0\)?`,
    options: [String.raw`\(\vec r = (8, 0, 0) + s(1, -2, 4) + t(2, 1, 0)\)`, String.raw`\(\vec r = (1, -2, 4) + s(2, 1, 0) + t(4, 0, -1)\)`, String.raw`\(\vec r = (8, 0, 0) + s(2, 1, 0) + t(4, 0, -1)\)`, String.raw`\(\vec r = (8, 0, 0) + s(2, 1, 0) + t(4, 2, 0)\)`],
    answer: 2,
    explain: String.raw`You need a point on the plane and two non-collinear vectors perpendicular to \(\vec n = (1, -2, 4)\). \((8, 0, 0)\) is the \(x\)-intercept; \((2, 1, 0) \cdot \vec n = 0\) and \((4, 0, -1) \cdot \vec n = 0\), and they are not multiples. The first option uses the normal as a direction vector. The second uses the normal as the point, but \((1, -2, 4)\) gives \(1 + 4 + 16 - 8 = 13 \neq 0\). The last option's direction vectors are collinear (\((4, 2, 0) = 2(2, 1, 0)\)), which describes only a line.` },
  { id: "q37-18", lesson: "3.7", type: "tf", kind: "knowledge", tier: "likely",
    q: String.raw`If \(\vec n_1 \cdot \vec n_2 < 0\), the angle between the two planes is greater than \(90^\circ\).`,
    answer: false,
    explain: String.raw`False. The angle between two planes is taken with \(0^\circ \le \theta \le 90^\circ\). A negative dot product only means the two chosen normals point "away" from each other; reversing one normal (which does not change its plane) makes the dot product positive. Report \(180^\circ - \theta\), or use \(|\vec n_1 \cdot \vec n_2|\) in the formula.` },
  { id: "q37-19", lesson: "3.7", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`What is the Cartesian equation of the plane that contains the \(z\)-axis and the point \((2, 3, 5)\)?`,
    options: [String.raw`\(3x - 2y = 0\)`, String.raw`\(2x + 3y + 5z = 0\)`, String.raw`\(3x - 2y + 5 = 0\)`, String.raw`\(2x + 3y = 0\)`],
    answer: 0,
    explain: String.raw`Directions: \((0, 0, 1)\) along the \(z\)-axis and \((2, 3, 5)\) from the origin to the point. \((0, 0, 1) \times (2, 3, 5) = (-3, 2, 0)\), or \((3, -2, 0)\). The origin is on the plane, so \(D = 0\): \(3x - 2y = 0\). Check: \(6 - 6 = 0\). \(2x + 3y = 0\) also contains the \(z\)-axis but misses the point (\(4 + 9 \neq 0\)). \(2x + 3y + 5z = 0\) uses the point as a normal. \(3x - 2y + 5 = 0\) does not contain the origin, so it cannot contain the \(z\)-axis.` },
  { id: "q37-20", lesson: "3.7", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`Any non-zero scalar multiple of a normal vector of a plane is also a normal vector of that plane.`,
    answer: true,
    explain: String.raw`True. \(k\vec n\) lies along the same line as \(\vec n\), so it is still perpendicular to every vector in the plane: \((k\vec n) \cdot \vec w = k(\vec n \cdot \vec w) = 0\). That is why the notes write \(\vec n = k(\vec u \times \vec v)\), and why you may simplify \((-84, -56, -91)\) to \((12, 8, 13)\).` }
);

window.EXT.push(
  { id: "x37-01", lesson: "3.7", level: "apply", tier: "likely",
    title: "The lean-to roof", marks: 8,
    prompt: String.raw`<p>A shed has a flat, sloping lean-to roof. Measured in metres from one corner of the floor, three corners of the roof are \(A(0, 0, 3)\), \(B(10, 0, 3)\) and \(C(0, 6, 5)\). The floor is the plane \(z = 0\).</p><ol type="a"><li>Find the Cartesian equation of the roof plane. [3]</li><li>Find the angle between the roof and the floor, to the nearest degree. [2]</li><li>A vertical post stands on the floor at \((4, 3, 0)\) and reaches straight up to the roof. How tall is the post? [1]</li><li>A sensor is mounted at \(S(5, 2, 2)\). How far is it from the roof? [2]</li></ol>`,
    hints: [String.raw`For (a), \(\overrightarrow{AB}\) and \(\overrightarrow{AC}\) both lie in the roof.`, String.raw`For (b), the floor \(z = 0\) has normal \((0, 0, 1)\). The angle between planes is the angle between normals.`, String.raw`For (c), a vertical post keeps \(x = 4\) and \(y = 3\); only \(z\) changes.`],
    answer: String.raw`<p><strong>a.</strong> \(\overrightarrow{AB} = (10, 0, 0)\), \(\overrightarrow{AC} = (0, 6, 2)\).</p>
<div class="eq">\[ \overrightarrow{AB} \times \overrightarrow{AC} = \big((0)(2) - (0)(6),\ (0)(0) - (10)(2),\ (10)(6) - (0)(0)\big) = (0, -20, 60) = -20(0, 1, -3) \]</div>
<p>Take \(\vec n = (0, 1, -3)\). Then \(y - 3z + D = 0\); substituting \(A(0, 0, 3)\): \(0 - 9 + D = 0\), so \(D = 9\).</p>
<p class="answer">Roof: \(y - 3z + 9 = 0\)</p>
<p>Check: \(B\): \(0 - 9 + 9 = 0\); \(C\): \(6 - 15 + 9 = 0\).</p>
<p><strong>b.</strong> With \(\vec n_1 = (0, 1, -3)\) and \(\vec n_2 = (0, 0, 1)\):</p>
<div class="eq">\[ \cos\theta = \frac{|\vec n_1 \cdot \vec n_2|}{|\vec n_1||\vec n_2|} = \frac{|-3|}{\sqrt{10}\,(1)} = \frac{3}{\sqrt{10}} \approx 0.949 \]</div>
<p class="answer">\(\theta \approx 18^\circ\)</p>
<p>Sense check: the roof rises 2 m (from \(z = 3\) to \(z = 5\)) over 6 m in the \(y\)-direction, and \(\tan^{-1}\frac26 \approx 18.4^\circ\). (The absolute value matters here: without it \(\cos\theta\) would be negative.)</p>
<p><strong>c.</strong> Substitute \(y = 3\) into \(y - 3z + 9 = 0\): \(3 - 3z + 9 = 0\), so \(z = 4\). (The roof's equation has no \(x\)-term, so the height does not depend on \(x\): the roof only slopes in the \(y\)-direction.)</p>
<p class="answer">The post meets the roof at \((4, 3, 4)\), so it is 4 m tall.</p>
<p><strong>d.</strong></p>
<div class="eq">\[ d = \frac{|0(5) + 1(2) - 3(2) + 9|}{\sqrt{0^2 + 1^2 + (-3)^2}} = \frac{|2 - 6 + 9|}{\sqrt{10}} = \frac{5}{\sqrt{10}} = \frac{\sqrt{10}}{2} \]</div>
<p class="answer">\(d = \frac{\sqrt{10}}{2} \approx 1.58\) m</p>` },
  { id: "x37-02", lesson: "3.7", level: "analyze", tier: "likely",
    title: "Laser and mirror", marks: 9,
    prompt: String.raw`<p>A flat mirror lies in the plane \(\pi: 2x - y + 2z - 6 = 0\). A laser at \(S(6, 0, 4)\) fires a beam in the direction \(\vec m = (-1, 1, -2)\).</p><ol type="a"><li>Show that the beam is not parallel to the mirror. [1]</li><li>Find the point \(H\) where the beam hits the mirror. [3]</li><li>Find the shortest distance from \(S\) to the mirror and the length \(SH\). Explain why one of them must be shorter. [3]</li><li>A second mirror, parallel to the first, is to pass through \(S\). Find its Cartesian equation and the distance between the two mirrors. [2]</li></ol>`,
    hints: [String.raw`A line is parallel to a plane exactly when \(\vec n \cdot \vec m = 0\).`, String.raw`For (b), write the beam in parametric form and substitute \(x, y, z\) into the plane's equation; solve for \(t\).`, String.raw`For (c), think of a right triangle with the perpendicular from \(S\) as one leg.`],
    answer: String.raw`<p><strong>a.</strong> \(\vec n \cdot \vec m = (2, -1, 2) \cdot (-1, 1, -2) = -2 - 1 - 4 = -7 \neq 0\). The beam's direction is not perpendicular to the normal, so the beam is not parallel to the mirror.</p>
<p><strong>b.</strong> The beam: \(x = 6 - t,\ y = t,\ z = 4 - 2t\). Substitute into the plane:</p>
<div class="eq">\[ \begin{aligned} 2(6 - t) - t + 2(4 - 2t) - 6 &= 0 \\ 12 - 2t - t + 8 - 4t - 6 &= 0 \\ 14 - 7t &= 0 \\ t &= 2 \end{aligned} \]</div>
<p>So \(H = (6 - 2,\ 2,\ 4 - 4) = (4, 2, 0)\). Check: \(8 - 2 + 0 - 6 = 0\).</p>
<p class="answer">\(H(4, 2, 0)\)</p>
<p><strong>c.</strong> Shortest distance:</p>
<div class="eq">\[ d = \frac{|2(6) - 0 + 2(4) - 6|}{\sqrt{4 + 1 + 4}} = \frac{14}{3} \approx 4.67 \]</div>
<p>Beam length: \(\overrightarrow{SH} = (-2, 2, -4)\), so \(SH = \sqrt{4 + 4 + 16} = 2\sqrt6 \approx 4.90\).</p>
<p>The perpendicular from \(S\) to the plane, the path \(SH\), and a segment in the plane form a right triangle with \(SH\) as the hypotenuse. A leg is always shorter than the hypotenuse, so \(d < SH\). They would be equal only if the beam travelled along the normal.</p>
<p class="answer">\(d = \frac{14}{3} \approx 4.67\), \(SH = 2\sqrt6 \approx 4.90\); the perpendicular distance is shorter.</p>
<p><strong>d.</strong> Parallel planes can share the normal \((2, -1, 2)\): \(2x - y + 2z + D = 0\). Substitute \(S\): \(12 - 0 + 8 + D = 0\), so \(D = -20\).</p>
<p class="answer">\(2x - y + 2z - 20 = 0\); the mirrors are \(\frac{14}{3}\) apart</p>
<p>The distance between the mirrors is the distance from \(S\) (on the second mirror) to the first mirror, which is part (c)'s \(\frac{14}{3}\).</p>` },
  { id: "x37-03", lesson: "3.7", level: "extend", tier: "likely",
    title: "Prove the distance formulas", marks: 8,
    prompt: String.raw`<ol type="a"><li>Let \(P_1(x_1, y_1, z_1)\) be a point and \(Ax + By + Cz + D = 0\) a plane containing the point \(P_0(x_0, y_0, z_0)\). Prove that the distance from \(P_1\) to the plane is \(d = \dfrac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\). [3]</li><li>Show that the distance between the parallel planes \(Ax + By + Cz + D_1 = 0\) and \(Ax + By + Cz + D_2 = 0\) is \(\dfrac{|D_1 - D_2|}{\sqrt{A^2 + B^2 + C^2}}\). [3]</li><li>Find the distance between the planes \(2x - 2y + z - 3 = 0\) and \(4x - 4y + 2z + 9 = 0\). [2]</li></ol>`,
    hints: [String.raw`For (a), the distance is the length of the projection of \(\overrightarrow{P_0P_1}\) onto \(\vec n\). Use \(D = -Ax_0 - By_0 - Cz_0\).`, String.raw`For (b), pick any point on the second plane and use (a). What does \(Ax_1 + By_1 + Cz_1\) equal for that point?`, String.raw`For (c), the formula in (b) only works when \(A, B, C\) are identical in both equations.`],
    answer: String.raw`<p><strong>a.</strong> The shortest path from \(P_1\) to the plane is along the normal, so \(d\) is the length of the projection of \(\overrightarrow{P_0P_1}\) onto \(\vec n = (A, B, C)\):</p>
<div class="eq">\[ d = \frac{|\overrightarrow{P_0P_1} \cdot \vec n|}{|\vec n|} \]</div>
<p>Now \(\overrightarrow{P_0P_1} = (x_1 - x_0,\ y_1 - y_0,\ z_1 - z_0)\), so</p>
<div class="eq">\[ \begin{aligned} \overrightarrow{P_0P_1} \cdot \vec n &= A(x_1 - x_0) + B(y_1 - y_0) + C(z_1 - z_0) \\ &= Ax_1 + By_1 + Cz_1 + (-Ax_0 - By_0 - Cz_0) \\ &= Ax_1 + By_1 + Cz_1 + D \end{aligned} \]</div>
<p>because \(P_0\) is on the plane, so \(Ax_0 + By_0 + Cz_0 + D = 0\), that is \(D = -Ax_0 - By_0 - Cz_0\). With \(|\vec n| = \sqrt{A^2 + B^2 + C^2}\):</p>
<div class="eq">\[ d = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}} \quad \blacksquare \]</div>
<p><strong>b.</strong> Parallel planes are the same distance apart everywhere, so measure from any point \(P_1(x_1, y_1, z_1)\) on the second plane. Since \(P_1\) is on it, \(Ax_1 + By_1 + Cz_1 + D_2 = 0\), so \(Ax_1 + By_1 + Cz_1 = -D_2\). By (a), its distance to the first plane is</p>
<div class="eq">\[ d = \frac{|Ax_1 + By_1 + Cz_1 + D_1|}{\sqrt{A^2 + B^2 + C^2}} = \frac{|-D_2 + D_1|}{\sqrt{A^2 + B^2 + C^2}} = \frac{|D_1 - D_2|}{\sqrt{A^2 + B^2 + C^2}} \quad \blacksquare \]</div>
<p><strong>c.</strong> The normals \((2, -2, 1)\) and \((4, -4, 2)\) are parallel. Divide the second equation by 2 so that \(A, B, C\) match: \(2x - 2y + z + \frac92 = 0\). Then</p>
<div class="eq">\[ d = \frac{\left|-3 - \frac92\right|}{\sqrt{4 + 4 + 1}} = \frac{\frac{15}{2}}{3} = \frac52 \]</div>
<p class="answer">\(d = \frac52 = 2.5\) units</p>
<p>Check with a point: \((0, 0, 3)\) is on the first plane, and its distance to the second is \(\frac{|0 - 0 + 6 + 9|}{\sqrt{16 + 16 + 4}} = \frac{15}{6} = \frac52\).</p>` },
  { id: "x37-04", lesson: "3.7", level: "analyze", tier: "extra",
    title: "A plane through a line, perpendicular to a plane", marks: 7,
    prompt: String.raw`<p>The line \(L: \vec r = (1, -1, 2) + t(2, 1, -1),\ t \in \mathbb{R}\) and the plane \(\pi: x + y + z - 4 = 0\) are given.</p><ol type="a"><li>Explain why a plane that contains \(L\) and is perpendicular to \(\pi\) must have a normal perpendicular to both \((2, 1, -1)\) and \((1, 1, 1)\). [2]</li><li>Find the Cartesian equation of that plane. [3]</li><li>Verify your answer: show that \(L\) lies in it and that it is perpendicular to \(\pi\). [1]</li><li>If \(L\) had direction vector \((1, 1, 1)\) instead, explain why there would be infinitely many such planes. [1]</li></ol>`,
    hints: [String.raw`A plane contains a line only if the line's direction vector is perpendicular to the plane's normal.`, String.raw`Two planes are perpendicular when their normals are perpendicular.`, String.raw`For (d), compute the cross product you would need. What goes wrong?`],
    answer: String.raw`<p><strong>a.</strong> The new plane contains \(L\), so the direction \((2, 1, -1)\) lies in the plane and must be perpendicular to its normal \(\vec n\). The new plane is perpendicular to \(\pi\), so the normals are perpendicular: \(\vec n \cdot (1, 1, 1) = 0\). So \(\vec n\) is perpendicular to both vectors, and since they are not collinear, the cross product gives it.</p>
<p><strong>b.</strong></p>
<div class="eq">\[ \begin{array}{cccccc} \cancel{2} & 1 & -1 & 2 & 1 & \cancel{-1} \\ \cancel{1} & 1 & 1 & 1 & 1 & \cancel{1} \end{array} \]</div>
<div class="eq">\[ \vec n = \big((1)(1) - (-1)(1),\ (-1)(1) - (2)(1),\ (2)(1) - (1)(1)\big) = (2, -3, 1) \]</div>
<p>The point \((1, -1, 2)\) on \(L\) is on the plane: \(2(1) - 3(-1) + 1(2) + D = 0\), so \(7 + D = 0\) and \(D = -7\).</p>
<p class="answer">\(2x - 3y + z - 7 = 0\)</p>
<p><strong>c.</strong> \((2, -3, 1) \cdot (2, 1, -1) = 4 - 3 - 1 = 0\), so \(L\) is parallel to the plane, and its point \((1, -1, 2)\) satisfies \(2 + 3 + 2 - 7 = 0\), so \(L\) lies in the plane. \((2, -3, 1) \cdot (1, 1, 1) = 2 - 3 + 1 = 0\), so the plane is perpendicular to \(\pi\).</p>
<p><strong>d.</strong> If \(\vec m = (1, 1, 1)\), then \(\vec m \times \vec n_\pi = (1, 1, 1) \times (1, 1, 1) = (0, 0, 0)\): the two vectors are collinear and do not determine a normal. Geometrically, \(L\) would itself be perpendicular to \(\pi\), and every plane containing a line perpendicular to \(\pi\) is perpendicular to \(\pi\). The planes containing \(L\) rotate around it like pages around a book's spine, so there are infinitely many.</p>` }
);

window.EXTRA.push(
  { id: "e-37-line-meets-plane", lesson: "3.7", tier: "likely",
    title: "How a line and a plane can meet",
    why: String.raw`Worksheet question 12 only asks whether a line is parallel to a plane; this shows all three possibilities and how to find the crossing point, which is where the next unit starts.`,
    html: String.raw`<h3>Three possibilities</h3>
<p>A line \(\vec r = \vec r_0 + t\vec m\) and a plane with normal \(\vec n\) in R³ can relate in exactly three ways:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Case</th><th>\(\vec n \cdot \vec m\)</th><th>Point of the line in the plane?</th><th>Points in common</th></tr></thead><tbody>
<tr><th>Crosses the plane</th><td>\(\neq 0\)</td><td>(not needed)</td><td>exactly one</td></tr>
<tr><th>Parallel and distinct</th><td>\(= 0\)</td><td>no</td><td>none</td></tr>
<tr><th>Lies in the plane</th><td>\(= 0\)</td><td>yes</td><td>infinitely many (the whole line)</td></tr>
</tbody></table></div>
<h3>Finding the crossing point</h3>
<p>Write the line in parametric form, substitute \(x, y, z\) into the plane's Cartesian equation, solve for \(t\), and put \(t\) back into the line.</p>
<div class="example"><p class="example-title">Where does \(\dfrac{x - 1}{4} = \dfrac{y + 6}{-1} = \dfrac{z}{1}\) meet \(4x + y - z - 10 = 0\)? (worksheet 12c)</p>
<ol class="work">
<li>Parametric form: \(x = 1 + 4t,\ y = -6 - t,\ z = t\).</li>
<li>Substitute: \(4(1 + 4t) + (-6 - t) - t - 10 = 0\), so \(4 + 16t - 6 - t - t - 10 = 0\), giving \(14t - 12 = 0\) and \(t = \frac67\).</li>
<li>Back-substitute: \(x = 1 + \frac{24}{7} = \frac{31}{7}\), \(y = -6 - \frac67 = -\frac{48}{7}\), \(z = \frac67\).</li>
<li>Check: \(4\left(\frac{31}{7}\right) - \frac{48}{7} - \frac67 - 10 = \frac{124 - 48 - 6 - 70}{7} = 0\).</li>
</ol>
<p class="answer">\(\left(\frac{31}{7}, -\frac{48}{7}, \frac67\right)\)</p></div>
<h3>Why the dot-product test works</h3>
<p>Substitute a general line into \(Ax + By + Cz + D = 0\):</p>
<div class="eq">\[ A(x_0 + tm_1) + B(y_0 + tm_2) + C(z_0 + tm_3) + D = \underbrace{(Ax_0 + By_0 + Cz_0 + D)}_{\text{point test}} + t\,\underbrace{(\vec n \cdot \vec m)}_{\text{dot product}} = 0 \]</div>
<p>The coefficient of \(t\) is always \(\vec n \cdot \vec m\) (it was the 14 above). If it is not zero, you can divide by it and get exactly one \(t\). If it is zero, the \(t\) disappears: you are left with either \(0 = 0\), true for every \(t\) (the line lies in the plane, as in 12a), or a false statement like \(-15 = 0\), true for no \(t\) (parallel and distinct, as in 12b). The two tests from the worksheet are these two brackets.</p>
<p>The same substitution idea extends to two planes, which meet in a line unless they are parallel, and to three planes, which can meet in a point, a line, or not at all.</p>` },
  { id: "e-37-line-plane-angle", lesson: "3.7", tier: "extra",
    title: "The angle between a line and a plane",
    why: String.raw`Normals give the angle between two planes; one extra step gives the angle at which a beam, a rod or a ramp edge meets a plane, which is a common thinking question.`,
    html: String.raw`<h3>Use the normal, then take the complement</h3>
<p>The angle \(\varphi\) between a line and a plane is the angle between the line and its shadow on the plane, with \(0^\circ \le \varphi \le 90^\circ\). The normal is easier to work with: if \(\alpha\) is the acute angle between the direction vector \(\vec m\) and the normal \(\vec n\), the line and the normal form a right angle with the plane, so \(\varphi = 90^\circ - \alpha\). Since \(\cos\alpha = \sin(90^\circ - \alpha)\):</p>
<div class="eq">\[ \sin\varphi = \frac{|\vec n \cdot \vec m|}{|\vec n||\vec m|} \]</div>
<p>Notice it is <em>sine</em> here, not cosine. The two extremes check out: if \(\vec n \cdot \vec m = 0\), the line is parallel to the plane and \(\varphi = 0^\circ\); if \(\vec m\) is a multiple of \(\vec n\), the line is perpendicular to the plane and \(\varphi = 90^\circ\).</p>
<div class="example"><p class="example-title">At what angle does the beam with direction \((-1, 1, -2)\) hit the mirror \(2x - y + 2z - 6 = 0\)?</p>
<ol class="work">
<li>\(\vec n \cdot \vec m = (2, -1, 2) \cdot (-1, 1, -2) = -2 - 1 - 4 = -7\), \(|\vec n| = 3\), \(|\vec m| = \sqrt6\).</li>
<li>\(\sin\varphi = \frac{|-7|}{3\sqrt6} \approx 0.953\).</li>
</ol>
<p class="answer">\(\varphi \approx 72^\circ\) between the beam and the mirror (and about \(18^\circ\) between the beam and the normal)</p></div>
<div class="callout warn"><p class="callout-title">Planes use cosine, lines with planes use sine</p><p>Between two planes you compare normal with normal, so the angle between the normals <em>is</em> the answer. Between a line and a plane you compare a direction with a normal, so the angle you calculate is the complement of the answer. Using \(\cos\) here gives the angle to the normal, not to the plane.</p></div>` },
  { id: "e-37-intercepts-sketch", lesson: "3.7", tier: "extra",
    title: "Sketching a plane from its intercepts",
    why: String.raw`A quick sketch makes a Cartesian equation something you can see, and it uses the same three intercepts the teacher uses to convert to vector form.`,
    html: String.raw`<h3>Three intercepts, one triangle</h3>
<p>Take the plane \(2x + 3y + 6z = 12\). Setting two variables to 0 each time gives the intercepts: \(2x = 12\) so \(x = 6\); \(3y = 12\) so \(y = 4\); \(6z = 12\) so \(z = 2\). Plot \((6, 0, 0)\), \((0, 4, 0)\) and \((0, 0, 2)\) and join them. The triangle is the part of the plane in the first octant, and it is usually all you need to picture the tilt.</p>
<figure class="diagram narrow"><svg viewBox="0 0 520 340" role="img" aria-labelledby="fig37-int"><title id="fig37-int">Oblique sketch of x, y and z axes with the plane 2x plus 3y plus 6z equals 12 drawn as a triangle joining the intercepts (6, 0, 0), (0, 4, 0) and (0, 0, 2)</title>
<polygon class="f-soft s-blue" stroke-width="2" points="113.9,296.1 380,190 220,120"/>
<line class="s-mute" x1="220" y1="190" x2="91.3" y2="318.7" stroke-width="1.5"/><polygon class="f-mute" points="85.6,324.4 89.9,313 97,320.1"/>
<line class="s-mute" x1="220" y1="190" x2="462" y2="190" stroke-width="1.5"/><polygon class="f-mute" points="470,190 459,195 459,185"/>
<line class="s-mute" x1="220" y1="190" x2="220" y2="38" stroke-width="1.5"/><polygon class="f-mute" points="220,30 225,41 215,41"/>
<circle class="f-blue" cx="113.9" cy="296.1" r="3.5"/><circle class="f-blue" cx="380" cy="190" r="3.5"/><circle class="f-blue" cx="220" cy="120" r="3.5"/>
<text class="t-mute" x="76" y="330" font-size="15" font-style="italic" text-anchor="end">x</text>
<text class="t-mute" x="478" y="195" font-size="15" font-style="italic">y</text>
<text class="t-mute" x="228" y="38" font-size="15" font-style="italic">z</text>
<text class="t-ink" x="212" y="206" font-size="13" text-anchor="end">O</text>
<text class="t-blue" x="122" y="316" font-size="14">(6, 0, 0)</text>
<text class="t-blue" x="380" y="212" font-size="14" text-anchor="middle">(0, 4, 0)</text>
<text class="t-blue" x="228" y="114" font-size="14">(0, 0, 2)</text>
</svg><figcaption>The plane \(2x + 3y + 6z = 12\) cuts the axes at 6, 4 and 2. The triangle is the piece of the plane in the first octant.</figcaption></figure>
<h3>Intercept form</h3>
<p>Dividing \(2x + 3y + 6z = 12\) by 12 gives</p>
<div class="eq">\[ \frac{x}{6} + \frac{y}{4} + \frac{z}{2} = 1 \]</div>
<p>In general, a plane with intercepts \(a, b, c\) (all non-zero) is \(\frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1\), so you can read the intercepts straight off the denominators.</p>
<h3>When the method needs adjusting</h3>
<ul>
<li><strong>A missing variable</strong>, as in \(3x - 5z + 15 = 0\): there is no \(y\)-intercept. Draw the line through \((-5, 0, 0)\) and \((0, 0, 3)\) in the \(xz\)-plane, then slide it along the \(y\)-axis. The plane is a "wall" parallel to the \(y\)-axis.</li>
<li><strong>\(D = 0\)</strong>: every intercept is the origin. Instead, set one variable to 0 to get a line (a <em>trace</em>) in a coordinate plane; two traces through the origin pin the plane down.</li>
</ul>` }
);

window.GLOSSARY.push(
  { term: String.raw`Normal vector (plane)`, def: String.raw`A non-zero vector perpendicular to every vector in a plane. If \(\vec u\) and \(\vec v\) are non-collinear vectors in the plane, \(\vec n = k(\vec u \times \vec v) = (A, B, C)\); any non-zero scalar multiple is also a normal.`, lesson: "3.7", tier: "essential" },
  { term: String.raw`Cartesian (scalar) equation of a plane`, def: String.raw`\(Ax + By + Cz + D = 0\), where \(\vec n = (A, B, C)\) is a normal to the plane. It comes from \(\vec n \cdot \overrightarrow{P_0P} = 0\), with \(D = -Ax_0 - By_0 - Cz_0\) for a known point \(P_0(x_0, y_0, z_0)\).`, lesson: "3.7", tier: "essential" },
  { term: String.raw`Parallel planes`, def: String.raw`Planes whose normals are scalar multiples, \(\vec n_1 = k\vec n_2\). They are either coincident or parallel and distinct (no points in common).`, lesson: "3.7", tier: "essential" },
  { term: String.raw`Coincident planes`, def: String.raw`Two equations that describe the same plane: the whole Cartesian equations, constant included, are scalar multiples of each other (e.g. \(3x - 3y + z - 2 = 0\) and \(6x - 6y + 2z - 4 = 0\)).`, lesson: "3.7", tier: "essential" },
  { term: String.raw`Perpendicular planes`, def: String.raw`Planes whose normals are perpendicular: \(\vec n_1 \cdot \vec n_2 = 0\).`, lesson: "3.7", tier: "essential" },
  { term: String.raw`Angle between two planes`, def: String.raw`The angle \(\theta\) between their normals, taken with \(0^\circ \le \theta \le 90^\circ\): \(\cos\theta = \frac{\vec n_1 \cdot \vec n_2}{|\vec n_1||\vec n_2|}\) (use the absolute value of the dot product if it is negative).`, lesson: "3.7", tier: "likely" },
  { term: String.raw`Distance from a point to a plane`, def: String.raw`The perpendicular (minimum) distance from \((x_1, y_1, z_1)\) to \(Ax + By + Cz + D = 0\): \(d = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\), equivalently \(\frac{|\overrightarrow{P_0P} \cdot \vec n|}{|\vec n|}\).`, lesson: "3.7", tier: "essential" },
  { term: String.raw`Intercepts of a plane`, def: String.raw`The points where a plane crosses the axes, found by setting two of \(x, y, z\) to 0. They are the easiest three points for converting a Cartesian equation to vector form.`, lesson: "3.7", tier: "likely" },
  { term: String.raw`Line parallel to a plane`, def: String.raw`A line whose direction vector is perpendicular to the plane's normal: \(\vec n \cdot \vec m = 0\). It lies in the plane if one of its points satisfies the plane's equation; otherwise it never meets the plane.`, lesson: "3.7", tier: "likely" }
);
