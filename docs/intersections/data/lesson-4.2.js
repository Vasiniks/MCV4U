/* MCV4U Unit 4 · Lesson 4.2 Intersection of a Line and a Plane */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "4.2", title: "Intersection of a Line and a Plane", stage: "c2",
  summary: String.raw`A line and a plane in R³ can only do three things: hit once, run parallel and miss, or lie inside forever. The test is one substitution: put the line's parametric equations into the plane's Cartesian equation and solve for \(t\). The value of what you get — \(0t=0\), \(0t=\text{non-zero}\), or \(t=\dots\) — tells you which case instantly.`,
  objectives: [
    String.raw`List the three outcomes for line-plane intersection and explain how they map to 0, 1 or ∞ solutions.`,
    String.raw`Substitute \(x(t),y(t),z(t)\) into \(Ax+By+Cz+D=0\) and solve for \(t\) without skipping algebra.`,
    String.raw`Interpret \(0t=0\) as "line lies in plane", \(0t=k\neq0\) as "parallel and distinct", and \(t=t_0\) as one POI.`,
    String.raw`Compute the POI coordinates once \(t_0\) is known.`,
    String.raw`Use \(\vec m\cdot\vec n=0\) check as a fast pre-test.`,
    String.raw`Show algebraically that a line lies in a plane by proving infinite solutions.`
  ],
  html: String.raw`
<h3 data-tier="essential">Three cases</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>What substitution gives</th><th>Meaning</th><th># POI</th></tr></thead>
<tbody>
<tr><td>\(t = t_0\) (a number)</td><td>Line pierces plane once</td><td>1</td></tr>
<tr><td>\(0t = k,\ k\neq 0\) (e.g. \(8=0\))</td><td>Line parallel and distinct — no solution</td><td>0</td></tr>
<tr><td>\(0t=0\) (e.g. \(0=0\))</td><td>Line lies in plane — every t works</td><td>∞ (the line itself)</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Fast check: dot product</h3>
<p>If \(\vec m\) is direction of line and \(\vec n=(A,B,C)\) normal of plane:</p>
<div class="callout key"><p class="callout-title">Pre-test</p>
<p>\(\vec m\cdot\vec n=0\) → line is parallel to plane (so either lies in it or is parallel distinct). <br> \(\vec m\cdot\vec n\neq0\) → line is not parallel, must intersect once.</p>
</div>
<p>This tells you what to expect before you substitute, but it does not tell you whether parallel means distinct or contained — for that you still need the \(t\) test.</p>

<h3 data-tier="essential">Recipe</h3>
<ol class="work">
<li><strong>Write line parametric.</strong> If given vector \(\vec r=(x_0,y_0,z_0)+t(a,b,c)\) then \(x=x_0+at,\ y=y_0+bt,\ z=z_0+ct\). If given symmetric \(\frac{x-x_0}{a}=\frac{y-y_0}{b}=\frac{z-z_0}{c}\), set it equal to \(t\) first.</li>
<li><strong>Substitute into plane</strong> \(Ax+By+Cz+D=0\): \(A(x_0+at)+B(y_0+bt)+C(z_0+ct)+D=0\).</li>
<li><strong>Collect \(t\) terms:</strong> \((Aa+Bb+Cc)t + (Ax_0+By_0+Cz_0+D)=0\). Note \(Aa+Bb+Cc=\vec m\cdot\vec n\).</li>
<li><strong>Solve for \(t\).</strong>
<ul>
<li>If coefficient of \(t\neq0\): \(t=-(Ax_0+By_0+Cz_0+D)/(Aa+Bb+Cc)\). Compute POI by putting \(t\) back into line.</li>
<li>If coefficient of \(t=0\) and constant \(=0\): \(0=0\) → line in plane.</li>
<li>If coefficient of \(t=0\) and constant \(\neq0\): contradiction → parallel distinct.</li>
</ul>
</li>
<li><strong>Write conclusion</strong> with POI coordinates or classification.</li>
</ol>

<h3 data-tier="essential">Example 1 — one POI (from blank notes)</h3>
<p>Line \(\vec r=(2,3,1)+t(2,1,5)\) actually \((1,3,2)\)? Use sheet example: \(\vec r=(2,-? )\). The blank-notes example: \(\vec r=(2,3,? )\) and plane \(4x-3y+2z-12=0\). Let's use quest example:</p>
<p><strong>Best Quest #4:</strong> Line \(x=1+3t,\ y=2-t,\ z=-1+2t\) and plane \(2x+3y-z-11=0\).</p>
<div class="eq">\[ 2(1+3t)+3(2-t)-(-1+2t)-11=0 \Rightarrow (2+6t)+(6-3t)+(1-2t)-11=0\Rightarrow t-2=0\Rightarrow t=2 \]</div>
<p>POI: \(x=1+6=7,\ y=2-2=0,\ z=-1+4=3\) → \(P(7,0,3)\).</p>

<h3 data-tier="essential">Example 2 — parallel distinct (Best Quest #5)</h3>
<p>Line \((3,1,-2)+t(2,-1,1)\), plane \(x+3y+z+4=0\). Substitute: \((3+2t)+3(1-t)+(-2+t)+4=0\Rightarrow (2t-3t+t)+(3+3-2+4)=0\Rightarrow0t+8=0\) → no solution → parallel distinct.</p>

<h3 data-tier="essential">Example 3 — lies in plane (Best Quest #6)</h3>
<p>Line \((1,2,-1)+t(1,1,5)\), plane \(2x+3y-z-9=0\). Sub: \(2(1+t)+3(2+t)-(-1+5t)-9=0\Rightarrow(2t+3t-5t)+(2+6+1-9)=0\Rightarrow0=0\) → true for all \(t\) → line lies in plane.</p>
<p>Proof phrase to write: "True for all \(t\in\mathbb{R}\), so every point of the line satisfies the plane. The line lies completely within the plane."</p>

<h3 data-tier="likely">Extension — symmetric line meets plane</h3>
<p>Example from blank notes Ex3: \(x=..., y=2, z=3x+2\)? General approach same: write \(\frac{x-x_0}{a}=\frac{y-y_0}{b}=\frac{z-z_0}{c}=t\) to get parametric, then same substitution. If the line is given as \(y=2,\ z=3x+...\) etc, you can also substitute directly.</p>

<h3 data-tier="likely">Finding k so line lies in plane (Best Quest 19a)</h3>
<p>Line \(L:\frac{x-k}{2}=\frac{y+3}{1}=\frac{z-1}{3}\), plane \(2x-y-z-5=0\). Direction \((2,1,3)\), normal \((2,-1,-1)\). Dot \(2·2+1·(-1)+3·(-1)=0\) → parallel (good). Need point \(P_0(k,-3,1)\) in plane: \(2k-(-3)-1-5=0\Rightarrow2k-3=0\Rightarrow k=3/2\). Verification: show \(d·n=0\) and point works.</p>
<div class="callout teacher"><p class="callout-title">Why this is an extension</p><p>Quest stretches line-plane from "does it lie in plane?" to "choose k so that it does". First condition is dot=0 (direction parallel to plane), second is point satisfies plane. Both needed.</p></div>
`
});

window.QA.push(
{ id:"4.2-q1", lesson:"4.2", type:"worksheet", title:"Worksheet 4.2 — POI", prompt: String.raw`Find POI of \(\vec r=(2,3,1)+t(2,1,-1)\)? Actually sheet Ex1: \(\vec r=(2,3,? )\) with plane \(4x-3y+2z-12=0\). Use \(\vec r=(2,3,1)+t(2,1,5)\) as example.`, solution: String.raw`Write \(x=2+2t,\ y=3+t,\ z=1+5t\). Into plane: \(4(2+2t)-3(3+t)+2(1+5t)-12=0\Rightarrow 8+8t-9-3t+2+10t-12=0\Rightarrow15t-11=0\Rightarrow t=11/15\). POI \((2+22/15,3+11/15,1+55/15) = (52/15,56/15,70/15)\). (Use your sheet numbers; method identical).` },
{ id:"4.2-q2", lesson:"4.2", type:"worksheet", title:"Worksheet 4.2 — parallel distinct", prompt: String.raw`\(\vec r=(3,1,-2)+t(2,-1,1)\), plane \(x+3y+z+4=0\).`, solution: String.raw`\(x=3+2t,y=1-t,z=-2+t\). Plane: \((3+2t)+3(1-t)+(-2+t)+4=0\Rightarrow8=0\) false → parallel distinct.` },
{ id:"4.2-q3", lesson:"4.2", type:"worksheet", title:"Worksheet 4.2 — line in plane proof", prompt: String.raw`Show \(\vec r=(1,2,-1)+t(1,1,5)\) lies in \(2x+3y-z-9=0\).`, solution: String.raw`\(2(1+t)+3(2+t)-(-1+5t)-9=0\Rightarrow(2t+3t-5t)+(2+6+1-9)=0\Rightarrow0=0\) true ∀t → lies in plane.` }
);

window.QUIZ.push(
{ id:"q-4.2-1", lesson:"4.2", tier:"essential", prompt: String.raw`Line direction (2,−1,1), plane normal (1,3,1). Dot =0 means?`, choices:["Line must intersect plane","Line parallel to plane (could be in it or distinct)","Line perpendicular to plane","Not enough info"], answer:1, explain: String.raw`m·n=0 → m ⟂ n → line ∥ plane or inside it. Need point test.` },
{ id:"q-4.2-2", lesson:"4.2", tier:"essential", prompt: String.raw`You substituted line into plane and got 0t+8=0. Conclusion?`, choices:["POI at t=8","Line lies in plane","Parallel and distinct, no POI","Triangular prism"], answer:2, explain: String.raw`0t=non-zero → contradiction → no solution → parallel distinct.` },
{ id:"q-4.2-3", lesson:"4.2", tier:"essential", prompt: String.raw`You got 0=0 after substitution. Means?`, choices:["No intersection","One POI","Line lies in plane (∞ solutions)","Skew"], answer:2, explain: String.raw`0=0 true for all t → every point of line in plane.` },
{ id:"q-4.2-4", lesson:"4.2", tier:"likely", prompt: String.raw`Find k so that line (k,−3,1)+t(2,1,3) lies in plane 2x−y−z−5=0.`, choices:["k=3/2","k=0","k=2","No such k"], answer:0, explain: String.raw`d·n=0 already, need point in plane: 2k+3−1−5=0 → k=3/2.` },
{ id:"q-4.2-5", lesson:"4.2", tier:"essential", prompt: String.raw`First step to intersect line and plane is:`, choices:["Cross normals","Write line in parametric form and sub into plane","Set normals equal","Solve 2×2 system"], answer:1, explain: String.raw`Parametric → Cartesian substitution.` }
);

window.EXT.push(
{ id:"ext-4.2-1", lesson:"4.2", title:"Line perpendicular to plane through point → POI", prompt: String.raw`Plane \(2x-3y+z+1=0\) and point Q(1,5,−2). Find POI of plane with line through Q perpendicular to plane (Best Quest 13).`, solution: String.raw`Perp line direction = normal (2,−3,1). Line: \(x=1+2t,\ y=5-3t,\ z=-2+t\). Into plane: \(2(1+2t)-3(5-3t)+(-2+t)+1=0\Rightarrow2+4t-15+9t-2+t+1=0\Rightarrow14t-14=0\Rightarrow t=1\). POI (3,2,−1).` },
{ id:"ext-4.2-2", lesson:"4.2", title:"Where line meets coordinate plane", prompt: String.raw`\(\vec r=(4,6,-3)+t(2,3,-1)\) hits xz-plane (y=0) where? (Best Quest 14b)`, solution: String.raw`Set y=0: 6+3t=0→t=−2. x=4+2(−2)=0, z=−3+(−1)(−2)=−1 → (0,0,−1).` }
);

window.GLOSSARY.push(
{ term:"Line lies in plane", def: String.raw`Every point of the line satisfies the plane equation. After substitution you get \(0=0\). Infinitely many solutions — the intersection is the line itself.` },
{ term:"Foot of perpendicular from point to line", def: String.raw`Closest point N on line L to external point Q. General point N(t) on L, vector QN dot direction =0 to solve for t. See type 12 / Best Quest 18.` }
);
