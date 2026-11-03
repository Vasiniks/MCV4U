/* MCV4U Unit 4 · Lesson 4.3 Solving Systems of Equations */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "4.3", title: "Solving Systems of Equations", stage: "c3",
  summary: String.raw`Before matrices you solve 3×3 linear systems by elimination. You build an equivalent system with the same solutions but simpler form: replace any equation by a non-zero multiple of itself or by a sum of itself with another. Reduce to two equations in two unknowns, solve, then back-substitute.`,
  objectives: [
    String.raw`Recall substitution vs elimination from R² and why elimination scales to R³.`,
    String.raw`Define equivalent system and the two allowed row-replacements.`,
    String.raw`Eliminate one variable from two pairs to get a 2×2 system, solve for two variables, back-sub to get third.`,
    String.raw`Detect redundancy (0=0 → ∞ solutions) vs contradiction (0=k → no solution) during elimination.`,
    String.raw`Parametrize infinite-solution cases as a line \(\vec r=\vec r_0+t\vec d\).`
  ],
  html: String.raw`
<h3 data-tier="essential">What counts as an allowed move</h3>
<p>From blank notes Lesson 4.3: to keep the same solution set you may replace any equation with:</p>
<ol>
<li>a <strong>non-zero scalar multiple</strong> of itself, e.g. multiply by 2, -1, 1/3.</li>
<li>a <strong>sum of itself and any other equation</strong> (or a multiple of another). Example: replace Eq2 by Eq2 −2·Eq1 to kill x.</li>
</ol>
<p>These are exactly elementary row operations before you write them as a matrix.</p>

<h3 data-tier="essential">Recipe — elimination without matrices</h3>
<ol class="work">
<li><strong>Pick a variable to kill first</strong> (usually x or z, whichever gives small numbers).</li>
<li><strong>Make two new equations without that variable.</strong> Use Eq1 with Eq2 → new Eq4 (y,z only). Use Eq1 with Eq3 → new Eq5 (y,z only). That is now a 2×2 system.</li>
<li><strong>Solve the 2×2.</strong> Eliminate one of y,z to get the other, then back-sub for the second.</li>
<li><strong>Back-substitute into any original equation</strong> to get the third variable.</li>
<li><strong>Check</strong> all three original equations with your triple.</li>
</ol>

<h3 data-tier="essential">Example — unique point (Best Quest 9 style)</h3>
<p>\(\begin{cases} x+y+z=5\\2x-y+z=2\\x+2y-z=3 \end{cases}\)</p>
<div class="eq">\begin{aligned}
\text{(1)}×2 &: 2x+2y+2z=10\\
(4)&=(1)×2-(2): 3y+z=8\\
(5)&=(3)-(1): y-2z=-2 \Rightarrow y=2z-2\\
\text{Into (4)}&: 3(2z-2)+z=8\Rightarrow7z=14\Rightarrow z=2,\ y=2\\
\text{Into (1)}&: x+2+2=5\Rightarrow x=1
\end{aligned}</div>
<p>Unique \(P(1,2,2)\).</p>

<h3 data-tier="likely">Infinite solutions → line</h3>
<p>If elimination makes one equation disappear (\(0=0\)) but the other two are compatible, you have one free variable. Set it = \(t\), express others in terms of t, write as vector line.</p>
<p>Example Best Quest 11: \(x+y+z=4,\ 2x-y+3z=5,\ 3x+4z=9\). Add (1)+(2) → \(3x+4z=9\) which is exactly Eq3. So Eq3 redundant. Let \(z=t\Rightarrow3x=9-4t\Rightarrow x=3-\frac43t\). From (1) \(y=4-x-z=1+\frac13t\). So line \(\vec r=(3,1,0)+s(-4,1,3)\).</p>

<h3 data-tier="likely">No solution — contradiction</h3>
<p>Best Quest 12: \(x+y+z=3,\ 2x+2y+2z=10,\ x-y+2z=4\). First two conflict: divide second by 2 → \(x+y+z=5\) but first says =3 → \(0=2\) → no solution. Geometric: two parallel distinct planes cut by third.</p>

<div class="callout tip"><p class="callout-title">Test tip</p><p>On Colosimo tests "State the complete point P(x,y,z)" means you must give the triple even after solving y,z. Always back-sub and state \(P(\dots)\). If line, write \(\vec r = \vec r_0 + t\vec d,\ t\in\mathbb R\).</p></div>

<h3 data-tier="extra">Why "no matrices" on some sheets?</h3>
<p>The same systems appear in Lesson 4.4 with matrices. The algebraic method shows what the matrix is doing: each row operation is exactly the allowed equation replacement. Learn both, but for "do not use matrices" questions, write elimination sentences, not an augmented matrix.</p>
`
});

window.QA.push(
{ id:"4.3-q1", lesson:"4.3", type:"worksheet", title:"Worksheet 4.3 — unique", prompt: String.raw`\(\begin{cases}x+y+z=5\\2x-y+z=2\\x+2y-z=3\end{cases}\). Solve (no matrices).`, solution: String.raw`2×(1)−(2): 3y+z=8 (4). (3)−(1): y−2z=−2 (5) → y=2z−2. Into (4): 7z=14→z=2,y=2,x=1. P(1,2,2).` },
{ id:"4.3-q2", lesson:"4.3", type:"worksheet", title:"Worksheet 4.3 — second example", prompt: String.raw`\(2x+y-z=4,\ x-2y+2z=-3,\ 3x+2y+z=10\). Solve.`, solution: String.raw`Add (1)+(3): 5x+3y=14 (4). 2×(1)+(2): 5x=5→x=1. Into (4): y=3. (1): 2+3−z=4→z=1. P(1,3,1).` },
{ id:"4.3-q3", lesson:"4.3", type:"worksheet", title:"Worksheet 4.3 — infinite line", prompt: String.raw`\(x+y+z=4,\ 2x-y+3z=5,\ 3x+4z=9\). Show ∞ solutions and parametric line.`, solution: String.raw`(1)+(2)=3x+4z=9 = Eq3 redundant. Let z=t → x=3−4t/3, y=1+t/3. \(\vec r=(3,1,0)+s(-4,1,3)\).` }
);

window.QUIZ.push(
{ id:"q-4.3-1", lesson:"4.3", tier:"essential", prompt: String.raw`Allowed move in elimination:`, choices:["Multiply an equation by 0","Replace an equation by scalar multiple of itself or sum with another","Swap x and y","Delete an equation"], answer:1, explain: String.raw`Two legal replacements; multiplying by 0 destroys info.` },
{ id:"q-4.3-2", lesson:"4.3", tier:"essential", prompt: String.raw`You get 0=2 during elimination. Means?`, choices:["Unique solution","Infinite solutions","No solution (inconsistent)","Need matrices"], answer:2, explain: String.raw`Contradiction → no solution.` },
{ id:"q-4.3-3", lesson:"4.3", tier:"essential", prompt: String.raw`You get 0=0 after eliminating x. Means?`, choices:["No solution","Unique solution","One equation redundant — possibly infinite","Error"], answer:2, explain: String.raw`0=0 → that equation gave no new info. Could be infinite if remaining system compatible.` },
{ id:"q-4.3-4", lesson:"4.3", tier:"likely", prompt: String.raw`Three planes where two equations are multiples with different constants:`, choices:["Line of intersection","Parallel distinct — no solution","Single point","Coincident plane"], answer:1, explain: String.raw`Same left side, different right → parallel distinct contradiction.` }
);

window.GLOSSARY.push(
{ term:"Equivalent system", def: String.raw`A new system obtained by allowed operations (non-zero multiple or sum with another equation) that has exactly the same solution set as the original.` },
{ term:"Consistent vs Inconsistent", def: String.raw`Consistent = at least one solution. Inconsistent = no solution (you derive 0=k with k≠0).` }
);
