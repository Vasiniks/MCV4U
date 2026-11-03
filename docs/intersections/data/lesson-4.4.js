/* MCV4U Unit 4 · Lesson 4.4 Solving Systems Using Matrices */
window.LESSONS = window.LESSONS || [];
window.QA = window.QA || [];
window.QUIZ = window.QUIZ || [];
window.EXT = window.EXT || [];
window.EXTRA = window.EXTRA || [];
window.GLOSSARY = window.GLOSSARY || [];

window.LESSONS.push({
  id: "4.4", title: "Solving Systems Using Matrices", stage: "c4",
  summary: String.raw`Write each plane \(Ax+By+Cz=D\) as a row \([A\ B\ C\ |\ D]\) in an augmented matrix. Row operations are the same as equation operations: swap rows, multiply a row by non-zero scalar, replace a row by a sum. Put matrix into row-echelon or reduced row-echelon form, read solutions: unique triple, free variable → line, row \([0\ 0\ 0\ |\ k\neq0]\) → no solution.`,
  objectives: [
    String.raw`Convert a 3×3 system to augmented matrix form correctly including signs.`,
    String.raw`List the three elementary row operations and map each to the Lesson 4.3 allowed moves.`,
    String.raw`Perform Gaussian elimination to Row-Echelon Form (REF) and back-substitution, and to Reduced Row-Echelon Form (RREF).`,
    String.raw`Read off unique point, line (with parameter), plane (two free vars), or inconsistency from RREF.`,
    String.raw`Interpret RREF rows like \([1\ 0\ 0\ |\ a]\) as \(x=a\) and free variables as parameters.`,
    String.raw`Connect RREF \([0\ 0\ 0\ |\ 0]\) rows to coincident planes and \([0\ 0\ 0\ |\ k]\) to parallel distinct.`
  ],
  html: String.raw`
<h3 data-tier="essential">From equations to matrix</h3>
<p>System \(Ax+By+Cz=D,\ Ex+Fy+Gz=H,\ Ix+Jy+Kz=L\) becomes</p>
<div class="eq">\[ \left[\begin{array}{ccc|c} A&B&C&D\\E&F&G&H\\I&J&K&L \end{array}\right] \]</div>
<p>Each row = one equation, each column = one variable, last column = constants. Example: \(x-3y+4z=-5\) is row \([1\ -3\ 4\ |\ -5]\). This answers worksheet fill-in Q12.</p>

<h3 data-tier="essential">Three row operations (from blank notes 4.4)</h3>
<ol>
<li><strong>Swap</strong> two rows: \(R_i\leftrightarrow R_j\).</li>
<li><strong>Multiply</strong> a row by non-zero scalar: \(kR_i\).</li>
<li><strong>Replace</strong> a row by sum/difference with another: \(R_i\pm kR_j\).</li>
</ol>
<p>Exactly the same as Lesson 4.3, just written with rows.</p>

<h3 data-tier="essential">Row-Echelon Form (REF) vs Reduced (RREF)</h3>
<div class="table-wrap"><table class="data">
<thead><tr><th>Form</th><th>What it looks like</th><th>Use</th></tr></thead>
<tbody>
<tr><td>REF</td><td>Each subsequent row starts further right, like staircase; zeros below pivots</td><td>Solve by back-substitution</td></tr>
<tr><td>RREF</td><td>Pivots are 1 and zeros above and below pivots; each pivot is only non-zero in its column</td><td>Read solution directly; what Colosimo RREF boxes show</td></tr>
</tbody></table></div>

<h3 data-tier="essential">Recipe to RREF</h3>
<ol class="work">
<li>Write augmented matrix.</li>
<li>Get 1 in top-left (pivot) by swapping or dividing.</li>
<li>Zero out entries below pivot (and above for RREF) using \(R_2\rightarrow R_2-kR_1\).</li>
<li>Move to next row, next column; repeat to create staircase of leading 1s.</li>
<li>For RREF, also zero above each pivot.</li>
<li>Read: each pivot column → that variable expressed; non-pivot → free parameter; row \([0\ 0\ 0\ |\ k\neq0]\) → inconsistent; \([0\ 0\ 0\ |\ 0]\) → redundant.</li>
</ol>

<h3 data-tier="essential">Examples</h3>
<h4>Unique solution</h4>
<p>\(\begin{bmatrix}1&1&1&5\\2&-1&1&2\\1&2&-1&3\end{bmatrix}\xrightarrow{RREF}\begin{bmatrix}1&0&0&1\\0&1&0&2\\0&0&1&2\end{bmatrix}\). Solution \(P(1,2,2)\). This is the matrix form of Lesson 4.3 Ex1 and Unit Review Q13 style \([1\ 0\ 0\ |\ 3.5;\ 0\ 1\ 0\ |\ 2;\ 0\ 0\ 1\ |\ -1]\) → \((3.5,2,-1)\).</p>

<h4>No solution — parallel distinct</h4>
<p>If you get a row \([0\ 0\ 0\ |\ 2]\) meaning \(0=2\). Example system \(x+y+z=3,\ 2x+2y+2z=10\) gives second row twice first but RHS 10 vs 6 → after elimination \([0\ 0\ 0\ |\ 2]\).</p>

<h4>Infinite — line</h4>
<p>RREF \(\begin{bmatrix}1&0&1&3\\0&1&-1&2\\0&0&0&0\end{bmatrix}\) means \(x+z=3,\ y-z=2\). Let \(z=t\) → \(x=3-t,\ y=2+t\). Line \(\vec r=(3,2,0)+t(-1,1,1)\). If two rows zero, free two vars → plane.</p>

<div class="callout key"><p class="callout-title">Quick read table</p>
<table class="data"><tbody>
<tr><td>RREF \([1\ 0\ 0\ |\ a;\ 0\ 1\ 0\ |\ b;\ 0\ 0\ 1\ |\ c]\)</td><td>Unique point \((a,b,c)\)</td></tr>
<tr><td>One zero row \([0\ 0\ 0\ |\ 0]\) + two pivots</td><td>Line (one free)</td></tr>
<tr><td>Two zero rows + one pivot</td><td>Plane (two free) — rare in this unit but possible</td></tr>
<tr><td>Row \([0\ 0\ 0\ |\ k\neq0]\)</td><td>No solution</td></tr>
</tbody></table>
</div>

<h3 data-tier="likely">Link to geometry of three planes</h3>
<p>Matrix tells you how planes meet. Unique point → three planes hit at one point. One zero row (∞)→ line (or plane if two zero rows). Contradiction row → no common point; need to inspect normals to name which sub-case (two parallel, triangular prism, etc). That inspection is Lesson 4.6.</p>

<h3 data-tier="extra">Why teach no-matrices and matrices?</h3>
<p>No-matrices (Lesson 4.3) forces you to understand elimination; matrices (4.4) is faster and is what RREF questions in Unit Review Q13 expect you to read. On "Solving systems using matrices" worksheets you must show row ops. On "Solving systems" without that phrase you must show equation ops — write "replace Eq2 by Eq2−2Eq1" not "R2→R2−2R1".</p>
`
});

window.QA.push(
{ id:"4.4-q1", lesson:"4.4", type:"worksheet", title:"Worksheet 4.4 — matrix form", prompt: String.raw`Write \(\begin{cases}x+y+z=5\\2x-y+z=2\\x+2y-z=3\end{cases}\) in augmented matrix and solve to RREF.`, solution: String.raw`Matrix [[1 1 1 5],[2 -1 1 2],[1 2 -1 3]]. R2→R2-2R1, R3→R3-R1: [[1 1 1 5],[0 -3 -1 -8],[0 1 -2 -2]]. R2↔R3 convenient, continue elimination → RREF [[1 0 0 1],[0 1 0 2],[0 0 1 2]] → (1,2,2).` },
{ id:"4.4-q2", lesson:"4.4", type:"worksheet", title:"Worksheet 4.4 — RREF reading", prompt: String.raw`RREF \(\begin{bmatrix}1&0&0&3.5\\0&1&0&2\\0&0&1&-1\end{bmatrix}\). Solution? (Review Q13)`, solution: String.raw`[1 0 0 |3.5] means x=3.5, y=2, z=-1. So (3.5,2,-1).` }
);

window.QUIZ.push(
{ id:"q-4.4-1", lesson:"4.4", tier:"essential", prompt: String.raw`Row for plane x−3y+4z=−5 is?`, choices:["[1 −3 4 | −5]","[1 3 4 | 5]","[−1 3 −4 | 5]","[1 −3 4 5]"], answer:0, explain: String.raw`Keep signs, vertical bar separates constants.` },
{ id:"q-4.4-2", lesson:"4.4", tier:"essential", prompt: String.raw`RREF row [0 0 0 | 2] means?`, choices:["x=2","Line","No solution (inconsistent)","Plane"], answer:2, explain: String.raw`0=2 contradiction → no solution.` },
{ id:"q-4.4-3", lesson:"4.4", tier:"essential", prompt: String.raw`RREF [[1 0 1 3],[0 1 -1 2],[0 0 0 0]] →?`, choices:["Point","Line (one free variable)","Plane","No solution"], answer:1, explain: String.raw`Two pivots, one zero row → one free variable → line.` },
{ id:"q-4.4-4", lesson:"4.4", tier:"essential", prompt: String.raw`Allowed row op:`, choices:["Multiply a row by 0","R2 → R2 + 2R1","Delete a column","Swap x and y columns"], answer:1, explain: String.raw`Non-zero mult or adding multiple of another row allowed.` }
);

window.GLOSSARY.push(
{ term:"Augmented matrix", def: String.raw`Matrix \([A\ |\ b]\) formed by coefficient matrix A and constant column b. Row \([A\ B\ C\ |\ D]\) encodes plane \(Ax+By+Cz=D\).` },
{ term:"RREF", def: String.raw`Reduced Row-Echelon Form: each pivot is 1 and zeros above/below. Solution can be read directly. \([0\ 0\ 0\ |\ k\neq0]\) signals no solution.` }
);
