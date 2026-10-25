/* MCV4U Unit 3 · Lesson 3.6 Vector Equation of a Plane in R³: lesson, worksheet Q&A, quiz, apply & extend, beyond the notes, glossary. */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "3.6", title: "Vector Equation of a Plane in R³", stage: "c1",
  where: "R³",
  summary: String.raw`A plane in R³ is fixed by one known point and two non-collinear direction vectors, which gives the vector equation \(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\) and its parametric form. Along the way you meet linear dependence and independence, the idea that decides whether two vectors really give two directions. These are the core skills for the rest of the unit: writing a plane through three points, a point and a line, or two lines, and testing whether a point lies on a plane.`,
  objectives: [
    String.raw`Explain what it means for a set of vectors to be linearly dependent or linearly independent, and when vectors form a basis for R² or R³.`,
    String.raw`Derive the vector equation of a plane, \(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\), from a known point and two non-collinear direction vectors.`,
    String.raw`Convert between the vector and parametric equations of a plane, and read off points and direction vectors from either form.`,
    String.raw`Write an equation of the plane through three non-collinear points, through a line and a point, or containing two intersecting or two parallel lines.`,
    String.raw`Decide whether a point lies on a plane by solving two equations for unique \(s, t\) and checking the third.`,
    String.raw`Find where a plane crosses a coordinate axis, and write equations for the coordinate planes and planes parallel to them.`,
    String.raw`Recognise when given information does not determine a plane (collinear points, a point on the line, skew lines).`
  ],
  html: String.raw`
<h3 data-tier="essential">From lines to planes: what you already know</h3>
<p>In lesson 3.3 you described a line in R³ with one known point and one direction: \(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\). One parameter is enough, because on a line you can only move forwards or backwards along one direction.</p>
<p>A plane is flat and two-dimensional: from any point on it you can move in two genuinely different directions. So the plan for this lesson is simple. Keep the known point, use <em>two</em> direction vectors, and give each its own parameter. The tool that makes this work is the linear combination from lesson 3.5.</p>
<div class="callout key"><p class="callout-title">Recall: a linear combination of two vectors</p>
<p>If \(\vec w\) is coplanar with \(\vec a\) and \(\vec b\), and \(\vec a\) and \(\vec b\) are not collinear, then we can express \(\vec w\) as a <strong>linear combination</strong> of \(\vec a\) and \(\vec b\):</p>
<div class="eq">\[ \vec w = s\vec a + t\vec b,\quad s, t \in \mathbb{R} \]</div></div>
<p>Why does this work? Draw \(\vec a\) and \(\vec b\) tail to tail in their plane. To reach the tip of \(\vec w\), walk some multiple \(s\) of \(\vec a\), then some multiple \(t\) of \(\vec b\) (the parallelogram construction). Because \(\vec a\) and \(\vec b\) point in different directions, you can reach every point of their plane this way, and for each \(\vec w\) there is only one pair \((s, t)\) that works. If \(\vec a\) and \(\vec b\) were collinear, every combination would stay on one line and most of the plane would be out of reach. That single condition, <em>not collinear</em>, runs through the whole lesson.</p>

<h3 data-tier="essential">Linear dependence and linear independence</h3>
<p>The notes give the situation above a name. Because \(\vec w\) can be built out of \(\vec a\) and \(\vec b\), the set \(\{\vec w, \vec a, \vec b\}\) is called <span class="term">linearly dependent</span>.</p>
<div class="callout key"><p class="callout-title">Definitions</p>
<p>A set of vectors is <strong>linearly dependent</strong> if one of the vectors in the set can be defined as a linear combination of the others.</p>
<p>A set of vectors is <span class="term">linearly independent</span> if none of the vectors can be written as a linear combination of the others: each one adds a genuinely new direction.</p></div>
<p>Think of "dependent" as "redundant". A dependent vector adds no new direction, because it already lies in the line or plane that the others make.</p>
<ul>
<li><strong>Two vectors</strong> are linearly dependent exactly when they are collinear, that is, one is a scalar multiple of the other (\(\vec b = k\vec a\)). Two non-collinear vectors are linearly independent.</li>
<li><strong>Three vectors in R³</strong> are linearly dependent exactly when they are coplanar, that is, one of them is \(s\vec a + t\vec b\) for the other two. Three non-coplanar vectors are linearly independent.</li>
</ul>
<p>Independent vectors describe a space with no redundancy, which is why they can form a <strong>basis</strong> for it: every vector in the space is a combination of them in exactly one way.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Space</th><th>Non-zero vectors are linearly independent when they are…</th><th>…and then they form a basis for</th></tr></thead><tbody>
<tr><th>R²</th><td>two vectors that are <strong>not collinear</strong></td><td>R²: every vector in the plane is \(s\vec a + t\vec b\)</td></tr>
<tr><th>R³</th><td>three vectors that are <strong>not coplanar</strong></td><td>R³: every vector in space is \(s\vec a + t\vec b + u\vec c\)</td></tr>
</tbody></table></div>
<div class="callout teacher"><p class="callout-title">A note on the completed notes</p>
<p>The handwritten notes fill in a single line: "In R³, if two non-zero vectors are <em>not collinear</em>, they will be considered as <em>linearly independent</em> and can form a <em>basis</em> for the space." The typed blank notes split this into the two cases in the table above, which is the precise version. Two non-collinear vectors in R³ are linearly independent, but every combination of them stays in one plane, so they form a basis for that plane, not for all of R³. That is exactly why they make perfect direction vectors for a plane. A basis for all of R³ needs three non-coplanar vectors.</p></div>
<figure class="diagram narrow"><svg viewBox="0 0 640 270" role="img" aria-labelledby="d36-dep"><title id="d36-dep">Left: vectors a, b and w all lying in one plane, with w built from a multiple of a plus a multiple of b. Right: vectors a and b in a plane and a third vector c pointing up out of it.</title><polygon class="f-soft" points="30,200 100,100 300,100 230,200"/><polygon class="s-mute" stroke-width="1.5" points="30,200 100,100 300,100 230,200"/><line class="s-mute dash" stroke-width="1.5" x1="196" y1="163.6" x2="238.8" y2="112.3"/><line class="s-blue" stroke-width="2" x1="115" y1="172" x2="241" y2="158.9"/><polygon class="f-blue" points="250,158 239.5,163.6 238.6,154.7"/><line class="s-teal" stroke-width="2" x1="115" y1="172" x2="154.2" y2="124.9"/><polygon class="f-teal" points="160,118 156.4,129.3 149.5,123.6"/><line class="s-magenta" stroke-width="2" x1="115" y1="172" x2="230.6" y2="116.2"/><polygon class="f-magenta" points="238.8,112.3 230.8,121.1 226.9,113"/><circle class="f-ink" cx="115" cy="172" r="3"/><text class="t-blue" x="256" y="172" font-size="15" font-style="italic">a</text><text class="t-teal" x="146" y="120" font-size="15" font-style="italic">b</text><text class="t-magenta" x="244.8" y="110.3" font-size="15" font-style="italic">w</text><text class="t-ink" x="165" y="232" font-size="15" text-anchor="middle">Linearly dependent</text><text class="t-mute" x="165" y="252" font-size="13" text-anchor="middle">w lies in the plane of a and b</text><polygon class="f-soft" points="350,200 420,100 620,100 550,200"/><polygon class="s-mute" stroke-width="1.5" points="350,200 420,100 620,100 550,200"/><line class="s-blue" stroke-width="2" x1="465" y1="172" x2="556.1" y2="161.1"/><polygon class="f-blue" points="565,160 554.6,165.8 553.5,156.8"/><line class="s-teal" stroke-width="2" x1="465" y1="172" x2="504.2" y2="124.9"/><polygon class="f-teal" points="510,118 506.4,129.3 499.5,123.6"/><line class="s-amber" stroke-width="2" x1="465" y1="172" x2="469.7" y2="39"/><polygon class="f-amber" points="470,30 474.1,41.2 465.1,40.8"/><circle class="f-ink" cx="465" cy="172" r="3"/><text class="t-blue" x="571" y="174" font-size="15" font-style="italic">a</text><text class="t-teal" x="516" y="116" font-size="15" font-style="italic">b</text><text class="t-amber" x="480" y="42" font-size="15" font-style="italic">c</text><text class="t-ink" x="485" y="232" font-size="15" text-anchor="middle">Linearly independent</text><text class="t-mute" x="485" y="252" font-size="13" text-anchor="middle">c points out of the plane of a and b</text></svg><figcaption>Left: \(\vec w\) lies in the plane of \(\vec a\) and \(\vec b\), so \(\vec w = s\vec a + t\vec b\) and the set is dependent. Right: \(\vec c\) leaves that plane, so no combination of \(\vec a\) and \(\vec b\) can make it and the three vectors are independent.</figcaption></figure>
<p>Two quick tests you will use constantly:</p>
<ul>
<li><strong>Two vectors:</strong> are the components in the same ratio? \((2, -4, 6)\) and \((-1, 2, -3)\) are, since \((2, -4, 6) = -2(-1, 2, -3)\). They are collinear, so they are dependent.</li>
<li><strong>Three vectors:</strong> try to solve \(\vec w = s\vec a + t\vec b\) for unique \(s, t\) (the "long way" on the unit review sheet), or use the triple scalar product from lesson 3.5: \(\vec u \cdot (\vec v \times \vec w) = 0\) means coplanar (the "fast way").</li>
</ul>
<div class="example"><p class="example-title">Mini example · Are \((1, 0, 2)\), \((0, 1, 1)\) and \((1, 1, 3)\) linearly dependent?</p>
<ol class="work">
<li>No two of them are scalar multiples (their zeros sit in different places), so no pair is collinear. The question is whether one is a combination of the other two.</li>
<li>Try \((1, 1, 3) = s(1, 0, 2) + t(0, 1, 1)\). The x-components give \(1 = s\). The y-components give \(1 = t\).</li>
<li>Check the z-components, the equation not yet used: \(2s + t = 2(1) + 1 = 3\). It matches, so the same \(s\) and \(t\) work in all three components.</li>
</ol>
<p class="answer">\(\therefore\ (1, 1, 3) = (1, 0, 2) + (0, 1, 1)\), so the set is linearly dependent (the three vectors are coplanar).</p></div>
<details class="check"><summary>Is the set \(\{(2, -1, 4),\ (-6, 3, -12)\}\) linearly dependent or independent? Could these two vectors be the direction vectors of a plane?</summary><div class="ans"><p>Dependent: \((-6, 3, -12) = -3(2, -1, 4)\), so the vectors are collinear. They cannot be the two direction vectors of a plane, because together they only give one direction.</p></div></details>

<h3 data-tier="essential">Deriving the vector equation of a plane</h3>
<p>Here is the set-up from the notes:</p>
<ul>
<li>Let \(\vec a\) and \(\vec b\) be two <strong>non-collinear</strong> vectors (linearly independent) that lie in a plane.</li>
<li>Let \(P_0(x_0, y_0, z_0)\) be a known point on the plane.</li>
<li>Let \(P(x, y, z)\) be any point on the plane.</li>
</ul>
<figure class="diagram narrow"><svg viewBox="0 0 640 315" role="img" aria-labelledby="d36-derive"><title id="d36-derive">A plane containing the known point P0 and a general point P. Direction vectors a and b start at P0. P0P is built as s times a followed by t times b. From the origin O, r0 points to P0 and r points to P.</title><polygon class="f-soft" points="110,220 220,80 610,80 500,220"/><polygon class="s-mute" stroke-width="1.5" points="110,220 220,80 610,80 500,220"/><text class="t-mute" x="598" y="100" font-size="13" text-anchor="end">plane</text><line class="s-blue dash" stroke-width="1.5" x1="310" y1="190" x2="462" y2="190"/><line class="s-teal dash" stroke-width="1.5" x1="462" y1="190" x2="535.5" y2="96.4"/><line class="s-magenta" stroke-width="2" x1="610" y1="292" x2="238.7" y2="192.3"/><polygon class="f-magenta" points="230,190 241.8,188.5 239.5,197.2"/><line class="s-red" stroke-width="2" x1="610" y1="292" x2="538.7" y2="104.8"/><polygon class="f-red" points="535.5,96.4 543.6,105.1 535.2,108.3"/><line class="s-amber" stroke-width="2.5" x1="230" y1="190" x2="526.9" y2="99.1"/><polygon class="f-amber" points="535.5,96.4 526.3,104 523.7,95.3"/><line class="s-blue" stroke-width="2.5" x1="230" y1="190" x2="301" y2="190"/><polygon class="f-blue" points="310,190 299,194.5 299,185.5"/><line class="s-teal" stroke-width="2.5" x1="230" y1="190" x2="267.7" y2="142"/><polygon class="f-teal" points="273.2,135 270,146.4 262.9,140.8"/><circle class="f-ink" cx="230" cy="190" r="3.5"/><circle class="f-ink" cx="535.5" cy="96.4" r="3.5"/><circle class="f-ink" cx="610" cy="292" r="3.5"/><text class="t-ink" x="612" y="308" font-size="15" text-anchor="middle">O</text><text class="t-ink" x="222" y="210" font-size="14" text-anchor="end">P₀(x₀, y₀, z₀)</text><text class="t-ink" x="535.5" y="84.4" font-size="14" text-anchor="middle">P(x, y, z)</text><text class="t-blue" x="272" y="210" font-size="15" text-anchor="middle" font-style="italic">a</text><text class="t-teal" x="259.2" y="141" font-size="15" text-anchor="middle" font-style="italic">b</text><text class="t-blue" x="406" y="210" font-size="14" text-anchor="middle" font-style="italic">sa</text><text class="t-teal" x="484.8" y="147.2" font-size="14" text-anchor="end" font-style="italic">tb</text><text class="t-amber" x="372" y="124" font-size="14" text-anchor="middle">P₀P = sa + tb</text><text class="t-magenta" x="392" y="266" font-size="14" text-anchor="middle">r₀ = OP₀</text><text class="t-red" x="600" y="200" font-size="14" text-anchor="end">r = OP</text></svg><figcaption>To reach any point \(P\) of the plane: go from the origin to the known point (\(\vec r_0\)), then across the plane by \(s\vec a + t\vec b\).</figcaption></figure>
<ol class="work">
<li>\(P_0\) and \(P\) are both on the plane, so \(\overrightarrow{P_0P}\) is a vector on the plane: it lies flat in it.</li>
<li>So \(\overrightarrow{P_0P}\) is coplanar with \(\vec a\) and \(\vec b\). Since \(\vec a\) and \(\vec b\) are non-collinear, the recall above says it must be a linear combination of them: \[ \overrightarrow{P_0P} = s\vec a + t\vec b,\quad s, t \in \mathbb{R} \]</li>
<li>Now get from the origin to \(P\) in two legs (the triangle law of vector addition): first to the known point, then across the plane. \[ \overrightarrow{OP} = \overrightarrow{OP_0} + \overrightarrow{P_0P} = \overrightarrow{OP_0} + (s\vec a + t\vec b),\quad s, t \in \mathbb{R} \]</li>
<li>Rename the position vectors: \(\vec r = \overrightarrow{OP}\) for the moving point and \(\vec r_0 = \overrightarrow{OP_0}\) for the known point. As \(s\) and \(t\) run through all real numbers, \(P\) sweeps out every point of the plane, and nothing off it.</li>
</ol>

<h3 data-tier="essential">The vector and parametric equations of a plane</h3>
<div class="callout key"><p class="callout-title">Vector equation of a plane in R³</p>
<div class="eq">\[ \vec r = \vec r_0 + s\vec a + t\vec b,\quad s, t \in \mathbb{R} \]</div>
<div class="eq">\[ (x, y, z) = (x_0, y_0, z_0) + s(a_1, a_2, a_3) + t(b_1, b_2, b_3) \]</div>
<ul><li>\(\vec r_0 = (x_0, y_0, z_0)\) is the position vector of a known point in the plane.</li>
<li>\(\vec a\) and \(\vec b\) are direction vectors for the plane (they must be non-collinear).</li>
<li>\(\vec r = (x, y, z)\) is the position vector of any point on the plane.</li></ul></div>
<div class="callout key"><p class="callout-title">Parametric equations of a plane in R³</p>
<div class="eq">\[ \begin{aligned} x &= x_0 + sa_1 + tb_1 \\ y &= y_0 + sa_2 + tb_2 \\ z &= z_0 + sa_3 + tb_3 \end{aligned} \qquad s, t \in \mathbb{R} \]</div>
<p>Each equation is one component of the vector equation, read across.</p></div>
<div class="compare"><div><h4>Line in R³ (lesson 3.3)</h4><p>\(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\)</p><p>One point, one direction vector, one parameter.</p></div><div><h4>Plane in R³ (this lesson)</h4><p>\(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\)</p><p>One point, two non-collinear direction vectors, two parameters.</p></div></div>
<h4>Reading off points and direction vectors</h4>
<ul>
<li>The constant vector is a point. In \(\vec r = (9, 5, 2) + s(-3, 5, 2) + t(-6, 1, 2)\) the point is \((9, 5, 2)\).</li>
<li>The vectors multiplied by \(s\) and by \(t\) are the direction vectors: \((-3, 5, 2)\) and \((-6, 1, 2)\).</li>
<li>In parametric form, read <em>down</em> the columns: the constants form the point, the \(s\)-coefficients form one direction vector and the \(t\)-coefficients form the other. For \(x = 3 + 5s + t,\ y = -2 - 5s + 6t,\ z = -2 + 3s - 2t\), the point is \((3, -2, -2)\) and the directions are \((5, -5, 3)\) and \((1, 6, -2)\).</li>
<li>A missing term means a zero. If \(y = 4\) with no \(s\) or \(t\), then \(y_0 = 4\) and \(a_2 = b_2 = 0\).</li>
<li>To get more points, choose any values of \(s\) and \(t\): \(s = 1, t = 0\) gives \(\vec r_0 + \vec a\); \(s = 0, t = 1\) gives \(\vec r_0 + \vec b\); \(s = t = 1\) gives \(\vec r_0 + \vec a + \vec b\).</li>
</ul>
<div class="callout teacher"><p class="callout-title">Many correct answers</p>
<p>The notes stress that there are many ways to express the equation of a plane, depending on how you choose \(\vec r_0\), \(\vec a\) and \(\vec b\). Any point on the plane can be \(\vec r_0\). Any two non-collinear vectors in the plane (for example, scalar multiples of the ones you found) can be \(\vec a\) and \(\vec b\). An answer that looks different from the key can still be completely correct. In the worksheet solutions the teacher calls the two direction vectors \(\vec m_1\) and \(\vec m_2\): same idea, different letters.</p></div>
<div class="callout warn"><p class="callout-title">The one condition: non-collinear direction vectors</p>
<p>If \(\vec b = k\vec a\), then \(s\vec a + t\vec b = (s + kt)\vec a\), which is just one multiple of \(\vec a\). The "plane" collapses into a line. Always check that your two direction vectors are not scalar multiples of each other before you write the equation.</p></div>
<details class="check"><summary>Write parametric equations for \(\vec r = (2, 0, -1) + s(1, 3, 0) + t(-2, 1, 5)\), and find the point with \(s = 1,\ t = -1\).</summary><div class="ans"><p>Reading across: \(x = 2 + s - 2t,\ y = 3s + t,\ z = -1 + 5t,\ s, t \in \mathbb{R}\). With \(s = 1,\ t = -1\): \(x = 2 + 1 + 2 = 5\), \(y = 3 - 1 = 2\), \(z = -1 - 5 = -6\), so the point is \((5, 2, -6)\).</p></div></details>

<h3 data-tier="essential">What information determines a plane</h3>
<p>Every "find the plane" question has the same shopping list: <strong>one point</strong> and <strong>two non-collinear direction vectors</strong>. The questions just hide that information in different packages. The key move is always the same: a vector joining two points that are both on the plane lies in the plane.</p>
<figure class="diagram"><svg viewBox="0 0 640 365" role="img" aria-labelledby="d36-determine"><title id="d36-determine">Six small sketches. Five show information that determines a plane: a point and two non-collinear vectors; three non-collinear points; a line and a point off it; two intersecting lines; two distinct parallel lines. The sixth shows three collinear points on a line with several planes fanning around it.</title><polygon class="f-soft" points="20,120 60,40 200,40 160,120"/><polygon class="s-mute" stroke-width="1.5" points="20,120 60,40 200,40 160,120"/><line class="s-blue" stroke-width="2" x1="70" y1="100" x2="136" y2="100"/><polygon class="f-blue" points="145,100 134,104.5 134,95.5"/><line class="s-teal" stroke-width="2" x1="70" y1="100" x2="92.1" y2="65.6"/><polygon class="f-teal" points="97,58 94.8,69.7 87.3,64.8"/><circle class="f-ink" cx="70" cy="100" r="3.5"/><text class="t-ink" x="64" y="116" font-size="13" text-anchor="end">P₀</text><text class="t-blue" x="136" y="92" font-size="13" text-anchor="middle" font-style="italic">a</text><text class="t-teal" x="108" y="66" font-size="13" text-anchor="middle" font-style="italic">b</text><text class="t-ink" x="110" y="150" font-size="13" text-anchor="middle">a point and two</text><text class="t-ink" x="110" y="167" font-size="13" text-anchor="middle">non-collinear vectors</text><polygon class="f-soft" points="233,120 273,40 413,40 373,120"/><polygon class="s-mute" stroke-width="1.5" points="233,120 273,40 413,40 373,120"/><line class="s-blue" stroke-width="2" x1="275" y1="100" x2="354" y2="96.4"/><polygon class="f-blue" points="363,96 352.2,101 351.8,92"/><line class="s-teal" stroke-width="2" x1="275" y1="100" x2="318.4" y2="60.1"/><polygon class="f-teal" points="325,54 320,64.8 313.9,58.1"/><circle class="f-ink" cx="275" cy="100" r="3.5"/><text class="t-ink" x="269" y="114" font-size="13" text-anchor="end">A</text><circle class="f-ink" cx="363" cy="96" r="3.5"/><text class="t-ink" x="371" y="110" font-size="13" text-anchor="start">B</text><circle class="f-ink" cx="325" cy="54" r="3.5"/><text class="t-ink" x="333" y="52" font-size="13" text-anchor="start">C</text><text class="t-ink" x="323" y="150" font-size="13" text-anchor="middle">three points</text><text class="t-ink" x="323" y="167" font-size="13" text-anchor="middle">not on one line</text><polygon class="f-soft" points="446,120 486,40 626,40 586,120"/><polygon class="s-mute" stroke-width="1.5" points="446,120 486,40 626,40 586,120"/><line class="s-ink" stroke-width="2" x1="466" y1="100" x2="608" y2="62"/><line class="s-blue" stroke-width="2.5" x1="505.8" y1="89.4" x2="545.3" y2="78.8"/><polygon class="f-blue" points="554,76.4 544.6,83.6 542.3,74.9"/><line class="s-teal" stroke-width="2" x1="554" y1="52" x2="512.9" y2="83.8"/><polygon class="f-teal" points="505.8,89.4 511.7,79.1 517.2,86.2"/><circle class="f-ink" cx="505.8" cy="89.4" r="3.5"/><circle class="f-ink" cx="554" cy="52" r="3.5"/><text class="t-ink" x="604" y="78" font-size="13" text-anchor="middle" font-style="italic">L</text><text class="t-ink" x="562" y="54" font-size="13" text-anchor="start">P</text><text class="t-ink" x="503.8" y="106.4" font-size="13" text-anchor="middle">Q</text><text class="t-blue" x="556" y="94.4" font-size="13" text-anchor="middle" font-style="italic">m</text><text class="t-ink" x="536" y="150" font-size="13" text-anchor="middle">a line and a point</text><text class="t-ink" x="536" y="167" font-size="13" text-anchor="middle">not on the line</text><polygon class="f-soft" points="20,300 60,220 200,220 160,300"/><polygon class="s-mute" stroke-width="1.5" points="20,300 60,220 200,220 160,300"/><line class="s-blue" stroke-width="2" x1="45" y1="280" x2="169.4" y2="241.7"/><polygon class="f-blue" points="178,239 168.8,246.5 166.2,237.9"/><line class="s-teal" stroke-width="2" x1="72" y1="231" x2="142.8" y2="284.6"/><polygon class="f-teal" points="150,290 138.5,287 143.9,279.8"/><circle class="f-ink" cx="110" cy="260" r="3.5"/><text class="t-blue" x="176" y="258" font-size="13" text-anchor="middle" font-style="italic">m₁</text><text class="t-teal" x="140" y="302" font-size="13" text-anchor="end" font-style="italic">m₂</text><text class="t-ink" x="110" y="330" font-size="13" text-anchor="middle">two intersecting</text><text class="t-ink" x="110" y="347" font-size="13" text-anchor="middle">lines</text><polygon class="f-soft" points="233,300 273,220 413,220 373,300"/><polygon class="s-mute" stroke-width="1.5" points="233,300 273,220 413,220 373,300"/><line class="s-blue" stroke-width="2" x1="248" y1="288" x2="369.3" y2="255.3"/><polygon class="f-blue" points="378,253 368.5,260.2 366.2,251.5"/><line class="s-blue" stroke-width="2" x1="268" y1="258" x2="389.3" y2="225.3"/><polygon class="f-blue" points="398,223 388.5,230.2 386.2,221.5"/><line class="s-teal" stroke-width="2" x1="287" y1="277.5" x2="302" y2="255"/><polygon class="f-teal" points="307,247.5 304.6,259.1 297.2,254.2"/><circle class="f-ink" cx="287" cy="277.5" r="3"/><circle class="f-ink" cx="307" cy="247.5" r="3"/><text class="t-ink" x="372" y="270" font-size="13" text-anchor="middle" font-style="italic">L₁</text><text class="t-ink" x="372" y="225" font-size="13" text-anchor="middle" font-style="italic">L₂</text><text class="t-ink" x="323" y="330" font-size="13" text-anchor="middle">two distinct</text><text class="t-ink" x="323" y="347" font-size="13" text-anchor="middle">parallel lines</text><polygon class="f-soft" points="476,268 601,250 623,200 498,218"/><polygon class="s-mute" stroke-width="1.5" points="476,268 601,250 623,200 498,218"/><polygon class="f-soft" points="476,268 601,250 563,224 438,242"/><polygon class="s-mute" stroke-width="1.5" points="476,268 601,250 563,224 438,242"/><polygon class="f-soft" points="476,268 601,250 615,296 490,314"/><polygon class="s-mute" stroke-width="1.5" points="476,268 601,250 615,296 490,314"/><line class="s-red" stroke-width="2.5" x1="476" y1="268" x2="601" y2="250"/><circle class="f-red" cx="494.8" cy="265.3" r="3.5"/><circle class="f-red" cx="538.5" cy="259" r="3.5"/><circle class="f-red" cx="582.2" cy="252.7" r="3.5"/><text class="t-red" x="536" y="340" font-size="13" text-anchor="middle">three collinear points:</text><text class="t-red" x="536" y="357" font-size="13" text-anchor="middle">not enough (many planes)</text></svg><figcaption>Five ways to pin down a plane, and one that fails: through three collinear points you can fit infinitely many planes, like the pages of a book around its spine.</figcaption></figure>
<div class="table-wrap"><table class="data"><thead><tr><th>Given</th><th>Known point \(\vec r_0\)</th><th>Two direction vectors</th></tr></thead><tbody>
<tr><th>A point and two non-collinear vectors</th><td>the point</td><td>the two vectors</td></tr>
<tr><th>Three non-collinear points \(A, B, C\)</th><td>any of them, e.g. \(A\)</td><td>\(\overrightarrow{AB}\) and \(\overrightarrow{AC}\) (or any two vectors joining pairs of the points)</td></tr>
<tr><th>A line \(\vec r = \vec r_0 + t\vec m\) and a point \(P\) not on it</th><td>the line's point (or \(P\))</td><td>\(\vec m\), and the vector between \(P\) and the line's point</td></tr>
<tr><th>Two intersecting lines</th><td>either line's point</td><td>the two lines' direction vectors</td></tr>
<tr><th>Two distinct parallel lines</th><td>either line's point</td><td>the shared direction, and a vector joining a point on one line to a point on the other</td></tr>
<tr><th>A plane parallel to a given plane, through a given point</th><td>the given point</td><td>the given plane's direction vectors (parallel planes share them)</td></tr>
</tbody></table></div>
<p>Why do parallel lines need extra work? Their direction vectors are scalar multiples of each other, so together they count as only one direction. The second direction has to come from joining the two lines.</p>
<h4>When the information is not enough</h4>
<ul>
<li><strong>Three collinear points.</strong> \(\overrightarrow{AB}\) and \(\overrightarrow{AC}\) are scalar multiples, so you have only one direction. Infinitely many planes contain that line.</li>
<li><strong>A line and a point on that line.</strong> The vector from the point to the line's point is parallel to \(\vec m\): the same problem.</li>
<li><strong>Two skew lines</strong> (not parallel and never meeting). No plane contains both, so there is no answer at all.</li>
</ul>
<p>In every case the test is the one you used for linear dependence: are the two candidate direction vectors scalar multiples of each other?</p>

<h3 data-tier="essential">Example 1 · A plane through three points</h3>
<div class="example"><p class="example-title">Example 1 · Determine the vector and parametric equations of the plane that contains the points \(A(1, 0, -3)\), \(B(2, -3, 1)\) and \(C(3, 5, -3)\).</p>
<ol class="work">
<li><strong>Find two direction vectors.</strong> All three points lie on the plane, so a vector joining any two of them lies in the plane. Subtract coordinates, tip minus tail: \[ \begin{aligned} \overrightarrow{AB} &= (2 - 1,\ -3 - 0,\ 1 - (-3)) = (1, -3, 4) \\ \overrightarrow{AC} &= (3 - 1,\ 5 - 0,\ -3 - (-3)) = (2, 5, 0) \end{aligned} \]</li>
<li><strong>Check they are not collinear.</strong> \(\overrightarrow{AC}\) has z-component 0 but \(\overrightarrow{AB}\) does not, so neither is a scalar multiple of the other. They are linearly independent, so they can be the direction vectors \(\vec a\) and \(\vec b\). This also confirms that \(A, B, C\) are not on one line, so they really do determine a plane.</li>
<li><strong>Choose a known point.</strong> Use \(A\), so \(\vec r_0 = \overrightarrow{OA} = (1, 0, -3)\). As the notes say, you could also use \(\overrightarrow{OB}\) or \(\overrightarrow{OC}\).</li>
<li><strong>Write the vector equation</strong> by substituting into \(\vec r = \vec r_0 + s\vec a + t\vec b\): \[ \vec r = (1, 0, -3) + s(1, -3, 4) + t(2, 5, 0),\quad s, t \in \mathbb{R} \]</li>
<li><strong>Read across for the parametric equations</strong>, one component at a time: \[ \begin{aligned} x &= 1 + s + 2t \\ y &= -3s + 5t \\ z &= -3 + 4s \end{aligned} \qquad s, t \in \mathbb{R} \] The y-equation has no constant because \(y_0 = 0\), and the z-equation has no \(t\)-term because \(b_3 = 0\).</li>
<li><strong>Check.</strong> \(s = 1, t = 0\) gives \((2, -3, 1) = B\), and \(s = 0, t = 1\) gives \((3, 5, -3) = C\). The other two points are on the plane, as they must be.</li>
</ol>
<p class="answer">\(\therefore\ \vec r = (1, 0, -3) + s(1, -3, 4) + t(2, 5, 0),\ s, t \in \mathbb{R}\) and \(x = 1 + s + 2t,\ y = -3s + 5t,\ z = -3 + 4s,\ s, t \in \mathbb{R}\)</p></div>
<p>Another equally correct answer uses \(C\) as the known point: \(\vec r = (3, 5, -3) + s(1, -3, 4) + t(2, 5, 0)\). The equation looks different, but it describes the same plane.</p>

<h3 data-tier="essential">Example 2 · A plane through a point and a line</h3>
<figure class="diagram narrow"><svg viewBox="0 0 640 230" role="img" aria-labelledby="d36-ex2"><title id="d36-ex2">The line L lies in the plane with point Q(1, -2, 1) and direction a = (2, -1, 0). The point P(-4, 3, 6) is off the line. The vector b from P to Q is (5, -5, -5).</title><polygon class="f-soft" points="40,210 130,60 600,60 510,210"/><polygon class="s-mute" stroke-width="1.5" points="40,210 130,60 600,60 510,210"/><line class="s-ink" stroke-width="2" x1="85" y1="185" x2="560" y2="105"/><line class="s-teal" stroke-width="2.5" x1="205" y1="92" x2="277.3" y2="146"/><polygon class="f-teal" points="284.5,151.4 273,148.4 278.4,141.2"/><line class="s-blue" stroke-width="2.5" x1="284.5" y1="151.4" x2="399.1" y2="132.1"/><polygon class="f-blue" points="408,130.6 397.9,136.9 396.4,128"/><circle class="f-ink" cx="284.5" cy="151.4" r="3.5"/><circle class="f-ink" cx="205" cy="92" r="3.5"/><text class="t-ink" x="558" y="125" font-size="15" text-anchor="middle" font-style="italic">L</text><text class="t-ink" x="197" y="86" font-size="14" text-anchor="end">P(−4, 3, 6)</text><text class="t-ink" x="288.5" y="173.4" font-size="14" text-anchor="middle">Q(1, −2, 1)</text><text class="t-blue" x="414" y="118.6" font-size="14" text-anchor="middle">a = (2, −1, 0)</text><text class="t-teal" x="232.8" y="141.7" font-size="14" text-anchor="end">b = PQ = (5, −5, −5)</text></svg><figcaption>The line supplies a point and one direction. Joining the extra point \(P\) to the line's point \(Q\) supplies the second direction.</figcaption></figure>
<div class="example"><p class="example-title">Example 2 · Determine the vector equation of a plane that contains the point \(P(-4, 3, 6)\) and the line \(L: \vec r = (1, -2, 1) + t(2, -1, 0),\ t \in \mathbb{R}\).</p>
<ol class="work">
<li><strong>Take what the line gives you.</strong> The whole line lies in the plane, so its point \(Q(1, -2, 1)\) is on the plane and its direction vector is a direction of the plane: \(\vec a = (2, -1, 0)\) from the given line.</li>
<li><strong>Make sure \(P\) is not on the line</strong>, otherwise there is no single plane. Every point of \(L\) has \(z = 1 + 0t = 1\), but \(P\) has \(z = 6\), so \(P\) is off the line.</li>
<li><strong>Build the second direction vector from the two given points.</strong> \(Q\) and \(P\) are both on the plane, so the vector between them lies in it: \[ \vec b = (1, -2, 1) - (-4, 3, 6) = (5, -5, -5) \] It is not collinear to \(\vec a\) (\(\vec a\) has z-component 0 and \(\vec b\) does not). Since \((5, -5, -5) = 5(1, -1, -1)\), the simpler vector \((1, -1, -1)\) works too.</li>
<li><strong>Write the equation with two separate parameters.</strong> The line used \(t\), but the plane needs two independent parameters, so name them \(s\) and \(t\) (or \(s\) and \(k\)).</li>
</ol>
<p class="answer">\(\therefore\ \vec r = (1, -2, 1) + s(2, -1, 0) + t(5, -5, -5),\ s, t \in \mathbb{R}\), or \(\vec r = (1, -2, 1) + s(2, -1, 0) + k(1, -1, -1),\ s, k \in \mathbb{R}\)</p></div>
<p>Check that \(P\) really is on this plane: with \(s = 0\) and \(k = -5\), \((1, -2, 1) - 5(1, -1, -1) = (-4, 3, 6)\), which is \(P\).</p>
<div class="callout warn"><p class="callout-title">Do not use a position vector as a direction</p>
<p>A tempting mistake is to use \(\overrightarrow{OP} = (-4, 3, 6)\) as the second direction vector. That vector runs from the origin to \(P\), and the origin is usually not on the plane, so \(\overrightarrow{OP}\) usually does not lie in the plane. A direction vector must join two points that are <em>both</em> on the plane.</p></div>

<h3 data-tier="essential">Example 3 · Does a point lie on the plane?</h3>
<p>A point lies on the plane exactly when some pair of parameter values \((s, t)\) produces it. So substitute the point for \(\vec r\) and try to solve. You get three equations (one per component) but only two unknowns. Two of the equations find \(s\) and \(t\); the third one decides.</p>
<div class="example"><p class="example-title">Example 3 · Does \(A(4, 5, -3)\) lie in the plane \(\vec r = (4, 1, 6) + s(3, -2, 1) + t(-6, 6, -1),\ s, t \in \mathbb{R}\)?</p>
<ol class="work">
<li><strong>Substitute \(A\) for \(\vec r\)</strong> and look for a unique \(s, t\): \[ (4, 5, -3) = (4, 1, 6) + s(3, -2, 1) + t(-6, 6, -1) \]</li>
<li><strong>Split into components</strong> and tidy each equation: \[ \begin{array}{lrcl} \text{(1)} & 4 &=& 4 + 3s - 6t \quad\Rightarrow\quad 0 = 3s - 6t \\ \text{(2)} & 5 &=& 1 - 2s + 6t \quad\Rightarrow\quad 4 = -2s + 6t \\ \text{(3)} & -3 &=& 6 + s - t \end{array} \]</li>
<li><strong>Eliminate \(t\) using (1) and (2).</strong> The \(t\)-terms are \(-6t\) and \(+6t\), so adding the equations cancels them: \(0 + 4 = (3s - 2s) + (-6t + 6t)\), so \(s = 4\).</li>
<li><strong>Back-substitute</strong> \(s = 4\) into (1): \(0 = 3(4) - 6t = 12 - 6t\), so \(t = 2\).</li>
<li><strong>Check in (3)</strong>, the equation you have not used yet: LS \(= -3\), RS \(= 6 + (4) - (2) = 8\). LS \(\ne\) RS.</li>
</ol>
<p class="answer">\(\therefore\) no single pair \((s, t)\) satisfies all three equations, so \((4, 5, -3)\) does not lie in the plane.</p></div>
<div class="callout teacher"><p class="callout-title">"But check in (3) for uniqueness"</p>
<p>This is the step students skip. Two equations in two unknowns almost always have a solution, so finding \(s\) and \(t\) from (1) and (2) proves nothing yet: those values only make the x- and y-coordinates right. The point is on the plane only if the <em>same</em> \(s\) and \(t\) also make the z-coordinate right. If the check fails, the point is off the plane. If it passes, the point is on it.</p></div>
<details class="check"><summary>Does \(B(-5, 9, 4)\) lie in the same plane?</summary><div class="ans"><p>(1): \(-5 = 4 + 3s - 6t \Rightarrow -9 = 3s - 6t\). (2): \(9 = 1 - 2s + 6t \Rightarrow 8 = -2s + 6t\). Adding: \(-1 = s\). Then \(-9 = -3 - 6t\), so \(t = 1\). Check (3): RS \(= 6 + (-1) - (1) = 4 =\) LS. So yes, \(B\) is on the plane, with \(s = -1,\ t = 1\).</p></div></details>

<h3 data-tier="likely">Challenge · Where does a plane meet a coordinate axis?</h3>
<p>The same substitute-and-solve idea finds where a plane crosses an axis. Every point on the z-axis has the form \((0, 0, z)\), so two of its coordinates are known and one is unknown.</p>
<div class="example"><p class="example-title">Challenge · Determine the point at which the plane \(\vec r = (4, 1, 6) + s(3, -2, 1) + t(-6, 6, -1),\ s, t \in \mathbb{R}\) intersects the z-axis.</p>
<ol class="work">
<li><strong>Let the point be \(P(0, 0, z)\)</strong> (the teacher's hint) and substitute it: \[ (0, 0, z) = (4, 1, 6) + s(3, -2, 1) + t(-6, 6, -1) \]</li>
<li><strong>Use the two equations whose left sides are known</strong> to solve for \(s\) and \(t\): \[ \begin{aligned} x:\ 0 &= 4 + 3s - 6t \\ y:\ 0 &= 1 - 2s + 6t \end{aligned} \]</li>
<li><strong>Add them</strong> to eliminate \(t\): \(0 = 5 + s\), so \(s = -5\).</li>
<li><strong>Back-substitute</strong> into the y-equation: \(0 = 1 - 2(-5) + 6t = 11 + 6t\), so \(t = -\tfrac{11}{6}\).</li>
<li><strong>Use the z-equation to find \(z\).</strong> This time the third equation is not a check; it holds the unknown: \[ z = 6 + s - t = 6 + (-5) - \left(-\tfrac{11}{6}\right) = 1 + \tfrac{11}{6} = \tfrac{17}{6} \]</li>
<li><strong>Check</strong> in the x-equation: \(4 + 3(-5) - 6\left(-\tfrac{11}{6}\right) = 4 - 15 + 11 = 0\), as required.</li>
</ol>
<p class="answer">\(\therefore\) the plane meets the z-axis at \(P\left(0, 0, \tfrac{17}{6}\right)\).</p></div>
<p>For the x-axis use \((x, 0, 0)\) and solve the y- and z-equations first. For the y-axis use \((0, y, 0)\) and solve the x- and z-equations first.</p>
<details class="check"><summary>Where does the same plane meet the x-axis?</summary><div class="ans"><p>Let \((x, 0, 0)\). From z: \(0 = 6 + s - t\), so \(t = 6 + s\). From y: \(0 = 1 - 2s + 6(6 + s) = 37 + 4s\), so \(s = -\tfrac{37}{4}\) and \(t = -\tfrac{13}{4}\). Then \(x = 4 + 3\left(-\tfrac{37}{4}\right) - 6\left(-\tfrac{13}{4}\right) = 4 - \tfrac{111}{4} + \tfrac{78}{4} = -\tfrac{17}{4}\). The point is \(\left(-\tfrac{17}{4}, 0, 0\right)\).</p></div></details>

<h3 data-tier="likely">Special planes: the coordinate planes and planes parallel to them</h3>
<p>The three coordinate planes each contain two axes and the origin, so the origin is a convenient known point and the unit vectors along the two axes are convenient direction vectors.</p>
<div class="table-wrap"><table class="data"><thead><tr><th>Plane</th><th>Every point has</th><th>Vector equation</th><th>Parametric equations</th></tr></thead><tbody>
<tr><th>xy-plane</th><td>\(z = 0\)</td><td>\(\vec r = s(1, 0, 0) + t(0, 1, 0)\)</td><td>\(x = s,\ y = t,\ z = 0\)</td></tr>
<tr><th>xz-plane</th><td>\(y = 0\)</td><td>\(\vec r = s(1, 0, 0) + t(0, 0, 1)\)</td><td>\(x = s,\ y = 0,\ z = t\)</td></tr>
<tr><th>yz-plane</th><td>\(x = 0\)</td><td>\(\vec r = s(0, 1, 0) + t(0, 0, 1)\)</td><td>\(x = 0,\ y = s,\ z = t\)</td></tr>
</tbody></table></div>
<ul>
<li>The full form includes \(\vec r_0 = (0, 0, 0)\), as in the worksheet solutions: \(\vec r = (0, 0, 0) + s(1, 0, 0) + t(0, 0, 1)\) for the xz-plane, whose direction vectors are \(\hat\imath\) and \(\hat k\).</li>
<li>Every direction vector of the xz-plane has y-component 0: moving within that plane never changes \(y\). Similar statements hold for the other two.</li>
<li>A plane <strong>parallel</strong> to a coordinate plane uses the same direction vectors with a different point. Parallel to the yz-plane through \((6, 4, 2)\): \(\vec r = (6, 4, 2) + s(0, 1, 0) + t(0, 0, 1)\), so \(x = 6,\ y = 4 + s,\ z = 2 + t\). Every point has \(x = 6\).</li>
<li>A plane <strong>containing an axis</strong> contains the origin, and the axis direction is one direction vector. The plane containing the x-axis and \((-1, -4, -7)\) is \(\vec r = (0, 0, 0) + s(1, 0, 0) + t(-1, -4, -7)\).</li>
<li>Any plane through the origin can be written \(\vec r = s\vec a + t\vec b\). Watch for disguised versions: if the point vector is also one of the direction vectors, the plane passes through the origin (worksheet question 12).</li>
</ul>

<h3 data-tier="likely">Common mistakes to avoid</h3>
<div class="callout warn"><p class="callout-title">Traps that cost marks</p>
<ul>
<li><strong>A point used as a direction.</strong> Position vectors such as \(\overrightarrow{OP}\) start at the origin, which is usually off the plane. Directions must join two points of the plane. (The exception is a plane through the origin, where \(\overrightarrow{OP}\) does join two points of the plane.)</li>
<li><strong>Collinear direction vectors</strong>, for example the directions of two parallel lines, or vectors from three collinear points. Always check that they are not scalar multiples.</li>
<li><strong>One parameter for both directions.</strong> \(\vec r = \vec r_0 + t\vec a + t\vec b = \vec r_0 + t(\vec a + \vec b)\) is a line, not a plane. Use two different letters.</li>
<li><strong>Mixed-up parameters when converting.</strong> In parametric form, every \(s\) carries a component of \(\vec a\) and every \(t\) a component of \(\vec b\).</li>
<li><strong>Stopping after two equations</strong> when testing a point. The third equation is the actual test.</li>
<li><strong>Forgetting "\(s, t \in \mathbb{R}\)"</strong> at the end of a vector or parametric equation.</li>
<li><strong>Assuming your answer is wrong</strong> because it does not match the key. Check instead: is the key's point on your plane, and are the key's direction vectors combinations of yours?</li>
</ul></div>

<h3 data-tier="essential">Summary and what comes next</h3>
<div class="table-wrap"><table class="data"><thead><tr><th>Question type</th><th>Method</th></tr></thead><tbody>
<tr><th>Plane through three points</th><td>\(\vec r_0\) = one point; \(\vec a, \vec b\) = two vectors between the points; check they are not collinear.</td></tr>
<tr><th>Plane through a point and a line</th><td>\(\vec a = \vec m\); \(\vec b\) = vector from the point to the line's point; check the point is not on the line.</td></tr>
<tr><th>Plane containing two intersecting lines</th><td>Either line's point; the two direction vectors.</td></tr>
<tr><th>Plane containing two parallel lines</th><td>The shared direction, plus the vector joining a point on each line.</td></tr>
<tr><th>Is a point on the plane?</th><td>Substitute; solve two equations for \(s, t\); check the third.</td></tr>
<tr><th>Where does the plane meet the z-axis?</th><td>Let \((0, 0, z)\); solve the x- and y-equations for \(s, t\); then find \(z\).</td></tr>
<tr><th>Vector form to parametric form, and back</th><td>Read across the components; read down the columns.</td></tr>
</tbody></table></div>
<p>In lesson 3.7 you will meet the Cartesian (scalar) equation of a plane, \(Ax + By + Cz + D = 0\). Its coefficients come from a <em>normal vector</em> perpendicular to both direction vectors, which you can find with the cross product \(\vec n = \vec a \times \vec b\). Unlike the vector equation, the Cartesian equation is unique up to multiplying through by a constant, and it turns "is this point on the plane?" into a one-line substitution.</p>
`
});

window.QA.push({
  id: "qa-36", lesson: "3.6",
  title: "3.6 Worksheet: Vector and Parametric Equation of a Plane",
  source: "C - Worksheet (questions) and D - Worksheet Solutions (teacher's answers)",
  items: [
    { tier: "essential",
      q: String.raw`<strong>2a.</strong> State two direction vectors for the xz-coordinate plane.`,
      a: String.raw`<p><strong>Type:</strong> Direction vectors of a coordinate plane · <strong>Plan:</strong> The xz-plane contains the x-axis and the z-axis, so the unit vectors along those two axes lie in it and point in different directions.</p>
<ol class="work"><li>The x-axis lies in the xz-plane; its direction is \(\hat\imath = (1, 0, 0)\).</li><li>The z-axis lies in the xz-plane; its direction is \(\hat k = (0, 0, 1)\).</li><li>They are not scalar multiples of each other, so together they give two directions.</li></ol>
<p class="answer">\(\vec m_1 = \hat\imath = (1, 0, 0),\quad \vec m_2 = \hat k = (0, 0, 1)\)</p>`,
      note: String.raw`The textbook answer key gives \((1, 0, 0)\) and \((4, 0, -3)\). Any two non-collinear vectors with y-component 0 are correct.` },
    { tier: "essential",
      q: String.raw`<strong>2b.</strong> What do all direction vectors for the xz-coordinate plane have in common?`,
      a: String.raw`<p><strong>Type:</strong> Property of a plane's direction vectors · <strong>Plan:</strong> Ask what moving within the xz-plane can never change.</p>
<ol class="work"><li>Every point of the xz-plane has \(y = 0\).</li><li>A direction vector joins two such points, so its y-component is \(0 - 0 = 0\). Moving along the plane never changes \(y\).</li></ol>
<p class="answer">The y-coordinate (y-component) is 0: every direction vector has the form \((a, 0, c)\).</p>` },
    { tier: "essential",
      q: String.raw`<strong>3a.</strong> State two direction vectors for the plane \(\vec r = (9, 5, 2) + s(-3, 5, 2) + t(-6, 1, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Reading direction vectors from a vector equation · <strong>Plan:</strong> The direction vectors are the vectors multiplied by the parameters; the constant vector is a point, not a direction.</p>
<ol class="work"><li>The point is \((9, 5, 2)\); the vectors attached to \(s\) and \(t\) are the directions.</li><li>They are not collinear: \(-6 \div -3 = 2\) but \(1 \div 5 \ne 2\).</li></ol>
<p class="answer">\(\vec m_1 = (-3, 5, 2),\quad \vec m_2 = (-6, 1, 2)\)</p>`,
      note: String.raw`The teacher's comment for 3a to 3c: other answers are fine "as long as \(\vec m_1 \nparallel \vec m_2\)", for example any non-zero scalar multiples of these vectors.` },
    { tier: "essential",
      q: String.raw`<strong>3b.</strong> State two direction vectors for a plane parallel to the plane \(x = 3 + 5s + t,\ y = -2 - 5s + 6t,\ z = -2 + 3s - 2t\).`,
      a: String.raw`<p><strong>Type:</strong> Direction vectors from parametric equations (parallel planes) · <strong>Plan:</strong> Parallel planes have the same direction vectors, so read them off the given plane: the \(s\)-coefficients form one vector and the \(t\)-coefficients the other.</p>
<div class="eq">\[ \begin{aligned} x &= 3 + 5s + 1t \\ y &= -2 - 5s + 6t \\ z &= -2 + 3s - 2t \end{aligned} \]</div>
<ol class="work"><li>Down the \(s\) column: \((5, -5, 3)\).</li><li>Down the \(t\) column: \((1, 6, -2)\).</li><li>A parallel plane has exactly the same tilt, so these are its directions too; only its point would be different.</li></ol>
<p class="answer">\(\vec m_1 = (5, -5, 3),\quad \vec m_2 = (1, 6, -2)\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>3c.</strong> State two direction vectors for the plane containing the intersecting lines \(\vec r = (6, 5, -2) + s(4, -2, 1)\) and \(\vec r = (-10, -3, 1) + t(-1, 5, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing two lines · <strong>Plan:</strong> Each line lies in the plane, so each line's direction vector is a direction vector of the plane.</p>
<ol class="work"><li>Direction of the first line: \((4, -2, 1)\). Direction of the second line: \((-1, 5, 2)\).</li><li>They are not scalar multiples, so they give two different directions.</li></ol>
<p class="answer">\(\vec m_1 = (4, -2, 1),\quad \vec m_2 = (-1, 5, 2)\)</p>`,
      note: String.raw`The worksheet calls these lines intersecting, but with the numbers as printed they never meet. Solving \(6 + 4s = -10 - t\) and \(5 - 2s = -3 + 5t\) gives \(s = -\tfrac{44}{9},\ t = \tfrac{32}{9}\), and then the z-coordinates are \(-\tfrac{62}{9}\) and \(\tfrac{73}{9}\), which differ. So the lines are skew and no single plane contains both. The expected answer (the two direction vectors, as in the teacher's solution and the answer key) still describes every plane parallel to both lines.` },
    { tier: "essential",
      q: String.raw`<strong>4a.</strong> State two points that lie on the plane \(\vec r = (9, 4, -3) + t(-2, 2, 1) + p(0, -2, 6)\).`,
      a: String.raw`<p><strong>Type:</strong> Finding points on a plane · <strong>Plan:</strong> Every choice of the two parameters gives a point on the plane, so choose easy values. (Here the parameters are called \(t\) and \(p\).)</p>
<ol class="work"><li>If \(t = 0,\ p = 0\), only the constant vector is left: the point \((9, 4, -3)\).</li><li>If \(t = 1,\ p = 1\): \[ \begin{aligned} x &= 9 - 2(1) + 0(1) = 7 \\ y &= 4 + 2(1) - 2(1) = 4 \\ z &= -3 + 1(1) + 6(1) = 4 \end{aligned} \]</li></ol>
<p class="answer">\((9, 4, -3)\) and \((7, 4, 4)\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>4b.</strong> State two points that lie on the plane \(\vec r = (0, 1, 0) + t(1, 0, -2) + p(0, 0, 4)\).`,
      a: String.raw`<p><strong>Type:</strong> Finding points on a plane · <strong>Plan:</strong> Substitute simple parameter values.</p>
<ol class="work"><li>If \(t = 0,\ p = 0\): the point \((0, 1, 0)\).</li><li>If \(t = 1,\ p = 0\): \[ \begin{aligned} x &= 0 + 1 = 1 \\ y &= 1 \\ z &= 0 - 2(1) = -2 \end{aligned} \]</li></ol>
<p class="answer">\((0, 1, 0)\) and \((1, 1, -2)\)</p>`,
      note: String.raw`The answer key lists \((1, 1, 2)\) (from \(t = 1,\ p = 1\)) and \((1, 1, -2)\). Any point from any choice of \(t\) and \(p\) is correct.` },
    { tier: "essential",
      q: String.raw`<strong>4c.</strong> State two points that lie on the plane \(x = 3 + 5s + t,\ y = -2 - 5s + 6t,\ z = -2 + 3s - 2t\).`,
      a: String.raw`<p><strong>Type:</strong> Finding points from parametric equations · <strong>Plan:</strong> Choose values of \(s\) and \(t\) and evaluate all three equations.</p>
<ol class="work"><li>If \(s = 0,\ t = 0\): the constants give \((3, -2, -2)\).</li><li>If \(s = 1,\ t = 0\): \[ \begin{aligned} x &= 3 + 5 = 8 \\ y &= -2 - 5 = -7 \\ z &= -2 + 3 = 1 \end{aligned} \]</li></ol>
<p class="answer">\((3, -2, -2)\) and \((8, -7, 1)\)</p>`,
      note: String.raw`The answer key uses \(s = t = 1\) to get \((9, -1, -1)\). Also correct.` },
    { tier: "essential",
      q: String.raw`<strong>4d.</strong> State two points that lie on the xz-plane.`,
      a: String.raw`<p><strong>Type:</strong> Points on a coordinate plane · <strong>Plan:</strong> The xz-plane is the set of all points with \(y = 0\), so any point with y-coordinate 0 works.</p>
<p class="answer">For example \((1, 0, 0)\) and \((1, 0, 1)\): any points with y-coordinate 0.</p>`,
      note: String.raw`The answer key gives \((5, 0, 1)\) and \((-3, 0, 2)\).` },
    { tier: "essential",
      q: String.raw`<strong>5a.</strong> Write parametric equations for the plane \(\vec r = (-4, -6, 3) + s(5, 2, 3) + t(-4, -6, 3)\).`,
      a: String.raw`<p><strong>Type:</strong> Vector equation to parametric equations · <strong>Plan:</strong> Read across: each component of the vector equation becomes one scalar equation.</p>
<ol class="work"><li>x-components: \(-4,\ 5s,\ -4t\).</li><li>y-components: \(-6,\ 2s,\ -6t\).</li><li>z-components: \(3,\ 3s,\ 3t\).</li></ol>
<div class="eq">\[ \begin{aligned} x &= -4 + 5s - 4t \\ y &= -6 + 2s - 6t \\ z &= 3 + 3s + 3t \end{aligned} \qquad s, t \in \mathbb{R} \]</div>
<p class="answer">\(x = -4 + 5s - 4t,\ y = -6 + 2s - 6t,\ z = 3 + 3s + 3t,\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`Notice that the point and the \(t\)-direction vector are the same, so \(s = 0,\ t = -1\) gives the origin: this plane passes through the origin, which is exactly the idea of question 12.` },
    { tier: "essential",
      q: String.raw`<strong>5b.</strong> Write parametric equations for the plane \(\vec r = (0, 0, 1) + s(0, 2, 0) + t(3, 0, 0)\).`,
      a: String.raw`<p><strong>Type:</strong> Vector equation to parametric equations · <strong>Plan:</strong> Read across, then drop the zero terms.</p>
<div class="eq">\[ \begin{aligned} x &= 0 + 0s + 3t = 3t \\ y &= 0 + 2s + 0t = 2s \\ z &= 1 + 0s + 0t = 1 \end{aligned} \]</div>
<p class="answer">\(x = 3t,\ y = 2s,\ z = 1,\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`Every point has \(z = 1\): this is the horizontal plane one unit above the xy-plane.` },
    { tier: "essential",
      q: String.raw`<strong>5c.</strong> Write parametric equations for the xz-plane.`,
      a: String.raw`<p><strong>Type:</strong> Coordinate plane in parametric form · <strong>Plan:</strong> Write the vector equation first, using the origin and the directions \(\hat\imath, \hat k\) from 2a, then read across.</p>
<ol class="work"><li>\(\vec r = (0, 0, 0) + s(1, 0, 0) + t(0, 0, 1),\ s, t \in \mathbb{R}\)</li><li>Read across: \(x = 0 + s + 0 = s\), \(y = 0\), \(z = 0 + 0 + t = t\).</li></ol>
<p class="answer">\(x = s,\ y = 0,\ z = t,\ s, t \in \mathbb{R}\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>6a.</strong> Write a vector equation for the plane \(x = -4 + s + 3t,\ y = -1 + 3s - 4t,\ z = 3 + 4s - t\).`,
      a: String.raw`<p><strong>Type:</strong> Parametric equations to vector equation · <strong>Plan:</strong> Read down the columns: the constants form the point, the \(s\)-coefficients one direction vector and the \(t\)-coefficients the other.</p>
<div class="table-wrap"><table class="data"><thead><tr><th></th><th>constant</th><th>coefficient of \(s\)</th><th>coefficient of \(t\)</th></tr></thead><tbody>
<tr><th>\(x\)</th><td>\(-4\)</td><td>\(1\)</td><td>\(3\)</td></tr>
<tr><th>\(y\)</th><td>\(-1\)</td><td>\(3\)</td><td>\(-4\)</td></tr>
<tr><th>\(z\)</th><td>\(3\)</td><td>\(4\)</td><td>\(-1\)</td></tr>
</tbody></table></div>
<p class="answer">\(\vec r = (-4, -1, 3) + s(1, 3, 4) + t(3, -4, -1),\ s, t \in \mathbb{R}\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>6b.</strong> Write a vector equation for the plane \(x = 7s,\ y = 4,\ z = -2t\).`,
      a: String.raw`<p><strong>Type:</strong> Parametric equations to vector equation (missing terms) · <strong>Plan:</strong> Fill in every missing term with a zero, then read down the columns.</p>
<div class="eq">\[ \begin{aligned} x &= 0 + 7s + 0t \\ y &= 4 + 0s + 0t \\ z &= 0 + 0s - 2t \end{aligned} \]</div>
<p class="answer">\(\vec r = (0, 4, 0) + s(7, 0, 0) + t(0, 0, -2),\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`You could simplify the directions to \((1, 0, 0)\) and \((0, 0, 1)\): it is the plane \(y = 4\), parallel to the xz-plane.` },
    { tier: "essential",
      q: String.raw`<strong>6c.</strong> Write a vector equation for the xz-plane.`,
      a: String.raw`<p><strong>Type:</strong> Coordinate plane in vector form · <strong>Plan:</strong> The origin is on the plane, and \(\hat\imath\) and \(\hat k\) lie along the two axes in it.</p>
<p class="answer">\(\vec r = (0, 0, 0) + s(1, 0, 0) + t(0, 0, 1),\ s, t \in \mathbb{R}\), with \((1, 0, 0) = \hat\imath\) and \((0, 0, 1) = \hat k\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>7a.</strong> Determine a vector equation of the plane through the point \((-4, 5, 1)\) parallel to the vectors \((-3, -5, 3)\) and \((2, -1, -5)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane from a point and two direction vectors · <strong>Plan:</strong> Everything is given. Check that the vectors are not collinear, then substitute into \(\vec r = \vec r_0 + s\vec a + t\vec b\).</p>
<ol class="work"><li>Not collinear: \(-3 \div 2 = -1.5\) but \(-5 \div -1 = 5\), so the vectors are not scalar multiples.</li><li>"Parallel to the vectors" means the vectors are the direction vectors; \((-4, 5, 1)\) is \(\vec r_0\).</li></ol>
<p class="answer">\(\vec r = (-4, 5, 1) + s(-3, -5, 3) + t(2, -1, -5),\ s, t \in \mathbb{R}\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>7b.</strong> Determine a vector equation of the plane containing the two intersecting lines \(\vec r = (4, 7, 3) + t(1, 4, 3)\) and \(\vec r = (-1, -4, 6) + s(-1, -1, 3)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing two intersecting lines · <strong>Plan:</strong> Both lines lie in the plane, so use either line's point and both lines' direction vectors.</p>
<ol class="work"><li>Direction vectors: \(\vec m_1 = (1, 4, 3)\) and \(\vec m_2 = (-1, -1, 3)\). Since \(\vec m_1 \nparallel \vec m_2\) (not scalar multiples), they give two directions.</li><li>Known point: \((4, 7, 3)\) from the first line.</li><li>Optional check that the lines really meet: \(t = -2\) on the first line and \(s = -3\) on the second both give \((2, -1, -3)\).</li></ol>
<p class="answer">\(\vec r = (4, 7, 3) + s(1, 4, 3) + t(-1, -1, 3),\ s, t \in \mathbb{R}\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>7c.</strong> Determine a vector equation of the plane containing the line \(\vec r = (-3, 4, 6) + t(-5, -2, 3)\) and the point \((8, 3, 5)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane through a line and a point (like Example 2) · <strong>Plan:</strong> Use the line's point and direction vector, then make the second direction vector by joining the line's point to the given point.</p>
<ol class="work"><li>Point: \(A(-3, 4, 6)\) from the line. First direction: \(\vec m_1 = (-5, -2, 3)\).</li><li>Second direction from the two known points \(A\) and \(B(8, 3, 5)\): \[ \vec m_2 = \overrightarrow{AB} = (8, 3, 5) - (-3, 4, 6) = (11, -1, -1) \]</li><li>\(\vec m_1\) and \(\vec m_2\) are not scalar multiples (\(11 \div -5\) is not \(-1 \div -2\)), so \(B\) is off the line and the plane is determined.</li></ol>
<p class="answer">\(\vec r = (-3, 4, 6) + s(-5, -2, 3) + t(11, -1, -1),\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`The answer key gives \(\vec r = (8, 3, 5) + s(5, 2, -3) + t(11, -1, -1)\): a different point on the plane and \((5, 2, -3) = -(-5, -2, 3)\). Same plane.` },
    { tier: "essential",
      q: String.raw`<strong>7d.</strong> Determine a vector equation of the plane containing the two parallel lines \(\vec r = (0, 1, 3) + t(-6, -3, 6)\) and \(\vec r = (-4, 5, -4) + s(4, 2, -4)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing two parallel lines · <strong>Plan:</strong> The lines share one direction, so it counts only once. Get the second direction by joining a point on one line to a point on the other.</p>
<ol class="work"><li>\((-6, -3, 6) = -\tfrac{3}{2}(4, 2, -4)\), so the lines are parallel and give one direction: \(\vec m_1 = (4, 2, -4)\).</li><li>Join the lines' points: \[ \vec m_2 = (0, 1, 3) - (-4, 5, -4) = (4, -4, 7) \] It is not a multiple of \(\vec m_1\), so the lines are distinct and the plane is determined.</li><li>Known point: \((0, 1, 3)\).</li></ol>
<p class="answer">\(\vec r = (0, 1, 3) + s(4, 2, -4) + t(4, -4, 7),\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`The answer key uses \((2, 1, -2) = \tfrac{1}{2}(4, 2, -4)\); same plane.` },
    { tier: "essential",
      q: String.raw`<strong>7e.</strong> Determine a vector equation of the plane containing the three points \((2, 6, -5)\), \((-3, 1, -4)\) and \((6, -2, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane through three points (like Example 1) · <strong>Plan:</strong> One point plus two vectors joining pairs of the points.</p>
<ol class="work"><li>Known point: \((2, 6, -5)\).</li><li>Two vectors between the points: \[ \begin{aligned} \vec m_1 &= (2, 6, -5) - (-3, 1, -4) = (5, 5, -1) \\ \vec m_2 &= (2, 6, -5) - (6, -2, 2) = (-4, 8, -7) \end{aligned} \]</li><li>Not scalar multiples (\(5 \div -4 \ne 5 \div 8\)), so the points are not collinear.</li></ol>
<p class="answer">\(\vec r = (2, 6, -5) + s(5, 5, -1) + t(-4, 8, -7),\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`As the teacher notes, any scalar multiples of \(\overrightarrow{AB}, \overrightarrow{BC}, \overrightarrow{AC}\), and so on, work. The answer key uses \(t(4, -8, 7)\).` },
    { tier: "essential",
      q: String.raw`<strong>8a.</strong> Determine parametric equations of the plane through the point \((7, -5, 2)\) parallel to the vectors \((4, -1, 1)\) and \((-3, 4, 4)\).`,
      a: String.raw`<p><strong>Type:</strong> Parametric equations from a point and two directions · <strong>Plan:</strong> The vectors are not scalar multiples, so use them directly and write each component.</p>
<div class="eq">\[ \begin{aligned} x &= 7 + 4s - 3t \\ y &= -5 - s + 4t \\ z &= 2 + s + 4t \end{aligned} \qquad s, t \in \mathbb{R} \]</div>
<p class="answer">\(x = 7 + 4s - 3t,\ y = -5 - s + 4t,\ z = 2 + s + 4t,\ s, t \in \mathbb{R}\)</p>` },
    { tier: "essential",
      q: String.raw`<strong>8b.</strong> Determine parametric equations of the plane containing the two intersecting lines \(\vec r = (5, 4, 2) + t(4, -2, 1)\) and \(\vec r = (7, 4, -7) + s(-3, 1, 4)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing two intersecting lines (parametric form) · <strong>Plan:</strong> Use one line's point and both direction vectors, then write the components.</p>
<ol class="work"><li>Point \((5, 4, 2)\); directions \((-3, 1, 4)\) for \(s\) and \((4, -2, 1)\) for \(t\). Not scalar multiples.</li><li>Optional check that the lines meet: \(t = -1\) and \(s = 2\) both give \((1, 6, 1)\).</li><li>Read across: \[ \begin{aligned} x &= 5 - 3s + 4t \\ y &= 4 + s - 2t \\ z &= 2 + 4s + t \end{aligned} \]</li></ol>
<p class="answer">\(x = 5 - 3s + 4t,\ y = 4 + s - 2t,\ z = 2 + 4s + t,\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`The answer key gives \(x = 5 + 2s + 4t,\ y = 4 - 2t,\ z = 2 - 9s + t\). It uses the vector joining the two lines' points, \((7, 4, -7) - (5, 4, 2) = (2, 0, -9)\), as one direction. Also correct, because the lines intersect.` },
    { tier: "essential",
      q: String.raw`<strong>8c.</strong> Determine parametric equations of the plane containing the line \(\vec r = (1, 3, -1) + t(2, 2, -5)\) and the point \((8, 3, 5)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane through a line and a point (parametric form) · <strong>Plan:</strong> The line gives a point and one direction; joining the line's point to the given point gives the other direction.</p>
<ol class="work"><li>Point \((1, 3, -1)\); \(\vec m_1 = (2, 2, -5)\).</li><li>\(\vec m_2 = (8, 3, 5) - (1, 3, -1) = (7, 0, 6)\). Not a multiple of \(\vec m_1\).</li><li>With \(s\) on \(\vec m_2\) and \(t\) on \(\vec m_1\) (as in the teacher's solution): \[ \begin{aligned} x &= 1 + 7s + 2t \\ y &= 3 + 0s + 2t = 3 + 2t \\ z &= -1 + 6s - 5t \end{aligned} \]</li></ol>
<p class="answer">\(x = 1 + 7s + 2t,\ y = 3 + 2t,\ z = -1 + 6s - 5t,\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`The answer key gives \(x = 8 + 5s + 2t,\ y = 3 - 2s + 2t,\ z = 5 + 11s - 5t\). Its point is \((8, 3, 5)\) and its direction \((5, -2, 11) = (7, 0, 6) - (2, 2, -5)\) lies in the same plane, so both answers are right.` },
    { tier: "essential",
      q: String.raw`<strong>8d.</strong> Determine parametric equations of the plane containing the two parallel lines \(\vec r = (3, 2, 2) + t(-9, 6, -6)\) and \(\vec r = (1, 6, -6) + s(6, -4, 4)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing two parallel lines (parametric form) · <strong>Plan:</strong> One direction is the shared line direction; the other joins the two lines.</p>
<ol class="work"><li>\((6, -4, 4) = 2(3, -2, 2)\) and \((-9, 6, -6) = -3(3, -2, 2)\), so the lines are parallel. Use \(\vec m_1 = (3, -2, 2)\).</li><li>\(\vec m_2 = (3, 2, 2) - (1, 6, -6) = (2, -4, 8)\), or the parallel vector \((1, -2, 4)\). Not a multiple of \(\vec m_1\).</li><li>Point \((3, 2, 2)\): \[ \begin{aligned} x &= 3 + 3s + t \\ y &= 2 - 2s - 2t \\ z &= 2 + 2s + 4t \end{aligned} \]</li></ol>
<p class="answer">\(x = 3 + 3s + t,\ y = 2 - 2s - 2t,\ z = 2 + 2s + 4t,\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`The answer key has the same equations with \(s\) and \(t\) swapped.` },
    { tier: "essential",
      q: String.raw`<strong>8e.</strong> Determine parametric equations of the plane containing the three points \((2, 6, -5)\), \((-3, 1, -4)\) and \((6, -2, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane through three points (parametric form) · <strong>Plan:</strong> Same plane as 7e; write its components.</p>
<ol class="work"><li>Point \((2, 6, -5)\); \(\vec m_1 = (2, 6, -5) - (-3, 1, -4) = (5, 5, -1)\); \(\vec m_2 = (2, 6, -5) - (6, -2, 2) = (-4, 8, -7)\).</li><li>Read across: \[ \begin{aligned} x &= 2 + 5s - 4t \\ y &= 6 + 5s + 8t \\ z &= -5 - s - 7t \end{aligned} \]</li></ol>
<p class="answer">\(x = 2 + 5s - 4t,\ y = 6 + 5s + 8t,\ z = -5 - s - 7t,\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`The answer key uses \((4, -8, 7)\) for the second direction, which flips the signs of the \(t\)-terms.` },
    { tier: "likely",
      q: String.raw`<strong>9a.</strong> Determine the vector equation of the plane parallel to the yz-plane containing the point \((6, 4, 2)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane parallel to a coordinate plane · <strong>Plan:</strong> A plane parallel to the yz-plane has the same direction vectors as the yz-plane, \(\hat\jmath\) and \(\hat k\); only the point changes.</p>
<ol class="work"><li>Direction vectors of the yz-plane: \((0, 1, 0)\) and \((0, 0, 1)\).</li><li>Known point: \((6, 4, 2)\).</li></ol>
<p class="answer">\(\vec r = (6, 4, 2) + s(0, 1, 0) + t(0, 0, 1),\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`In parametric form \(x = 6\) for every point, which is what "parallel to the yz-plane, through \((6, 4, 2)\)" should mean.` },
    { tier: "likely",
      q: String.raw`<strong>9b.</strong> Determine the vector equation of the plane containing the origin and the points \((3, 3, 3)\) and \((8, -1, -1)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane through three points, one of them the origin · <strong>Plan:</strong> With the origin as the known point, the vectors from the origin to the other two points join points of the plane, so they are direction vectors.</p>
<ol class="work"><li>Point \((0, 0, 0)\).</li><li>\(\vec m_1 = (3, 3, 3) - (0, 0, 0) = (3, 3, 3)\) and \(\vec m_2 = (8, -1, -1)\). Not scalar multiples.</li></ol>
<p class="answer">\(\vec r = (0, 0, 0) + s(3, 3, 3) + t(8, -1, -1),\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`Using position vectors as directions is only allowed here because the origin is on the plane. The answer key simplifies \((3, 3, 3)\) to \((1, 1, 1)\).` },
    { tier: "likely",
      q: String.raw`<strong>9c.</strong> Determine the vector equation of the plane containing the x-axis and the point \((-1, -4, -7)\).`,
      a: String.raw`<p><strong>Type:</strong> Plane containing an axis and a point · <strong>Plan:</strong> The x-axis supplies a point (any point on it, such as the origin) and a direction (\(\hat\imath\)). The vector from the origin to the given point supplies the second direction.</p>
<ol class="work"><li>Any point on the x-axis, e.g. \((0, 0, 0)\), the origin.</li><li>\(\vec m_1 = (1, 0, 0) = \hat\imath\) represents the x-axis.</li><li>\(\vec m_2 = (-1, -4, -7) - (0, 0, 0) = (-1, -4, -7)\), not a multiple of \(\hat\imath\).</li></ol>
<p class="answer">\(\vec r = (0, 0, 0) + s(1, 0, 0) + t(-1, -4, -7),\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`The answer key writes \(t(1, 4, 7)\); same plane.` },
    { tier: "likely",
      q: String.raw`<strong>10a.</strong> Explain why the three points \((2, 3, -1)\), \((8, 5, -5)\) and \((-1, 2, 1)\) <em>do not</em> determine a plane.`,
      a: String.raw`<p><strong>Type:</strong> Does the information determine a plane? (three points) · <strong>Plan:</strong> Three points determine a plane only if they are not collinear, so test whether \(\overrightarrow{AB}\) and \(\overrightarrow{AC}\) are scalar multiples.</p>
<ol class="work"><li>Let \(A(2, 3, -1)\), \(B(8, 5, -5)\), \(C(-1, 2, 1)\).</li><li>\(\overrightarrow{AB} = (6, 2, -4)\) and \(\overrightarrow{AC} = (-3, -1, 2)\).</li><li>\(\overrightarrow{AB} = -2\,\overrightarrow{AC}\): scalar multiples. So \(A, B, C\) are collinear and supply only one direction; infinitely many planes contain the line through them.</li></ol>
<p class="answer">The points are collinear (\(\overrightarrow{AB} = -2\overrightarrow{AC}\)), so they are not enough to determine a plane.</p>` },
    { tier: "likely",
      q: String.raw`<strong>10b.</strong> Explain why the line \(\vec r = (4, 9, -3) + t(1, -4, 2)\) and the point \((8, -7, 5)\) <em>do not</em> determine a plane.`,
      a: String.raw`<p><strong>Type:</strong> Does the information determine a plane? (line and point) · <strong>Plan:</strong> A line and a point determine a plane only if the point is off the line. Build the vector from the line's point to the given point and compare it with \(\vec m\).</p>
<ol class="work"><li>Vector between \((8, -7, 5)\) and \((4, 9, -3)\): \(\vec a = (4, -16, 8)\).</li><li>\(\vec m = (1, -4, 2)\), and \(\vec a = 4\vec m\): scalar multiples, so there is only one direction.</li><li>Also, substituting the point into the line: \(8 = 4 + t\) gives \(t = 4\); \(-7 = 9 - 4t\) gives \(t = 4\); \(5 = -3 + 2t\) gives \(t = 4\). The same \(t\) works in all three, so \((8, -7, 5)\) is on the line.</li></ol>
<p class="answer">The point lies on the line (at \(t = 4\)), so there is not enough information to determine a plane.</p>` },
    { tier: "likely",
      q: String.raw`<strong>11.</strong> Find vector and parametric equations of the plane that contains the line \(x = 7 - t,\ y = -2t,\ z = -7 + t\) and that does not intersect the z-axis.`,
      a: String.raw`<p><strong>Type:</strong> Plane containing a line, with an extra condition · <strong>Plan:</strong> A plane that never meets the z-axis must be parallel to it, so \((0, 0, 1)\) is a direction vector. The line supplies the point and the other direction.</p>
<ol class="work"><li>From the line: point \((7, 0, -7)\) (at \(t = 0\)) and direction \((-1, -2, 1)\).</li><li>A line and a plane in R³ either meet or are parallel. This plane does not intersect the z-axis, so it is parallel to the z-axis, and \((0, 0, 1)\) can be a direction vector. It is not a multiple of \((-1, -2, 1)\).</li><li>Vector equation: \[ \vec r = (7, 0, -7) + s(0, 0, 1) + t(-1, -2, 1),\quad s, t \in \mathbb{R} \]</li><li>Read across: \[ \begin{aligned} x &= 7 - t \\ y &= -2t \\ z &= -7 + s + t \end{aligned} \]</li><li>Check: a point of the plane on the z-axis would need \(x = 0\) (so \(t = 7\)) and \(y = 0\) (so \(t = 0\)) at once, which is impossible. So the plane really misses the z-axis.</li></ol>
<p class="answer">\(\vec r = (7, 0, -7) + s(0, 0, 1) + t(-1, -2, 1)\); \(x = 7 - t,\ y = -2t,\ z = -7 + s + t,\ s, t \in \mathbb{R}\)</p>`,
      note: String.raw`The answer key uses \(t(1, 2, -1)\), giving \(x = 7 + t,\ y = 2t,\ z = -7 + s - t\). Same plane.` },
    { tier: "likely",
      q: String.raw`<strong>12.</strong> Demonstrate that a plane with a vector equation of the form \(\vec r = (a, b, c) + s(d, e, f) + t(a, b, c)\) passes through the origin.`,
      a: String.raw`<p><strong>Type:</strong> Proof that a plane passes through the origin · <strong>Plan:</strong> The plane passes through \((0, 0, 0)\) if some pair \(s, t\) makes \(\vec r = (0, 0, 0)\). Set up the three equations and solve; notice that the point vector \((a, b, c)\) is also a direction vector.</p>
<ol class="work"><li>If the plane passes through \((0, 0, 0)\), then there exist \(s, t\) that satisfy the equation: \[ \begin{array}{lrcl} \text{(1)} & 0 &=& a + ds + at \quad\Rightarrow\quad -a = ds + at \\ \text{(2)} & 0 &=& b + es + bt \quad\Rightarrow\quad -b = es + bt \\ \text{(3)} & 0 &=& c + fs + ct \end{array} \]</li><li>Make the \(s\)-terms match: multiply (1) by \(e\) and (2) by \(d\): \[ \begin{aligned} -ae &= eds + aet \\ -bd &= eds + bdt \end{aligned} \]</li><li>Subtract to eliminate \(s\): \[ -ae + bd = aet - bdt \ \Rightarrow\ -(ae - bd) = (ae - bd)t \ \Rightarrow\ t = -1 \]</li><li>Substitute \(t = -1\) into (1): \(-a = ds + a(-1) = ds - a\), so \(0 = ds\) and \(s = 0\).</li><li>Check in (3): LS \(= 0\), RS \(= c + f(0) + c(-1) = c - c = 0\). LS = RS.</li><li>So \(s = 0,\ t = -1\): \(\vec r = (a, b, c) + 0(d, e, f) - 1(a, b, c) = (0, 0, 0)\).</li></ol>
<p class="answer">With \(s = 0\) and \(t = -1\), \(\vec r = (0, 0, 0)\), so the plane passes through the origin.</p>`,
      note: String.raw`The elimination divides by \(ae - bd\) and reads \(s = 0\) from \(ds = 0\), which quietly assumes \(ae - bd \ne 0\) and \(d \ne 0\). You do not need either assumption: once you spot \(s = 0,\ t = -1\), the substitution in the last step is a complete demonstration on its own. The idea behind it: the point \((a, b, c)\) is also a direction vector, so walking back by exactly one copy of it from \((a, b, c)\) lands on the origin.` }
  ]
});

window.QUIZ.push(
  { id: "q36-01", lesson: "3.6", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`Which of the following is the vector equation of a plane in R³?`,
    options: [
      String.raw`\(\vec r = \vec r_0 + t\vec m,\ t \in \mathbb{R}\)`,
      String.raw`\(Ax + By + Cz + D = 0\)`,
      String.raw`\(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\), with \(\vec a, \vec b\) non-collinear`,
      String.raw`\(\vec r = \vec r_0 + t\vec a + t\vec b,\ t \in \mathbb{R}\)`
    ], answer: 2,
    explain: String.raw`A plane needs one point and all combinations of two non-collinear direction vectors, each with its own parameter. \(\vec r = \vec r_0 + t\vec m\) is a line (one parameter). \(Ax + By + Cz + D = 0\) is the Cartesian (scalar) equation of a plane from lesson 3.7, not the vector equation. Using the same \(t\) twice gives \(\vec r_0 + t(\vec a + \vec b)\), which is a line with direction \(\vec a + \vec b\).` },
  { id: "q36-02", lesson: "3.6", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which pair gives two direction vectors for the plane \(\vec r = (2, -1, 5) + s(3, 0, -4) + t(1, 2, 2)\)?`,
    options: [
      String.raw`\((2, -1, 5)\) and \((3, 0, -4)\)`,
      String.raw`\((3, 0, -4)\) and \((1, 2, 2)\)`,
      String.raw`\((6, 0, -8)\) and \((-3, 0, 4)\)`,
      String.raw`\((2, -1, 5)\) and \((1, 2, 2)\)`
    ], answer: 1,
    explain: String.raw`The direction vectors are the vectors multiplied by the parameters: \((3, 0, -4)\) and \((1, 2, 2)\). \((2, -1, 5)\) is the position vector of a point, not a direction. \((6, 0, -8)\) and \((-3, 0, 4)\) are both multiples of \((3, 0, -4)\), so they are collinear and give only one direction.` },
  { id: "q36-03", lesson: "3.6", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which point lies on the plane \(\vec r = (1, 4, -2) + s(2, -1, 3) + t(0, 1, 1)\)?`,
    options: [
      String.raw`\((2, -1, 3)\)`,
      String.raw`\((3, 5, 1)\)`,
      String.raw`\((3, 2, 0)\)`,
      String.raw`\((-1, 5, -4)\)`
    ], answer: 2,
    explain: String.raw`With \(s = 1,\ t = -1\): \((1 + 2 + 0,\ 4 - 1 - 1,\ -2 + 3 - 1) = (3, 2, 0)\). The others fail the third-equation check. \((2, -1, 3)\) is a direction vector, not a point: x gives \(s = \tfrac12\), y gives \(t = -\tfrac92\), and then \(z = -5 \ne 3\). For \((3, 5, 1)\): \(s = 1\), \(t = 2\), but \(z = 3 \ne 1\). For \((-1, 5, -4)\): \(s = -1\), \(t = 0\), but \(z = -5 \ne -4\).` },
  { id: "q36-04", lesson: "3.6", type: "tf", kind: "knowledge", tier: "essential",
    q: String.raw`Every plane has exactly one correct vector equation.`,
    answer: false,
    explain: String.raw`False. As the notes say, there are many ways to express the equation of a plane, depending on how you choose \(\vec r_0\), \(\vec a\) and \(\vec b\). Any point on the plane can be \(\vec r_0\), and any two non-collinear vectors in the plane (for example, scalar multiples of the originals) can be the directions. That is why your answer can differ from the key and still be right.` },
  { id: "q36-05", lesson: "3.6", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`A set of vectors is linearly dependent when…`,
    options: [
      String.raw`one of the vectors in the set can be written as a linear combination of the others`,
      String.raw`every pair of vectors in the set is perpendicular`,
      String.raw`no vector in the set can be written as a linear combination of the others`,
      String.raw`all the vectors in the set have the same magnitude`
    ], answer: 0,
    explain: String.raw`That is the definition in the notes: a dependent vector is redundant because it can be built from the others. "No vector can be written as a combination" is the definition of linearly <em>independent</em>. Perpendicularity and magnitude are irrelevant: \((1, 0, 0)\) and \((0, 1, 0)\) are perpendicular and independent, while \((1, 0, 0)\) and \((-1, 0, 0)\) have equal magnitudes but are dependent (collinear).` },
  { id: "q36-06", lesson: "3.6", type: "tf", kind: "knowledge", tier: "likely",
    q: String.raw`In R³, two non-collinear vectors are linearly independent, but they cannot form a basis for all of R³.`,
    answer: true,
    explain: String.raw`True. Two non-collinear vectors are independent, but every combination \(s\vec a + t\vec b\) stays in one plane, so they cannot reach vectors that point out of it. A basis for R³ needs three non-coplanar vectors. Two non-collinear vectors form a basis for R² (or for a plane), which is exactly why they work as a plane's direction vectors.` },
  { id: "q36-07", lesson: "3.6", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Which set of vectors forms a basis for R³?`,
    options: [
      String.raw`\((1, 0, 0),\ (0, 1, 0),\ (1, 1, 0)\)`,
      String.raw`\((1, 2, 3),\ (2, 4, 6),\ (0, 0, 1)\)`,
      String.raw`\((1, 0, 2),\ (0, 1, 1)\)`,
      String.raw`\((1, 0, 0),\ (0, 1, 0),\ (1, 1, 1)\)`
    ], answer: 3,
    explain: String.raw`A basis for R³ is three non-coplanar (linearly independent) vectors. \((1, 1, 1)\) has a non-zero z-component, so it cannot be built from \((1, 0, 0)\) and \((0, 1, 0)\), which both lie in the xy-plane. In the first set, \((1, 1, 0) = (1, 0, 0) + (0, 1, 0)\), so the vectors are coplanar. In the second, \((2, 4, 6) = 2(1, 2, 3)\), so the set is dependent. Two vectors can only span a plane, never all of R³.` },
  { id: "q36-08", lesson: "3.6", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which is a vector equation of the plane through \(A(1, 2, 0)\), \(B(3, -1, 4)\) and \(C(0, 5, 2)\)?`,
    options: [
      String.raw`\(\vec r = (1, 2, 0) + s(3, -1, 4) + t(0, 5, 2)\)`,
      String.raw`\(\vec r = (1, 2, 0) + s(2, -3, 4) + t(-1, 3, 2)\)`,
      String.raw`\(\vec r = (1, 2, 0) + s(2, -3, 4) + t(-4, 6, -8)\)`,
      String.raw`\(\vec r = (2, -3, 4) + s(1, 2, 0) + t(-1, 3, 2)\)`
    ], answer: 1,
    explain: String.raw`\(\overrightarrow{AB} = B - A = (2, -3, 4)\) and \(\overrightarrow{AC} = C - A = (-1, 3, 2)\), not collinear, with \(A\) as the point. The first option uses the position vectors of \(B\) and \(C\) as directions; those start at the origin, which is not on this plane. In the third option \((-4, 6, -8) = -2(2, -3, 4)\), so the "plane" collapses to a line. The last option swaps a direction and a point: \((2, -3, 4)\) is a direction vector and is not even on the plane.` },
  { id: "q36-09", lesson: "3.6", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which are the parametric equations of the plane \(\vec r = (0, 3, -1) + s(2, 0, 1) + t(-1, 4, 0)\)?`,
    options: [
      String.raw`\(x = 2s - t,\ y = 3 + 4s,\ z = -1 + t\)`,
      String.raw`\(x = 2s - t,\ y = 3 + 4t,\ z = 1 + s\)`,
      String.raw`\(x = 2s - t,\ y = 3 + 4t,\ z = -1 + s\)`,
      String.raw`\(x = 2s - t,\ y = 3,\ z = -1 + s + 4t\)`
    ], answer: 2,
    explain: String.raw`Read across each component: \(x = 0 + 2s - t\), \(y = 3 + 0s + 4t\), \(z = -1 + 1s + 0t\). The first option attaches \(\vec b\)'s y-component to \(s\) and puts \(t\) in the z-equation, mixing up the parameters. The second drops the sign of \(z_0 = -1\). The last moves the 4 from the y-equation into the z-equation.` },
  { id: "q36-10", lesson: "3.6", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which vector equation describes the plane \(x = 2 + s,\ y = -3t,\ z = 4 - s + 5t\)?`,
    options: [
      String.raw`\(\vec r = (2, -3, 4) + s(1, 0, -1) + t(0, -3, 5)\)`,
      String.raw`\(\vec r = (1, 0, -1) + s(2, 0, 4) + t(0, -3, 5)\)`,
      String.raw`\(\vec r = (2, 0, 4) + s(1, 0, 1) + t(0, -3, 5)\)`,
      String.raw`\(\vec r = (2, 0, 4) + s(1, 0, -1) + t(0, -3, 5)\)`
    ], answer: 3,
    explain: String.raw`Read down the columns. Constants: \((2, 0, 4)\); the y-equation has no constant, so \(y_0 = 0\). Coefficients of \(s\): \((1, 0, -1)\). Coefficients of \(t\): \((0, -3, 5)\). The first option takes \(-3\) (a coefficient of \(t\)) as \(y_0\). The second swaps the point and a direction. The third loses the minus sign on \(-s\) in the z-equation.` },
  { id: "q36-11", lesson: "3.6", type: "mcq", kind: "knowledge", tier: "essential",
    q: String.raw`To test whether a point \(Q\) lies on a plane, a student substitutes \(Q\), solves the x- and y-equations, and gets \(s = 2,\ t = -1\). What can the student conclude so far?`,
    options: [
      String.raw`\(Q\) lies on the plane, because values of \(s\) and \(t\) were found`,
      String.raw`Nothing yet: \(Q\) is on the plane only if \(s = 2,\ t = -1\) also satisfy the z-equation`,
      String.raw`\(Q\) is not on the plane, because \(t\) is negative`,
      String.raw`\(Q\) is on the plane only if \(s = t\)`
    ], answer: 1,
    explain: String.raw`Two equations in two unknowns almost always have a solution, so finding \(s\) and \(t\) only shows that the x- and y-coordinates can be matched. The z-equation decides: this is the teacher's "check in (3)" step. Negative parameter values are perfectly normal (they mean moving opposite to a direction vector), and there is no reason for \(s\) to equal \(t\).` },
  { id: "q36-12", lesson: "3.6", type: "mcq", kind: "applied", tier: "essential",
    q: String.raw`Which point lies on the plane \(\vec r = (1, 0, 2) + s(1, 1, 0) + t(0, 1, -1)\)?`,
    options: [
      String.raw`\((3, 3, 1)\)`,
      String.raw`\((3, 2, 1)\)`,
      String.raw`\((1, 1, 0)\)`,
      String.raw`\((2, 1, 1)\)`
    ], answer: 0,
    explain: String.raw`For \((3, 3, 1)\): x gives \(3 = 1 + s\), so \(s = 2\); y gives \(3 = s + t\), so \(t = 1\); z check: \(2 - t = 1\), which matches. For \((3, 2, 1)\): \(s = 2,\ t = 0\), but \(z = 2 \ne 1\). For \((1, 1, 0)\), a direction vector rather than a point: \(s = 0,\ t = 1\), but \(z = 1 \ne 0\). For \((2, 1, 1)\): \(s = 1,\ t = 0\), but \(z = 2 \ne 1\).` },
  { id: "q36-13", lesson: "3.6", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Which is a vector equation of the plane containing the point \(P(2, 1, -3)\) and the line \(\vec r = (0, 1, 1) + t(1, -2, 4)\)?`,
    options: [
      String.raw`\(\vec r = (0, 1, 1) + s(1, -2, 4) + t(2, 1, -3)\)`,
      String.raw`\(\vec r = (0, 1, 1) + s(1, -2, 4) + t(1, 0, -2)\)`,
      String.raw`\(\vec r = (2, 1, -3) + s(0, 1, 1) + t(1, -2, 4)\)`,
      String.raw`\(\vec r = (0, 1, 1) + s(1, -2, 4) + t(-2, 4, -8)\)`
    ], answer: 1,
    explain: String.raw`The line gives the point \((0, 1, 1)\) and the direction \((1, -2, 4)\). The second direction joins the line's point to \(P\): \((2, 1, -3) - (0, 1, 1) = (2, 0, -4) = 2(1, 0, -2)\). The first option uses \(\overrightarrow{OP}\), a position vector, as a direction. The third uses the line's point \((0, 1, 1)\) as a direction. In the last one \((-2, 4, -8) = -2(1, -2, 4)\), which is collinear with the line's direction.` },
  { id: "q36-14", lesson: "3.6", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`Which of the following does <strong>not</strong> determine a unique plane?`,
    options: [
      String.raw`Three non-collinear points`,
      String.raw`Two distinct parallel lines`,
      String.raw`Two intersecting lines`,
      String.raw`A line and a point on that line`
    ], answer: 3,
    explain: String.raw`If the point is on the line, the vector from it to the line's point is parallel to the line's direction, so you have only one direction, and infinitely many planes contain the line (like pages around a book's spine; worksheet 10b). Each of the others supplies one point and two non-collinear directions. For parallel lines, the second direction is the vector joining a point on each line.` },
  { id: "q36-15", lesson: "3.6", type: "tf", kind: "knowledge", tier: "likely",
    q: String.raw`Two skew lines (lines that are not parallel and never intersect) lie in exactly one plane.`,
    answer: false,
    explain: String.raw`False. If two non-parallel lines lay in the same plane, they would have to cross, because non-parallel lines in a plane always meet. Skew lines never meet, so no plane contains both of them.` },
  { id: "q36-16", lesson: "3.6", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Which is a vector equation of the xz-plane?`,
    options: [
      String.raw`\(\vec r = s(1, 0, 0) + t(0, 1, 0)\)`,
      String.raw`\(\vec r = s(0, 1, 0) + t(0, 0, 1)\)`,
      String.raw`\(\vec r = (0, 1, 0) + s(1, 0, 0) + t(0, 0, 1)\)`,
      String.raw`\(\vec r = s(1, 0, 0) + t(0, 0, 1)\)`
    ], answer: 3,
    explain: String.raw`The xz-plane contains the x- and z-axes and the origin, so its directions are \(\hat\imath = (1, 0, 0)\) and \(\hat k = (0, 0, 1)\) with \(\vec r_0 = \vec 0\). The first option is the xy-plane and the second is the yz-plane. The third has the right directions but passes through \((0, 1, 0)\): it is the parallel plane \(y = 1\).` },
  { id: "q36-17", lesson: "3.6", type: "mcq", kind: "applied", tier: "likely",
    q: String.raw`Where does the plane \(\vec r = (1, 2, 3) + s(1, 0, 1) + t(0, 1, 2)\) meet the z-axis?`,
    options: [
      String.raw`\((0, 0, 3)\)`,
      String.raw`\((0, 0, 8)\)`,
      String.raw`\((0, 0, 0)\)`,
      String.raw`\((0, 0, -2)\)`
    ], answer: 3,
    explain: String.raw`Let the point be \((0, 0, z)\). x: \(0 = 1 + s\), so \(s = -1\). y: \(0 = 2 + t\), so \(t = -2\). Then \(z = 3 + s + 2t = 3 - 1 - 4 = -2\). \((0, 0, 3)\) just copies \(z_0\), but at \(s = t = 0\) the point is \((1, 2, 3)\), which is not on the axis. \((0, 0, 8)\) comes from using \(s = 1,\ t = 2\) (sign errors). \((0, 0, 0)\) comes from forgetting the 2 in \(2t\).` },
  { id: "q36-18", lesson: "3.6", type: "tf", kind: "knowledge", tier: "extra",
    q: String.raw`Any set of vectors that contains the zero vector is linearly dependent.`,
    answer: true,
    explain: String.raw`True. The zero vector is always a linear combination of the other vectors, using zero multiples: \(\vec 0 = 0\vec a + 0\vec b\). So by the definition the set is dependent. The same fact explains why \(\vec 0\) can never be a direction vector.` },
  { id: "q36-19", lesson: "3.6", type: "tf", kind: "applied", tier: "essential",
    q: String.raw`The vectors \((2, -4, 6)\) and \((-1, 2, -3)\) can be used as the two direction vectors of a plane.`,
    answer: false,
    explain: String.raw`False. \((2, -4, 6) = -2(-1, 2, -3)\), so the vectors are collinear (linearly dependent). Together they give only one direction, and \(\vec r_0 + s\vec a + t\vec b\) would collapse to a line. You need a second, non-collinear vector.` },
  { id: "q36-20", lesson: "3.6", type: "mcq", kind: "knowledge", tier: "likely",
    q: String.raw`Why does the vector equation of a plane need two parameters, while a line needs only one?`,
    options: [
      String.raw`A plane is two-dimensional: from any point you can move independently in two non-parallel directions`,
      String.raw`Because R³ has three coordinates, x, y and z`,
      String.raw`Because a plane is determined by two points`,
      String.raw`Because one parameter belongs to the point and the other to the direction vector`
    ], answer: 0,
    explain: String.raw`Each parameter controls movement along one direction vector, and a plane has two independent directions. The number of coordinates is three for both lines and planes in R³, so that cannot be the reason. Two points determine a line, not a plane (you need three non-collinear points). The point \(\vec r_0\) has no parameter: it is fixed.` }
);

window.EXT.push(
  { id: "x36-01", lesson: "3.6", level: "apply", tier: "likely",
    title: "A sloped roof", marks: 8,
    prompt: String.raw`<p>An architect models one face of a roof using three of its corners: \(A(0, 0, 3)\) and \(B(8, 0, 3)\) are the two ends of the lower edge (the eave), and \(C(0, 4, 5)\) is one end of the ridge. Units are metres and the z-axis points straight up.</p>
<ol type="a"><li>Write a vector equation and parametric equations for the plane of the roof, using \(A\) as the known point.</li><li>The other end of the ridge is \(D(8, 4, 5)\). Show that \(D\) lies in the same plane and state the parameter values that produce it.</li><li>A satellite dish must be mounted on the roof directly above the ground point \((4, 2, 0)\). Find the height of the roof at that spot.</li><li>A drone hovers at \((2, 3, 4.6)\). Is it touching the roof plane? If not, is it above or below the roof, and by how much (measured vertically)?</li></ol>`,
    hints: [String.raw`Use \(\overrightarrow{AB}\) and \(\overrightarrow{AC}\) as the direction vectors.`, String.raw`For (c) and (d), the x- and y-equations fix \(s\) and \(t\); the z-equation then gives the roof's height at that spot.`],
    answer: String.raw`<p><strong>a.</strong> \(\overrightarrow{AB} = (8, 0, 0)\) and \(\overrightarrow{AC} = (0, 4, 2)\). They are not collinear (\(\overrightarrow{AB}\) has no y- or z-part). So</p>
<div class="eq">\[ \vec r = (0, 0, 3) + s(8, 0, 0) + t(0, 4, 2),\ s, t \in \mathbb{R};\qquad x = 8s,\ y = 4t,\ z = 3 + 2t \]</div>
<p><strong>b.</strong> Substitute \(D\): \(8 = 8s\) gives \(s = 1\); \(4 = 4t\) gives \(t = 1\). Check z: \(3 + 2(1) = 5\), which matches. So \(D\) is on the plane with \(s = t = 1\), that is \(D = A + \overrightarrow{AB} + \overrightarrow{AC}\): the roof face is the rectangle \(ABDC\).</p>
<p><strong>c.</strong> \(x = 4\) gives \(s = \tfrac12\); \(y = 2\) gives \(t = \tfrac12\). Then \(z = 3 + 2\left(\tfrac12\right) = 4\). The roof is 4 m high there, so the dish goes at \((4, 2, 4)\).</p>
<p><strong>d.</strong> \(x = 2\) gives \(s = \tfrac14\); \(y = 3\) gives \(t = \tfrac34\). The roof's height there is \(z = 3 + 2\left(\tfrac34\right) = 4.5\). The drone's z is \(4.6 \ne 4.5\), so the drone is not on the plane: it is 0.1 m above the roof.</p>
<p class="answer">a. \(\vec r = (0, 0, 3) + s(8, 0, 0) + t(0, 4, 2)\); b. \(s = t = 1\); c. 4 m; d. not on the roof, 0.1 m above it.</p>` },
  { id: "x36-02", lesson: "3.6", level: "analyze", tier: "likely",
    title: "A laser beam and a glass panel", marks: 8,
    prompt: String.raw`<p>A flat glass panel lies in the plane \(\pi: \vec r = (3, 0, 0) + s(1, 0, 1) + t(0, 1, 1),\ s, t \in \mathbb{R}\). A laser fires from \(L_0(1, -2, 0)\) in the direction \(\vec d = (1, 2, 1)\), so the beam follows \(\vec r = (1, -2, 0) + k(1, 2, 1),\ k \ge 0\).</p>
<ol type="a"><li>Show that the laser's starting point is not on the plane of the panel.</li><li>Find the point where the beam meets the plane.</li><li>A second laser fires from the same point in the direction \(\vec e = (1, 1, 2)\). Show that \(\vec e\) is a linear combination of the plane's direction vectors, and explain what this means for the beam.</li><li>Does the second beam ever meet the plane? Justify your answer algebraically.</li></ol>`,
    hints: [String.raw`For (a), solve two component equations for \(s\) and \(t\), then check the third.`, String.raw`For (b), set the beam's general point equal to the plane's general point: three equations in the three unknowns \(k, s, t\).`, String.raw`For (c), try \(1(1, 0, 1) + 1(0, 1, 1)\).`],
    answer: String.raw`<p><strong>a.</strong> Substitute \((1, -2, 0)\): x gives \(1 = 3 + s\), so \(s = -2\); y gives \(t = -2\). Check z: \(s + t = -4 \ne 0\). So \(L_0\) is not on the plane.</p>
<p><strong>b.</strong> Set \((1 + k,\ -2 + 2k,\ k) = (3 + s,\ t,\ s + t)\):</p>
<div class="eq">\[ \begin{aligned} x:&\ s = k - 2 \\ y:&\ t = 2k - 2 \\ z:&\ k = s + t = (k - 2) + (2k - 2) = 3k - 4 \ \Rightarrow\ k = 2 \end{aligned} \]</div>
<p>Then \(s = 0,\ t = 2\). The beam point is \((1, -2, 0) + 2(1, 2, 1) = (3, 2, 2)\), and the plane gives \((3, 0, 0) + 0(1, 0, 1) + 2(0, 1, 1) = (3, 2, 2)\), the same point. Since \(k = 2 \ge 0\), the beam really reaches it.</p>
<p><strong>c.</strong> \((1, 0, 1) + (0, 1, 1) = (1, 1, 2) = \vec e\). So \(\{(1, 0, 1), (0, 1, 1), \vec e\}\) is linearly dependent: \(\vec e\) lies in the plane's own set of directions. The beam travels parallel to the panel.</p>
<p><strong>d.</strong> Set \((1 + k,\ -2 + k,\ 2k) = (3 + s,\ t,\ s + t)\). x: \(s = k - 2\). y: \(t = k - 2\). z: \(2k = s + t = 2k - 4\), so \(0 = -4\), which is impossible. No value of \(k\) works, so the beam never meets the plane. It starts off the plane and runs parallel to it, so it stays the same distance away. (Had it started on the plane, it would lie in the plane completely.)</p>
<p class="answer">a. \(z\)-check fails; b. \((3, 2, 2)\); c. \(\vec e = (1, 0, 1) + (0, 1, 1)\), so the beam is parallel to the panel; d. never meets it.</p>` },
  { id: "x36-03", lesson: "3.6", level: "extend", tier: "extra",
    title: "Same plane, different equations", marks: 9,
    prompt: String.raw`<p>Two students answer Example 1 (the plane through \(A(1, 0, -3)\), \(B(2, -3, 1)\), \(C(3, 5, -3)\)) differently:</p>
<div class="eq">\[ \pi_1:\ \vec r = (1, 0, -3) + s(1, -3, 4) + t(2, 5, 0) \qquad \pi_2:\ \vec r = (3, 5, -3) + u(-1, -8, 4) + v(1, -3, 4) \]</div>
<ol type="a"><li>Show that the point of \(\pi_2\) lies on \(\pi_1\).</li><li>Show that each direction vector of \(\pi_2\) is a linear combination of the direction vectors of \(\pi_1\).</li><li>Use (a) and (b) to prove that \(\pi_1\) and \(\pi_2\) are the same plane.</li><li>Prove: if \(\vec a\) and \(\vec b\) are non-collinear, the plane \(\vec r = \vec r_0 + s\vec a + t\vec b\) passes through the origin exactly when \(\vec r_0\) is a linear combination of \(\vec a\) and \(\vec b\). Use this to explain worksheet question 12.</li></ol>`,
    hints: [String.raw`\((3, 5, -3)\) is the point \(C\).`, String.raw`Solve \((-1, -8, 4) = s(1, -3, 4) + t(2, 5, 0)\); the z-component gives \(s\) immediately.`, String.raw`For (d), the origin is on the plane when \(\vec 0 = \vec r_0 + s\vec a + t\vec b\) for some \(s, t\). Rearrange.`],
    answer: String.raw`<p><strong>a.</strong> Solve \((3, 5, -3) = (1, 0, -3) + s(1, -3, 4) + t(2, 5, 0)\). z: \(-3 = -3 + 4s\), so \(s = 0\). x: \(3 = 1 + 0 + 2t\), so \(t = 1\). Check y: \(-3(0) + 5(1) = 5\), which matches. So the point lies on \(\pi_1\) (it is \(C\)).</p>
<p><strong>b.</strong> Solve \((-1, -8, 4) = s(1, -3, 4) + t(2, 5, 0)\). z: \(4 = 4s\), so \(s = 1\). x: \(-1 = 1 + 2t\), so \(t = -1\). Check y: \(-3(1) + 5(-1) = -8\), which matches. So \((-1, -8, 4) = (1, -3, 4) - (2, 5, 0)\). The other direction is simply \((1, -3, 4) = 1(1, -3, 4) + 0(2, 5, 0)\).</p>
<p><strong>c.</strong> Write \(\vec r_0 = (1, 0, -3)\), \(\vec a = (1, -3, 4)\), \(\vec b = (2, 5, 0)\). From (a) and (b), \((3, 5, -3) = \vec r_0 + \vec b\), \((-1, -8, 4) = \vec a - \vec b\) and \((1, -3, 4) = \vec a\). Any point of \(\pi_2\) is then</p>
<div class="eq">\[ (\vec r_0 + \vec b) + u(\vec a - \vec b) + v\vec a = \vec r_0 + (u + v)\vec a + (1 - u)\vec b \]</div>
<p>which is a point of \(\pi_1\) with \(s = u + v,\ t = 1 - u\). Conversely, any point of \(\pi_1\) with parameters \(s, t\) comes from \(u = 1 - t,\ v = s + t - 1\) on \(\pi_2\). Every point of each plane is on the other, so they are the same plane.</p>
<p><strong>d.</strong> The origin is on the plane \(\iff\) there are \(s, t\) with \(\vec 0 = \vec r_0 + s\vec a + t\vec b\) \(\iff\) \(\vec r_0 = (-s)\vec a + (-t)\vec b\) \(\iff\) \(\vec r_0\) is a linear combination of \(\vec a\) and \(\vec b\). Each step reverses, so the statement holds in both directions. In question 12, the point vector \((a, b, c)\) is also the second direction vector, so \((a, b, c) = 0(d, e, f) + 1(a, b, c)\) is a linear combination of the directions. Hence the plane passes through the origin, at \(s = -0 = 0\) and \(t = -1\), exactly the values the teacher found.</p>
<p class="answer">The two equations describe the same plane; a plane passes through the origin exactly when \(\vec r_0\) is a combination of its direction vectors.</p>` },
  { id: "x36-04", lesson: "3.6", level: "apply", tier: "likely",
    title: "A safety net between two parallel cables", marks: 7,
    prompt: String.raw`<p>Two straight, parallel cables are strung across a stadium. Cable 1 follows \(\vec r = (0, 0, 10) + k(4, 3, 0)\) and cable 2 follows \(\vec r = (0, 6, 8) + k(4, 3, 0)\), \(k \in \mathbb{R}\) (metres, z up). A safety net will be stretched in the plane containing both cables.</p>
<ol type="a"><li>Explain why the two cables determine a plane.</li><li>Find vector and parametric equations for the plane of the net.</li><li>A camera is mounted at \((8, 12, 8)\) and a light at \((8, 9, 7)\). Which of them lies in the plane of the net?</li><li>Find a vector equation of the line where the plane meets the ground, \(z = 0\).</li></ol>`,
    hints: [String.raw`Parallel lines share only one direction. Build the second direction by joining \((0, 0, 10)\) to \((0, 6, 8)\).`, String.raw`For (d), set \(z = 0\) in the parametric equations and see what that forces.`],
    answer: String.raw`<p><strong>a.</strong> Both cables have direction \((4, 3, 0)\), so they are parallel. They are distinct: every point of cable 1 has \(z = 10\), but \((0, 6, 8)\) has \(z = 8\), so cable 2's point is not on cable 1. Two distinct parallel lines determine exactly one plane.</p>
<p><strong>b.</strong> \(\vec a = (4, 3, 0)\). \(\vec b = (0, 6, 8) - (0, 0, 10) = (0, 6, -2) = 2(0, 3, -1)\); use \((0, 3, -1)\). Not collinear with \(\vec a\).</p>
<div class="eq">\[ \vec r = (0, 0, 10) + s(4, 3, 0) + t(0, 3, -1),\ s, t \in \mathbb{R};\qquad x = 4s,\ y = 3s + 3t,\ z = 10 - t \]</div>
<p><strong>c.</strong> Use the x- and z-equations first, since each involves only one parameter. Camera \((8, 12, 8)\): \(s = 2\), \(t = 2\); check y: \(3(2) + 3(2) = 12\), which matches, so the camera is in the plane. Light \((8, 9, 7)\): \(s = 2\), \(t = 3\); check y: \(6 + 9 = 15 \ne 9\), so the light is not.</p>
<p><strong>d.</strong> \(z = 0\) forces \(10 - t = 0\), so \(t = 10\). Then \(x = 4s\), \(y = 3s + 30\), \(z = 0\): the line \(\vec r = (0, 30, 0) + s(4, 3, 0),\ s \in \mathbb{R}\). It is parallel to the cables, as it should be: the cables are horizontal, so a horizontal slice of the plane runs the same way.</p>
<p class="answer">b. \(\vec r = (0, 0, 10) + s(4, 3, 0) + t(0, 3, -1)\); c. the camera; d. \(\vec r = (0, 30, 0) + s(4, 3, 0)\).</p>` }
);

window.EXTRA.push(
  { id: "e-36-cross-product-route", lesson: "3.6", tier: "likely",
    title: "From two direction vectors to one normal: a preview of 3.7",
    why: String.raw`One cross product turns the vector equation into a Cartesian equation, which makes point tests and axis intercepts one-line substitutions.`,
    html: String.raw`<h3>The idea</h3>
<p>Both direction vectors lie in the plane. A vector perpendicular to both of them is perpendicular to every combination \(s\vec a + t\vec b\), so it is perpendicular to the whole plane: a <em>normal vector</em>. The cross product makes exactly such a vector: \(\vec n = \vec a \times \vec b\).</p>
<h3>Example 3 revisited</h3>
<p>For \(\vec r = (4, 1, 6) + s(3, -2, 1) + t(-6, 6, -1)\):</p>
<div class="eq">\[ \vec n = (3, -2, 1) \times (-6, 6, -1) = \big((-2)(-1) - (1)(6),\ (1)(-6) - (3)(-1),\ (3)(6) - (-2)(-6)\big) = (-4, -3, 6) \]</div>
<p>Check: \(\vec n \cdot (3, -2, 1) = -12 + 6 + 6 = 0\) and \(\vec n \cdot (-6, 6, -1) = 24 - 18 - 6 = 0\). For any point \(P(x, y, z)\) on the plane, \(\overrightarrow{P_0P}\) lies in the plane, so \(\vec n \cdot \overrightarrow{P_0P} = 0\):</p>
<div class="eq">\[ -4(x - 4) - 3(y - 1) + 6(z - 6) = 0 \ \Rightarrow\ 4x + 3y - 6z + 17 = 0 \]</div>
<ul>
<li><strong>Is \(A(4, 5, -3)\) on the plane?</strong> \(4(4) + 3(5) - 6(-3) + 17 = 66 \ne 0\). No, the same verdict as the notes, with no simultaneous equations.</li>
<li><strong>z-intercept:</strong> set \(x = y = 0\): \(-6z + 17 = 0\), so \(z = \tfrac{17}{6}\), matching the Challenge.</li>
<li><strong>Is \(B(-5, 9, 4)\) on the plane?</strong> \(-20 + 27 - 24 + 17 = 0\). Yes.</li>
</ul>
<p>This is the method of lesson 3.7. The vector equation is still the natural starting point when a question hands you points and lines; the Cartesian form is the efficient tool once you have it.</p>` },
  { id: "e-36-coordinates-on-a-plane", lesson: "3.6", tier: "extra",
    title: "s and t as coordinates on the plane",
    why: String.raw`The parameters are more than algebra: they lay a slanted grid over the plane, which explains why each point has exactly one pair (s, t) and lets you describe parallelograms and triangles.`,
    html: String.raw`<h3>A grid drawn on the plane</h3>
<p>Fix \(\vec r_0\), \(\vec a\) and \(\vec b\). The lines \(s = 0, 1, 2, \dots\) and \(t = 0, 1, 2, \dots\) draw a grid of identical parallelograms across the plane, like graph paper that has been sheared. The pair \((s, t)\) says where a point sits on that grid, the same way \((x, y)\) does on ordinary graph paper. With \(\vec r_0 = \vec 0\), \(\vec a = \hat\imath\) and \(\vec b = \hat\jmath\) it <em>is</em> ordinary graph paper: the xy-plane.</p>
<h3>Why each point has only one label</h3>
<p>Suppose one point had two labels: \(\vec r_0 + s_1\vec a + t_1\vec b = \vec r_0 + s_2\vec a + t_2\vec b\). Then \((s_1 - s_2)\vec a = (t_2 - t_1)\vec b\). If \(s_1 \ne s_2\), dividing would make \(\vec a\) a multiple of \(\vec b\), so they would be collinear. They are not, so \(s_1 = s_2\), and then \((t_2 - t_1)\vec b = \vec 0\) forces \(t_1 = t_2\). Linear independence is exactly the guarantee that labels are unique, which is why Example 3 speaks of solving for <em>unique</em> \(s, t\).</p>
<h3>Restricting s and t</h3>
<ul>
<li>\(0 \le s \le 1\) and \(0 \le t \le 1\) gives the filled parallelogram with corners \(\vec r_0,\ \vec r_0 + \vec a,\ \vec r_0 + \vec b,\ \vec r_0 + \vec a + \vec b\).</li>
<li>\(s \ge 0,\ t \ge 0,\ s + t \le 1\) gives the filled triangle with corners \(\vec r_0,\ \vec r_0 + \vec a,\ \vec r_0 + \vec b\).</li>
</ul>
<p>In Example 1, triangle \(ABC\) is exactly \(\vec r = (1, 0, -3) + s(1, -3, 4) + t(2, 5, 0)\) with \(s, t \ge 0\) and \(s + t \le 1\). For instance \(s = \tfrac14,\ t = \tfrac12\) gives \(\left(\tfrac94, \tfrac74, -2\right)\), a point inside the triangle, since \(\tfrac14 + \tfrac12 \le 1\).</p>
<p>Computer graphics relies on this idea. Every 3D model is built from triangles, and "is this point inside this triangle?" or "which part of the texture image belongs here?" are answered by computing \(s\) and \(t\) (often called barycentric or UV coordinates).</p>` },
  { id: "e-36-counting-directions", lesson: "3.6", tier: "likely",
    title: "Counting directions: why a fourth vector in R³ is always redundant",
    why: String.raw`The basis facts in the notes all follow from one simple count, which also explains why a random point usually fails the third-equation check.`,
    html: String.raw`<h3>Dimension is the number of independent directions</h3>
<p>A line has one independent direction, a plane two, and space three. That number is the <em>dimension</em>, and it matches the number of parameters in a vector equation: \(t\) for a line, \(s\) and \(t\) for a plane, and three parameters if you wanted to describe all of R³.</p>
<h3>Consequences</h3>
<ul>
<li>In R², any three vectors are linearly dependent: once two non-collinear vectors reach every vector in R², a third must already be a combination of them.</li>
<li>In R³, any four vectors are linearly dependent, for the same reason.</li>
<li>A set containing \(\vec 0\) is always dependent, since \(\vec 0 = 0\vec a + 0\vec b\).</li>
<li>A basis must be both independent (no redundancy) and spanning (reaches everything). In R³ that means exactly three non-coplanar vectors, no more and no fewer.</li>
</ul>
<h3>An equivalent definition you will meet later</h3>
<p>Vectors \(\vec v_1, \vec v_2, \vec v_3\) are linearly dependent exactly when there are numbers \(c_1, c_2, c_3\), not all zero, with \(c_1\vec v_1 + c_2\vec v_2 + c_3\vec v_3 = \vec 0\). If, say, \(c_3 \ne 0\), divide by it: \(\vec v_3 = -\tfrac{c_1}{c_3}\vec v_1 - \tfrac{c_2}{c_3}\vec v_2\), which is the definition in the notes. University linear algebra prefers this form because it treats every vector in the set equally.</p>
<h3>Why the point in Example 3 failed</h3>
<p>Testing whether \(A\) is on the plane is the same as asking whether \(\overrightarrow{P_0A}\) is a combination of \(\vec a\) and \(\vec b\), that is, whether \(\{\overrightarrow{P_0A}, \vec a, \vec b\}\) is dependent. In Example 3, \(\overrightarrow{P_0A} = (4, 5, -3) - (4, 1, 6) = (0, 4, -9)\), and the triple scalar product is \((0, 4, -9) \cdot \big((3, -2, 1) \times (-6, 6, -1)\big) = (0, 4, -9) \cdot (-4, -3, 6) = -66 \ne 0\). The three vectors are not coplanar, so \(A\) is not on the plane. Three vectors in R³ usually point in three independent directions, which is why a randomly chosen point usually fails the third-equation check. In R², by contrast, three vectors are always dependent, so every point would pass: a "plane" inside R² is all of R².</p>` }
);

window.GLOSSARY.push(
  { term: String.raw`Linearly dependent`, def: String.raw`A set of vectors is linearly dependent if one of the vectors can be written as a linear combination of the others. Two vectors are dependent when they are collinear; three vectors in R³ are dependent when they are coplanar.`, lesson: "3.6", tier: "essential" },
  { term: String.raw`Linearly independent`, def: String.raw`A set of vectors in which no vector can be written as a linear combination of the others. Two non-collinear vectors, or three non-coplanar vectors in R³, are linearly independent and can form a basis.`, lesson: "3.6", tier: "essential" },
  { term: String.raw`Vector equation of a plane`, def: String.raw`\(\vec r = \vec r_0 + s\vec a + t\vec b,\ s, t \in \mathbb{R}\), where \(\vec r_0\) is the position vector of a known point on the plane and \(\vec a, \vec b\) are non-collinear direction vectors for the plane.`, lesson: "3.6", tier: "essential" },
  { term: String.raw`Parametric equations of a plane`, def: String.raw`\(x = x_0 + sa_1 + tb_1,\ y = y_0 + sa_2 + tb_2,\ z = z_0 + sa_3 + tb_3,\ s, t \in \mathbb{R}\): the vector equation of a plane written one component at a time.`, lesson: "3.6", tier: "essential" },
  { term: String.raw`Direction vectors of a plane`, def: String.raw`Two non-collinear vectors parallel to the plane (\(\vec a, \vec b\) in the notes, \(\vec m_1, \vec m_2\) in the worksheet solutions). Any vector joining two points of the plane lies in it, so they are not unique.`, lesson: "3.6", tier: "essential" },
  { term: String.raw`Determining a plane`, def: String.raw`Information determines a plane when exactly one plane fits it: a point and two non-collinear vectors, three non-collinear points, a line and a point not on it, two intersecting lines, or two distinct parallel lines.`, lesson: "3.6", tier: "likely" }
);
