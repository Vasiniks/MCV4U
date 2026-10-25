/* MCV4U Unit 3 · Lesson 3.3 Equations of a Line in R³: lesson, worksheet Q&A, quiz, apply & extend, beyond the notes, glossary. */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

/* ======================================================================
   LESSON
   ====================================================================== */
window.LESSONS.push({
  id: "3.3", title: "Equations of a Line in R³", stage: "c3",
  where: "R³",
  summary: String.raw`A line in space is fixed by one point and one direction, exactly as in R², so its vector and parametric equations simply gain a \(z\)-component, and eliminating the parameter gives a new form: the symmetric equations. What does not carry over is the Cartesian equation: a line in R³ has no single normal vector, so one equation \(Ax + By + Cz + D = 0\) describes a plane instead. You will also learn to test whether a point is on a line and to classify a pair of lines.`,
  objectives: [
    String.raw`Derive the vector equation \(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\) of a line in R³ from a known point and a direction vector.`,
    String.raw`Write the vector, parametric and symmetric equations of a line given a point and a direction, or given two points.`,
    String.raw`Read a point and a direction vector from any form, including awkward symmetric forms such as \(-x\) or \(\frac{2 - y}{4}\).`,
    String.raw`Explain why a line in R³ has no Cartesian equation.`,
    String.raw`Decide whether a point lies on a line, and find unknown coordinates of a point that is on a line.`,
    String.raw`Classify two lines as equivalent (coincident), parallel, perpendicular or neither.`,
    String.raw`Describe a line whose direction vector has one or two zero components.`
  ],
  html: String.raw`
<h3 data-tier="essential">Same idea as R², one more coordinate</h3>
<p>In lesson 3.1 you built a line in R² from two ingredients: a point on the line and a direction vector. Nothing about that idea depends on being in a flat plane. A line in space is still pinned down by one known point and one direction. The only change is that every point and every vector now has three components, \((x, y, z)\) instead of \((x, y)\).</p>
<p>So the vector and parametric equations carry over almost word for word, and a third form, the <span class="term">symmetric equations</span>, comes from eliminating the parameter. The one form that does <em>not</em> carry over is the Cartesian equation \(Ax + By + C = 0\) from lesson 3.2. Understanding why is the key idea of this lesson.</p>

<h3 data-tier="essential">Deriving the vector equation</h3>
<p>The teacher's derivation is the same as in R², written with three coordinates. Start by naming the three ingredients:</p>
<ul>
<li>Let \(P_0(x_0, y_0, z_0)\) be a known point on the line.</li>
<li>Let \(\vec m = (a, b, c)\) be the direction vector.</li>
<li>Let \(P(x, y, z)\) be <em>any</em> point on the line.</li>
</ul>
<figure class="diagram narrow"><svg viewBox="0 0 520 330" role="img" aria-labelledby="d33-derive"><title id="d33-derive">A line in R³ through P₀ and P, with position vectors r₀ and r drawn from the origin, the direction vector m along the line, and the vector tm from P₀ to P</title>
<line class="s-mute" x1="190" y1="230" x2="190" y2="30"/>
<polygon class="f-mute" points="190,22 185,34 195,34"/>
<text class="t-mute" x="202" y="34" font-size="15" font-style="italic">z</text>
<line class="s-mute" x1="190" y1="230" x2="495" y2="230"/>
<polygon class="f-mute" points="503,230 491,225 491,235"/>
<text class="t-mute" x="496" y="252" font-size="15" font-style="italic">y</text>
<line class="s-mute" x1="190" y1="230" x2="82" y2="309"/>
<polygon class="f-mute" points="76.4,313.1 89,310.1 83.1,302"/>
<text class="t-mute" x="62" y="322" font-size="15" font-style="italic">x</text>
<text class="t-ink" x="174" y="249" font-size="15">O</text>
<line class="s-ink" x1="256" y1="71" x2="476" y2="191" stroke-width="2"/>
<polygon class="f-ink" points="476,191 465.1,190.2 469.4,182.3"/>
<polygon class="f-ink" points="256,71 262.6,79.7 266.9,71.8"/>
<line class="s-blue" x1="190" y1="230" x2="296.8" y2="98.9" stroke-width="2"/>
<polygon class="f-blue" points="300,95 297.2,105.6 290.2,99.9"/>
<text class="t-blue" x="234" y="165" font-size="16" font-style="italic" text-anchor="end">r₀</text>
<line class="s-teal" x1="190" y1="230" x2="404.3" y2="156.9" stroke-width="2"/>
<polygon class="f-teal" points="410,155 402,162.5 399.1,154"/>
<text class="t-teal" x="330" y="205" font-size="16" font-style="italic">r</text>
<line class="s-amber" x1="305.7" y1="84.5" x2="350" y2="108.7" stroke-width="2.5"/>
<polygon class="f-amber" points="355.2,111.5 344.3,110.7 348.6,102.8"/>
<text class="t-amber" x="324" y="84" font-size="16" font-style="italic">m</text>
<line class="s-magenta" x1="303.1" y1="110.3" x2="399" y2="162.6" stroke-width="2"/>
<polygon class="f-magenta" points="404.3,165.5 393.4,164.7 397.7,156.8"/>
<text class="t-magenta" x="334" y="162" font-size="16" font-style="italic">tm</text>
<circle class="f-ink" cx="300" cy="95" r="4"/>
<circle class="f-ink" cx="410" cy="155" r="4"/>
<text class="t-ink" x="280" y="113" font-size="14" text-anchor="end">P₀(x₀, y₀, z₀)</text>
<text class="t-ink" x="420" y="146" font-size="14">P(x, y, z)</text>
</svg><figcaption>To reach any point \(P\) on the line, go from the origin to the known point \(P_0\) (vector \(\vec r_0\)), then slide a multiple \(t\) of the direction vector \(\vec m\) along the line.</figcaption></figure>
<p>Now get from the origin to \(P\) in two legs: first to \(P_0\), then along the line from \(P_0\) to \(P\). Vector addition (tip to tail) says</p>
<div class="eq">\[ \overrightarrow{OP} = \overrightarrow{OP_0} + \overrightarrow{P_0P} \]</div>
<p>The vector \(\overrightarrow{P_0P}\) lies along the line, so it is parallel to the direction vector: \(\overrightarrow{P_0P} \parallel \vec m\). Parallel vectors are scalar multiples of each other, so \(\overrightarrow{P_0P} = t\vec m\) for some real number \(t\). Substitute:</p>
<div class="eq">\[ \overrightarrow{OP} = \overrightarrow{OP_0} + t\vec m,\quad t \in \mathbb{R} \]</div>
<p>Finally rename the two position vectors, \(\overrightarrow{OP} = \vec r\) and \(\overrightarrow{OP_0} = \vec r_0\), to get the standard form.</p>
<div class="callout key"><p class="callout-title">Vector equation of a line in R³</p>
<div class="eq">\[ \vec r = \vec r_0 + t\vec m,\quad t \in \mathbb{R} \]</div>
<div class="eq">\[ (x, y, z) = (x_0, y_0, z_0) + t(a, b, c),\quad t \in \mathbb{R} \]</div>
<p>\(\vec r_0\) is the position vector of a known point on the line, \(\vec m = (a, b, c)\) is a direction vector (any nonzero vector along the line), and \(t\) is the parameter.</p></div>
<p>How to read it: every real value of \(t\) produces exactly one point on the line. \(t = 0\) gives \(P_0\) itself; \(t = 1\) gives the point one full \(\vec m\) further along; \(t = -2\) gives the point two \(\vec m\)'s back the other way. As \(t\) runs through all of \(\mathbb{R}\), the tip of \(\vec r\) traces out the entire line, in both directions, forever.</p>
<div class="callout tip"><p class="callout-title">One line, many correct equations</p>
<p>You can start from <em>any</em> point on the line and use <em>any</em> nonzero multiple of the direction vector. Two students can both be right with different-looking answers. Example 1 below shows three different vector equations of the same line.</p></div>
<details class="check"><summary>For \(\vec r = (4, -1, 2) + t(-2, 3, 5)\), which points do \(t = 0\), \(t = 1\) and \(t = -1\) give?</summary><div class="ans">
<p>\(t = 0\): \((4, -1, 2)\), the known point. \(t = 1\): \((4 - 2,\ -1 + 3,\ 2 + 5) = (2, 2, 7)\). \(t = -1\): \((4 + 2,\ -1 - 3,\ 2 - 5) = (6, -4, -3)\).</p></div></details>

<h3 data-tier="essential">Parametric equations in R³</h3>
<p>A vector equation is really three equations at once, one for each component. Expand the right side and match components:</p>
<div class="eq">\[ (x, y, z) = (x_0 + ta,\ y_0 + tb,\ z_0 + tc) \]</div>
<div class="callout key"><p class="callout-title">Parametric equations of a line in R³</p>
<div class="eq">\[ \left.\begin{aligned} x &= x_0 + ta \\ y &= y_0 + tb \\ z &= z_0 + tc \end{aligned}\right\}\ t \in \mathbb{R} \]</div></div>
<p>Each coordinate is its own simple linear function of the <em>same</em> parameter \(t\). The constant terms are the known point; the coefficients of \(t\) are the direction vector. The word "same" matters: because the three equations share one \(t\), the coordinates \(x\), \(y\) and \(z\) move together, which is what keeps the point on one line.</p>
<p>Going backwards is just as quick. From \(x = 5 - 2t,\ y = 3t,\ z = -1 + t\), read the point from the constants, \((5, 0, -1)\) (the \(y\)-equation has no constant, so \(y_0 = 0\)), and the direction from the coefficients of \(t\), \((-2, 3, 1)\). So \(\vec r = (5, 0, -1) + t(-2, 3, 1),\ t \in \mathbb{R}\).</p>

<h3 data-tier="essential">Symmetric equations in R³</h3>
<p>The parameter is only a helper, so you can eliminate it. Solve each parametric equation for \(t\):</p>
<div class="eq">\[ t = \frac{x - x_0}{a}, \qquad t = \frac{y - y_0}{b}, \qquad t = \frac{z - z_0}{c} \]</div>
<p>All three expressions equal the same \(t\), so they equal each other:</p>
<div class="callout key"><p class="callout-title">Symmetric equations of a line in R³</p>
<div class="eq">\[ \frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c} \]</div>
<p>for \(\vec m = (a, b, c)\), where \(a, b, c \neq 0\).</p></div>
<p>Three things to notice:</p>
<ul>
<li><strong>The restriction \(a, b, c \neq 0\).</strong> Each step divided by a component of \(\vec m\). If a component is zero you cannot divide by it; the section on zero components below shows what to write instead.</li>
<li><strong>The numerators hold the point, with a minus sign.</strong> \(x - x_0\) means the point's coordinate is the number being subtracted. So \(\frac{x + 2}{3}\) means \(\frac{x - (-2)}{3}\): the point has \(x_0 = -2\).</li>
<li><strong>The denominators are the direction vector</strong>, but only after every numerator is in the form "variable minus number". Rewrite first, then read.</li>
</ul>
<p>"Symmetric equations" is plural for a reason: the chain contains two independent equations (for example, first fraction = second fraction, and second fraction = third fraction). Keep that in mind for the next section.</p>
<div class="callout warn"><p class="callout-title">Awkward forms: rewrite before you read</p>
<ul>
<li>\(-x\) means \(\frac{x - 0}{-1}\): the point has \(x_0 = 0\) and the direction has \(a = -1\). (Worksheet 2c.)</li>
<li>\(\frac{2 - y}{4} = \frac{-(y - 2)}{4} = \frac{y - 2}{-4}\): \(y_0 = 2\) and \(b = -4\), not \(+4\).</li>
<li>\(z + 5\) on its own is \(\frac{z - (-5)}{1}\): \(z_0 = -5\) and \(c = 1\).</li>
<li>\(\frac{z}{4}\) is \(\frac{z - 0}{4}\): \(z_0 = 0\), \(c = 4\).</li>
</ul></div>
<details class="check"><summary>Write symmetric equations for \(\vec r = (-2, 0, 5) + t(3, -1, 2),\ t \in \mathbb{R}\).</summary><div class="ans">
<p>Every component of \(\vec m\) is nonzero, so symmetric equations exist. Subtract each coordinate of the point in the numerator and put the matching direction component underneath: \(\frac{x + 2}{3} = \frac{y - 0}{-1} = \frac{z - 5}{2}\), which tidies to \(\frac{x + 2}{3} = -y = \frac{z - 5}{2}\).</p></div></details>

<h3 data-tier="essential">Why a line in R³ has no Cartesian equation</h3>
<div class="callout teacher"><p class="callout-title">From the notes</p>
<p>A line in R³ does not have a single unique <strong>normal vector</strong>. Therefore, a line in R³ does not have a <strong>Cartesian</strong> equation.</p></div>
<p>Recall where the Cartesian equation came from in lesson 3.2. In R², a line has exactly one perpendicular direction (up to scaling): if \(\vec m = (a, b)\), a normal is \(\vec n = (b, -a)\), and every other normal is a multiple of it. The equation \(Ax + By + C = 0\) is built from that one normal \(\vec n = (A, B)\), which is why it singles out one line.</p>
<p>In R³ there is room for far more perpendicular directions. Picture the line as an axle: every spoke of a wheel mounted on it is perpendicular to the axle, and the spokes point in infinitely many different directions, filling a whole plane. For example, if \(\vec m = (1, 3, -8)\), then \((3, -1, 0)\), \((8, 0, 1)\) and \((0, 8, 3)\) are all perpendicular to it (each dot product with \(\vec m\) is \(0\): \(3 - 3 + 0\), \(8 + 0 - 8\), \(0 + 24 - 24\)), yet none is a multiple of another. No single normal vector describes the line, so no single "normal-vector" equation can capture it.</p>
<figure class="diagram"><svg viewBox="0 0 600 290" role="img" aria-labelledby="d33-normals"><title id="d33-normals">Left: in R², a line has one normal direction. Right: in R³, a line has infinitely many normal directions, all lying in a plane perpendicular to the line, like spokes around an axle</title>
<text class="t-ink" x="140" y="30" font-size="15" text-anchor="middle">In R²</text>
<line class="s-ink" x1="40" y1="215" x2="250" y2="95" stroke-width="2"/>
<line class="s-amber" x1="145" y1="155" x2="113" y2="99" stroke-width="2"/>
<polygon class="f-amber" points="110.3,94.2 119.2,100.7 111.4,105.1"/>
<polyline class="s-mute" points="153.7,150 148.7,141.4 140,146.3"/>
<circle class="f-ink" cx="145" cy="155" r="3.5"/>
<text class="t-amber" x="96" y="92" font-size="16" font-style="italic">n</text>
<text class="t-mute" x="140" y="275" font-size="13" text-anchor="middle">one normal direction, n = (A, B)</text>
<text class="t-ink" x="450" y="30" font-size="15" text-anchor="middle">In R³</text>
<ellipse class="s-mute dash" cx="450" cy="140" rx="95" ry="26"/>
<line class="s-ink" x1="450" y1="246" x2="450" y2="48" stroke-width="2"/>
<polygon class="f-ink" points="450,40 445.5,51 454.5,51"/>
<polygon class="f-ink" points="450,254 445.5,243 454.5,243"/>
<line class="s-amber" x1="450" y1="140" x2="538" y2="140" stroke-width="2"/>
<polygon class="f-amber" points="545,140 535,135.5 535,144.5"/>
<line class="s-amber" x1="450" y1="140" x2="491" y2="159.4" stroke-width="2"/>
<polygon class="f-amber" points="497.5,162.5 486.6,162.3 490.4,154.1"/>
<line class="s-amber" x1="450" y1="140" x2="395.5" y2="157.7" stroke-width="2"/>
<polygon class="f-amber" points="388.9,159.9 397,152.5 399.8,161.1"/>
<line class="s-amber" x1="450" y1="140" x2="367.7" y2="131.8" stroke-width="2"/>
<polygon class="f-amber" points="360.7,131.1 371.1,127.6 370.2,136.6"/>
<line class="s-amber" x1="450" y1="140" x2="477" y2="119.8" stroke-width="2"/>
<polygon class="f-amber" points="482.5,115.6 477.2,125.2 471.8,118"/>
<circle class="f-ink" cx="450" cy="140" r="3.5"/>
<line class="s-blue" x1="472" y1="228" x2="472" y2="182" stroke-width="2"/>
<polygon class="f-blue" points="472,172 467.5,183 476.5,183"/>
<text class="t-blue" x="482" y="212" font-size="16" font-style="italic">m</text>
<text class="t-amber" x="551" y="136" font-size="14" font-style="italic">n₁</text>
<text class="t-amber" x="354" y="126" font-size="14" font-style="italic" text-anchor="end">n₂</text>
<text class="t-mute" x="450" y="275" font-size="13" text-anchor="middle">infinitely many normal directions, all ⊥ m</text>
</svg><figcaption>In R² the normal to a line is unique up to scaling, so it can define the line. In R³ every vector in a whole plane of directions is perpendicular to the line, so no single normal pins it down.</figcaption></figure>
<p>What happens if you write the look-alike \(Ax + By + Cz + D = 0\) anyway? It is a perfectly good equation, but its solutions form a <em>plane</em>, not a line (that is lesson 3.7). One linear equation in three unknowns leaves two coordinates free to vary, which is a two-dimensional surface. To cut space down to a line you need <em>two</em> such equations, and that is exactly what the symmetric equations provide.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Form</th><th>Line in R²</th><th>Line in R³</th></tr></thead><tbody>
<tr><th>Vector</th><td>\(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\) (2 components)</td><td>\(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\) (3 components)</td></tr>
<tr><th>Parametric</th><td>2 equations: \(x = x_0 + ta,\ y = y_0 + tb\)</td><td>3 equations: add \(z = z_0 + tc\)</td></tr>
<tr><th>Symmetric</th><td>\(\frac{x - x_0}{a} = \frac{y - y_0}{b}\)</td><td>\(\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}\)</td></tr>
<tr><th>Cartesian</th><td>\(Ax + By + C = 0\), \(\vec n = (A, B)\)</td><td>does not exist (\(Ax + By + Cz + D = 0\) is a plane)</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Example 1: all three forms from two points</h3>
<div class="example"><p class="example-title">Example 1 · Determine the vector, parametric and symmetric equations of a line passing through \(P(1, -4, 3)\) and \(Q(2, -1, -5)\)</p>
<ol class="work">
<li>Every form needs a direction vector, and you are given two points, not a direction. The vector from one point to the other lies along the line, so use it: \(\vec m = \overrightarrow{PQ} = (2 - 1,\ -1 - (-4),\ -5 - 3) = (1, 3, -8)\).</li>
<li><strong>Vector.</strong> Use \(P\) as the known point (either point is on the line, so either works): \(\vec r_1 = (1, -4, 3) + t(1, 3, -8),\ t \in \mathbb{R}\).</li>
<li>The teacher also wrote two other correct versions, to show the answer is not unique. Any nonzero multiple of \(\vec m\) points the same way: \(\vec r_2 = (1, -4, 3) + s(2, 6, -16),\ s \in \mathbb{R}\). Any point on the line can be the starting point, for example \(Q\): \(\vec r_3 = (2, -1, -5) + k(1, 3, -8),\ k \in \mathbb{R}\).</li>
<li><strong>Parametric.</strong> Match components of \(\vec r_1\), because the vector equation is three component equations in one:
\[ \left.\begin{aligned} x &= 1 + t \\ y &= -4 + 3t \\ z &= 3 - 8t \end{aligned}\right\}\ t \in \mathbb{R} \]</li>
<li><strong>Symmetric.</strong> All three components of \(\vec m\) are nonzero, so you are allowed to divide by them. Solve each parametric equation for \(t\) and set the results equal, since they all equal the same \(t\):
\[ \frac{x - 1}{1} = \frac{y + 4}{3} = \frac{z - 3}{-8} \]</li>
<li>Tidy up: dividing by \(1\) changes nothing, and a negative denominator can be moved to the numerator: \(x - 1 = \frac{y + 4}{3} = \frac{-(z - 3)}{8}\).</li>
</ol>
<p class="answer">\(\vec r = (1, -4, 3) + t(1, 3, -8),\ t \in \mathbb{R}\); \(\ x = 1 + t,\ y = -4 + 3t,\ z = 3 - 8t\); \(\ x - 1 = \frac{y + 4}{3} = \frac{-(z - 3)}{8}\)</p></div>
<p>Quick check: \(t = 1\) in the parametric equations gives \((2, -1, -5)\), which is \(Q\). The line really does pass through both points.</p>

<h3 data-tier="essential">Moving between the forms</h3>
<p>Most questions in this lesson come down to two skills: pulling a point and a direction out of whatever form you are given, and rewriting a line in another form. The table collects every route.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>You have</th><th>You want</th><th>How</th></tr></thead><tbody>
<tr><th>Two points \(P, Q\)</th><td>any form</td><td>\(\vec m = \overrightarrow{PQ}\); use \(P\) (or \(Q\)) as the known point</td></tr>
<tr><th>Vector</th><td>parametric</td><td>match components: \(x = x_0 + ta\), and so on</td></tr>
<tr><th>Parametric</th><td>vector</td><td>constants form \(\vec r_0\); coefficients of \(t\) form \(\vec m\)</td></tr>
<tr><th>Parametric</th><td>symmetric</td><td>solve each equation for \(t\), set equal (needs \(a, b, c \neq 0\))</td></tr>
<tr><th>Symmetric</th><td>parametric</td><td>set each fraction equal to \(t\), solve for \(x, y, z\)</td></tr>
<tr><th>Any form</th><td>a point on the line</td><td>choose any \(t\) (\(t = 0\) and \(t = 1\) are easiest)</td></tr>
<tr><th>Any form</th><td>a parallel line</td><td>keep \(\vec m\), change the point</td></tr>
</tbody></table></div>
<div class="example"><p class="example-title">Example · Find a point and a direction vector for \(\frac{x + 3}{2} = \frac{1 - y}{5} = z\), then write parametric equations</p>
<ol class="work">
<li>The denominators only give the direction once every numerator reads "variable minus number", so rewrite each part first. \(\frac{x + 3}{2} = \frac{x - (-3)}{2}\); \(\frac{1 - y}{5} = \frac{-(y - 1)}{5} = \frac{y - 1}{-5}\); \(z = \frac{z - 0}{1}\).</li>
<li>Read the point from the numbers being subtracted: \((-3, 1, 0)\). Read the direction from the denominators: \(\vec m = (2, -5, 1)\).</li>
<li>Write the parametric equations using that point and direction (equivalently, set each fraction equal to \(t\) and solve): \(x = -3 + 2t,\ y = 1 - 5t,\ z = t,\ t \in \mathbb{R}\).</li>
<li>Check with a point that is not the starting point, because that tests the direction too. \(t = 1\) gives \((-1, -4, 1)\). In the original: \(\frac{-1 + 3}{2} = 1\), \(\frac{1 - (-4)}{5} = 1\), \(z = 1\). All equal, so it is on the line.</li>
</ol>
<p class="answer">Point \((-3, 1, 0)\), \(\vec m = (2, -5, 1)\); \(\ x = -3 + 2t,\ y = 1 - 5t,\ z = t,\ t \in \mathbb{R}\)</p></div>

<h3 data-tier="essential">Checking whether a point is on a line</h3>
<p>A point lies on the line exactly when <em>one</em> value of the parameter produces it. So substitute the point's coordinates into the parametric equations and solve each one for \(t\):</p>
<ul>
<li>If all three equations give the <strong>same</strong> \(t\), the point is on the line.</li>
<li>If any two disagree, it is not. One mismatch is enough to reject it.</li>
<li>If an equation contains no \(t\) (for example \(y = -1\)), it must simply be true for the point; it does not produce a \(t\)-value, so it cannot create a mismatch on its own.</li>
</ul>
<div class="example"><p class="example-title">Example · Do \(A(7, -2, 0)\) and \(B(5, 0, 2)\) lie on \(\vec r = (1, 4, 3) + t(2, -2, -1),\ t \in \mathbb{R}\)?</p>
<ol class="work">
<li>Write the parametric equations, because they let you test one coordinate at a time: \(x = 1 + 2t,\ y = 4 - 2t,\ z = 3 - t\).</li>
<li>Test \(A\): \(7 = 1 + 2t \Rightarrow t = 3\); \(-2 = 4 - 2t \Rightarrow t = 3\); \(0 = 3 - t \Rightarrow t = 3\). One value of \(t\) works in all three, so \(A\) is on the line.</li>
<li>Test \(B\): \(5 = 1 + 2t \Rightarrow t = 2\); \(0 = 4 - 2t \Rightarrow t = 2\); \(2 = 3 - t \Rightarrow t = 1\). The \(z\)-equation disagrees, so no single \(t\) produces \(B\).</li>
</ol>
<p class="answer">\(A(7, -2, 0)\) is on the line (\(t = 3\)); \(B(5, 0, 2)\) is not.</p></div>
<p>Notice that \(B\) passed two of the three tests. That is why you must always check all three coordinates: in R³ a point can agree with the line in \(x\) and \(y\) and still be above or below it.</p>
<p>A related question gives a point with unknown coordinates, such as "\((a, -6, b)\) is on the line; find \(a\) and \(b\)." The point is on the line, so there is a \(t\) that satisfies all components. Use the coordinate you know to find that \(t\), then substitute it into the others. Here \(-6 = 4 - 2t\) gives \(t = 5\), so \(a = 1 + 2(5) = 11\) and \(b = 3 - 5 = -2\).</p>

<h3 data-tier="essential">Comparing two lines: equivalent, parallel, perpendicular</h3>
<p>To classify a pair of lines, look at the direction vectors first, and test a point only if you need to. The teacher's definitions:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Relationship</th><th>Test</th></tr></thead><tbody>
<tr><th>Parallel</th><td>\(\vec m_1 \parallel \vec m_2\): \(\vec m_1 = k\vec m_2\) for one scalar \(k\) that works in every component</td></tr>
<tr><th>Equivalent (coincident, the same line)</th><td>\(\vec m_1 \parallel \vec m_2\) <strong>and</strong> the lines share one point</td></tr>
<tr><th>Perpendicular</th><td>\(\vec m_1 \perp \vec m_2\): \(\vec m_1 \cdot \vec m_2 = 0\)</td></tr>
<tr><th>Neither</th><td>not parallel and not perpendicular</td></tr>
</tbody></table></div>
<p>Why is one shared point enough for "equivalent"? Two lines with the same direction either never meet or lie exactly on top of each other. If they also share a single point, they start from a common place and head the same way, so they share every point. (This is proved in Apply &amp; extend.)</p>
<p>So the order of work is: (1) check parallel by solving for \(k\); (2) if parallel, test a point from one line in the other to decide between "equivalent" and "parallel and distinct"; (3) if not parallel, check the dot product for perpendicular.</p>
<div class="example"><p class="example-title">Example 2 · Classify the lines \(\vec r_1 = (1, -4, 3) + t(1, 3, -8),\ t \in \mathbb{R}\) and \(\vec r_2 = (2, -1, -5) + s(-2, -6, 16),\ s \in \mathbb{R}\) as equivalent, parallel, perpendicular, or none of the above</p>
<ol class="work">
<li>Compare directions first, because both "parallel" and "equivalent" depend on them: \(\vec m_1 = (1, 3, -8)\), \(\vec m_2 = (-2, -6, 16)\).</li>
<li>Check parallel by trying to solve \((1, 3, -8) = k(-2, -6, 16)\) one component at a time: \(1 = -2k \Rightarrow k = -\tfrac12\); \(3 = -6k \Rightarrow k = -\tfrac12\); \(-8 = 16k \Rightarrow k = -\tfrac12\). The same \(k\) works in every component, so \(\vec m_1 \parallel \vec m_2\): the lines are parallel.</li>
<li>Parallel lines might be the same line, so check equivalence: is the point \((2, -1, -5)\) from \(\vec r_2\) also on \(L_1\)? Substitute into \(x = 1 + t,\ y = -4 + 3t,\ z = 3 - 8t\): \(2 = 1 + t \Rightarrow t = 1\); \(-1 = -4 + 3t \Rightarrow 3 = 3t \Rightarrow t = 1\); \(-5 = 3 - 8t \Rightarrow -8 = -8t \Rightarrow t = 1\).</li>
<li>The same value \(t = 1\) works in all three, so \((2, -1, -5)\) is on line 1. Parallel and sharing a point means they are the same line.</li>
</ol>
<p class="answer">\(\therefore\ L_1\) is equivalent to \(L_2\) (they are the same line).</p></div>
<p>This is no coincidence: \(L_1\) is the line from Example 1, and \((2, -1, -5)\) is the point \(Q\) from that example.</p>
<div class="callout teacher"><p class="callout-title">Note from class</p>
<p>Check perpendicular with \(\vec m_1 \cdot \vec m_2 = 0\). If the lines are not parallel or perpendicular, call them "neither" for now.</p>
<p>"For now" is a hint. In R² two non-parallel lines always cross. In R³ they might cross, or they might miss each other completely (one passes over the other). Lines like that are called skew lines; see the beyond-the-notes topic. For the same reason, "perpendicular" here describes the <em>directions</em>: two lines in R³ with \(\vec m_1 \cdot \vec m_2 = 0\) need not actually meet.</p></div>
<details class="check"><summary>Classify \(\vec r = (0, 2, 1) + t(1, -1, 2)\) and \(\vec r = (2, 0, 5) + s(-3, 3, -6)\).</summary><div class="ans">
<p>Directions: \((-3, 3, -6) = -3(1, -1, 2)\), so the lines are parallel. Test \((2, 0, 5)\) in the first line: \(2 = 0 + t \Rightarrow t = 2\); \(0 = 2 - t \Rightarrow t = 2\); \(5 = 1 + 2t \Rightarrow t = 2\). Same \(t\), so the point is on both lines: they are equivalent (the same line).</p></div></details>

<h3 data-tier="likely">When a direction component is zero</h3>
<p>The symmetric equations divide by \(a\), \(b\) and \(c\). If one of them is \(0\), that division is impossible, and you need a different way to write the line.</p>
<div class="example"><p class="example-title">Example 3 · Determine the symmetric equations of a line that goes through the point \((3, -1, 2)\) in the direction of \(\vec m = (4, 0, -5)\)</p>
<ol class="work">
<li>Start from the vector equation, because the other forms all come from it: \(\vec r = (3, -1, 2) + t(4, 0, -5),\ t \in \mathbb{R}\).</li>
<li>Write the parametric equations by matching components: \(x = 3 + 4t,\ y = -1,\ z = 2 - 5t\). The \(y\)-equation has no \(t\), because the \(y\)-component of \(\vec m\) is \(0\).</li>
<li>Solve for \(t\) wherever you can: \(t = \frac{x - 3}{4}\) and, from \(z = 2 - 5t\), \(5t = 2 - z\), so \(t = \frac{-(z - 2)}{5}\). The \(y\)-equation cannot be solved for \(t\) at all; it just says \(y = -1\).</li>
<li>Set the two \(t\)-expressions equal (that is the symmetric part) and keep \(y = -1\) as it is (that is the parametric part), because \(y\) never changes regardless of the parameter \(t\).</li>
</ol>
<p class="answer">\(\frac{x - 3}{4} = \frac{-(z - 2)}{5},\quad y = -1\)</p></div>
<p>The teacher calls this a <em>combination</em>: symmetric for the two coordinates that change, parametric for the one that stays fixed. Geometrically, every point on this line has \(y = -1\), so the whole line lies in the plane \(y = -1\), parallel to the \(xz\)-plane.</p>
<p>With <strong>two</strong> zero components, as in worksheet 4c (\(\vec r = (1, 0, 0) + t(0, 0, -1)\)), only one coordinate contains \(t\): \(x = 1,\ y = 0,\ z = -t\). There is not even a single pair of fractions to set equal, so the line has <strong>no symmetric equations</strong>. It is described by \(x = 1,\ y = 0\) with \(z\) free: the vertical line through \((1, 0, 0)\), parallel to the \(z\)-axis.</p>
<div class="callout key"><p class="callout-title">Zero components: what to write</p>
<ul>
<li><strong>One zero component:</strong> a combination of symmetric and parametric, e.g. \(\frac{x - x_0}{a} = \frac{z - z_0}{c},\ y = y_0\).</li>
<li><strong>Two zero components:</strong> no symmetric equations; the two fixed coordinates describe the line, e.g. \(x = x_0,\ y = y_0\).</li>
<li><strong>All three zero:</strong> impossible, since \(\vec 0\) has no direction and cannot be a direction vector.</li>
</ul>
<p>The unit summary sheet puts it as: you can have a combination of parametric and symmetric if any of \(a, b, c = 0\).</p></div>
<details class="check"><summary>Describe the line through \((1, 4, -2)\) with direction \(\vec m = (0, 2, 0)\) without using a parameter.</summary><div class="ans">
<p>Parametric: \(x = 1,\ y = 4 + 2t,\ z = -2\). Two components of \(\vec m\) are zero, so there are no symmetric equations. The line is \(x = 1,\ z = -2\) (with \(y\) free): it runs parallel to the \(y\)-axis.</p></div></details>

<h3 data-tier="extra">Where a line meets the coordinate planes</h3>
<p>A common textbook question asks where a line crosses the three coordinate planes. Each coordinate plane is the set of points where one coordinate is zero: the \(xy\)-plane is \(z = 0\), the \(xz\)-plane is \(y = 0\), and the \(yz\)-plane is \(x = 0\). So set that coordinate to zero in the parametric equations, solve for \(t\), and substitute back.</p>
<div class="example"><p class="example-title">Example · Where does \(\vec r = (2, -1, 6) + t(1, 2, -3)\) meet each coordinate plane?</p>
<ol class="work">
<li>Write the parametric equations so each coordinate can be set separately: \(x = 2 + t,\ y = -1 + 2t,\ z = 6 - 3t\).</li>
<li>\(xy\)-plane: set \(z = 0\): \(6 - 3t = 0 \Rightarrow t = 2\), giving \((4, 3, 0)\).</li>
<li>\(xz\)-plane: set \(y = 0\): \(-1 + 2t = 0 \Rightarrow t = \tfrac12\), giving \(\left(\tfrac52, 0, \tfrac92\right)\).</li>
<li>\(yz\)-plane: set \(x = 0\): \(2 + t = 0 \Rightarrow t = -2\), giving \((0, -5, 12)\).</li>
</ol>
<p class="answer">\((4, 3, 0)\), \(\left(\tfrac52, 0, \tfrac92\right)\) and \((0, -5, 12)\)</p></div>
<p>If a direction component is zero, the line is parallel to the matching coordinate plane, so it either never meets it or lies inside it. Example 3's line has \(y = -1\) everywhere, so it never meets the \(xz\)-plane \(y = 0\).</p>

<h3 data-tier="likely">Common mistakes and how this lesson connects</h3>
<div class="callout warn"><p class="callout-title">Common mistakes</p>
<ul>
<li>Writing a "Cartesian equation" for a line in R³. \(Ax + By + Cz + D = 0\) is a plane.</li>
<li>Reading the point with the wrong sign from symmetric equations: \(\frac{x + 2}{3}\) has \(x_0 = -2\), not \(2\).</li>
<li>Reading the direction before rewriting \((2 - y)\) or \(-x\) into "variable minus number" form.</li>
<li>Writing a zero denominator, such as \(\frac{y + 1}{0}\). Use the combination form instead.</li>
<li>Checking a point in only one or two coordinates. All three must give the same \(t\).</li>
<li>Calling two lines equivalent just because their directions are parallel. You must also test a point.</li>
<li>Finding \(k\) from one component only. The same \(k\) must work in every component. (Zero components match automatically: \((2, 0, 4) = 2(1, 0, 2)\).)</li>
</ul></div>
<p><strong>Looking back.</strong> Lesson 3.1 gave you the vector and parametric structure; this lesson adds a \(z\)-component and the symmetric form. Lesson 3.2's Cartesian equation relied on a unique normal, which is exactly what fails in R³.</p>
<p><strong>Looking ahead.</strong> Lesson 3.4 finds the minimum distance from a point to a line, using the point \(P_0\) and direction \(\vec m\) you now know how to extract from any form. Lessons 3.6 and 3.7 build planes, which need two direction vectors or one normal vector, and finally explain what \(Ax + By + Cz + D = 0\) really describes.</p>
`
});

/* ======================================================================
   WORKSHEET Q&A
   ====================================================================== */
window.QA.push({
  id: "qa-33", lesson: "3.3",
  title: "3.3 Worksheet: Equations of a Line in R³",
  source: "C - Worksheet (questions) and D - Worksheet Solutions (teacher's answers)",
  items: [
    { tier: "essential",
      q: String.raw`<strong>2a.</strong> Find a direction vector for a line parallel to \(\vec r = (7, -9, 3) + t(-4, 2, -5)\).`,
      a: String.raw`<p><strong>Type:</strong> Direction vector of a parallel line · <strong>Plan:</strong> "Parallel" means "same direction", so the new line can simply reuse the direction vector of the given line. Read it from the coefficient of \(t\).</p>
<p>In \(\vec r = \vec r_0 + t\vec m\), the vector multiplying \(t\) is the direction. Parallel lines share it.</p>
<p class="answer">\(\therefore\ \vec m = (-4, 2, -5)\)</p>`,
      note: String.raw`The answer key gives \((4, -2, 5)\). Any nonzero scalar multiple of \((-4, 2, -5)\) is also correct.` },

    { tier: "essential",
      q: String.raw`<strong>2b.</strong> Find a direction vector for a line through \((0, 6, 3)\) and \((7, 4, 6)\).`,
      a: String.raw`<p><strong>Type:</strong> Direction vector from two points · <strong>Plan:</strong> The vector from one point to the other lies along the line, so subtract the coordinates (end minus start).</p>
<div class="eq">\[ \begin{aligned} \vec m &= (7, 4, 6) - (0, 6, 3) \\ &= (7, -2, 3) \end{aligned} \]</div>
<p class="answer">\(\vec m = (7, -2, 3)\)</p>` },

    { tier: "essential",
      q: String.raw`<strong>2c.</strong> Find a direction vector for a line parallel to \(-x = \frac{y - 3}{2} = \frac{z}{4}\).`,
      a: String.raw`<p><strong>Type:</strong> Direction vector from symmetric equations · <strong>Plan:</strong> The denominators of symmetric equations are the direction vector, but only once every part is written as "(variable minus number) over denominator". The \(-x\) part is not in that form yet, so rewrite it first, then read the denominators.</p>
<p>Rewrite \(-x\) as a fraction whose numerator is \(x - 0\): \(-x = \frac{x}{-1}\).</p>
<div class="eq">\[ -x = \frac{y - 3}{2} = \frac{z}{4} \;\Rightarrow\; \frac{x}{-1} = \frac{y - 3}{2} = \frac{z}{4} \]</div>
<p>Now read the denominators. A parallel line uses the same direction.</p>
<p class="answer">\(\therefore\ \vec m = (-1, 2, 4)\)</p>`,
      note: String.raw`A common wrong answer is \((1, 2, 4)\), from treating \(-x\) as if it were \(\frac{x}{1}\).` },

    { tier: "essential",
      q: String.raw`<strong>3a.</strong> Give the coordinates of two points on the line \(\vec r = (1, 1, 2) + t(3, -1, -1)\).`,
      a: String.raw`<p><strong>Type:</strong> Points on a line from a vector equation · <strong>Plan:</strong> Every value of the parameter gives a point on the line, so pick two easy values of \(t\) and compute \(\vec r\).</p>
<div class="eq">\[ \begin{aligned} \text{if } t = 0:&\quad \vec r = (1, 1, 2) \\ \text{if } t = 1:&\quad \vec r = (1 + 3,\ 1 - 1,\ 2 - 1) = (4, 0, 1) \end{aligned} \]</div>
<p class="answer">\((1, 1, 2)\) and \((4, 0, 1)\)</p>`,
      note: String.raw`Answers vary, since any \(t\) works. The answer key lists \((4, 0, 1)\) and \((-5, 3, 4)\), from \(t = 1\) and \(t = -2\).` },

    { tier: "essential",
      q: String.raw`<strong>3b.</strong> Give the coordinates of two points on the line \(x = 4 - 2t,\ y = -2 + 5t,\ z = 5 + 4t\).`,
      a: String.raw`<p><strong>Type:</strong> Points on a line from parametric equations · <strong>Plan:</strong> Substitute two convenient values of \(t\) into all three equations; each value gives one point.</p>
<div class="eq">\[ \begin{aligned} \text{if } t = 0:&\quad x = 4,\ y = -2,\ z = 5 \\ \text{if } t = 1:&\quad x = 4 - 2 = 2,\ y = -2 + 5 = 3,\ z = 5 + 4 = 9 \end{aligned} \]</div>
<p class="answer">\((4, -2, 5)\) and \((2, 3, 9)\)</p>` },

    { tier: "essential",
      q: String.raw`<strong>3c.</strong> Give the coordinates of two points on the line \(\frac{x - 4}{3} = \frac{y + 5}{4} = \frac{z + 1}{-1}\).`,
      a: String.raw`<p><strong>Type:</strong> Points on a line from symmetric equations · <strong>Plan:</strong> Symmetric equations have no parameter to plug in, so convert to parametric form first (set each fraction equal to \(t\) and solve), then choose two values of \(t\).</p>
<p>Set each fraction equal to \(t\): \(\frac{x - 4}{3} = t \Rightarrow x = 4 + 3t\), and the same for \(y\) and \(z\).</p>
<div class="eq">\[ \left.\begin{aligned} x &= 4 + 3t \\ y &= -5 + 4t \\ z &= -1 - t \end{aligned}\right\}\ t \in \mathbb{R} \]</div>
<div class="eq">\[ \begin{aligned} \text{if } t = 0:&\quad (4, -5, -1) \\ \text{if } t = 1:&\quad (4 + 3,\ -5 + 4,\ -1 - 1) = (7, -1, -2) \end{aligned} \]</div>
<p class="answer">\((4, -5, -1)\) and \((7, -1, -2)\)</p>`,
      note: String.raw`Shortcut: the \(t = 0\) point can be read straight from the numerators, \(x - 4,\ y - (-5),\ z - (-1)\), giving \((4, -5, -1)\).` },

    { tier: "essential",
      q: String.raw`<strong>4a.</strong> Find vector, parametric, and, if possible, symmetric equations of the line that passes through \(P_0(2, 4, 6)\) and has direction vector \(\vec d = (-1, -3, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> All three forms from a point and a direction · <strong>Plan:</strong> Substitute the point and direction into each standard form. Symmetric equations are possible only if no component of \(\vec d\) is zero; here none is.</p>
<p><strong>Vector:</strong> use \(\vec r = \vec r_0 + t\vec d\) with \(\vec r_0 = (2, 4, 6)\).</p>
<div class="eq">\[ \vec r = (2, 4, 6) + t(-1, -3, 2),\ t \in \mathbb{R} \]</div>
<p><strong>Parametric:</strong> match the components of the vector equation.</p>
<div class="eq">\[ \left.\begin{aligned} x &= 2 - t \\ y &= 4 - 3t \\ z &= 6 + 2t \end{aligned}\right\}\ t \in \mathbb{R} \]</div>
<p><strong>Symmetric:</strong> solve each parametric equation for \(t\) and set them equal.</p>
<div class="eq">\[ \frac{x - 2}{-1} = \frac{y - 4}{-3} = \frac{z - 6}{2} \]</div>
<p class="answer">\(\vec r = (2, 4, 6) + t(-1, -3, 2),\ t \in \mathbb{R}\); \(\ x = 2 - t,\ y = 4 - 3t,\ z = 6 + 2t\); \(\ \frac{x - 2}{-1} = \frac{y - 4}{-3} = \frac{z - 6}{2}\)</p>`,
      note: String.raw`The answer key uses the opposite direction \((1, 3, -2)\), giving \(\vec r = (2, 4, 6) + t(1, 3, -2)\) and \(\frac{x - 2}{1} = \frac{y - 4}{3} = \frac{z - 6}{-2}\). It is the same line.` },

    { tier: "essential",
      q: String.raw`<strong>4b.</strong> Find vector, parametric, and, if possible, symmetric equations of the line that passes through \(P_0(0, 0, -5)\) and has direction vector \(\vec d = (-1, 4, 1)\).`,
      a: String.raw`<p><strong>Type:</strong> All three forms from a point and a direction · <strong>Plan:</strong> Same method as 4a. All components of \(\vec d\) are nonzero, so symmetric equations exist. Watch the signs when the point's coordinates are \(0\) or negative.</p>
<p><strong>Vector:</strong></p>
<div class="eq">\[ \vec r = (0, 0, -5) + t(-1, 4, 1),\ t \in \mathbb{R} \]</div>
<p><strong>Parametric:</strong> the zero coordinates drop out of \(x\) and \(y\).</p>
<div class="eq">\[ \left.\begin{aligned} x &= -t \\ y &= 4t \\ z &= -5 + t \end{aligned}\right\}\ t \in \mathbb{R} \]</div>
<p><strong>Symmetric:</strong> \(x - 0 = x\), \(y - 0 = y\), and \(z - (-5) = z + 5\).</p>
<div class="eq">\[ \frac{x}{-1} = \frac{y}{4} = \frac{z + 5}{1} \]</div>
<p class="answer">\(\vec r = (0, 0, -5) + t(-1, 4, 1),\ t \in \mathbb{R}\); \(\ x = -t,\ y = 4t,\ z = -5 + t\); \(\ \frac{x}{-1} = \frac{y}{4} = \frac{z + 5}{1}\)</p>`,
      note: String.raw`The answer key uses \((1, -4, -1)\): \(x = t,\ y = -4t,\ z = -5 - t\) and \(\frac{x}{1} = \frac{y}{-4} = \frac{z + 5}{-1}\). Same line, opposite direction vector.` },

    { tier: "likely",
      q: String.raw`<strong>4c.</strong> Find vector, parametric, and, if possible, symmetric equations of the line that passes through \(P_0(1, 0, 0)\) and has direction vector \(\vec d = (0, 0, -1)\).`,
      a: String.raw`<p><strong>Type:</strong> Equations of a line with zero direction components · <strong>Plan:</strong> Vector and parametric forms always exist. Symmetric equations need you to divide by the components of \(\vec d\), and two of them are zero, so check whether any symmetric form is possible.</p>
<p><strong>Vector:</strong></p>
<div class="eq">\[ \vec r = (1, 0, 0) + t(0, 0, -1),\ t \in \mathbb{R} \]</div>
<p><strong>Parametric:</strong></p>
<div class="eq">\[ \left.\begin{aligned} x &= 1 \\ y &= 0 \\ z &= -t \end{aligned}\right\}\ t \in \mathbb{R} \]</div>
<p><strong>Symmetric:</strong> only the \(z\)-equation contains \(t\). You cannot divide by the zero components, and with only one equation that can be solved for \(t\) there is not even a single pair of fractions to set equal.</p>
<p class="answer">\(\vec r = (1, 0, 0) + t(0, 0, -1),\ t \in \mathbb{R}\); \(\ x = 1,\ y = 0,\ z = -t\); no symmetric equations (not a single pair).</p>`,
      note: String.raw`Geometrically the line is \(x = 1,\ y = 0\) with \(z\) free: the vertical line through \((1, 0, 0)\), parallel to the \(z\)-axis.` },

    { tier: "essential",
      q: String.raw`<strong>6a.</strong> Which of the following points lies on the line \(x = 2t,\ y = 3 + t,\ z = 1 + t\)? \(\ P(2, 4, 2)\quad Q(-2, 2, 1)\quad R(4, 5, 2)\quad S(6, 6, 2)\)`,
      a: String.raw`<p><strong>Type:</strong> Is a point on a line? · <strong>Plan:</strong> A point is on the line only if one single value of \(t\) produces all three of its coordinates. Substitute each point into all three equations, solve each for \(t\), and compare.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Point</th><th>\(x = 2t\)</th><th>\(y = 3 + t\)</th><th>\(z = 1 + t\)</th><th>Result</th></tr></thead><tbody>
<tr><th>\(P(2, 4, 2)\)</th><td>\(2 = 2t,\ t = 1\)</td><td>\(4 = 3 + t,\ t = 1\)</td><td>\(2 = 1 + t,\ t = 1\)</td><td>same \(t\): on the line ✓</td></tr>
<tr><th>\(Q(-2, 2, 1)\)</th><td>\(-2 = 2t,\ t = -1\)</td><td>\(2 = 3 + t,\ t = -1\)</td><td>\(1 = 1 + t,\ t = 0\)</td><td>not on the line ✗</td></tr>
<tr><th>\(R(4, 5, 2)\)</th><td>\(4 = 2t,\ t = 2\)</td><td>\(5 = 3 + t,\ t = 2\)</td><td>\(2 = 1 + t,\ t = 1\)</td><td>not on the line ✗</td></tr>
<tr><th>\(S(6, 6, 2)\)</th><td>\(6 = 2t,\ t = 3\)</td><td>\(6 = 3 + t,\ t = 3\)</td><td>\(2 = 1 + t,\ t = 1\)</td><td>not on the line ✗</td></tr>
</tbody></table></div>
<p class="answer">\(\therefore\) only \(P(2, 4, 2)\) is on the line.</p>`,
      note: String.raw`\(Q\), \(R\) and \(S\) each pass the \(x\) and \(y\) tests. If you only checked two coordinates you would wrongly accept all four points; the \(z\)-check is what rules them out.` },

    { tier: "essential",
      q: String.raw`<strong>6b.</strong> If the point \((a, b, -3)\) lies on the line \(x = 2t,\ y = 3 + t,\ z = 1 + t\), find the values of \(a\) and \(b\).`,
      a: String.raw`<p><strong>Type:</strong> Unknown coordinates of a point on a line · <strong>Plan:</strong> Since the point lies on the line, there exists a \(t\) that satisfies all components. The \(z\)-coordinate is the only one you know, so use it to find \(t\), then substitute that \(t\) to get \(a\) and \(b\).</p>
<p>Use the known coordinate to find the parameter:</p>
<div class="eq">\[ -3 = 1 + t \;\Rightarrow\; t = -4 \]</div>
<p>The same \(t\) must produce the other coordinates:</p>
<div class="eq">\[ \begin{aligned} a &= 2t = 2(-4) = -8 \\ b &= 3 + t = 3 + (-4) = -1 \end{aligned} \]</div>
<p class="answer">\(a = -8,\ b = -1\)</p>` },

    { tier: "likely",
      q: String.raw`<strong>7.</strong> Find parametric equations for the line that passes through the point \((0, -1, 1)\) and the midpoint of the line segment from \((2, 3, -2)\) to \((4, -1, 5)\).`,
      a: String.raw`<p><strong>Type:</strong> Line through two points (one is a midpoint) · <strong>Plan:</strong> You have one point but need a second to get a direction. Find the midpoint \(M\) by averaging coordinates, then use \(\vec m = \overrightarrow{P_0M}\).</p>
<p>Let \(P_0(0, -1, 1)\). The midpoint is the average of the endpoints:</p>
<div class="eq">\[ \begin{aligned} M &= \tfrac12\left[(2, 3, -2) + (4, -1, 5)\right] \\ &= \tfrac12(6, 2, 3) \\ &= (3, 1, 1.5) \end{aligned} \]</div>
<p>The direction vector joins the two points on the line:</p>
<div class="eq">\[ \begin{aligned} \vec m &= (3, 1, 1.5) - (0, -1, 1) \\ &= (3, 2, 0.5) \end{aligned} \]</div>
<p>Write parametric equations with \(P_0\) as the known point:</p>
<div class="eq">\[ \left.\begin{aligned} x &= 3t \\ y &= -1 + 2t \\ z &= 1 + 0.5t \end{aligned}\right\}\ t \in \mathbb{R} \]</div>
<p>Or, doubling the direction to clear the decimal, \(\vec m_2 = (6, 4, 1)\): \(x = 6s,\ y = -1 + 4s,\ z = 1 + s,\ s \in \mathbb{R}\).</p>
<p class="answer">\(x = 3t,\ y = -1 + 2t,\ z = 1 + 0.5t,\ t \in \mathbb{R}\) \(\ \) (or \(x = 6s,\ y = -1 + 4s,\ z = 1 + s,\ s \in \mathbb{R}\))</p>`,
      note: String.raw`The answer key gives the \((6, 4, 1)\) version. Both describe the same line.` },

    { tier: "likely",
      q: String.raw`<strong>8.</strong> Find symmetric equations for the line through the origin that is parallel to the line through the points \((4, 3, 1)\) and \((-2, -4, 3)\).`,
      a: String.raw`<p><strong>Type:</strong> Symmetric equations of a parallel line · <strong>Plan:</strong> The known point is the origin. "Parallel" means the new line uses the direction of the other line, which you get by subtracting its two points.</p>
<p>Let \(P_0(0, 0, 0)\). Parallel to the line through \((4, 3, 1)\) and \((-2, -4, 3)\), so</p>
<div class="eq">\[ \begin{aligned} \vec m &= (4, 3, 1) - (-2, -4, 3) \\ &= (6, 7, -2) \end{aligned} \]</div>
<p>No component is zero, so symmetric equations exist:</p>
<div class="eq">\[ \frac{x - 0}{6} = \frac{y - 0}{7} = \frac{z - 0}{-2} \]</div>
<p>Simplified form:</p>
<p class="answer">\(\frac{x}{6} = \frac{y}{7} = \frac{-z}{2}\)</p>` },

    { tier: "essential",
      q: String.raw`<strong>9a.</strong> Determine whether the pair of equations represent the same line, parallel lines, or neither of these: \(\vec r = (1, 0, 3) + s(3, -6, 3)\) and \(\vec r = (2, -2, 5) + t(2, -4, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Classifying two lines (same, parallel, neither) · <strong>Plan:</strong> Compare the direction vectors first. If they are scalar multiples, the lines are parallel, and then you test one point from the first line in the second to decide between "same line" and "parallel but distinct".</p>
<p><strong>Directions.</strong> Factor out the common scalar to compare them easily:</p>
<div class="eq">\[ \begin{aligned} \vec m_1 &= (3, -6, 3) = 3(1, -2, 1) \\ \vec m_2 &= (2, -4, 2) = 2(1, -2, 1) \end{aligned} \]</div>
<p>Since \(\vec m_1 = \tfrac32\vec m_2\), the directions are collinear: the lines are parallel.</p>
<p><strong>Same line?</strong> Check whether \((1, 0, 3)\), a point on \(\vec r_1\), is on \(\vec r_2\): \(x = 2 + 2t,\ y = -2 - 4t,\ z = 5 + 2t\).</p>
<div class="eq">\[ \begin{aligned} 1 &= 2 + 2t & 0 &= -2 - 4t & 3 &= 5 + 2t \\ -1 &= 2t & 2 &= -4t & -2 &= 2t \\ t &= -\tfrac12 & t &= -\tfrac12 & t &= -1 \end{aligned} \]</div>
<p>The \(t\)-values are different, so \((1, 0, 3)\) is not on \(\vec r_2\): the lines are not coincident.</p>
<p class="answer">\(\therefore\ \vec r_1\) and \(\vec r_2\) are parallel but distinct.</p>` },

    { tier: "essential",
      q: String.raw`<strong>9b.</strong> Determine whether the pair of equations represent the same line, parallel lines, or neither of these: \(\vec r = (2, -1, 4) + s(3, 0, 6)\) and \(\vec r = (-3, 0, 1) + t(2, 0, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Classifying two lines (same, parallel, neither) · <strong>Plan:</strong> Compare directions. If they are not scalar multiples, the lines are not parallel, which also rules out "same line", so no point check is needed.</p>
<div class="eq">\[ \begin{aligned} \vec m_1 &= (3, 0, 6) = 3(1, 0, 2) \\ \vec m_2 &= (2, 0, 2) = 2(1, 0, 1) \end{aligned} \]</div>
<p>\((1, 0, 2)\) and \((1, 0, 1)\) are not multiples of each other (the \(x\)-components need \(k = 1\) but the \(z\)-components need \(k = 2\)). So \(\vec m_1 \neq k\vec m_2\): the lines are not parallel, and therefore cannot be the same line either.</p>
<p class="answer">\(\therefore\) the two lines are neither coincident nor parallel and distinct: neither.</p>`,
      note: String.raw`Going further than the worksheet asks: every point on the first line has \(y = -1\) and every point on the second has \(y = 0\), so these lines never meet. Non-parallel lines that never meet are called skew lines (see the beyond-the-notes topic). They are not perpendicular either: \(\vec m_1 \cdot \vec m_2 = 6 + 0 + 12 = 18 \neq 0\).` },

    { tier: "essential",
      q: String.raw`<strong>9c.</strong> Determine whether the pair of equations represent the same line, parallel lines, or neither of these: \(\vec r = (1, -1, 1) + s(6, 2, 0)\) and \(\vec r = (-5, -3, 1) + t(-9, -3, 0)\).`,
      a: String.raw`<p><strong>Type:</strong> Classifying two lines (same, parallel, neither) · <strong>Plan:</strong> Compare directions; if they are parallel, test a point from the first line in the second. One shared point plus parallel directions means the same line.</p>
<div class="eq">\[ \begin{aligned} \vec m_1 &= (6, 2, 0) = 2(3, 1, 0) \\ \vec m_2 &= (-9, -3, 0) = -3(3, 1, 0) \end{aligned} \]</div>
<p>So \(\vec m_1 = -\tfrac23\vec m_2\): the directions are collinear and the lines are parallel.</p>
<p><strong>Same line?</strong> Check \((1, -1, 1)\) on \(\vec r_2\): \(x = -5 - 9t,\ y = -3 - 3t,\ z = 1\).</p>
<div class="eq">\[ \begin{aligned} 1 &= -5 - 9t & -1 &= -3 - 3t & 1 &= 1 \\ 6 &= -9t & 2 &= -3t & & \checkmark \\ t &= -\tfrac23 & t &= -\tfrac23 & & \end{aligned} \]</div>
<p>The same \(t\)-value works, and the \(z\)-equation is true, so \((1, -1, 1)\) is on \(\vec r_2\).</p>
<p class="answer">\(\therefore\) coincident lines (the same line).</p>`,
      note: String.raw`The \(z\)-equation contains no \(t\) (the direction's \(z\)-component is \(0\)), so it does not produce a \(t\)-value; it only has to be true, and \(1 = 1\) is.` }
  ]
});

/* ======================================================================
   QUIZ
   ====================================================================== */
window.QUIZ.push(
  { id: "q33-01", lesson: "3.3", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`What is a direction vector of the line \(\frac{x + 2}{3} = \frac{y - 1}{-4} = \frac{z}{5}\)?`,
    options: [String.raw`\((-2, 1, 0)\)`, String.raw`\((3, -4, 5)\)`, String.raw`\((3, 4, 5)\)`, String.raw`\((2, -1, 0)\)`],
    answer: 1,
    explain: String.raw`Every numerator is already "variable minus number", so the denominators are the direction: \(\vec m = (3, -4, 5)\). \((-2, 1, 0)\) is the point on the line (from \(x - (-2)\), \(y - 1\), \(z - 0\)), not the direction; \((2, -1, 0)\) is that point with the signs flipped; \((3, 4, 5)\) drops the negative denominator.` },

  { id: "q33-02", lesson: "3.3", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which point lies on the line \(\frac{x + 3}{2} = \frac{4 - y}{5} = z - 1\)?`,
    options: [String.raw`\((3, -4, -1)\)`, String.raw`\((2, -5, 1)\)`, String.raw`\((-3, 4, 1)\)`, String.raw`\((-3, -4, 1)\)`],
    answer: 2,
    explain: String.raw`Rewrite every part as "variable minus number": \(\frac{x - (-3)}{2} = \frac{y - 4}{-5} = \frac{z - 1}{1}\). The point is \((-3, 4, 1)\); substituting it makes every fraction \(0\). \((3, -4, -1)\) flips every sign; \((2, -5, 1)\) is the direction vector; \((-3, -4, 1)\) reads \(4 - y\) as if it were \(y + 4\).` },

  { id: "q33-03", lesson: "3.3", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`Every line in R³ can be written as a single Cartesian equation of the form \(Ax + By + Cz + D = 0\).`,
    answer: false,
    explain: String.raw`False. A line in R³ has no single unique normal vector, so it has no Cartesian equation. An equation \(Ax + By + Cz + D = 0\) leaves two coordinates free, so its solutions form a plane (lesson 3.7). A line needs two such equations, which is what the symmetric equations provide.` },

  { id: "q33-04", lesson: "3.3", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`Why does a line in R³ not have a Cartesian equation?`,
    options: [
      String.raw`It has no single unique normal vector: infinitely many directions are perpendicular to it.`,
      String.raw`It has no direction vector.`,
      String.raw`Its parametric equations cannot be solved for \(t\).`,
      String.raw`Cartesian equations only exist for lines through the origin.`],
    answer: 0,
    explain: String.raw`The Cartesian equation is built from a normal vector. In R² a line has one normal direction, but in R³ every vector in a whole plane of directions is perpendicular to the line, so no single normal describes it. Every line has a direction vector; parametric equations can be solved for \(t\) (that is how symmetric equations are made); and the origin has nothing to do with it.` },

  { id: "q33-05", lesson: "3.3", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which are parametric equations of \(\vec r = (2, -1, 0) + t(-3, 0, 4),\ t \in \mathbb{R}\)?`,
    options: [
      String.raw`\(x = -3 + 2t,\ y = -t,\ z = 4\)`,
      String.raw`\(x = 2 - 3t,\ y = -1 + t,\ z = 4t\)`,
      String.raw`\(x = 2 + 3t,\ y = -1,\ z = 4t\)`,
      String.raw`\(x = 2 - 3t,\ y = -1,\ z = 4t\)`],
    answer: 3,
    explain: String.raw`Match components: \(x = 2 + t(-3) = 2 - 3t\), \(y = -1 + t(0) = -1\), \(z = 0 + 4t = 4t\). The first option swaps the point and the direction; the second treats the \(0\) as a \(1\); the third drops the minus sign on \(-3\).` },

  { id: "q33-06", lesson: "3.3", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which point lies on the line \(x = 1 + 2t,\ y = -3 + t,\ z = 4 - t\)?`,
    options: [String.raw`\((3, -2, 5)\)`, String.raw`\((-1, -4, 3)\)`, String.raw`\((5, -1, 2)\)`, String.raw`\((7, 0, 0)\)`],
    answer: 2,
    explain: String.raw`For \((5, -1, 2)\): \(5 = 1 + 2t\) gives \(t = 2\), \(-1 = -3 + t\) gives \(t = 2\), \(2 = 4 - t\) gives \(t = 2\). Same \(t\), so it is on the line. Each other option matches in \(x\) and \(y\) but fails in \(z\): \((3, -2, 5)\) needs \(t = 1\) then \(t = -1\); \((-1, -4, 3)\) needs \(t = -1\) then \(t = 1\); \((7, 0, 0)\) needs \(t = 3\) then \(t = 4\).` },

  { id: "q33-07", lesson: "3.3", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Classify the lines \(\vec r_1 = (1, 2, 3) + t(2, -1, 4)\) and \(\vec r_2 = (5, 0, 11) + s(-4, 2, -8)\).`,
    options: [String.raw`Equivalent (the same line)`, String.raw`Parallel and distinct`, String.raw`Perpendicular`, String.raw`Neither`],
    answer: 0,
    explain: String.raw`\((-4, 2, -8) = -2(2, -1, 4)\), so the lines are parallel. Test \((5, 0, 11)\) in \(\vec r_1\): \(5 = 1 + 2t\), \(0 = 2 - t\), \(11 = 3 + 4t\) all give \(t = 2\), so they share a point and are the same line. Stopping at "parallel" misses the point check; the dot product is \(-8 - 2 - 32 = -42 \neq 0\), so they are not perpendicular.` },

  { id: "q33-08", lesson: "3.3", type: "tf", kind: "applied", tier: "likely",
    q: String.raw`The lines \(\vec r_1 = (0, 1, -2) + t(1, -3, 2)\) and \(\vec r_2 = (1, -2, 1) + s(-2, 6, -4)\) are the same line.`,
    answer: false,
    explain: String.raw`False. The directions are parallel, since \((-2, 6, -4) = -2(1, -3, 2)\). But test \((1, -2, 1)\) in \(\vec r_1\): \(1 = t\) gives \(t = 1\), \(-2 = 1 - 3t\) gives \(t = 1\), and \(1 = -2 + 2t\) gives \(t = \tfrac32\). The \(t\)-values disagree, so the point is not on \(\vec r_1\): the lines are parallel and distinct.` },

  { id: "q33-09", lesson: "3.3", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Two lines have direction vectors \(\vec m_1 = (2, 1, -3)\) and \(\vec m_2 = (1, 1, 1)\). Using the classification from class, the lines are:`,
    options: [String.raw`parallel`, String.raw`equivalent`, String.raw`neither`, String.raw`perpendicular`],
    answer: 3,
    explain: String.raw`\(\vec m_1 \cdot \vec m_2 = 2 + 1 - 3 = 0\), so the directions are perpendicular. They are not parallel (no single \(k\) turns \((1, 1, 1)\) into \((2, 1, -3)\)), so they cannot be equivalent either, and "neither" is only for lines that are not parallel and not perpendicular. In R³, "perpendicular" here describes the directions; the lines might not actually meet.` },

  { id: "q33-10", lesson: "3.3", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Which correctly describes the line through \((2, 5, -1)\) with direction \(\vec m = (0, 3, -2)\)?`,
    options: [
      String.raw`\(\frac{x - 2}{0} = \frac{y - 5}{3} = \frac{z + 1}{-2}\)`,
      String.raw`\(\frac{y - 5}{3} = \frac{z + 1}{-2},\ x = 2\)`,
      String.raw`\(\frac{y - 5}{3} = \frac{z + 1}{-2},\ x = 0\)`,
      String.raw`\(\frac{y + 5}{3} = \frac{z - 1}{-2},\ x = 2\)`],
    answer: 1,
    explain: String.raw`The \(x\)-component of \(\vec m\) is \(0\), so the parametric equation is \(x = 2\) (no \(t\)), and you cannot divide by \(0\). Write the combination: symmetric for \(y\) and \(z\), and \(x = 2\). The first option divides by zero; the third uses the direction component \(0\) instead of the point's \(x\)-coordinate; the fourth has the point's signs reversed.` },

  { id: "q33-11", lesson: "3.3", type: "tf", kind: "knowledge", tier: "likely",
    q: String.raw`The line \(\vec r = (1, 0, 0) + t(0, 0, -1),\ t \in \mathbb{R}\) has symmetric equations.`,
    answer: false,
    explain: String.raw`False. Two components of the direction vector are zero, so only the \(z\)-equation contains \(t\). There is not even one pair of fractions to set equal. The line is described by \(x = 1,\ y = 0\) (with \(z\) free): a line parallel to the \(z\)-axis. This is worksheet 4c.` },

  { id: "q33-12", lesson: "3.3", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`For which value of \(t\) does \(\vec r = (3, -1, 2) + t(-2, 4, -1)\) pass through \((-1, 7, 0)\)?`,
    options: [String.raw`\(t = 2\)`, String.raw`\(t = -2\)`, String.raw`\(t = 4\)`, String.raw`No value of \(t\): the point is not on the line`],
    answer: 0,
    explain: String.raw`\(-1 = 3 - 2t\) gives \(t = 2\); \(7 = -1 + 4t\) gives \(t = 2\); \(0 = 2 - t\) gives \(t = 2\). All three agree, so \(t = 2\). \(t = -2\) is a sign slip when solving \(-1 = 3 - 2t\); \(t = 4\) comes from forgetting to divide by \(-2\).` },

  { id: "q33-13", lesson: "3.3", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`The point \((a, b, 0)\) lies on the line \(x = 1 + t,\ y = 2 - 3t,\ z = 4 + 2t\). Find \(a\) and \(b\).`,
    options: [String.raw`\(a = 3,\ b = -4\)`, String.raw`\(a = 1,\ b = 2\)`, String.raw`\(a = -1,\ b = 8\)`, String.raw`\(a = -1,\ b = -4\)`],
    answer: 2,
    explain: String.raw`Use the known coordinate first: \(0 = 4 + 2t\) gives \(t = -2\). Then \(a = 1 + (-2) = -1\) and \(b = 2 - 3(-2) = 8\). \(a = 3, b = -4\) uses \(t = 2\) (sign slip); \(a = 1, b = 2\) uses \(t = 0\); \(b = -4\) comes from \(2 - 6\) instead of \(2 + 6\).` },

  { id: "q33-14", lesson: "3.3", type: "tf", kind: "applied", tier: "essential",
    q: String.raw`\(\vec r_1 = (1, -4, 3) + t(1, 3, -8)\) and \(\vec r_2 = (2, -1, -5) + s(-2, -6, 16)\) describe the same line.`,
    answer: true,
    explain: String.raw`True (this is Example 2). \((1, 3, -8) = -\tfrac12(-2, -6, 16)\), so the directions are parallel, and \((2, -1, -5)\) is on \(\vec r_1\) with \(t = 1\) in all three components. Parallel plus one shared point means equivalent.` },

  { id: "q33-15", lesson: "3.3", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`A line passes through \(A(2, -1, 4)\) and \(B(5, 1, 0)\). Which is <strong>not</strong> a correct vector equation of this line?`,
    options: [
      String.raw`\(\vec r = (2, -1, 4) + t(3, 2, -4)\)`,
      String.raw`\(\vec r = (5, 1, 0) + t(-3, -2, 4)\)`,
      String.raw`\(\vec r = (2, -1, 4) + t(6, 4, -8)\)`,
      String.raw`\(\vec r = (5, 1, 0) + t(3, 2, 4)\)`],
    answer: 3,
    explain: String.raw`\(\overrightarrow{AB} = (3, 2, -4)\). Any point on the line with any nonzero multiple of \((3, 2, -4)\) is correct, so the first three are all valid (the second uses \(-\overrightarrow{AB}\), the third \(2\overrightarrow{AB}\)). \((3, 2, 4)\) is not a multiple of \((3, 2, -4)\): the sign of the \(z\)-component is wrong, so that line points in a different direction.` },

  { id: "q33-16", lesson: "3.3", type: "mcq", kind: "applied", tier: "extra",
    q: String.raw`Where does the line \(\frac{x - 1}{2} = y + 3 = \frac{z - 4}{-2}\) meet the \(xy\)-plane?`,
    options: [String.raw`\((3, -2, 0)\)`, String.raw`\((5, -1, 0)\)`, String.raw`\((1, -3, 0)\)`, String.raw`\((-3, -5, 0)\)`],
    answer: 1,
    explain: String.raw`The \(xy\)-plane is \(z = 0\). Parametric form: \(x = 1 + 2t,\ y = -3 + t,\ z = 4 - 2t\). Then \(4 - 2t = 0\) gives \(t = 2\), so the point is \((5, -1, 0)\). \((-3, -5, 0)\) uses \(t = -2\) (sign slip); \((3, -2, 0)\) uses \(t = 1\); \((1, -3, 0)\) just replaces \(z\) in the known point with \(0\), which is not a point on the line.` },

  { id: "q33-17", lesson: "3.3", type: "tf", kind: "knowledge", tier: "extra",
    q: String.raw`If two lines in R³ have perpendicular direction vectors, the lines must intersect.`,
    answer: false,
    explain: String.raw`False. In R³ two non-parallel lines can miss each other completely (skew lines). For example \(\vec r = (1, 0, 2) + t(2, -1, 1)\) and \(\vec r = (3, 1, 0) + s(1, 1, -1)\) have \(\vec m_1 \cdot \vec m_2 = 0\) but never meet. "Perpendicular" in the class classification refers to the directions only.` },

  { id: "q33-18", lesson: "3.3", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`Which form of the equation of a line exists in R² but not in R³?`,
    options: [String.raw`Vector`, String.raw`Cartesian (scalar)`, String.raw`Parametric`, String.raw`Symmetric`],
    answer: 1,
    explain: String.raw`Vector, parametric and symmetric forms all extend to R³ by adding a \(z\)-part. The Cartesian form needs a unique normal vector, which a line in R³ does not have; \(Ax + By + Cz + D = 0\) is a plane.` },

  { id: "q33-19", lesson: "3.3", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`What is a direction vector of the line \(\frac{x - 4}{3} = -y = \frac{z + 2}{5}\)?`,
    options: [String.raw`\((3, 1, 5)\)`, String.raw`\((4, 0, -2)\)`, String.raw`\((3, -1, 5)\)`, String.raw`\((3, 0, 5)\)`],
    answer: 2,
    explain: String.raw`Rewrite \(-y\) as \(\frac{y - 0}{-1}\), so the denominators are \(3, -1, 5\): \(\vec m = (3, -1, 5)\). \((3, 1, 5)\) treats \(-y\) as \(\frac{y}{1}\); \((4, 0, -2)\) is the point on the line; \((3, 0, 5)\) confuses the point's \(y\)-coordinate with the direction.` }
);

/* ======================================================================
   APPLY & EXTEND
   ====================================================================== */
window.EXT.push(
  { id: "x33-01", lesson: "3.3", level: "apply", tier: "likely",
    title: "A drone's straight-line climb", marks: 10,
    prompt: String.raw`<p>A delivery drone lifts off from a charging pad at \(A(2, -1, 0)\) and flies in a straight line at constant velocity. Four seconds later it passes \(B(10, 5, 12)\). Coordinates are in metres and the ground is the plane \(z = 0\).</p>
<ol type="a">
<li>Write a vector equation of the drone's path in which the parameter \(t\) is the time in seconds (so \(t = 0\) at \(A\) and \(t = 4\) at \(B\)).</li>
<li>Write parametric and symmetric equations of the path.</li>
<li>Does the drone pass through \(C(16, 9.5, 21)\)? If so, when?</li>
<li>When and where does the drone reach an altitude of 30 m?</li>
<li>A second drone flies along \(\vec r = (0, 4, 6) + s(-4, -3, -6)\). Show that the two paths are parallel, and decide whether they are the same path.</li>
</ol>`,
    hints: [
      String.raw`If \(t\) is time, \(\vec m\) must be the displacement in one second: \(\overrightarrow{AB}\) divided by 4.`,
      String.raw`Altitude is the \(z\)-coordinate. For (e), compare direction vectors, then test one point.`
    ],
    answer: String.raw`<p><strong>a.</strong> In 4 s the drone moves \(\overrightarrow{AB} = (8, 6, 12)\), so in one second it moves \(\vec m = \tfrac14(8, 6, 12) = (2, 1.5, 3)\). Starting at \(A\) when \(t = 0\):</p>
<div class="eq">\[ \vec r = (2, -1, 0) + t(2, 1.5, 3),\quad t \ge 0 \]</div>
<p>(As a line, \(t \in \mathbb{R}\); the flight itself is the part with \(t \ge 0\).)</p>
<p><strong>b.</strong> Parametric: \(x = 2 + 2t,\ y = -1 + 1.5t,\ z = 3t\). Symmetric: \(\frac{x - 2}{2} = \frac{y + 1}{1.5} = \frac{z}{3}\), or with the doubled direction \((4, 3, 6)\), \(\frac{x - 2}{4} = \frac{y + 1}{3} = \frac{z}{6}\). (The symmetric form contains no \(t\), so scaling the direction does not change it; only the parametric form "knows" the time.)</p>
<p><strong>c.</strong> \(16 = 2 + 2t \Rightarrow t = 7\); \(9.5 = -1 + 1.5t \Rightarrow t = 7\); \(21 = 3t \Rightarrow t = 7\). Same \(t\): yes, the drone passes through \(C\) after 7 s.</p>
<p><strong>d.</strong> \(z = 30 \Rightarrow 3t = 30 \Rightarrow t = 10\). Then \(x = 22,\ y = -1 + 15 = 14\). The drone is at \((22, 14, 30)\) after 10 s.</p>
<p><strong>e.</strong> \((-4, -3, -6) = -2(2, 1.5, 3)\), so the paths are parallel. Test \((0, 4, 6)\) on the first path: \(0 = 2 + 2t \Rightarrow t = -1\), but \(4 = -1 + 1.5t \Rightarrow t = \tfrac{10}{3}\). The \(t\)-values disagree, so the point is not on the first path.</p>
<p class="answer">The paths are parallel and distinct, so the drones can never meet.</p>` },

  { id: "x33-02", lesson: "3.3", level: "analyze", tier: "likely",
    title: "Where does the laser land", marks: 11,
    prompt: String.raw`<p>A room has one corner at the origin, floor \(z = 0\), and walls in the planes \(x = 0\) and \(y = 0\); the room is the region \(x, y, z \ge 0\) (units in metres). A laser is mounted at \(P(2, 9, 8)\) and aimed through the point \(Q(4, 5, 6)\).</p>
<ol type="a">
<li>Write vector, parametric and symmetric equations of the line of the beam.</li>
<li>Find where this line meets each of the three coordinate planes.</li>
<li>Which surface of the room does the beam actually hit, and where? Explain.</li>
<li>Is a dust particle at \((5, 3, 5)\) in the beam?</li>
<li>The laser is re-aimed to hit the floor at \(F(6, 1, 0)\). Find symmetric equations of the new beam and confirm that it reaches the floor before it reaches a wall.</li>
</ol>`,
    hints: [
      String.raw`The beam leaves \(P\) heading toward \(Q\), so only parameter values \(t \ge 0\) (with \(\vec m = \overrightarrow{PQ}\)) are part of the beam.`,
      String.raw`The surface hit first is the one reached at the smallest positive \(t\).`
    ],
    answer: String.raw`<p><strong>a.</strong> \(\overrightarrow{PQ} = (2, -4, -2) = 2(1, -2, -1)\); use \(\vec m = (1, -2, -1)\).</p>
<div class="eq">\[ \vec r = (2, 9, 8) + t(1, -2, -1),\ t \in \mathbb{R}; \qquad x = 2 + t,\ y = 9 - 2t,\ z = 8 - t; \qquad \frac{x - 2}{1} = \frac{y - 9}{-2} = \frac{z - 8}{-1} \]</div>
<p><strong>b.</strong></p>
<ul>
<li>\(xy\)-plane (\(z = 0\)): \(8 - t = 0 \Rightarrow t = 8\): \((10, -7, 0)\).</li>
<li>\(xz\)-plane (\(y = 0\)): \(9 - 2t = 0 \Rightarrow t = 4.5\): \((6.5, 0, 3.5)\).</li>
<li>\(yz\)-plane (\(x = 0\)): \(2 + t = 0 \Rightarrow t = -2\): \((0, 13, 10)\).</li>
</ul>
<p><strong>c.</strong> The beam is the part of the line with \(t \ge 0\) (from \(P\) toward \(Q\), since \(Q\) is at \(t = 2\)). The wall \(x = 0\) is at \(t = -2\), behind the laser, so it is never hit. Of the other two, \(y = 0\) comes first (\(t = 4.5\) before \(t = 8\)). At \(t = 4.5\) the point \((6.5, 0, 3.5)\) has \(x, z \ge 0\), so it is a real point on the wall. (The floor point \((10, -7, 0)\) has \(y \lt 0\): it is outside the room.)</p>
<p class="answer">The beam hits the wall \(y = 0\) at \((6.5, 0, 3.5)\).</p>
<p><strong>d.</strong> \(5 = 2 + t \Rightarrow t = 3\); \(3 = 9 - 2t \Rightarrow t = 3\); \(5 = 8 - t \Rightarrow t = 3\). Same \(t\), and \(t = 3\) is between \(0\) and \(4.5\), so yes, the particle is in the beam, between the laser and the wall.</p>
<p><strong>e.</strong> \(\overrightarrow{PF} = (4, -8, -8) = 4(1, -2, -2)\). New beam: \(x = 2 + t,\ y = 9 - 2t,\ z = 8 - 2t\); symmetric \(\frac{x - 2}{1} = \frac{y - 9}{-2} = \frac{z - 8}{-2}\). Floor: \(8 - 2t = 0 \Rightarrow t = 4\), giving \((6, 1, 0) = F\). Wall \(y = 0\): \(t = 4.5\), later. Wall \(x = 0\): \(t = -2\), behind. So the floor is reached first, at \(t = 4\).</p>` },

  { id: "x33-03", lesson: "3.3", level: "analyze", tier: "extra",
    title: "Perpendicular pipes that never touch", marks: 10,
    prompt: String.raw`<p>Two straight pipes in a factory follow the lines \(L_1: \vec r = (1, 0, 2) + t(2, -1, 1)\) and \(L_2: \vec r = (3, 1, 0) + s(1, 1, -1)\).</p>
<ol type="a">
<li>Show that the direction vectors are perpendicular.</li>
<li>Determine whether the pipes actually meet.</li>
<li>Explain why your answers to (a) and (b) do not contradict each other.</li>
<li>An engineer moves the second pipe to \(L_3: \vec r = (3, 1, k) + s(1, 1, -1)\). Find \(k\) so that the pipes meet, and find the meeting point.</li>
</ol>`,
    hints: [
      String.raw`Set the \(x\)'s, \(y\)'s and \(z\)'s equal, using different parameters \(t\) and \(s\). Solve two equations, then check the third.`,
      String.raw`In (d), the \(x\)- and \(y\)-equations do not involve \(k\), so \(t\) and \(s\) are the same as in (b).`
    ],
    answer: String.raw`<p><strong>a.</strong> \((2, -1, 1) \cdot (1, 1, -1) = 2 - 1 - 1 = 0\), so the directions are perpendicular.</p>
<p><strong>b.</strong> A common point needs values of \(t\) and \(s\) with</p>
<div class="eq">\[ \begin{aligned} 1 + 2t &= 3 + s & (1) \\ -t &= 1 + s & (2) \\ 2 + t &= -s & (3) \end{aligned} \]</div>
<p>From (2), \(s = -1 - t\). Substitute into (1): \(1 + 2t = 2 - t\), so \(t = \tfrac13\) and \(s = -\tfrac43\). Check (3): left side \(2 + \tfrac13 = \tfrac73\), right side \(-s = \tfrac43\). \(\tfrac73 \neq \tfrac43\), so there is no common point. The pipes do not meet.</p>
<p><strong>c.</strong> The dot product only compares directions. In R³, two lines with perpendicular (or any non-parallel) directions can pass by each other at different heights without meeting. Lines that are not parallel and do not intersect are <em>skew</em>. "Perpendicular" in the class classification is a statement about \(\vec m_1\) and \(\vec m_2\), not a promise that the lines cross.</p>
<p><strong>d.</strong> \(L_3\): \(x = 3 + s,\ y = 1 + s,\ z = k - s\). Equations (1) and (2) are unchanged, so \(t = \tfrac13\), \(s = -\tfrac43\). The \(z\)-equation becomes \(2 + t = k - s\): \(2 + \tfrac13 = k + \tfrac43\), so \(k = 1\). The meeting point is \(L_1\) at \(t = \tfrac13\): \(\left(\tfrac53, -\tfrac13, \tfrac73\right)\). Check on \(L_3\) with \(s = -\tfrac43\): \(\left(3 - \tfrac43,\ 1 - \tfrac43,\ 1 + \tfrac43\right) = \left(\tfrac53, -\tfrac13, \tfrac73\right)\) ✓.</p>
<p class="answer">\(k = 1\); the pipes meet at \(\left(\tfrac53, -\tfrac13, \tfrac73\right)\), at right angles.</p>` },

  { id: "x33-04", lesson: "3.3", level: "extend", tier: "extra",
    title: "Explain and prove: one equation, two equations, one shared point", marks: 9,
    prompt: String.raw`<ol type="a">
<li>Show that \((3, 0, 0)\), \((0, -6, 0)\) and \((0, 0, 2)\) all satisfy \(2x - y + 3z = 6\), and that these three points are not collinear. What does this tell you about whether a single equation \(Ax + By + Cz + D = 0\) can describe a line in R³?</li>
<li>Starting from the symmetric equations of Example 1, \(x - 1 = \frac{y + 4}{3} = \frac{-(z - 3)}{8}\), write two equations with no fractions whose common solutions are exactly that line. Verify that \(P(1, -4, 3)\) and \(Q(2, -1, -5)\) satisfy both.</li>
<li>Prove that if two lines \(\vec r = \vec r_1 + t\vec m_1\) and \(\vec r = \vec r_2 + s\vec m_2\) have \(\vec m_1 = k\vec m_2\) (\(k \neq 0\)) and share one point, then every point of the second line is on the first. (This justifies the class test for "equivalent".)</li>
</ol>`,
    hints: [
      String.raw`Three points are collinear only if the vectors joining them are scalar multiples.`,
      String.raw`For (c), write the shared point both ways, then rewrite a general point of the second line in terms of \(\vec r_1\) and \(\vec m_1\).`
    ],
    answer: String.raw`<p><strong>a.</strong> \(2(3) - 0 + 0 = 6\), \(0 - (-6) + 0 = 6\), \(0 - 0 + 3(2) = 6\): all three satisfy the equation. Let \(A(3, 0, 0)\), \(B(0, -6, 0)\), \(C(0, 0, 2)\): \(\overrightarrow{AB} = (-3, -6, 0)\) and \(\overrightarrow{AC} = (-3, 0, 2)\). These are not scalar multiples (the \(y\)-components would need \(k = 0\), the \(x\)-components \(k = 1\)), so the points are not collinear. A line cannot contain three non-collinear points, so the solution set of one such equation is not a line. (It is a plane: lesson 3.7.)</p>
<p><strong>b.</strong> Take the chain two links at a time and clear the fractions.</p>
<div class="eq">\[ \begin{aligned} x - 1 = \frac{y + 4}{3} &\;\Rightarrow\; 3x - 3 = y + 4 \;\Rightarrow\; 3x - y - 7 = 0 \\ \frac{y + 4}{3} = \frac{-(z - 3)}{8} &\;\Rightarrow\; 8y + 32 = -3z + 9 \;\Rightarrow\; 8y + 3z + 23 = 0 \end{aligned} \]</div>
<p>Check \(P(1, -4, 3)\): \(3 + 4 - 7 = 0\) ✓ and \(-32 + 9 + 23 = 0\) ✓. Check \(Q(2, -1, -5)\): \(6 + 1 - 7 = 0\) ✓ and \(-8 - 15 + 23 = 0\) ✓. Each equation on its own is a plane; the line is where the two planes meet. This is why a line in R³ needs two equations, never one.</p>
<p><strong>c.</strong> Let the shared point be \(P\), with \(\vec p = \vec r_1 + t_0\vec m_1 = \vec r_2 + s_0\vec m_2\) for some \(t_0, s_0\). Take any point of the second line, \(\vec r_2 + s\vec m_2\). Then</p>
<div class="eq">\[ \begin{aligned} \vec r_2 + s\vec m_2 &= (\vec r_2 + s_0\vec m_2) + (s - s_0)\vec m_2 \\ &= \vec r_1 + t_0\vec m_1 + (s - s_0)\tfrac1k\vec m_1 \\ &= \vec r_1 + \left[t_0 + \tfrac{s - s_0}{k}\right]\vec m_1 \end{aligned} \]</div>
<p>using \(\vec m_2 = \tfrac1k\vec m_1\). This is a point of the first line, with parameter \(t = t_0 + \frac{s - s_0}{k}\). Since \(s\) was arbitrary, every point of the second line lies on the first; swapping the roles of the lines shows the reverse. So the lines are identical. \(\blacksquare\)</p>` }
);

/* ======================================================================
   BEYOND THE NOTES
   ====================================================================== */
window.EXTRA.push(
  { id: "e-33-skew-lines", lesson: "3.3", tier: "likely",
    title: "Skew lines: the fourth relationship in R³",
    why: String.raw`The class category "neither" hides two very different situations in R³, and telling them apart is a classic test extension.`,
    html: String.raw`<h3>Four ways two lines can sit in space</h3>
<p>In R², two lines are either parallel (possibly the same line) or they cross at exactly one point. R³ adds a fourth possibility: two lines can point in different directions and still never meet, because one passes over the other. These are <span class="term">skew lines</span>. Think of a highway overpass: the two roads are not parallel, yet they never touch.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Directions parallel?</th><th>Common point?</th><th>Relationship</th></tr></thead><tbody>
<tr><td>yes</td><td>yes (then all points)</td><td>coincident (equivalent)</td></tr>
<tr><td>yes</td><td>no</td><td>parallel and distinct</td></tr>
<tr><td>no</td><td>yes (exactly one)</td><td>intersecting</td></tr>
<tr><td>no</td><td>no</td><td>skew</td></tr>
</tbody></table></div>
<figure class="diagram narrow"><svg viewBox="0 0 480 300" role="img" aria-labelledby="d33-skew"><title id="d33-skew">A rectangular box drawn in perspective. One highlighted line runs along the front top edge, another along a bottom edge going back; they are neither parallel nor touching</title>
<line class="s-mute dash" x1="170" y1="190" x2="390" y2="190"/>
<line class="s-mute dash" x1="170" y1="190" x2="170" y2="60"/>
<line class="s-mute dash" x1="80" y1="250" x2="170" y2="190"/>
<polyline class="s-mute" points="80,250 300,250 300,120 80,120 80,250"/>
<polyline class="s-mute" points="300,250 390,190 390,60 170,60 80,120"/>
<line class="s-mute" x1="300" y1="120" x2="390" y2="60"/>
<line class="s-blue" x1="40" y1="120" x2="345" y2="120" stroke-width="3"/>
<line class="s-magenta" x1="264" y1="274" x2="426" y2="166" stroke-width="3"/>
<text class="t-blue" x="34" y="125" font-size="15" font-style="italic" text-anchor="end">L₁</text>
<text class="t-magenta" x="432" y="162" font-size="15" font-style="italic">L₂</text>
</svg><figcaption>\(L_1\) runs along the front top edge of a box and \(L_2\) along a bottom edge going back. They are not parallel and they never meet: they are skew.</figcaption></figure>
<h3>Testing for an intersection</h3>
<p>If the directions are not parallel, find out whether the lines meet:</p>
<ol>
<li>Write both lines in parametric form with <strong>different</strong> parameters, say \(t\) and \(s\). A common point is usually reached at different parameter values on the two lines.</li>
<li>Set the \(x\)'s equal, the \(y\)'s equal and the \(z\)'s equal: three equations in two unknowns.</li>
<li>Solve two of the equations for \(t\) and \(s\).</li>
<li>Substitute into the third. If it checks, the lines intersect (put \(t\) back into the first line to get the point). If it fails, the lines are skew.</li>
</ol>
<div class="example"><p class="example-title">Intersecting · \(L_1: \vec r = (1, 2, 0) + t(1, -1, 2)\) and \(L_2: \vec r = (4, 2, 3) + s(1, 2, -1)\)</p>
<ol class="work">
<li>Not parallel: \((1, -1, 2)\) is not a multiple of \((1, 2, -1)\).</li>
<li>Equate components: \(1 + t = 4 + s\), \(2 - t = 2 + 2s\), \(2t = 3 - s\).</li>
<li>The second equation gives \(t = -2s\). Substitute into the first: \(1 - 2s = 4 + s\), so \(s = -1\) and \(t = 2\).</li>
<li>Check the third: \(2(2) = 4\) and \(3 - (-1) = 4\) ✓. Point: \(L_1\) at \(t = 2\) is \((3, 0, 4)\).</li>
</ol>
<p class="answer">The lines intersect at \((3, 0, 4)\).</p></div>
<div class="example"><p class="example-title">Skew · Worksheet 9b: \(\vec r = (2, -1, 4) + s(3, 0, 6)\) and \(\vec r = (-3, 0, 1) + t(2, 0, 2)\)</p>
<ol class="work">
<li>The worksheet already showed these are not parallel.</li>
<li>Equate the \(y\)-components: \(-1 = 0\). That is impossible for every \(s\) and \(t\).</li>
</ol>
<p class="answer">No common point, not parallel: the lines are skew.</p></div>
<div class="callout warn"><p class="callout-title">Common mistake</p>
<p>Using the same letter for both parameters (writing \(t\) in both lines) forces the common point to occur at the same parameter value on both lines, which is almost never true. You would wrongly conclude that intersecting lines are skew.</p></div>
<p>Perpendicular directions do not settle anything here: lines with \(\vec m_1 \cdot \vec m_2 = 0\) can meet at a right angle or be skew. The shortest distance between two skew lines is a further extension that uses the cross product, much like the point-to-line distance in lesson 3.4.</p>` },

  { id: "e-33-two-planes", lesson: "3.3", tier: "extra",
    title: "Why one equation makes a plane and two make a line",
    why: String.raw`Counting freedoms explains the teacher's note that a line in R³ has no Cartesian equation, and previews lessons 3.6 and 3.7.`,
    html: String.raw`<h3>Counting freedoms</h3>
<p>A point in R³ has three coordinates you can choose freely. Each independent linear equation you impose uses up one of those freedoms:</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Independent linear equations</th><th>Freedoms left</th><th>Shape in R³</th></tr></thead><tbody>
<tr><td>0</td><td>3</td><td>all of space</td></tr>
<tr><td>1</td><td>2</td><td>a plane</td></tr>
<tr><td>2</td><td>1</td><td>a line</td></tr>
<tr><td>3</td><td>0</td><td>a single point</td></tr>
</tbody></table></div>
<p>In R² you start with only two freedoms, so a single equation \(Ax + By + C = 0\) leaves one: a line. That is why lines in R² get a Cartesian equation and lines in R³ do not. The parameter \(t\) in the vector equation is that one remaining freedom made visible.</p>
<h3>Symmetric equations are two plane equations</h3>
<p>The chain \(\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}\) is two equations. Take Example 1, \(x - 1 = \frac{y + 4}{3} = \frac{-(z - 3)}{8}\), and clear fractions two links at a time:</p>
<div class="eq">\[ 3x - y - 7 = 0 \qquad\text{and}\qquad 8y + 3z + 23 = 0 \]</div>
<p>Each of these is a plane. The line is the set of points that satisfy both: the crease where the two planes meet.</p>
<h3>The normal-vector picture</h3>
<p>Read the normals of those two planes: \(\vec n_1 = (3, -1, 0)\) and \(\vec n_2 = (0, 8, 3)\). Both are perpendicular to the line's direction \(\vec m = (1, 3, -8)\): \(3 - 3 + 0 = 0\) and \(0 + 24 - 24 = 0\). So the line has (at least) two genuinely different normals, which is the teacher's "no single unique normal vector" made concrete.</p>
<p>Going the other way, the cross product of the two normals is perpendicular to both, so it must point along the line:</p>
<div class="eq">\[ \vec n_1 \times \vec n_2 = \big((-1)(3) - (0)(8),\ (0)(0) - (3)(3),\ (3)(8) - (-1)(0)\big) = (-3, -9, 24) = -3(1, 3, -8) \]</div>
<p>That recovers the direction vector of Example 1. In lesson 3.7 you will see the same trick used in reverse: crossing two direction vectors of a plane gives its normal.</p>` },

  { id: "e-33-parameter-time", lesson: "3.3", tier: "extra",
    title: "The parameter as time: crossing paths versus collisions",
    why: String.raw`Application questions often treat \(t\) as time, and then "do the paths cross?" and "do the objects collide?" become two different questions.`,
    html: String.raw`<h3>t as time, m as velocity</h3>
<p>If \(t\) is measured in seconds, \(\vec r = \vec r_0 + t\vec m\) is a position that changes with time: at \(t = 0\) the object is at \(\vec r_0\), and each second it moves by \(\vec m\). So \(\vec m\) is the velocity vector and \(|\vec m|\) is the speed. Replacing \(\vec m\) by \(2\vec m\) gives the same <em>path</em> travelled twice as fast: the line is identical, the motion is not.</p>
<h3>Paths crossing versus objects colliding</h3>
<p>Two objects move by \(A: \vec r = (1, 0, 2) + t(1, 2, 0)\) and \(B: \vec r = (6, 1, -1) + t(-1, 1, 1)\), with \(t\) in seconds for both.</p>
<p><strong>Do the paths cross?</strong> This is a question about the lines, so give them separate parameters (\(t\) for \(A\), \(s\) for \(B\)) and solve:</p>
<div class="eq">\[ \begin{aligned} 1 + t &= 6 - s \\ 2t &= 1 + s \\ 2 &= -1 + s \end{aligned} \]</div>
<p>The third equation gives \(s = 3\); the second then gives \(t = 2\); the first checks: \(3 = 3\). The paths cross at \((3, 4, 2)\).</p>
<p><strong>Do the objects collide?</strong> That needs them at the same place at the <em>same time</em>. \(A\) is at \((3, 4, 2)\) when \(t = 2\), but \(B\) gets there at \(t = 3\). At \(t = 2\), \(B\) is at \((4, 3, 1)\), a distance \(\sqrt{1 + 1 + 1} = \sqrt3\) away. No collision: \(B\) passes through the crossing point one second after \(A\) has left it.</p>
<p>Speeds: \(|(1, 2, 0)| = \sqrt5 \approx 2.24\) units/s for \(A\), and \(|(-1, 1, 1)| = \sqrt3 \approx 1.73\) units/s for \(B\).</p>
<div class="callout tip"><p class="callout-title">Rule</p>
<p>Paths crossing: solve with <strong>different</strong> parameters. Collision: the solution must have <strong>equal</strong> parameter values (same clock).</p></div>` }
);

/* ======================================================================
   GLOSSARY
   ====================================================================== */
window.GLOSSARY.push(
  { term: String.raw`Vector equation of a line in R³`, def: String.raw`\(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\), or \((x, y, z) = (x_0, y_0, z_0) + t(a, b, c)\), where \(\vec r_0\) is the position vector of a known point and \(\vec m = (a, b, c)\) is a direction vector.`, lesson: "3.3", tier: "essential" },
  { term: String.raw`Parametric equations of a line in R³`, def: String.raw`The three component equations \(x = x_0 + ta,\ y = y_0 + tb,\ z = z_0 + tc,\ t \in \mathbb{R}\), all sharing the same parameter \(t\).`, lesson: "3.3", tier: "essential" },
  { term: String.raw`Symmetric equations (R³)`, def: String.raw`\(\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}\), found by solving each parametric equation for \(t\) and setting them equal. They exist only when \(a, b, c \neq 0\); with one zero component, use a combination such as \(\frac{x - x_0}{a} = \frac{z - z_0}{c},\ y = y_0\).`, lesson: "3.3", tier: "essential" },
  { term: String.raw`Equivalent (coincident) lines`, def: String.raw`Two equations that describe the same line: their direction vectors are parallel (\(\vec m_1 = k\vec m_2\)) and they share at least one point.`, lesson: "3.3", tier: "essential" },
  { term: String.raw`Parallel and distinct lines`, def: String.raw`Lines with parallel direction vectors (\(\vec m_1 = k\vec m_2\)) that share no point; a point of one line gives different \(t\)-values when tested in the other.`, lesson: "3.3", tier: "essential" },
  { term: String.raw`Perpendicular lines (R³)`, def: String.raw`Lines whose direction vectors satisfy \(\vec m_1 \cdot \vec m_2 = 0\). In R³ this describes the directions only; the lines may or may not actually meet.`, lesson: "3.3", tier: "likely" },
  { term: String.raw`Skew lines`, def: String.raw`Two lines in R³ that are not parallel and do not intersect. They cannot exist in R².`, lesson: "3.3", tier: "extra" },
  { term: String.raw`Coordinate planes`, def: String.raw`The three planes \(z = 0\) (the \(xy\)-plane), \(y = 0\) (the \(xz\)-plane) and \(x = 0\) (the \(yz\)-plane). A line meets one where that coordinate is zero.`, lesson: "3.3", tier: "extra" }
);
