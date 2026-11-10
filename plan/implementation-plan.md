---
type: Implementation Plan
title: ReadyOnline website Phase 1 implementation plan
project: website
status: draft
---

# Implementation plan: Phase 1 website (pre-MVP)

Steve decides; this is a working draft. **Writer for this repo:** Claude (Opus 5.5) in Steve's current session (2026-11-09). Codex can build in a worktree when Steve hands it work; the writer merges.

**Approach:**
- plain HTML and CSS, with no build step
- files in `docs/`
- relative links only
- viewed with Live Server and ready for GitHub Pages
- JavaScript only for optional extras; core content works without it

**Reviews:**
- scope guard and fact-checker inline, always
- skeptic and security reviewer once per plan, and again before anything is published
- UX lead, True North (content) and code reviewer at their checkpoints

## Slice 0: Skeleton (build first)

**Outcome:** a site you can click through on a phone and a laptop, with Get help one tap from every page.

| # | Task | Done when |
|---|---|---|
| 0.1 | **Site shell and styles** (`docs/styles.css`): calm ReadyOnline look (navy, cyan, lime used with restraint); system fonts; body text 16px or larger; a skip link; visible focus | Contrast checked; nothing under 14px; readable at 390px wide |
| 0.2 | **Header on every page:** the logo goes home; menu: Young people · Parents · Seniors · Research · What we're building · About; a **Get help** link outside the menu | All 6 menu items and Get help reachable on a phone; no hamburger hides Get help |
| 0.3 | **Home** (`docs/index.html`): draft core message ("Build digital instincts for life, at every age"), Pause · Think · Act, four doors: Kids, Teens, Parents, Seniors | Within the first screen, a visitor knows what this is and where to go |
| 0.4 | **Get help** (`docs/get-help/index.html`): Ngoc's line; routes for talking to someone now, reporting exploitation, and other urgent help; phone numbers in plain text; marked **"Draft: details being verified"** | Works with JavaScript off; every number shown as text; draft label visible |
| 0.5 | **Placeholder pages** for each menu item ("Coming soon", one line on what's coming) | No broken links |
| 0.6 | **Footer:** a short, accurate privacy note (no accounts, no tracking; hosting may log visits), a credit to Ngoc's work, contact via email (address to be confirmed) | Privacy wording claims nothing untrue |
| 0.7 | **Checks:** Live Server at 390px and 1440px; keyboard only; no console errors; `grep -rn 'href="/' docs/` finds nothing; `git ls-files docs/` lists only website files; no secrets | All pass; screenshots saved for Steve |

**Reviews for Slice 0:** UX lead (shell, navigation, Get help), True North (Get help wording, safe messaging), security reviewer (before Pages is ever enabled).

## Later slices (outline; detailed when each starts)

- **Slice 1: Core audiences.** Young people hub (Kids and Teens), Parents, Seniors: first drafts from Ngoc's material by True North. Quick menu-label test with 3–5 people.
- **Slice 2: Trust and evidence.** Research highlights (checked totals and a methods note), About/contact/privacy, app teasers with the early-access link once Ngoc agrees to its use.
- **Slice 3: Guides and demo.** First setup guide (Snapchat) with a "last checked" date and approval; verified Get help details; then the teen practice demo (self-contained, nothing saved).

## Open questions (asked in chat, one at a time)

- Reusing text from Ngoc's current lessons needs her OK (Slice 1 onwards).
- The core message, to be agreed with Ngoc.
- The contact email for the footer.
