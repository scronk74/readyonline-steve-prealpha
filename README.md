# ReadyOnline website: Phase 1 (pre-MVP)

Online-safety education for kids, teens, parents and seniors. **Work in progress:** this is an early build, not the official site at readyonline.org. It builds on Ngoc Dinh's ReadyOnline research and work.

## View it locally

1. Open this folder in VS Code.
2. Install the **Live Server** extension if you don't have it.
3. Click **Go Live** in the status bar. It serves the `docs/` folder (see `.vscode/settings.json`), exactly as GitHub Pages would.

Phone sizes: in Chrome press ⌥⌘I, then ⌘⇧M, and pick an iPhone.

## Publishing

GitHub Pages publishes this repo **from the `docs/` folder** on `main`, with no build step, at <https://scronk74.github.io/readyonline-steve-prealpha/> (turned on by Steve on 2026-11-09, as a demo for Steve and Ngoc). Every push to `main` updates the live site. Only `docs/` is published; the planning files at the top level are not.

## Rules for this repo (it's public)

- **Website files only.** Never research, survey data, internal documents or anything private.
- **Relative links only:** never start a link with `/`. Link to folders as `folder/index.html`.
- **No third-party scripts, fonts, embeds or analytics.** Everything is served from this repo.
- **No secrets, ever.** Check before every push.
- Agents: read `AGENTS.md` first.
