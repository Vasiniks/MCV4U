/* MCV4U Unit 3 · Lesson 3.4 Minimum Distance from a Point to a Line: lesson, worksheet Q&A, quiz, apply & extend, beyond the notes, glossary. */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "3.4", title: "Minimum Distance from a Point to a Line", stage: "c4",
  where: "R² and R³",
  summary: String.raw`The shortest way from a point to a line is the perpendicular, and this lesson gives you its length. In R² you project onto the normal to get \(d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\). In R³ a line has no single normal, so you use the cross product instead: \(d = \frac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\). The same projection idea comes back later for distances to planes and between lines.`,
  objectives: [
    String.raw`Explain why the shortest distance from a point to a line is the perpendicular distance.`,
    String.raw`Derive \(d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\) from the magnitude of the projection of \(\overrightarrow{P_0P}\) onto the normal \(\vec n = (A, B)\).`,
    String.raw`Find the distance from a point to a line in R², first converting a vector, parametric, symmetric, slope or vertical-line equation to \(Ax + By + C = 0\).`,
    String.raw`Explain why lines in R³ need a different method, and derive \(d = \frac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\) from \(d = |\overrightarrow{P_0P}|\sin\theta\).`,
    String.raw`Find the distance from a point to a line in R³ using the cross product, and check the cross product with dot products.`,
    String.raw`Find the distance between two parallel lines in R² or R³.`,
    String.raw`Find the point on a line closest to a given point by solving \(\overrightarrow{PQ} \cdot \vec m = 0\).`
  ],
  html: String.raw`
<h3 data-tier="essential">The shortest distance is the perpendicular distance</h3>
<p>The notes open with two photos. In one, someone cuts straight through a maze instead of following its corridors. In the other, people have worn a dirt track across a lawn because they stopped following the paved path and walked straight to where they were going. Both make the same point: the quickest way from a point to a line is to head straight at it.</p>
<div class="callout key"><p class="callout-title">The key fact</p><p>The shortest distance from a point to a line is the <span class="term">perpendicular distance</span>, the length of the segment from the point that meets the line at 90°. This is the <span class="term">minimum distance</span>, written \(d\).</p></div>
<p>Here is why. Drop a perpendicular from the point \(P\) to the line and call the place where it lands \(F\), the <em>foot</em> of the perpendicular, so \(d = |PF|\). Now take any other point \(Q\) on the line. Triangle \(PFQ\) has a right angle at \(F\) and \(PQ\) is its hypotenuse, so by Pythagoras</p>
<div class="eq">\[ |PQ|^2 = d^2 + |FQ|^2 \gt d^2 \quad \text{whenever } Q \ne F. \]</div>
<p>Every other point on the line is farther from \(P\) than \(F\) is. From now on, "the distance from a point to a line" always means this perpendicular distance. It is \(0\) exactly when the point is on the line.</p>
<figure class="diagram narrow"><svg viewBox="0 0 480 240" role="img" aria-labelledby="fig34-perp"><title id="fig34-perp">A point P above a horizontal line. The perpendicular segment PF, of length d, meets the line at a right angle at F. A dashed slanted segment from P to another point Q on the line is longer.</title>
<line class="s-ink" x1="30" y1="190" x2="450" y2="190" stroke-width="2"/>
<line class="s-amber dash" x1="170" y1="50" x2="360" y2="190" stroke-width="2"/>
<line class="s-teal" x1="170" y1="50" x2="170" y2="190" stroke-width="3"/>
<polyline class="s-ink" points="170,176 184,176 184,190" stroke-width="1.5"/>
<circle class="f-ink" cx="170" cy="50" r="4.5"/>
<circle class="f-ink" cx="170" cy="190" r="3.5"/>
<circle class="f-ink" cx="360" cy="190" r="3.5"/>
<text class="t-ink" x="180" y="46" font-size="16" font-style="italic">P</text>
<text class="t-ink" x="170" y="214" font-size="15" text-anchor="middle" font-style="italic">F</text>
<text class="t-ink" x="360" y="214" font-size="15" text-anchor="middle" font-style="italic">Q</text>
<text class="t-teal" x="160" y="126" font-size="16" text-anchor="end" font-style="italic">d</text>
<text class="t-amber" x="250" y="72" font-size="14">PQ² = d² + FQ²</text>
<text class="t-amber" x="250" y="92" font-size="14">so PQ &gt; d</text>
<text class="t-mute" x="450" y="180" font-size="14" text-anchor="end">line</text>
</svg><figcaption>Any other point Q on the line makes a right triangle with P and the foot F, and PQ is its hypotenuse, so PQ is longer than d. The perpendicular segment PF is the shortest one.</figcaption></figure>

<h3 data-tier="essential">Recall: the magnitude of a vector projection</h3>
<p>Both methods in this lesson are built from tools in the vectors unit. The first is the projection. The vector projection of \(\vec a\) onto \(\vec b\) is the "shadow" that \(\vec a\) casts along the line of \(\vec b\). Its length is</p>
<div class="eq">\[ |\text{proj}_{\vec b}\,\vec a| = \frac{|\vec a \cdot \vec b|}{|\vec b|} \]</div>
<p>The dot product \(\vec a \cdot \vec b\) is negative when the angle between the vectors is obtuse, because then the shadow points backwards along \(\vec b\). A length can't be negative, so the formula wraps the dot product in absolute value bars.</p>
<div class="callout teacher"><p class="callout-title">From the notes</p><p>Beside this formula the teacher wrote: magnitude / absolute value, "to ensure positive value for magnitude / length". Every distance formula in this lesson has absolute value bars for this reason. If you leave them out, you can end up with a negative "distance", and that is always wrong.</p></div>
<p>Why does a projection help? Project a vector that joins a point on the line to \(P\) onto a direction <em>perpendicular</em> to the line, and the length of the shadow is the perpendicular distance. That is the whole idea of the R² method.</p>

<h3 data-tier="likely">Deriving the distance formula in R²</h3>
<p>Here is the setup from the notes: to determine the minimum distance from a point \(P(x_1, y_1)\) to the line \(Ax + By + C = 0\), let \(P_0(x_0, y_0)\) be a known point on the line and let \(d\) be the minimum distance.</p>
<p>From lesson 3.2, the coefficients of a Cartesian equation give a normal vector, so \(\vec n = (A, B)\) is perpendicular to the line. Draw \(\vec n\) at \(P_0\), then draw \(\overrightarrow{P_0P}\) from the known point to \(P\).</p>
<figure class="diagram narrow"><svg viewBox="0 0 520 330" role="img" aria-labelledby="fig34-r2"><title id="fig34-r2">A line L slanting down to the right with a known point P0 on it and the normal vector n drawn at P0. The vector P0P goes from P0 to the point P off the line. The perpendicular segment d drops from P to the foot F on the line. A dashed segment along n from P0 has the same length d, forming a rectangle with d.</title>
<line class="s-ink" x1="35" y1="134" x2="452.8" y2="301.1" stroke-width="2"/>
<line class="s-mute dash" x1="140.9" y1="57.9" x2="354.5" y2="143.3" stroke-width="1.5"/>
<line class="s-amber dash" x1="100" y1="160" x2="140.9" y2="57.9" stroke-width="2.5"/>
<line class="s-blue" x1="100" y1="160" x2="348.5" y2="143.7" stroke-width="2"/>
<polygon class="f-blue" points="348.5,143.7 337.8,149.4 337.2,139.4"/>
<line class="s-magenta" x1="100" y1="160" x2="118.6" y2="113.6" stroke-width="2.5"/>
<polygon class="f-magenta" points="118.6,113.6 119.5,124.8 110.2,121.0"/>
<line class="s-teal" x1="354.5" y1="143.3" x2="313.6" y2="245.4" stroke-width="3"/>
<polyline class="s-ink" points="318.1,234.3 329.2,238.8 324.7,249.9" stroke-width="1.5"/>
<circle class="f-ink" cx="100" cy="160" r="4"/>
<circle class="f-ink" cx="354.5" cy="143.3" r="4.5"/>
<circle class="f-ink" cx="313.6" cy="245.4" r="3"/>
<text class="t-ink" x="94" y="182" font-size="15" text-anchor="end">P₀</text>
<text class="t-ink" x="364" y="140" font-size="15">P(x₁, y₁)</text>
<text class="t-ink" x="320" y="271" font-size="14" text-anchor="middle">F</text>
<text class="t-magenta" x="129" y="120" font-size="15">n = (A, B)</text>
<text class="t-blue" x="236" y="173" font-size="15" text-anchor="middle">P₀P</text>
<text class="t-teal" x="342" y="200" font-size="16" font-style="italic">d</text>
<text class="t-amber" x="116" y="70" font-size="13" text-anchor="end">projection of</text>
<text class="t-amber" x="116" y="86" font-size="13" text-anchor="end">P₀P onto n</text>
<text class="t-amber" x="116" y="102" font-size="13" text-anchor="end">(length d)</text>
<text class="t-ink" x="215" y="298" font-size="14">L: Ax + By + C = 0</text>
</svg><figcaption>P₀ is any known point on L and n = (A, B) is its normal. The projection of P₀P onto n (amber, dashed) and the perpendicular distance d (teal) are opposite sides of a rectangle, so they have the same length.</figcaption></figure>
<div class="example"><p class="example-title">Derivation · Minimum distance from P(x₁, y₁) to Ax + By + C = 0</p>
<ol class="work">
<li>The perpendicular distance is the magnitude of the projection of \(\overrightarrow{P_0P}\) onto the normal: \(d = \dfrac{|\overrightarrow{P_0P} \cdot \vec n|}{|\vec n|}\). In the diagram, the projection and \(d\) are opposite sides of a rectangle, so they are equal.</li>
<li>Write both vectors in components so that the dot product can be computed: \(\overrightarrow{P_0P} = (x_1 - x_0,\ y_1 - y_0)\) (head minus tail), \(\vec n = (A, B)\) and \(|\vec n| = \sqrt{A^2 + B^2}\). So \(d = \dfrac{|(x_1 - x_0,\ y_1 - y_0) \cdot (A, B)|}{\sqrt{A^2 + B^2}}\).</li>
<li>Expand the dot product, then group the terms with \(x_0\) and \(y_0\) together. Those are the terms you want to get rid of, since \(P_0\) is not given in a question: \(d = \dfrac{|A(x_1 - x_0) + B(y_1 - y_0)|}{\sqrt{A^2 + B^2}} = \dfrac{|Ax_1 + By_1 + (-Ax_0 - By_0)|}{\sqrt{A^2 + B^2}}\).</li>
<li>Since \((x_0, y_0)\) lies on the line, it satisfies the equation: \(Ax_0 + By_0 + C = 0\), \(\therefore\ C = -Ax_0 - By_0\). Replace the bracket with \(C\).</li>
</ol>
<p class="answer">\(\therefore\ d = \dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\)</p></div>
<p>Look at what happened in the last step: \(P_0\) disappeared. The finished formula only needs the point and the equation of the line, so you never have to find a point on the line to use it.</p>
<p>A small notation detail: the diagram in the notes labels the point \(P(x, y)\), but the text and the formula call it \(P(x_1, y_1)\). They are the same point. The teacher's margin note says so: \((x_1, y_1)\) is the point in R², the one <em>off</em> the line. The subscript 0 belongs to the known point on the line.</p>
<details class="check"><summary>Why does it not matter which point on the line you use as P₀?</summary><div class="ans"><p>If you move \(P_0\) along the line, \(\overrightarrow{P_0P}\) changes by a multiple of the direction vector. The direction vector is perpendicular to \(\vec n\), so its dot product with \(\vec n\) is 0 and \(\overrightarrow{P_0P} \cdot \vec n\) does not change. You can see the same thing in the algebra: \(x_0\) and \(y_0\) are gone from the final formula.</p></div></details>

<h3 data-tier="essential">The R² formula and Example 1</h3>
<div class="callout key"><p class="callout-title">Minimum distance from a point to a line in R²</p>
<div class="eq">\[ d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}} \]</div>
<p>\((x_1, y_1)\) is the given point, \(Ax + By + C = 0\) is the line in Cartesian form, and \(\sqrt{A^2 + B^2} = |\vec n|\).</p></div>
<p>In words: substitute the point into the left side of the line's equation, take the absolute value, and divide by the length of the normal. A point on the line would make the left side 0. The numerator measures how far the point is from satisfying the equation, and dividing by \(|\vec n|\) turns that into an actual length.</p>
<div class="example"><p class="example-title">Example 1 · Determine the minimum distance from (6, −1) to the line 4x + y − 10 = 0</p>
<ol class="work">
<li>Read off the pieces, because the formula is built from them. The line is already in the form \(Ax + By + C = 0\), so the normal is \(\vec n = (4, 1)\), giving \(A = 4\), \(B = 1\) and \(C = -10\). The point off the line is \((x_1, y_1) = (6, -1)\).</li>
<li>Substitute into the formula. The numerator is the left side of the equation evaluated at the point, and the denominator is \(|\vec n|\): \[ d = \frac{|4(6) + (-1) - 10|}{\sqrt{4^2 + 1^2}} \]</li>
<li>Simplify the top and bottom. The absolute value keeps the distance positive: \(d = \dfrac{|24 - 1 - 10|}{\sqrt{17}} = \dfrac{|13|}{\sqrt{17}} = \dfrac{13}{\sqrt{17}}\).</li>
<li>Rationalize, if you want the standard form, by multiplying the top and bottom by \(\sqrt{17}\): \(\dfrac{13}{\sqrt{17}} = \dfrac{13\sqrt{17}}{17} \approx 3.15\).</li>
</ol>
<p class="answer">\(\therefore\ d = \dfrac{13\sqrt{17}}{17}\) units \(\approx 3.15\) units</p></div>
<div class="callout tip"><p class="callout-title">Exact answers</p><p>The teacher's solutions give both forms, for example \(\frac{7}{\sqrt{13}}\) or \(\frac{7\sqrt{13}}{13}\). Both are exact and both are accepted. Give a decimal only when the question asks for one or has a real-world context such as metres.</p></div>
<details class="check"><summary>Find the distance from the origin to the line \(3x + 4y - 10 = 0\).</summary><div class="ans"><p>\(d = \dfrac{|3(0) + 4(0) - 10|}{\sqrt{3^2 + 4^2}} = \dfrac{10}{5} = 2\).</p></div></details>

<h3 data-tier="essential">When the line is not in Cartesian form</h3>
<p>The formula only works once the line is written as \(Ax + By + C = 0\), with every term on one side and zero on the other. Worksheet questions deliberately give lines in other forms, so converting first is part of the skill. Here is how to convert from each form in 3.1 and 3.2.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Line given as</th><th>How to get Ax + By + C = 0</th><th>Example</th></tr></thead><tbody>
<tr><th>Slope and intercept</th><td>Move every term to one side.</td><td>\(y = 3x - 4 \;\to\; 3x - y - 4 = 0\)</td></tr>
<tr><th>Symmetric</th><td>Cross-multiply, expand and collect.</td><td>\(\frac{x-3}{2} = \frac{y-4}{7} \to 7x - 2y - 13 = 0\)</td></tr>
<tr><th>Vector or parametric</th><td>From \(\vec m = (a, b)\) take \(\vec n = (b, -a)\), then find \(C\) by substituting the known point.</td><td>\(\vec m = (6, 5) \to \vec n = (5, -6)\), so \(5x - 6y + C = 0\)</td></tr>
<tr><th>Vertical, \(x = k\)</th><td>\(x - k = 0\), so \(A = 1\), \(B = 0\), \(C = -k\).</td><td>\(x = -5 \to x + 5 = 0\)</td></tr>
<tr><th>Horizontal, \(y = k\)</th><td>\(y - k = 0\), so \(A = 0\), \(B = 1\), \(C = -k\).</td><td>\(y = 3 \to y - 3 = 0\)</td></tr>
</tbody></table></div>
<div class="example"><p class="example-title">Example · Find the distance from P(−1, 4) to the line r = (2, −3) + t(4, 3), t ∈ R</p>
<ol class="work">
<li>Find a normal. The formula needs Cartesian form, and the coefficients of a Cartesian equation are a normal vector. The direction vector is \(\vec m = (4, 3)\), so swap its components and negate one to get \(\vec n = (3, -4)\). Check: \((4, 3) \cdot (3, -4) = 12 - 12 = 0\).</li>
<li>Find \(C\). Start the equation as \(3x - 4y + C = 0\). The known point \((2, -3)\) is on the line, so it must satisfy the equation: \(3(2) - 4(-3) + C = 0\), so \(6 + 12 + C = 0\) and \(C = -18\). The line is \(3x - 4y - 18 = 0\).</li>
<li>Now the line is in the right form, so apply the formula with \((x_1, y_1) = (-1, 4)\): \[ d = \frac{|3(-1) - 4(4) - 18|}{\sqrt{3^2 + (-4)^2}} = \frac{|-3 - 16 - 18|}{\sqrt{25}} = \frac{|-37|}{5} = \frac{37}{5} \]</li>
</ol>
<p class="answer">\(\therefore\ d = \dfrac{37}{5} = 7.4\) units</p></div>
<p>Two facts that save time:</p>
<ul>
<li><strong>Scaling the equation changes nothing.</strong> Multiplying \(Ax + By + C = 0\) by any \(k \ne 0\) multiplies both the numerator and the denominator by \(|k|\), so \(d\) stays the same. This means you can clear fractions freely. In worksheet 11c, the direction \(\left(\frac15, \frac16\right)\) becomes \((6, 5)\) after multiplying by 30.</li>
<li><strong>\(d = 0\) means the point is on the line.</strong> Worksheet 11c and 12d both come out this way. The formula doubles as an "is this point on the line?" test.</li>
</ul>
<p>For vertical and horizontal lines the formula reduces to \(|x_1 - k|\) or \(|y_1 - k|\): just the horizontal or vertical gap, which a quick sketch confirms.</p>
<div class="callout warn"><p class="callout-title">Common slips in R²</p><ul>
<li>Using the direction vector \(\vec m\) as if it were the normal. For a line in vector form you must swap the components and negate one.</li>
<li>Sign errors when moving terms across: \(y = 3x - 4\) becomes \(3x - y - 4 = 0\), so \(C = -4\), not \(+4\).</li>
<li>Substituting the known point on the line instead of the given point. That always gives 0.</li>
<li>Dividing by \(A^2 + B^2\) instead of \(\sqrt{A^2 + B^2}\), or dropping the absolute value.</li>
</ul></div>

<h3 data-tier="essential">Why R³ needs a different method</h3>
<p>The notes start the R³ half with one line: <strong>Recall: lines in R³ do not have unique normal vectors.</strong></p>
<p>In R², a line has exactly one perpendicular direction (up to scalar multiples), so \(\vec n = (A, B)\) is well defined and the projection trick works. In R³, a whole plane of directions is perpendicular to a line. For the \(z\)-axis, with \(\vec m = (0, 0, 1)\), the vectors \((1, 0, 0)\), \((0, 1, 0)\), \((1, 1, 0)\), \((3, -2, 0)\) and so on are all perpendicular to it. There is no single \(\vec n\) to project onto, and you would not know which one points toward \(P\).</p>
<p>This is also why a line in R³ has no Cartesian equation (lesson 3.3): an equation \(Ax + By + Cz + D = 0\) describes a <em>plane</em>, which you will meet in 3.7. So in R³ the method switches to something a line <em>does</em> have, a direction vector \(\vec m\), and uses the angle between \(\vec m\) and \(\overrightarrow{P_0P}\).</p>

<h3 data-tier="likely">Deriving the R³ formula with the cross product</h3>
<p>Here is the setup from the notes. Let \(P(x_1, y_1, z_1)\) be a point in R³. Let \(P_0(x_0, y_0, z_0)\) be a known point on the line, which has direction vector \(\vec m\). Let \(\theta\) be the angle between \(\overrightarrow{P_0P}\) and \(\vec m\).</p>
<figure class="diagram narrow"><svg viewBox="0 0 520 290" role="img" aria-labelledby="fig34-r3"><title id="fig34-r3">A line through P0 with direction vector m. The vector P0P goes to the point P off the line, making angle theta with m. The perpendicular d drops from P to the line. The shaded parallelogram with sides P0P and m has base along the line and height d.</title>
<polygon class="f-soft" points="90,110 275.7,184.3 437.3,130.5 251.6,56.2"/>
<line class="s-ink" x1="34.3" y1="87.7" x2="489.3" y2="269.7" stroke-width="2"/>
<line class="s-mute dash" x1="275.7" y1="184.3" x2="437.3" y2="130.5" stroke-width="1.5"/>
<line class="s-mute dash" x1="251.6" y1="56.2" x2="437.3" y2="130.5" stroke-width="1.5"/>
<line class="s-blue" x1="90" y1="110" x2="245.9" y2="58.1" stroke-width="2"/>
<polygon class="f-blue" points="245.9,58.1 237.1,66.3 233.9,56.8"/>
<line class="s-magenta" x1="90" y1="110" x2="266" y2="180.4" stroke-width="3"/>
<polygon class="f-magenta" points="275.7,184.3 266.4,175.2 262.7,184.4"/>
<path class="s-ink" d="M 125.3 124.1 A 38 38 0 0 0 126.1 98.0" stroke-width="1.5"/>
<line class="s-teal" x1="251.6" y1="56.2" x2="210.7" y2="158.3" stroke-width="3"/>
<polyline class="s-ink" points="215.2,147.2 226.3,151.7 221.8,162.8" stroke-width="1.5"/>
<circle class="f-ink" cx="90" cy="110" r="4"/>
<circle class="f-ink" cx="251.6" cy="56.2" r="4.5"/>
<text class="t-ink" x="84" y="131" font-size="15" text-anchor="end">P₀</text>
<text class="t-ink" x="262" y="50" font-size="15">P(x₁, y₁, z₁)</text>
<text class="t-ink" x="140" y="116" font-size="15" font-style="italic">θ</text>
<text class="t-magenta" x="190" y="173" font-size="16" font-style="italic">m</text>
<text class="t-blue" x="158" y="74" font-size="15" text-anchor="middle">P₀P</text>
<text class="t-teal" x="238" y="110" font-size="16" font-style="italic">d</text>
<text class="t-ink" x="340" y="134" font-size="13" text-anchor="middle">area = |P₀P × m|</text>
</svg><figcaption>θ is the angle between P₀P and the direction vector m. In the right triangle, d = |P₀P| sin θ. The shaded parallelogram has area |P₀P × m| and base |m|, so its height is d = |P₀P × m| / |m|.</figcaption></figure>
<div class="example"><p class="example-title">Derivation · Minimum distance from P to a line through P₀ with direction m</p>
<ol class="work">
<li>The perpendicular from \(P\), the line and \(\overrightarrow{P_0P}\) form a right triangle. The hypotenuse is \(|\overrightarrow{P_0P}|\) and \(d\) is the side opposite \(\theta\), so \(\sin\theta = \dfrac{d}{|\overrightarrow{P_0P}|}\).</li>
<li>Solve for \(d\), then multiply by \(\dfrac{|\vec m|}{|\vec m|}\), which equals 1: \(d = |\overrightarrow{P_0P}|\sin\theta \times \dfrac{|\vec m|}{|\vec m|} = \dfrac{|\overrightarrow{P_0P}|\,|\vec m|\sin\theta}{|\vec m|}\).</li>
<li>Recall from the vectors unit that \(|\vec a \times \vec b| = |\vec a|\,|\vec b|\sin\theta\). The numerator is exactly \(|\overrightarrow{P_0P} \times \vec m|\).</li>
</ol>
<p class="answer">\(\therefore\ d = \dfrac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\)</p></div>
<p>Multiplying by \(|\vec m|/|\vec m|\) turns \(|\overrightarrow{P_0P}|\sin\theta\), which needs an angle, into a cross product, which you can compute straight from components. You never have to find \(\theta\).</p>
<p>The diagram gives a second way to see the formula. The parallelogram with sides \(\overrightarrow{P_0P}\) and \(\vec m\) has area \(|\overrightarrow{P_0P} \times \vec m|\). Its base is \(|\vec m|\) and its height is \(d\), and area divided by base is height.</p>
<p>What if \(\vec m\) points the other way, so that \(\theta\) is obtuse? The angle inside the triangle is then \(180^\circ - \theta\), and \(\sin(180^\circ - \theta) = \sin\theta\), so nothing changes. The formula works for any point \(P_0\) on the line and any nonzero multiple of \(\vec m\).</p>

<h3 data-tier="essential">The R³ formula and Example 2</h3>
<div class="callout key"><p class="callout-title">Minimum distance from a point to a line in R³</p>
<div class="eq">\[ d = \frac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|} \]</div>
<p>\(P\) is the given point, \(P_0\) is any known point on the line, and \(\vec m\) is the line's direction vector. You can read \(P_0\) and \(\vec m\) straight off the vector equation \(\vec r = \vec r_0 + t\vec m\).</p></div>
<div class="example"><p class="example-title">Example 2 · Determine the minimum distance from (3, −2, 1) to the line r = (1, 0, −5) + t(2, −2, 3), t ∈ R</p>
<ol class="work">
<li>Name the pieces the formula needs: a point on the line, the direction, and the given point. \(P(3, -2, 1)\) is the given point. \(P_0(1, 0, -5)\) is a known point on the line (it is \(\vec r_0\)). The direction vector is \(\vec m = (2, -2, 3)\).</li>
<li>Find the vector from the known point to the given point (head minus tail). It is the hypotenuse of the right triangle in the derivation: \(\overrightarrow{P_0P} = (3 - 1,\ -2 - 0,\ 1 - (-5)) = (2, -2, 6)\).</li>
<li>Compute \(\overrightarrow{P_0P} \times \vec m\), because its magnitude is \(|\overrightarrow{P_0P}|\,|\vec m|\sin\theta = d\,|\vec m|\), which is the distance times a length you can divide out. Use the "write it twice" layout. Write \(\overrightarrow{P_0P}\) on top and \(\vec m\) underneath, each twice, and cross out the first and last columns: \[ \begin{array}{cccccc} \cancel{2} & -2 & 6 & 2 & -2 & \cancel{6} \\ \cancel{2} & -2 & 3 & 2 & -2 & \cancel{3} \end{array} \] Each component comes from a pair of neighbouring columns: top-left times bottom-right, minus top-right times bottom-left. \[ \begin{aligned} \overrightarrow{P_0P} \times \vec m &= \big((-2)(3) - (6)(-2),\ (6)(2) - (2)(3),\ (2)(-2) - (-2)(2)\big) \\ &= (-6 + 12,\ 12 - 6,\ -4 + 4) \\ &= (6, 6, 0) \end{aligned} \]</li>
<li>Find the magnitude of the cross product: \(|\overrightarrow{P_0P} \times \vec m| = \sqrt{6^2 + 6^2 + 0^2} = \sqrt{72} = 6\sqrt2\).</li>
<li>Find the magnitude of the direction vector: \(|\vec m| = \sqrt{2^2 + (-2)^2 + 3^2} = \sqrt{17}\).</li>
<li>Divide: \(d = \dfrac{6\sqrt2}{\sqrt{17}}\). Rationalize by multiplying the top and bottom by \(\sqrt{17}\): \(d = \dfrac{6\sqrt{34}}{17}\).</li>
</ol>
<p class="answer">\(\therefore\ d = \dfrac{6\sqrt{34}}{17}\) units \(\approx 2.06\) units</p></div>
<div class="callout tip"><p class="callout-title">Check your cross product in ten seconds</p><p>A cross product is perpendicular to both vectors you crossed, so dot it with each one: \((6, 6, 0) \cdot (2, -2, 6) = 12 - 12 + 0 = 0\) and \((6, 6, 0) \cdot (2, -2, 3) = 12 - 12 + 0 = 0\). Both are zero, so the arithmetic is right. A nonzero result means there is a slip somewhere.</p></div>
<details class="check"><summary>Find the distance from \((1, 2, 3)\) to the \(z\)-axis, \(\vec r = t(0, 0, 1),\ t \in \mathbb{R}\).</summary><div class="ans"><p>Use \(P_0 = (0, 0, 0)\), so \(\overrightarrow{P_0P} = (1, 2, 3)\), and \(\vec m = (0, 0, 1)\). Then \(\overrightarrow{P_0P} \times \vec m = (2(1) - 3(0),\ 3(0) - 1(1),\ 1(0) - 2(0)) = (2, -1, 0)\), which has magnitude \(\sqrt5\), and \(|\vec m| = 1\). So \(d = \sqrt5\). That makes sense: the distance from \((x, y, z)\) to the \(z\)-axis is \(\sqrt{x^2 + y^2} = \sqrt{1 + 4}\).</p></div></details>

<h3 data-tier="likely">Finding the closest point on the line</h3>
<p>The notes stop at the distance, but test questions often add "…and find the point on the line closest to \(P\)." That point is the foot of the perpendicular, \(F\). It is the one point on the line where \(\overrightarrow{PF}\) is perpendicular to the direction vector, so you find it with a dot product.</p>
<div class="example"><p class="example-title">Example 2, continued · Find the point on r = (1, 0, −5) + t(2, −2, 3) closest to P(3, −2, 1)</p>
<ol class="work">
<li>The closest point is somewhere on the line, so describe every point of the line with one parameter, using the parametric equations: \(Q(1 + 2t,\ -2t,\ -5 + 3t)\).</li>
<li>Find the vector from \(P\) to that point, since this is the segment that must end up perpendicular to the line:\(\overrightarrow{PQ} = (1 + 2t - 3,\ -2t + 2,\ -5 + 3t - 1) = (2t - 2,\ 2 - 2t,\ 3t - 6)\).</li>
<li>The closest point is where \(\overrightarrow{PQ} \perp \vec m\), so set the dot product to zero: \[ \begin{aligned} (2t - 2,\ 2 - 2t,\ 3t - 6) \cdot (2, -2, 3) &= 0 \\ 4t - 4 - 4 + 4t + 9t - 18 &= 0 \\ 17t - 26 &= 0 \\ t &= \tfrac{26}{17} \end{aligned} \]</li>
<li>Substitute \(t = \frac{26}{17}\) back into the line: \(F = \left(1 + \frac{52}{17},\ -\frac{52}{17},\ -5 + \frac{78}{17}\right) = \left(\frac{69}{17},\ -\frac{52}{17},\ -\frac{7}{17}\right)\).</li>
<li>Check the distance: \(\overrightarrow{PF} = \left(\frac{18}{17}, -\frac{18}{17}, -\frac{24}{17}\right)\), so \(|\overrightarrow{PF}| = \frac{\sqrt{324 + 324 + 576}}{17} = \frac{\sqrt{1224}}{17} = \frac{6\sqrt{34}}{17}\). This matches the cross-product answer.</li>
</ol>
<p class="answer">\(\therefore\) the closest point is \(\left(\frac{69}{17}, -\frac{52}{17}, -\frac{7}{17}\right)\), at a distance of \(\frac{6\sqrt{34}}{17}\)</p></div>
<p>This dot-product method is a complete second route to the distance: find \(F\), then \(d = |\overrightarrow{PF}|\). It takes longer than the cross product, but it also tells you <em>where</em> the closest point is, and it works the same way in R².</p>
<details class="check"><summary>Find the point on \(4x + y - 10 = 0\) closest to \((6, -1)\), the point from Example 1.</summary><div class="ans"><p>The point \((0, 10)\) is on the line, and a direction vector perpendicular to \(\vec n = (4, 1)\) is \(\vec m = (1, -4)\). A general point is \(Q(t, 10 - 4t)\), so \(\overrightarrow{PQ} = (t - 6,\ 11 - 4t)\). Setting \(\overrightarrow{PQ} \cdot \vec m = (t - 6) - 4(11 - 4t) = 17t - 50 = 0\) gives \(t = \frac{50}{17}\), so the closest point is \(\left(\frac{50}{17}, -\frac{30}{17}\right)\). Check: \(4\left(\frac{50}{17}\right) - \frac{30}{17} - 10 = \frac{200 - 30 - 170}{17} = 0\), and its distance from \((6, -1)\) is \(\frac{13}{\sqrt{17}}\), as in Example 1.</p></div></details>

<h3 data-tier="likely">Distance between parallel lines</h3>
<p>Two parallel lines stay the same distance apart everywhere. Pick any point on one line and find its distance to the other line, and the problem becomes a point-to-line problem you already know how to do. First check that the lines really are parallel: their direction vectors (or their normals) must be scalar multiples of each other.</p>
<div class="compare"><div><h4>In R²</h4><p>Pick a convenient point on the first line and use the R² formula with the second line.</p><p>For \(2x - 3y + 4 = 0\) and \(2x - 3y - 9 = 0\), the point \((-2, 0)\) is on the first line, so \(d = \dfrac{|2(-2) - 3(0) - 9|}{\sqrt{13}} = \dfrac{13}{\sqrt{13}} = \sqrt{13}\).</p><p>When \(A\) and \(B\) match exactly there is a shortcut: \(d = \dfrac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}\).</p></div><div><h4>In R³</h4><p>Let \(P\) be the known point on one line and \(Q\) the known point on the other. Then \(d = \dfrac{|\overrightarrow{PQ} \times \vec m|}{|\vec m|}\), using either line's direction vector as \(\vec m\).</p><p>Worksheet question 15c works exactly this way and gives \(d = \dfrac{\sqrt{115070}}{74} \approx 4.58\).</p></div></div>
<p>If the distance comes out as 0, the "two" lines are really the same line (they are coincident).</p>
<div class="callout warn"><p class="callout-title">Careful with the shortcut</p><p>\(\frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}\) only works when both equations have the <em>same</em> \(A\) and \(B\). For \(2x - 3y + 4 = 0\) and \(4x - 6y - 18 = 0\), divide the second equation by 2 first to get \(2x - 3y - 9 = 0\). Using \(C_2 = -18\) as written gives the wrong answer.</p></div>

<h3 data-tier="essential">Choosing a method and avoiding mistakes</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Question</th><th>What to do</th><th>Formula</th></tr></thead><tbody>
<tr><th>Point to line in R²</th><td>Get the line into the form \(Ax + By + C = 0\), then substitute the point.</td><td>\(d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\)</td></tr>
<tr><th>Point to line in R³</th><td>Read \(P_0\) and \(\vec m\) from the vector equation, find \(\overrightarrow{P_0P}\), then take a cross product.</td><td>\(d = \frac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\)</td></tr>
<tr><th>Parallel lines</th><td>Check they are parallel, take a point on one, then find its distance to the other.</td><td>Either formula above</td></tr>
<tr><th>Closest point</th><td>Write a general point \(Q(t)\) on the line and solve \(\overrightarrow{PQ} \cdot \vec m = 0\).</td><td>\(d = |\overrightarrow{PQ}|\) at that \(t\)</td></tr>
<tr><th>Is the point on the line?</th><td>Compute the distance.</td><td>\(d = 0 \iff\) on the line</td></tr>
</tbody></table></div>
<p>The R³ formula also works for a line in R² if you add a \(z\)-component of 0 to every vector, but the Cartesian formula is much quicker there.</p>
<div class="callout warn"><p class="callout-title">Common mistakes in R³</p><ul>
<li>Dividing by \(|\overrightarrow{P_0P}|\) instead of \(|\vec m|\). The denominator is always the direction vector.</li>
<li>Using \(\overrightarrow{OP}\), the position vector of \(P\), instead of \(\overrightarrow{P_0P} = \overrightarrow{OP} - \overrightarrow{OP_0}\).</li>
<li>Leaving the answer as a vector. You need the <em>magnitude</em> of the cross product, which is a number.</li>
<li>Using \(\frac{|\overrightarrow{P_0P} \cdot \vec m|}{|\vec m|}\). That projection onto \(\vec m\) measures the distance <em>along</em> the line from \(P_0\) to the foot \(F\), not the distance from \(P\) to the line.</li>
<li>Trying to use the R² formula on a line in R³. A line in R³ has no Cartesian equation to plug into.</li>
</ul></div>

<h3 data-tier="extra">Where this leads</h3>
<p>The idea of projecting onto a normal comes back as soon as you meet planes. A plane \(Ax + By + Cz + D = 0\) in R³ <em>does</em> have a unique normal \(\vec n = (A, B, C)\), so the R² derivation carries straight over and gives</p>
<div class="eq">\[ d = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}} \]</div>
<p>On the unit review summary sheet, the teacher puts all three distance formulas in one row: line in R², line in R³, plane in R³. Learn them as a set. The R² line formula and the plane formula look alike because they come from the same projection. The R³ line formula is the odd one out, because a line in R³ has no unique normal.</p>
<p>The same tools also give the distance between skew lines in R³, by projecting onto \(\vec m_1 \times \vec m_2\). The Beyond the notes pages for this lesson cover skew lines, the point-to-plane formula and signed distance.</p>
`
});

window.QA.push({
  id: "qa-34", lesson: "3.4",
  title: "3.4 Worksheet: Minimum Distance from a Point to a Line",
  source: "C - Worksheet (questions) and D - Worksheet Solutions (teacher's answers)",
  items: [
    { tier: "essential",
      q: String.raw`<strong>11a.</strong> Find the distance from \(Q(3, -2)\) to the line \(3x - 2y - 6 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Distance from a point to a line in R², with the line already in Cartesian form · <strong>Plan:</strong> "Distance" means the shortest, perpendicular distance, and the R² formula gives it directly. The line is already written as \(Ax + By + C = 0\), so read off \(A\), \(B\) and \(C\) and substitute the point.</p>
<ol class="work">
<li>Identify the pieces, because the formula is built from them. Comparing \(3x - 2y - 6 = 0\) with \(Ax + By + C = 0\) gives \(A = 3\), \(B = -2\), \(C = -6\). The given point is \((x_1, y_1) = (3, -2)\).</li>
<li>Substitute into \(d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\). The numerator measures how far the point is from satisfying the equation, and the denominator is \(|\vec n|\), which turns that into a length. \[ d = \frac{|3(3) - 2(-2) - 6|}{\sqrt{3^2 + (-2)^2}} \]</li>
<li>Simplify, watching the double negative \(-2(-2) = +4\): \[ d = \frac{|9 + 4 - 6|}{\sqrt{13}} = \frac{7}{\sqrt{13}} \]</li>
<li>Rationalize if you like by multiplying the top and bottom by \(\sqrt{13}\). The teacher accepts either form.</li>
</ol>
<p class="answer">\(d = \dfrac{7}{\sqrt{13}}\) or \(\dfrac{7\sqrt{13}}{13} \approx 1.94\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>11b.</strong> Find the distance from \(Q(3, -2)\) to the line \(\dfrac{x - 3}{2} = \dfrac{y - 4}{7}\).`,
      a: String.raw`<p><strong>Type:</strong> Distance from a point to a line in R², with the line in symmetric form · <strong>Plan:</strong> The formula only works for \(Ax + By + C = 0\), so first turn the symmetric equation into Cartesian form by cross-multiplying, then substitute \(Q\).</p>
<ol class="work">
<li>Convert to Cartesian form. Cross-multiply to clear the fractions, expand, then move every term to one side so the equation equals 0: \[ \begin{aligned} 7(x - 3) &= 2(y - 4) \\ 7x - 21 &= 2y - 8 \\ 7x - 2y - 13 &= 0 \end{aligned} \]</li>
<li>Read off \(A = 7\), \(B = -2\), \(C = -13\). The point is \((x_1, y_1) = (3, -2)\).</li>
<li>Substitute and simplify: \[ \begin{aligned} d &= \frac{|7(3) - 2(-2) - 13|}{\sqrt{7^2 + (-2)^2}} \\ &= \frac{|21 + 4 - 13|}{\sqrt{53}} \\ &= \frac{12}{\sqrt{53}} \end{aligned} \]</li>
</ol>
<p class="answer">\(d = \dfrac{12}{\sqrt{53}}\) or \(\dfrac{12\sqrt{53}}{53} \approx 1.65\)</p>`,
      note: String.raw`Check the conversion before you use it: the point \((3, 4)\) from the symmetric form satisfies \(7(3) - 2(4) - 13 = 0\), and the normal \((7, -2)\) is perpendicular to the direction \((2, 7)\).` },
    { tier: "essential",
      q: String.raw`<strong>11c.</strong> Find the distance from \(Q(3, -2)\) to the line \(\vec r = (-3, -7) + t\left(\tfrac15, \tfrac16\right)\).`,
      a: String.raw`<p><strong>Type:</strong> Distance from a point to a line in R², with the line in vector form · <strong>Plan:</strong> A vector equation has no \(A\), \(B\), \(C\) to read off, so build the Cartesian equation first: turn the direction vector into a normal, find \(C\) using the known point, then use the distance formula.</p>
<ol class="work">
<li>Clean up the direction vector. Fractions are awkward, and any nonzero multiple of a direction vector is still a direction vector, so multiply by 30: \(\vec m = \left(\tfrac15, \tfrac16\right)\), or \(30\left(\tfrac15, \tfrac16\right) = (6, 5)\).</li>
<li>Get a normal, because the Cartesian coefficients are a normal vector. Swap the components and negate one: \(\vec n = (5, -6)\). Check: \((6, 5) \cdot (5, -6) = 30 - 30 = 0\).</li>
<li>Find \(C\). The known point \((-3, -7)\) is on the line, so it must satisfy \(5x - 6y + C = 0\): \[ \begin{aligned} 5(-3) - 6(-7) + C &= 0 \\ -15 + 42 + C &= 0 \\ C &= -27 \end{aligned} \] \(\therefore\) the line is \(5x - 6y - 27 = 0\).</li>
<li>Substitute \(Q(3, -2)\) into the distance formula: \[ \begin{aligned} d &= \frac{|5(3) - 6(-2) - 27|}{\sqrt{5^2 + (-6)^2}} \\ &= \frac{|15 + 12 - 27|}{\sqrt{61}} \\ &= \frac{0}{\sqrt{61}} = 0 \end{aligned} \]</li>
<li>Interpret the result. A distance of 0 means \(Q\) satisfies the line's equation, so it is on the line.</li>
</ol>
<p class="answer">\(d = 0\), \(\therefore\) the point \(Q(3, -2)\) is on the line</p>`,
      note: String.raw`You can confirm it directly: \((3, -2) - (-3, -7) = (6, 5) = 30\left(\tfrac15, \tfrac16\right)\), so \(Q\) is the point where \(t = 30\).` },
    { tier: "essential",
      q: String.raw`<strong>11d.</strong> Find the distance from \(Q(3, -2)\) to the line \(x = -5\).`,
      a: String.raw`<p><strong>Type:</strong> Distance from a point to a vertical line in R² · <strong>Plan:</strong> \(x = -5\) is still a Cartesian equation, just with no \(y\)-term (\(B = 0\)). Move everything to one side and use the formula, then check the result against a sketch: it should be the horizontal gap.</p>
<ol class="work">
<li>Rewrite the line so it equals 0: \(x + 5 = 0\). So \(A = 1\), \(B = 0\), \(C = 5\).</li>
<li>Substitute \(Q(3, -2)\): \[ d = \frac{|1(3) + 0(-2) + 5|}{\sqrt{1^2 + 0^2}} = \frac{|8|}{1} = 8 \]</li>
<li>Check with a sketch. The line is vertical, so the perpendicular from \(Q\) is horizontal, and the gap is \(3 - (-5) = 8\).</li>
</ol>
<p class="answer">\(d = 8\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>12a.</strong> Find the distance from \((4, 7)\) to the line \(6x + 3y - 10 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Distance from a point to a line in R² · <strong>Plan:</strong> All four parts of question 12 use the same line, so simplify the denominator \(\sqrt{6^2 + 3^2}\) once and reuse it. Then for each point, substitute, simplify and rationalize.</p>
<ol class="work">
<li>Identify the pieces: \(A = 6\), \(B = 3\), \(C = -10\). Simplify the shared denominator: \(\sqrt{6^2 + 3^2} = \sqrt{45} = \sqrt{9 \cdot 5} = 3\sqrt5\).</li>
<li>Substitute \((x_1, y_1) = (4, 7)\): \[ d = \frac{|6(4) + 3(7) - 10|}{\sqrt{45}} = \frac{|24 + 21 - 10|}{3\sqrt5} = \frac{35}{3\sqrt5} \]</li>
<li>Rationalize by multiplying the top and bottom by \(\sqrt5\), then reduce: \(\dfrac{35\sqrt5}{15} = \dfrac{7\sqrt5}{3}\).</li>
</ol>
<p class="answer">\(d = \dfrac{7\sqrt5}{3} \approx 5.22\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>12b.</strong> Find the distance from \((4, -8)\) to the line \(6x + 3y - 10 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Distance from a point to a line in R² · <strong>Plan:</strong> Same line and denominator \((3\sqrt5)\) as 12a, so substitute \((4, -8)\). This time the value inside the bars is negative, which is exactly why the absolute value is there.</p>
<ol class="work">
<li>Substitute \((x_1, y_1) = (4, -8)\): \[ d = \frac{|6(4) + 3(-8) - 10|}{\sqrt{45}} = \frac{|24 - 24 - 10|}{3\sqrt5} \]</li>
<li>Take the absolute value, because a distance can't be negative: \(|-10| = 10\), so \(d = \dfrac{10}{3\sqrt5}\).</li>
<li>Rationalize and reduce: \(\dfrac{10\sqrt5}{15} = \dfrac{2\sqrt5}{3}\).</li>
</ol>
<p class="answer">\(d = \dfrac{2\sqrt5}{3} \approx 1.49\)</p>`,
      note: String.raw`The value inside the bars is \(-10\) here but \(+35\) in 12a. The opposite signs tell you that \((4, 7)\) and \((4, -8)\) are on opposite sides of the line.` },
    { tier: "essential",
      q: String.raw`<strong>12c.</strong> Find the distance from \((0, 5)\) to the line \(6x + 3y - 10 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Distance from a point to a line in R² · <strong>Plan:</strong> Same line and denominator \((3\sqrt5)\) as 12a, so substitute \((0, 5)\), simplify and rationalize.</p>
<ol class="work">
<li>Substitute \((x_1, y_1) = (0, 5)\): \[ d = \frac{|6(0) + 3(5) - 10|}{3\sqrt5} = \frac{5}{3\sqrt5} \]</li>
<li>Rationalize and reduce: \(\dfrac{5\sqrt5}{15} = \dfrac{\sqrt5}{3}\).</li>
</ol>
<p class="answer">\(d = \dfrac{\sqrt5}{3} \approx 0.745\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>12d.</strong> Find the distance from \(\left(5, -\tfrac{20}{3}\right)\) to the line \(6x + 3y - 10 = 0\).`,
      a: String.raw`<p><strong>Type:</strong> Distance from a point to a line in R² (the point turns out to be on the line) · <strong>Plan:</strong> Substitute as before. If the numerator comes out as 0, the point satisfies the equation, so it is on the line.</p>
<ol class="work">
<li>Substitute \((x_1, y_1) = \left(5, -\tfrac{20}{3}\right)\). The 3 cancels the fraction: \(3\left(-\tfrac{20}{3}\right) = -20\). \[ d = \frac{\left|6(5) + 3\left(-\tfrac{20}{3}\right) - 10\right|}{3\sqrt5} = \frac{|30 - 20 - 10|}{3\sqrt5} = 0 \]</li>
<li>Interpret: the numerator is 0 because the point satisfies \(6x + 3y - 10 = 0\).</li>
</ol>
<p class="answer">\(d = 0\), so the point \(\left(5, -\tfrac{20}{3}\right)\) lies on the line</p>` },
    { tier: "likely",
      q: String.raw`<strong>15a.</strong> Prove that the distance from a point \(Q\) in space to a line through a point \(P\) with direction vector \(\vec d\) is equal to \(\dfrac{|\overrightarrow{PQ} \times \vec d|}{|\vec d|}\).`,
      a: String.raw`<p><strong>Type:</strong> Proof of the R³ point-to-line distance formula · <strong>Plan:</strong> This is the derivation from the lesson notes with new letters. Build a right triangle in which the distance is the side opposite \(\theta\), write the distance using \(\sin\theta\), then multiply by \(\frac{|\vec d|}{|\vec d|}\) so the numerator becomes the magnitude of a cross product.</p>
<ol class="work">
<li>Set up. Here \(P\) is the known point on the line and \(Q\) is the point in space. Let \(\theta\) be the angle between \(\overrightarrow{PQ}\) and \(\vec d\), and let \(F\) be the foot of the perpendicular from \(Q\) to the line. Call the distance \(D = |QF|\), so it doesn't clash with the vector \(\vec d\).</li>
<li>Use the right triangle. Triangle \(PFQ\) has a right angle at \(F\), hypotenuse \(|\overrightarrow{PQ}|\), and \(D\) opposite the angle at \(P\). So \(\sin\theta = \dfrac{D}{|\overrightarrow{PQ}|}\), which gives \(D = |\overrightarrow{PQ}|\sin\theta\). If \(\theta\) is obtuse, the angle inside the triangle is \(180^\circ - \theta\), and \(\sin(180^\circ - \theta) = \sin\theta\), so this still holds.</li>
<li>Multiply by \(\dfrac{|\vec d|}{|\vec d|} = 1\). This creates the product \(|\overrightarrow{PQ}|\,|\vec d|\sin\theta\), which you can compute without knowing \(\theta\): \[ D = |\overrightarrow{PQ}|\sin\theta \times \frac{|\vec d|}{|\vec d|} = \frac{|\overrightarrow{PQ}|\,|\vec d|\sin\theta}{|\vec d|} \]</li>
<li>Recognize the cross product. Since \(|\vec a \times \vec b| = |\vec a|\,|\vec b|\sin\theta\), the numerator is \(|\overrightarrow{PQ} \times \vec d|\).</li>
</ol>
<p class="answer">\(\therefore\ D = \dfrac{|\overrightarrow{PQ} \times \vec d|}{|\vec d|}\) &#8718;</p>
<p>If \(Q\) is on the line, then \(\theta = 0^\circ\) or \(180^\circ\) (or \(\overrightarrow{PQ} = \vec 0\)), and both sides equal 0, so the formula still holds.</p>`,
      note: String.raw`The teacher's solution says "see lesson notes". In the notes the same proof uses \(P_0\), \(P\) and \(\vec m\) instead of \(P\), \(Q\) and \(\vec d\).` },
    { tier: "essential",
      q: String.raw`<strong>15b.</strong> Find the distance from the point \(Q(1, -2, -3)\) to the line \(\vec r = (3, 1, 0) + t(1, 1, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Distance from a point to a line in R³ · <strong>Plan:</strong> A line in R³ has no unique normal, so the R² formula is out. Use \(d = \frac{|\overrightarrow{PQ} \times \vec m|}{|\vec m|}\): read a point and the direction from the vector equation, form the vector from the line to \(Q\), cross it with \(\vec m\), and divide the magnitudes.</p>
<ol class="work">
<li>Read off the line's pieces from \(\vec r = \vec r_0 + t\vec m\): the known point is \(P(3, 1, 0)\) and the direction is \(\vec m = (1, 1, 2)\).</li>
<li>Find the vector from the line to the point (head minus tail): \(\overrightarrow{PQ} = (1 - 3,\ -2 - 1,\ -3 - 0) = (-2, -3, -3)\).</li>
<li>Cross it with \(\vec m\), because \(|\overrightarrow{PQ} \times \vec m| = |\overrightarrow{PQ}|\,|\vec m|\sin\theta = d\,|\vec m|\). Write each vector twice and cross out the end columns: \[ \begin{array}{cccccc} \cancel{-2} & -3 & -3 & -2 & -3 & \cancel{-3} \\ \cancel{1} & 1 & 2 & 1 & 1 & \cancel{2} \end{array} \] \[ \begin{aligned} \overrightarrow{PQ} \times \vec m &= \big((-3)(2) - (-3)(1),\ (-3)(1) - (-2)(2),\ (-2)(1) - (-3)(1)\big) \\ &= (-6 + 3,\ -3 + 4,\ -2 + 3) \\ &= (-3, 1, 1) \end{aligned} \]</li>
<li>Find both magnitudes: \(|\overrightarrow{PQ} \times \vec m| = \sqrt{(-3)^2 + 1^2 + 1^2} = \sqrt{11}\) and \(|\vec m| = \sqrt{1^2 + 1^2 + 2^2} = \sqrt6\).</li>
<li>Divide, since \(d = \frac{d\,|\vec m|}{|\vec m|}\): \(d = \dfrac{\sqrt{11}}{\sqrt6}\). To rationalize, multiply the top and bottom by \(\sqrt6\).</li>
</ol>
<p class="answer">\(d = \dfrac{\sqrt{11}}{\sqrt6}\) or \(\dfrac{\sqrt{66}}{6} \approx 1.35\)</p>`,
      note: String.raw`Check the cross product: \((-3, 1, 1) \cdot (-2, -3, -3) = 6 - 3 - 3 = 0\) and \((-3, 1, 1) \cdot (1, 1, 2) = -3 + 1 + 2 = 0\).` },
    { tier: "likely",
      q: String.raw`<strong>15c.</strong> Find the distance between the parallel lines \(\vec r = (-2, 2, 1) + t(7, 3, -4)\) and \(\vec r = (2, -1, -2) + u(7, 3, -4)\).`,
      a: String.raw`<p><strong>Type:</strong> Distance between parallel lines in R³ · <strong>Plan:</strong> Parallel lines are the same distance apart everywhere, so the answer is the distance from any one point on the second line to the first line. That turns it into a point-to-line problem in R³, solved with the cross-product formula.</p>
<ol class="work">
<li>Confirm the lines are parallel. Both have direction \(\vec m = (7, 3, -4)\).</li>
<li>Choose the points. Let \(P(-2, 2, 1)\) be the known point on the first line and \(Q(2, -1, -2)\) the known point on the second. The vector between them is \(\overrightarrow{PQ} = (2 - (-2),\ -1 - 2,\ -2 - 1) = (4, -3, -3)\).</li>
<li>Cross \(\overrightarrow{PQ}\) with \(\vec m\), as in 15b: \[ \begin{array}{cccccc} \cancel{4} & -3 & -3 & 4 & -3 & \cancel{-3} \\ \cancel{7} & 3 & -4 & 7 & 3 & \cancel{-4} \end{array} \] \[ \begin{aligned} \overrightarrow{PQ} \times \vec m &= \big((-3)(-4) - (-3)(3),\ (-3)(7) - (4)(-4),\ (4)(3) - (-3)(7)\big) \\ &= (12 + 9,\ -21 + 16,\ 12 + 21) \\ &= (21, -5, 33) \end{aligned} \]</li>
<li>Find both magnitudes: \(|\overrightarrow{PQ} \times \vec m| = \sqrt{21^2 + (-5)^2 + 33^2} = \sqrt{441 + 25 + 1089} = \sqrt{1555}\) and \(|\vec m| = \sqrt{7^2 + 3^2 + (-4)^2} = \sqrt{74}\).</li>
<li>Divide, then rationalize by multiplying the top and bottom by \(\sqrt{74}\): \[ d = \frac{\sqrt{1555}}{\sqrt{74}} = \frac{\sqrt{1555 \times 74}}{74} = \frac{\sqrt{115070}}{74} \]</li>
</ol>
<p class="answer">\(d = \dfrac{\sqrt{115070}}{74} \approx 4.58\)</p>`,
      note: String.raw`The root does not simplify, because \(1555 = 5 \times 311\) and \(74 = 2 \times 37\). Check the cross product: \((21, -5, 33) \cdot (4, -3, -3) = 84 + 15 - 99 = 0\) and \((21, -5, 33) \cdot (7, 3, -4) = 147 - 15 - 132 = 0\).` }
  ]
});

window.QUIZ.push(
  { id: "q34-01", lesson: "3.4", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`The shortest distance from a point to a line is the ______ distance.`,
    options: [String.raw`horizontal`, String.raw`vertical`, String.raw`perpendicular`, String.raw`measured along the direction vector`],
    answer: 2,
    explain: String.raw`Of all the segments from a point to a line, the perpendicular one is the shortest: any other segment \(PQ\) is the hypotenuse of a right triangle that has the perpendicular as a leg, so it is longer. A horizontal distance is shortest only for a vertical line, and a vertical distance only for a horizontal line. A distance measured along the direction vector runs along the line, not to it.` },
  { id: "q34-02", lesson: "3.4", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`What is the minimum distance from \(Q(2, -4)\) to the line \(2x + 3y - 7 = 0\)?`,
    options: [String.raw`\(\dfrac{15\sqrt{13}}{13}\)`, String.raw`\(\dfrac{\sqrt{13}}{13}\)`, String.raw`\(\dfrac{15}{13}\)`, String.raw`\(3\sqrt5\)`],
    answer: 0,
    explain: String.raw`With \(A = 2\), \(B = 3\), \(C = -7\): \(d = \frac{|2(2) + 3(-4) - 7|}{\sqrt{4 + 9}} = \frac{|4 - 12 - 7|}{\sqrt{13}} = \frac{15}{\sqrt{13}} = \frac{15\sqrt{13}}{13}\). This is question 4 on the unit review sheet. \(\frac{\sqrt{13}}{13}\) comes from a sign slip on \(C\) (using \(+7\)). \(\frac{15}{13}\) forgets the square root. \(3\sqrt5 = \frac{15}{\sqrt5}\) divides by \(\sqrt{2 + 3}\) instead of \(\sqrt{2^2 + 3^2}\).` },
  { id: "q34-03", lesson: "3.4", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`In \(d = \dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\), the point \((x_1, y_1)\) must be a point on the line.`,
    answer: false,
    explain: String.raw`False. \((x_1, y_1)\) is the given point, the one whose distance you want, and it is usually <em>off</em> the line. The known point on the line, \(P_0(x_0, y_0)\), was used in the derivation, but it disappeared when \(Ax_0 + By_0 + C = 0\) let you replace \(-Ax_0 - By_0\) with \(C\). If you substitute a point that is on the line, you always get 0.` },
  { id: "q34-04", lesson: "3.4", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`In the derivation of the R² formula, the minimum distance \(d\) is the magnitude of the projection of …`,
    options: [String.raw`\(\overrightarrow{P_0P}\) onto the direction vector \(\vec m\)`, String.raw`\(\overrightarrow{P_0P}\) onto the normal \(\vec n\)`, String.raw`\(\vec n\) onto \(\overrightarrow{P_0P}\)`, String.raw`\(\overrightarrow{OP}\) onto \(\vec n\)`],
    answer: 1,
    explain: String.raw`The perpendicular distance is the part of \(\overrightarrow{P_0P}\) that points perpendicular to the line, which is the direction of \(\vec n = (A, B)\). So \(d = \frac{|\overrightarrow{P_0P} \cdot \vec n|}{|\vec n|}\). Projecting onto \(\vec m\) measures how far <em>along</em> the line \(P\) is from \(P_0\). Projecting \(\vec n\) onto \(\overrightarrow{P_0P}\) divides by the wrong length. \(\overrightarrow{OP}\) starts at the origin, which is usually not on the line.` },
  { id: "q34-05", lesson: "3.4", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`In the R² derivation, the step from \(\dfrac{|Ax_1 + By_1 + (-Ax_0 - By_0)|}{\sqrt{A^2 + B^2}}\) to \(\dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\) is allowed because …`,
    options: [String.raw`\(\vec n = (A, B)\) is perpendicular to the line`, String.raw`the absolute value makes the sign of each term irrelevant`, String.raw`\(P_0\) is the origin, so \(x_0 = y_0 = 0\)`, String.raw`\(P_0\) lies on the line, so \(Ax_0 + By_0 + C = 0\)`],
    answer: 3,
    explain: String.raw`\(P_0\) is a point on the line, so its coordinates satisfy the equation: \(Ax_0 + By_0 + C = 0\), which means \(C = -Ax_0 - By_0\). The other options don't justify this step. The normal being perpendicular is why you project onto \(\vec n\) in the first place. The absolute value only fixes the overall sign, not individual terms. \(P_0\) can be any point on the line, and it is usually not the origin.` },
  { id: "q34-06", lesson: "3.4", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`What is the distance from \((1, 2)\) to the line \(y = 3x - 4\)?`,
    options: [String.raw`\(\dfrac{3\sqrt{10}}{10}\)`, String.raw`\(-\dfrac{3\sqrt{10}}{10}\)`, String.raw`\(\dfrac{\sqrt{10}}{2}\)`, String.raw`\(\dfrac{3}{10}\)`],
    answer: 0,
    explain: String.raw`First rewrite the line as \(3x - y - 4 = 0\), so \(A = 3\), \(B = -1\), \(C = -4\). Then \(d = \frac{|3(1) - 2 - 4|}{\sqrt{9 + 1}} = \frac{|-3|}{\sqrt{10}} = \frac{3\sqrt{10}}{10}\). The negative option forgets the absolute value, and a distance is never negative. \(\frac{\sqrt{10}}{2} = \frac{5}{\sqrt{10}}\) comes from using \(C = +4\), a sign slip when moving the \(-4\) across. \(\frac{3}{10}\) forgets the square root.` },
  { id: "q34-07", lesson: "3.4", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`In \(d = \dfrac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\), you get the same distance no matter which point on the line you use as \(P_0\) and which nonzero multiple of the direction vector you use as \(\vec m\).`,
    answer: true,
    explain: String.raw`True. Moving \(P_0\) along the line changes \(\overrightarrow{P_0P}\) by a multiple of \(\vec m\), and \(\vec m \times \vec m = \vec 0\), so the cross product does not change. Replacing \(\vec m\) with \(k\vec m\) multiplies both the numerator and the denominator by \(|k|\). The distance depends only on the point and the line, not on how you describe the line.` },
  { id: "q34-08", lesson: "3.4", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`What is the distance from \(P(4, 1, 5)\) to the line \(\vec r = (1, -1, 2) + t(2, 1, 2),\ t \in \mathbb{R}\)?`,
    options: [String.raw`\(\sqrt2\)`, String.raw`\(\dfrac{\sqrt2}{3}\)`, String.raw`\(\dfrac{\sqrt2}{9}\)`, String.raw`\(\dfrac{14}{3}\)`],
    answer: 1,
    explain: String.raw`\(\overrightarrow{P_0P} = (4 - 1,\ 1 + 1,\ 5 - 2) = (3, 2, 3)\) and \(\vec m = (2, 1, 2)\). Then \(\overrightarrow{P_0P} \times \vec m = (2 \cdot 2 - 3 \cdot 1,\ 3 \cdot 2 - 3 \cdot 2,\ 3 \cdot 1 - 2 \cdot 2) = (1, 0, -1)\), with magnitude \(\sqrt2\), and \(|\vec m| = 3\). So \(d = \frac{\sqrt2}{3}\). \(\sqrt2\) forgets to divide by \(|\vec m|\). \(\frac{\sqrt2}{9}\) divides by \(|\vec m|^2\). \(\frac{14}{3} = \frac{|\overrightarrow{P_0P} \cdot \vec m|}{|\vec m|}\) is the distance along the line, not to it.` },
  { id: "q34-09", lesson: "3.4", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`Why can't you use a formula like \(\dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\) for a line in R³?`,
    options: [String.raw`A line in R³ has no direction vector.`, String.raw`A line in R³ has no unique normal vector, so there is no single \(\vec n\) to project onto and no Cartesian equation.`, String.raw`Distances can't be found with vectors in R³.`, String.raw`The cross product only exists in R².`],
    answer: 1,
    explain: String.raw`As the notes say, lines in R³ do not have unique normal vectors: a whole plane of directions is perpendicular to the line. With no single \(\vec n\) there is nothing to project onto, and an equation \(Ax + By + Cz + D = 0\) would describe a plane, not a line. Lines in R³ do have direction vectors, which is exactly what the R³ method uses. The cross product is a 3-D operation, not a 2-D one.` },
  { id: "q34-10", lesson: "3.4", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`In the R³ derivation, \(d = |\overrightarrow{P_0P}|\sin\theta\). What is \(\theta\)?`,
    options: [String.raw`The angle between \(\overrightarrow{P_0P}\) and a normal \(\vec n\)`, String.raw`The angle between \(\overrightarrow{OP}\) and \(\vec m\)`, String.raw`The angle between \(\overrightarrow{P_0P}\) and the direction vector \(\vec m\)`, String.raw`The angle between the line and the \(x\)-axis`],
    answer: 2,
    explain: String.raw`In the right triangle, \(|\overrightarrow{P_0P}|\) is the hypotenuse, the line lies along \(\vec m\), and \(d\) is the side opposite the angle between \(\overrightarrow{P_0P}\) and \(\vec m\). That is why the numerator becomes \(|\overrightarrow{P_0P} \times \vec m| = |\overrightarrow{P_0P}|\,|\vec m|\sin\theta\). A line in R³ has no unique normal, \(\overrightarrow{OP}\) starts at the origin rather than on the line, and the \(x\)-axis plays no part.` },
  { id: "q34-11", lesson: "3.4", type: "tf", kind: "knowledge", tier: "likely",
    q: String.raw`\(|\overrightarrow{P_0P} \times \vec m|\) is the area of the parallelogram with sides \(\overrightarrow{P_0P}\) and \(\vec m\), so dividing by the base \(|\vec m|\) gives the parallelogram's height, which is the distance \(d\).`,
    answer: true,
    explain: String.raw`True. The magnitude of a cross product is the area of the parallelogram the two vectors span. That parallelogram has one side along the line (length \(|\vec m|\)), and its height is the perpendicular distance from \(P\) to the line. Area divided by base is height, which gives the same formula as the \(\sin\theta\) derivation.` },
  { id: "q34-12", lesson: "3.4", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`What is the distance from \((-2, 7)\) to the line \(y = 3\)?`,
    options: [String.raw`\(10\)`, String.raw`\(5\)`, String.raw`\(7\)`, String.raw`\(4\)`],
    answer: 3,
    explain: String.raw`Write the line as \(0x + 1y - 3 = 0\). Then \(d = \frac{|0(-2) + 7 - 3|}{\sqrt{0 + 1}} = 4\), which is just the vertical gap \(7 - 3\). \(10\) comes from writing the line as \(y + 3 = 0\). \(5 = |-2 - 3|\) wrongly uses the \(x\)-coordinate. \(7\) is the distance to the \(x\)-axis, not to \(y = 3\).` },
  { id: "q34-13", lesson: "3.4", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`What is the distance from the origin to the line \(\vec r = (2, 1) + t(1, -1),\ t \in \mathbb{R}\)?`,
    options: [String.raw`\(\dfrac{\sqrt2}{2}\)`, String.raw`\(\dfrac{3\sqrt2}{2}\)`, String.raw`\(\dfrac{3}{2}\)`, String.raw`\(\sqrt5\)`],
    answer: 1,
    explain: String.raw`From \(\vec m = (1, -1)\), a normal is \(\vec n = (1, 1)\). Substituting \((2, 1)\) into \(x + y + C = 0\) gives \(C = -3\). Then \(d = \frac{|0 + 0 - 3|}{\sqrt2} = \frac{3}{\sqrt2} = \frac{3\sqrt2}{2}\). \(\frac{\sqrt2}{2}\) comes from using the direction vector as if it were the normal (\(x - y - 1 = 0\)). \(\frac32\) forgets the square root. \(\sqrt5\) is the distance to the point \((2, 1)\), which is not the closest point on the line.` },
  { id: "q34-14", lesson: "3.4", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`For a point \(P\) and a line in R³ through \(P_0\) with direction \(\vec m\), a student computes \(\dfrac{|\overrightarrow{P_0P} \cdot \vec m|}{|\vec m|}\). What has the student actually found?`,
    options: [String.raw`The perpendicular distance from \(P\) to the line`, String.raw`The area of the parallelogram formed by \(\overrightarrow{P_0P}\) and \(\vec m\)`, String.raw`The distance from \(P\) to \(P_0\)`, String.raw`The distance along the line from \(P_0\) to the foot of the perpendicular from \(P\)`],
    answer: 3,
    explain: String.raw`This is the magnitude of the projection of \(\overrightarrow{P_0P}\) onto \(\vec m\), the "shadow" of \(\overrightarrow{P_0P}\) <em>along</em> the line. It reaches from \(P_0\) to the foot \(F\). The perpendicular distance needs the cross product (or \(\sin\theta\)), not the dot product. The parallelogram area is \(|\overrightarrow{P_0P} \times \vec m|\), and \(|\overrightarrow{P_0P}|\) is the distance to \(P_0\).` },
  { id: "q34-15", lesson: "3.4", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`What is the distance between the parallel lines \(3x - 4y + 2 = 0\) and \(3x - 4y - 8 = 0\)?`,
    options: [String.raw`\(\dfrac{6}{5}\)`, String.raw`\(10\)`, String.raw`\(2\)`, String.raw`\(\dfrac{10}{7}\)`],
    answer: 2,
    explain: String.raw`The point \((2, 2)\) is on the first line, since \(6 - 8 + 2 = 0\). Its distance to the second line is \(\frac{|3(2) - 4(2) - 8|}{\sqrt{9 + 16}} = \frac{10}{5} = 2\). The shortcut gives the same: \(\frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}} = \frac{|2 - (-8)|}{5} = 2\). \(\frac65\) uses \(|C_1 + C_2|\). \(10\) forgets to divide. \(\frac{10}{7}\) divides by \(|A| + |B|\).` },
  { id: "q34-16", lesson: "3.4", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Which point on the line \(\vec r = t(1, 2, 2),\ t \in \mathbb{R}\) is closest to \(P(9, 0, 0)\)?`,
    options: [String.raw`\((3, 6, 6)\)`, String.raw`\((9, 18, 18)\)`, String.raw`\((-1, -2, -2)\)`, String.raw`\((1, 2, 2)\)`],
    answer: 3,
    explain: String.raw`A general point on the line is \(Q(t, 2t, 2t)\), so \(\overrightarrow{PQ} = (t - 9, 2t, 2t)\). Setting \(\overrightarrow{PQ} \cdot (1, 2, 2) = t - 9 + 4t + 4t = 9t - 9 = 0\) gives \(t = 1\), so \(Q = (1, 2, 2)\). Check: \(\overrightarrow{PQ} = (-8, 2, 2)\) is perpendicular to \((1, 2, 2)\), and \(|\overrightarrow{PQ}| = 6\sqrt2\) matches the cross-product formula. \((3, 6, 6)\) comes from dividing \(\overrightarrow{OP} \cdot \vec m = 9\) by \(|\vec m| = 3\) instead of \(|\vec m|^2 = 9\). \((9, 18, 18)\) doesn't divide at all. \((-1, -2, -2)\) is a sign error.` },
  { id: "q34-17", lesson: "3.4", type: "tf", kind: "knowledge", tier: "likely",
    q: String.raw`Using \(\vec m \times \overrightarrow{P_0P}\) instead of \(\overrightarrow{P_0P} \times \vec m\) gives a different distance.`,
    answer: false,
    explain: String.raw`False. Reversing the order of a cross product gives the opposite vector, \(\vec m \times \overrightarrow{P_0P} = -(\overrightarrow{P_0P} \times \vec m)\), and opposite vectors have the same magnitude. The formula only uses the magnitude, so the distance is the same.` },
  { id: "q34-18", lesson: "3.4", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`Example 1 found the distance from \((6, -1)\) to \(4x + y - 10 = 0\). If you multiply the equation by 3 to get \(12x + 3y - 30 = 0\) and use the formula again, the distance …`,
    options: [String.raw`stays the same`, String.raw`triples`, String.raw`is divided by 3`, String.raw`is multiplied by \(\sqrt3\)`],
    answer: 0,
    explain: String.raw`Numerator: \(|12(6) + 3(-1) - 30| = 39 = 3 \times 13\). Denominator: \(\sqrt{144 + 9} = \sqrt{153} = 3\sqrt{17}\). The 3s cancel, so \(d = \frac{13}{\sqrt{17}}\) again. Both equations describe the same line, so the distance can't change. That is why you can clear fractions freely before using the formula, as in worksheet 11c. A related fact: if the formula ever gives 0, the point is on the line.` },
  { id: "q34-19", lesson: "3.4", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`To find the distance from a point to the line \(\dfrac{x - 1}{3} = \dfrac{y + 2}{-2}\), which Cartesian equation should you use?`,
    options: [String.raw`\(3x - 2y - 7 = 0\)`, String.raw`\(2x + 3y - 4 = 0\)`, String.raw`\(2x + 3y + 4 = 0\)`, String.raw`\(2x - 3y - 8 = 0\)`],
    answer: 2,
    explain: String.raw`Cross-multiply: \(-2(x - 1) = 3(y + 2)\), so \(-2x + 2 = 3y + 6\), which gives \(2x + 3y + 4 = 0\). Check: \((1, -2)\) gives \(2 - 6 + 4 = 0\), and the normal \((2, 3)\) is perpendicular to the direction \((3, -2)\). \(3x - 2y - 7 = 0\) uses the direction vector as the normal. \(2x + 3y - 4 = 0\) has a sign slip in \(C\). \(2x - 3y - 8 = 0\) comes from dropping the negative sign in the denominator \(-2\).` },
  { id: "q34-20", lesson: "3.4", type: "tf", kind: "knowledge", tier: "extra",
    q: String.raw`For the line \(6x + 3y - 10 = 0\), the expression \(6x_1 + 3y_1 - 10\) equals \(35\) at \((4, 7)\) and \(-10\) at \((4, -8)\). This tells you the two points are on opposite sides of the line.`,
    answer: true,
    explain: String.raw`True. Before you take the absolute value, \(Ax_1 + By_1 + C = \overrightarrow{P_0P} \cdot \vec n\). It is positive on the side of the line that \(\vec n\) points toward, negative on the other side, and zero on the line. Opposite signs mean opposite sides. The absolute value in the distance formula hides this information, and that is fine, because a distance has no side.` }
);

window.EXT.push(
  { id: "x34-01", lesson: "3.4", level: "apply", tier: "likely",
    title: "The shortcut across the park", marks: 8,
    prompt: String.raw`<p>On a park map (1 unit = 10 m), a straight paved path follows the line \(3x + 4y - 24 = 0\). A picnic table is at \(T(10, 7)\).</p>
<ol type="a">
<li>Find the shortest distance from the table to the path, in metres.</li>
<li>Find the point on the path closest to the table.</li>
<li>A student walks from the table straight to the path entrance at \(E(8, 0)\) instead. Verify that \(E\) is on the path, and find how much farther this walk is than the shortest route.</li>
<li>Explain, using a right triangle, why no point on the path can be closer to the table than your answer to (a).</li>
</ol>`,
    hints: [String.raw`For (a), use the R² formula directly, then convert units to metres.`, String.raw`For (b), the path has direction \(\vec m = (4, -3)\) (perpendicular to \(\vec n = (3, 4)\)) and passes through \(E(8, 0)\). Write a general point \(Q(8 + 4t, -3t)\) and solve \(\overrightarrow{TQ} \cdot \vec m = 0\).`, String.raw`For (d), the closest point, \(E\) and \(T\) form a right triangle. Which side is the hypotenuse?`],
    answer: String.raw`<p><strong>a.</strong> \(d = \dfrac{|3(10) + 4(7) - 24|}{\sqrt{3^2 + 4^2}} = \dfrac{|30 + 28 - 24|}{5} = \dfrac{34}{5} = 6.8\) units, which is <strong>68 m</strong>.</p>
<p><strong>b.</strong> The path passes through \(E(8, 0)\) with direction \(\vec m = (4, -3)\). A general point is \(Q(8 + 4t,\ -3t)\), so \(\overrightarrow{TQ} = (4t - 2,\ -3t - 7)\).</p>
<div class="eq">\[ \begin{aligned} \overrightarrow{TQ} \cdot \vec m = 4(4t - 2) - 3(-3t - 7) &= 0 \\ 16t - 8 + 9t + 21 &= 0 \\ 25t &= -13 \\ t &= -\tfrac{13}{25} \end{aligned} \]</div>
<p>So \(Q = \left(8 - \tfrac{52}{25},\ \tfrac{39}{25}\right) = \left(\tfrac{148}{25}, \tfrac{39}{25}\right) = (5.92, 1.56)\). Check: \(3(5.92) + 4(1.56) - 24 = 17.76 + 6.24 - 24 = 0\), and \(|\overrightarrow{TQ}| = |(-4.08, -5.44)| = \sqrt{46.24} = 6.8\), as in (a).</p>
<p class="answer">The closest point is \(\left(\tfrac{148}{25}, \tfrac{39}{25}\right) = (5.92, 1.56)\).</p>
<p><strong>c.</strong> \(3(8) + 4(0) - 24 = 0\), so \(E\) is on the path. \(|TE| = \sqrt{(8 - 10)^2 + (0 - 7)^2} = \sqrt{53} \approx 7.280\) units \(\approx 72.8\) m. That is about \(72.8 - 68 = 4.8\) m farther.</p>
<p><strong>d.</strong> Triangle \(TQE\) has a right angle at \(Q\), because \(\overrightarrow{TQ} \perp\) the path. So \(|TE|^2 = |TQ|^2 + |QE|^2\). Here \(|QE| = |(2.08, -1.56)| = 2.6\), and indeed \(6.8^2 + 2.6^2 = 46.24 + 6.76 = 53\). The same argument works for any point \(E\) on the path other than \(Q\): \(|QE| \gt 0\) makes \(|TE| \gt |TQ|\). So the perpendicular distance is the minimum.</p>` },
  { id: "x34-02", lesson: "3.4", level: "apply", tier: "likely",
    title: "A laser beam and two sensors", marks: 8,
    prompt: String.raw`<p>In a lab, a laser beam travels along the line \(\vec r = (2, -1, 0) + t(1, 2, 2),\ t \in \mathbb{R}\), with distances in metres. A sensor is mounted at \(S(5, 3, 7)\).</p>
<ol type="a">
<li>Find the minimum distance from the sensor to the beam.</li>
<li>Find the point on the beam closest to the sensor, and verify that its distance agrees with (a).</li>
<li>A second sensor at \(T(4, 3, 5)\) is triggered if the beam passes within 1 m of it. Is it triggered?</li>
</ol>`,
    hints: [String.raw`Use \(P_0(2, -1, 0)\) and \(\vec m = (1, 2, 2)\). Find \(\overrightarrow{P_0S}\), then \(\overrightarrow{P_0S} \times \vec m\).`, String.raw`For (b), write \(Q(2 + t, -1 + 2t, 2t)\) and solve \(\overrightarrow{SQ} \cdot \vec m = 0\).`],
    answer: String.raw`<p><strong>a.</strong> \(\overrightarrow{P_0S} = (3, 4, 7)\) and \(\vec m = (1, 2, 2)\).</p>
<div class="eq">\[ \begin{aligned} \overrightarrow{P_0S} \times \vec m &= \big(4(2) - 7(2),\ 7(1) - 3(2),\ 3(2) - 4(1)\big) = (-6, 1, 2) \\ d &= \frac{\sqrt{36 + 1 + 4}}{\sqrt{1 + 4 + 4}} = \frac{\sqrt{41}}{3} \approx 2.13 \text{ m} \end{aligned} \]</div>
<p>Check: \((-6, 1, 2) \cdot (3, 4, 7) = -18 + 4 + 14 = 0\) and \((-6, 1, 2) \cdot (1, 2, 2) = -6 + 2 + 4 = 0\).</p>
<p><strong>b.</strong> \(Q(2 + t,\ -1 + 2t,\ 2t)\), so \(\overrightarrow{SQ} = (t - 3,\ 2t - 4,\ 2t - 7)\).</p>
<div class="eq">\[ \begin{aligned} (t - 3) + 2(2t - 4) + 2(2t - 7) &= 0 \\ 9t - 25 &= 0 \\ t &= \tfrac{25}{9} \end{aligned} \]</div>
<p>\(Q = \left(\tfrac{43}{9}, \tfrac{41}{9}, \tfrac{50}{9}\right) \approx (4.78, 4.56, 5.56)\). Then \(\overrightarrow{SQ} = \left(-\tfrac29, \tfrac{14}{9}, -\tfrac{13}{9}\right)\) and \(|\overrightarrow{SQ}| = \frac{\sqrt{4 + 196 + 169}}{9} = \frac{\sqrt{369}}{9} = \frac{3\sqrt{41}}{9} = \frac{\sqrt{41}}{3}\), which agrees with (a).</p>
<p><strong>c.</strong> \(\overrightarrow{P_0T} = (2, 4, 5)\), so \(\overrightarrow{P_0T} \times \vec m = \big(4(2) - 5(2),\ 5(1) - 2(2),\ 2(2) - 4(1)\big) = (-2, 1, 0)\). Then \(d = \frac{\sqrt5}{3} \approx 0.75\) m.</p>
<p class="answer">Since \(0.75 \lt 1\), the beam passes within 1 m of \(T\), so the second sensor is triggered.</p>` },
  { id: "x34-03", lesson: "3.4", level: "analyze", tier: "likely",
    title: "Power line clearance", marks: 9,
    prompt: String.raw`<p>Two straight power cables are modelled (in metres) by \(L_1: \vec r = (0, 0, 10) + t(3, 4, 0)\) and \(L_2: \vec r = (2, 1, 12) + s(-6, -8, 0)\), with \(t, s \in \mathbb{R}\).</p>
<ol type="a">
<li>Show that the cables are parallel but not the same line.</li>
<li>Find the distance between the cables.</li>
<li>The safety code requires at least 2.5 m between cables. Does this pair meet it?</li>
<li>Engineers will raise \(L_2\) straight up by \(h\) metres, so that its point becomes \((2, 1, 12 + h)\). Find the smallest \(h\) that meets the code.</li>
</ol>`,
    hints: [String.raw`For (a), compare the direction vectors, then check whether \(\overrightarrow{PQ}\) between the two known points is a multiple of the direction.`, String.raw`For (d), redo (b) with \(\overrightarrow{PQ} = (2, 1, 2 + h)\) and set the distance \(\ge 2.5\).`],
    answer: String.raw`<p><strong>a.</strong> \((-6, -8, 0) = -2(3, 4, 0)\), so the direction vectors are parallel. With \(P(0, 0, 10)\) and \(Q(2, 1, 12)\), \(\overrightarrow{PQ} = (2, 1, 2)\) is not a multiple of \((3, 4, 0)\) (its \(z\)-component is not 0). So \(Q\) is not on \(L_1\), and the lines are parallel and distinct.</p>
<p><strong>b.</strong> Using \(\vec m = (3, 4, 0)\):</p>
<div class="eq">\[ \begin{aligned} \overrightarrow{PQ} \times \vec m &= \big(1(0) - 2(4),\ 2(3) - 2(0),\ 2(4) - 1(3)\big) = (-8, 6, 5) \\ d &= \frac{\sqrt{64 + 36 + 25}}{\sqrt{9 + 16 + 0}} = \frac{\sqrt{125}}{5} = \frac{5\sqrt5}{5} = \sqrt5 \approx 2.24 \text{ m} \end{aligned} \]</div>
<p><strong>c.</strong> \(\sqrt5 \approx 2.24 \lt 2.5\), so the cables do <strong>not</strong> meet the code.</p>
<p><strong>d.</strong> Now \(\overrightarrow{PQ} = (2, 1, 2 + h)\) and</p>
<div class="eq">\[ \begin{aligned} \overrightarrow{PQ} \times \vec m &= \big(-4(2 + h),\ 3(2 + h),\ 5\big) \\ |\overrightarrow{PQ} \times \vec m| &= \sqrt{25(2 + h)^2 + 25} = 5\sqrt{(2 + h)^2 + 1} \\ d &= \sqrt{(2 + h)^2 + 1} \end{aligned} \]</div>
<p>Set \(\sqrt{(2 + h)^2 + 1} \ge 2.5\). Then \((2 + h)^2 \ge 5.25\), so \(2 + h \ge \sqrt{5.25} \approx 2.291\) and \(h \ge 0.291\).</p>
<p class="answer">Raise \(L_2\) by at least about 0.30 m (29.1 cm).</p>
<p>Interpretation: the cables are 1 m apart horizontally (perpendicular to their direction) and \(2 + h\) metres apart vertically, so the distance is \(\sqrt{(2 + h)^2 + 1^2}\), which is Pythagoras again.</p>` },
  { id: "x34-04", lesson: "3.4", level: "extend", tier: "extra",
    title: "One formula hiding inside the other", marks: 9,
    prompt: String.raw`<ol type="a">
<li>Treat the R² line \(Ax + By + C = 0\) as a line in the plane \(z = 0\) of R³, with direction vector \(\vec m = (B, -A, 0)\). Using a point \(P_0(x_0, y_0, 0)\) on the line and \(P(x_1, y_1, 0)\), prove that \(\dfrac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|} = \dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\).</li>
<li>Prove that the distance between the parallel lines \(Ax + By + C_1 = 0\) and \(Ax + By + C_2 = 0\) is \(\dfrac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}\).</li>
<li>Prove algebraically that the R³ formula gives the same answer if you replace \(P_0\) with another point \(P_0 + s\vec m\) on the line, and \(\vec m\) with \(k\vec m\) for any \(k \ne 0\).</li>
</ol>`,
    hints: [String.raw`For (a), let \(\overrightarrow{P_0P} = (p, q, 0)\) and compute the cross product with \((B, -A, 0)\). Only one component survives.`, String.raw`For (b), pick a point \((x_1, y_1)\) on the first line, so \(Ax_1 + By_1 = -C_1\).`, String.raw`For (c), use \(\vec m \times \vec m = \vec 0\) and the distributive law for cross products.`],
    answer: String.raw`<p><strong>a.</strong> First, \(\vec m = (B, -A, 0)\) is a direction of the line because \((B, -A) \cdot (A, B) = 0\). Let \(\overrightarrow{P_0P} = (p, q, 0)\) with \(p = x_1 - x_0\) and \(q = y_1 - y_0\). Then</p>
<div class="eq">\[ \begin{aligned} (p, q, 0) \times (B, -A, 0) &= \big(q(0) - 0(-A),\ 0(B) - p(0),\ p(-A) - qB\big) = \big(0,\ 0,\ -(Ap + Bq)\big) \\ |\overrightarrow{P_0P} \times \vec m| &= |A(x_1 - x_0) + B(y_1 - y_0)| = |Ax_1 + By_1 - Ax_0 - By_0| = |Ax_1 + By_1 + C| \end{aligned} \]</div>
<p>using \(C = -Ax_0 - By_0\), because \(P_0\) is on the line. Also \(|\vec m| = \sqrt{B^2 + A^2}\). Dividing gives the R² formula. &#8718;</p>
<p><strong>b.</strong> Let \((x_1, y_1)\) be on the first line, so \(Ax_1 + By_1 = -C_1\). Its distance to the second line is</p>
<div class="eq">\[ d = \frac{|Ax_1 + By_1 + C_2|}{\sqrt{A^2 + B^2}} = \frac{|-C_1 + C_2|}{\sqrt{A^2 + B^2}} = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}} \]</div>
<p>Parallel lines are the same distance apart everywhere, so this is the distance between the lines. &#8718; (The two equations must have identical \(A\) and \(B\).)</p>
<p><strong>c.</strong> With the new point, the vector to \(P\) is \(\overrightarrow{P_0P} - s\vec m\). Then</p>
<div class="eq">\[ \begin{aligned} (\overrightarrow{P_0P} - s\vec m) \times (k\vec m) &= k(\overrightarrow{P_0P} \times \vec m) - sk(\vec m \times \vec m) = k(\overrightarrow{P_0P} \times \vec m) \\ \frac{|k(\overrightarrow{P_0P} \times \vec m)|}{|k\vec m|} &= \frac{|k|\,|\overrightarrow{P_0P} \times \vec m|}{|k|\,|\vec m|} = \frac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|} \end{aligned} \]</div>
<p>So the distance doesn't depend on which point or which direction vector you choose. &#8718;</p>` },
  { id: "x34-05", lesson: "3.4", level: "extend", tier: "extra",
    title: "Minimum distance with calculus", marks: 8,
    prompt: String.raw`<p>"Minimum distance" sounds like an optimization problem, and it is one. Use Example 2 from the notes: \(P(3, -2, 1)\) and the line \(\vec r = (1, 0, -5) + t(2, -2, 3)\).</p>
<ol type="a">
<li>Write \(\overrightarrow{PQ}\) for a general point \(Q\) on the line, and show that \(f(t) = |\overrightarrow{PQ}|^2 = 17t^2 - 52t + 44\).</li>
<li>Use the derivative to find the value of \(t\) that minimizes \(f(t)\), and justify that it is a minimum.</li>
<li>Find the minimum distance and compare it with the notes' answer.</li>
<li>In general, \(\overrightarrow{PQ}(t) = \vec w + t\vec m\) for a fixed vector \(\vec w\). Show that \(f'(t) = 2\,\overrightarrow{PQ}(t) \cdot \vec m\), and explain why this proves that the closest point is where \(\overrightarrow{PQ} \perp \vec m\).</li>
</ol>`,
    hints: [String.raw`Minimizing \(|\overrightarrow{PQ}|^2\) is easier than minimizing \(|\overrightarrow{PQ}|\) and gives the same \(t\), because squaring is increasing for nonnegative numbers.`, String.raw`For (d), expand \(f(t) = (\vec w + t\vec m) \cdot (\vec w + t\vec m)\) first.`],
    answer: String.raw`<p><strong>a.</strong> \(Q(1 + 2t, -2t, -5 + 3t)\), so \(\overrightarrow{PQ} = (2t - 2,\ 2 - 2t,\ 3t - 6)\).</p>
<div class="eq">\[ \begin{aligned} f(t) &= (2t - 2)^2 + (2 - 2t)^2 + (3t - 6)^2 \\ &= (4t^2 - 8t + 4) + (4t^2 - 8t + 4) + (9t^2 - 36t + 36) \\ &= 17t^2 - 52t + 44 \end{aligned} \]</div>
<p><strong>b.</strong> \(f'(t) = 34t - 52 = 0\) gives \(t = \frac{26}{17}\). Since \(f''(t) = 34 \gt 0\), this is a minimum (and \(f\) is an upward parabola, so it is the absolute minimum). This is the same \(t\) the dot-product method gives.</p>
<p><strong>c.</strong> \(f\left(\tfrac{26}{17}\right) = 17\cdot\tfrac{676}{289} - 52\cdot\tfrac{26}{17} + 44 = \tfrac{676 - 1352 + 748}{17} = \tfrac{72}{17}\), so</p>
<div class="eq">\[ d = \sqrt{\tfrac{72}{17}} = \frac{6\sqrt2}{\sqrt{17}} = \frac{6\sqrt{34}}{17} \]</div>
<p>This matches the cross-product answer in the notes.</p>
<p><strong>d.</strong> \(f(t) = (\vec w + t\vec m) \cdot (\vec w + t\vec m) = |\vec w|^2 + 2t(\vec w \cdot \vec m) + t^2|\vec m|^2\). So \(f'(t) = 2(\vec w \cdot \vec m) + 2t|\vec m|^2 = 2(\vec w + t\vec m) \cdot \vec m = 2\,\overrightarrow{PQ}(t) \cdot \vec m\).</p>
<p>The minimum is where \(f'(t) = 0\), which is exactly where \(\overrightarrow{PQ} \cdot \vec m = 0\), that is, where \(\overrightarrow{PQ}\) is perpendicular to the line. Calculus confirms the geometry: the shortest distance is the perpendicular distance.</p>` }
);

window.EXTRA.push(
  { id: "e-34-skew-lines", lesson: "3.4", tier: "extra",
    title: "Distance between skew lines",
    why: String.raw`Skew lines are neither parallel nor intersecting, so neither formula from the notes applies directly, but one more projection finishes the job.`,
    html: String.raw`<h3>What skew lines are</h3>
<p>In R², two lines either intersect or are parallel. In R³ there is a third possibility: lines that are not parallel and never meet. These are <span class="term">skew lines</span>. Think of a road on an overpass and another road passing underneath at an angle.</p>
<h3>The common perpendicular</h3>
<p>For two skew lines there is exactly one segment that is perpendicular to <em>both</em> of them, and its length is the minimum distance between the lines. Its direction must be perpendicular to \(\vec m_1\) and to \(\vec m_2\), so it is parallel to \(\vec n = \vec m_1 \times \vec m_2\).</p>
<p>Take any point \(P_1\) on the first line and any point \(P_2\) on the second. The distance is the magnitude of the projection of \(\overrightarrow{P_1P_2}\) onto \(\vec n\), which is the same projection idea as the R² derivation:</p>
<div class="callout key"><p class="callout-title">Distance between skew lines</p><div class="eq">\[ d = \frac{|\overrightarrow{P_1P_2} \cdot (\vec m_1 \times \vec m_2)|}{|\vec m_1 \times \vec m_2|} \]</div></div>
<p>Another way to see it: each line lies in a plane with normal \(\vec n\), and those two planes are parallel. The distance between the lines is the distance between the planes.</p>
<div class="example"><p class="example-title">Example · L₁: r = (1, 0, 0) + t(1, 1, 0) and L₂: r = (0, 0, 2) + s(0, 1, 1)</p>
<ol class="work">
<li>The direction vectors \((1, 1, 0)\) and \((0, 1, 1)\) are not multiples of each other, so the lines are not parallel.</li>
<li>\(\vec n = (1, 1, 0) \times (0, 1, 1) = (1(1) - 0(1),\ 0(0) - 1(1),\ 1(1) - 1(0)) = (1, -1, 1)\).</li>
<li>\(\overrightarrow{P_1P_2} = (0 - 1,\ 0 - 0,\ 2 - 0) = (-1, 0, 2)\).</li>
<li>\(d = \dfrac{|(-1, 0, 2) \cdot (1, -1, 1)|}{\sqrt{1 + 1 + 1}} = \dfrac{|-1 + 0 + 2|}{\sqrt3} = \dfrac{1}{\sqrt3}\).</li>
</ol>
<p class="answer">\(d = \dfrac{\sqrt3}{3} \approx 0.577\)</p></div>
<p>You can check this with the dot-product method from the lesson. The closest points are at \(t = -\frac43\) and \(s = -\frac53\), namely \(\left(-\frac13, -\frac43, 0\right)\) and \(\left(0, -\frac53, \frac13\right)\). They differ by \(\left(\frac13, -\frac13, \frac13\right)\), which is parallel to \(\vec n\) and has length \(\frac{1}{\sqrt3}\).</p>
<h3>Two useful consequences</h3>
<ul>
<li>If the lines are not parallel and the formula gives \(d = 0\), they intersect. That makes it a fast intersection test.</li>
<li>If \(\vec m_1 \times \vec m_2 = \vec 0\), the lines are parallel, and you are back to the worksheet 15c method: point-to-line distance with the cross product.</li>
</ul>` },
  { id: "e-34-point-to-plane", lesson: "3.4", tier: "likely",
    title: "Distance from a point to a plane",
    why: String.raw`The same projection-onto-the-normal argument gives the third distance formula on the unit review summary sheet.`,
    html: String.raw`<h3>Planes have a unique normal</h3>
<p>A line in R³ has no unique normal, which is why it needs the cross-product formula. A plane \(Ax + By + Cz + D = 0\) (lesson 3.7) is different: it has exactly one normal direction, \(\vec n = (A, B, C)\). So the R² derivation carries over almost word for word.</p>
<h3>The derivation</h3>
<p>Let \(P(x_1, y_1, z_1)\) be the point and \(P_0(x_0, y_0, z_0)\) a known point on the plane. The distance is the magnitude of the projection of \(\overrightarrow{P_0P}\) onto \(\vec n\):</p>
<div class="eq">\[ \begin{aligned} d &= \frac{|\overrightarrow{P_0P} \cdot \vec n|}{|\vec n|} = \frac{|A(x_1 - x_0) + B(y_1 - y_0) + C(z_1 - z_0)|}{\sqrt{A^2 + B^2 + C^2}} \\ &= \frac{|Ax_1 + By_1 + Cz_1 + (-Ax_0 - By_0 - Cz_0)|}{\sqrt{A^2 + B^2 + C^2}} \end{aligned} \]</div>
<p>Since \(P_0\) is on the plane, \(D = -Ax_0 - By_0 - Cz_0\), so:</p>
<div class="callout key"><p class="callout-title">Minimum distance from a point to a plane</p><div class="eq">\[ d = \frac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}} \]</div></div>
<div class="example"><p class="example-title">Example · Distance from P(1, 2, 3) to the plane 2x − y + 2z − 4 = 0</p>
<ol class="work">
<li>Read off \(A = 2\), \(B = -1\), \(C = 2\), \(D = -4\).</li>
<li>\(d = \dfrac{|2(1) - 2 + 2(3) - 4|}{\sqrt{4 + 1 + 4}} = \dfrac{|2 - 2 + 6 - 4|}{3} = \dfrac23\).</li>
<li>Check with a point on the plane, \(P_0(2, 0, 0)\): \(\overrightarrow{P_0P} = (-1, 2, 3)\) and \(\overrightarrow{P_0P} \cdot \vec n = -2 - 2 + 6 = 2\), so \(d = \frac{2}{3}\) again.</li>
</ol>
<p class="answer">\(d = \dfrac23\)</p></div>
<h3>The three formulas side by side</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Line in R²</th><th>Line in R³</th><th>Plane in R³</th></tr></thead><tbody>
<tr><td>\(\dfrac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\)</td><td>\(\dfrac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\)</td><td>\(\dfrac{|Ax_1 + By_1 + Cz_1 + D|}{\sqrt{A^2 + B^2 + C^2}}\)</td></tr>
</tbody></table></div>
<p>This is exactly the row on the teacher's completed review sheet. The first and third formulas are twins because both objects have a unique normal. The middle one is different because a line in R³ does not.</p>` },
  { id: "e-34-signed-distance", lesson: "3.4", tier: "extra",
    title: "Signed distance: which side of the line?",
    why: String.raw`Leave off the absolute value and the formula tells you which side of the line a point is on, and it gives a one-line formula for the closest point.`,
    html: String.raw`<h3>What the sign means</h3>
<p>In the R² derivation, \(\overrightarrow{P_0P} \cdot \vec n = Ax_1 + By_1 + C\). A dot product is positive when the angle is acute and negative when it is obtuse. So the <span class="term">signed distance</span></p>
<div class="eq">\[ s = \frac{Ax_1 + By_1 + C}{\sqrt{A^2 + B^2}} \]</div>
<p>is positive when \(P\) is on the side of the line that \(\vec n = (A, B)\) points toward, negative on the other side, and zero on the line. Its absolute value is the ordinary distance.</p>
<p>From worksheet question 12, with \(6x + 3y - 10 = 0\): the expression is \(35\) at \((4, 7)\), \(-10\) at \((4, -8)\) and \(5\) at \((0, 5)\). So \((4, 7)\) and \((0, 5)\) are on one side, and \((4, -8)\) is on the other.</p>
<h3>A one-line formula for the closest point</h3>
<p>To reach the foot \(F\) from \(P\), you travel against the normal by the signed distance. Writing this with the unnormalized \(\vec n\) gives:</p>
<div class="eq">\[ F = P - \frac{Ax_1 + By_1 + C}{A^2 + B^2}\,(A, B) \]</div>
<p>For Example 1, with \((6, -1)\) and \(4x + y - 10 = 0\): \(F = (6, -1) - \frac{13}{17}(4, 1) = \left(\frac{50}{17}, -\frac{30}{17}\right)\). This is the same point the dot-product method gives in the lesson.</p>
<h3>Where this is used</h3>
<p>Testing signs is how computer graphics and robotics decide which side of an edge a point is on. For example, a segment crosses a line exactly when its endpoints give opposite signs. The segment from \((4, 7)\) to \((4, -8)\) therefore crosses \(6x + 3y - 10 = 0\).</p>` }
);

window.GLOSSARY.push(
  { term: String.raw`Minimum distance (point to line)`, def: String.raw`The shortest distance from a point to a line. It is measured along the perpendicular from the point to the line, and it equals 0 exactly when the point is on the line.`, lesson: "3.4", tier: "essential" },
  { term: String.raw`Perpendicular distance`, def: String.raw`The length of the segment from a point to a line that meets the line at 90°. By Pythagoras, every other segment from the point to the line is longer, so this is the minimum distance.`, lesson: "3.4", tier: "essential" },
  { term: String.raw`Magnitude of a vector projection`, def: String.raw`The length of the "shadow" of \(\vec a\) along \(\vec b\): \(\frac{|\vec a \cdot \vec b|}{|\vec b|}\). The absolute value keeps the length positive. Projecting \(\overrightarrow{P_0P}\) onto a normal gives the perpendicular distance.`, lesson: "3.4", tier: "essential" },
  { term: String.raw`Point-to-line distance formula (R²)`, def: String.raw`\(d = \frac{|Ax_1 + By_1 + C|}{\sqrt{A^2 + B^2}}\): the distance from \((x_1, y_1)\) to the line \(Ax + By + C = 0\), found by projecting \(\overrightarrow{P_0P}\) onto \(\vec n = (A, B)\). The line must be in Cartesian form first.`, lesson: "3.4", tier: "essential" },
  { term: String.raw`Cross-product distance formula (R³)`, def: String.raw`\(d = \frac{|\overrightarrow{P_0P} \times \vec m|}{|\vec m|}\): the distance from \(P\) to the line through \(P_0\) with direction \(\vec m\). It comes from \(d = |\overrightarrow{P_0P}|\sin\theta\), or from parallelogram area divided by base.`, lesson: "3.4", tier: "essential" },
  { term: String.raw`Foot of the perpendicular`, def: String.raw`The point \(F\) where the perpendicular from \(P\) meets the line. It is the point on the line closest to \(P\), found by solving \(\overrightarrow{PF} \cdot \vec m = 0\).`, lesson: "3.4", tier: "likely" },
  { term: String.raw`Distance between parallel lines`, def: String.raw`The constant gap between two parallel lines: the distance from any point on one line to the other line. In R², if the equations share \(A\) and \(B\), it equals \(\frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}\).`, lesson: "3.4", tier: "likely" },
  { term: String.raw`Distance between skew lines`, def: String.raw`The length of the common perpendicular of two non-parallel, non-intersecting lines in R³: \(\frac{|\overrightarrow{P_1P_2} \cdot (\vec m_1 \times \vec m_2)|}{|\vec m_1 \times \vec m_2|}\).`, lesson: "3.4", tier: "extra" },
  { term: String.raw`Signed distance`, def: String.raw`\(\frac{Ax_1 + By_1 + C}{\sqrt{A^2 + B^2}}\) without the absolute value. Its sign shows which side of the line the point is on (positive on the side \(\vec n\) points toward).`, lesson: "3.4", tier: "extra" }
);
