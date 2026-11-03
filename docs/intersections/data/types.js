/* MCV4U Unit 4 · Question types playbook — visual, symbol-heavy, minimal reading */
window.TYPES = window.TYPES || [];

window.TYPES_INTRO = String.raw`
<style>
.type-visual { display:grid; grid-template-columns: 88px 1fr; gap:10px; align-items:center; margin:6px 0 10px; }
.type-visual .tv-diag { width:88px; height:64px }
.tv-row { display:flex; gap:8px; flex-wrap:wrap; margin:6px 0 }
.tv-chip { border:1px solid var(--line); border-radius:999px; padding:2px 10px; font-size:13px; background:var(--surface-2) }
.tv-math { font-size:15px }
.flow { font-family:var(--display); font-size:14px; line-height:1.35 }
.flow b { color:var(--ink) }
</style>
<div class="table-wrap"><table class="data">
<thead><tr><th>Cue</th><th>Type</th><th>1st move</th></tr></thead>
<tbody>
<tr><td>\(\vec m_1,\vec m_2\) in R³ + "classify"</td><td><a href="#/types/0">2 lines</a></td><td>∦? → =? → skew / POI</td></tr>
<tr><td>line + \(Ax+By+Cz+D=0\)</td><td><a href="#/types/1">line∩plane</a></td><td>\(x(t)\) → plane = \(0\) → t</td></tr>
<tr><td>3 eqns, "no matrices"</td><td><a href="#/types/2">3×3 algebra</a></td><td>(1)(2)→(4) ; (1)(3)→(5)</td></tr>
<tr><td>\([A\ B\ C|D]\) / RREF</td><td><a href="#/types/3">matrix</a></td><td>pivot / \(0=0\) / \(0=k\)</td></tr>
<tr><td>\(π1,π2\) line? angle?</td><td><a href="#/types/4">2 planes</a></td><td>\(n_1×n_2\) + set 0</td></tr>
<tr><td>\(π1,π2,π3\) point/line/prism?</td><td><a href="#/types/5">3 planes</a></td><td>solve → normals → name</td></tr>
<tr><td>"find k" line in plane / planes ∥</td><td><a href="#/types/6">k</a></td><td>\(d·n=0\) & \(P_0∈π\)</td></tr>
<tr><td>"foot N" / "closest"</td><td><a href="#/types/7">foot</a></td><td>\(Q+tn\) or \(QN·m=0\)</td></tr>
<tr><td>"hits xy/xz/axis"</td><td><a href="#/types/8">coord hit</a></td><td>coord=0 → t</td></tr>
<tr><td>"dist to plane/line"</td><td><a href="#/types/9">distance</a></td><td>\(\frac{|Ax_0+…|}{√…}\) / \(\frac{|P_0Q×m|}{|m|}\)</td></tr>
<tr><td>fill-ins Q1-14</td><td><a href="#/types/10">vocab+ RREF read</a></td><td>\(n=(A,B,C)\) / row = [...]</td></tr>
</tbody></table></div>`;

window.TYPES.push(
{
  id: "t4-two-lines",
  lesson: "4.1",
  tier: "essential",
  title: "2 lines in R³",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><line x1="8" y1="52" x2="80" y2="12" stroke="var(--etc)" stroke-width="2"/><line x1="8" y1="12" x2="80" y2="52" stroke="var(--krebs)" stroke-width="2"/><circle cx="44" cy="32" r="4" fill="var(--ink)"/><text x="52" y="28" font-size="9">POI</text></svg><div><span class="tv-chip">R³</span> <span class="tv-chip">\( \vec r_1=P_{01}+t\vec m_1\)</span> <span class="tv-chip">\( \vec r_2=P_{02}+u\vec m_2\)</span><div class="flow">Cue: “intersecting / <b>coincident</b> / <b>parallel distinct</b> / <b>skew</b>”</div></div></div>`,
  steps: [
    String.raw`<svg width="320" height="58" viewBox="0 0 320 58" style="max-width:100%"><text x="0" y="14" font-size="12" fill="var(--ink)">\(\vec m_1 = k\vec m_2\)? </text><text x="110" y="14" font-size="11">yes → point test</text><text x="110" y="32" font-size="11">\(P_{01}∈L_2\)? yes→∞  no→∥ distinct</text><text x="0" y="50" font-size="11">no → solve (1)(2) for t,u → check (3) :  = → POI , ≠ → skew</text></svg>`,
    String.raw`\( (1)\ x_{01}+a_1t=x_{02}+a_2u\) <br>\( (2)\ y_{01}+b_1t=y_{02}+b_2u\) <br>\( (3)\ z_{01}+c_1t=z_{02}+c_2u\) → 2 to solve, 1 to verify`,
    String.raw`Perp? \(\vec m_1·\vec m_2=0\) ⇒ ⊥ intersect`
  ],
  example: {
    q: String.raw`<div class="tv-row"><span class="tv-chip">Best #2</span><span class="tv-math">\(L_1(2,0,1)+t(1,3,-2)\)</span><span class="tv-math">\(L_2(7,1,-7)+u(-2,1,3)\)</span></div>`,
    a: String.raw`\(\vec m_1∦\vec m_2\). (1) \(t+2u=5\); (2) \(u=3t-1\) ⇒ \(t=1,u=2\). (3) \(1-2=-7+6\) ✓ ⇒ <b>P(3,3,-1)</b>. <br>Best #1 same but (3) 6≠3 ⇒ <b>skew</b>. <br>Best #3 \( (2,-4,6)=-2(-1,2,-3)\) ⇒ ∥, point test fails ⇒ <b>parallel distinct</b>.`
  },
  traps: [
    String.raw`Same letter \(t\) for both → miss (need t and u).`,
    String.raw`Stop after (1)(2) → never detect skew.`
  ],
  seen: String.raw`4.1 Ex1-3 · WS 4.1 · Best 1-3`,
  tryq: String.raw`\(L_1(0,2,5)+t(2,-4,6)\), \(L_2(1,1,1)+u(-1,2,-3)\)?`,
  trya: String.raw`\(m_1=-2m_2\) ∥, (0,2,5) not on L2 ⇒ parallel distinct.`
},
{
  id: "t4-line-plane",
  lesson: "4.2",
  tier: "essential",
  title: "line ∩ plane",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><rect x="8" y="30" width="72" height="4" fill="var(--line)"/><line x1="10" y1="60" x2="50" y2="10" stroke="var(--etc)" stroke-width="2"/><circle cx="42" cy="32" r="4" fill="var(--ink)"/></svg><div><span class="tv-chip">\( \vec r=P_0+t\vec m\)</span> <span class="tv-chip">\(π: Ax+By+Cz+D=0\)</span><div class="flow">Ask: “POI / lies in / ∥ distinct”</div></div></div>`,
  steps: [
    String.raw`\(x=x_0+at,\ y=y_0+bt,\ z=z_0+ct\) → \(π\): \(A(x_0+at)+…+D=0\) <br> \(= (\vec m·\vec n)t + (Ax_0+…+D)=0\)`,
    String.raw`\( \vec m·\vec n≠0\) → \(t=-(…)/( \vec m·\vec n)\) → \(P(x(t),…)\) <br> \(=0\) & const \(=0\) → \(0=0\) ∀t → <b>lies in</b> <br> \(=0\) & const ≠0 → <b>∥ distinct</b>`,
    String.raw`Pre-check: \(\vec m·\vec n=0\) ⇒ ∥ family; ≠0 ⇒ must hit once`
  ],
  example: {
    q: String.raw`<span class="tv-chip">Best #4,5,6 one sheet</span> \(x=1+3t,y=2-t,z=-1+2t\), \(π:2x+3y-z-11=0\)`,
    a: String.raw`\(2(1+3t)+3(2-t)-(-1+2t)-11=t-2=0\) → t=2 → <b>P(7,0,3)</b>. <br>(3,1,-2)+t(2,-1,1) vs x+3y+z+4=0 → \(0t+8=0\) → <b>∥ distinct</b>. <br>(1,2,-1)+t(1,1,5) vs 2x+3y-z-9 → \(0=0\) ∀t → <b>lies in</b>.`
  },
  traps: [
    String.raw`D sign.`,
    String.raw`Prove lies-in with ∀t, not 2 points.`
  ],
  seen: String.raw`4.2 Ex1-3 · WS 4.2 · Best 4-6`,
  tryq: String.raw`Line hits \(y=0\) (xz)?`,
  trya: String.raw`Set y(t)=0 → t`
},
{
  id: "t4-systems",
  lesson: "4.3",
  tier: "essential",
  title: "3×3 — no matrices",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><text x="2" y="16" font-size="10">(1) x+y+z=5</text><text x="2" y="30" font-size="10">(2) 2x-y+z=2</text><text x="2" y="44" font-size="10">(3) x+2y-z=3</text><text x="2" y="58" font-size="9" fill="var(--ink-2)">→ (4)(5) → P</text></svg><div><span class="tv-chip">elimination</span> Cue: “do not use matrices”, “P(x,y,z)”</div></div>`,
  steps: [
    String.raw`(1)(2)→ (4) y,z ; (1)(3)→ (5) y,z → solve 2×2 → back-sub`,
    String.raw`\(0=k≠0\) → no sol ; \(0=0\) → free var = t → line \(\vec r=r_0+t d\)`,
    String.raw`Write: “2×(1): …” not “R2→…” (teacher checks wording)`
  ],
  example: {
    q: String.raw`<span class="tv-chip">Best #9 & #11</span> (9) point (11) line`,
    a: String.raw`(9): 2(1)-(2): \(3y+z=8\)(4); (3)-(1): \(y-2z=-2\)(5) →z=2,y=2,x=1 → <b>P(1,2,2)</b>. <br>(11): (1)+(2)=3x+4z=9=(3) redundant → let z=t→x=3-4t/3,y=1+t/3 → <b>r=(3,1,0)+s(-4,1,3)</b>.`
  },
  traps: [
    String.raw`Sign flip on subtract.`,
    String.raw`∞ without param line = half marks.`
  ],
  seen: String.raw`4.3 Ex · WS 4.3 · Best 9-11`,
  tryq: String.raw`2x+y-z=4, x-2y+2z=-3, 3x+2y+z=10`,
  trya: String.raw`P(1,3,1)`
},
{
  id: "t4-matrices",
  lesson: "4.4",
  tier: "essential",
  title: "matrices — [ | ] / REF / RREF",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><rect x="6" y="8" width="76" height="48" fill="none" stroke="var(--line)"/><line x1="58" y1="8" x2="58" y2="56" stroke="var(--line)" stroke-dasharray="3 3"/><text x="10" y="24" font-size="9">1 -3 4 |-5</text><text x="10" y="40" font-size="8">0 1 -2 |-2 (REF)</text><text x="10" y="52" font-size="8">pivots → read</text></svg><div><span class="tv-chip">[A B C|D]</span> Q12 row entry, Q13 RREF → point</div></div>`,
  steps: [
    String.raw`Row = plane: \(x-3y+4z=-5\) → \([1\ -3\ 4\ |\ -5]\)`,
    String.raw`Ops: \(R_i↔R_j\), \(kR_i\), \(R_i±kR_j\) → REF staircase; RREF zero above/below.`,
    String.raw`Read: \([I|a,b,c]\)→point; \([0\0\0|k≠0]\)→no; \([0\0\0|0]\)→redundant→line (1 free) / plane (2 free)`
  ],
  example: {
    q: String.raw`RREF \(\begin{bmatrix}1&0&0&3.5\\0&1&0&2\\0&0&1&-1\end{bmatrix}\)? Matrix for (1,2,2) system?`,
    a: String.raw`→ (3.5,2,-1) (Q13). <br>[[1 1 1 5],[2 -1 1 2],[1 2 -1 3]]→ RREF [[1 0 0 1],[0 1 0 2],[0 0 1 2]]→(1,2,2). Row [0 0 0|0]=coincident signal, [0 0 0|k]=∥ distinct.`
  },
  traps: [String.raw`Bar | separates constants.`, String.raw`Swap before ÷0 pivot.`],
  seen: String.raw`4.4 · WS 4.4 · Review Q12-13`,
  tryq: String.raw`RREF [[1 0 1 3],[0 1 -1 2],[0 0 0 0]]?`,
  trya: String.raw`1 free: z=t → (3-t,2+t,t) → line.`
},
{
  id: "t4-two-planes",
  lesson: "4.5",
  tier: "essential",
  title: "2 planes → line + ∠",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><line x1="8" y1="48" x2="80" y2="16" stroke="var(--line)" stroke-width="3"/><line x1="8" y1="16" x2="80" y2="48" stroke="var(--line)" stroke-width="3"/><line x1="10" y1="32" x2="78" y2="32" stroke="var(--ink)" stroke-width="2"/></svg><div><span class="tv-chip">\(d=n_1×n_2\)</span> <span class="tv-chip">\(cosθ=|n_1·n_2|/|n_1||n_2|\)</span></div></div>`,
  steps: [
    String.raw`∥? \(n_1=k n_2\)? yes→check D: kD₂=D₁? yes=coincident ∞ plane / no=∥ distinct 0. no→line.`,
    String.raw`\(d=n_1×n_2\) simplify. Point: set 1 var=0 solve 2×2; if det=0 try other var=0.`,
    String.raw`Line: \(r=P_0+td\). ∠: \(cosθ=|n_1·n_2|/(|n_1||n_2|)\) (abs=acute).`
  ],
  example: {
    q: String.raw`Best #7 line + #17 angle`,
    a: String.raw`#7: n1(1,2,-1)×n2(2,-1,3)=(5,-5,-5)∼(1,-1,-1); z=0→x+2y=3,2x-y=1→(1,1,0)→r=(1,1,0)+t(1,-1,-1). <br>#17: (2,-1,2)·(1,2,-2)=-4→|4|/9 →θ≈64°.`
  },
  traps: [String.raw`z=0 gives dep eq → try x=0.`, String.raw`Abs for acute angle.`],
  seen: String.raw`4.5 Ex1-3 · WS 4.5 · Best 7-8,17`,
  tryq: String.raw`2x+y+z=5, x-2y+2z=4 →?`,
  trya: String.raw`(2,0,1)+t(4,-3,-5); θ: cos=2/(3√6)≈74°`
},
{
  id: "t4-three-planes",
  lesson: "4.6",
  tier: "essential",
  title: "3 planes — all 7 configs",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><circle cx="22" cy="18" r="7" fill="none" stroke="var(--etc)"/><circle cx="44" cy="32" r="7" fill="none" stroke="var(--etc)"/><circle cx="66" cy="18" r="7" fill="none" stroke="var(--etc)"/><text x="18" y="55" font-size="8">· / — / Δ-prism</text></svg><div><span class="tv-chip">point/line/plane/0</span> <span class="tv-chip">Δ prism = no n∥ but 0=k</span></div></div>`,
  steps: [
    String.raw`<b>Solve:</b> 3 pivots→point; 1×[0 0 0|0]→line; 2×→plane; [0 0 0|k≠0]→no sol`,
    String.raw`<b>Name no-sol:</b> <br>2 n∥ + 1 ∦ → “2 ∥ distinct cut by 3rd” <br>3 n∥ → “3 ∥ distinct” or “2 coin +1 ∥” <br>0 n∥ but 0=k → “Δ prism” (prism, 3 pairwise lines ∥)`,
    String.raw`Line case: if coin pair, \(d=n_{coin}×n_3\), point set var=0`
  ],
  example: {
    q: String.raw`Best #9 point, #11 line redun, #15 coin+3rd, #12 no`,
    a: String.raw`(9) P(1,2,2). <br>(11) (1)+(2)=(3) redundant → r=(3,1,0)+s(-4,1,3). <br>(15) π2=2π1 coin, +π3: 2x+y=5 → y=5-2t, z=6-3t → (0,5,6)+t(1,-2,-3). <br>(12) x+y+z=3 vs 5 conflict, n1∥n2 → 2 ∥ cut by 3rd.`
  },
  traps: [String.raw`Just “no solution” no name = lose marks.`, String.raw`∞ without r = half.`],
  seen: String.raw`4.6 diag · WS 4.6 · Review Q6-7 · Best 9-16 · Old 25-26`,
  tryq: String.raw`x+y+z=2, x+y+z=5, 2x-y+z=1`,
  trya: String.raw`2 ∥ distinct cut by 3rd → no sol`
},
{
  id: "t4-k",
  lesson: "4.6",
  tier: "likely",
  title: "k — line in plane / planes ∥ coin",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><text x="6" y="20" font-size="10">d·n=0?</text><text x="6" y="36" font-size="10">P₀∈π? → k</text><text x="6" y="52" font-size="9">n₁=k n₂ & D₁=kD₂?</text></svg><div><span class="tv-chip">\(L:\frac{x-k}{a}=…\)</span> <span class="tv-chip">\(π₂:…+k=0\)</span></div></div>`,
  steps: [
    String.raw`Line in π: (1) \(\vec d·\vec n=0\) (∥), often auto 0. (2) \(P_0(k,…)∈π\): solve. Verify both.`,
    String.raw`Planes: \(n_1=s n_2\). If n has k, ratio=solve s,k. Then \(s·D₂? =D₁\): yes=coin, no=∥ distinct.`,
    String.raw`No s exists ever? Then no line intersection possible (normals always ∥).`
  ],
  example: {
    q: String.raw`19a k, 20 k, Review Q10`,
    a: String.raw`19a: d(2,1,3)·n(2,-1,-1)=0; P₀(k,-3,1):2k+3-1-5=0⇒k=3/2. <br>20: n1=3/2 n2 always ∥; 3k/2=4⇒k=8/3 coin else ∥ dist; no line ever. <br>Q10: ×2→k=2.`
  },
  traps: [String.raw`Dot only ≠ enough (∥ includes distinct).`, String.raw`D sign.`],
  seen: String.raw`Best 19-20 · Review Q10`,
  tryq: String.raw`2x-y+z=3, 4x-2y+2z+k=0 coin?`,
  trya: String.raw`k=6`
},
{
  id: "t4-foot",
  lesson: "4.2",
  tier: "likely",
  title: "foot N / closest",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><line x1="8" y1="50" x2="80" y2="50" stroke="var(--line)"/><circle cx="44" cy="50" r="4" fill="var(--ink)"/><line x1="44" y1="50" x2="30" y2="12" stroke="var(--etc)" stroke-width="2"/><circle cx="30" cy="12" r="3" fill="var(--etc)"/><text x="48" y="18" font-size="8">Q·n</text></svg><div><span class="tv-chip">to plane: Q+tn</span> <span class="tv-chip">to line: QN·m=0</span></div></div>`,
  steps: [
    String.raw`To plane: line \(L: Q+t\vec n\) → plug into π → t → foot = POI`,
    String.raw`To line: \(N(t)=P_0+t\vec m\), \(QN=N-Q\), \(QN·m=0\) → t → N`,
    String.raw`Dist = |QN|`
  ],
  example: {
    q: String.raw`Best 18 & 13`,
    a: String.raw`18: N(1+2t,-1+t,-t), QN(2t-1,t-2,2-t),·(2,1,-1)=0→6t-6=0→t=1→N(3,0,-1). <br>13: Q(1,5,-2), n(2,-3,1), L: x=1+2t…→14t-14=0→(3,2,-1) foot.`
  },
  traps: [String.raw`Direction = normal, not in-plane.`],
  seen: String.raw`Best 13,14a,18 · Old 20`,
  tryq: String.raw`O(0,0,0) → 3x+y-2z-14=0 foot?`,
  trya: String.raw`(3,1,-2)`
},
{
  id: "t4-coord",
  lesson: "4.2",
  tier: "likely",
  title: "coord hit / intercepts",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><text x="4" y="18" font-size="11">xy: z=0</text><text x="4" y="34" font-size="11">xz: y=0</text><text x="4" y="50" font-size="11">yz: x=0</text></svg><div><span class="tv-chip">x=0 / y=0 / z=0 → t</span></div></div>`,
  steps: [
    String.raw`Line → plane xy/xz/yz: set that coord =0 → solve t → other two`,
    String.raw`Plane intercepts: y=0,z=0 → x=-D/A etc.`,
    String.raw`Vector plane vs z=0: set z(s,t)=0 solve t(s) → line in xy`
  ],
  example: {
    q: String.raw`Best 14b, Old 14a, Old 4`,
    a: String.raw`14b: (4,6,-3)+t(2,3,-1), y=0→t=-2→(0,0,-1). <br>14a: 3x-4y+2z=12 → (4,0,0),(0,-3,0),(0,0,6). <br>Old4: -3+2s+t=0→t=3-2s → (-6+5s,5-s,0).`
  },
  traps: [String.raw`xz = y=0 (missing letter =0).`],
  seen: String.raw`Best 14 · Old 4,14`,
  tryq: String.raw`Line x=3t,y=t,z=-2t meets 3x+y-2z=14?`,
  trya: String.raw`Foot (3,1,-2)`
},
{
  id: "t4-dist",
  lesson: "4.6",
  tier: "extra",
  title: "distance",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><text x="2" y="16" font-size="10">\(d=\frac{|Ax₀+…|}{\sqrt{…}}\)</text><text x="2" y="34" font-size="10">\(d=\frac{|P₀Q×m|}{|m|}\)</text><text x="2" y="52" font-size="10">∥ planes: pt on 1 → other</text></svg><div><span class="tv-chip">plane</span> <span class="tv-chip">line R³</span></div></div>`,
  steps: [
    String.raw`Pt-plane: \(|Ax_0+By_0+Cz_0+D|/√(A²+B²+C²)\)`,
    String.raw`∥ planes: pt on one → other`,
    String.raw`Pt-line R³: \(|P_0Q×m|/|m|\); foot → |QN| same`
  ],
  example: {
    q: String.raw`Old 18,19,17`,
    a: String.raw`18: (-2,5,3)→2x-y+2z-11: |14|/3. <br>19: 2x-y+2z-8 vs 4x-2y+4z+5=2x-y+2z+2.5 → dist |10.5|/3=3.5. <br>17: (-1,0,2)→Q(2,-3,1), m(1,2,-2) cross (8,5,9) → √170/3.`
  },
  traps: [String.raw`Make …=0 first.`, String.raw`Check ∥ before plane-plane dist.`],
  seen: String.raw`Old 16-20 · U3 recap`,
  tryq: String.raw`(1,4,-2) to 3x-4y+7=0?`,
  trya: String.raw`6/5`
},
{
  id: "t4-concept",
  lesson: "mix",
  tier: "essential",
  title: "vocab + RREF read",
  spot: String.raw`<div class="type-visual"><svg class="tv-diag" viewBox="0 0 88 64"><text x="2" y="14" font-size="9">n=(A,B,C)</text><text x="2" y="28" font-size="9">[1 -3 4|-5]</text><text x="2" y="42" font-size="8">RREF→(3.5,2,-1)</text><text x="2" y="54" font-size="8">0 rows → names</text></svg><div><span class="tv-chip">Review Q1-14</span> exact phrases</div></div>`,
  steps: [
    String.raw`n=(A,B,C); ∥ ⇔ scalar×; ∦→line; 1 sol line-plane; ∞ “line itself”`,
    String.raw`3 n ∝ +no sol → “2 coin+3rd ∥ / 3 ∥”; 0 n∝ +no sol → “Δ prism”`,
    String.raw`Line∥ plane → “parallel distinct”; L⊥π → ∥ n → \(m=n\)`,
    String.raw`Coin: ×2→k: Q10 k=2; Row \(x-3y+4z-5\)→[1 -3 4|-5]; RREF (3.5,2,-1); 3D non-∩ → “∥ distinct or skew”`
  ],
  example: {
    q: String.raw`Q10,12,13 from sheet`,
    a: String.raw`Q10 ×2→k=2. Q12 [1 -3 4|-5]. Q13 RREF→(3.5,2,-1). Q6 two answers list both; Q7 Δ prism.`
  },
  traps: [String.raw`Exact phrasing required.`],
  seen: String.raw`A Review Sheet Q1-14`,
  tryq: String.raw`[0 0 0|5] meaning?`,
  trya: String.raw`No sol: 2 planes→∥ distinct; 3→needs name`
}
);
