/* MCV4U Unit 3 · Lines & Planes: whole-unit review (summary sheet, unit review questions, quest review package), mixed quiz, apply & extend, and the one-page cram sheet. */
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];

/* ---------------------------------------------------------------------------
   1. Unit review summary sheet (A blank + B completed)
   --------------------------------------------------------------------------- */
window.QA.push({
  id: "qa-review-sheet", lesson: "mix",
  title: "Unit review summary sheet",
  source: "A/B - Unit Review Summary Sheet (blank and completed)",
  items: [
    /* ---- the big table: one item per blank cell ---- */
    { tier: "essential", lesson: "3.1",
      q: String.raw`<strong>Table · Vector, lines in R².</strong> State the vector equation of a line in R² and say what each symbol means.`,
      a: String.raw`<div class="eq">\[ \vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R} \qquad (x, y) = (x_0, y_0) + t(a, b),\ t \in \mathbb{R} \]</div>
<ul><li>\(\vec r = (x, y)\): the position vector \(\overrightarrow{OP}\) of <em>any</em> point \(P\) on the line.</li>
<li>\(\vec r_0 = (x_0, y_0)\): the position vector \(\overrightarrow{OP_0}\) of one known point \(P_0\) on the line.</li>
<li>\(\vec m = (a, b)\): the <span class="term">direction vector</span>. Any non-zero scalar multiple of it works just as well.</li>
<li>\(t\): the parameter. Each real value of \(t\) lands on exactly one point of the line.</li></ul>
<p>Why it works: \(\overrightarrow{OP} = \overrightarrow{OP_0} + \overrightarrow{P_0P}\), and \(\overrightarrow{P_0P}\) is parallel to \(\vec m\), so \(\overrightarrow{P_0P} = t\vec m\).</p>
<p class="answer">\(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\), where \(\vec m\) is the direction vector</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Table · Vector, lines in R³.</strong> State the vector equation of a line in R³. How does it differ from R²?`,
      a: String.raw`<div class="eq">\[ \vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R} \qquad (x, y, z) = (x_0, y_0, z_0) + t(a, b, c),\ t \in \mathbb{R} \]</div>
<p>It is the same equation with a third component. A line still needs only one point and one direction, so there is still only <em>one</em> parameter \(t\).</p>
<p class="answer">\(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\), \(\vec m = (a, b, c)\) the direction vector</p>` },

    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>Table · Vector, planes in R³.</strong> State the vector equation of a plane and the condition on the two direction vectors.`,
      a: String.raw`<div class="eq">\[ \vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R} \]</div>
<p>\(\vec r_0\) is the position vector of a known point on the plane; \(\vec a\) and \(\vec b\) are two direction vectors in the plane. They must be <strong>non-collinear</strong> (not scalar multiples of each other), otherwise they only sweep out a line. A plane needs <em>two</em> parameters \(s\) and \(t\) because it is two-dimensional.</p>
<p class="answer">\(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\), with \(\vec a, \vec b\) non-collinear direction vectors</p>` },

    { tier: "essential", lesson: "3.1",
      q: String.raw`<strong>Table · Parametric, lines in R².</strong> State the parametric equations of a line in R².`,
      a: String.raw`<p>Split the vector equation \((x, y) = (x_0, y_0) + t(a, b)\) into its components:</p>
<div class="eq">\[ \begin{aligned} x &= x_0 + ta \\ y &= y_0 + tb \end{aligned} \qquad t \in \mathbb{R} \]</div>
<p class="answer">\(x = x_0 + ta,\ y = y_0 + tb,\ t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Table · Parametric, lines in R³.</strong> State the parametric equations of a line in R³.`,
      a: String.raw`<div class="eq">\[ \begin{aligned} x &= x_0 + ta \\ y &= y_0 + tb \\ z &= z_0 + tc \end{aligned} \qquad t \in \mathbb{R} \]</div>
<p>The point is \((x_0, y_0, z_0)\) (the constants) and the direction is \((a, b, c)\) (the coefficients of \(t\)).</p>
<p class="answer">\(x = x_0 + ta,\ y = y_0 + tb,\ z = z_0 + tc,\ t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>Table · Parametric, planes in R³.</strong> State the parametric equations of a plane.`,
      a: String.raw`<p>With \(\vec a = (a_1, a_2, a_3)\) and \(\vec b = (b_1, b_2, b_3)\), split \(\vec r = \vec r_0 + s\vec a + t\vec b\) into components:</p>
<div class="eq">\[ \begin{aligned} x &= x_0 + sa_1 + tb_1 \\ y &= y_0 + sa_2 + tb_2 \\ z &= z_0 + sa_3 + tb_3 \end{aligned} \qquad s, t \in \mathbb{R} \]</div>
<p>Read direction vectors by column: the coefficients of \(s\) form \(\vec a\), the coefficients of \(t\) form \(\vec b\).</p>
<p class="answer">\(x = x_0 + sa_1 + tb_1,\ y = y_0 + sa_2 + tb_2,\ z = z_0 + sa_3 + tb_3,\ s, t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.2",
      q: String.raw`<strong>Table · Symmetric, lines in R².</strong> State the symmetric equation of a line in R² and how you get it.`,
      a: String.raw`<p>Solve each parametric equation for \(t\) and set the results equal:</p>
<div class="eq">\[ t = \frac{x - x_0}{a}, \quad t = \frac{y - y_0}{b} \quad\Rightarrow\quad \frac{x - x_0}{a} = \frac{y - y_0}{b},\ \ a, b \neq 0 \]</div>
<p>Cross-multiplying this is one quick way to reach the Cartesian equation.</p>
<p class="answer">\(\dfrac{x - x_0}{a} = \dfrac{y - y_0}{b}\) (with \(a, b \neq 0\))</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Table · Symmetric, lines in R³.</strong> State the symmetric equations of a line in R³.`,
      a: String.raw`<div class="eq">\[ \frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}, \quad a, b, c \neq 0 \]</div>
<p>The point is read with the signs flipped (the numbers being subtracted); the direction vector \((a, b, c)\) is the denominators.</p>
<p class="answer">\(\dfrac{x - x_0}{a} = \dfrac{y - y_0}{b} = \dfrac{z - z_0}{c}\), for \(\vec m = (a, b, c)\) with \(a, b, c \neq 0\)</p>` },

    { tier: "likely", lesson: "3.6",
      q: String.raw`<strong>Table · Symmetric, planes.</strong> What goes in the symmetric-equation box for planes?`,
      a: String.raw`<p>Nothing: the teacher crossed this box out. Symmetric equations come from solving every parametric equation for the <em>single</em> parameter \(t\) and setting them equal. A plane has <em>two</em> parameters \(s\) and \(t\), so you cannot isolate one parameter from each equation and equate. Planes are written in vector, parametric or Cartesian form only.</p>
<p class="answer">Planes have no symmetric equations (two parameters, not one).</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Table · The note under the symmetric row.</strong> "Can have a combination of parametric and symmetric if either \(a, b, c = 0\)." What does that mean? Give an example.`,
      a: String.raw`<p>If a component of the direction vector is 0, you cannot divide by it. That coordinate never changes as \(t\) changes, so you write it as a plain parametric equation and keep the symmetric form for the rest.</p>
<p>Example (lesson 3.3): through \((3, -1, 2)\) with \(\vec m = (4, 0, -5)\). The parametric equations are \(x = 3 + 4t,\ y = -1,\ z = 2 - 5t\), so</p>
<div class="eq">\[ \frac{x - 3}{4} = \frac{z - 2}{-5}, \quad y = -1 \]</div>
<p class="answer">Write the zero-component coordinate as a constant (e.g. \(y = -1\)) and the others in symmetric form.</p>`,
      note: String.raw`Writing \(\dfrac{y + 1}{0}\) is the classic error: division by zero is undefined.` },

    { tier: "essential", lesson: "3.2",
      q: String.raw`<strong>Table · Cartesian (scalar), lines in R².</strong> State the Cartesian equation of a line in R² and the meaning of its coefficients.`,
      a: String.raw`<div class="eq">\[ Ax + By + C = 0, \qquad \vec n = (A, B) \]</div>
<p>\(\vec n = (A, B)\) is a <span class="term">normal vector</span>: it is perpendicular to the line. It comes from \(\overrightarrow{P_0P} \cdot \vec n = 0\), which expands to \(Ax + By + (-Ax_0 - By_0) = 0\), so \(C = -Ax_0 - By_0\). The teacher prefers \(A > 0\) and integer coefficients.</p>
<p class="answer">\(Ax + By + C = 0\), with normal \(\vec n = (A, B)\)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Table · Cartesian, lines in R³.</strong> What goes in the Cartesian box for lines in R³, and why?`,
      a: String.raw`<p>Nothing: the box is crossed out. A line in R³ does not have a single unique normal vector. Infinitely many directions are perpendicular to it (picture the spokes of a wheel around an axle), so you cannot pin the line down with one normal. In fact one scalar equation \(Ax + By + Cz + D = 0\) in R³ describes a <em>plane</em>, not a line.</p>
<p class="answer">Lines in R³ have no Cartesian equation (no unique normal); use vector, parametric or symmetric form.</p>`,
      note: String.raw`A common test trap: "the line \(2x - y + 3z = 4\)". In R³ that is a plane.` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Table · Cartesian (scalar), planes.</strong> State the Cartesian equation of a plane and the meaning of its coefficients.`,
      a: String.raw`<div class="eq">\[ Ax + By + Cz + D = 0, \qquad \vec n = (A, B, C) \]</div>
<p>\(\vec n\) is normal to the plane (perpendicular to every vector in it). It comes from \(\vec n \cdot \overrightarrow{P_0P} = 0\), giving \(D = -Ax_0 - By_0 - Cz_0\). If you start from a vector equation, the normal is the cross product of the two direction vectors: \(\vec n = \vec a \times \vec b\).</p>
<p class="answer">\(Ax + By + Cz + D = 0\), with normal \(\vec n = (A, B, C)\)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Table · Lines are parallel if…</strong>`,
      a: String.raw`<p>Their direction vectors are parallel, i.e. scalar multiples:</p>
<div class="eq">\[ \vec m_1 \parallel \vec m_2, \qquad \vec m_1 = k\vec m_2 \]</div>
<p>Then test one point of one line in the other: if it lies on it, the lines are <strong>coincident</strong> (the same line); if not, they are <strong>parallel and distinct</strong>.</p>
<p class="answer">\(\vec m_1 = k\vec m_2\)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Table · Lines are perpendicular if…</strong>`,
      a: String.raw`<p>Their direction vectors are perpendicular, so their dot product is zero:</p>
<div class="eq">\[ \vec m_1 \perp \vec m_2, \qquad \vec m_1 \cdot \vec m_2 = 0 \]</div>
<p>In R³, two lines can have perpendicular directions without meeting; the teacher's classification only looks at the directions.</p>
<p class="answer">\(\vec m_1 \cdot \vec m_2 = 0\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Table · Planes are parallel if…</strong>`,
      a: String.raw`<p>Their normal vectors are parallel (scalar multiples):</p>
<div class="eq">\[ \vec n_1 \parallel \vec n_2, \qquad \vec n_1 = k\vec n_2 \]</div>
<p>If the whole equation is a multiple too (including \(D\)), the planes are coincident; otherwise parallel and distinct.</p>
<p class="answer">\(\vec n_1 = k\vec n_2\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Table · Planes are perpendicular if…</strong>`,
      a: String.raw`<div class="eq">\[ \vec n_1 \perp \vec n_2, \qquad \vec n_1 \cdot \vec n_2 = 0 \]</div>
<p class="answer">\(\vec n_1 \cdot \vec n_2 = 0\)</p>` },

    { tier: "essential", lesson: "3.4",
      q: String.raw`<strong>Table · Minimum distance from a point \((x_1, y_1)\) to a line in R².</strong>`,
      a: String.raw`<div class="eq">\[ d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}} \]</div>
<p>The line must be in Cartesian form \(Ax + By + C = 0\) (everything on one side). The formula is the length of the projection of \(\overrightarrow{P_0P}\) onto the normal \(\vec n = (A, B)\): \(d = \dfrac{|\overrightarrow{P_0P} \cdot \vec n|}{|\vec n|}\).</p>
<p class="answer">\(d = \dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\)</p>` },

    { tier: "essential", lesson: "3.4",
      q: String.raw`<strong>Table · Minimum distance from a point \(P\) to a line in R³.</strong>`,
      a: String.raw`<div class="eq">\[ d = \frac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|} \]</div>
<p>\(P_0\) is a known point on the line and \(\vec m\) its direction. It comes from \(d = |\overrightarrow{P_0P}|\sin\theta\) and \(|\vec a \times \vec b| = |\vec a||\vec b|\sin\theta\). There is no "\(|Ax_1 + \dots|\)" version because a line in R³ has no Cartesian equation.</p>
<p class="answer">\(d = \dfrac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Table · Minimum distance from a point \((x_1, y_1, z_1)\) to a plane in R³.</strong>`,
      a: String.raw`<div class="eq">\[ d = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}} \]</div>
<p>Same idea as in R²: project \(\overrightarrow{P_0P}\) onto the normal \(\vec n = (A, B, C)\). The plane must be in the form \(Ax + By + Cz + D = 0\).</p>
<p class="answer">\(d = \dfrac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\)</p>` },

    { tier: "essential", lesson: "3.5",
      q: String.raw`<strong>Table · Three vectors \(\vec u, \vec v, \vec w\) in R³ are coplanar: long way to check.</strong>`,
      a: String.raw`<p>Let \(a, b \in \mathbb{R}\) such that \(\vec w = a\vec u + b\vec v\). Write the three component equations, solve two of them for \(a\) and \(b\), then <strong>check the third</strong>. If the same \(a, b\) satisfy all three (a unique solution), the vectors are coplanar; if the third equation fails, they are not.</p>
<p class="answer">Solve \(\vec w = a\vec u + b\vec v\) for a unique \(a\) and \(b\) that works in all three components.</p>` },

    { tier: "essential", lesson: "3.5",
      q: String.raw`<strong>Table · Three vectors coplanar: fast way to check.</strong>`,
      a: String.raw`<p>Use the triple scalar product:</p>
<div class="eq">\[ \vec u \cdot (\vec v \times \vec w) = 0 \iff \vec u, \vec v, \vec w \text{ coplanar} \]</div>
<p>\(|\vec u \cdot (\vec v \times \vec w)|\) is the volume of the parallelepiped built on the three vectors. Zero volume means the box is flat, i.e. the vectors lie in one plane.</p>
<p class="answer">Triple scalar product \(\vec u \cdot (\vec v \times \vec w) = 0\) if coplanar</p>` },

    /* ---- page 2: practice questions ---- */
    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Practice 1.</strong> In the vector equation \(\vec r = (3, 2, -1) + t(4, 0, -2),\ t \in \mathbb{R}\), a point on the line is ____ and a direction vector for the line is ____.`,
      a: String.raw`<p><strong>Type:</strong> Read a vector equation · <strong>Plan:</strong> In \(\vec r = \vec r_0 + t\vec m\), the vector on its own is the point; the vector multiplied by \(t\) is the direction.</p>
<ol class="work"><li>Point: \(\vec r_0 = (3, 2, -1)\), so \(P_0(3, 2, -1)\) (the point for \(t = 0\)).</li>
<li>Direction: \(\vec m = (4, 0, -2)\), or any non-zero multiple such as \((2, 0, -1)\).</li></ol>
<p class="answer">Point \((3, 2, -1)\); direction vector \((4, 0, -2)\) (or any scalar multiple)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Practice 2.</strong> In the parametric equations \(x = -3 + 2t,\ y = 4 + t,\ z = 2 + 7t,\ t \in \mathbb{R}\), a point on the line is ____ and a direction vector is ____.`,
      a: String.raw`<p><strong>Type:</strong> Read parametric equations · <strong>Plan:</strong> Constants give the point; coefficients of \(t\) give the direction. Watch the hidden coefficient 1 in \(y = 4 + t\).</p>
<ol class="work"><li>Constants: \((-3, 4, 2)\).</li>
<li>Coefficients of \(t\): \(2,\ 1,\ 7\), so \(\vec m = (2, 1, 7)\).</li></ol>
<p class="answer">Point \((-3, 4, 2)\); direction vector \((2, 1, 7)\) (or any scalar multiple)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Practice 3.</strong> In the symmetric equations \(\dfrac{x - 1}{3} = \dfrac{2 - y}{4} = z + 5\), a point on the line is ____ and a direction vector is ____.`,
      a: String.raw`<p><strong>Type:</strong> Read symmetric equations (disguised) · <strong>Plan:</strong> Every numerator must look like "coordinate minus number" before you read anything off. Rewrite the \(y\) and \(z\) parts first.</p>
<ol class="work"><li>\(\dfrac{2 - y}{4} = \dfrac{-(y - 2)}{4} = \dfrac{y - 2}{-4}\).</li>
<li>\(z + 5 = \dfrac{z - (-5)}{1}\): the denominator is a hidden 1.</li>
<li>So \(\dfrac{x - 1}{3} = \dfrac{y - 2}{-4} = \dfrac{z - (-5)}{1}\): point \((1, 2, -5)\), direction \((3, -4, 1)\).</li>
<li>Check with parametric form: \(x = 1 + 3t,\ y = 2 - 4t,\ z = -5 + t\); at \(t = 1\), \((4, -2, -4)\): \(\tfrac{4-1}{3} = 1,\ \tfrac{2-(-2)}{4} = 1,\ -4 + 5 = 1\) \(\checkmark\)</li></ol>
<p class="answer">Point \((1, 2, -5)\); direction vector \((3, -4, 1)\) (or any scalar multiple)</p>`,
      note: String.raw`Two traps in one: reading \((3, 4, 1)\) (missing the sign flip in \(2 - y\)) and reading the point's \(z\) as \(5\).` },

    { tier: "essential", lesson: "3.4",
      q: String.raw`<strong>Practice 4.</strong> The minimum distance of the point \(Q(2, -4)\) to the line \(2x + 3y - 7 = 0\) is ____.`,
      a: String.raw`<p><strong>Type:</strong> Point-to-line distance in R² · <strong>Plan:</strong> The line is already in Cartesian form, so use \(d = \dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\) with \((x_1, y_1) = (2, -4)\).</p>
<ol class="work"><li>\(A = 2,\ B = 3,\ C = -7\).</li>
<li>\[ d = \frac{|2(2) + 3(-4) - 7|}{\sqrt{2^2 + 3^2}} = \frac{|4 - 12 - 7|}{\sqrt{13}} = \frac{15}{\sqrt{13}} \]</li>
<li>Rationalize: \(\dfrac{15}{\sqrt{13}} \cdot \dfrac{\sqrt{13}}{\sqrt{13}} = \dfrac{15\sqrt{13}}{13} \approx 4.16\).</li></ol>
<p class="answer">\(d = \dfrac{15\sqrt{13}}{13}\) units</p>` },

    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>Practice 5.</strong> In the vector equation \(\vec r = (3, -7, 2) + s(-2, 4, 1) + t(-1, 1, 1),\ s, t \in \mathbb{R}\), a point on the plane is ____ and two direction vectors are ____ and ____.`,
      a: String.raw`<p><strong>Type:</strong> Read a plane's vector equation · <strong>Plan:</strong> The lone vector is the point; the vectors multiplied by \(s\) and \(t\) are the direction vectors.</p>
<ol class="work"><li>Point: \((3, -7, 2)\).</li><li>Direction vectors: \(\vec a = (-2, 4, 1)\), \(\vec b = (-1, 1, 1)\). They are not scalar multiples, so they really do span a plane.</li></ol>
<p class="answer">Point \((3, -7, 2)\); direction vectors \((-2, 4, 1)\) and \((-1, 1, 1)\) (or scalar multiples of those)</p>` },

    { tier: "essential", lesson: "3.5",
      q: String.raw`<strong>Practice 6.</strong> Vectors \(\vec u\) and \(\vec v\) are a basis for a plane provided they are ____.`,
      a: String.raw`<p><strong>Type:</strong> Basis definition · <strong>Plan:</strong> Two vectors span a plane exactly when neither is a multiple of the other.</p>
<p>If \(\vec u = k\vec v\), every combination \(a\vec u + b\vec v = (ak + b)\vec v\) stays on one line. If they are not collinear, every vector in their plane can be written as \(a\vec u + b\vec v\) in exactly one way.</p>
<p class="answer">not collinear (i.e. linearly independent)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Practice 7.</strong> The plane \(2x - 5y + 3z - 4 = 0\) has a normal vector \(\vec n =\) ____.`,
      a: String.raw`<p><strong>Type:</strong> Read a normal from a Cartesian equation · <strong>Plan:</strong> In \(Ax + By + Cz + D = 0\), \(\vec n = (A, B, C)\); \(D\) plays no part.</p>
<p class="answer">\(\vec n = (2, -5, 3)\) (or any non-zero multiple)</p>` },

    { tier: "essential", lesson: "3.5",
      q: String.raw`<strong>Practice 8.</strong> If \(\vec u, \vec v, \vec w\) lie in the same plane and \(\vec u\) and \(\vec v\) are non-collinear, then \(\vec w =\) ____. These vectors are said to be ____.`,
      a: String.raw`<p><strong>Type:</strong> Linear combination / coplanar definition · <strong>Plan:</strong> Two non-collinear vectors form a basis for their plane, so any third vector in that plane is a combination of them.</p>
<p class="answer">\(\vec w = a\vec u + b\vec v\) for some \(a, b \in \mathbb{R}\); the vectors are coplanar</p>` },

    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>Practice 9.</strong> If \(P(3, -7, 4)\), \(Q(1, 3, 6)\) and \(R(-1, 2, -5)\) are three points in a plane, then two vectors in the plane are ____ and ____.`,
      a: String.raw`<p><strong>Type:</strong> Direction vectors from three points · <strong>Plan:</strong> Subtract pairs of points ("tip minus tail"), then check the two vectors you pick are not collinear.</p>
<ol class="work"><li>\(\overrightarrow{PQ} = (1 - 3,\ 3 - (-7),\ 6 - 4) = (-2, 10, 2)\).</li>
<li>\(\overrightarrow{QR} = (-1 - 1,\ 2 - 3,\ -5 - 6) = (-2, -1, -11)\), or \((2, 1, 11)\).</li>
<li>\(\overrightarrow{PR} = (-1 - 3,\ 2 - (-7),\ -5 - 4) = (-4, 9, -9)\), or \((4, -9, 9)\).</li>
<li>Any two of these are non-collinear (e.g. \(-2/-2 = 1\) but \(10/-1 = -10\)), so any pair works.</li></ol>
<p class="answer">e.g. \(\overrightarrow{PQ} = (-2, 10, 2)\) and \(\overrightarrow{QR} = (2, 1, 11)\) (also \((4, -9, 9)\); many answers possible)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Practice 10.</strong> To find the normal to the plane in #9, you should find ____.`,
      a: String.raw`<p><strong>Type:</strong> Normal from points · <strong>Plan:</strong> The cross product of two non-collinear vectors in the plane is perpendicular to both, so it is a normal.</p>
<ol class="work"><li>Using \(\overrightarrow{PQ} = (-2, 10, 2) \to (-1, 5, 1)\) and \(\overrightarrow{PR} = (4, -9, 9)\):
\[ (-1, 5, 1) \times (4, -9, 9) = \big(5(9) - 1(-9),\ 1(4) - (-1)(9),\ (-1)(-9) - 5(4)\big) = (54, 13, -11) \]</li>
<li>Going on (not asked): \(54x + 13y - 11z + D = 0\) at \(P\): \(162 - 91 - 44 + D = 0\), so \(D = -27\).</li>
<li>Check \(Q(1, 3, 6)\): \(54 + 39 - 66 - 27 = 0\) \(\checkmark\); \(R(-1, 2, -5)\): \(-54 + 26 + 55 - 27 = 0\) \(\checkmark\)</li></ol>
<p class="answer">The cross product of any two non-collinear direction vectors, e.g. \(\vec n = (54, 13, -11)\); the plane is \(54x + 13y - 11z - 27 = 0\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Practice 11.</strong> The Cartesian equation of the plane \(\vec r = (-2, 3, 2) + s(1, -3, 0) + t(-3, 1, 1),\ s, t \in \mathbb{R}\) is ____.`,
      a: String.raw`<p><strong>Type:</strong> Plane: vector form to Cartesian · <strong>Plan:</strong> Normal = cross product of the two direction vectors; then substitute the known point to find \(D\).</p>
<ol class="work"><li>\[ \vec n = (1, -3, 0) \times (-3, 1, 1) = \big((-3)(1) - 0(1),\ 0(-3) - 1(1),\ 1(1) - (-3)(-3)\big) = (-3, -1, -8) \]
Multiply by \(-1\) so \(A > 0\): \(\vec n = (3, 1, 8)\).</li>
<li>\(3x + y + 8z + D = 0\). Substitute \((-2, 3, 2)\): \(-6 + 3 + 16 + D = 0\), so \(D = -13\).</li>
<li>Check: \(\vec n \cdot (1, -3, 0) = 3 - 3 + 0 = 0\) \(\checkmark\), \(\vec n \cdot (-3, 1, 1) = -9 + 1 + 8 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(3x + y + 8z - 13 = 0\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Practice 12.</strong> The planes \(2x - 5y + 4z + 12 = 0\) and \(4x - 10y + 8z = 1\) are parallel because ____.`,
      a: String.raw`<p><strong>Type:</strong> Parallel planes test · <strong>Plan:</strong> Compare normals.</p>
<ol class="work"><li>\(\vec n_1 = (2, -5, 4)\), \(\vec n_2 = (4, -10, 8) = 2\vec n_1\): scalar multiples, so the planes are parallel.</li>
<li>Distinct or coincident? Doubling the first gives \(4x - 10y + 8z + 24 = 0\), but the second is \(4x - 10y + 8z - 1 = 0\). Different constants, so parallel and distinct.</li></ol>
<p class="answer">Their normal vectors are scalar multiples of one another: \((4, -10, 8) = 2(2, -5, 4)\)</p>` },

    { tier: "essential", lesson: "3.5",
      q: String.raw`<strong>Practice 13.</strong> To quickly determine if three vectors form a basis for space, what calculation should be performed?`,
      a: String.raw`<p><strong>Type:</strong> Basis for R³ · <strong>Plan:</strong> Three vectors form a basis for R³ exactly when they are <em>not</em> coplanar.</p>
<p>Compute the triple scalar product \(\vec u \cdot (\vec v \times \vec w)\). If it is non-zero, the vectors are not coplanar and form a basis for R³; if it is zero, they are coplanar and do not.</p>
<p class="answer">The triple scalar product \(\vec u \cdot (\vec v \times \vec w)\) (basis if \(\neq 0\))</p>` }
  ]
});

/* ---------------------------------------------------------------------------
   2. Unit review questions (C): Equation of Lines, then Equation of Planes
   --------------------------------------------------------------------------- */
window.QA.push({
  id: "qa-review", lesson: "mix",
  title: "Unit review questions",
  source: "C - Unit Review Questions",
  items: [
    /* ======================= EQUATION OF LINES ======================= */
    { tier: "essential", lesson: "3.1",
      q: String.raw`<strong>Lines 2a.</strong> Find a vector equation of the line that passes through the points \((3, 9)\) and \((-4, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Line through two points (R²) · <strong>Plan:</strong> A vector equation needs one point and one direction vector. Two points give the direction for free (subtract them), and either point can be \(\vec r_0\). Simplify the direction by dividing out a common factor.</p>
<ol class="work"><li>Let \(A(3, 9)\) and \(B(-4, 2)\). Direction: \(\vec m = \overrightarrow{AB} = (-4 - 3,\ 2 - 9) = (-7, -7)\).</li>
<li>Any non-zero multiple of a direction vector is still a direction vector, so divide by \(-7\): \(\vec m = (1, 1)\).</li>
<li>Use \(A\) as the known point: \(\vec r = (3, 9) + t(1, 1),\ t \in \mathbb{R}\).</li>
<li>Check that \(B\) is on it: \((3, 9) + t(1, 1) = (-4, 2)\) gives \(t = -7\) from \(x\) and \(t = -7\) from \(y\). Same \(t\) \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (3, 9) + t(1, 1),\ t \in \mathbb{R}\)</p>`,
      note: String.raw`Many correct answers: \(\vec r = (-4, 2) + s(-7, -7)\) describes the same line. On a test, any point on the line plus any multiple of the direction earns full marks, as long as you state \(t \in \mathbb{R}\).` },

    { tier: "essential", lesson: "3.1",
      q: String.raw`<strong>Lines 2b.</strong> Find a vector equation of the line that passes through the point \((-5, -3)\) and is parallel to the line \(\vec r = (4, 0) + t(0, 5)\).`,
      a: String.raw`<p><strong>Type:</strong> Line parallel to a given line (R²) · <strong>Plan:</strong> Parallel lines share a direction vector. Read \(\vec m\) from the given line (the vector multiplied by \(t\), not the point), then attach the new point.</p>
<ol class="work"><li>Given line: direction \((0, 5)\). Simplify: \(\vec m = (0, 1)\).</li>
<li>New point: \(\vec r_0 = (-5, -3)\). So \(\vec r = (-5, -3) + t(0, 1)\).</li>
<li>Meaning: the \(x\)-coordinate never changes, so this is the vertical line \(x = -5\). The given line is the vertical line \(x = 4\). Two vertical lines: parallel \(\checkmark\), and distinct since \(-5 \neq 4\).</li></ol>
<p class="answer">\(\vec r = (-5, -3) + t(0, 1),\ t \in \mathbb{R}\)</p>`,
      note: String.raw`The textbook answer key prints \(\vec r = (-5, -3) + t(1, 0)\). That is a horizontal line, not parallel to \((0, 5)\). The teacher's correction on the sheet is \(\vec m = (0, 1)\), which is right. Also avoid the trap of using the given point \((4, 0)\) as a direction.` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>Lines 2c.</strong> Find a vector equation of the line that is perpendicular to the line \(2x - 5y - 6 = 0\) and passes through the point \((0, -3)\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian line → perpendicular line in vector form (3.1 + 3.2) · <strong>Plan:</strong> In \(Ax + By + C = 0\), \((A, B)\) is a normal: it is perpendicular to the given line. A line perpendicular to the given line therefore runs <em>along</em> that normal, so the normal becomes the new direction vector.</p>
<ol class="work"><li>Normal of the given line: \(\vec n = (2, -5)\).</li>
<li>The new line is perpendicular to the given line, so its direction is parallel to \(\vec n\): \(\vec m = (2, -5)\).</li>
<li>With the point \((0, -3)\): \(\vec r = (0, -3) + t(2, -5)\).</li>
<li>Check: the given line's direction is \((5, 2)\) (swap the normal's components and change one sign). \((2, -5) \cdot (5, 2) = 10 - 10 = 0\), so the lines are perpendicular \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (0, -3) + t(2, -5),\ t \in \mathbb{R}\)</p>`,
      note: String.raw`Trap: using a direction of the given line, \((5, 2)\), gives a <em>parallel</em> line. Ask yourself: "is the vector I'm using along the old line or across it?"` },

    { tier: "essential", lesson: "3.1",
      q: String.raw`<strong>Lines 3a.</strong> Find parametric equations of the line that passes through \((-9, 8)\) with slope \(-\tfrac{2}{3}\).`,
      a: String.raw`<p><strong>Type:</strong> Slope → direction vector (R²) · <strong>Plan:</strong> A direction \(\vec m = (a, b)\) has slope \(\tfrac{b}{a}\) = rise over run. So slope \(-\tfrac{2}{3}\) means run 3, rise \(-2\). Then write \(x = x_0 + ta,\ y = y_0 + tb\).</p>
<ol class="work"><li>Slope \(\tfrac{b}{a} = \tfrac{-2}{3}\), so \(\vec m = (3, -2)\) (or \((-3, 2)\)).</li>
<li>Point \((-9, 8)\): \(x = -9 + 3t,\ y = 8 - 2t\).</li>
<li>Check: slope of \((3, -2)\) is \(-\tfrac{2}{3}\) \(\checkmark\); \(t = 0\) gives \((-9, 8)\) \(\checkmark\)</li></ol>
<p class="answer">\(x = -9 + 3t,\ y = 8 - 2t,\ t \in \mathbb{R}\)</p>`,
      note: String.raw`Trap: writing \(\vec m = (-2, 3)\) (rise first). The direction vector is (run, rise).` },

    { tier: "essential", lesson: "3.1",
      q: String.raw`<strong>Lines 3b.</strong> Find parametric equations of the line that passes through \((3, -2)\) and is perpendicular to the line \(\vec r = (4, -1) + t(3, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Line perpendicular to a vector-form line (R²) · <strong>Plan:</strong> Need a direction perpendicular to \((3, 2)\). Set the dot product to zero (shortcut: swap the components and change one sign).</p>
<ol class="work"><li>Let \(\vec m = (a, b)\) with \((a, b) \cdot (3, 2) = 0\): \(3a + 2b = 0\). Let \(a = 2\), then \(b = -3\): \(\vec m = (2, -3)\).</li>
<li>Point \((3, -2)\): \(x = 3 + 2s,\ y = -2 - 3s\).</li>
<li>Check: \((2, -3) \cdot (3, 2) = 6 - 6 = 0\) \(\checkmark\). Slopes \(\tfrac{2}{3}\) and \(-\tfrac{3}{2}\) are negative reciprocals \(\checkmark\)</li></ol>
<p class="answer">\(x = 3 + 2s,\ y = -2 - 3s,\ s \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.1",
      q: String.raw`<strong>Lines 3c.</strong> Find parametric equations of the line through the points \((4, 0)\) and \((0, -2)\).`,
      a: String.raw`<p><strong>Type:</strong> Line through two points (R²) · <strong>Plan:</strong> Subtract the points for \(\vec m\), simplify, use either point.</p>
<ol class="work"><li>\(\vec m = (0 - 4,\ -2 - 0) = (-4, -2)\); divide by \(-2\): \(\vec m = (2, 1)\).</li>
<li>Point \((4, 0)\): \(x = 4 + 2t,\ y = 0 + t\).</li>
<li>Check \((0, -2)\): \(x = 0\) needs \(t = -2\), and then \(y = -2\) \(\checkmark\)</li></ol>
<p class="answer">\(x = 4 + 2t,\ y = t,\ t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Lines 4a.</strong> Find a vector equation of the line that passes through the points \((2, 0, -3)\) and \((-3, 2, -2)\).`,
      a: String.raw`<p><strong>Type:</strong> Line through two points (R³) · <strong>Plan:</strong> Exactly as in R², with three components.</p>
<ol class="work"><li>\(\vec m = (-3 - 2,\ 2 - 0,\ -2 - (-3)) = (-5, 2, 1)\), or \((5, -2, -1)\).</li>
<li>\(\vec r = (2, 0, -3) + t(5, -2, -1)\).</li>
<li>Check: \(t = -1\) gives \((2 - 5,\ 0 + 2,\ -3 + 1) = (-3, 2, -2)\) \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (2, 0, -3) + t(5, -2, -1),\ t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Lines 4b.</strong> Find a vector equation of the line that has an \(x\)-intercept of \(-7\) and a \(z\)-intercept of \(4\).`,
      a: String.raw`<p><strong>Type:</strong> Intercepts → two points → line (R³) · <strong>Plan:</strong> An intercept is where the line crosses an axis, so the other two coordinates are 0. Turn each intercept into a point, then it is a two-point question.</p>
<ol class="work"><li>\(x\)-intercept \(-7\): point \((-7, 0, 0)\). \(z\)-intercept \(4\): point \((0, 0, 4)\).</li>
<li>\(\vec m = (0 - (-7),\ 0 - 0,\ 4 - 0) = (7, 0, 4)\).</li>
<li>\(\vec r = (-7, 0, 0) + t(7, 0, 4)\).</li>
<li>Check: \(t = 1\) gives \((0, 0, 4)\) \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (-7, 0, 0) + t(7, 0, 4),\ t \in \mathbb{R}\)</p>`,
      note: String.raw`The textbook key prints \(\vec r = (-7, 0, 0) + t(7, 4, 0)\); the teacher's correction is \(\vec m = (7, 0, 4)\). Putting the 4 in the \(y\)-slot would send the line through \((0, 4, 0)\), a \(y\)-intercept. Keep each intercept in its own coordinate.` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Lines 4c.</strong> Find a vector equation of the line that is parallel to \(\dfrac{x - 5}{4} = \dfrac{y + 2}{-2} = \dfrac{z + 6}{5}\) and passes through the point \((0, 6, 0)\).`,
      a: String.raw`<p><strong>Type:</strong> Symmetric → direction, parallel line (R³) · <strong>Plan:</strong> In symmetric form the denominators are the direction vector. Parallel lines share it.</p>
<ol class="work"><li>Denominators: \(\vec m = (4, -2, 5)\).</li>
<li>\(\vec r = (0, 6, 0) + t(4, -2, 5)\).</li>
<li>Check: \(t = 0\) gives \((0, 6, 0)\) \(\checkmark\); same direction as the given line \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (0, 6, 0) + t(4, -2, 5),\ t \in \mathbb{R}\)</p>`,
      note: String.raw`Trap: \((5, -2, -6)\) is the given line's <em>point</em>, not its direction.` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Lines 5a.</strong> Find parametric equations of the line that is parallel to the line \(\dfrac{x + 1}{-3} = \dfrac{y + 2}{-2} = z + 3\) and passes through the origin.`,
      a: String.raw`<p><strong>Type:</strong> Symmetric → direction, parallel line (R³) · <strong>Plan:</strong> Read the denominators (including the hidden 1 under \(z + 3\)), then use the origin as the point.</p>
<ol class="work"><li>\(z + 3 = \dfrac{z + 3}{1}\), so \(\vec m = (-3, -2, 1)\); multiply by \(-1\) for a tidier \((3, 2, -1)\).</li>
<li>Through \((0, 0, 0)\): \(x = 3t,\ y = 2t,\ z = -t\).</li>
<li>Check: \((3, 2, -1) = -1 \cdot (-3, -2, 1)\), parallel \(\checkmark\)</li></ol>
<p class="answer">\(x = 3t,\ y = 2t,\ z = -t,\ t \in \mathbb{R}\)</p>`,
      note: String.raw`Trap: missing the hidden denominator 1 and writing the direction as \((-3, -2, 3)\).` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Lines 5b.</strong> Find parametric equations of the line that passes through the point \((6, -4, 5)\) and is parallel to the \(y\)-axis.`,
      a: String.raw`<p><strong>Type:</strong> Line parallel to an axis · <strong>Plan:</strong> The \(y\)-axis has direction \(\hat\jmath = (0, 1, 0)\). Only \(y\) changes.</p>
<ol class="work"><li>\(\vec m = (0, 1, 0)\), point \((6, -4, 5)\).</li>
<li>\(x = 6 + 0t = 6,\ y = -4 + t,\ z = 5 + 0t = 5\).</li></ol>
<p class="answer">\(x = 6,\ y = -4 + t,\ z = 5,\ t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.2",
      q: String.raw`<strong>Lines 6a.</strong> Find the Cartesian equation of the line that passes through the point \((-1, -2)\) and is parallel to the line \(3x - 4y + 5 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Parallel line, Cartesian (R²) · <strong>Plan:</strong> Parallel lines have the same normal, so keep \(A\) and \(B\) and find a new \(C\) from the point.</p>
<ol class="work"><li>Same normal \(\vec n = (3, -4)\): \(3x - 4y + C = 0\).</li>
<li>Substitute \((-1, -2)\): \(3(-1) - 4(-2) + C = 0 \Rightarrow -3 + 8 + C = 0 \Rightarrow C = -5\).</li>
<li>Check: \(3(-1) - 4(-2) - 5 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(3x - 4y - 5 = 0\)</p>`,
      note: String.raw`Trap: keeping \(C = 5\) from the old line. That is the old line itself, and it does not pass through \((-1, -2)\).` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>Lines 6b.</strong> Find the Cartesian equation of the line that passes through the point \((-7, 3)\) and is perpendicular to the line \(x = 2 + t,\ y = -3 + 2t\).`,
      a: String.raw`<p><strong>Type:</strong> Parametric line → perpendicular line in Cartesian form (3.1 + 3.2) · <strong>Plan:</strong> The given line's direction \((1, 2)\) points across the new line, i.e. it is perpendicular to the new line. That is exactly what a normal is, so \((1, 2)\) is the new line's normal and the equation is \(x + 2y + C = 0\).</p>
<ol class="work"><li>Given direction \(\vec m = (1, 2)\) (coefficients of \(t\)).</li>
<li>New line \(\perp\) given line, so the new normal is \(\vec n = (1, 2)\): \(x + 2y + C = 0\).</li>
<li>Substitute \((-7, 3)\): \(-7 + 6 + C = 0 \Rightarrow C = 1\).</li>
<li>Check: new direction \((2, -1)\) (from \(\vec n\)); \((2, -1) \cdot (1, 2) = 0\), perpendicular \(\checkmark\); point: \(-7 + 6 + 1 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(x + 2y + 1 = 0\)</p>` },

    { tier: "essential", lesson: "3.2",
      q: String.raw`<strong>Lines 6c.</strong> Find the Cartesian equation of the line that passes through the origin and is perpendicular to the line \(x + 4y + 1 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Perpendicular line, Cartesian (R²) · <strong>Plan:</strong> The given normal \((1, 4)\) is the new line's <em>direction</em>. Turn that direction into the new normal (swap, change one sign), then use the origin.</p>
<ol class="work"><li>Given normal \((1, 4)\) = new direction \(\vec m = (1, 4)\).</li>
<li>New normal: \(\vec n = (4, -1)\) (check \((4, -1) \cdot (1, 4) = 0\)). Equation: \(4x - y + C = 0\).</li>
<li>Through \((0, 0)\): \(C = 0\).</li>
<li>Check: the slopes are \(-\tfrac{1}{4}\) (given) and \(4\) (new); product \(-1\) \(\checkmark\)</li></ol>
<p class="answer">\(4x - y = 0\)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Lines 7a.</strong> Find the parametric equations of the line \(l\) that passes through the point \(A(6, 4, 0)\) and is parallel to the line passing through \(B(-2, 0, 4)\) and \(C(3, -2, 1)\).`,
      a: String.raw`<p><strong>Type:</strong> Parallel line via two points (R³) · <strong>Plan:</strong> The direction of line \(BC\) is \(\overrightarrow{BC}\); line \(l\) uses that direction with point \(A\).</p>
<ol class="work"><li>\(\vec m = \overrightarrow{BC} = (3 - (-2),\ -2 - 0,\ 1 - 4) = (5, -2, -3)\).</li>
<li>\(x = 6 + 5t,\ y = 4 - 2t,\ z = 0 - 3t\).</li></ol>
<p class="answer">\(x = 6 + 5t,\ y = 4 - 2t,\ z = -3t,\ t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Lines 7b.</strong> If \((-4, m, n)\) is a point on \(l\), find \(m\) and \(n\).`,
      a: String.raw`<p><strong>Type:</strong> Point on a line with unknowns · <strong>Plan:</strong> Use the coordinate you know (\(x = -4\)) to find the parameter, then substitute that \(t\) into the other two equations.</p>
<ol class="work"><li>\(x\): \(-4 = 6 + 5t \Rightarrow 5t = -10 \Rightarrow t = -2\).</li>
<li>\(y\): \(m = 4 - 2(-2) = 8\).</li>
<li>\(z\): \(n = -3(-2) = 6\).</li>
<li>Check: \((6, 4, 0) - 2(5, -2, -3) = (6 - 10,\ 4 + 4,\ 0 + 6) = (-4, 8, 6)\) \(\checkmark\)</li></ol>
<p class="answer">\(m = 8,\ n = 6\)</p>`,
      note: String.raw`The textbook key says \(n = -2\); the teacher's correction is \(n = 6\), which the check confirms.` },

    { tier: "essential", lesson: "3.1",
      q: String.raw`<strong>Lines 8a.</strong> Determine if the lines are parallel and distinct, coincident, perpendicular, or none of these: \(\vec r = (2, 3) + t(-3, 1)\) and \(\vec r = (-1, 4) + u(6, -2)\).`,
      a: String.raw`<p><strong>Type:</strong> Classify two lines · <strong>Plan:</strong> (1) Compare directions: parallel if \(\vec m_1 = k\vec m_2\). (2) If parallel, test a point from one line in the other: on it means coincident, off it means distinct. (3) If not parallel, test \(\vec m_1 \cdot \vec m_2 = 0\).</p>
<ol class="work"><li>\((6, -2) = -2(-3, 1)\), so the lines are parallel.</li>
<li>Is \((-1, 4)\) on the first line? \(x\): \(-1 = 2 - 3t \Rightarrow t = 1\). \(y\): \(4 = 3 + t \Rightarrow t = 1\). Same \(t\), so yes.</li>
<li>Parallel and sharing a point: the same line.</li></ol>
<p class="answer">Coincident</p>` },

    { tier: "essential", lesson: "3.1",
      q: String.raw`<strong>Lines 8b.</strong> Classify: \(x = 1 + 2t,\ y = -3 - t\) and \(x = u,\ y = \tfrac{1}{3} + 2u\).`,
      a: String.raw`<p><strong>Type:</strong> Classify two lines (R², parametric) · <strong>Plan:</strong> Read the directions from the coefficients of the parameters, then test parallel, then perpendicular.</p>
<ol class="work"><li>\(\vec m_1 = (2, -1)\), \(\vec m_2 = (1, 2)\). Not multiples (\(\tfrac{2}{1} \neq \tfrac{-1}{2}\)), so not parallel.</li>
<li>\(\vec m_1 \cdot \vec m_2 = 2(1) + (-1)(2) = 0\), so perpendicular.</li></ol>
<p class="answer">Perpendicular</p>` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Lines 8c.</strong> Classify: \(\dfrac{x - 1}{2} = \dfrac{y + 4}{1},\ z = 1\) and \(x = 4t,\ y = 1 + 2t,\ z = 6\).`,
      a: String.raw`<p><strong>Type:</strong> Classify two lines (R³, mixed symmetric/parametric) · <strong>Plan:</strong> "\(z = 1\)" means \(z\) never changes, so the \(z\)-component of the direction is 0. Get both directions, test parallel, then test a point.</p>
<ol class="work"><li>Line 1: point \((1, -4, 1)\), \(\vec m_1 = (2, 1, 0)\). Line 2: point \((0, 1, 6)\), \(\vec m_2 = (4, 2, 0)\).</li>
<li>\(\vec m_2 = 2\vec m_1\): parallel.</li>
<li>Is \((0, 1, 6)\) on line 1? Every point of line 1 has \(z = 1\), but this point has \(z = 6\). No.</li></ol>
<p class="answer">Parallel and distinct</p>`,
      note: String.raw`Trap: reading line 1's direction as \((2, 1, 1)\). The "\(z = 1\)" is a coordinate, not a direction component.` },

    { tier: "essential", lesson: "3.3",
      q: String.raw`<strong>Lines 8d.</strong> Classify: \((x, y, z) = (1, 7, 2) + t(-1, -1, 1)\) and \((x, y, z) = (-3, 0, 1) + u(2, -2, -2)\).`,
      a: String.raw`<p><strong>Type:</strong> Classify two lines (R³) · <strong>Plan:</strong> Test parallel (one \(k\) for all components), then perpendicular (dot product). Going a step further, try to solve for a common point to tell intersecting from skew.</p>
<ol class="work"><li>Parallel? \((2, -2, -2) = k(-1, -1, 1)\) needs \(k = -2\) from \(x\) but \(k = 2\) from \(y\). Not parallel.</li>
<li>Perpendicular? \(\vec m_1 \cdot \vec m_2 = (-1)(2) + (-1)(-2) + (1)(-2) = -2 + 2 - 2 = -2 \neq 0\). Not perpendicular.</li>
<li>Extra: do they meet? Set components equal: \(1 - t = -3 + 2u\) (1), \(7 - t = -2u\) (2), \(2 + t = 1 - 2u\) (3). From (1), \(t = 4 - 2u\); into (2): \(3 + 2u = -2u \Rightarrow u = -\tfrac{3}{4}\), \(t = \tfrac{11}{2}\).</li>
<li>Check in (3): LS \(= 2 + \tfrac{11}{2} = \tfrac{15}{2}\), RS \(= 1 + \tfrac{3}{2} = \tfrac{5}{2}\). LS \(\neq\) RS, so no common point: the lines are skew.</li></ol>
<p class="answer">Neither parallel nor perpendicular (they are in fact skew lines)</p>`,
      note: String.raw`The teacher's note on the key says "8d) neither". In R³ "not parallel" does not mean "intersecting"; lines can miss each other (skew).` },

    { tier: "essential", lesson: "3.2",
      q: String.raw`<strong>Lines 10a.</strong> In the \(xy\)-plane, find the Cartesian equation of the line \(\vec r = (2, 3) + t(-1, 5)\).`,
      a: String.raw`<p><strong>Type:</strong> Vector → Cartesian (R²) · <strong>Plan:</strong> Turn the direction into a normal (swap components, change one sign), write \(Ax + By + C = 0\), substitute the point for \(C\).</p>
<ol class="work"><li>\(\vec m = (-1, 5)\), so \(\vec n = (5, 1)\). Check: \((5, 1) \cdot (-1, 5) = -5 + 5 = 0\).</li>
<li>\(5x + y + C = 0\); at \((2, 3)\): \(10 + 3 + C = 0 \Rightarrow C = -13\).</li>
<li>Check another point (\(t = 1\)): \((1, 8)\): \(5 + 8 - 13 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(5x + y - 13 = 0\)</p>
<p>Alternative (symmetric route): \(\dfrac{x - 2}{-1} = \dfrac{y - 3}{5} \Rightarrow 5(x - 2) = -(y - 3) \Rightarrow 5x + y - 13 = 0\).</p>` },

    { tier: "essential", lesson: "3.2",
      q: String.raw`<strong>Lines 10b.</strong> In the \(xy\)-plane, find a vector equation of the line \(5x - 2y + 10 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian → vector (R²) · <strong>Plan:</strong> Turn the normal into a direction (swap, change one sign) and find any point by setting \(x = 0\).</p>
<ol class="work"><li>\(\vec n = (5, -2)\), so \(\vec m = (2, 5)\). Check: \((2, 5) \cdot (5, -2) = 10 - 10 = 0\).</li>
<li>Point: \(x = 0 \Rightarrow -2y + 10 = 0 \Rightarrow y = 5\), so \((0, 5)\).</li>
<li>Check (\(t = 1\)): \((2, 10)\): \(10 - 20 + 10 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (0, 5) + t(2, 5),\ t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.2",
      q: String.raw`<strong>Lines 10c.</strong> In the \(xy\)-plane, find a vector equation of the line \(y = \tfrac{3}{4}x + \tfrac{1}{2}\).`,
      a: String.raw`<p><strong>Type:</strong> Slope-intercept → vector (R²) · <strong>Plan:</strong> Slope \(\tfrac{3}{4}\) gives \(\vec m = (4, 3)\); pick an easy point (an \(x\) that makes \(y\) whole).</p>
<ol class="work"><li>\(\vec m = (4, 3)\) (run 4, rise 3).</li>
<li>Point: \(x = 2 \Rightarrow y = \tfrac{3}{2} + \tfrac{1}{2} = 2\), so \((2, 2)\). (The \(y\)-intercept \((0, \tfrac{1}{2})\) works too.)</li>
<li>Check (\(t = -2\)): \((-6, -4)\): \(\tfrac{3}{4}(-6) + \tfrac{1}{2} = -4\) \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (2, 2) + t(4, 3),\ t \in \mathbb{R}\) (or \(\vec r = (0, \tfrac{1}{2}) + t(4, 3)\))</p>` },

    { tier: "likely", lesson: "3.3",
      q: String.raw`<strong>Lines 12a.</strong> Find the direction cosines and the direction angles (to the nearest degree) of the direction vector of \(\dfrac{x - 3}{5} = \dfrac{y + 6}{2} = \dfrac{z - 1}{-1}\).`,
      a: String.raw`<p><strong>Type:</strong> Direction cosines (review from the vectors unit) · <strong>Plan:</strong> Read \(\vec m\) from the denominators. Each direction cosine is a component divided by \(|\vec m|\): \(\cos\alpha = \tfrac{a}{|\vec m|}\), \(\cos\beta = \tfrac{b}{|\vec m|}\), \(\cos\gamma = \tfrac{c}{|\vec m|}\). Then inverse cosine.</p>
<ol class="work"><li>\(\vec m = (5, 2, -1)\), \(|\vec m| = \sqrt{25 + 4 + 1} = \sqrt{30}\).</li>
<li>\[ \cos\alpha = \frac{5}{\sqrt{30}} = \frac{\sqrt{30}}{6}, \quad \cos\beta = \frac{2}{\sqrt{30}} = \frac{\sqrt{30}}{15}, \quad \cos\gamma = \frac{-1}{\sqrt{30}} = -\frac{\sqrt{30}}{30} \]</li>
<li>\(\alpha = \cos^{-1}(0.9129) \approx 24^\circ\), \(\beta = \cos^{-1}(0.3651) \approx 69^\circ\), \(\gamma = \cos^{-1}(-0.1826) \approx 101^\circ\).</li>
<li>Check: \(\cos^2\alpha + \cos^2\beta + \cos^2\gamma = \tfrac{25 + 4 + 1}{30} = 1\) \(\checkmark\)</li></ol>
<p class="answer">\(\cos\alpha = \tfrac{\sqrt{30}}{6},\ \cos\beta = \tfrac{\sqrt{30}}{15},\ \cos\gamma = -\tfrac{\sqrt{30}}{30}\); \(\alpha \approx 24^\circ,\ \beta \approx 69^\circ,\ \gamma \approx 101^\circ\)</p>`,
      note: String.raw`The teacher's note: direction cosines should be rationalized (the key leaves \(\tfrac{5}{\sqrt{30}}\) etc.). An angle over \(90^\circ\) just means that component is negative.` },

    { tier: "likely", lesson: "3.3",
      q: String.raw`<strong>Lines 12b.</strong> Find the direction cosines and direction angles of the direction vector of \(x = 1 + 8t,\ y = 2 - t,\ z = 4 - 4t\).`,
      a: String.raw`<p><strong>Type:</strong> Direction cosines · <strong>Plan:</strong> Coefficients of \(t\) give \(\vec m\); divide each by \(|\vec m|\).</p>
<ol class="work"><li>\(\vec m = (8, -1, -4)\), \(|\vec m| = \sqrt{64 + 1 + 16} = \sqrt{81} = 9\).</li>
<li>\(\cos\alpha = \tfrac{8}{9},\ \cos\beta = -\tfrac{1}{9},\ \cos\gamma = -\tfrac{4}{9}\) (already rational).</li>
<li>\(\alpha \approx 27^\circ,\ \beta \approx 96^\circ,\ \gamma \approx 116^\circ\).</li>
<li>Check: \(\tfrac{64 + 1 + 16}{81} = 1\) \(\checkmark\)</li></ol>
<p class="answer">\(\cos\alpha = \tfrac{8}{9},\ \cos\beta = -\tfrac{1}{9},\ \cos\gamma = -\tfrac{4}{9}\); \(\alpha \approx 27^\circ,\ \beta \approx 96^\circ,\ \gamma \approx 116^\circ\)</p>` },

    { tier: "likely", lesson: "3.3",
      q: String.raw`<strong>Lines 12c.</strong> Find the direction cosines and direction angles of the direction vector of \(\vec r = (-7, 0, 0) + t(4, 1, 0)\).`,
      a: String.raw`<p><strong>Type:</strong> Direction cosines · <strong>Plan:</strong> Same method; a zero component gives a \(90^\circ\) angle.</p>
<ol class="work"><li>\(\vec m = (4, 1, 0)\), \(|\vec m| = \sqrt{17}\).</li>
<li>\(\cos\alpha = \tfrac{4}{\sqrt{17}} = \tfrac{4\sqrt{17}}{17},\ \cos\beta = \tfrac{1}{\sqrt{17}} = \tfrac{\sqrt{17}}{17},\ \cos\gamma = 0\).</li>
<li>\(\alpha \approx 14^\circ,\ \beta \approx 76^\circ,\ \gamma = 90^\circ\). The line is horizontal (parallel to the \(xy\)-plane), so it makes \(90^\circ\) with the \(z\)-axis.</li>
<li>Check: \(\tfrac{16 + 1 + 0}{17} = 1\) \(\checkmark\)</li></ol>
<p class="answer">\(\cos\alpha = \tfrac{4\sqrt{17}}{17},\ \cos\beta = \tfrac{\sqrt{17}}{17},\ \cos\gamma = 0\); \(\alpha \approx 14^\circ,\ \beta \approx 76^\circ,\ \gamma = 90^\circ\)</p>` },

    { tier: "essential", lesson: "3.4",
      q: String.raw`<strong>Lines 14a.</strong> Find the shortest distance between the points \((2, 1, 3)\) and \((0, -4, 7)\).`,
      a: String.raw`<p><strong>Type:</strong> Distance between two points · <strong>Plan:</strong> The magnitude of the vector joining them.</p>
<ol class="work"><li>Vector: \((0 - 2,\ -4 - 1,\ 7 - 3) = (-2, -5, 4)\).</li>
<li>\(d = \sqrt{4 + 25 + 16} = \sqrt{45} = 3\sqrt{5}\).</li></ol>
<p class="answer">\(3\sqrt{5}\) units \((\approx 6.71)\)</p>` },

    { tier: "essential", lesson: "3.4",
      q: String.raw`<strong>Lines 14b.</strong> Find the shortest distance between the point \((3, 7)\) and the line \(2x - 3y = 7\).`,
      a: String.raw`<p><strong>Type:</strong> Point-to-line distance (R²) · <strong>Plan:</strong> First put the line in the form \(Ax + By + C = 0\) (move the 7 across!), then apply \(d = \dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\).</p>
<ol class="work"><li>\(2x - 3y - 7 = 0\): \(A = 2,\ B = -3,\ C = -7\).</li>
<li>\[ d = \frac{|2(3) - 3(7) - 7|}{\sqrt{4 + 9}} = \frac{|6 - 21 - 7|}{\sqrt{13}} = \frac{22}{\sqrt{13}} = \frac{22\sqrt{13}}{13} \]</li></ol>
<p class="answer">\(\dfrac{22\sqrt{13}}{13}\) units \((\approx 6.10)\)</p>`,
      note: String.raw`Trap: using \(C = +7\) straight from "\(= 7\)" gives \(|6 - 21 + 7| = 8\), which is wrong. The formula needs everything on one side.` },

    { tier: "essential", lesson: "3.4",
      q: String.raw`<strong>Lines 14c.</strong> Find the shortest distance between the point \((4, 0, 1)\) and the line \(\vec r = (2, -2, 1) + t(1, 2, -1)\).`,
      a: String.raw`<p><strong>Type:</strong> Point-to-line distance (R³) · <strong>Plan:</strong> Use \(d = \dfrac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\) with \(P_0\) the line's known point.</p>
<ol class="work"><li>\(P_0(2, -2, 1)\), \(P(4, 0, 1)\): \(\overrightarrow{P_0P} = (2, 2, 0)\); \(\vec m = (1, 2, -1)\).</li>
<li>\[ \overrightarrow{P_0P} \times \vec m = \big(2(-1) - 0(2),\ 0(1) - 2(-1),\ 2(2) - 2(1)\big) = (-2, 2, 2) \]</li>
<li>\(|\overrightarrow{P_0P} \times \vec m| = \sqrt{4 + 4 + 4} = 2\sqrt{3}\); \(|\vec m| = \sqrt{1 + 4 + 1} = \sqrt{6}\).</li>
<li>\(d = \dfrac{2\sqrt{3}}{\sqrt{6}} = \dfrac{2}{\sqrt{2}} = \sqrt{2}\).</li>
<li>Check with Pythagoras: \(|\overrightarrow{P_0P}|^2 = 8\); the part along the line is \(\tfrac{\overrightarrow{P_0P} \cdot \vec m}{|\vec m|} = \tfrac{6}{\sqrt{6}} = \sqrt{6}\); \(d^2 = 8 - 6 = 2\) \(\checkmark\)</li></ol>
<p class="answer">\(\sqrt{2}\) units</p>` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>Lines 14d.</strong> Find the shortest distance between the point \((1, 3, 2)\) and the line \(\dfrac{x - 1}{-1} = \dfrac{y - 3}{1} = \dfrac{z - 7}{2}\).`,
      a: String.raw`<p><strong>Type:</strong> Read symmetric equations + point-to-line distance (3.3 + 3.4) · <strong>Plan:</strong> Pull \(P_0\) and \(\vec m\) out of the symmetric form, then use the cross-product formula.</p>
<ol class="work"><li>\(P_0(1, 3, 7)\), \(\vec m = (-1, 1, 2)\). \(\overrightarrow{P_0P} = (1 - 1,\ 3 - 3,\ 2 - 7) = (0, 0, -5)\).</li>
<li>\[ \overrightarrow{P_0P} \times \vec m = \big(0(2) - (-5)(1),\ (-5)(-1) - 0(2),\ 0(1) - 0(-1)\big) = (5, 5, 0) \]</li>
<li>\(|(5, 5, 0)| = 5\sqrt{2}\), \(|\vec m| = \sqrt{6}\): \(d = \dfrac{5\sqrt{2}}{\sqrt{6}} = \dfrac{5}{\sqrt{3}} = \dfrac{5\sqrt{3}}{3}\).</li>
<li>Check: \(|\overrightarrow{P_0P}|^2 = 25\), \(\overrightarrow{P_0P} \cdot \vec m = -10\), so the along-the-line part squared is \(\tfrac{100}{6}\); \(d^2 = 25 - \tfrac{50}{3} = \tfrac{25}{3}\) \(\checkmark\)</li></ol>
<p class="answer">\(\dfrac{5\sqrt{3}}{3}\) units \((\approx 2.89)\)</p>` },

    /* ======================= EQUATION OF PLANES ======================= */
    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>Planes 2a.</strong> Find vector and parametric equations of the plane that passes through the point \((-1, -1, 2)\) and is parallel to the plane \(\vec r = (2, -1, 0) + s(5, 4, 2) + t(0, 0, 1)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane parallel to a given plane (vector form) · <strong>Plan:</strong> Parallel planes can use the same two direction vectors; only the point changes.</p>
<ol class="work"><li>Directions \(\vec a = (5, 4, 2)\), \(\vec b = (0, 0, 1)\) (non-collinear). Point \((-1, -1, 2)\).</li>
<li>\(\vec r = (-1, -1, 2) + s(5, 4, 2) + t(0, 0, 1)\).</li>
<li>Components: \(x = -1 + 5s,\ y = -1 + 4s,\ z = 2 + 2s + t\).</li>
<li>Check it is a different plane: the given plane's normal is \((5, 4, 2) \times (0, 0, 1) = (4, -5, 0)\), so it is \(4x - 5y - 13 = 0\). At \((-1, -1, 2)\): \(-4 + 5 - 13 = -12 \neq 0\), so the new plane is parallel and distinct \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (-1, -1, 2) + s(5, 4, 2) + t(0, 0, 1),\ s, t \in \mathbb{R}\); \(x = -1 + 5s,\ y = -1 + 4s,\ z = 2 + 2s + t\)</p>` },

    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>Planes 2b.</strong> Find vector and parametric equations of the plane that passes through the points \((1, 1, 0)\) and \((-2, 0, 3)\) and is parallel to the \(y\)-axis.`,
      a: String.raw`<p><strong>Type:</strong> Plane from two points + an axis direction · <strong>Plan:</strong> A plane needs a point and two non-collinear directions. One direction comes from the two points; "parallel to the \(y\)-axis" hands you the other, \(\hat\jmath = (0, 1, 0)\).</p>
<ol class="work"><li>\(\vec a = (-2 - 1,\ 0 - 1,\ 3 - 0) = (-3, -1, 3)\), or \((3, 1, -3)\). \(\vec b = (0, 1, 0)\). Not collinear \(\checkmark\)</li>
<li>\(\vec r = (1, 1, 0) + s(0, 1, 0) + t(3, 1, -3)\).</li>
<li>Components: \(x = 1 + 3t,\ y = 1 + s + t,\ z = -3t\).</li>
<li>Check \((-2, 0, 3)\): \(x\) gives \(t = -1\); then \(z = 3\) \(\checkmark\); \(y = 1 + s - 1 = 0\) gives \(s = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (1, 1, 0) + s(0, 1, 0) + t(3, 1, -3),\ s, t \in \mathbb{R}\); \(x = 1 + 3t,\ y = 1 + s + t,\ z = -3t\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Planes 3a.</strong> Find the scalar equation of the plane that passes through the point \((1, 7, 9)\) and has normal \(\vec n = (1, 3, 5)\).`,
      a: String.raw`<p><strong>Type:</strong> Point + normal → Cartesian · <strong>Plan:</strong> The normal gives \(A, B, C\) directly; substitute the point for \(D\).</p>
<ol class="work"><li>\(x + 3y + 5z + D = 0\).</li>
<li>At \((1, 7, 9)\): \(1 + 21 + 45 + D = 0 \Rightarrow D = -67\).</li></ol>
<p class="answer">\(x + 3y + 5z - 67 = 0\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Planes 3b.</strong> Find the scalar equation of the plane that passes through the points \((3, 2, 3)\), \((-4, 1, 2)\) and \((-1, 3, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane through three points → Cartesian · <strong>Plan:</strong> Two vectors from the points (check non-collinear), normal = their cross product, then substitute a point for \(D\).</p>
<ol class="work"><li>\(A(3, 2, 3), B(-4, 1, 2), C(-1, 3, 2)\). \(\overrightarrow{AB} = (-7, -1, -1)\), \(\overrightarrow{AC} = (-4, 1, -1)\). Not multiples \(\checkmark\)</li>
<li>\[ \vec n = \overrightarrow{AB} \times \overrightarrow{AC} = \big((-1)(-1) - (-1)(1),\ (-1)(-4) - (-7)(-1),\ (-7)(1) - (-1)(-4)\big) = (2, -3, -11) \]</li>
<li>\(2x - 3y - 11z + D = 0\); at \(A\): \(6 - 6 - 33 + D = 0 \Rightarrow D = 33\).</li>
<li>Check \(B\): \(-8 - 3 - 22 + 33 = 0\) \(\checkmark\); \(C\): \(-2 - 9 - 22 + 33 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(2x - 3y - 11z + 33 = 0\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Planes 3c.</strong> Find the scalar equation of the plane that passes through the point \((0, 0, 6)\) and is parallel to the plane \(y + z = 5\).`,
      a: String.raw`<p><strong>Type:</strong> Parallel plane, Cartesian · <strong>Plan:</strong> Parallel planes share a normal. Read it carefully: there is no \(x\)-term, so \(A = 0\).</p>
<ol class="work"><li>\(y + z - 5 = 0\) means \(0x + 1y + 1z - 5 = 0\): \(\vec n = (0, 1, 1)\).</li>
<li>\(y + z + D = 0\); at \((0, 0, 6)\): \(6 + D = 0 \Rightarrow D = -6\).</li></ol>
<p class="answer">\(y + z - 6 = 0\)</p>`,
      note: String.raw`Trap: treating \(y + z = 5\) as a line, or writing the normal as \((1, 1, 1)\). In R³ a missing variable means a zero coefficient, and the equation is still a plane.` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>Planes 3d.</strong> Find the scalar equation of the plane that contains the point \((3, -3, 0)\) and the line \(x = 2,\ y = 3 + t,\ z = -4 - 2t\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing a line and a point (3.3 + 3.7) · <strong>Plan:</strong> The line gives one point \(P_0\) and one direction \(\vec m\). The vector from \(P_0\) to the outside point gives a second direction. Cross them for the normal.</p>
<ol class="work"><li>Line: \(P_0(2, 3, -4)\), \(\vec m = (0, 1, -2)\) (\(x = 2\) never changes, so its component is 0).</li>
<li>\(\overrightarrow{P_0P} = (3 - 2,\ -3 - 3,\ 0 - (-4)) = (1, -6, 4)\). Not a multiple of \(\vec m\) \(\checkmark\)</li>
<li>\[ \vec n = \vec m \times \overrightarrow{P_0P} = \big(1(4) - (-2)(-6),\ (-2)(1) - 0(4),\ 0(-6) - 1(1)\big) = (-8, -2, -1) \to (8, 2, 1) \]</li>
<li>\(8x + 2y + z + D = 0\); at \((3, -3, 0)\): \(24 - 6 + 0 + D = 0 \Rightarrow D = -18\).</li>
<li>Check: \(P_0(2, 3, -4)\): \(16 + 6 - 4 - 18 = 0\) \(\checkmark\); \(\vec n \cdot \vec m = 0 + 2 - 2 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(8x + 2y + z - 18 = 0\)</p>` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>Planes 3e.</strong> Find the scalar equation of the plane that contains the line \(\vec r = (2, 1, 7) + s(0, 1, 0)\) and is parallel to the line \(\vec r = (3, 0, 4) + t(2, -1, 0)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing one line, parallel to another (3.3 + 3.7) · <strong>Plan:</strong> Both lines' directions lie along the plane, so cross them for the normal. Use a point from the line the plane <em>contains</em> (not the parallel one).</p>
<ol class="work"><li>\(\vec a = (0, 1, 0)\), \(\vec b = (2, -1, 0)\).</li>
<li>\[ \vec n = \vec a \times \vec b = \big(1(0) - 0(-1),\ 0(2) - 0(0),\ 0(-1) - 1(2)\big) = (0, 0, -2) \to (0, 0, 1) \]</li>
<li>\(z + D = 0\); at \((2, 1, 7)\): \(D = -7\).</li>
<li>Check: the second line has \(z = 4\) always, so it lies in the plane \(z = 4\), parallel to \(z = 7\) and never touching it \(\checkmark\)</li></ol>
<p class="answer">\(z - 7 = 0\)</p>`,
      note: String.raw`Trap: substituting \((3, 0, 4)\) to find \(D\). That line is only parallel to the plane, not in it, and would give \(z - 4 = 0\).` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>Planes 3f.</strong> Find the scalar equation of the plane that contains the points \((6, 1, 0)\) and \((3, 0, 2)\), and is parallel to the \(z\)-axis.`,
      a: String.raw`<p><strong>Type:</strong> Plane from two points + an axis direction → Cartesian (3.6 + 3.7) · <strong>Plan:</strong> One direction from the two points, the other is \(\hat k = (0, 0, 1)\); cross for the normal.</p>
<ol class="work"><li>\(\vec a = (3 - 6,\ 0 - 1,\ 2 - 0) = (-3, -1, 2)\), \(\vec b = (0, 0, 1)\).</li>
<li>\[ \vec n = \vec a \times \vec b = \big((-1)(1) - 2(0),\ 2(0) - (-3)(1),\ (-3)(0) - (-1)(0)\big) = (-1, 3, 0) \to (1, -3, 0) \]</li>
<li>\(x - 3y + D = 0\); at \((6, 1, 0)\): \(6 - 3 + D = 0 \Rightarrow D = -3\).</li>
<li>Check \((3, 0, 2)\): \(3 - 0 - 3 = 0\) \(\checkmark\). No \(z\)-term, as expected for a plane parallel to the \(z\)-axis.</li></ol>
<p class="answer">\(x - 3y - 3 = 0\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Planes 4a.</strong> For what value of \(k\), if any, will the planes \(3x + ky + z - 6 = 0\) and \(6x + (1 - k)y + 2z - 9 = 0\) be parallel?`,
      a: String.raw`<p><strong>Type:</strong> Parallel planes with a parameter · <strong>Plan:</strong> Parallel means \(\vec n_2 = c\,\vec n_1\). The components without \(k\) fix the multiplier \(c\); then match the \(k\) component.</p>
<ol class="work"><li>\(\vec n_1 = (3, k, 1)\), \(\vec n_2 = (6, 1 - k, 2)\).</li>
<li>From \(x\) and \(z\): \(6 = 3c\) and \(2 = c\), so \(c = 2\).</li>
<li>\(y\): \(1 - k = 2k \Rightarrow k = \tfrac{1}{3}\).</li>
<li>Check: \(\vec n_1 = (3, \tfrac{1}{3}, 1)\), \(\vec n_2 = (6, \tfrac{2}{3}, 2) = 2\vec n_1\) \(\checkmark\). Doubling plane 1 gives constant \(-12 \neq -9\), so they are distinct parallel planes.</li></ol>
<p class="answer">\(k = \tfrac{1}{3}\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Planes 4b.</strong> For what value of \(k\), if any, will the same planes be perpendicular?`,
      a: String.raw`<p><strong>Type:</strong> Perpendicular planes with a parameter · <strong>Plan:</strong> Perpendicular means \(\vec n_1 \cdot \vec n_2 = 0\); this gives a quadratic in \(k\).</p>
<ol class="work"><li>\((3, k, 1) \cdot (6, 1 - k, 2) = 18 + k - k^2 + 2 = 0\).</li>
<li>\(-k^2 + k + 20 = 0 \Rightarrow k^2 - k - 20 = 0 \Rightarrow (k - 5)(k + 4) = 0\).</li>
<li>Check \(k = 5\): \((3, 5, 1) \cdot (6, -4, 2) = 18 - 20 + 2 = 0\) \(\checkmark\). \(k = -4\): \((3, -4, 1) \cdot (6, 5, 2) = 18 - 20 + 2 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(k = 5\) or \(k = -4\)</p>`,
      note: String.raw`Trap: expanding \(k(1 - k)\) as \(k - k\) or dropping the \(-k^2\). Keep both answers; a quadratic usually gives two.` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>Planes 5.</strong> Find the scalar equation of the plane that contains the parallel and distinct lines \(x = 1,\ \dfrac{y - 3}{4} = \dfrac{z}{2}\) and \(x = 5,\ \dfrac{y + 5}{2} = \dfrac{z - 3}{1}\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing two parallel lines (3.3 + 3.7) · <strong>Plan:</strong> The two lines share one direction, so that only gives <em>one</em> direction vector. The second comes from joining a point on one line to a point on the other.</p>
<ol class="work"><li>Line 1: \(P_1(1, 3, 0)\), \(\vec m_1 = (0, 4, 2) \to (0, 2, 1)\). Line 2: \(P_2(5, -5, 3)\), \(\vec m_2 = (0, 2, 1)\). Parallel \(\checkmark\)</li>
<li>Second direction: \(\overrightarrow{P_1P_2} = (4, -8, 3)\).</li>
<li>\[ \vec n = (0, 2, 1) \times (4, -8, 3) = \big(2(3) - 1(-8),\ 1(4) - 0(3),\ 0(-8) - 2(4)\big) = (14, 4, -8) \to (7, 2, -4) \]</li>
<li>\(7x + 2y - 4z + D = 0\); at \(P_1\): \(7 + 6 - 0 + D = 0 \Rightarrow D = -13\).</li>
<li>Check \(P_2\): \(35 - 10 - 12 - 13 = 0\) \(\checkmark\); \(\vec n \cdot \vec m = 0 + 4 - 4 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(7x + 2y - 4z - 13 = 0\)</p>`,
      note: String.raw`Trap: crossing \(\vec m_1\) with \(\vec m_2\). Parallel directions give the zero vector, which is not a normal.` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>Planes 6.</strong> Find a vector equation of the plane that contains the origin and the point \((2, -3, 2)\) and is perpendicular to the plane \(x + 2y - z + 3 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Plane perpendicular to a plane (3.6 + 3.7) · <strong>Plan:</strong> One direction joins the origin to \((2, -3, 2)\). For perpendicular planes, the normal of the given plane lies <em>along</em> the new plane, so it can be the second direction vector.</p>
<ol class="work"><li>\(\vec a = (2, -3, 2) - (0, 0, 0) = (2, -3, 2)\).</li>
<li>\(\vec b = \vec n_{\text{given}} = (1, 2, -1)\). Not a multiple of \(\vec a\) \(\checkmark\)</li>
<li>\(\vec r = (0, 0, 0) + s(1, 2, -1) + t(2, -3, 2)\).</li>
<li>Check: new normal \((2, -3, 2) \times (1, 2, -1) = (-1, 4, 7)\); \((-1, 4, 7) \cdot (1, 2, -1) = -1 + 8 - 7 = 0\), so the planes are perpendicular \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = s(1, 2, -1) + t(2, -3, 2),\ s, t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Planes 7.</strong> Find the scalar equation of the plane that passes through the point \((1, 2, 3)\) and is parallel to the vectors \(6\hat k\) and \(\hat\imath + 2\hat\jmath - 3\hat k\).`,
      a: String.raw`<p><strong>Type:</strong> Two direction vectors in \(\hat\imath, \hat\jmath, \hat k\) form → Cartesian · <strong>Plan:</strong> Convert to components, cross for the normal, substitute the point.</p>
<ol class="work"><li>\(6\hat k = (0, 0, 6) \to (0, 0, 1)\); \(\hat\imath + 2\hat\jmath - 3\hat k = (1, 2, -3)\).</li>
<li>\[ (0, 0, 1) \times (1, 2, -3) = \big(0(-3) - 1(2),\ 1(1) - 0(-3),\ 0(2) - 0(1)\big) = (-2, 1, 0) \to (2, -1, 0) \]</li>
<li>\(2x - y + D = 0\); at \((1, 2, 3)\): \(2 - 2 + D = 0 \Rightarrow D = 0\).</li>
<li>Check: \((2, -1, 0) \cdot (1, 2, -3) = 2 - 2 + 0 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(2x - y = 0\)</p>` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>Planes 8.</strong> A line that passes through the origin intersects a plane at the point \((1, -3, 2)\). If the line is perpendicular to the plane, find the scalar equation of the plane.`,
      a: String.raw`<p><strong>Type:</strong> Line perpendicular to a plane → normal (3.3 + 3.7) · <strong>Plan:</strong> A line perpendicular to a plane points along the plane's normal. The line goes from the origin to \((1, -3, 2)\), so that vector is the normal, and \((1, -3, 2)\) is a point on the plane.</p>
<ol class="work"><li>\(\vec n = (1, -3, 2) - (0, 0, 0) = (1, -3, 2)\).</li>
<li>\(x - 3y + 2z + D = 0\); at \((1, -3, 2)\): \(1 + 9 + 4 + D = 0 \Rightarrow D = -14\).</li></ol>
<p class="answer">\(x - 3y + 2z - 14 = 0\)</p>` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>Planes 9.</strong> Find the scalar equation of the plane that contains the intersecting lines \(\dfrac{x - 1}{2} = \dfrac{y - 1}{3} = \dfrac{z - 1}{-1}\) and \(\dfrac{x - 1}{-1} = \dfrac{y - 1}{5} = \dfrac{z - 1}{4}\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing two intersecting lines (3.3 + 3.7) · <strong>Plan:</strong> Both lines pass through \((1, 1, 1)\) (that is where they intersect). Their two directions are non-collinear and both lie in the plane, so cross them.</p>
<ol class="work"><li>\(\vec m_1 = (2, 3, -1)\), \(\vec m_2 = (-1, 5, 4)\), common point \((1, 1, 1)\).</li>
<li>\[ \vec n = \vec m_1 \times \vec m_2 = \big(3(4) - (-1)(5),\ (-1)(-1) - 2(4),\ 2(5) - 3(-1)\big) = (17, -7, 13) \]</li>
<li>\(17x - 7y + 13z + D = 0\); at \((1, 1, 1)\): \(17 - 7 + 13 + D = 0 \Rightarrow D = -23\).</li>
<li>Check: \(\vec n \cdot \vec m_1 = 34 - 21 - 13 = 0\) \(\checkmark\); \(\vec n \cdot \vec m_2 = -17 - 35 + 52 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(17x - 7y + 13z - 23 = 0\)</p>` },

    { tier: "likely", lesson: "3.6",
      q: String.raw`<strong>Planes 10.</strong> Explain why the point \((2, 21, 8)\) and the line \(\vec r = (-4, -3, -1) + t(2, 8, 3)\) do not determine a plane.`,
      a: String.raw`<p><strong>Type:</strong> Explain: when a line and a point fail to fix a plane · <strong>Plan:</strong> A line plus a point <em>off</em> the line fixes exactly one plane. So test whether the point is on the line.</p>
<ol class="work"><li>\(x\): \(2 = -4 + 2t \Rightarrow t = 3\). \(y\): \(21 = -3 + 8t \Rightarrow t = 3\). \(z\): \(8 = -1 + 3t \Rightarrow t = 3\).</li>
<li>The same \(t = 3\) works in all three, so the point is <em>on</em> the line.</li>
<li>Then the vector from \(P_0\) to the point, \((6, 24, 9) = 3(2, 8, 3)\), is collinear with \(\vec m\): you only have one independent direction, and infinitely many planes (rotating like pages around a book's spine) contain the line.</li></ol>
<p class="answer">The point lies on the line (\(t = 3\)), so there is only one independent direction and infinitely many planes contain both.</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Planes 11a.</strong> Find the distance between the point \((7, 7, -7)\) and the plane \(6y - z + 5 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Point-to-plane distance · <strong>Plan:</strong> \(d = \dfrac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\) with \(A = 0\) (no \(x\)-term).</p>
<ol class="work"><li>\(A = 0,\ B = 6,\ C = -1,\ D = 5\).</li>
<li>\[ d = \frac{|0 + 6(7) - (-7) + 5|}{\sqrt{0 + 36 + 1}} = \frac{|42 + 7 + 5|}{\sqrt{37}} = \frac{54}{\sqrt{37}} = \frac{54\sqrt{37}}{37} \]</li></ol>
<p class="answer">\(\dfrac{54\sqrt{37}}{37}\) units \((\approx 8.88)\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>Planes 11b.</strong> Find the distance between the point \((3, 2, 1)\) and the plane \(3x + 2y + z = 10\).`,
      a: String.raw`<p><strong>Type:</strong> Point-to-plane distance · <strong>Plan:</strong> Move the 10 across first: \(3x + 2y + z - 10 = 0\).</p>
<ol class="work"><li>\[ d = \frac{|3(3) + 2(2) + 1 - 10|}{\sqrt{9 + 4 + 1}} = \frac{|9 + 4 + 1 - 10|}{\sqrt{14}} = \frac{4}{\sqrt{14}} = \frac{4\sqrt{14}}{14} = \frac{2\sqrt{14}}{7} \]</li></ol>
<p class="answer">\(\dfrac{2\sqrt{14}}{7}\) units \((\approx 1.07)\)</p>`,
      note: String.raw`Trap: using \(D = +10\) gives \(\tfrac{24}{\sqrt{14}}\). Always rewrite as \(\dots = 0\) first.` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>Planes 11c.</strong> Find the distance between the line \(\vec r = (1, 3, 2) + t(1, 2, -1)\) and the plane \(y + 2z = 5\).`,
      a: String.raw`<p><strong>Type:</strong> Line-to-plane distance (3.3 + 3.7) · <strong>Plan:</strong> A distance between a line and a plane only makes sense if the line is parallel to the plane (otherwise they meet and the distance is 0). Test \(\vec m \cdot \vec n = 0\); then every point of the line is the same distance away, so use the line's known point in the point-to-plane formula.</p>
<ol class="work"><li>\(\vec n = (0, 1, 2)\), \(\vec m = (1, 2, -1)\): \(\vec m \cdot \vec n = 0 + 2 - 2 = 0\), so the line is parallel to the plane.</li>
<li>Is it in the plane? \((1, 3, 2)\): \(3 + 4 - 5 = 2 \neq 0\). No, so the distance is positive.</li>
<li>\[ d = \frac{|0(1) + 3 + 2(2) - 5|}{\sqrt{0 + 1 + 4}} = \frac{2}{\sqrt{5}} = \frac{2\sqrt{5}}{5} \]</li></ol>
<p class="answer">\(\dfrac{2\sqrt{5}}{5}\) units \((\approx 0.89)\)</p>` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>Planes 11d.</strong> Find the distance between the planes \(x + 2y - 5z - 10 = 0\) and \(2x + 4y - 10z - 17 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Distance between parallel planes (3.7) · <strong>Plan:</strong> First confirm they are parallel (normals are multiples). Then pick any easy point on one plane and find its distance to the other.</p>
<ol class="work"><li>\((2, 4, -10) = 2(1, 2, -5)\): parallel. Doubling plane 1 gives constant \(-20 \neq -17\): distinct.</li>
<li>Easy point on plane 1: set \(y = z = 0\): \(x = 10\), so \((10, 0, 0)\).</li>
<li>\[ d = \frac{|2(10) + 0 - 0 - 17|}{\sqrt{4 + 16 + 100}} = \frac{3}{\sqrt{120}} = \frac{3}{2\sqrt{30}} = \frac{\sqrt{30}}{20} \]</li></ol>
<p class="answer">\(\dfrac{3}{2\sqrt{30}} = \dfrac{\sqrt{30}}{20}\) units \((\approx 0.27)\)</p>` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>Planes 12.</strong> Find the distance from the point \((1, -2, -2)\) to the plane having an \(x\)-intercept of \(-1\), a \(y\)-intercept of \(2\), and a \(z\)-intercept of \(3\).`,
      a: String.raw`<p><strong>Type:</strong> Intercepts → plane through three points → point-to-plane distance (3.7) · <strong>Plan:</strong> The intercepts are three points. Build the Cartesian equation (two vectors, cross product, substitute), then use the distance formula.</p>
<ol class="work"><li>Points: \(A(-1, 0, 0)\), \(B(0, 2, 0)\), \(C(0, 0, 3)\). \(\overrightarrow{AB} = (1, 2, 0)\), \(\overrightarrow{AC} = (1, 0, 3)\).</li>
<li>\[ \vec n = (1, 2, 0) \times (1, 0, 3) = \big(2(3) - 0(0),\ 0(1) - 1(3),\ 1(0) - 2(1)\big) = (6, -3, -2) \]</li>
<li>\(6x - 3y - 2z + D = 0\); at \(A\): \(-6 + D = 0 \Rightarrow D = 6\). Plane: \(6x - 3y - 2z + 6 = 0\). Check \(B\): \(-6 + 6 = 0\) \(\checkmark\); \(C\): \(-6 + 6 = 0\) \(\checkmark\)</li>
<li>\[ d = \frac{|6(1) - 3(-2) - 2(-2) + 6|}{\sqrt{36 + 9 + 4}} = \frac{|6 + 6 + 4 + 6|}{7} = \frac{22}{7} \]</li></ol>
<p class="answer">\(\dfrac{22}{7}\) units</p>` }
  ]
});

/* ---------------------------------------------------------------------------
   3. Quest review package (21 questions; the package's own solutions were
      re-derived and checked, one slip corrected in #16)
   --------------------------------------------------------------------------- */
window.QA.push({
  id: "qa-quest", lesson: "mix",
  title: "Quest review package",
  source: "Quest Review Package",
  items: [
    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>1.</strong> Determine both the vector equation and the set of parametric equations for the plane \(\pi\) that passes through the point \(A(2, 3, -1)\) and is parallel to the non-collinear direction vectors \(\vec d_1 = (1, -2, 4)\) and \(\vec d_2 = (3, 0, -1)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane from a point and two directions · <strong>Plan:</strong> Everything is given: drop the point into \(\vec r_0\) and the two vectors into \(s\vec a + t\vec b\), then split into components. Quickly confirm the directions are non-collinear.</p>
<ol class="work"><li>Non-collinear check: \(\tfrac{3}{1} = 3\) but the \(y\)-components are \(-2\) and \(0\), so no single multiplier works \(\checkmark\)</li>
<li>\(\vec r = (2, 3, -1) + s(1, -2, 4) + t(3, 0, -1)\).</li>
<li>Parametric (read across each row): \(x = 2 + s + 3t,\ y = 3 - 2s + 0t,\ z = -1 + 4s - t\).</li>
<li>Check: \(s = t = 0\) gives \(A\) \(\checkmark\)</li></ol>
<p class="answer">\(\vec r = (2, 3, -1) + s(1, -2, 4) + t(3, 0, -1),\ s, t \in \mathbb{R}\); \(x = 2 + s + 3t,\ y = 3 - 2s,\ z = -1 + 4s - t,\ s, t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>2a.</strong> Consider the plane \(\pi: \vec r = (4, -1, 2) + s(2, 1, -3) + t(-1, 2, 5),\ s, t \in \mathbb{R}\). Write the corresponding set of parametric equations for \(\pi\).`,
      a: String.raw`<p><strong>Type:</strong> Plane: vector → parametric · <strong>Plan:</strong> Each coordinate = point component + \(s\) times the first direction's component + \(t\) times the second's.</p>
<div class="eq">\[ \begin{aligned} x &= 4 + 2s - t \\ y &= -1 + s + 2t \\ z &= 2 - 3s + 5t \end{aligned} \qquad s, t \in \mathbb{R} \]</div>
<p class="answer">\(x = 4 + 2s - t,\ y = -1 + s + 2t,\ z = 2 - 3s + 5t,\ s, t \in \mathbb{R}\)</p>` },

    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>2b.</strong> Determine algebraically whether the point \(Q(7, 3, -7)\) lies on this plane.`,
      a: String.raw`<p><strong>Type:</strong> Is a point on a plane (vector form)? · <strong>Plan:</strong> Substitute \(Q\) into the parametric equations, solve two equations for a unique \(s\) and \(t\), then check them in the third. All three must hold for \(Q\) to be on \(\pi\).</p>
<ol class="work"><li>(1) \(4 + 2s - t = 7 \Rightarrow 2s - t = 3\). (2) \(-1 + s + 2t = 3 \Rightarrow s + 2t = 4\). (3) \(2 - 3s + 5t = -7\).</li>
<li>From (1), \(t = 2s - 3\). Into (2): \(s + 4s - 6 = 4 \Rightarrow s = 2\), so \(t = 1\).</li>
<li>Check (3): \(z = 2 - 3(2) + 5(1) = 1\), but \(Q\) has \(z = -7\). LS \(\neq\) RS.</li>
<li>Second opinion with the Cartesian form: \(\vec n = (2, 1, -3) \times (-1, 2, 5) = (11, -7, 5)\), plane \(11x - 7y + 5z - 61 = 0\). At \(Q\): \(77 - 21 - 35 - 61 = -40 \neq 0\) \(\checkmark\)</li></ol>
<p class="answer">\(Q(7, 3, -7)\) does not lie on \(\pi\) (the \(s = 2, t = 1\) from the first two equations give \(z = 1 \neq -7\)).</p>`,
      note: String.raw`Trap: stopping after solving two equations. Any two equations in two unknowns usually have a solution; the third equation is the real test.` },

    { tier: "essential", lesson: "3.6",
      q: String.raw`<strong>3.</strong> Find the vector equation of the plane \(\pi\) containing the 3D line \(L: \vec r = (1, -1, 3) + k(2, 4, -1),\ k \in \mathbb{R}\), and the external point \(P(-2, 1, 5)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing a line and a point · <strong>Plan:</strong> The line supplies a point \(P_0\) and one direction. The second direction is \(\overrightarrow{P_0P}\) from the line to the external point. Check it is not collinear with the line's direction (i.e. \(P\) really is off the line).</p>
<ol class="work"><li>\(P_0(1, -1, 3)\), \(\vec d = (2, 4, -1)\).</li>
<li>\(\overrightarrow{P_0P} = (-2 - 1,\ 1 - (-1),\ 5 - 3) = (-3, 2, 2)\).</li>
<li>Collinear? \(\tfrac{-3}{2} \neq \tfrac{2}{4}\): no, so \(P\) is off \(L\) and the plane is unique \(\checkmark\)</li>
<li>\(\vec r = (-2, 1, 5) + s(2, 4, -1) + t(-3, 2, 2)\) (using \(P\) as the point; \((1, -1, 3)\) works equally well).</li></ol>
<p class="answer">\(\vec r = (-2, 1, 5) + s(2, 4, -1) + t(-3, 2, 2),\ s, t \in \mathbb{R}\)</p>` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>4.</strong> A plane \(\pi\) passes through \(P_0(0, 2, -3)\) and is parallel to \(\vec u = (1, 1, 2)\) and \(\vec v = (-2, 1, 1)\). Find the parametric equations of the line of intersection between plane \(\pi\) and the \(xy\)-coordinate plane (\(z = 0\)).`,
      a: String.raw`<p><strong>Type:</strong> Plane (parametric) meets a coordinate plane → line in R³ (3.6 + 3.3) · <strong>Plan:</strong> Points of \(\pi\) on the \(xy\)-plane have \(z = 0\). Set the \(z\)-equation to 0, which ties \(t\) to \(s\); substitute back so only one parameter is left. One parameter means a line.</p>
<ol class="work"><li>\(\pi\): \(x = s - 2t,\ y = 2 + s + t,\ z = -3 + 2s + t\).</li>
<li>\(z = 0\): \(-3 + 2s + t = 0 \Rightarrow t = 3 - 2s\).</li>
<li>Substitute: \(x = s - 2(3 - 2s) = 5s - 6\); \(y = 2 + s + (3 - 2s) = 5 - s\); \(z = 0\).</li>
<li>Line: \(x = -6 + 5s,\ y = 5 - s,\ z = 0\), i.e. point \((-6, 5, 0)\), direction \((5, -1, 0)\).</li>
<li>Check with the Cartesian form: \(\vec n = (1, 1, 2) \times (-2, 1, 1) = (-1, -5, 3)\), so \(\pi: x + 5y - 3z - 19 = 0\). With \(z = 0\): \(x + 5y = 19\). Point: \(-6 + 25 = 19\) \(\checkmark\); direction: \(5 - 5 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(x = -6 + 5s,\ y = 5 - s,\ z = 0,\ s \in \mathbb{R}\)</p>` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>5.</strong> Determine whether the two planes \(\pi_1: \vec r = (1, 2, 0) + s(1, -1, 2) + t(2, 1, -1)\) and \(\pi_2: \vec r = (3, 0, 1) + p(-1, 2, -3) + q(3, 0, 1)\) are parallel, coincident, or intersecting. Justify your conclusion fully.`,
      a: String.raw`<p><strong>Type:</strong> Relationship between two planes in vector form (3.6 + 3.7) · <strong>Plan:</strong> Planes are compared through their normals. Find each normal by a cross product. Normals parallel → planes parallel (then test a point for coincident); normals not parallel → the planes intersect in a line.</p>
<ol class="work"><li>\[ \vec n_1 = (1, -1, 2) \times (2, 1, -1) = \big((-1)(-1) - 2(1),\ 2(2) - 1(-1),\ 1(1) - (-1)(2)\big) = (-1, 5, 3) \]</li>
<li>\[ \vec n_2 = (-1, 2, -3) \times (3, 0, 1) = \big(2(1) - (-3)(0),\ (-3)(3) - (-1)(1),\ (-1)(0) - 2(3)\big) = (2, -8, -6) = -2(-1, 4, 3) \]</li>
<li>Compare \((-1, 5, 3)\) and \((-1, 4, 3)\): same \(x\) and \(z\) but \(5 \neq 4\), so not scalar multiples. The normals are not parallel.</li>
<li>Non-parallel normals mean the planes are not parallel, so they must meet, along a line.</li></ol>
<p class="answer">The planes intersect (in a line): \(\vec n_1 = (-1, 5, 3)\) and \(\vec n_2 \parallel (-1, 4, 3)\) are not scalar multiples.</p>`,
      note: String.raw`The package writes the middle step of \(\vec n_2\) as \(-3(-3) - (-1)(1)\); the correct arithmetic is \((-3)(3) - (-1)(1) = -8\). The final \(\vec n_2 = (2, -8, -6)\) and the conclusion are right. Trap: comparing direction vectors instead of normals; two planes can have completely different direction vectors and still be parallel.` },

    { tier: "essential", lesson: "3.5",
      q: String.raw`<strong>6.</strong> Express the target vector \(\vec w = (-5, 17)\) as a linear combination \(\vec w = a\vec u + b\vec v\) of the basis vectors \(\vec u = (3, 1)\) and \(\vec v = (-2, 4)\) in R². Find exact scalar values \(a\) and \(b\).`,
      a: String.raw`<p><strong>Type:</strong> Linear combination in R² · <strong>Plan:</strong> Let \(a, b \in \mathbb{R}\), write the vector equation as two component equations and solve by substitution or elimination.</p>
<ol class="work"><li>\((-5, 17) = a(3, 1) + b(-2, 4)\): (1) \(3a - 2b = -5\); (2) \(a + 4b = 17\).</li>
<li>From (2), \(a = 17 - 4b\). Into (1): \(3(17 - 4b) - 2b = -5 \Rightarrow 51 - 14b = -5 \Rightarrow b = 4\).</li>
<li>\(a = 17 - 16 = 1\).</li>
<li>Check: \(1(3, 1) + 4(-2, 4) = (3 - 8,\ 1 + 16) = (-5, 17)\) \(\checkmark\)</li></ol>
<p class="answer">\(a = 1,\ b = 4\): \(\vec w = \vec u + 4\vec v\)</p>` },

    { tier: "essential", lesson: "3.5",
      q: String.raw`<strong>7.</strong> Determine whether the vectors \(\vec a = (2, -1, 3)\), \(\vec b = (1, 4, -2)\), and \(\vec c = (5, 7, -1)\) are coplanar in R³. Show complete vector algebra.`,
      a: String.raw`<p><strong>Type:</strong> Coplanarity test (fast way) · <strong>Plan:</strong> Compute the triple scalar product \(\vec a \cdot (\vec b \times \vec c)\): zero means coplanar, non-zero means not.</p>
<ol class="work"><li>\[ \vec b \times \vec c = (1, 4, -2) \times (5, 7, -1) = \big(4(-1) - (-2)(7),\ (-2)(5) - 1(-1),\ 1(7) - 4(5)\big) = (10, -9, -13) \]</li>
<li>\(\vec a \cdot (\vec b \times \vec c) = 2(10) + (-1)(-9) + 3(-13) = 20 + 9 - 39 = -10\).</li>
<li>\(-10 \neq 0\): the parallelepiped has volume 10, so the vectors are not flat.</li>
<li>Long-way confirmation: \(\vec c = p\vec a + q\vec b\) gives \(2p + q = 5\) and \(-p + 4q = 7\), so \(p = \tfrac{13}{9}, q = \tfrac{19}{9}\); third component: \(3p - 2q = \tfrac{39 - 38}{9} = \tfrac{1}{9} \neq -1\) \(\checkmark\)</li></ol>
<p class="answer">Not coplanar, since \(\vec a \cdot (\vec b \times \vec c) = -10 \neq 0\)</p>` },

    { tier: "essential", lesson: "3.5",
      q: String.raw`<strong>8.</strong> Determine if the vector \(\vec x = (1, 3, 2)\) can be expressed as a linear combination of \(\vec y = (2, -1, 1)\) and \(\vec z = (-4, 2, -2)\) in R³. Explain your result geometrically.`,
      a: String.raw`<p><strong>Type:</strong> Linear combination with a collinear pair · <strong>Plan:</strong> Before solving anything, compare \(\vec y\) and \(\vec z\). If they are collinear they only span a line, so \(\vec x\) is a combination of them only if it is on that line too.</p>
<ol class="work"><li>\(\vec z = (-4, 2, -2) = -2(2, -1, 1) = -2\vec y\): collinear.</li>
<li>So \(a\vec y + b\vec z = (a - 2b)\vec y\): every combination is just a multiple of \((2, -1, 1)\).</li>
<li>Is \((1, 3, 2) = c(2, -1, 1)\)? \(x\): \(c = \tfrac{1}{2}\); \(y\): \(c = -3\). Contradiction.</li>
<li>Algebra agrees: \(2a - 4b = 1\) and \(-a + 2b = 3\) give \(2a - 4b = -6\), contradicting \(= 1\).</li></ol>
<p class="answer">No. \(\vec y\) and \(\vec z\) are collinear, so all their combinations lie on one line through the origin (direction \((2, -1, 1)\)); \(\vec x\) is not on that line.</p>`,
      note: String.raw`This is why the coplanar definition requires \(\vec u\) and \(\vec v\) to be non-collinear: two collinear vectors cannot be a basis for a plane.` },

    { tier: "essential", lesson: "3.5",
      q: String.raw`<strong>9.</strong> Given the vectors \(\vec u = (1, -2, 2)\), \(\vec v = (3, 0, -1)\), and \(\vec w = (k, -4, 5)\), find the value of the scalar parameter \(k \in \mathbb{R}\) such that the three vectors are coplanar.`,
      a: String.raw`<p><strong>Type:</strong> Coplanar with a parameter · <strong>Plan:</strong> Coplanar means the triple scalar product is 0. Put \(k\) in the vector that gets dotted last so the cross product is all numbers, then solve the linear equation.</p>
<ol class="work"><li>\[ \vec u \times \vec v = (1, -2, 2) \times (3, 0, -1) = \big((-2)(-1) - 2(0),\ 2(3) - 1(-1),\ 1(0) - (-2)(3)\big) = (2, 7, 6) \]</li>
<li>\(\vec w \cdot (\vec u \times \vec v) = 2k + (-4)(7) + 5(6) = 2k + 2 = 0 \Rightarrow k = -1\).</li>
<li>Check by the long way: \(\vec w = (-1, -4, 5) = a\vec u + b\vec v\). \(y\): \(-2a = -4 \Rightarrow a = 2\). \(x\): \(2 + 3b = -1 \Rightarrow b = -1\). \(z\): \(2(2) + (-1)(-1) = 5\) \(\checkmark\)</li></ol>
<p class="answer">\(k = -1\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>10.</strong> Determine the Cartesian (scalar) equation \(Ax + By + Cz + D = 0\) of the plane passing through \(P(3, -2, 4)\) with normal vector \(\vec n = (5, 1, -2)\).`,
      a: String.raw`<p><strong>Type:</strong> Point + normal → Cartesian · <strong>Plan:</strong> \(A, B, C\) come straight from \(\vec n\); substitute \(P\) to get \(D\).</p>
<ol class="work"><li>\(5x + y - 2z + D = 0\).</li>
<li>\(5(3) + (-2) - 2(4) + D = 0 \Rightarrow 15 - 2 - 8 + D = 0 \Rightarrow D = -5\).</li></ol>
<p class="answer">\(5x + y - 2z - 5 = 0\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>11.</strong> Find the Cartesian equation of the plane passing through the three non-collinear points \(A(2, 1, 0)\), \(B(4, -1, 3)\), and \(C(1, 3, -2)\). Express your answer with integer coefficients where \(A > 0\).`,
      a: String.raw`<p><strong>Type:</strong> Plane through three points → Cartesian · <strong>Plan:</strong> \(\overrightarrow{AB}\) and \(\overrightarrow{AC}\) lie in the plane; their cross product is the normal; flip its sign if needed so \(A > 0\); substitute a point for \(D\).</p>
<ol class="work"><li>\(\overrightarrow{AB} = (2, -2, 3)\), \(\overrightarrow{AC} = (-1, 2, -2)\).</li>
<li>\[ \vec n = \overrightarrow{AB} \times \overrightarrow{AC} = \big((-2)(-2) - 3(2),\ 3(-1) - 2(-2),\ 2(2) - (-2)(-1)\big) = (-2, 1, 2) \]
For \(A > 0\) use \(\vec n = (2, -1, -2)\).</li>
<li>\(2x - y - 2z + D = 0\); at \(A\): \(4 - 1 - 0 + D = 0 \Rightarrow D = -3\).</li>
<li>Check \(B\): \(8 + 1 - 6 - 3 = 0\) \(\checkmark\); \(C\): \(2 - 3 + 4 - 3 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(2x - y - 2z - 3 = 0\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>12.</strong> Convert the parametric equations \(x = 1 + 2s - t,\ y = -2 + s + 3t,\ z = 3 - s + 2t,\ s, t \in \mathbb{R}\), into scalar Cartesian form \(Ax + By + Cz + D = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Plane: parametric → Cartesian · <strong>Plan:</strong> Read the point (constants) and the two direction vectors (the \(s\)-column and the \(t\)-column), cross the directions, substitute the point.</p>
<ol class="work"><li>Point \((1, -2, 3)\); \(\vec d_1 = (2, 1, -1)\) (coefficients of \(s\)), \(\vec d_2 = (-1, 3, 2)\) (coefficients of \(t\)).</li>
<li>\[ \vec n = \vec d_1 \times \vec d_2 = \big(1(2) - (-1)(3),\ (-1)(-1) - 2(2),\ 2(3) - 1(-1)\big) = (5, -3, 7) \]</li>
<li>\(5x - 3y + 7z + D = 0\); at \((1, -2, 3)\): \(5 + 6 + 21 + D = 0 \Rightarrow D = -32\).</li>
<li>Check another point (\(s = 1, t = 0\)): \((3, -1, 2)\): \(15 + 3 + 14 - 32 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(5x - 3y + 7z - 32 = 0\)</p>`,
      note: String.raw`Trap: reading the direction vectors across a row (e.g. \((1, 2, -1)\) from the \(x\)-equation). Directions are read down the columns.` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>13a.</strong> A plane has Cartesian equation \(3x - 4y + 2z - 12 = 0\). State the \(x\)-, \(y\)-, and \(z\)-intercepts of the plane.`,
      a: String.raw`<p><strong>Type:</strong> Intercepts of a plane · <strong>Plan:</strong> For each intercept set the other two variables to 0 and solve.</p>
<ol class="work"><li>\(x\)-intercept (\(y = z = 0\)): \(3x = 12 \Rightarrow x = 4\): \((4, 0, 0)\).</li>
<li>\(y\)-intercept (\(x = z = 0\)): \(-4y = 12 \Rightarrow y = -3\): \((0, -3, 0)\).</li>
<li>\(z\)-intercept (\(x = y = 0\)): \(2z = 12 \Rightarrow z = 6\): \((0, 0, 6)\).</li></ol>
<p class="answer">\(x\)-int \(4\), \(y\)-int \(-3\), \(z\)-int \(6\): points \((4, 0, 0), (0, -3, 0), (0, 0, 6)\)</p>` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>13b.</strong> Find two non-collinear direction vectors \(\vec d_1\) and \(\vec d_2\) that lie in the plane, and write a vector equation for the plane.`,
      a: String.raw`<p><strong>Type:</strong> Plane: Cartesian → vector (3.7 → 3.6) · <strong>Plan:</strong> The three intercepts are three points on the plane. Two vectors between them are direction vectors; any intercept is the point.</p>
<ol class="work"><li>\(\vec d_1 = (0, -3, 0) - (4, 0, 0) = (-4, -3, 0)\).</li>
<li>\(\vec d_2 = (0, 0, 6) - (4, 0, 0) = (-4, 0, 6)\). Not collinear (the zeros are in different places) \(\checkmark\)</li>
<li>\(\vec r = (4, 0, 0) + s(-4, -3, 0) + t(-4, 0, 6)\).</li>
<li>Check both are perpendicular to \(\vec n = (3, -4, 2)\): \(-12 + 12 + 0 = 0\) \(\checkmark\); \(-12 + 0 + 12 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(\vec d_1 = (-4, -3, 0)\), \(\vec d_2 = (-4, 0, 6)\); \(\vec r = (4, 0, 0) + s(-4, -3, 0) + t(-4, 0, 6),\ s, t \in \mathbb{R}\)</p>
<p>Any two non-collinear vectors with \(\vec d \cdot \vec n = 0\) work, e.g. \((4, 3, 0)\) and \((2, 0, -3)\).</p>` },

    { tier: "essential", lesson: "mix",
      q: String.raw`<strong>14.</strong> Determine the Cartesian equation of the plane that is perpendicular to the line \(L: \dfrac{x - 1}{2} = \dfrac{y + 3}{-1} = \dfrac{z - 4}{3}\) and passes through the point \(M(-1, 2, 5)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane perpendicular to a line (3.3 + 3.7) · <strong>Plan:</strong> A line perpendicular to a plane runs along the plane's normal, so the line's direction vector <em>is</em> the normal. The line's point is irrelevant; use \(M\).</p>
<ol class="work"><li>\(\vec m = (2, -1, 3)\) (denominators), so \(\vec n = (2, -1, 3)\).</li>
<li>\(2x - y + 3z + D = 0\); at \(M\): \(-2 - 2 + 15 + D = 0 \Rightarrow D = -11\).</li>
<li>Check: \(2(-1) - 2 + 3(5) - 11 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(2x - y + 3z - 11 = 0\)</p>`,
      note: String.raw`Trap: substituting the line's point \((1, -3, 4)\) instead of \(M\); the plane does not have to contain the line's point.` },

    { tier: "essential", lesson: "3.4",
      q: String.raw`<strong>15.</strong> Calculate the exact distance from the point \(P(1, 4)\) to the 2D line \(3x - 4y + 7 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Point-to-line distance (R²) · <strong>Plan:</strong> Line is already \(Ax + By + C = 0\); plug into the formula.</p>
<ol class="work"><li>\[ d = \frac{|3(1) - 4(4) + 7|}{\sqrt{3^2 + (-4)^2}} = \frac{|3 - 16 + 7|}{\sqrt{25}} = \frac{6}{5} \]</li></ol>
<p class="answer">\(d = \tfrac{6}{5} = 1.2\) units</p>` },

    { tier: "essential", lesson: "3.4",
      q: String.raw`<strong>16.</strong> Calculate the exact perpendicular distance from the point \(Q(2, -3, 1)\) to the 3D line \(L: \vec r = (-1, 0, 2) + t(1, 2, -2),\ t \in \mathbb{R}\). State your answer as an exact simplified radical with a rationalized denominator.`,
      a: String.raw`<p><strong>Type:</strong> Point-to-line distance (R³) · <strong>Plan:</strong> \(d = \dfrac{|\overrightarrow{P_0Q} \times \vec m|}{|\vec m|}\). Do the cross product slowly, then confirm with a second method.</p>
<ol class="work"><li>\(P_0(-1, 0, 2)\), \(\vec m = (1, 2, -2)\), \(|\vec m| = \sqrt{1 + 4 + 4} = 3\).</li>
<li>\(\overrightarrow{P_0Q} = (2 - (-1),\ -3 - 0,\ 1 - 2) = (3, -3, -1)\).</li>
<li>\[ \overrightarrow{P_0Q} \times \vec m = \big((-3)(-2) - (-1)(2),\ (-1)(1) - 3(-2),\ 3(2) - (-3)(1)\big) = (6 + 2,\ -1 + 6,\ 6 + 3) = (8, 5, 9) \]</li>
<li>\(|(8, 5, 9)| = \sqrt{64 + 25 + 81} = \sqrt{170}\), so \(d = \dfrac{\sqrt{170}}{3}\) (denominator already rational).</li>
<li>Check by Pythagoras: \(|\overrightarrow{P_0Q}|^2 = 9 + 9 + 1 = 19\); the part along the line is \(\tfrac{\overrightarrow{P_0Q} \cdot \vec m}{|\vec m|} = \tfrac{3 - 6 + 2}{3} = -\tfrac{1}{3}\); \(d^2 = 19 - \tfrac{1}{9} = \tfrac{170}{9}\) \(\checkmark\)</li></ol>
<p class="answer">\(d = \dfrac{\sqrt{170}}{3}\) units \((\approx 4.35)\)</p>`,
      note: String.raw`The package's solution has a slip: its first cross-product component is written \(6 - 2 = 4\), but \((-3)(-2) - (-1)(2) = 6 + 2 = 8\). It therefore gets \(\sqrt{122}/3\); the correct answer is \(\sqrt{170}/3\), confirmed by the Pythagoras check. Trap: in the first component, \(-(-1)(2)\) is \(+2\).` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>17.</strong> Determine the shortest distance from the point \(R(-2, 5, 3)\) to the plane \(\pi: 2x - y + 2z - 11 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Point-to-plane distance · <strong>Plan:</strong> Formula with \(\vec n = (2, -1, 2)\), \(|\vec n| = 3\).</p>
<ol class="work"><li>\[ d = \frac{|2(-2) - 1(5) + 2(3) - 11|}{\sqrt{4 + 1 + 4}} = \frac{|-4 - 5 + 6 - 11|}{3} = \frac{14}{3} \]</li></ol>
<p class="answer">\(d = \tfrac{14}{3}\) units</p>` },

    { tier: "likely", lesson: "3.7",
      q: String.raw`<strong>18.</strong> Calculate the acute angle \(\theta\) (to the nearest degree) between the two intersecting planes \(\pi_1: 3x - 2y + 6z - 1 = 0\) and \(\pi_2: x + y - 4 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Angle between planes · <strong>Plan:</strong> The angle between two planes equals the angle between their normals (lesson 3.7 notes): \(\cos\theta = \dfrac{\vec n_1 \cdot \vec n_2}{|\vec n_1||\vec n_2|}\). Use the absolute value of the dot product to get the acute angle.</p>
<ol class="work"><li>\(\vec n_1 = (3, -2, 6)\), \(|\vec n_1| = \sqrt{9 + 4 + 36} = 7\). \(\vec n_2 = (1, 1, 0)\), \(|\vec n_2| = \sqrt{2}\).</li>
<li>\(\vec n_1 \cdot \vec n_2 = 3 - 2 + 0 = 1\).</li>
<li>\(\cos\theta = \dfrac{1}{7\sqrt{2}} = \dfrac{\sqrt{2}}{14} \approx 0.1010\), so \(\theta \approx 84.2^\circ\).</li></ol>
<p class="answer">\(\theta \approx 84^\circ\)</p>`,
      note: String.raw`If the dot product had been negative you would get an obtuse angle; the acute angle is then \(180^\circ\) minus it (or use \(|\vec n_1 \cdot \vec n_2|\)).` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>19.</strong> Determine whether the line \(L: \vec r = (2, 1, -3) + t(1, -2, 3),\ t \in \mathbb{R}\), is parallel to, lies completely within, or intersects the plane \(\pi: 2x + y - 5 = 0\). If it intersects, find the exact point of intersection.`,
      a: String.raw`<p><strong>Type:</strong> Line vs plane (3.3 + 3.7) · <strong>Plan:</strong> If \(\vec m \cdot \vec n = 0\) the line runs parallel to the plane: then test the line's point (in the plane → the whole line is in it; not → parallel and distinct). If \(\vec m \cdot \vec n \neq 0\), substitute the parametric equations into the plane to find the single intersection.</p>
<ol class="work"><li>\(\vec m = (1, -2, 3)\), \(\vec n = (2, 1, 0)\): \(\vec m \cdot \vec n = 2 - 2 + 0 = 0\). Parallel to the plane or inside it.</li>
<li>Test \(P_0(2, 1, -3)\): \(2(2) + 1 - 5 = 0\). It satisfies the plane equation.</li>
<li>Confirm with the substitution method: \(2(2 + t) + (1 - 2t) - 5 = 0 \Rightarrow 0t + 0 = 0\), true for every \(t\), so every point of \(L\) is in \(\pi\).</li></ol>
<p class="answer">\(L\) lies completely within \(\pi\) (no single intersection point).</p>` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>20a.</strong> Consider the line \(L: \vec r = (1, -1, 2) + t(k, 2, -1),\ t \in \mathbb{R}\), and the plane \(\pi: 2x - ky + 4z - 7 = 0\). Solve for all real values of \(k\) such that line \(L\) is parallel to plane \(\pi\).`,
      a: String.raw`<p><strong>Type:</strong> Line parallel to a plane, with a parameter (3.3 + 3.7) · <strong>Plan:</strong> A line is parallel to a plane when its direction is perpendicular to the normal: \(\vec m \cdot \vec n = 0\). Solve for \(k\).</p>
<ol class="work"><li>\(\vec m = (k, 2, -1)\), \(\vec n = (2, -k, 4)\).</li>
<li>\(\vec m \cdot \vec n = 2k - 2k - 4 = -4\).</li>
<li>\(-4 = 0\) is impossible: the \(k\)-terms cancel for every \(k\).</li></ol>
<p class="answer">No real value of \(k\) makes \(L\) parallel to \(\pi\).</p>`,
      note: String.raw`Trap: "parallel" for a line and a plane means \(\vec m \perp \vec n\) (dot product 0), not \(\vec m = c\,\vec n\). \(\vec m = c\,\vec n\) would make the line perpendicular to the plane.` },

    { tier: "likely", lesson: "mix",
      q: String.raw`<strong>20b.</strong> For each calculated value of \(k\), determine if line \(L\) lies completely within plane \(\pi\) or is strictly parallel to it.`,
      a: String.raw`<p><strong>Type:</strong> Interpret an empty solution · <strong>Plan:</strong> Part (a) found no such \(k\), so there is nothing to classify. Since \(\vec m \cdot \vec n = -4 \neq 0\) always, the line always crosses the plane at exactly one point; you can even find it in terms of \(k\).</p>
<ol class="work"><li>Substitute \(x = 1 + kt,\ y = -1 + 2t,\ z = 2 - t\): \(2(1 + kt) - k(-1 + 2t) + 4(2 - t) - 7 = 0\).</li>
<li>Expand: \(2 + 2kt + k - 2kt + 8 - 4t - 7 = 0 \Rightarrow 3 + k - 4t = 0 \Rightarrow t = \tfrac{3 + k}{4}\).</li>
<li>Point: \(\left(\tfrac{k^2 + 3k + 4}{4},\ \tfrac{1 + k}{2},\ \tfrac{5 - k}{4}\right)\). Check with \(k = 0\): \((1, \tfrac{1}{2}, \tfrac{5}{4})\): \(2 - 0 + 5 - 7 = 0\) \(\checkmark\)</li></ol>
<p class="answer">There are no such values of \(k\): for every \(k \in \mathbb{R}\), \(L\) is neither in \(\pi\) nor parallel to it; it meets \(\pi\) at exactly one point, \(t = \tfrac{3 + k}{4}\).</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>21a.</strong> Two planes are \(\pi_1: x + ky - z + 4 = 0\) and \(\pi_2: 2x + 3y + mz - 1 = 0\), where \(k, m \in \mathbb{R}\). Find the relationship between \(k\) and \(m\) such that \(\pi_1 \perp \pi_2\).`,
      a: String.raw`<p><strong>Type:</strong> Perpendicular planes with parameters · <strong>Plan:</strong> \(\vec n_1 \cdot \vec n_2 = 0\) gives one equation in two unknowns: a relationship, not single values.</p>
<ol class="work"><li>\(\vec n_1 = (1, k, -1)\), \(\vec n_2 = (2, 3, m)\).</li>
<li>\(\vec n_1 \cdot \vec n_2 = 2 + 3k - m = 0 \Rightarrow m = 3k + 2\).</li>
<li>Check with \(k = 0, m = 2\): \((1, 0, -1) \cdot (2, 3, 2) = 2 + 0 - 2 = 0\) \(\checkmark\)</li></ol>
<p class="answer">\(m = 3k + 2\)</p>` },

    { tier: "essential", lesson: "3.7",
      q: String.raw`<strong>21b.</strong> Find the exact values of \(k\) and \(m\) such that \(\pi_1 \parallel \pi_2\).`,
      a: String.raw`<p><strong>Type:</strong> Parallel planes with parameters · <strong>Plan:</strong> \(\vec n_2 = c\,\vec n_1\). The \(x\)-components (no unknowns) fix \(c\); then each other component gives one unknown.</p>
<ol class="work"><li>\((2, 3, m) = c(1, k, -1)\). From \(x\): \(c = 2\).</li>
<li>\(y\): \(3 = 2k \Rightarrow k = \tfrac{3}{2}\). \(z\): \(m = 2(-1) = -2\).</li>
<li>Check: \(\vec n_1 = (1, \tfrac{3}{2}, -1)\), \(2\vec n_1 = (2, 3, -2) = \vec n_2\) \(\checkmark\). Doubling \(\pi_1\) gives \(2x + 3y - 2z + 8 = 0\) vs \(\pi_2\): \(2x + 3y - 2z - 1 = 0\): different constants, so parallel and distinct.</li></ol>
<p class="answer">\(k = \tfrac{3}{2},\ m = -2\)</p>` }
  ]
});

/* ---------------------------------------------------------------------------
   4. Whole-unit practice quiz (mixed lessons)
   --------------------------------------------------------------------------- */
window.QUIZ.push(
  { id: "qmix-01", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`What is \(\dfrac{x - 2}{3} = \dfrac{y + 1}{-4} = z\)?`,
    options: [String.raw`The Cartesian equation of a plane`, String.raw`The parametric equations of a line in R³`, String.raw`The symmetric equations of a line in R³`, String.raw`The vector equation of a line in R³`],
    answer: 2,
    explain: String.raw`Fractions set equal to each other are symmetric equations: each one equals the same parameter \(t\). Here the line passes through \((2, -1, 0)\) with direction \((3, -4, 1)\) (note the hidden denominator 1 under \(z\)). It is not parametric (no \(t\) is shown), not vector form (no \(\vec r = \dots\)), and not a plane: a plane's Cartesian equation is a single equation \(Ax + By + Cz + D = 0\).` },

  { id: "qmix-02", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`In R³, the equation \(2x - 3y + z = 5\) describes…`,
    options: [String.raw`a plane with normal \((2, -3, 1)\)`, String.raw`a line with direction \((2, -3, 1)\)`, String.raw`a line with normal \((2, -3, 1)\)`, String.raw`a plane with direction vector \((2, -3, 1)\)`],
    answer: 0,
    explain: String.raw`One linear equation in \(x, y, z\) is a plane, and its coefficients form the normal \(\vec n = (2, -3, 1)\). It cannot be a line: lines in R³ have no Cartesian equation because they have no unique normal. \((2, -3, 1)\) is perpendicular to the plane, so it is certainly not a direction vector lying in it.` },

  { id: "qmix-03", lesson: "mix", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`A line in R³ can be written as a single Cartesian equation \(Ax + By + Cz + D = 0\).`,
    answer: false,
    explain: String.raw`False. That equation is a plane. A line in R³ has infinitely many perpendicular directions, so no single normal pins it down; it is written in vector, parametric or symmetric form instead. (In R², \(Ax + By + C = 0\) <em>is</em> a line, which is why this is a common slip.)` },

  { id: "qmix-04", lesson: "mix", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Classify \(L_1: \vec r = (1, 0, 2) + t(2, -1, 3)\) and \(L_2: \vec r = (3, -1, 5) + s(-4, 2, -6)\).`,
    options: [String.raw`Parallel and distinct`, String.raw`Intersecting at one point`, String.raw`Skew`, String.raw`Coincident`],
    answer: 3,
    explain: String.raw`\((-4, 2, -6) = -2(2, -1, 3)\), so the lines are parallel. Test \((3, -1, 5)\) in \(L_1\): \(3 = 1 + 2t\), \(-1 = -t\), \(5 = 2 + 3t\) all give \(t = 1\). The point is on \(L_1\), so the lines are the same line: coincident. "Parallel and distinct" is what you would say if you skipped the point test; parallel lines cannot be skew or meet at exactly one point.` },

  { id: "qmix-05", lesson: "mix", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Classify \(L_1: \vec r = (1, 2, 0) + t(1, 0, 1)\) and \(L_2: \vec r = (0, 1, 3) + s(0, 1, -1)\).`,
    options: [String.raw`Parallel and distinct`, String.raw`Skew`, String.raw`Intersecting and perpendicular`, String.raw`Coincident`],
    answer: 1,
    explain: String.raw`Directions \((1, 0, 1)\) and \((0, 1, -1)\) are not multiples, so the lines are not parallel (or coincident). Their dot product is \(-1 \neq 0\), so they are not perpendicular. Try to meet: \(x\): \(1 + t = 0 \Rightarrow t = -1\); \(z\): \(t = 3 - s \Rightarrow s = 4\); \(y\): \(2 = 1 + s = 5\)? No. No common point and not parallel: skew. (In the teacher's early classification this falls under "neither"; skew is the precise word.)` },

  { id: "qmix-06", lesson: "mix", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Are \(\vec u = (1, 2, 3)\), \(\vec v = (2, -1, 0)\), \(\vec w = (4, 3, 6)\) coplanar?`,
    options: [String.raw`Yes, because \(\vec u \cdot (\vec v \times \vec w) = 0\)`, String.raw`No, because \(\vec u \cdot (\vec v \times \vec w) = -12\)`, String.raw`Yes, because \(\vec u \cdot \vec v = 0\)`, String.raw`No, because no two of them are collinear`],
    answer: 0,
    explain: String.raw`\(\vec v \times \vec w = \big((-1)(6) - 0(3),\ 0(4) - 2(6),\ 2(3) - (-1)(4)\big) = (-6, -12, 10)\), and \(\vec u \cdot (-6, -12, 10) = -6 - 24 + 30 = 0\): coplanar. Indeed \(\vec w = 2\vec u + \vec v\). The trap: \(\vec u \cdot \vec v = 2 - 2 + 0 = 0\) is true, but that only says \(\vec u \perp \vec v\); it says nothing about \(\vec w\). Three vectors can be coplanar with no two of them collinear.` },

  { id: "qmix-07", lesson: "mix", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which vector is normal to the plane \(\vec r = (1, 0, 2) + s(1, 2, 0) + t(0, 1, -1)\)?`,
    options: [String.raw`\((2, 1, 1)\)`, String.raw`\((1, 3, -1)\)`, String.raw`\((-2, 1, 1)\)`, String.raw`\((1, 0, 2)\)`],
    answer: 2,
    explain: String.raw`\(\vec n = (1, 2, 0) \times (0, 1, -1) = \big(2(-1) - 0(1),\ 0(0) - 1(-1),\ 1(1) - 2(0)\big) = (-2, 1, 1)\). Check: \((-2, 1, 1) \cdot (1, 2, 0) = 0\) and \((-2, 1, 1) \cdot (0, 1, -1) = 0\). \((2, 1, 1)\) is a sign slip in the first component (its dot with \((1, 2, 0)\) is 4). \((1, 3, -1)\) is the <em>sum</em> of the directions, which lies in the plane. \((1, 0, 2)\) is just the point.` },

  { id: "qmix-08", lesson: "mix", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which plane is parallel to the plane \(x - 2y + 3z = 7\)?`,
    options: [String.raw`\(x + 2y + 3z = 0\)`, String.raw`\(3x - 2y + z = 4\)`, String.raw`\(x - 2y - 3z + 1 = 0\)`, String.raw`\(-2x + 4y - 6z = 1\)`],
    answer: 3,
    explain: String.raw`Parallel planes have parallel normals. The given normal is \((1, -2, 3)\), and \((-2, 4, -6) = -2(1, -2, 3)\). The constant does not matter for parallelism (it only shifts the plane). The others change a sign or swap components, so their normals are not multiples of \((1, -2, 3)\).` },

  { id: "qmix-09", lesson: "mix", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`The Cartesian equation of the line \(\vec r = (2, -1) + t(3, 4)\) is…`,
    options: [String.raw`\(3x + 4y - 2 = 0\)`, String.raw`\(4x - 3y - 11 = 0\)`, String.raw`\(4x - 3y + 11 = 0\)`, String.raw`\(4x + 3y - 5 = 0\)`],
    answer: 1,
    explain: String.raw`Turn \(\vec m = (3, 4)\) into a normal by swapping and changing one sign: \(\vec n = (4, -3)\). Then \(4x - 3y + C = 0\) at \((2, -1)\): \(8 + 3 + C = 0\), so \(C = -11\). \(3x + 4y - 2 = 0\) wrongly uses the direction as the normal; \(+11\) is a sign slip in \(C\); \(4x + 3y - 5 = 0\) forgot to change a sign, so its "normal" \((4, 3)\) is not perpendicular to \((3, 4)\).` },

  { id: "qmix-10", lesson: "mix", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`The distance from \((1, 2, 3)\) to the plane \(2x - y + 2z - 3 = 0\) is…`,
    options: [String.raw`\(3\)`, String.raw`\(\tfrac{1}{3}\)`, String.raw`\(1\)`, String.raw`\(\sqrt{3}\)`],
    answer: 2,
    explain: String.raw`\(d = \dfrac{|2(1) - 2 + 2(3) - 3|}{\sqrt{4 + 1 + 4}} = \dfrac{3}{3} = 1\). Answer \(3\) forgets to divide by \(|\vec n|\); \(\tfrac{1}{3}\) divides by \(9\) (forgot the square root); \(\sqrt{3}\) uses \(\sqrt{2 - 1 + 2}\), adding the components instead of their squares.` },

  { id: "qmix-11", lesson: "mix", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`The distance from \(P(1, 3, 4)\) to the line \(\vec r = (1, 0, 0) + t(0, 1, 0)\) is…`,
    options: [String.raw`\(5\)`, String.raw`\(4\)`, String.raw`\(3\)`, String.raw`\(\sqrt{7}\)`],
    answer: 1,
    explain: String.raw`\(\overrightarrow{P_0P} = (0, 3, 4)\), \(\vec m = (0, 1, 0)\). \(\overrightarrow{P_0P} \times \vec m = \big(3(0) - 4(1),\ 4(0) - 0(0),\ 0(1) - 3(0)\big) = (-4, 0, 0)\), so \(d = \tfrac{4}{1} = 4\). Geometrically the line runs along \(y\), so only the \(z\)-gap of 4 counts. \(5 = |\overrightarrow{P_0P}|\) is the distance to the known point, not the line; \(3\) is the part of \(\overrightarrow{P_0P}\) <em>along</em> the line.` },

  { id: "qmix-12", lesson: "mix", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`Two planes are perpendicular exactly when their normal vectors satisfy \(\vec n_1 \cdot \vec n_2 = 0\).`,
    answer: true,
    explain: String.raw`True. The angle between two planes equals the angle between their normals, so perpendicular planes have perpendicular normals. Parallel planes instead need \(\vec n_1 = k\vec n_2\).` },

  { id: "qmix-13", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`Spot the error. "Find the plane through \(P(1, 2, 3)\) parallel to \(2x - y + z - 4 = 0\). Parallel planes share a normal, so the answer is \(2x - y + z - 4 = 0\)."`,
    options: [String.raw`The normal should be \((-2, 1, -1)\)`, String.raw`\(D\) must be recomputed from \(P\): the answer is \(2x - y + z - 3 = 0\)`, String.raw`A parallel plane needs a perpendicular normal`, String.raw`Nothing is wrong`],
    answer: 1,
    explain: String.raw`Keeping the normal is right, but the student kept \(D\) too, which reproduces the original plane (and \(P\) is not on it: \(2 - 2 + 3 - 4 = -1\)). Substitute \(P\): \(2 - 2 + 3 + D = 0\), \(D = -3\). Using \((-2, 1, -1)\) is equally valid but not the error, and parallel planes need parallel, not perpendicular, normals.` },

  { id: "qmix-14", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`Spot the error. For the line through \((3, -1, 2)\) with \(\vec m = (4, 0, -5)\), a student writes \(\dfrac{x - 3}{4} = \dfrac{y + 1}{0} = \dfrac{z - 2}{-5}\). The correct form is…`,
    options: [String.raw`\(\dfrac{x - 3}{4} = \dfrac{z - 2}{-5},\ y = -1\)`, String.raw`\(\dfrac{x - 3}{4} = \dfrac{z - 2}{-5},\ y = 1\)`, String.raw`\(\dfrac{x + 3}{4} = \dfrac{z + 2}{-5},\ y = -1\)`, String.raw`\(\dfrac{x - 3}{4} = \dfrac{y + 1}{1} = \dfrac{z - 2}{-5}\)`],
    answer: 0,
    explain: String.raw`You cannot divide by 0. A zero component means that coordinate never changes, so write it as a parametric equation (\(y = -1 + 0t = -1\)) and keep the symmetric form for \(x\) and \(z\): the teacher's "combination of parametric and symmetric". \(y = 1\) has the wrong sign, \((x + 3), (z + 2)\) flip the point's signs, and replacing 0 by 1 changes the direction.` },

  { id: "qmix-15", lesson: "mix", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Write \(\vec w = (7, 1)\) as a linear combination of \(\vec u = (1, 1)\) and \(\vec v = (2, -1)\).`,
    options: [String.raw`\(\vec w = 2\vec u + 3\vec v\)`, String.raw`\(\vec w = 5\vec u + \vec v\)`, String.raw`\(\vec w = 3\vec u + 2\vec v\)`, String.raw`\(\vec w = \vec u + 3\vec v\)`],
    answer: 2,
    explain: String.raw`Let \(a\vec u + b\vec v = \vec w\): \(a + 2b = 7\) and \(a - b = 1\). Subtract: \(3b = 6\), \(b = 2\), \(a = 3\). Check: \(3(1, 1) + 2(2, -1) = (7, 1)\). The others fail one component: \(2\vec u + 3\vec v = (8, -1)\), \(5\vec u + \vec v = (7, 4)\), \(\vec u + 3\vec v = (7, -2)\).` },

  { id: "qmix-16", lesson: "mix", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`A vector equation of the line through \((1, 2, 3)\) perpendicular to the plane \(2x - y + 4z = 7\) is…`,
    options: [String.raw`\(\vec r = (2, -1, 4) + t(1, 2, 3)\)`, String.raw`\(\vec r = (1, 2, 3) + t(1, 2, 0)\)`, String.raw`\(\vec r = (1, 2, 3) + t(-2, -1, -4)\)`, String.raw`\(\vec r = (1, 2, 3) + t(2, -1, 4)\)`],
    answer: 3,
    explain: String.raw`A line perpendicular to a plane runs along the normal, so \(\vec m = \vec n = (2, -1, 4)\). The first option swaps the point and the direction. \((1, 2, 0)\) satisfies \((1, 2, 0) \cdot (2, -1, 4) = 0\), so that line is <em>parallel</em> to the plane. \((-2, -1, -4)\) is not a multiple of \((2, -1, 4)\) (only two signs flipped).` },

  { id: "qmix-17", lesson: "mix", type: "tf", kind: "knowledge", tier: "likely",
    q: String.raw`Two lines in R³ that are not parallel must intersect.`,
    answer: false,
    explain: String.raw`False. In R³ non-parallel lines can pass each other without meeting: they are <span class="term">skew</span> (think of a road and a bridge crossing over it). You must solve for a common point; if the third equation fails, the lines are skew. In R², however, non-parallel lines always intersect.` },

  { id: "qmix-18", lesson: "mix", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which point lies on the line \(\dfrac{x - 1}{2} = \dfrac{y + 3}{-1} = z - 4\)?`,
    options: [String.raw`\((3, -2, 5)\)`, String.raw`\((5, -5, 6)\)`, String.raw`\((-1, 3, -4)\)`, String.raw`\((2, -1, 1)\)`],
    answer: 1,
    explain: String.raw`Parametric form: \(x = 1 + 2t,\ y = -3 - t,\ z = 4 + t\). \((5, -5, 6)\): \(t = 2\) from all three \(\checkmark\). \((3, -2, 5)\) gives \(t = 1\) from \(x\) and \(z\) but \(t = -1\) from \(y\). \((-1, 3, -4)\) is the point with its signs flipped, and \((2, -1, 1)\) is the direction vector, not a point.` },

  { id: "qmix-19", lesson: "mix", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`The line \(3x + 5y - 2 = 0\) has which direction vector?`,
    options: [String.raw`\((3, 5)\)`, String.raw`\((5, -3)\)`, String.raw`\((5, 3)\)`, String.raw`\((-3, 5)\)`],
    answer: 1,
    explain: String.raw`\((3, 5)\) is the normal, so the direction is perpendicular to it: swap the components and change one sign, \((5, -3)\). Check: \((5, -3) \cdot (3, 5) = 15 - 15 = 0\). \((5, 3)\) and \((-3, 5)\) each do only half the trick (dot products 30 and 16), and \((3, 5)\) itself is the normal.` },

  { id: "qmix-20", lesson: "mix", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`Which pair could <strong>not</strong> be the two direction vectors in a vector equation of a plane?`,
    options: [String.raw`\((1, 0, 0)\) and \((0, 1, 0)\)`, String.raw`\((2, 1, 3)\) and \((1, 2, 3)\)`, String.raw`\((1, 2, -1)\) and \((-2, -4, 2)\)`, String.raw`\((0, 0, 5)\) and \((1, 1, 0)\)`],
    answer: 2,
    explain: String.raw`\((-2, -4, 2) = -2(1, 2, -1)\): the pair is collinear, so \(s\vec a + t\vec b\) only sweeps out a line, not a plane. The direction vectors of a plane must be non-collinear (linearly independent). The other pairs are not scalar multiples of each other, so each spans a plane.` }
);

/* ---------------------------------------------------------------------------
   5. Apply & extend: test-style problems that combine lessons
   --------------------------------------------------------------------------- */
window.EXT.push(
  { id: "xmix-01", lesson: "mix", level: "apply", tier: "likely",
    title: "Dropping a perpendicular onto a plane", marks: 8,
    prompt: String.raw`<p>A point \(P(5, -1, 6)\) sits above the plane \(\pi: 2x - y + 2z - 5 = 0\).</p>
<ol type="a"><li>Find vector and parametric equations of the line \(\ell\) through \(P\) perpendicular to \(\pi\).</li>
<li>Find the point \(F\) where \(\ell\) meets \(\pi\) (the foot of the perpendicular).</li>
<li>Find the distance from \(P\) to \(\pi\) in two ways: as \(|\overrightarrow{PF}|\) and with the point-to-plane formula.</li>
<li>Find the reflection \(P'\) of \(P\) in the plane, and check it is the same distance from \(\pi\).</li></ol>`,
    hints: [String.raw`A line perpendicular to a plane runs along the plane's normal.`, String.raw`Substitute the parametric equations of \(\ell\) into the plane's equation and solve for \(t\).`, String.raw`\(P'\) is as far past \(F\) as \(P\) is before it: \(\overrightarrow{OP'} = \overrightarrow{OF} + \overrightarrow{PF}\).`],
    answer: String.raw`<p><strong>a.</strong> \(\vec m = \vec n = (2, -1, 2)\), so \(\vec r = (5, -1, 6) + t(2, -1, 2),\ t \in \mathbb{R}\); \(x = 5 + 2t,\ y = -1 - t,\ z = 6 + 2t\).</p>
<p><strong>b.</strong> Substitute into \(\pi\):</p>
<div class="eq">\[ 2(5 + 2t) - (-1 - t) + 2(6 + 2t) - 5 = 0 \;\Rightarrow\; 18 + 9t = 0 \;\Rightarrow\; t = -2 \]</div>
<p>\(F = (5 - 4,\ -1 + 2,\ 6 - 4) = (1, 1, 2)\). Check: \(2 - 1 + 4 - 5 = 0\) \(\checkmark\)</p>
<p><strong>c.</strong> \(\overrightarrow{PF} = (-4, 2, -4)\), \(|\overrightarrow{PF}| = \sqrt{16 + 4 + 16} = 6\). Formula: \(d = \dfrac{|2(5) - (-1) + 2(6) - 5|}{\sqrt{4 + 1 + 4}} = \dfrac{18}{3} = 6\). Both give 6 \(\checkmark\)</p>
<p><strong>d.</strong> \(\overrightarrow{OP'} = \overrightarrow{OF} + \overrightarrow{PF} = (1, 1, 2) + (-4, 2, -4) = (-3, 3, -2)\) (equivalently \(t = -4\) on \(\ell\)). Distance: \(\dfrac{|2(-3) - 3 + 2(-2) - 5|}{3} = \dfrac{|-18|}{3} = 6\) \(\checkmark\). The expression \(2x - y + 2z - 5\) is \(+18\) at \(P\) and \(-18\) at \(P'\): opposite signs mean opposite sides of the plane.</p>
<p class="answer">\(\ell: \vec r = (5, -1, 6) + t(2, -1, 2)\); \(F(1, 1, 2)\); \(d = 6\); \(P'(-3, 3, -2)\)</p>` },

  { id: "xmix-02", lesson: "mix", level: "analyze", tier: "likely",
    title: "Two parallel pipes", marks: 9,
    prompt: String.raw`<p>Two straight pipes in a plant follow \(L_1: \vec r = (1, 2, -1) + t(2, 1, 2)\) and \(L_2: \vec r = (3, 0, 4) + s(-4, -2, -4)\).</p>
<ol type="a"><li>Show that the pipes are parallel and distinct.</li>
<li>A flat support panel must contain both pipes. Find its Cartesian equation.</li>
<li>Find the distance between the pipes.</li>
<li>Find the point on \(L_1\) closest to the point \(P_2(3, 0, 4)\) on \(L_2\), and verify your answer to (c).</li></ol>`,
    hints: [String.raw`Parallel lines give only one direction; join a point of \(L_1\) to a point of \(L_2\) for the second.`, String.raw`The distance between parallel lines is the distance from any point of one to the other line.`, String.raw`For (d), the closest point \(F = P_1 + t\vec m\) makes \(\overrightarrow{FP_2} \cdot \vec m = 0\).`],
    answer: String.raw`<p><strong>a.</strong> \((-4, -2, -4) = -2(2, 1, 2)\): parallel. Is \(P_2(3, 0, 4)\) on \(L_1\)? \(x\): \(3 = 1 + 2t \Rightarrow t = 1\); \(y\): \(0 = 2 + t \Rightarrow t = -2\). Different \(t\), so no: parallel and distinct.</p>
<p><strong>b.</strong> Directions \(\vec m = (2, 1, 2)\) and \(\overrightarrow{P_1P_2} = (2, -2, 5)\).</p>
<div class="eq">\[ \vec n = (2, 1, 2) \times (2, -2, 5) = \big(1(5) - 2(-2),\ 2(2) - 2(5),\ 2(-2) - 1(2)\big) = (9, -6, -6) \to (3, -2, -2) \]</div>
<p>\(3x - 2y - 2z + D = 0\) at \(P_1(1, 2, -1)\): \(3 - 4 + 2 + D = 0 \Rightarrow D = -1\). Check \(P_2\): \(9 - 0 - 8 - 1 = 0\) \(\checkmark\); \(\vec n \cdot \vec m = 6 - 2 - 4 = 0\) \(\checkmark\)</p>
<p><strong>c.</strong> \(\overrightarrow{P_1P_2} \times \vec m = (2, -2, 5) \times (2, 1, 2) = (-9, 6, 6)\), magnitude \(\sqrt{81 + 36 + 36} = \sqrt{153} = 3\sqrt{17}\); \(|\vec m| = 3\). So \(d = \sqrt{17} \approx 4.12\).</p>
<p><strong>d.</strong> \(F = (1 + 2t,\ 2 + t,\ -1 + 2t)\), \(\overrightarrow{FP_2} = (2 - 2t,\ -2 - t,\ 5 - 2t)\). \(\overrightarrow{FP_2} \cdot \vec m = 4 - 4t - 2 - t + 10 - 4t = 12 - 9t = 0 \Rightarrow t = \tfrac{4}{3}\). \(F = \left(\tfrac{11}{3}, \tfrac{10}{3}, \tfrac{5}{3}\right)\). \(\overrightarrow{FP_2} = \left(-\tfrac{2}{3}, -\tfrac{10}{3}, \tfrac{7}{3}\right)\), \(|\overrightarrow{FP_2}|^2 = \tfrac{4 + 100 + 49}{9} = 17\), so \(|\overrightarrow{FP_2}| = \sqrt{17}\) \(\checkmark\). (And \(F\) lies on the panel: \(11 - \tfrac{20}{3} - \tfrac{10}{3} - 1 = 0\).)</p>
<p class="answer">Panel \(3x - 2y - 2z - 1 = 0\); distance \(\sqrt{17}\); closest point \(\left(\tfrac{11}{3}, \tfrac{10}{3}, \tfrac{5}{3}\right)\)</p>` },

  { id: "xmix-03", lesson: "mix", level: "analyze", tier: "likely",
    title: "Closest point on a line, then two planes", marks: 10,
    prompt: String.raw`<p>Let \(L: \vec r = (1, -2, 3) + t(1, 2, -2)\) and \(P(6, 2, 5)\).</p>
<ol type="a"><li>Find the point \(F\) on \(L\) closest to \(P\).</li>
<li>Find the distance from \(P\) to \(L\) as \(|\overrightarrow{FP}|\), and confirm with \(\dfrac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\).</li>
<li>Find the Cartesian equation of the plane through \(P\) perpendicular to \(L\). Show that \(F\) lies on it and explain why that had to happen.</li>
<li>Find the Cartesian equation of the plane containing \(L\) and \(P\).</li>
<li>Show that the planes in (c) and (d) are perpendicular.</li></ol>`,
    hints: [String.raw`\(F = P_0 + t\vec m\) is closest when \(\overrightarrow{FP} \perp \vec m\).`, String.raw`A plane perpendicular to a line uses the line's direction as its normal.`, String.raw`For (d), cross \(\vec m\) with \(\overrightarrow{P_0P}\).`],
    answer: String.raw`<p><strong>a.</strong> \(F = (1 + t,\ -2 + 2t,\ 3 - 2t)\), \(\overrightarrow{FP} = (5 - t,\ 4 - 2t,\ 2 + 2t)\). Closest when \(\overrightarrow{FP} \cdot \vec m = 0\): \(5 - t + 8 - 4t - 4 - 4t = 9 - 9t = 0\), so \(t = 1\) and \(F = (2, 0, 1)\).</p>
<p><strong>b.</strong> \(\overrightarrow{FP} = (4, 2, 4)\), \(|\overrightarrow{FP}| = 6\). Formula: \(\overrightarrow{P_0P} = (5, 4, 2)\), \(\overrightarrow{P_0P} \times \vec m = \big(4(-2) - 2(2),\ 2(1) - 5(-2),\ 5(2) - 4(1)\big) = (-12, 12, 6)\), magnitude \(\sqrt{324} = 18\); \(|\vec m| = 3\); \(d = 6\) \(\checkmark\)</p>
<p><strong>c.</strong> \(\vec n = \vec m = (1, 2, -2)\): \(x + 2y - 2z + D = 0\) at \(P\): \(6 + 4 - 10 + D = 0 \Rightarrow D = 0\). Plane: \(x + 2y - 2z = 0\). At \(F\): \(2 + 0 - 2 = 0\) \(\checkmark\). Reason: \(\overrightarrow{FP} \perp \vec m\), and the plane through \(P\) with normal \(\vec m\) contains every point \(X\) with \(\overrightarrow{XP} \perp \vec m\); \(F\) is such a point. So "drop a perpendicular to a line" is the same as "intersect the line with the perpendicular plane through \(P\)".</p>
<p><strong>d.</strong> \(\vec n = \vec m \times \overrightarrow{P_0P} = (12, -12, -6) \to (2, -2, -1)\). \(2x - 2y - z + D = 0\) at \(P_0(1, -2, 3)\): \(2 + 4 - 3 + D = 0 \Rightarrow D = -3\). Check \(P\): \(12 - 4 - 5 - 3 = 0\) \(\checkmark\); \(F\): \(4 - 0 - 1 - 3 = 0\) \(\checkmark\)</p>
<p><strong>e.</strong> \((1, 2, -2) \cdot (2, -2, -1) = 2 - 4 + 2 = 0\), so the normals, and therefore the planes, are perpendicular. (The second plane contains \(L\), whose direction is the first plane's normal.)</p>
<p class="answer">\(F(2, 0, 1)\); \(d = 6\); \(x + 2y - 2z = 0\); \(2x - 2y - z - 3 = 0\); perpendicular since \(\vec n_1 \cdot \vec n_2 = 0\)</p>` },

  { id: "xmix-04", lesson: "mix", level: "analyze", tier: "likely",
    title: "When are four points coplanar?", marks: 9,
    prompt: String.raw`<p>Consider \(A(1, 0, 2)\), \(B(2, 1, k)\), \(C(2, 3, 1)\) and \(D(0, 1, 5)\).</p>
<ol type="a"><li>Find \(k\) so that the four points lie in one plane.</li>
<li>For that \(k\), find the Cartesian equation of the plane and check all four points.</li>
<li>Express \(\overrightarrow{AB}\) as a linear combination of \(\overrightarrow{AC}\) and \(\overrightarrow{AD}\).</li>
<li>Find the distance from the origin to the plane.</li></ol>`,
    hints: [String.raw`Four points are coplanar exactly when the three vectors \(\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{AD}\) are coplanar.`, String.raw`Put the unknown in the vector you dot last, so the cross product is all numbers.`],
    answer: String.raw`<p><strong>a.</strong> \(\overrightarrow{AB} = (1, 1, k - 2)\), \(\overrightarrow{AC} = (1, 3, -1)\), \(\overrightarrow{AD} = (-1, 1, 3)\).</p>
<div class="eq">\[ \overrightarrow{AC} \times \overrightarrow{AD} = \big(3(3) - (-1)(1),\ (-1)(-1) - 1(3),\ 1(1) - 3(-1)\big) = (10, -2, 4) \]</div>
<p>\(\overrightarrow{AB} \cdot (10, -2, 4) = 10 - 2 + 4(k - 2) = 4k\). Coplanar \(\iff 4k = 0 \iff k = 0\).</p>
<p><strong>b.</strong> \(\vec n = (10, -2, 4) \to (5, -1, 2)\); at \(A\): \(5 - 0 + 4 + D = 0 \Rightarrow D = -9\). Plane \(5x - y + 2z - 9 = 0\). \(B(2, 1, 0)\): \(10 - 1 + 0 - 9 = 0\); \(C\): \(10 - 3 + 2 - 9 = 0\); \(D\): \(0 - 1 + 10 - 9 = 0\) \(\checkmark\)</p>
<p><strong>c.</strong> \((1, 1, -2) = a(1, 3, -1) + b(-1, 1, 3)\): \(a - b = 1\), \(3a + b = 1\), so \(4a = 2\), \(a = \tfrac{1}{2}\), \(b = -\tfrac{1}{2}\). Check \(z\): \(-\tfrac{1}{2} - \tfrac{3}{2} = -2\) \(\checkmark\). So \(\overrightarrow{AB} = \tfrac{1}{2}\overrightarrow{AC} - \tfrac{1}{2}\overrightarrow{AD}\).</p>
<p><strong>d.</strong> \(d = \dfrac{|0 - 0 + 0 - 9|}{\sqrt{25 + 1 + 4}} = \dfrac{9}{\sqrt{30}} = \dfrac{3\sqrt{30}}{10} \approx 1.64\).</p>
<p class="answer">\(k = 0\); \(5x - y + 2z - 9 = 0\); \(\overrightarrow{AB} = \tfrac{1}{2}\overrightarrow{AC} - \tfrac{1}{2}\overrightarrow{AD}\); \(d = \tfrac{3\sqrt{30}}{10}\)</p>` },

  { id: "xmix-05", lesson: "mix", level: "apply", tier: "likely",
    title: "A laser and a solar panel", marks: 10,
    prompt: String.raw`<p>A laser at \(S(1, 3, 6)\) fires along \(\vec m = (1, -1, -2)\) toward a flat solar panel lying in \(\pi: 2x - y + 3z - 11 = 0\).</p>
<ol type="a"><li>Show the beam is not parallel to the panel.</li>
<li>Find the point \(H\) where the beam hits the panel.</li>
<li>Find the shortest distance from \(S\) to the panel and compare it with the length \(|\overrightarrow{SH}|\) the beam travels.</li>
<li>A second laser at \(S\) fires along \((1, 2, 0)\). Show it never hits the panel's plane and state how far from the plane it stays.</li>
<li>(Extension) Find the angle the first beam makes with the panel's surface.</li></ol>`,
    hints: [String.raw`A line is parallel to a plane exactly when \(\vec m \cdot \vec n = 0\).`, String.raw`For (e), find the angle \(\varphi\) between the beam and the normal; the angle with the surface is \(90^\circ - \varphi\).`],
    answer: String.raw`<p><strong>a.</strong> \(\vec n = (2, -1, 3)\): \(\vec m \cdot \vec n = 2 + 1 - 6 = -3 \neq 0\), so not parallel: the beam meets the plane at exactly one point.</p>
<p><strong>b.</strong> Beam: \(x = 1 + t,\ y = 3 - t,\ z = 6 - 2t\). Substitute: \(2(1 + t) - (3 - t) + 3(6 - 2t) - 11 = 6 - 3t = 0\), so \(t = 2\), \(H = (3, 1, 2)\). Check: \(6 - 1 + 6 - 11 = 0\) \(\checkmark\)</p>
<p><strong>c.</strong> \(d = \dfrac{|2 - 3 + 18 - 11|}{\sqrt{4 + 1 + 9}} = \dfrac{6}{\sqrt{14}} = \dfrac{3\sqrt{14}}{7} \approx 1.60\). The beam travels \(|\overrightarrow{SH}| = |(2, -2, -4)| = 2\sqrt{6} \approx 4.90\), much longer, because it hits at a slant; the perpendicular distance is always the shortest.</p>
<p><strong>d.</strong> \((1, 2, 0) \cdot (2, -1, 3) = 2 - 2 + 0 = 0\): parallel to the plane. \(S\) is not in the plane (\(2 - 3 + 18 - 11 = 6 \neq 0\)), so the beam never touches it and stays \(\tfrac{3\sqrt{14}}{7}\) away the whole time.</p>
<p><strong>e.</strong> \(\cos\varphi = \dfrac{|\vec m \cdot \vec n|}{|\vec m||\vec n|} = \dfrac{3}{\sqrt{6}\sqrt{14}} = \dfrac{3}{\sqrt{84}} \approx 0.327\), so \(\varphi \approx 70.9^\circ\) from the normal and the beam meets the surface at about \(90^\circ - 70.9^\circ \approx 19^\circ\). Check: \(\sin 19.1^\circ \approx 0.327 = \dfrac{d}{|\overrightarrow{SH}|} = \dfrac{6/\sqrt{14}}{2\sqrt{6}}\) \(\checkmark\)</p>
<p class="answer">\(H(3, 1, 2)\); \(d = \tfrac{3\sqrt{14}}{7}\) vs path \(2\sqrt{6}\); second beam parallel, \(\tfrac{3\sqrt{14}}{7}\) away; about \(19^\circ\) to the surface</p>` },

  { id: "xmix-06", lesson: "mix", level: "extend", tier: "likely",
    title: "Prove it: distance formulas for planes", marks: 8,
    prompt: String.raw`<ol type="a"><li>Using the projection of \(\overrightarrow{P_0P_1}\) onto the normal (as the teacher did in R²), prove that the distance from \(P_1(x_1, y_1, z_1)\) to the plane \(Ax + By + Cz + D = 0\) is \(d = \dfrac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\).</li>
<li>Show that the distance between the parallel planes \(Ax + By + Cz + D_1 = 0\) and \(Ax + By + Cz + D_2 = 0\) is \(\dfrac{|D_1 - D_2|}{\sqrt{A^2 + B^2 + C^2}}\).</li>
<li>Use (b) to find the distance between \(x + 2y - 5z - 10 = 0\) and \(2x + 4y - 10z - 17 = 0\).</li>
<li>Explain why there is no formula of the form \(\dfrac{|Ax_1 + By_1 + Cz_1 + D|}{\dots}\) for the distance from a point to a <em>line</em> in R³, and what replaces it.</li></ol>`,
    hints: [String.raw`Let \(P_0(x_0, y_0, z_0)\) be any point on the plane, so \(Ax_0 + By_0 + Cz_0 + D = 0\).`, String.raw`For (b), pick a point on the first plane: then \(Ax_1 + By_1 + Cz_1 = -D_1\).`, String.raw`For (c), the two equations must have identical \(A, B, C\) before you compare \(D\)s.`],
    answer: String.raw`<p><strong>a.</strong> Let \(P_0(x_0, y_0, z_0)\) be on the plane, so \(D = -Ax_0 - By_0 - Cz_0\). The shortest distance is the length of the projection of \(\overrightarrow{P_0P_1}\) onto \(\vec n = (A, B, C)\):</p>
<div class="eq">\[ \begin{aligned} d &= \frac{|\overrightarrow{P_0P_1} \cdot \vec n|}{|\vec n|} = \frac{|A(x_1 - x_0) + B(y_1 - y_0) + C(z_1 - z_0)|}{\sqrt{A^2 + B^2 + C^2}} \\ &= \frac{|Ax_1 + By_1 + Cz_1 + (-Ax_0 - By_0 - Cz_0)|}{\sqrt{A^2 + B^2 + C^2}} = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}} \end{aligned} \]</div>
<p><strong>b.</strong> Take \(P_1\) on the first plane, so \(Ax_1 + By_1 + Cz_1 = -D_1\). By (a), its distance to the second plane is \(\dfrac{|-D_1 + D_2|}{\sqrt{A^2 + B^2 + C^2}} = \dfrac{|D_1 - D_2|}{\sqrt{A^2 + B^2 + C^2}}\). Since the planes are parallel, every point of the first plane gives the same value.</p>
<p><strong>c.</strong> Halve the second equation so the coefficients match: \(x + 2y - 5z - \tfrac{17}{2} = 0\). Then \(d = \dfrac{|-10 + \tfrac{17}{2}|}{\sqrt{1 + 4 + 25}} = \dfrac{3/2}{\sqrt{30}} = \dfrac{3}{2\sqrt{30}} = \dfrac{\sqrt{30}}{20}\), matching review question Planes 11d.</p>
<p><strong>d.</strong> The formula in (a) depends on a single normal direction: distance is measured straight along \(\vec n\). A line in R³ has infinitely many perpendicular directions and no Cartesian equation, so there is nothing to project onto. Instead you use the line's direction: \(d = |\overrightarrow{P_0P}|\sin\theta\), and since \(|\overrightarrow{P_0P} \times \vec m| = |\overrightarrow{P_0P}||\vec m|\sin\theta\), \(d = \dfrac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\).</p>
<p class="answer">(c) \(\dfrac{\sqrt{30}}{20}\) units; proofs as shown</p>`,
    }
);

/* ---------------------------------------------------------------------------
   6. One-page cram sheet (based on the teacher's completed summary sheet
      plus the lesson notes)
   --------------------------------------------------------------------------- */
window.CRAM = String.raw`
<h3 data-tier="essential">Lines in R²</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Form</th><th>Equation</th></tr></thead><tbody>
<tr><th>Vector</th><td>\(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\) · \((x, y) = (x_0, y_0) + t(a, b)\)</td></tr>
<tr><th>Parametric</th><td>\(x = x_0 + ta,\ \ y = y_0 + tb,\ \ t \in \mathbb{R}\)</td></tr>
<tr><th>Symmetric</th><td>\(\dfrac{x - x_0}{a} = \dfrac{y - y_0}{b}\quad (a, b \neq 0)\)</td></tr>
<tr><th>Cartesian (scalar)</th><td>\(Ax + By + C = 0\), normal \(\vec n = (A, B)\); write with \(A > 0\), integers</td></tr>
<tr><th>Slope-intercept</th><td>\(y = mx + b\) (slope \(m\), not the vector \(\vec m\))</td></tr>
</tbody></table></div>
<div class="table-wrap"><table class="data"><thead><tr><th>Slope ⇄ direction ⇄ normal</th><th>Rule</th></tr></thead><tbody>
<tr><th>Slope \(\tfrac{p}{q}\) → direction</th><td>\(\vec m = (q, p)\) (run, rise)</td></tr>
<tr><th>Direction \((a, b)\) → slope</th><td>\(\dfrac{b}{a}\)</td></tr>
<tr><th>Direction → normal</th><td>swap and change one sign: \((a, b) \to (b, -a)\); check \(\vec m \cdot \vec n = 0\)</td></tr>
<tr><th>Normal \((A, B)\) → direction</th><td>\(\vec m = (B, -A)\) or \((-B, A)\)</td></tr>
<tr><th>Perpendicular slopes</th><td>negative reciprocals: \(m_1 m_2 = -1\)</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Lines in R³</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Form</th><th>Equation</th></tr></thead><tbody>
<tr><th>Vector</th><td>\(\vec r = \vec r_0 + t\vec m\) · \((x, y, z) = (x_0, y_0, z_0) + t(a, b, c),\ t \in \mathbb{R}\)</td></tr>
<tr><th>Parametric</th><td>\(x = x_0 + ta,\ y = y_0 + tb,\ z = z_0 + tc\)</td></tr>
<tr><th>Symmetric</th><td>\(\dfrac{x - x_0}{a} = \dfrac{y - y_0}{b} = \dfrac{z - z_0}{c}\quad (a, b, c \neq 0)\)</td></tr>
<tr><th>A zero component</th><td>mix forms: \(\vec m = (4, 0, -5)\) through \((3, -1, 2)\): \(\dfrac{x - 3}{4} = \dfrac{z - 2}{-5},\ y = -1\)</td></tr>
<tr><th>Cartesian</th><td><strong>none</strong>: a line in R³ has no unique normal; \(Ax + By + Cz + D = 0\) is a plane</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Planes in R³</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Form</th><th>Equation</th></tr></thead><tbody>
<tr><th>Vector</th><td>\(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\); \(\vec a, \vec b\) non-collinear</td></tr>
<tr><th>Parametric</th><td>\(x = x_0 + sa_1 + tb_1,\ y = y_0 + sa_2 + tb_2,\ z = z_0 + sa_3 + tb_3\)</td></tr>
<tr><th>Cartesian (scalar)</th><td>\(Ax + By + Cz + D = 0\), normal \(\vec n = (A, B, C)\)</td></tr>
<tr><th>Normal from directions</th><td>\(\vec n = \vec a \times \vec b\) (any non-zero multiple)</td></tr>
<tr><th>Symmetric</th><td><strong>none</strong>: two parameters</td></tr>
<tr><th>Missing variable</th><td>\(y + z = 5\) in R³ is a plane with \(\vec n = (0, 1, 1)\), parallel to the \(x\)-axis</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Tools: dot, cross, triple scalar product</h3>
<div class="table-wrap"><table class="data"><tbody>
<tr><th>Dot product</th><td>\(\vec a \cdot \vec b = a_1b_1 + a_2b_2 + a_3b_3 = |\vec a||\vec b|\cos\theta\); it is 0 exactly when \(\vec a \perp \vec b\)</td></tr>
<tr><th>Cross product</th><td>\(\vec a \times \vec b = (a_2b_3 - a_3b_2,\ a_3b_1 - a_1b_3,\ a_1b_2 - a_2b_1)\), perpendicular to both</td></tr>
<tr><th>"Write it twice"</th><td>\(\begin{array}{cccc} a_2 & a_3 & a_1 & a_2 \\ b_2 & b_3 & b_1 & b_2 \end{array}\) cross-multiply each \(2 \times 2\) block, left to right</td></tr>
<tr><th>\(|\vec a \times \vec b|\)</th><td>\(|\vec a||\vec b|\sin\theta\) = area of the parallelogram</td></tr>
<tr><th>Triple scalar product</th><td>\(\vec u \cdot (\vec v \times \vec w)\); its absolute value is the volume of the parallelepiped</td></tr>
<tr><th>Angle between planes</th><td>\(\cos\theta = \dfrac{|\vec n_1 \cdot \vec n_2|}{|\vec n_1||\vec n_2|}\)</td></tr>
<tr><th>Direction cosines</th><td>\(\cos\alpha = \dfrac{a}{|\vec m|},\ \cos\beta = \dfrac{b}{|\vec m|},\ \cos\gamma = \dfrac{c}{|\vec m|}\) (rationalize)</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Converting between forms</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>From → to</th><th>How</th></tr></thead><tbody>
<tr><th>Vector → parametric</th><td>split into components</td></tr>
<tr><th>Parametric → symmetric</th><td>solve each for \(t\), set equal</td></tr>
<tr><th>Symmetric → vector</th><td>point = numbers subtracted (signs flip); \(\vec m\) = denominators. Rewrite \(\tfrac{2 - y}{4} = \tfrac{y - 2}{-4}\); \(z + 5 = \tfrac{z + 5}{1}\)</td></tr>
<tr><th>Line R²: vector → Cartesian</th><td>\(\vec n\) from \(\vec m\) (swap, one sign), then substitute the point for \(C\); or cross-multiply the symmetric form</td></tr>
<tr><th>Line R²: Cartesian → vector</th><td>\(\vec m\) from \(\vec n\); point: set \(x = 0\) (or \(y = 0\)) and solve</td></tr>
<tr><th>Plane: vector → Cartesian</th><td>\(\vec n = \vec a \times \vec b\), substitute \(\vec r_0\) for \(D\)</td></tr>
<tr><th>Plane: parametric → vector</th><td>constants = point; \(s\)-column = \(\vec a\); \(t\)-column = \(\vec b\)</td></tr>
<tr><th>Plane: Cartesian → vector</th><td>find 3 points (e.g. intercepts), subtract for \(\vec a, \vec b\); check \(\vec a \cdot \vec n = \vec b \cdot \vec n = 0\)</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Parallel, perpendicular, coincident, skew</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Objects</th><th>Parallel if</th><th>Perpendicular if</th></tr></thead><tbody>
<tr><th>Two lines</th><td>\(\vec m_1 = k\vec m_2\)</td><td>\(\vec m_1 \cdot \vec m_2 = 0\)</td></tr>
<tr><th>Two planes</th><td>\(\vec n_1 = k\vec n_2\)</td><td>\(\vec n_1 \cdot \vec n_2 = 0\)</td></tr>
<tr><th>Line and plane</th><td>\(\vec m \cdot \vec n = 0\)</td><td>\(\vec m = k\vec n\)</td></tr>
</tbody></table></div>
<div class="table-wrap"><table class="data"><thead><tr><th>Two lines in R³</th><th>Test</th></tr></thead><tbody>
<tr><th>Coincident</th><td>parallel and a point of one satisfies the other (same \(t\) in every component)</td></tr>
<tr><th>Parallel, distinct</th><td>parallel, point test fails</td></tr>
<tr><th>Intersecting</th><td>not parallel; solve two component equations for \(t, s\), and the third checks</td></tr>
<tr><th>Skew</th><td>not parallel and the third equation fails (only possible in R³)</td></tr>
<tr><th>Line vs plane</th><td>\(\vec m \cdot \vec n = 0\): in the plane if \(P_0\) satisfies it, else parallel; \(\neq 0\): one intersection point</td></tr>
<tr><th>Planes</th><td>\(\vec n_1 = k\vec n_2\) and whole equation a multiple → coincident; normals not parallel → meet in a line</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Distances</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Distance</th><th>Formula</th></tr></thead><tbody>
<tr><th>Point to point</th><td>\(\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}\)</td></tr>
<tr><th>Point \((x_1, y_1)\) to line, R²</th><td>\(d = \dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\) (line as \(\dots = 0\))</td></tr>
<tr><th>Point \(P\) to line, R³</th><td>\(d = \dfrac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\)</td></tr>
<tr><th>Point \((x_1, y_1, z_1)\) to plane</th><td>\(d = \dfrac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\)</td></tr>
<tr><th>Parallel lines / line ∥ plane / parallel planes</th><td>pick one point on the first object, use the point formula to the second</td></tr>
<tr><th>Why it works</th><td>shortest distance = perpendicular distance = projection of \(\overrightarrow{P_0P}\) onto \(\vec n\), or \(|\overrightarrow{P_0P}|\sin\theta\)</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Linear combinations, collinear and coplanar</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Idea</th><th>Meaning / test</th></tr></thead><tbody>
<tr><th>Collinear</th><td>\(\vec u = k\vec v\)</td></tr>
<tr><th>Linear combination</th><td>\(\vec w = a\vec u + b\vec v,\ a, b \in \mathbb{R}\)</td></tr>
<tr><th>Basis for R²</th><td>any two non-collinear vectors; standard basis \(\hat\imath, \hat\jmath\)</td></tr>
<tr><th>Basis for R³</th><td>three non-coplanar vectors: \(\vec u \cdot (\vec v \times \vec w) \neq 0\)</td></tr>
<tr><th>Coplanar (long way)</th><td>let \(\vec w = a\vec u + b\vec v\); solve 2 equations, check the 3rd</td></tr>
<tr><th>Coplanar (fast way)</th><td>\(\vec u \cdot (\vec v \times \vec w) = 0\)</td></tr>
<tr><th>Linearly dependent</th><td>one vector is a combination of the others (collinear pair, coplanar triple)</td></tr>
<tr><th>Linearly independent</th><td>none is; two non-collinear vectors span a plane</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Methods you must know</h3>
<h4>Is a point on a line / plane?</h4>
<ol class="work"><li>Line: substitute into the parametric equations; the same \(t\) must come out of every component.</li><li>Plane (vector form): solve two equations for \(s, t\), then check the third. Plane (Cartesian): substitute, is it 0?</li></ol>
<h4>Plane through 3 points \(A, B, C\)</h4>
<ol class="work"><li>\(\overrightarrow{AB}, \overrightarrow{AC}\) (check non-collinear).</li><li>\(\vec n = \overrightarrow{AB} \times \overrightarrow{AC}\), make \(A > 0\).</li><li>Substitute \(A\) for \(D\); check \(B\) and \(C\).</li></ol>
<h4>Plane containing a line and a point \(P\)</h4>
<ol class="work"><li>Line gives \(P_0\) and \(\vec m\).</li><li>Second direction \(\overrightarrow{P_0P}\) (if it is a multiple of \(\vec m\), \(P\) is on the line: no unique plane).</li><li>\(\vec n = \vec m \times \overrightarrow{P_0P}\), substitute a point.</li></ol>
<h4>Plane containing two lines</h4>
<ol class="work"><li>Parallel lines: directions \(\vec m\) and \(\overrightarrow{P_1P_2}\) (joining the two lines).</li><li>Intersecting lines: directions \(\vec m_1\) and \(\vec m_2\), point = the common point.</li><li>Cross, then substitute.</li></ol>
<h4>Perpendicular / parallel through a point</h4>
<ol class="work"><li>Line \(\perp\) plane: \(\vec m = \vec n\).</li><li>Plane \(\perp\) line: \(\vec n = \vec m\).</li><li>Plane \(\parallel\) plane: same \(\vec n\), new \(D\). Line \(\parallel\) line: same \(\vec m\).</li><li>Plane \(\perp\) plane containing given points: use the given plane's \(\vec n\) as a direction vector.</li></ol>
<h4>Find \(k\) for parallel / perpendicular planes</h4>
<ol class="work"><li>Parallel: \(\vec n_2 = c\,\vec n_1\); the components without \(k\) fix \(c\).</li><li>Perpendicular: \(\vec n_1 \cdot \vec n_2 = 0\) (often a quadratic: keep both roots).</li></ol>
<h4>Where a line meets a plane</h4>
<ol class="work"><li>Substitute the parametric equations into \(Ax + By + Cz + D = 0\).</li><li>One \(t\) → one point; \(0 = 0\) → line in the plane; \(0 = \text{nonzero}\) → parallel, no point.</li></ol>

<h3 data-tier="essential">Common mistakes</h3>
<ul>
<li>Using the point as the direction (or the normal as a direction in the plane).</li>
<li>Forgetting the sign flip in symmetric form: \(\tfrac{x + 1}{3}\) means \(x_0 = -1\); \(\tfrac{2 - y}{4}\) has direction component \(-4\).</li>
<li>Missing hidden 1s (\(z + 3\)) and hidden 0s (\(y = -1\) means \(b = 0\)).</li>
<li>Dividing by 0 in symmetric form instead of writing \(y = y_0\).</li>
<li>Writing a "Cartesian equation" for a line in R³.</li>
<li>Distance formulas with the equation not set to 0 (\(2x - 3y = 7\) has \(C = -7\)).</li>
<li>Cross-product sign slips: check \(\vec n \cdot \vec a = \vec n \cdot \vec b = 0\) every time.</li>
<li>Crossing two parallel directions (gives \(\vec 0\)); a plane needs non-collinear directions.</li>
<li>Stopping after two equations when testing a point on a plane or a common point of two lines: always check the third.</li>
<li>Keeping the old \(D\) or \(C\) for a parallel line or plane.</li>
<li>"Not parallel" ≠ "intersecting" in R³ (skew lines).</li>
<li>Line ∥ plane is \(\vec m \cdot \vec n = 0\), not \(\vec m = k\vec n\) (that is line ⊥ plane).</li>
</ul>
`;
