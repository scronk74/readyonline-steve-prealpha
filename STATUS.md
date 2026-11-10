---
type: Project Status
title: ReadyOnline website Phase 1 status
project: website
---

# Status

Updated by the agent that did the work, at every handoff (see `AGENTS.md`).

| Field | Value |
|---|---|
| Slice | 0: Skeleton |
| State | Revision 3 live on GitHub Pages: <https://scronk74.github.io/readyonline-steve-prealpha/> (a demo for Steve and Ngoc), with a temporary switch to compare three dark mode designs |
| Done | Slice 0 built in `docs/`: shared styles, header with six visible links and Get help, home (message, Pause · Think · Act, four doors), demo Get help page (work-in-progress banner, sample 555-01xx numbers), placeholders (Young people has Kids and Teens sections), help band and footer on every page. Checks passed: screenshots at 1470px laptop and 390px phone; contrast (all text 8:1 or better); smallest text 14px; no scripts (until revision 2 added the optional theme switch); no broken links or missing files; no console errors; header and help band identical on every page; no leading-slash links; only website files in `docs/`; no secrets. GitHub Pages turned on 2026-11-09 (from `docs/` on `main`, HTTPS enforced) after a pre-publish security check (see the plan); all 8 pages and assets return 200 live, and http redirects to https. Not yet done: a real keyboard walk-through (tab order checked from the page structure only). Revision 2 (UX lead, then skeptic, then UX lead final): dark mode (follows the system setting; a header button switches it, saved in this browser only, hidden without JavaScript); the footer stays at the bottom of short pages; the logo adapts to the theme; the privacy note mentions the saved choice. Dark contrast checked (all text 8:1 or better; the button outline 3:1 or better); no console errors; header identical on every page. Revision 3 (2026-11-10, after feedback that dark mode looks AI-made; UX lead and skeptic reviews in chat): a temporary switch at the bottom left of every page compares three dark mode designs. A is the current one; B "Quieter" (calm slate, no neon, the three steps in a row, doors as plain links, help in a soft box); C "Example" (Ngoc's navy as the background, the home page opens on an example scam text beside Pause, Think, Act; doors as a list; lime kept for Get help). Light mode is unchanged. Files: `docs/looks.css` and `docs/looks.js`, plus the example text in `docs/index.html` (hidden except in C); remove them once a design is chosen. The privacy note now mentions the saved design choice. Checks: every visible text element scanned in B and C on Home, Get help, Young people and About (lowest 5.8:1, smallest 14px); 390px phone frames (one-row switch, no sideways scroll); light mode unchanged; no leading-slash links; no secrets. Checked by injecting the new files into the live pages in a browser tab, because a local server could not run from this session |
| Next | Steve and Ngoc compare the three dark mode designs on the live site (Ngoc on Windows sees Segoe UI instead of Avenir Next); Steve picks one or asks for changes; then the switch is removed. Then Steve revisits the UX lead and skeptic comments; then True North reviews the copy, including the example text in C |
| Waiting on Steve | Which dark mode design (A, B or C), after looking with Ngoc; feedback on the look; whether the footer credit names Ngoc; confirm two-factor sign-in on his GitHub account; record in the planning repo that Pages is on, and the decision to compare three dark mode designs |
| Last updated | 2026-11-10 by Claude (Opus 5.5, session in this folder) |
