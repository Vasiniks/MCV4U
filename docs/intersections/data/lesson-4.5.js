/* MCV4U Unit 4 · Lesson 4.5 Intersection of Two Planes */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "4.5", title: "Intersection of Two Planes", stage: "c5",
  summary: String.raw`Two distinct planes in R³ are either parallel or meet in a line. Non-parallel normals guarantee a line; parallel normals mean you must compare constants to decide coincident vs parallel distinct. When they do meet, direction is \(\vec n_1\times\vec n_2\) and a point is found by fixing one coordinate to 0 and solving the remaining 2×2. Angle follows from normals.`,
  objectives: [
    String.raw`Classify two planes as coincident, parallel distinct, or intersecting in a line using normals and constant comparison.`,
    String.raw`Compute line of intersection: \(\vec d=\vec n_1\times\vec n_2\) and find \(P_0\) by setting x/y/z=0.`,
    String.raw`Explain the ONE-change challenge: what to change to make a given intersecting system coincident or parallel.`,
    String.raw`Calculate acute angle between planes via \(\cos\theta=|\vec n_1\cdot\vec n_2|/(|\vec n_1||\vec n_2|)\).`,
    String.raw`Write line of intersection in vector, parametric and symmetric forms.`
  ],
  html: String.raw`
<h3 data-tier="essential">Three cases</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Normals \(\vec n_1,\vec n_2\)</th><th>Constants check</th><th>Result</th><th># solutions</th></tr></thead>
<tbody>
<tr><td>parallel (\(\vec n_1=k\vec n_2\))</td><td>whole equations proportional: \(D_1=kD_2\)</td><td>Coincident (same plane)</td><td>∞ (plane)</td></tr>
<tr><td>parallel</td><td>left sides proportional but \(D_1\neq kD_2\)</td><td>Parallel distinct</td><td>0</td></tr>
<tr><td>not parallel</td><td>—</td><td>Line of intersection</td><td>∞ but line</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Finding the line when they intersect</h3>
<ol class="work">
<li><strong>Direction:</strong> \(\vec d=\vec n_1\times\vec n_2\). Any non-zero multiple works; scale to single digits.</li>
<li><strong>Point \(P_0\):</strong> Set one coordinate to 0 (choose the one that makes 2×2 easiest). Solve the resulting two equations for the other two coordinates. If that 2×2 is singular, try a different coordinate =0.</li>
<li><strong>Write</strong> \(\vec r=P_0+t\vec d,\ t\in\mathbb R\). Also give parametric \(x=...,y=...,z=...\) and optionally symmetric.</li>
</ol>

<h3 data-tier="essential">Example 1 — Best Quest 7 style</h3>
<p>\(\pi_1:x+2y-z=3,\ \pi_2:2x-y+3z=1\). Normals \((1,2,-1)\) and \((2,-1,3)\) not parallel → line.</p>
<div class="eq">\[ \vec d=(1,2,-1)\times(2,-1,3)=(5,-5,-5)\sim(1,-1,-1) \]</div>
<p>Set \(z=0\): \(x+2y=3,\ 2x-y=1\) → \(y=2x-1\) into first \(x+2(2x-1)=3\Rightarrow5x=5\Rightarrow x=1,y=1\). So \(P_0(1,1,0)\). Line \(\vec r=(1,1,0)+t(1,-1,-1)\).</p>

<h3 data-tier="essential">Example 2 — sheet blank-notes Ex1</h3>
<p>\(\pi_1:3x+4y+6z=...\) Actually notes Ex1: \(6x+...\) Wait handwritten: Example 1 system: \(3x...\) Let's use generic: \(\pi_1:2x+y+z=5,\ \pi_2:x-2y+2z=4\) (Best Quest 8). Cross \((2,1,1)\times(1,-2,2)=(4,-3,-5)\). Set \(y=0\): \(2x+z=5,\ x+2z=4\Rightarrow x=2,z=1\) → \(P_0(2,0,1)\) line \((2,0,1)+t(4,-3,-5)\).</p>

<h3 data-tier="likely">Challenge from notes: make it coincident vs parallel distinct</h3>
<p>Given intersecting case \(3x-4y...\) Actually Example: \(\pi_1:2x+...\) etc. Question: "What's ONE change to make infinite solutions? Coincident planes? Intersecting planes?" Answer:</p>
<ul>
<li>Coincident: make equations proportional — multiply entire second plane to match first: if \(\pi_1: x+y+z=2,\ \pi_2:2x+2y+2z=4\) would be coincident. So change constant to be proportional.</li>
<li>Parallel distinct with infinite? No, two planes can't be both parallel distinct and infinite. The blank-notes question likely about three planes? But for two planes, change so normals become parallel and check constants.</li>
<li>To keep line but produce ∞ you don't need change — intersecting already has ∞ (line). To make coincident, set \(\vec n_2=k\vec n_1\) and \(D_2=kD_1\).</li>
</ul>

<h3 data-tier="likely">Angle between planes</h3>
<p>Acutely \(\theta\) satisfies \(\cos\theta=\frac{|\vec n_1\cdot\vec n_2|}{|\vec n_1||\vec n_2|}\). This appears in Best Quest 17, Old Quest 21, and is a standard extension. Use absolute in numerator for acute; without absolute you get 0–180.</p>
<p>Example Best Quest 17: \(\pi_1:2x-y+2z-5=0,\ \pi_2:x+2y-2z+1=0\). \(\vec n_1\cdot\vec n_2=2-2-4=-4\) abs 4. \(|\vec n_1|=3,\ |\vec n_2|=3\). \(\cos\theta=4/9\Rightarrow\theta≈64°\).</p>

<h3 data-tier="extra">Symmetric form of line of intersection</h3>
<p>Once you have \(P_0(x_0,y_0,z_0)\) and \(\vec d=(a,b,c)\), symmetric is \(\frac{x-x_0}{a}=\frac{y-y_0}{b}=\frac{z-z_0}{c}\). If a component of \(\vec d\) is 0, that part becomes \(x=x_0\) or similar.</p>

<div class="callout tip"><p class="callout-title">Spotting this type</p><p>"Determine a parametric vector equation for the line of intersection between the two non-parallel planes" → cross product + set one variable to 0. "Determine the angle" → dot of normals. "Coincident, parallel distinct, or intersecting?" → compare normals first.</p></div>
`
});

window.QA.push(
{ id:"4.5-q1", lesson:"4.5", type:"worksheet", title:"Worksheet 4.5 — line", prompt: String.raw`\(\pi_1:x+2y-z=3,\ \pi_2:2x-y+3z=1\). Find line of intersection.`, solution: String.raw`\(\vec n_1=(1,2,-1),\vec n_2=(2,-1,3)\), \(\vec d=(5,-5,-5)\sim(1,-1,-1)\). Set z=0: x+2y=3,2x-y=1→x=1,y=1,P0(1,1,0). Line \(\vec r=(1,1,0)+t(1,-1,-1)\).` },
{ id:"4.5-q2", lesson:"4.5", type:"worksheet", title:"Worksheet 4.5 — second", prompt: String.raw`\(2x+y+z=5,\ x-2y+2z=4\). Line?`, solution: String.raw`\(\vec d=(4,-3,-5)\). y=0 → 2x+z=5,x+2z=4 → x=2,z=1. Line (2,0,1)+t(4,-3,-5).` },
{ id:"4.5-q3", lesson:"4.5", type:"worksheet", title:"Worksheet 4.5 — angle", prompt: String.raw`Angle between \(2x+y+z=5\) and \(x-2y+2z=4\).`, solution: String.raw`\(\vec n_1=(2,1,1),\vec n_2=(1,-2,2), \vec n_1·\vec n_2=2-2+2=2, |n1|=√6, |n2|=3, cosθ=2/(3√6)=√6/9≈0.272, θ≈74°.` }
);

window.QUIZ.push(
{ id:"q-4.5-1", lesson:"4.5", tier:"essential", prompt: String.raw`Normals (1,2,−1) and (2,−1,3) are?`, choices:["Parallel","Not parallel → planes intersect in line","One is zero","Need constants"], answer:1, explain: String.raw`Not scalar multiples → line intersection.` },
{ id:"q-4.5-2", lesson:"4.5", tier:"essential", prompt: String.raw`Direction of line of intersection is:`, choices:["n1 + n2","n1 × n2","n1 · n2","r0"], answer:1, explain: String.raw`Cross product orthogonal to both normals thus parallel to line common to both planes.` },
{ id:"q-4.5-3", lesson:"4.5", tier:"essential", prompt: String.raw`To find a point on line of intersection you:`, choices:["Set one coordinate to 0 and solve 2×2","Set t=0","Cross normals","Pick any point"], answer:0, explain: String.raw`Setting one variable to 0 reduces to solvable 2×2.` },
{ id:"q-4.5-4", lesson:"4.5", tier:"likely", prompt: String.raw`Planes 3x−6y+9z+4=0 and 2x−4y+6z+k=0 are coincident when?`, choices:["k=8/3","k≠8/3","k=0","Never"], answer:0, explain: String.raw`n1=3/2 n2. Multiply π2 by 3/2: 3x−6y+9z+3k/2=0 match → 3k/2=4→k=8/3.` },
{ id:"q-4.5-5", lesson:"4.5", tier:"likely", prompt: String.raw`Cosine of angle between planes uses:`, choices:["m1·m2","n1·n2/(|n1||n2|)","r0·n","|m1×m2|"], answer:1, explain: String.raw`Angle defined by normals.` }
);

window.EXT.push(
{ id:"ext-4.5-1", lesson:"4.5", title:"Change to make coincident", prompt: String.raw`Given intersecting system, what ONE change makes planes coincident?`, solution: String.raw`Make normals parallel (scalar multiple) AND constants same multiple. Eg change second plane to k times first. For line case with 2 planes, you need both A,B,C,D proportional.` }
);

window.GLOSSARY.push(
{ term:"Line of intersection of two planes", def: String.raw`When normals not parallel, planes meet in a line with direction \(\vec n_1\times\vec n_2\). Found by cross product plus solving for a point with one coordinate =0.` },
{ term:"Angle between planes", def: String.raw`Acute angle between normals: \(\cos\theta=|\vec n_1\cdot\vec n_2|/(|\vec n_1||\vec n_2|)\). Same as angle between planes or supplement.` }
);
