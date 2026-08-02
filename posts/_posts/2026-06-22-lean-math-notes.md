---
title: Lean for Mathematics — Notes
date: 2026-06-22
layout: post
sitemap: false
author: Shasha Liao
tag: Lean
header_img: lean-math-notes.svg
---

Personal notes on learning the book [**Mathematics in Lean**](https://leanprover-community.github.io/mathematics_in_lean/). As a mathematician, I find it helpful to map familiar mathematical concepts to their Lean counterparts — this note serves as that concise reference.

---

## Tactics

### Closing a Goal

| Tactic | Description |
| ------ | ----------- |
| `rfl` | Close a goal of the form `a = a` |
| `exact h` | Close the goal with an exact proof term `h` |

### Rewriting

| Tactic | Description |
| ------ | ----------- |
| `rw [h]` | Rewrite the goal using hypothesis or lemma `h` |
| `nth_rw 2 [h]` | Rewrite only the 2nd occurrence of the match |

### Proof Structure

| Tactic | Description |
| ------ | ----------- |
| `apply f` | Apply `f` whose conclusion matches the goal; reduce goal to `f`'s hypotheses |
| `have h : P := ...` | Introduce an intermediate result `h : P` within the current proof |
| `induction n` | Induct on `n`; generates base case and inductive step |
| `calc` | Chain a sequence of equalities or inequalities with intermediate steps |

### Automation

| Tactic | Description |
| ------ | ----------- |
| `ring` | Prove equalities in a commutative (semi)ring by normalization |
| `simp [h]` | Simplify the goal using simp lemmas, optionally including `h` |
| `linarith` | Discharge linear arithmetic goals over ordered fields/rings |
| `norm_num` | Automatically normalize numerical expressions in the goal |

---

## References

- [Mathematics in Lean](https://leanprover-community.github.io/mathematics_in_lean/)
- [Lean 4 documentation](https://docs.lean-lang.org)
- [Mathlib4 docs](https://leanprover-community.github.io/mathlib4_docs/)
- [Lean community Zulip](https://leanprover.zulipchat.com)
