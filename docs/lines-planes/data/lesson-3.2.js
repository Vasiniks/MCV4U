/* MCV4U Unit 3 · Lesson 3.2 Cartesian Equation of a Line in R²: lesson, worksheet Q&A, quiz, apply & extend, beyond the notes, glossary. */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "3.2", title: "Cartesian Equation of a Line in R²", stage: "c2",
  where: "R²",
  summary: String.raw`A line in R² can be described without a parameter by the Cartesian (scalar) equation \(Ax + By + C = 0\), where \(\vec n = (A, B)\) is a normal vector: a vector perpendicular to the line. This lesson shows where that equation comes from, how to build it from a point and a normal or a direction vector, how the symmetric equation bridges the parametric and Cartesian forms, and how to move between all four forms of a line.`,
  objectives: [
    String.raw`Explain what a normal vector is, and find one for any direction vector with the "switch the components, change one sign" shortcut, checking with the dot product.`,
    String.raw`Derive the Cartesian equation \(Ax + By + C = 0\) from \(\overrightarrow{P_0P} \cdot \vec n = 0\) and explain why the coefficients \((A, B)\) form a normal vector.`,
    String.raw`Find the Cartesian equation of a line from a point and a normal vector, or from a point and a direction vector, written with \(A > 0\) and whole-number coefficients in lowest terms.`,
    String.raw`Write the symmetric equation of a line from its parametric equations, and cross-multiply it into Cartesian form.`,
    String.raw`Read a normal vector, a direction vector and a point off a Cartesian equation, and use them to write the vector, parametric and symmetric equations.`,
    String.raw`Find the equation of a line parallel or perpendicular to a given line by comparing normal vectors.`,
    String.raw`Handle the special cases: vertical and horizontal lines, zero components, and lines through the origin.`
  ],
  html: String.raw`
<h3 data-tier="essential">Recall: the forms you already know</h3>
<p>In 3.1 you described a line in R² with two ingredients: a point on the line and the direction the line runs. You reach every point on the line by starting at the position vector \(\vec r_0\) of a known point and adding some multiple of the direction vector \(\vec m\).</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Form</th><th>Equation</th></tr></thead><tbody>
<tr><th>Vector equation</th><td>\(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\)</td></tr>
<tr><th>Vector equation in component form</th><td>\((x, y) = (x_0, y_0) + t(a, b),\ t \in \mathbb{R}\)</td></tr>
<tr><th>Parametric equations</th><td>\(x = x_0 + ta,\quad y = y_0 + tb,\quad t \in \mathbb{R}\)</td></tr>
</tbody></table></div>
<p>All three forms use a parameter \(t\): each value of \(t\) produces one point of the line. This lesson adds two forms with no parameter at all. The <strong>Cartesian equation</strong> is built from a vector perpendicular to the line, and the <strong>symmetric equation</strong> comes from eliminating \(t\) from the parametric equations.</p>
<div class="callout tip"><p class="callout-title">Notation</p><p>The typed notes write \(t \in \Re\) for "t is a real number"; this guide writes \(t \in \mathbb{R}\). They mean the same thing. Points are written \(P_0(x_0, y_0)\), vectors with arrows, and \(\vec m\) is always a direction vector, \(\vec n\) always a normal vector.</p></div>

<h3 data-tier="essential">Standard form, the slope way</h3>
<p>The notes open with a question you could answer before this course: find an equation in <span class="term">standard form</span> for the line through (0, 5) with direction vector \(\vec m = (3, 4)\).</p>
<div class="example"><p class="example-title">Opening example · The line through (0, 5) with \(\vec m = (3, 4)\), in standard form</p>
<ol class="work">
<li>Turn the direction vector into a slope. A direction vector \((a, b)\) means "run \(a\), rise \(b\)", so the slope is \(\frac{\text{rise}}{\text{run}} = \frac{4}{3}\).</li>
<li>Use the point as the y-intercept. The point (0, 5) sits on the y-axis, so \(b = 5\) in \(y = mx + b\): \(y = \frac{4}{3}x + 5\). This is slope–y-intercept form.</li>
<li>Clear the fraction so the coefficients are whole numbers: multiply every term by 3 to get \(3y = 4x + 15\).</li>
<li>Move every term to one side, keeping the \(x\) term positive: \(4x - 3y + 15 = 0\).</li>
</ol>
<p class="answer">\(\therefore\ 4x - 3y + 15 = 0\)</p></div>
<p>An equation written as \(Ax + By + C = 0\) is in standard form, and in this unit it is also called the <span class="term">Cartesian equation</span> (or <em>scalar equation</em>) of the line.</p>
<p>Now look at the coefficients of \(x\) and \(y\). Together they make the vector \((4, -3)\). Dot it with the direction vector:</p>
<div class="eq">\[ (4, -3) \cdot (3, 4) = 12 - 12 = 0 \]</div>
<p>The coefficients form a vector <em>perpendicular</em> to the line. That is not a coincidence, and it is the key idea of the whole lesson. The slope method worked here because the point happened to be the y-intercept, but it gets clumsy for other points, it breaks for vertical lines (no slope), and it does not carry over to planes in R³. The normal-vector method below handles all of these.</p>

<h3 data-tier="essential">Normal vectors</h3>
<p>A <span class="term">normal vector</span> is a vector that is <strong>perpendicular</strong> to a given vector. For a line in R², a normal vector \(\vec n\) is perpendicular to the line's direction vector \(\vec m\), and so to the line itself.</p>
<p>Recall from the vectors unit: if \(\vec m \perp \vec n\), then \(\vec m \cdot \vec n = 0\). That one fact is how you find a normal and how you check it.</p>
<div class="example"><p class="example-title">E.g. · Determine a normal vector to \(\vec m = (3, 4)\)</p>
<ol class="work">
<li>Switch the two components of \(\vec m\): \((3, 4) \to (4, 3)\). This alone is not perpendicular (\(12 + 12 \ne 0\)), but the two products now match in size.</li>
<li>Change the sign of one component so the two products cancel: \(\vec n = (-4, 3)\).</li>
<li>Check with the dot product, because that is what "perpendicular" means: \(\vec m \cdot \vec n = (3, 4) \cdot (-4, 3) = -12 + 12 = 0\ \checkmark\)</li>
</ol>
<p class="answer">\(\vec n = (-4, 3)\), or any non-zero multiple of it such as \((4, -3)\)</p></div>
<div class="callout teacher"><p class="callout-title">Teacher's shortcut: switch the components and change one sign</p>
<p>For any direction vector \(\vec m = (a, b)\), both \((-b, a)\) and \((b, -a)\) are normal vectors, because \((a, b) \cdot (-b, a) = -ab + ab = 0\). Worksheet question 5 asks you to prove exactly this. The notes also say "think negative reciprocals": the slope of \(\vec m = (3, 4)\) is \(\frac{4}{3}\), and the slope of \(\vec n = (-4, 3)\) is \(-\frac{3}{4}\).</p></div>
<figure class="diagram narrow"><svg viewBox="0 0 420 340" role="img" aria-labelledby="d32-normal"><title id="d32-normal">The direction vector m = (3, 4) and the normal vector n = (−4, 3) drawn from the origin at a right angle. The opposite normal (4, −3) is shown dashed.</title>
<line class="s-mute" x1="30" y1="180" x2="400" y2="180" stroke-width="1.5"/>
<line class="s-mute" x1="200" y1="325" x2="200" y2="15" stroke-width="1.5"/>
<text class="t-mute" x="404" y="185" font-size="14">x</text>
<text class="t-mute" x="207" y="22" font-size="14">y</text>
<line class="s-mute dash" x1="290" y1="60" x2="290" y2="180" stroke-width="1"/>
<line class="s-mute dash" x1="290" y1="60" x2="200" y2="60" stroke-width="1"/>
<line class="s-mute dash" x1="80" y1="90" x2="80" y2="180" stroke-width="1"/>
<line class="s-mute dash" x1="80" y1="90" x2="200" y2="90" stroke-width="1"/>
<text class="t-mute" x="290" y="198" font-size="13" text-anchor="middle">3</text>
<text class="t-mute" x="194" y="65" font-size="13" text-anchor="end">4</text>
<text class="t-mute" x="80" y="198" font-size="13" text-anchor="middle">−4</text>
<text class="t-mute" x="206" y="95" font-size="13">3</text>
<line class="s-teal" x1="200" y1="180" x2="284" y2="68" stroke-width="3"/>
<polygon class="f-teal" points="290,60 288,71 280,65"/>
<text class="t-teal" x="298" y="62" font-size="15" font-style="italic">m = (3, 4)</text>
<line class="s-magenta" x1="200" y1="180" x2="88" y2="96" stroke-width="3"/>
<polygon class="f-magenta" points="80,90 85,100 91,92"/>
<text class="t-magenta" x="80" y="76" font-size="15" font-style="italic" text-anchor="middle">n = (−4, 3)</text>
<line class="s-magenta dash" x1="200" y1="180" x2="312" y2="264" stroke-width="2"/>
<polygon class="f-magenta" points="320,270 309,268 315,260"/>
<text class="t-magenta" x="410" y="302" font-size="13" text-anchor="end">(4, −3) is also a normal</text>
<polyline class="s-ink" points="207.2,170.4 197.6,163.2 190.4,172.8" stroke-width="1.5"/>
</svg><figcaption>Switching the components of \(\vec m\) and changing one sign turns it a quarter-turn. Either quarter-turn gives a normal, and \(\vec m \cdot \vec n = 0\) confirms the right angle.</figcaption></figure>
<p>A line has infinitely many normal vectors: every non-zero scalar multiple of one normal is another normal, because scaling a vector does not change the direction it is perpendicular to. So \((-4, 3)\), \((4, -3)\) and \((-8, 6)\) are all normals to \(\vec m = (3, 4)\). Choose the one that makes your arithmetic easiest: whole numbers, no common factor, and (as you will see) a positive first component.</p>
<details class="check"><summary>Find a normal vector to \(\vec m = (5, -2)\) and check it.</summary><div class="ans"><p>Switch to \((-2, 5)\), then change one sign: \(\vec n = (2, 5)\) (or \((-2, -5)\)). Check: \((5, -2) \cdot (2, 5) = 10 - 10 = 0\), so they are perpendicular.</p></div></details>

<h3 data-tier="essential">Example 1: a line from a normal and a point</h3>
<p>Here is where normal vectors earn their keep. If you know one point \(P_0\) on a line and a normal \(\vec n\), you know the line: it is every point \(P\) for which the arrow from \(P_0\) to \(P\) runs along the line, which means that arrow is perpendicular to \(\vec n\).</p>
<div class="example"><p class="example-title">Example 1 · Determine the Cartesian equation of the line with normal vector \(\vec n = (4, -2)\) that contains the point (4, 5)</p>
<ol class="work">
<li>Let \(P(x, y)\) be any point on the line. Using a general point lets the final equation describe every point at once.</li>
<li>Build the vector from the known point to the general point: \(\overrightarrow{P_0P} = (x - 4,\ y - 5)\). This vector lies along the line, so \(\overrightarrow{P_0P} \perp \vec n\).</li>
<li>Write the perpendicular condition as a dot product: \(\overrightarrow{P_0P} \cdot \vec n = 0\).</li>
<li>Substitute the components: \((x - 4,\ y - 5) \cdot (4, -2) = 0\).</li>
<li>Expand the dot product (multiply matching components and add): \(4x - 16 - 2y + 10 = 0\).</li>
<li>Collect the constants: \(4x - 2y - 6 = 0\). Every coefficient is even, so divide by 2 to get the simplest equivalent equation: \(2x - y - 3 = 0\).</li>
</ol>
<p class="answer">\(\therefore\ 4x - 2y - 6 = 0\) or \(2x - y - 3 = 0\)</p></div>
<p>Check: the point (4, 5) gives \(2(4) - 5 - 3 = 0\ \checkmark\). A point off the line, say (0, 0), gives \(-3 \ne 0\), because the arrow from \(P_0\) to it is not perpendicular to \(\vec n\).</p>
<figure class="diagram narrow"><svg viewBox="0 0 440 400" role="img" aria-labelledby="d32-ex1"><title id="d32-ex1">The line 2x − y − 3 = 0 through P₀(4, 5) and a general point P(x, y). The vector from P₀ to P lies along the line, and the normal n = (4, −2) drawn at P₀ is perpendicular to it.</title>
<line class="s-mute" x1="40" y1="254" x2="420" y2="254" stroke-width="1.5"/>
<line class="s-mute" x1="104" y1="384" x2="104" y2="18" stroke-width="1.5"/>
<text class="t-mute" x="424" y="259" font-size="14">x</text>
<text class="t-mute" x="111" y="24" font-size="14">y</text>
<line class="s-mute" x1="168" y1="250" x2="168" y2="258" stroke-width="1.5"/>
<line class="s-mute" x1="232" y1="250" x2="232" y2="258" stroke-width="1.5"/>
<line class="s-mute" x1="296" y1="250" x2="296" y2="258" stroke-width="1.5"/>
<line class="s-mute" x1="360" y1="250" x2="360" y2="258" stroke-width="1.5"/>
<text class="t-mute" x="168" y="274" font-size="13" text-anchor="middle">2</text>
<text class="t-mute" x="232" y="274" font-size="13" text-anchor="middle">4</text>
<text class="t-mute" x="296" y="274" font-size="13" text-anchor="middle">6</text>
<text class="t-mute" x="360" y="274" font-size="13" text-anchor="middle">8</text>
<line class="s-mute" x1="100" y1="190" x2="108" y2="190" stroke-width="1.5"/>
<line class="s-mute" x1="100" y1="126" x2="108" y2="126" stroke-width="1.5"/>
<line class="s-mute" x1="100" y1="62" x2="108" y2="62" stroke-width="1.5"/>
<text class="t-mute" x="95" y="195" font-size="13" text-anchor="end">2</text>
<text class="t-mute" x="95" y="131" font-size="13" text-anchor="end">4</text>
<text class="t-mute" x="95" y="67" font-size="13" text-anchor="end">6</text>
<line class="s-ink" x1="91.2" y1="375.6" x2="267.2" y2="23.6" stroke-width="2"/>
<text class="t-ink" x="274" y="36" font-size="14">2x − y − 3 = 0</text>
<line class="s-teal" x1="232" y1="94" x2="188.5" y2="181.1" stroke-width="3"/>
<polygon class="f-teal" points="184,190 192.9,183.3 184,178.8"/>
<text class="t-teal" x="200" y="146" font-size="14" text-anchor="end">P₀P</text>
<line class="s-magenta" x1="232" y1="94" x2="351.1" y2="153.5" stroke-width="3"/>
<polygon class="f-magenta" points="360,158 348.8,158 353.3,149.1"/>
<text class="t-magenta" x="322" y="184" font-size="15" font-style="italic">n = (4, −2)</text>
<polyline class="s-ink" points="227.5,102.9 236.5,107.4 240.9,98.5" stroke-width="1.5"/>
<circle class="f-ink" cx="232" cy="94" r="4.5"/>
<circle class="f-ink" cx="184" cy="190" r="4.5"/>
<text class="t-ink" x="222" y="86" font-size="14" text-anchor="end">P₀(4, 5)</text>
<text class="t-ink" x="194" y="204" font-size="14">P(x, y)</text>
</svg><figcaption>Example 1. Wherever \(P\) slides along the line, \(\overrightarrow{P_0P}\) stays perpendicular to \(\vec n\), so \(\overrightarrow{P_0P} \cdot \vec n = 0\) holds for exactly the points on the line.</figcaption></figure>
<div class="callout teacher"><p class="callout-title">Compare the normal vector to the Cartesian equation</p><p>The notes circle this: in \(4x - 2y - 6 = 0\), the coefficients of \(x\) and \(y\) are exactly the components of \(\vec n = (4, -2)\). After dividing by 2, the coefficients \((2, -1)\) are still a normal, just a shorter one. Next you will see why this always happens.</p></div>

<h3 data-tier="likely">Deriving the general form</h3>
<p>Repeat Example 1 with letters instead of numbers. That shows the pattern always holds and gives you a faster method.</p>
<div class="example"><p class="example-title">Derivation · Given a point \(P_0(x_0, y_0)\) and a normal vector \(\vec n = (A, B)\)</p>
<ol class="work">
<li>Let \(P(x, y)\) be any point on the line. Then \(\overrightarrow{P_0P} = (x - x_0,\ y - y_0)\) lies along the line, so it is perpendicular to \(\vec n\): \(\overrightarrow{P_0P} \cdot \vec n = 0\).</li>
<li>Substitute the components: \((x - x_0,\ y - y_0) \cdot (A, B) = 0\).</li>
<li>Expand the dot product: \(Ax - Ax_0 + By - By_0 = 0\).</li>
<li>Group the terms that do not contain \(x\) or \(y\): \(Ax + By + (-Ax_0 - By_0) = 0\). The bracket involves only known numbers, so it is a single constant. Call it \(C\).</li>
</ol>
<p class="answer">\(\therefore\ Ax + By + C = 0\), where \((A, B)\) are the components of the normal \(\vec n\) and \(C = -Ax_0 - By_0\)</p></div>
<p>Two things to take from this. First, the coefficients of \(x\) and \(y\) <em>are</em> the normal vector; you can write them down immediately. Second, \(C\) is whatever number makes the known point satisfy the equation, so the fastest way to find it is to substitute the point and solve. That is the method in every example from here on.</p>

<h3 data-tier="essential">The Cartesian equation and the A > 0 convention</h3>
<div class="callout key"><p class="callout-title">Cartesian equation of a line in R²</p>
<div class="eq">\[ Ax + By + C = 0 \qquad \text{where } \vec n = (A, B) \text{ is the normal vector} \]</div>
<p>To find it: write \(A\) and \(B\) from a normal vector, substitute a known point for \(x\) and \(y\), and solve for \(C\).</p></div>
<div class="example"><p class="example-title">Example 2 · Determine the Cartesian equation of the line through (2, −9) with normal \(\vec n = (-4, 5)\)</p>
<h4>Option 1: use the given normal, then fix the sign</h4>
<ol class="work">
<li>The normal gives \(A = -4\) and \(B = 5\), so the equation has the form \(-4x + 5y + C = 0\).</li>
<li>The point (2, −9) is on the line, so it must satisfy the equation. Substitute it: \(-4(2) + 5(-9) + C = 0\).</li>
<li>Simplify and solve: \(-8 - 45 + C = 0\), so \(C = 53\). This gives \(-4x + 5y + 53 = 0\).</li>
<li>The convention is not to start with a negative. Multiply every term by \(-1\); this describes the same line because both sides are still equal to zero: \(4x - 5y - 53 = 0\).</li>
</ol>
<h4>Option 2: choose a normal with A > 0 from the start</h4>
<ol class="work">
<li>\(\vec n = (-4, 5)\) has \(A \lt 0\), but \((4, -5) = -1 \cdot (-4, 5)\) is also a normal. Use \(\vec n = (4, -5)\), so the form is \(4x - 5y + C = 0\).</li>
<li>Substitute (2, −9): \(4(2) - 5(-9) + C = 0\).</li>
<li>Simplify and solve: \(8 + 45 + C = 0\), so \(C = -53\).</li>
</ol>
<p class="answer">\(\therefore\ 4x - 5y - 53 = 0\)</p></div>
<p>Check: \(4(2) - 5(-9) - 53 = 8 + 45 - 53 = 0\ \checkmark\). Both options give the same final equation, as they must.</p>
<div class="callout warn"><p class="callout-title">A slip in the handwritten notes</p><p>In Option 2 the handwritten notes box the answer as \(4x + 5y - 53 = 0\). The working above it is right (\(C = -53\)), but the sign on \(y\) should be negative, because the normal used is \((4, -5)\). You can tell the boxed version is wrong by substituting the point: \(4(2) + 5(-9) - 53 = -90 \ne 0\). The correct answer is \(4x - 5y - 53 = 0\), which matches Option 1.</p></div>
<div class="callout teacher"><p class="callout-title">How your teacher wants the final answer</p><ul>
<li>\(A > 0\): "do not start with a negative". Either multiply through by \(-1\) at the end or pick a normal with a positive first component at the start.</li>
<li>Whole-number coefficients: clear any fractions (worksheet 3b turns \(-4x + 2 = 0\) into \(2x - 1 = 0\)).</li>
<li>Lowest terms: divide out a common factor (\(4x - 2y - 6 = 0\) becomes \(2x - y - 3 = 0\)). The teacher accepts either, but the simplified version is cleaner to use later.</li>
</ul></div>
<details class="check"><summary>Find the Cartesian equation of the line through (−3, 2) with normal \(\vec n = (-2, -7)\).</summary><div class="ans"><p>Use the normal \((2, 7)\) so that \(A > 0\): \(2x + 7y + C = 0\). Substitute (−3, 2): \(-6 + 14 + C = 0\), so \(C = -8\). The equation is \(2x + 7y - 8 = 0\). Check: \(2(-3) + 7(2) - 8 = 0\).</p></div></details>

<h3 data-tier="essential">Example 3: one line in every form</h3>
<p>Most questions give you a direction vector, not a normal. The fix is one extra step: turn the direction vector into a normal with the shortcut, then proceed exactly as in Example 2.</p>
<div class="example"><p class="example-title">Example 3 · Given \(\vec m = (3, 2)\) and the point \(P_0(4, -1)\)</p>
<h4>a) A vector equation</h4>
<ol class="work">
<li>A vector equation needs a position vector and a direction vector, and you have both: \(\vec r_0 = (4, -1)\) and \(\vec m = (3, 2)\). Substitute them into \(\vec r = \vec r_0 + t\vec m\).</li>
</ol>
<p class="answer">\(\vec r = (4, -1) + t(3, 2),\ t \in \mathbb{R}\)</p>
<h4>b) The parametric equations</h4>
<ol class="work">
<li>Split the vector equation into its x- and y-components: \(x\) comes from the first components, \(y\) from the second.</li>
</ol>
<p class="answer">\(x = 4 + 3t,\quad y = -1 + 2t,\quad t \in \mathbb{R}\)</p>
<h4>c) The Cartesian equation</h4>
<ol class="work">
<li>The Cartesian equation needs a normal, not a direction vector. Switch the components of \(\vec m = (3, 2)\) and change one sign. You want \(A > 0\), so choose \(\vec n = (2, -3)\) rather than \((-2, 3)\). Check: \((3, 2) \cdot (2, -3) = 6 - 6 = 0\).</li>
<li>Write the form from the normal: \(2x - 3y + C = 0\).</li>
<li>Substitute \(P_0(4, -1)\) to find \(C\): \(2(4) - 3(-1) + C = 0\), so \(8 + 3 + C = 0\) and \(C = -11\).</li>
</ol>
<p class="answer">\(\therefore\ 2x - 3y - 11 = 0\)</p></div>
<p>Check: \(2(4) - 3(-1) - 11 = 8 + 3 - 11 = 0\ \checkmark\). A good habit is to check one more point from the parametric equations: \(t = 1\) gives (7, 1), and \(2(7) - 3(1) - 11 = 0\ \checkmark\).</p>

<h3 data-tier="essential">The symmetric equation</h3>
<p>There is a second route to the Cartesian equation that avoids normals entirely: eliminate the parameter. Using the parametric equations, you can create the <span class="term">symmetric equation</span> and use that to create the Cartesian equation. The notes draw an arrow from Example 3b straight to this method.</p>
<div class="example"><p class="example-title">Example 3c again · From the parametric equations \(x = 4 + 3t,\ y = -1 + 2t\)</p>
<ol class="work">
<li>Solve the x-equation for \(t\), because both equations share the same \(t\) for a given point: \(x = 4 + 3t \Rightarrow x - 4 = 3t \Rightarrow \dfrac{x - 4}{3} = t\).</li>
<li>Solve the y-equation for \(t\): \(y = -1 + 2t \Rightarrow y + 1 = 2t \Rightarrow \dfrac{y + 1}{2} = t\).</li>
<li>Equate them, since both expressions equal the same \(t\). This is the symmetric equation: \(\dfrac{x - 4}{3} = \dfrac{y + 1}{2}\).</li>
<li>Cross-multiply to clear the fractions: \(2(x - 4) = 3(y + 1)\).</li>
<li>Expand: \(2x - 8 = 3y + 3\).</li>
<li>Move every term to one side with \(A > 0\): \(2x - 3y - 11 = 0\).</li>
</ol>
<p class="answer">\(\therefore\ \dfrac{x - 4}{3} = \dfrac{y + 1}{2}\) (symmetric), and \(2x - 3y - 11 = 0\) (Cartesian), the same answer as before</p></div>
<div class="callout key"><p class="callout-title">Symmetric equation of a line in R²</p>
<div class="eq">\[ \frac{x - x_0}{a} = \frac{y - y_0}{b}, \qquad a \ne 0,\ b \ne 0 \]</div>
<p>Here \((x_0, y_0)\) is a point on the line and \(\vec m = (a, b)\) is a direction vector. It is called symmetric because \(x\) and \(y\) play identical roles.</p></div>
<div class="callout warn"><p class="callout-title">Reading a symmetric equation</p><ul>
<li>The numerators give the point with the <em>signs flipped</em>: \(\frac{x + 4}{-5}\) means \(x_0 = -4\), because \(x + 4 = x - (-4)\).</li>
<li>The denominators give the direction vector, signs included: \(\frac{x + 4}{-5} = \frac{y - 11}{3}\) has \(\vec m = (-5, 3)\).</li>
<li>The variable must come first in each numerator. If you meet \(\frac{2 - y}{4}\), rewrite it as \(\frac{y - 2}{-4}\) before reading anything off.</li>
<li>If \(a = 0\) or \(b = 0\) you cannot divide by it, so there is no symmetric equation of this form. See "Special cases" below.</li>
</ul></div>
<details class="check"><summary>Write the symmetric and Cartesian equations of the line \(x = -1 + 5t,\ y = 6 - 2t\).</summary><div class="ans"><p>Solve each for \(t\): \(\frac{x + 1}{5} = t\) and \(\frac{y - 6}{-2} = t\), so the symmetric equation is \(\frac{x + 1}{5} = \frac{y - 6}{-2}\). Cross-multiply: \(-2(x + 1) = 5(y - 6)\), so \(-2x - 2 = 5y - 30\), which rearranges to \(2x + 5y - 28 = 0\). Check with the point (−1, 6): \(-2 + 30 - 28 = 0\).</p></div></details>

<h3 data-tier="essential">Going backwards: from Ax + By + C = 0 to the other forms</h3>
<p>Worksheet questions 4 and 9 run the conversion in reverse. From a Cartesian equation you can read three things:</p>
<ul>
<li><strong>A normal vector:</strong> the coefficients, \(\vec n = (A, B)\).</li>
<li><strong>A direction vector:</strong> switch and change one sign of the normal, \(\vec m = (B, -A)\) or \((-B, A)\). This works for the same reason as before: the direction must be perpendicular to the normal.</li>
<li><strong>A point:</strong> choose a convenient value for one variable (often \(x = 0\) or \(y = 0\)) and solve for the other.</li>
</ul>
<div class="example"><p class="example-title">Worksheet 9a · Find vector, parametric and symmetric equations of \(5x - 3y + 15 = 0\)</p>
<ol class="work">
<li>Read the normal from the coefficients: \(\vec n = (5, -3)\).</li>
<li>Switch and change one sign to get a direction vector: \(\vec m = (3, 5)\). Check: \((5, -3) \cdot (3, 5) = 15 - 15 = 0\).</li>
<li>Find a point. Let \(x = 0\) because it removes a term: \(-3y + 15 = 0\), so \(y = 5\) and \(P_0(0, 5)\).</li>
<li>Assemble the vector equation from the point and the direction: \(\vec r = (0, 5) + t(3, 5),\ t \in \mathbb{R}\).</li>
<li>Split into components for the parametric equations: \(x = 3t,\ y = 5 + 5t\).</li>
<li>Solve each for \(t\) and equate for the symmetric equation: \(\frac{x}{3} = \frac{y - 5}{5}\).</li>
</ol>
<p class="answer">\(\vec r = (0, 5) + t(3, 5),\ t \in \mathbb{R};\quad x = 3t,\ y = 5 + 5t;\quad \dfrac{x}{3} = \dfrac{y - 5}{5}\)</p></div>
<div class="callout tip"><p class="callout-title">Put the equation in Ax + By + C = 0 form first</p><p>For \(3x - 6y = 14\), the normal is still \((3, -6)\), since moving the 14 across does not change the coefficients. For \(y = 3x - 10\), rearrange to \(3x - y - 10 = 0\) before reading the normal: it is \((3, -1)\), not \((3, 1)\). Sign errors here are the most common mistake on this question type.</p></div>
<p>Answers to these questions are not unique. Different points, and different multiples of the vectors, are all correct. To check an answer that differs from the key, confirm that your point satisfies the equation and that your \(\vec m\) is perpendicular to \(\vec n\).</p>
<details class="check"><summary>Find a normal, a direction vector and a point for \(2x + 5y - 10 = 0\), then write a vector equation.</summary><div class="ans"><p>\(\vec n = (2, 5)\); \(\vec m = (5, -2)\) (check: \(10 - 10 = 0\)); let \(x = 0\): \(5y = 10\), so \(P_0(0, 2)\). Vector equation: \(\vec r = (0, 2) + t(5, -2),\ t \in \mathbb{R}\).</p></div></details>

<h3 data-tier="likely">Parallel and perpendicular lines</h3>
<p>Because the normal vector records which way a line faces, comparing normals is the fastest way to compare lines. The unit review sheet states the rules for direction vectors; for lines in R² the same rules hold for normals.</p>
<div class="compare"><div><h4>Parallel lines</h4><p>Normals are scalar multiples: \(\vec n_1 = k\vec n_2\). So a line parallel to \(Ax + By + C = 0\) has the <em>same</em> \(A\) and \(B\); only \(C\) changes.</p></div><div><h4>Perpendicular lines</h4><p>Normals are perpendicular: \(\vec n_1 \cdot \vec n_2 = 0\). The normal of one line is a direction vector of the other, so switch and change one sign of the old normal to get the new one.</p></div></div>
<div class="example"><p class="example-title">Worksheet 7a · The line through (2, −6) parallel to \(2x - 3y + 8 = 0\)</p>
<ol class="work">
<li>Parallel lines can share a normal, so keep \(\vec n = (2, -3)\): \(2x - 3y + C = 0\).</li>
<li>The new line must pass through (2, −6), so substitute it: \(2(2) - 3(-6) + C = 0\), giving \(4 + 18 + C = 0\) and \(C = -22\).</li>
</ol>
<p class="answer">\(\therefore\ 2x - 3y - 22 = 0\)</p></div>
<div class="example"><p class="example-title">Worksheet 7b · The line through (2, −6) perpendicular to \(3x - 2y + 12 = 0\)</p>
<ol class="work">
<li>Read the given line's normal: \(\vec n_1 = (3, -2)\).</li>
<li>The new line's normal must be perpendicular to \(\vec n_1\), so switch and change one sign: \(\vec n_2 = (2, 3)\). Check: \((3, -2) \cdot (2, 3) = 6 - 6 = 0\).</li>
<li>Write the form and substitute (2, −6): \(2x + 3y + C = 0\), so \(4 - 18 + C = 0\) and \(C = 14\).</li>
</ol>
<p class="answer">\(\therefore\ 2x + 3y + 14 = 0\)</p></div>
<p><span class="term">Coincident lines</span> are the same line written differently. Two Cartesian equations describe the same line when one is a multiple of the other <em>including</em> \(C\): \(2x - 3y + 8 = 0\) and \(-4x + 6y - 16 = 0\) are coincident, while \(2x - 3y + 8 = 0\) and \(-4x + 6y - 1 = 0\) are parallel and distinct.</p>
<details class="check"><summary>Find the line through (−1, 4) perpendicular to \(x + 5y - 2 = 0\).</summary><div class="ans"><p>\(\vec n_1 = (1, 5)\), so \(\vec n_2 = (5, -1)\). Then \(5x - y + C = 0\) with (−1, 4): \(-5 - 4 + C = 0\), so \(C = 9\). Answer: \(5x - y + 9 = 0\). Check: \((1, 5) \cdot (5, -1) = 0\).</p></div></details>

<h3 data-tier="likely">Special cases: zero components and lines through the origin</h3>
<p>The method never changes, but a zero component produces a line that looks unusual.</p>
<ul>
<li><strong>Vertical lines.</strong> \(x = 5\) is \(1x + 0y - 5 = 0\), so \(\vec n = (1, 0)\) and \(\vec m = (0, 1)\). Any point with \(x = 5\) works; the teacher used \(P_0(5, -3)\) (worksheet 4c).</li>
<li><strong>Horizontal lines.</strong> For \(x = 2t,\ y = -2\), the direction is \(\vec m = (2, 0)\), so \(\vec n = (0, 2)\) or \((0, 1)\). Then \(y + C = 0\) with \(y = -2\) gives \(C = 2\): the line is \(y + 2 = 0\) (worksheet 6d).</li>
<li><strong>A zero in the given normal.</strong> With \(\vec n = (-4, 0)\) through \((\frac{1}{2}, 2)\): \(-4x + C = 0\), so \(-2 + C = 0\), \(C = 2\), and the line is \(-4x + 2 = 0\), that is \(2x - 1 = 0\) (worksheet 3b). The y-coordinate of the point never enters, because \(B = 0\).</li>
<li><strong>No symmetric equation when a component of \(\vec m\) is 0.</strong> You cannot divide by zero, so write a mix of parametric and symmetric pieces, as the unit review sheet notes. For the line through (2, 1) with \(\vec m = (0, 3)\): \(x = 2\) and \(\frac{y - 1}{3} = t\). In R² the Cartesian equation \(x - 2 = 0\) says it all.</li>
<li><strong>Lines through the origin.</strong> The origin satisfies \(Ax + By + C = 0\) exactly when \(C = 0\). So \(7x - 2y = 0\) (worksheet 6c) and \(x - y = 0\) (worksheet 3d) both pass through (0, 0).</li>
</ul>
<figure class="diagram narrow"><svg viewBox="0 0 460 300" role="img" aria-labelledby="d32-special"><title id="d32-special">The vertical line x = 5 with direction (0, 1) and normal (1, 0), and the horizontal line y = −2 with direction (1, 0) and normal (0, 1).</title>
<line class="s-mute" x1="30" y1="160" x2="440" y2="160" stroke-width="1.5"/>
<line class="s-mute" x1="100" y1="290" x2="100" y2="20" stroke-width="1.5"/>
<text class="t-mute" x="444" y="165" font-size="14">x</text>
<text class="t-mute" x="106" y="24" font-size="14">y</text>
<text class="t-mute" x="94" y="213" font-size="13" text-anchor="end">−2</text>
<text class="t-mute" x="243" y="176" font-size="13" text-anchor="end">5</text>
<line class="s-blue" x1="250" y1="20" x2="250" y2="290" stroke-width="2"/>
<text class="t-blue" x="258" y="34" font-size="14">x = 5</text>
<line class="s-amber" x1="30" y1="220" x2="440" y2="220" stroke-width="2"/>
<text class="t-amber" x="436" y="210" font-size="14" text-anchor="end">y = −2</text>
<line class="s-teal" x1="250" y1="100" x2="250" y2="62" stroke-width="3"/>
<polygon class="f-teal" points="250,52 245,62 255,62"/>
<text class="t-teal" x="242" y="70" font-size="14" font-style="italic" text-anchor="end">m = (0, 1)</text>
<line class="s-magenta" x1="250" y1="100" x2="288" y2="100" stroke-width="3"/>
<polygon class="f-magenta" points="298,100 288,95 288,105"/>
<text class="t-magenta" x="304" y="105" font-size="14" font-style="italic">n = (1, 0)</text>
<polyline class="s-ink" points="250,90 260,90 260,100" stroke-width="1.5"/>
<circle class="f-ink" cx="250" cy="100" r="4"/>
<line class="s-teal" x1="145" y1="220" x2="183" y2="220" stroke-width="3"/>
<polygon class="f-teal" points="193,220 183,215 183,225"/>
<text class="t-teal" x="170" y="242" font-size="14" font-style="italic" text-anchor="middle">m = (1, 0)</text>
<line class="s-magenta" x1="145" y1="220" x2="145" y2="182" stroke-width="3"/>
<polygon class="f-magenta" points="145,172 140,182 150,182"/>
<text class="t-magenta" x="153" y="186" font-size="14" font-style="italic">n = (0, 1)</text>
<polyline class="s-ink" points="145,210 155,210 155,220" stroke-width="1.5"/>
<circle class="f-ink" cx="145" cy="220" r="4"/>
</svg><figcaption>A vertical line has a horizontal normal, and a horizontal line has a vertical normal. Slopes cannot describe the vertical case; vectors handle both the same way.</figcaption></figure>

<h3 data-tier="essential">Summary, common mistakes and what comes next</h3>
<p>Here is the line from Example 3 in all four forms, and what each form tells you directly.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Form</th><th>Example 3 line</th><th>Read off directly</th></tr></thead><tbody>
<tr><th>Vector</th><td>\(\vec r = (4, -1) + t(3, 2),\ t \in \mathbb{R}\)</td><td>point (4, −1), direction (3, 2)</td></tr>
<tr><th>Parametric</th><td>\(x = 4 + 3t,\ y = -1 + 2t,\ t \in \mathbb{R}\)</td><td>point (4, −1), direction (3, 2)</td></tr>
<tr><th>Symmetric</th><td>\(\dfrac{x - 4}{3} = \dfrac{y + 1}{2}\)</td><td>point (flip the signs), direction (denominators)</td></tr>
<tr><th>Cartesian</th><td>\(2x - 3y - 11 = 0\)</td><td>normal (2, −3); find a point by choosing \(x\) or \(y\)</td></tr>
</tbody></table></div>
<div class="table-wrap"><table class="data"><thead><tr><th>To go from</th><th>Do this</th></tr></thead><tbody>
<tr><th>Vector to parametric</th><td>Write the x- and y-components separately.</td></tr>
<tr><th>Parametric to symmetric</th><td>Solve each equation for \(t\) and equate.</td></tr>
<tr><th>Symmetric to Cartesian</th><td>Cross-multiply, expand, move everything to one side with \(A > 0\).</td></tr>
<tr><th>Point and direction to Cartesian</th><td>Switch and change one sign of \(\vec m\) to get \(\vec n\); write \(Ax + By + C = 0\); substitute the point for \(C\).</td></tr>
<tr><th>Cartesian to the others</th><td>\(\vec n = (A, B)\); switch and change one sign for \(\vec m\); let \(x = 0\) (or another value) for a point.</td></tr>
</tbody></table></div>
<div class="callout warn"><p class="callout-title">Common mistakes</p><ul>
<li>Using the direction vector as \((A, B)\). The coefficients are the <em>normal</em>, which is perpendicular to the line.</li>
<li>Getting the sign of \(C\) wrong. Do not memorize \(C = -Ax_0 - By_0\); substitute the point and solve, then check by substituting again.</li>
<li>Reading the point from a symmetric equation without flipping the signs.</li>
<li>Reading the normal from \(y = 3x - 10\) without first rearranging to \(3x - y - 10 = 0\).</li>
<li>Leaving \(A\) negative, or leaving a common factor or fraction in the final answer.</li>
<li>Forgetting \(t \in \mathbb{R}\) on vector and parametric equations. The Cartesian and symmetric forms have no parameter, so they need none.</li>
</ul></div>
<p><strong>What comes next.</strong> In 3.3 the vector, parametric and symmetric forms extend to R³ by adding a z-component, but a line in R³ has no Cartesian equation: in R³, the same derivation \(\overrightarrow{P_0P} \cdot \vec n = 0\) produces \(Ax + By + Cz + D = 0\), which is a plane (lesson 3.7). In 3.4 the normal vector gives the shortest distance from a point to a line, \(d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\).</p>
`
});

window.QA.push({
  id: "qa-32", lesson: "3.2",
  title: "3.2 Worksheet: Cartesian Equation of a Line in R²",
  source: "C - Worksheet (questions) and D - Worksheet Solutions (teacher's answers)",
  items: [
    { tier: "essential",
      q: String.raw`<strong>3a.</strong> Find the scalar equation of the line that passes through the point \(P_0(4, -2)\) and has normal vector \(\vec n = (2, 7)\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a normal · <strong>Plan:</strong> "Scalar equation" means \(Ax + By + C = 0\). The normal hands you \(A\) and \(B\) directly, so the only unknown is \(C\), which you find by making the given point satisfy the equation.</p>
<p>The normal \(\vec n = (2, 7)\) gives \(A = 2,\ B = 7\), so the equation has the form \(2x + 7y + C = 0\). Substitute \(P_0(4, -2)\), since it lies on the line:</p>
\[ \begin{aligned} 2(4) + 7(-2) + C &= 0 \\ 8 - 14 + C &= 0 \\ C &= 6 \end{aligned} \]
<p class="answer">\(\therefore\ 2x + 7y + 6 = 0\)</p>` },
    { tier: "likely",
      q: String.raw`<strong>3b.</strong> Find the scalar equation of the line that passes through the point \(P_0\left(\tfrac{1}{2}, 2\right)\) and has normal vector \(\vec n = (-4, 0)\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a normal (zero component) · <strong>Plan:</strong> Same method as 3a. The zero in the normal means the \(y\) term disappears, so expect a vertical line; finish by clearing the fraction and making \(A > 0\).</p>
<p>The normal gives \(A = -4,\ B = 0\): \(-4x + 0y + C = 0\). Substitute \(P_0\left(\frac{1}{2}, 2\right)\); the y-coordinate is multiplied by 0, so only \(x\) matters:</p>
\[ \begin{aligned} -4\left(\tfrac{1}{2}\right) + C &= 0 \\ -2 + C &= 0 \\ C &= 2 \end{aligned} \]
<p>This gives \(-4x + 2 = 0\). Multiply by \(-1\) so \(A > 0\): \(4x - 2 = 0\). Every coefficient is even, so divide by 2.</p>
<p class="answer">\(\therefore\ 4x - 2 = 0\), or in lowest terms \(2x - 1 = 0\) (the vertical line \(x = \tfrac{1}{2}\))</p>`,
      note: String.raw`The teacher boxes both \(4x - 2 = 0\) and \(2x - 1 = 0\); the answer key gives \(2x - 1 = 0\).` },
    { tier: "essential",
      q: String.raw`<strong>3c.</strong> Find the scalar equation of the line that passes through the point \(P_0(3, 3)\) and has normal vector \(\vec n = (1, 1)\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a normal · <strong>Plan:</strong> Write \(A\) and \(B\) from the normal, then substitute the point to find \(C\).</p>
<p>The normal \((1, 1)\) gives \(x + y + C = 0\). Substitute \(P_0(3, 3)\):</p>
\[ \begin{aligned} 3 + 3 + C &= 0 \\ C &= -6 \end{aligned} \]
<p class="answer">\(\therefore\ x + y - 6 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>3d.</strong> Find the scalar equation of the line that passes through the point \(P_0\left(\tfrac{1}{3}, \tfrac{1}{3}\right)\) and has normal vector \(\vec n = (-1, 1)\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a normal · <strong>Plan:</strong> Same method; the fractions cancel, and the final step is making \(A > 0\).</p>
<p>The normal \((-1, 1)\) gives \(-x + y + C = 0\). Substitute \(P_0\left(\frac{1}{3}, \frac{1}{3}\right)\):</p>
\[ \begin{aligned} -\tfrac{1}{3} + \tfrac{1}{3} + C &= 0 \\ C &= 0 \end{aligned} \]
<p>So \(-x + y = 0\). Multiply by \(-1\) so the equation does not start with a negative.</p>
<p class="answer">\(\therefore\ x - y = 0\)</p>`,
      note: String.raw`\(C = 0\) means the line passes through the origin. It is the line \(y = x\).` },
    { tier: "essential",
      q: String.raw`<strong>4a.</strong> Find a normal vector, a direction vector, and a point on the line \(4x + 3y - 12 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Reading a Cartesian equation backwards · <strong>Plan:</strong> The coefficients are the normal. A direction vector is perpendicular to the normal (switch and change one sign). A point is any pair \((x, y)\) that satisfies the equation, found by choosing a convenient \(x\).</p>
<ol class="work">
<li>Normal from the coefficients of \(x\) and \(y\): \(\vec n = (4, 3)\).</li>
<li>Direction: switch the components and change one sign: \(\vec m = (3, -4)\). Check: \(\vec n \cdot \vec m = 12 - 12 = 0\ \checkmark\)</li>
<li>Point: let \(x = 0\) because it removes a term: \(3y - 12 = 0\), so \(y = 4\).</li>
</ol>
<p class="answer">\(\vec n = (4, 3),\ \vec m = (3, -4),\ P_0(0, 4)\)</p>`,
      note: String.raw`The answer key gives the point \(P(3, 0)\), from letting \(y = 0\) instead. Any point that satisfies the equation is correct, and any non-zero multiple of the vectors is correct.` },
    { tier: "essential",
      q: String.raw`<strong>4b.</strong> Find a normal vector, a direction vector, and a point on the line \(3x - 6y = 14\).`,
      a: String.raw`<p><strong>Type:</strong> Reading a Cartesian equation backwards · <strong>Plan:</strong> The constant is on the right side, but moving it across (\(3x - 6y - 14 = 0\)) does not change the coefficients, so the normal is still read straight off.</p>
<ol class="work">
<li>Normal: \(\vec n = (3, -6)\) (or \((1, -2)\) after dividing by 3).</li>
<li>Direction: switch and change one sign: \(\vec m = (6, 3)\) (or \((2, 1)\)). Check: \((3, -6) \cdot (6, 3) = 18 - 18 = 0\ \checkmark\)</li>
<li>Point: let \(x = 1\): \(3(1) - 6y = 14\), so \(-6y = 11\) and \(y = -\frac{11}{6}\).</li>
</ol>
<p class="answer">\(\vec n = (3, -6),\ \vec m = (6, 3),\ P_0\left(1, -\tfrac{11}{6}\right)\)</p>`,
      note: String.raw`The answer key lets \(y = 0\) instead and gets \(P\left(\frac{14}{3}, 0\right)\), with \(\vec n = (1, -2)\) and \(\vec d = (2, 1)\). Both are correct: \(3\left(\frac{14}{3}\right) - 0 = 14\) and \(3(1) - 6\left(-\frac{11}{6}\right) = 3 + 11 = 14\).` },
    { tier: "likely",
      q: String.raw`<strong>4c.</strong> Find a normal vector, a direction vector, and a point on the line \(x = 5\).`,
      a: String.raw`<p><strong>Type:</strong> Reading a Cartesian equation backwards (vertical line) · <strong>Plan:</strong> Rewrite \(x = 5\) as \(1x + 0y - 5 = 0\) so the missing \(y\) term becomes a 0 coefficient, then read off as usual.</p>
<ol class="work">
<li>Normal: \(\vec n = (1, 0)\), pointing horizontally, perpendicular to the vertical line.</li>
<li>Direction: switch and change one sign: \(\vec m = (0, 1)\), pointing straight up the line. Check: \((1, 0) \cdot (0, 1) = 0\ \checkmark\)</li>
<li>Point: every point on the line has \(x = 5\), and \(y\) can be anything, so take \(P_0(5, -3)\).</li>
</ol>
<p class="answer">\(\vec n = (1, 0),\ \vec m = (0, 1),\ P_0(5, -3)\)</p>`,
      note: String.raw`The teacher sketches the vertical line with \(\vec n\) pointing right and \(\vec m\) pointing up. The answer key uses \(P(5, 6)\); any point with \(x = 5\) is correct.` },
    { tier: "essential",
      q: String.raw`<strong>4d.</strong> Find a normal vector, a direction vector, and a point on the line \(y = 3x - 10\).`,
      a: String.raw`<p><strong>Type:</strong> Reading a Cartesian equation backwards (from slope–intercept form) · <strong>Plan:</strong> First rearrange into \(Ax + By + C = 0\) so the signs of the coefficients are right, then read off the normal, the direction and a point.</p>
<ol class="work">
<li>Move every term to the right side: \(0 = 3x - y - 10\).</li>
<li>Normal: \(\vec n = (3, -1)\). Note the \(-1\): the \(y\) moved across the equals sign.</li>
<li>Direction: switch and change one sign: \(\vec m = (1, 3)\). This matches the slope 3 (run 1, rise 3). Check: \((3, -1) \cdot (1, 3) = 3 - 3 = 0\ \checkmark\)</li>
<li>Point: let \(y = 2\): \(2 = 3x - 10\), so \(12 = 3x\) and \(x = 4\).</li>
</ol>
<p class="answer">\(\vec n = (3, -1),\ \vec m = (1, 3),\ P_0(4, 2)\)</p>`,
      note: String.raw`The answer key uses \(P(2, -4)\). Both satisfy \(y = 3x - 10\).` },
    { tier: "likely",
      q: String.raw`<strong>5.</strong> Prove that both \((-b, a)\) and \((b, -a)\) are perpendicular to \((a, b)\) for all \(a\) and \(b\).`,
      a: String.raw`<p><strong>Type:</strong> Proof (the switch-and-change-sign shortcut) · <strong>Plan:</strong> Two vectors are perpendicular exactly when their dot product is 0, so compute each dot product with letters and show it simplifies to 0 no matter what \(a\) and \(b\) are.</p>
<p>If two vectors are perpendicular, their dot product is 0. Compute each one:</p>
\[ \begin{aligned} (-b, a) \cdot (a, b) &= -ab + ab = 0 \\ (b, -a) \cdot (a, b) &= ab - ab = 0 \end{aligned} \]
<p>Both dot products equal 0 for every choice of \(a\) and \(b\), because the two products are always equal in size and opposite in sign.</p>
<p class="answer">\(\therefore\ (-b, a) \perp (a, b)\) and \((b, -a) \perp (a, b)\) for all \(a, b \in \mathbb{R}\)</p>`,
      note: String.raw`This is the proof behind the shortcut "switch the components and change one sign". Strictly, a normal must be non-zero, which is automatic whenever \((a, b) \ne (0, 0)\).` },
    { tier: "essential",
      q: String.raw`<strong>6a.</strong> Find the Cartesian equation of the line \((x, y) = (4, -6) + t(8, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Vector equation to Cartesian equation · <strong>Plan:</strong> The vector equation gives a point and a direction. Turn the direction into a normal (switch and change one sign), simplify it, then substitute the point for \(C\).</p>
<ol class="work">
<li>Read off \(\vec m = (8, 2)\) and the point \((4, -6)\).</li>
<li>Normal: switch and change one sign: \(\vec n = (2, -8)\). Divide by 2 for smaller numbers: \(\vec n = (1, -4)\).</li>
<li>Form: \(x - 4y + C = 0\). Substitute \((4, -6)\):</li>
</ol>
\[ \begin{aligned} 4 - 4(-6) + C &= 0 \\ 4 + 24 + C &= 0 \\ C &= -28 \end{aligned} \]
<p class="answer">\(\therefore\ x - 4y - 28 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>6b.</strong> Find the Cartesian equation of the line \(x = 3 + 18t,\ y = 4 + 9t\).`,
      a: String.raw`<p><strong>Type:</strong> Parametric equations to Cartesian equation · <strong>Plan:</strong> The coefficients of \(t\) form the direction vector and the constants form a point; then proceed as in 6a.</p>
<ol class="work">
<li>Read off \(\vec m = (18, 9)\) and the point \((3, 4)\).</li>
<li>Normal: \(\vec n = (9, -18)\), or dividing by 9, \(\vec n = (1, -2)\).</li>
<li>Form: \(x - 2y + C = 0\). Substitute \((3, 4)\):</li>
</ol>
\[ \begin{aligned} 3 - 2(4) + C &= 0 \\ 3 - 8 + C &= 0 \\ C &= 5 \end{aligned} \]
<p class="answer">\(\therefore\ x - 2y + 5 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>6c.</strong> Find the Cartesian equation of the line \(\vec r = (2, 7) + t(2, 7)\).`,
      a: String.raw`<p><strong>Type:</strong> Vector equation to Cartesian equation · <strong>Plan:</strong> Same method. The point and the direction vector happen to be the same vector, which is a hint that the line passes through the origin.</p>
<ol class="work">
<li>\(\vec m = (2, 7)\), point \((2, 7)\).</li>
<li>Normal: switch and change one sign: \(\vec n = (7, -2)\).</li>
<li>Form: \(7x - 2y + C = 0\). Substitute \((2, 7)\):</li>
</ol>
\[ \begin{aligned} 7(2) - 2(7) + C &= 0 \\ 14 - 14 + C &= 0 \\ C &= 0 \end{aligned} \]
<p class="answer">\(\therefore\ 7x - 2y = 0\)</p>`,
      note: String.raw`\(C = 0\) confirms the line passes through the origin: \(t = -1\) gives \((2, 7) - (2, 7) = (0, 0)\).` },
    { tier: "likely",
      q: String.raw`<strong>6d.</strong> Find the Cartesian equation of the line \(x = 2t,\ y = -2\).`,
      a: String.raw`<p><strong>Type:</strong> Parametric equations to Cartesian equation (horizontal line) · <strong>Plan:</strong> \(y\) has no \(t\) term, so its direction component is 0. Write the parametric equations as \(x = 0 + 2t,\ y = -2 + 0t\) to read off the point and direction, then proceed as usual.</p>
<ol class="work">
<li>\(\vec m = (2, 0)\), point \((0, -2)\).</li>
<li>Normal: \(\vec n = (0, 2)\), or more simply \(\vec n = (0, 1)\).</li>
<li>Form: \(0x + 1y + C = 0\), that is \(y + C = 0\). Substitute \(y = -2\):</li>
</ol>
\[ \begin{aligned} (-2) + C &= 0 \\ C &= 2 \end{aligned} \]
<p class="answer">\(\therefore\ y + 2 = 0\)</p>`,
      note: String.raw`This is the horizontal line \(y = -2\), which you could also see directly: \(y\) is always \(-2\).` },
    { tier: "likely",
      q: String.raw`<strong>7a.</strong> Find the scalar equation of the line that passes through \((2, -6)\) and is parallel to \(2x - 3y + 8 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Parallel line through a point · <strong>Plan:</strong> Parallel lines face the same way, so they can share a normal. Keep \(A\) and \(B\), and find a new \(C\) from the new point.</p>
<p>Since the lines are parallel, use the same normal \(\vec n = (2, -3)\): \(2x - 3y + C = 0\). Substitute \((2, -6)\):</p>
\[ \begin{aligned} 2(2) - 3(-6) + C &= 0 \\ 4 + 18 + C &= 0 \\ C &= -22 \end{aligned} \]
<p class="answer">\(\therefore\ 2x - 3y - 22 = 0\)</p>` },
    { tier: "likely",
      q: String.raw`<strong>7b.</strong> Find the scalar equation of the line that passes through \((2, -6)\) and is perpendicular to \(3x - 2y + 12 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Perpendicular line through a point · <strong>Plan:</strong> Perpendicular lines have perpendicular normals. Take the given line's normal, switch and change one sign to get the new normal, then substitute the point.</p>
<ol class="work">
<li>Given line: \(\vec n_1 = (3, -2)\).</li>
<li>New normal, perpendicular to \(\vec n_1\): \(\vec n_2 = (2, 3)\). Check: \((3, -2) \cdot (2, 3) = 6 - 6 = 0\ \checkmark\)</li>
<li>Form: \(2x + 3y + C = 0\). Substitute \((2, -6)\):</li>
</ol>
\[ \begin{aligned} 2(2) + 3(-6) + C &= 0 \\ 4 - 18 + C &= 0 \\ C &= 14 \end{aligned} \]
<p class="answer">\(\therefore\ 2x + 3y + 14 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>7c.</strong> Find the scalar equation of the line that passes through \((2, -6)\) and has a direction vector \((2, -3)\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a direction · <strong>Plan:</strong> The Cartesian form needs a normal, so convert the direction vector first (switch and change one sign, keeping \(A > 0\)), then substitute the point.</p>
<ol class="work">
<li>\(\vec m = (2, -3)\), so \(\vec n = (3, 2)\). Check: \(6 - 6 = 0\ \checkmark\)</li>
<li>Form: \(3x + 2y + C = 0\). Substitute \((2, -6)\):</li>
</ol>
\[ \begin{aligned} 3(2) + 2(-6) + C &= 0 \\ 6 - 12 + C &= 0 \\ C &= 6 \end{aligned} \]
<p class="answer">\(\therefore\ 3x + 2y + 6 = 0\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>7d.</strong> Find the scalar equation of the line that passes through \((2, -6)\) and has a normal vector \((3, -2)\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation from a point and a normal · <strong>Plan:</strong> The normal gives \(A\) and \(B\) directly; substitute the point for \(C\). Do not switch anything: this vector is already the normal.</p>
<p>\(\vec n = (3, -2)\): \(3x - 2y + C = 0\). Substitute \((2, -6)\):</p>
\[ \begin{aligned} 3(2) - 2(-6) + C &= 0 \\ 6 + 12 + C &= 0 \\ C &= -18 \end{aligned} \]
<p class="answer">\(\therefore\ 3x - 2y - 18 = 0\)</p>`,
      note: String.raw`Compare 7c and 7d: the same numbers used as a direction vector or as a normal give different lines. Always ask which one you have been given.` },
    { tier: "essential",
      q: String.raw`<strong>8.</strong> Find the scalar equation of the line through \((8, -2)\) that is parallel to the line \(x = -4 - 5t,\ y = 11 + 3t\) by first finding the symmetric equation of this line, and then simplifying it.`,
      a: String.raw`<p><strong>Type:</strong> Symmetric equation to Cartesian equation (parallel line) · <strong>Plan:</strong> A parallel line has the same direction vector. Write parametric equations for the new line through \((8, -2)\), solve each for the parameter, equate (symmetric form), then cross-multiply.</p>
<ol class="work">
<li>Parallel to the given line, so use its direction vector: \(\vec m = (-5, 3)\).</li>
<li>Parametric equations of the new line, using a new parameter \(s\): \(x = 8 - 5s,\ y = -2 + 3s\).</li>
<li>Solve each for \(s\): \(\dfrac{x - 8}{-5} = s\) and \(\dfrac{y + 2}{3} = s\).</li>
<li>Equate them to get the symmetric equation: \(\dfrac{x - 8}{-5} = \dfrac{y + 2}{3}\).</li>
<li>Cross-multiply and simplify:</li>
</ol>
\[ \begin{aligned} 3(x - 8) &= -5(y + 2) \\ 3x - 24 &= -5y - 10 \\ 3x + 5y - 14 &= 0 \end{aligned} \]
<p class="answer">\(\therefore\) symmetric: \(\dfrac{x - 8}{-5} = \dfrac{y + 2}{3}\); scalar: \(3x + 5y - 14 = 0\)</p>`,
      note: String.raw`Check: \(3(8) + 5(-2) - 14 = 0\), and the normal \((3, 5)\) is perpendicular to \((-5, 3)\): \(-15 + 15 = 0\).` },
    { tier: "essential",
      q: String.raw`<strong>9a.</strong> (Part B) Find vector, parametric, and symmetric equations of the line \(5x - 3y + 15 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation to vector, parametric and symmetric · <strong>Plan:</strong> Every one of the target forms needs a point and a direction vector. Get the direction from the normal (switch and change one sign) and a point by letting \(x = 0\), then build each form.</p>
<ol class="work">
<li>Normal: \(\vec n = (5, -3)\). Direction: \(\vec m = (3, 5)\). Check: \(15 - 15 = 0\ \checkmark\)</li>
<li>Point: let \(x = 0\): \(-3y + 15 = 0\), so \(y = 5\) and \(P_0(0, 5)\).</li>
<li>Vector equation: \(\vec r = (0, 5) + t(3, 5),\ t \in \mathbb{R}\).</li>
<li>Parametric: \(x = 3t,\ y = 5 + 5t,\ t \in \mathbb{R}\).</li>
<li>Symmetric: solve each for \(t\) and equate: \(\dfrac{x}{3} = \dfrac{y - 5}{5}\).</li>
</ol>
<p class="answer">\(\vec r = (0, 5) + t(3, 5),\ t \in \mathbb{R};\quad x = 3t,\ y = 5 + 5t;\quad \dfrac{x}{3} = \dfrac{y - 5}{5}\)</p>` },
    { tier: "likely",
      q: String.raw`<strong>9b.</strong> (Part B) Find vector, parametric, and symmetric equations of the line \(-4x + 6y + 9 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Cartesian equation to vector, parametric and symmetric · <strong>Plan:</strong> Same as 9a. Simplify the direction vector, and expect a fractional point because 9 is not a multiple of 6.</p>
<ol class="work">
<li>Normal: \(\vec n = (-4, 6)\). Direction: switch and change one sign: \(\vec m = (6, 4)\), or dividing by 2, \((3, 2)\). Check: \((-4, 6) \cdot (3, 2) = -12 + 12 = 0\ \checkmark\)</li>
<li>Point: let \(x = 0\): \(6y + 9 = 0\), so \(y = -\frac{3}{2}\) and \(P_0\left(0, -\frac{3}{2}\right)\).</li>
<li>Vector equation: \(\vec r = \left(0, -\frac{3}{2}\right) + t(3, 2),\ t \in \mathbb{R}\).</li>
<li>Parametric: \(x = 3t,\ y = -\frac{3}{2} + 2t,\ t \in \mathbb{R}\).</li>
<li>Symmetric: \(\dfrac{x}{3} = \dfrac{y + \frac{3}{2}}{2}\).</li>
</ol>
<p class="answer">\(\vec r = \left(0, -\tfrac{3}{2}\right) + t(3, 2),\ t \in \mathbb{R};\quad x = 3t,\ y = -\tfrac{3}{2} + 2t;\quad \dfrac{x}{3} = \dfrac{y + \frac{3}{2}}{2}\)</p>`,
      note: String.raw`The teacher writes the symmetric equation as \(\frac{x}{3} = \frac{y + 1.5}{2}\), which is the same thing. Letting \(y = 0\) instead gives the point \(\left(\frac{9}{4}, 0\right)\), so a fraction appears either way; both points are correct.` }
  ]
});

window.QUIZ.push(
  { id: "q32-01", lesson: "3.2", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`What is a normal vector to a line in R²?`,
    options: [
      String.raw`A vector parallel to the line, used to write its vector equation`,
      String.raw`A vector of length 1 pointing along the line`,
      String.raw`A non-zero vector perpendicular to the line's direction vector`,
      String.raw`The position vector \(\vec r_0\) of a known point on the line`],
    answer: 2,
    explain: String.raw`"Normal" means perpendicular. A normal \(\vec n\) satisfies \(\vec n \cdot \vec m = 0\) with the direction vector \(\vec m\). A vector parallel to the line is a direction vector (not a normal), a length-1 vector along the line is a unit direction vector, and \(\vec r_0\) locates a point; none of these is perpendicular to the line in general.` },
  { id: "q32-02", lesson: "3.2", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which vector is a normal to a line with direction vector \(\vec m = (5, -2)\)?`,
    options: [String.raw`\((-5, 2)\)`, String.raw`\((2, 5)\)`, String.raw`\((-2, 5)\)`, String.raw`\((5, 2)\)`],
    answer: 1,
    explain: String.raw`Switch the components and change one sign: \((5, -2) \to (-2, 5) \to (2, 5)\). Check: \((5, -2) \cdot (2, 5) = 10 - 10 = 0\). The vector \((-5, 2)\) is \(-1\) times \(\vec m\), so it is parallel, not perpendicular. \((-2, 5)\) switches the components but changes the wrong sign back (\(-10 - 10 = -20\)). \((5, 2)\) only drops the sign (\(25 - 4 = 21\)).` },
  { id: "q32-03", lesson: "3.2", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Find the Cartesian equation of the line through \((3, -1)\) with normal vector \(\vec n = (2, 5)\).`,
    options: [String.raw`\(2x + 5y + 1 = 0\)`, String.raw`\(5x - 2y - 17 = 0\)`, String.raw`\(2x + 5y - 1 = 0\)`, String.raw`\(2x + 5y - 11 = 0\)`],
    answer: 2,
    explain: String.raw`The normal gives \(2x + 5y + C = 0\). Substituting \((3, -1)\): \(6 - 5 + C = 0\), so \(C = -1\). The option with \(+1\) has the sign of \(C\) flipped. \(5x - 2y - 17 = 0\) treats \((2, 5)\) as a direction vector instead of the normal. \(2x + 5y - 11 = 0\) comes from substituting \(y = +1\) instead of \(-1\).` },
  { id: "q32-04", lesson: "3.2", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`For the line \(3x - 7y + 4 = 0\), the vector \((3, -7)\) is a direction vector of the line.`,
    answer: false,
    explain: String.raw`False. The coefficients of \(x\) and \(y\) form a <em>normal</em> vector, \(\vec n = (3, -7)\), which is perpendicular to the line. A direction vector is found by switching and changing one sign: \(\vec m = (7, 3)\). Check: \((3, -7) \cdot (7, 3) = 21 - 21 = 0\).` },
  { id: "q32-05", lesson: "3.2", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which is a direction vector of the line \(4x + 3y - 12 = 0\)?`,
    options: [String.raw`\((4, 3)\)`, String.raw`\((3, 4)\)`, String.raw`\((-4, 3)\)`, String.raw`\((-3, 4)\)`],
    answer: 3,
    explain: String.raw`The normal is \((4, 3)\). A direction vector must be perpendicular to it: switch and change one sign to get \((-3, 4)\) (or \((3, -4)\)). Check: \((4, 3) \cdot (-3, 4) = -12 + 12 = 0\). \((4, 3)\) is the normal itself. \((3, 4)\) switches without changing a sign (\(12 + 12 \ne 0\)). \((-4, 3)\) changes a sign without switching (\(-16 + 9 \ne 0\)).` },
  { id: "q32-06", lesson: "3.2", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`What is the Cartesian equation of the line \((x, y) = (1, 4) + t(2, -3),\ t \in \mathbb{R}\)?`,
    options: [String.raw`\(3x + 2y - 11 = 0\)`, String.raw`\(2x - 3y + 10 = 0\)`, String.raw`\(3x - 2y + 5 = 0\)`, String.raw`\(3x + 2y + 11 = 0\)`],
    answer: 0,
    explain: String.raw`\(\vec m = (2, -3)\), so \(\vec n = (3, 2)\). Then \(3x + 2y + C = 0\) with \((1, 4)\): \(3 + 8 + C = 0\), \(C = -11\). \(2x - 3y + 10 = 0\) uses the direction vector as if it were the normal. \(3x - 2y + 5 = 0\) uses \((3, -2)\), which is not perpendicular to \((2, -3)\) (\(6 + 6 \ne 0\)). \(3x + 2y + 11 = 0\) has the sign of \(C\) wrong.` },
  { id: "q32-07", lesson: "3.2", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which is the symmetric equation of the line \(x = 2 - 4t,\ y = 5 + 3t\)?`,
    options: [
      String.raw`\(\dfrac{x + 2}{-4} = \dfrac{y + 5}{3}\)`,
      String.raw`\(\dfrac{x - 2}{-4} = \dfrac{y - 5}{3}\)`,
      String.raw`\(\dfrac{x - 2}{3} = \dfrac{y - 5}{-4}\)`,
      String.raw`\(\dfrac{x - 2}{4} = \dfrac{y - 5}{3}\)`],
    answer: 1,
    explain: String.raw`Solve each equation for \(t\): \(x - 2 = -4t\) gives \(\frac{x - 2}{-4} = t\), and \(y - 5 = 3t\) gives \(\frac{y - 5}{3} = t\). Equate them. The first option flips the signs of the point (it would be the line through \((-2, -5)\)). The third swaps the direction components between \(x\) and \(y\). The fourth drops the negative sign of \(-4\).` },
  { id: "q32-08", lesson: "3.2", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`A line passes through \((2, 1)\) with direction vector \(\vec m = (0, 3)\). Which statement is correct?`,
    options: [
      String.raw`Its Cartesian equation is \(x - 2 = 0\).`,
      String.raw`Its symmetric equation is \(\dfrac{x - 2}{0} = \dfrac{y - 1}{3}\).`,
      String.raw`Its Cartesian equation is \(y - 1 = 0\).`,
      String.raw`A normal vector is \((0, 3)\).`],
    answer: 0,
    explain: String.raw`The direction \((0, 3)\) is vertical, so a normal is \((3, 0)\) or \((1, 0)\): \(x + C = 0\) with \(x = 2\) gives \(x - 2 = 0\). You cannot divide by 0, so there is no symmetric equation of that form (write \(x = 2\) with \(\frac{y - 1}{3} = t\) instead). \(y - 1 = 0\) is the horizontal line through the point, perpendicular to the one asked for. \((0, 3)\) is the direction vector, not a normal.` },
  { id: "q32-09", lesson: "3.2", type: "tf", kind: "applied", tier: "essential",
    q: String.raw`The point \((2, -1)\) lies on the line \(5x + 2y - 8 = 0\).`,
    answer: true,
    explain: String.raw`True. Substitute: \(5(2) + 2(-1) - 8 = 10 - 2 - 8 = 0\). A point is on a Cartesian line exactly when it makes the left side equal 0.` },
  { id: "q32-10", lesson: "3.2", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Find the line through \((1, 2)\) that is parallel to \(3x - y + 7 = 0\).`,
    options: [String.raw`\(x + 3y - 7 = 0\)`, String.raw`\(3x - y + 1 = 0\)`, String.raw`\(3x - y + 7 = 0\)`, String.raw`\(3x - y - 1 = 0\)`],
    answer: 3,
    explain: String.raw`Parallel lines share the normal \((3, -1)\), so \(3x - y + C = 0\). Substitute \((1, 2)\): \(3 - 2 + C = 0\), \(C = -1\). \(x + 3y - 7 = 0\) is perpendicular to the given line, not parallel. \(3x - y + 7 = 0\) copies the old \(C\), giving the original line, which does not pass through \((1, 2)\). \(3x - y + 1 = 0\) has the sign of \(C\) flipped.` },
  { id: "q32-11", lesson: "3.2", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Find the line through \((-2, 3)\) that is perpendicular to \(4x + y - 5 = 0\).`,
    options: [String.raw`\(4x + y + 5 = 0\)`, String.raw`\(x - 4y + 14 = 0\)`, String.raw`\(x + 4y - 10 = 0\)`, String.raw`\(x - 4y - 14 = 0\)`],
    answer: 1,
    explain: String.raw`The given normal is \((4, 1)\). The new normal must be perpendicular to it: \((1, -4)\), since \(4 - 4 = 0\). Then \(x - 4y + C = 0\) with \((-2, 3)\): \(-2 - 12 + C = 0\), \(C = 14\). \(4x + y + 5 = 0\) is the parallel line through the point. \(x + 4y - 10 = 0\) switches without changing a sign, so its normal \((1, 4)\) is not perpendicular to \((4, 1)\). \(x - 4y - 14 = 0\) has the sign of \(C\) wrong.` },
  { id: "q32-12", lesson: "3.2", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`Every line in R² has exactly one normal vector.`,
    answer: false,
    explain: String.raw`False. If \(\vec n\) is a normal, so is every non-zero multiple \(k\vec n\), since scaling does not change which direction a vector is perpendicular to. For \(2x - y - 3 = 0\), \((2, -1)\), \((4, -2)\) and \((-2, 1)\) are all normals. That is why \(4x - 2y - 6 = 0\) and \(2x - y - 3 = 0\) are the same line.` },
  { id: "q32-13", lesson: "3.2", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`In the derivation of \(Ax + By + C = 0\) from a point \(P_0(x_0, y_0)\) and a normal \(\vec n = (A, B)\), what does \(C\) equal?`,
    options: [String.raw`\(-Ax_0 - By_0\)`, String.raw`\(Ax_0 + By_0\)`, String.raw`\(Bx_0 - Ay_0\)`, String.raw`\(-x_0 - y_0\)`],
    answer: 0,
    explain: String.raw`Expanding \((x - x_0, y - y_0) \cdot (A, B) = 0\) gives \(Ax - Ax_0 + By - By_0 = 0\), so the constant is \(C = -Ax_0 - By_0\). The positive version forgets that the point's coordinates were subtracted. \(Bx_0 - Ay_0\) mixes in the direction vector \((B, -A)\). \(-x_0 - y_0\) forgets to multiply by the normal's components.` },
  { id: "q32-14", lesson: "3.2", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which point lies on the line \(2x - 5y + 10 = 0\)?`,
    options: [String.raw`\((0, -2)\)`, String.raw`\((2, -5)\)`, String.raw`\((0, 2)\)`, String.raw`\((5, 0)\)`],
    answer: 2,
    explain: String.raw`Let \(x = 0\): \(-5y + 10 = 0\), so \(y = 2\). Check \((0, 2)\): \(0 - 10 + 10 = 0\). \((0, -2)\) gives \(20\) (sign error solving for \(y\)). \((2, -5)\) is the normal's components, not a point. \((5, 0)\) gives \(20\); letting \(y = 0\) correctly gives \(x = -5\).` },
  { id: "q32-15", lesson: "3.2", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Which is a vector equation of the line \(6x - 4y + 8 = 0\)?`,
    options: [
      String.raw`\(\vec r = (0, 2) + t(6, -4),\ t \in \mathbb{R}\)`,
      String.raw`\(\vec r = (0, -2) + t(2, 3),\ t \in \mathbb{R}\)`,
      String.raw`\(\vec r = (0, 2) + t(2, 3),\ t \in \mathbb{R}\)`,
      String.raw`\(\vec r = (2, 0) + t(2, 3),\ t \in \mathbb{R}\)`],
    answer: 2,
    explain: String.raw`The normal is \((6, -4)\), or \((3, -2)\); switch and change one sign for \(\vec m = (2, 3)\). Let \(x = 0\): \(-4y + 8 = 0\), \(y = 2\), so the point is \((0, 2)\). The first option uses the normal as the direction. \((0, -2)\) gives \(16 \ne 0\) and \((2, 0)\) gives \(20 \ne 0\), so neither is on the line.` },
  { id: "q32-16", lesson: "3.2", type: "tf", kind: "knowledge", tier: "likely",
    q: String.raw`The lines \(2x - 3y + 5 = 0\) and \(-4x + 6y - 1 = 0\) are parallel.`,
    answer: true,
    explain: String.raw`True. The normals are \((2, -3)\) and \((-4, 6) = -2(2, -3)\), scalar multiples, so the lines are parallel. They are not coincident: multiplying the first equation by \(-2\) gives \(-4x + 6y - 10 = 0\), and \(-10 \ne -1\).` },
  { id: "q32-17", lesson: "3.2", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`Your teacher wants Cartesian equations with \(A > 0\) and no common factor. Which is the preferred way to write \(-6x + 9y + 3 = 0\)?`,
    options: [String.raw`\(6x - 9y - 3 = 0\)`, String.raw`\(-2x + 3y + 1 = 0\)`, String.raw`\(2x - 3y + 1 = 0\)`, String.raw`\(2x - 3y - 1 = 0\)`],
    answer: 3,
    explain: String.raw`Divide every term by \(-3\): \(2x - 3y - 1 = 0\). That makes \(A\) positive and removes the common factor in one step. \(6x - 9y - 3 = 0\) fixes the sign but still has the factor 3. \(-2x + 3y + 1 = 0\) removes the factor but starts with a negative. \(2x - 3y + 1 = 0\) forgot to change the sign of the constant.` },
  { id: "q32-18", lesson: "3.2", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`What is the slope of the line \(3x + 2y - 6 = 0\)?`,
    options: [String.raw`\(\frac{2}{3}\)`, String.raw`\(-\frac{3}{2}\)`, String.raw`\(\frac{3}{2}\)`, String.raw`\(-\frac{2}{3}\)`],
    answer: 1,
    explain: String.raw`A direction vector is \((2, -3)\) (switch and change one sign of the normal \((3, 2)\)), so rise over run is \(\frac{-3}{2}\). Solving \(y = -\frac{3}{2}x + 3\) agrees. \(\frac{2}{3}\) is the slope of the normal \((3, 2)\), which is perpendicular to the line. \(\frac{3}{2}\) loses the sign. \(-\frac{2}{3}\) takes the negative reciprocal one time too many.` }
);

window.EXT.push(
  { id: "x32-01", lesson: "3.2", level: "apply", tier: "likely",
    title: "A robot vacuum's path", marks: 8,
    prompt: String.raw`<p>A robot vacuum starts at \(A(-2, 1)\) on a floor grid (units in metres) and drives in a straight line through \(B(4, 5)\).</p>
<ol type="a">
<li>Find a vector equation and parametric equations of its path.</li>
<li>Find the symmetric equation of the path, then use it to find the Cartesian equation.</li>
<li>Verify your Cartesian equation a second way, using a normal vector.</li>
<li>A charging dock sits at \(D(7, 7)\). Does the vacuum drive over it? If so, for what parameter value, and does it reach \(B\) or \(D\) first?</li>
<li>The far wall of the room is the line \(y = 9\). At what point does the vacuum reach the wall?</li>
</ol>`,
    hints: [String.raw`A direction vector is \(\overrightarrow{AB}\); you may divide it by a common factor.`, String.raw`A point is on a Cartesian line when it makes \(Ax + By + C\) equal 0. To find its parameter value, solve either parametric equation for \(t\).`],
    answer: String.raw`<p><strong>a.</strong> \(\overrightarrow{AB} = (4 - (-2),\ 5 - 1) = (6, 4)\). Use the simpler parallel vector \(\vec m = (3, 2)\). Then \(\vec r = (-2, 1) + t(3, 2),\ t \in \mathbb{R}\), and \(x = -2 + 3t,\ y = 1 + 2t\).</p>
<p><strong>b.</strong> Solve each for \(t\): \(\frac{x + 2}{3} = t\) and \(\frac{y - 1}{2} = t\), so the symmetric equation is \(\frac{x + 2}{3} = \frac{y - 1}{2}\). Cross-multiply: \(2(x + 2) = 3(y - 1)\), so \(2x + 4 = 3y - 3\), giving \(2x - 3y + 7 = 0\).</p>
<p><strong>c.</strong> From \(\vec m = (3, 2)\), a normal is \(\vec n = (2, -3)\). Then \(2x - 3y + C = 0\) with \(A(-2, 1)\): \(-4 - 3 + C = 0\), so \(C = 7\), the same equation. As a further check, \(B\) gives \(8 - 15 + 7 = 0\).</p>
<p><strong>d.</strong> \(2(7) - 3(7) + 7 = 14 - 21 + 7 = 0\), so \(D\) is on the path. From \(7 = -2 + 3t\), \(t = 3\); and \(7 = 1 + 2t\) also gives \(t = 3\), consistent. \(B\) is at \(t = 2\) (since \(-2 + 3(2) = 4\)), so the vacuum reaches \(B\) first, then \(D\).</p>
<p><strong>e.</strong> Set \(y = 9\): \(1 + 2t = 9\), so \(t = 4\) and \(x = -2 + 12 = 10\). Using the Cartesian equation instead: \(2x - 27 + 7 = 0\) gives \(x = 10\).</p>
<p class="answer">The vacuum reaches the wall at \((10, 9)\).</p>` },
  { id: "x32-02", lesson: "3.2", level: "analyze", tier: "likely",
    title: "The shortest driveway to a road", marks: 9,
    prompt: String.raw`<p>A straight road follows the line \(3x + 4y - 24 = 0\) (units in kilometres). A farmhouse is at \(H(1, -1)\). The owner wants the shortest possible straight driveway from the house to the road.</p>
<ol type="a">
<li>Explain why the shortest driveway runs in the direction of the road's normal vector.</li>
<li>Write a vector equation of the line the driveway lies on.</li>
<li>Find the point \(F\) where the driveway meets the road.</li>
<li>Find the length of the driveway.</li>
<li>Find the Cartesian equation of the driveway's line, and verify that it is perpendicular to the road.</li>
</ol>`,
    hints: [String.raw`Any other path from \(H\) to the road is the hypotenuse of a right triangle.`, String.raw`Substitute the parametric equations of the driveway into the road's equation and solve for \(t\).`],
    answer: String.raw`<p><strong>a.</strong> Drop a perpendicular from \(H\) to the road, meeting it at \(F\). Any other path from \(H\) to a road point \(Q\) is the hypotenuse of the right triangle \(HFQ\), so it is longer than \(HF\). The shortest path is perpendicular to the road, and the direction perpendicular to the road is its normal, \(\vec n = (3, 4)\).</p>
<p><strong>b.</strong> Use \(H\) as the point and \(\vec n\) as the direction: \(\vec r = (1, -1) + t(3, 4),\ t \in \mathbb{R}\), that is \(x = 1 + 3t,\ y = -1 + 4t\).</p>
<p><strong>c.</strong> Substitute into the road's equation:</p>
\[ \begin{aligned} 3(1 + 3t) + 4(-1 + 4t) - 24 &= 0 \\ 3 + 9t - 4 + 16t - 24 &= 0 \\ 25t - 25 &= 0 \\ t &= 1 \end{aligned} \]
<p>So \(F = (1 + 3,\ -1 + 4) = (4, 3)\). Check: \(12 + 12 - 24 = 0\).</p>
<p><strong>d.</strong> \(\overrightarrow{HF} = (3, 4)\), so \(|\overrightarrow{HF}| = \sqrt{9 + 16} = 5\) km. (Lesson 3.4's formula agrees: \(\frac{|3(1) + 4(-1) - 24|}{\sqrt{3^2 + 4^2}} = \frac{25}{5} = 5\).)</p>
<p><strong>e.</strong> The driveway's direction is \((3, 4)\), so its normal is \((4, -3)\): \(4x - 3y + C = 0\) with \(H(1, -1)\): \(4 + 3 + C = 0\), \(C = -7\). The equation is \(4x - 3y - 7 = 0\) (and \(F\) checks: \(16 - 9 - 7 = 0\)). The two normals satisfy \((3, 4) \cdot (4, -3) = 12 - 12 = 0\), so the lines are perpendicular.</p>
<p class="answer">\(F(4, 3)\); driveway length 5 km; driveway line \(4x - 3y - 7 = 0\)</p>` },
  { id: "x32-03", lesson: "3.2", level: "extend", tier: "likely",
    title: "Prove it: the coefficients are a normal", marks: 10,
    prompt: String.raw`<p>The lesson derived \(Ax + By + C = 0\) from a point and a normal. This question runs the logic the other way.</p>
<ol type="a">
<li>Let \(P_1(x_1, y_1)\) and \(P_2(x_2, y_2)\) be two different points on the line \(Ax + By + C = 0\). Prove that \((A, B) \perp \overrightarrow{P_1P_2}\), and explain why this shows \((A, B)\) is a normal to the line.</li>
<li>Explain why \(Ax + By + C_1 = 0\) and \(Ax + By + C_2 = 0\) with \(C_1 \ne C_2\) are parallel lines with no point in common.</li>
<li>Prove that the lines \(A_1x + B_1y + C_1 = 0\) and \(A_2x + B_2y + C_2 = 0\) are perpendicular if and only if \(A_1A_2 + B_1B_2 = 0\).</li>
<li>When \(B_1, B_2 \ne 0\), show that the condition in (c) is the same as the familiar slope rule \(k_1k_2 = -1\). Give an example of perpendicular lines that the normal test handles but the slope rule cannot.</li>
</ol>`,
    hints: [String.raw`Both points satisfy the equation. Write the two equations and subtract them.`, String.raw`Direction vectors are \((B_1, -A_1)\) and \((B_2, -A_2)\). The slope of \(Ax + By + C = 0\) is \(-\frac{A}{B}\).`],
    answer: String.raw`<p><strong>a.</strong> Both points are on the line, so \(Ax_1 + By_1 + C = 0\) and \(Ax_2 + By_2 + C = 0\). Subtract the first from the second; the \(C\)s cancel:</p>
\[ A(x_2 - x_1) + B(y_2 - y_1) = 0 \]
<p>The left side is the dot product \((A, B) \cdot (x_2 - x_1,\ y_2 - y_1) = (A, B) \cdot \overrightarrow{P_1P_2}\). It equals 0, so the vectors are perpendicular. Since \(P_1\) and \(P_2\) are any two different points on the line, \(\overrightarrow{P_1P_2}\) is a direction vector of the line, so \((A, B)\) is perpendicular to the line, which is what a normal means. (\((A, B) \ne (0, 0)\), otherwise the equation would not describe a line.)</p>
<p><strong>b.</strong> Both lines have normal \((A, B)\), hence direction \((B, -A)\), so they are parallel. Suppose a point \((x, y)\) were on both. Subtracting the equations gives \(C_1 - C_2 = 0\), contradicting \(C_1 \ne C_2\). So they share no point: they are distinct parallel lines. Changing \(C\) only slides the line sideways.</p>
<p><strong>c.</strong> Two lines are perpendicular exactly when their direction vectors are. Using direction vectors \(\vec m_1 = (B_1, -A_1)\) and \(\vec m_2 = (B_2, -A_2)\):</p>
\[ \vec m_1 \cdot \vec m_2 = B_1B_2 + (-A_1)(-A_2) = A_1A_2 + B_1B_2 \]
<p>So the lines are perpendicular if and only if \(A_1A_2 + B_1B_2 = 0\), which is the statement \(\vec n_1 \cdot \vec n_2 = 0\).</p>
<p><strong>d.</strong> Solving \(Ax + By + C = 0\) for \(y\) gives slope \(k = -\frac{A}{B}\). Then \(k_1k_2 = \frac{A_1A_2}{B_1B_2}\), and</p>
\[ k_1k_2 = -1 \iff A_1A_2 = -B_1B_2 \iff A_1A_2 + B_1B_2 = 0 \]
<p>Example the slope rule cannot handle: \(x - 3 = 0\) (vertical, no slope) and \(y - 7 = 0\). Their normals \((1, 0)\) and \((0, 1)\) give \(1 \cdot 0 + 0 \cdot 1 = 0\), so they are perpendicular.</p>
<p class="answer">The coefficients \((A, B)\) are always a normal, and the lines are perpendicular \(\iff \vec n_1 \cdot \vec n_2 = 0\), which works even for vertical lines.</p>` },
  { id: "x32-04", lesson: "3.2", level: "analyze", tier: "likely",
    title: "Shipping lanes: parallel or the same?", marks: 10,
    prompt: String.raw`<p>Three ships hold straight courses on a harbour map (units in kilometres):</p>
<ul>
<li>Ship P: \((x, y) = (1, 2) + t(4, -6),\ t \in \mathbb{R}\)</li>
<li>Ship Q: \(3x + 2y - 7 = 0\)</li>
<li>Ship R: \(x = 5 + 2s,\ y = -1 - 3s,\ s \in \mathbb{R}\)</li>
</ul>
<ol type="a">
<li>Show that all three courses are parallel.</li>
<li>Determine whether any two of the courses are coincident (the same line). Justify your answer.</li>
<li>A line of buoys is to follow \(kx - 6y + 1 = 0\). Find \(k\) so that the buoys are parallel to the courses, and then find \(k\) so that they are perpendicular to them.</li>
<li>Find the Cartesian equation of the line through the harbour master's office at the origin that is perpendicular to all three courses.</li>
</ol>`,
    hints: [String.raw`Compare everything in the same currency: find a direction vector for each course, or convert each to Cartesian form.`, String.raw`Coincident lines have the same Cartesian equation after simplifying, \(C\) included.`],
    answer: String.raw`<p><strong>a.</strong> P: \(\vec m = (4, -6) = 2(2, -3)\). Q: \(\vec n = (3, 2)\), so \(\vec m = (2, -3)\). R: \(\vec m = (2, -3)\). All direction vectors are multiples of \((2, -3)\), so the courses are parallel.</p>
<p><strong>b.</strong> Convert P to Cartesian form: \(\vec n = (3, 2)\), so \(3x + 2y + C = 0\) with \((1, 2)\): \(3 + 4 + C = 0\), \(C = -7\). That is \(3x + 2y - 7 = 0\), exactly Q's equation, so <strong>P and Q are coincident</strong>. For R, test its point \((5, -1)\) in Q's equation: \(15 - 2 - 7 = 6 \ne 0\), so R is not on that line. R's equation is \(3x + 2y - 13 = 0\) (from \(15 - 2 + C = 0\)): parallel and distinct.</p>
<p><strong>c.</strong> The buoy line's normal is \((k, -6)\). Parallel: it must be a multiple of \((3, 2)\). Matching second components, \(-6 = -3 \cdot 2\), so the multiple is \(-3\) and \(k = -3 \cdot 3 = -9\). Perpendicular: the normals must have zero dot product: \((k, -6) \cdot (3, 2) = 3k - 12 = 0\), so \(k = 4\). Check: \(4x - 6y + 1 = 0\) has normal \((4, -6)\), which is parallel to the courses' direction \((2, -3)\), as it should be.</p>
<p><strong>d.</strong> A line perpendicular to the courses has direction equal to their normal, \((3, 2)\), so its normal is \((2, -3)\): \(2x - 3y + C = 0\). Through the origin, \(C = 0\).</p>
<p class="answer">P and Q coincide; R is parallel and distinct. \(k = -9\) (parallel), \(k = 4\) (perpendicular). Perpendicular line through the origin: \(2x - 3y = 0\).</p>` }
);

window.EXTRA.push(
  { id: "e-32-slopes-and-normals", lesson: "3.2", tier: "likely",
    title: "Slopes, normals and the quarter-turn",
    why: String.raw`It connects the "switch and change one sign" shortcut to slope rules you already know, and shows exactly where slopes fail and vectors keep working.`,
    html: String.raw`<h3>The shortcut is a 90° rotation</h3>
<p>Rotating a vector 90° counterclockwise sends \((a, b)\) to \((-b, a)\); rotating it 90° clockwise sends it to \((b, -a)\). So "switch the components and change one sign" literally turns the direction vector a quarter-turn. That is why the result is always perpendicular, and why the two shortcut answers point in opposite directions. Try it with \((3, 4)\): a quarter-turn counterclockwise lands on \((-4, 3)\), moving the tip from the first quadrant into the second.</p>
<h3>Reading the slope from Ax + By + C = 0</h3>
<p>Solve for \(y\) (when \(B \ne 0\)):</p>
<div class="eq">\[ y = -\frac{A}{B}x - \frac{C}{B} \qquad \text{so the slope is } -\frac{A}{B} \]</div>
<p>The direction vector \((B, -A)\) gives the same slope, rise over run \(= \frac{-A}{B}\). The normal \((A, B)\) has slope \(\frac{B}{A}\), the negative reciprocal of \(-\frac{A}{B}\), which is the "think negative reciprocals" note from class. For the opening example \(4x - 3y + 15 = 0\), the slope is \(-\frac{4}{-3} = \frac{4}{3}\), matching \(\vec m = (3, 4)\).</p>
<h3>Where slopes fail and vectors do not</h3>
<p>A vertical line such as \(x = 5\) has no slope, so "negative reciprocal" has nothing to work with. Its normal \((1, 0)\) and direction \((0, 1)\) are ordinary vectors with dot product 0. The perpendicular test \(A_1A_2 + B_1B_2 = 0\) works for every pair of lines, while \(k_1k_2 = -1\) needs both slopes to exist. In R³ a line has no single slope at all, so vectors are the only language that carries forward into the rest of the unit.</p>` },
  { id: "e-32-no-cartesian-r3", lesson: "3.2", tier: "likely",
    title: "Why a line in R³ has no Cartesian equation",
    why: String.raw`The unit review table has a slash through "Cartesian equation of a line in R³", and knowing why makes lessons 3.3 and 3.7 click.`,
    html: String.raw`<h3>Same recipe, different result</h3>
<p>In R², the condition \(\overrightarrow{P_0P} \cdot \vec n = 0\) picks out the points \(P\) on the line through \(P_0\) perpendicular to \(\vec n\). Run the same recipe in R³ with \(\vec n = (A, B, C)\):</p>
<div class="eq">\[ (x - x_0,\ y - y_0,\ z - z_0) \cdot (A, B, C) = 0 \ \Longrightarrow\ Ax + By + Cz + D = 0 \]</div>
<p>But in space, the set of all directions perpendicular to one vector is not a line. Stand a pencil upright on a table: every direction along the tabletop is perpendicular to it. So this equation describes a whole <strong>plane</strong> through \(P_0\). That is the Cartesian equation of a plane, which you meet in lesson 3.7.</p>
<h3>Counting freedom</h3>
<p>Each independent equation removes one degree of freedom. R² has two (\(x\) and \(y\)); one equation leaves one, which is a line. R³ has three; one equation leaves two, which is a plane. To pin down a line in R³ you need two equations at once, for example two planes that intersect. The symmetric equations \(\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}\) are in fact two equations, since the chain contains two equals signs.</p>
<h3>What carries over to 3.3</h3>
<p>The vector, parametric and symmetric forms all extend to R³ by adding a z-component. The Cartesian form does not. In R² the normal direction of a line is unique (up to scalar multiples); in R³ a line has infinitely many perpendicular directions, so no single normal can describe it.</p>` },
  { id: "e-32-normal-measures-distance", lesson: "3.2", tier: "extra",
    title: "The normal vector measures distance",
    why: String.raw`Substituting a point that is not on the line into Ax + By + C gives a number with a geometric meaning, and it previews the distance formula of lesson 3.4.`,
    html: String.raw`<h3>Plug in a point that is not on the line</h3>
<p>Points on the line make \(Ax + By + C\) equal 0. What does the value mean for a point \(Q(x_1, y_1)\) off the line? Take any point \(P_0(x_0, y_0)\) on the line. From the derivation, \(C = -Ax_0 - By_0\), so</p>
<div class="eq">\[ Ax_1 + By_1 + C = A(x_1 - x_0) + B(y_1 - y_0) = \vec n \cdot \overrightarrow{P_0Q} \]</div>
<p>The dot product \(\vec n \cdot \overrightarrow{P_0Q}\) equals \(|\vec n|\) times the component of \(\overrightarrow{P_0Q}\) in the normal direction, and that component is exactly how far \(Q\) is from the line, measured perpendicularly. Dividing by \(|\vec n|\) gives the distance:</p>
<div class="eq">\[ d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}} \]</div>
<p>This is the formula on your unit review sheet for lesson 3.4. Example from the review sheet: the distance from \(Q(2, -4)\) to \(2x + 3y - 7 = 0\) is \(\frac{|4 - 12 - 7|}{\sqrt{13}} = \frac{15}{\sqrt{13}} = \frac{15\sqrt{13}}{13} \approx 4.16\).</p>
<h3>The sign tells you the side</h3>
<p>Without the absolute value, the sign of \(Ax_1 + By_1 + C\) tells you which side of the line \(Q\) is on: positive on the side \(\vec n\) points toward, negative on the other side. For \(2x + 3y - 7 = 0\), the origin gives \(-7\) and \(Q(2, -4)\) gives \(-15\), so both lie on the same side, the side away from \(\vec n = (2, 3)\). This is how computer graphics and robotics programs test which side of a boundary a point is on.</p>` }
);

window.GLOSSARY.push(
  { term: String.raw`Normal vector (of a line in R²)`, def: String.raw`A non-zero vector \(\vec n\) perpendicular to a line's direction vector, so \(\vec n \cdot \vec m = 0\). For \(Ax + By + C = 0\), \(\vec n = (A, B)\); for \(\vec m = (a, b)\), use \((-b, a)\) or \((b, -a)\).`, lesson: "3.2", tier: "essential" },
  { term: String.raw`Cartesian (scalar) equation`, def: String.raw`The equation \(Ax + By + C = 0\) of a line in R², where \(\vec n = (A, B)\) is a normal vector and \(C\) is found by substituting a point on the line. It has no parameter.`, lesson: "3.2", tier: "essential" },
  { term: String.raw`Standard form`, def: String.raw`Writing a line as \(Ax + By + C = 0\) with every term on one side; in this unit it is the same as the Cartesian equation. Convention: \(A > 0\), whole-number coefficients, no common factor.`, lesson: "3.2", tier: "essential" },
  { term: String.raw`Symmetric equation`, def: String.raw`\(\frac{x - x_0}{a} = \frac{y - y_0}{b}\), found by solving each parametric equation for \(t\) and equating. It needs \(a, b \ne 0\); cross-multiplying gives the Cartesian equation.`, lesson: "3.2", tier: "essential" },
  { term: String.raw`Parallel and perpendicular lines (normal test)`, def: String.raw`In R², two lines are parallel when their normals are scalar multiples, \(\vec n_1 = k\vec n_2\), and perpendicular when \(\vec n_1 \cdot \vec n_2 = 0\).`, lesson: "3.2", tier: "likely" },
  { term: String.raw`Coincident lines`, def: String.raw`Two equations that describe the same line. In Cartesian form, one equation is a non-zero multiple of the other, including \(C\), as with \(2x - y - 3 = 0\) and \(4x - 2y - 6 = 0\).`, lesson: "3.2", tier: "likely" },
  { term: String.raw`Vertical and horizontal lines (Cartesian form)`, def: String.raw`A vertical line \(x = k\) is \(x - k = 0\), with normal \((1, 0)\) and direction \((0, 1)\). A horizontal line \(y = k\) is \(y - k = 0\), with normal \((0, 1)\) and direction \((1, 0)\).`, lesson: "3.2", tier: "likely" }
);
