# MCV4U

Grade 12 Calculus & Vectors. Units, handouts, solved worksheets, quizzes, a 3D lab.

**Study hub:** https://vasiniks.github.io/MCV4U/

## Units

- **Unit 3 — Lines & Planes** (`unit-3-lines-and-planes/` source files, guide at `docs/lines-planes/`): vector, parametric, symmetric and Cartesian equations of a line in R², lines in R³, minimum distance from a point to a line, linear combinations and coplanar vectors, vector and Cartesian equations of a plane, unit review summary sheet, review questions, quest review package.
- Future units go in `unit-N-name/` folders with the same layout (source files as exported from class), plus a matching `docs/<unit>/` guide linked from the hub.

## Study site

Same look and engine as the SBI4U guides: hub at `docs/index.html`, one folder per unit (`docs/lines-planes/`), shared engine and styles in `docs/assets/`. Each unit guide has:

- **Lessons**: every lesson from the notes, worked through in full, with three depth levels (essential / likely / extra).
- **Question types playbook**: every kind of question in the unit, with how to spot it, the recipe, a worked example and the traps.
- **Worksheets & solutions**: every worksheet, unit review and quest question, solved step by step with the plan written out first.
- **Practice quiz**, **Apply & extend** problems, **Cram mode**, **Glossary**, **Beyond the notes**.
- **Lines & planes lab** (`docs/lines-planes/js/lab.js`): type a line or plane, see it in 2D/3D and read every equation form.

Content lives in `docs/lines-planes/data/*.js` (one file per lesson, plus `review.js` and `types.js`); math is TeX rendered with KaTeX. Deploys via GitHub Pages from `main` → `/docs`.

Run locally:

```bash
python3 -m http.server 8000 --directory docs
# hub:          http://127.0.0.1:8000/
# lines-planes: http://127.0.0.1:8000/lines-planes/
```
