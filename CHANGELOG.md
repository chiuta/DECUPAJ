# Changelog

## 15 — 2026-11-15

- Removed: the word “ASFAN”. The default subtitle is now just “Podcast”, and the sentence that named it is gone from the Romanian README. No other change.

## 14 — 2026-11-15

- Changed: shared interface kit refreshed — the button inside notifications gets a larger touch target (40 px). No change to the app's own logic or texts.

## 13 — 2026-11-15

- New: hyper-detailed fractal textures (fff-texturi 1.1.2) — the background and large surfaces (cards, panels, headers, buttons; tabs and dialogs that are hidden at load, once they open) get a locally generated material (WebGL2, no network, no images) that tiles seamlessly; the app keeps its own colours. Turn it off in the "Transparency" dialog or with `?notex=1`.

## 12 — 2026-11-03

- Add Portuguese: interface (284 texts) and transcription language; 8 languages in total.
- Adopt the fff-kit, `#app-version`, metas, `app.json`; language preference stored as `decupaj.lang` (old `lang` still read).
- Add own test suite and axe-core verification (0 violations).
