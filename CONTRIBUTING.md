# Contributing

## Commit messages

Commits should read like a short note in a project log: one line, plain language, no labels or essays.

### Rules

1. **One line only** — no body unless something truly cannot fit (rare for this repo).
2. **Start with a capitalized verb** in present tense: *Add*, *Fix*, *Improve*, *Remove*, *Rename*, *Update* (only when the target is clear).
3. **Length** — about four to ten words.
4. **Describe what changed**, not implementation detail (“Add hero section”, not “Add Hero.jsx and CSS”).
5. **No conventional-commit prefixes** — do not use `feat:`, `fix:`, `chore:`, `docs:`, and so on.
6. **Be specific** — avoid vague titles like “changes”, “stuff”, “fixes”, or “updated things”.

### Examples (good)

- Add hero section
- Improve graph layout
- Fix build configuration
- Update README for deployment
- Remove unused styles from App.css
- Tighten spacing in insights section

### Examples (bad)

- `feat: add hero section` (prefix)
- `chore: cleanup` (prefix and vague)
- `fix: stuff` (prefix and vague)
- updated things (no capital, vague)
- changes (not a sentence, vague)
- Added hero section (use present tense: **Add**)
- This commit adds a hero section and also tweaks the CSS for mobile because… (too long; use the first clause only, or split into separate commits)

### Local setup (optional)

Use the repo’s commit template so your editor opens with a short reminder:

```bash
git config commit.template .gitmessage.txt
```

Delete the placeholder line before saving; the final message should be a single line with no prefix.
