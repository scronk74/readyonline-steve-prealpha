---
type: Implementation Plan
title: ReadyOnline website Phase 1 implementation plan
project: website
status: draft
---

# Implementation plan: Phase 1 website (pre-MVP)

Steve decides; this is a working draft. **Writer for this repo:** the Claude session Steve opens **in this folder** (from 2026-11-09). The repo was scaffolded earlier by Claude from Steve's planning session, which no longer writes here. Codex can build in a worktree when Steve hands it work; the writer merges.

**Approach:**
- plain HTML and CSS, with no build step
- files in `docs/`
- relative links only
- viewed with Live Server and ready for GitHub Pages
- JavaScript only for optional extras; core content works without it
- **a demo for Steve and Ngoc:** while it's on Pages, only they use it. Nothing on it pretends to be a working help service.

**Reviews:**
- scope guard and fact-checker inline, always
- skeptic and security reviewer once per plan, and again before anything is published
- UX lead, True North (content) and code reviewer at their checkpoints

## Slice 0: Skeleton (build first)

**Outcome:** a site that looks good and clicks through on Steve's 13" MacBook Air, with Get help one click from every page. Phones get a quick "nothing broken" check only; full phone and device testing comes later.

| # | Task | Done when |
|---|---|---|
| 0.1 | **Site shell and styles** (`docs/styles.css`): calm ReadyOnline look (navy, cyan, lime used with restraint); system fonts; body text 16px or larger; a skip link; visible focus | Looks good on the laptop (about 1440–1470px wide); contrast checked, with cyan and lime as fills and accents only, never as text on white; nothing under 14px |
| 0.2 | **Header on every page:** the logo goes home; all six menu links visible, with no menu button: Young people · Parents · Seniors · Research · What we're building · About; **Get help** set apart, outside the menu. Laptop: one row. Phone: the links wrap into two columns, no JavaScript | Looks good on the laptop; on a phone, all six links and Get help show without a menu button. (A hamburger menu stays an option when phone design starts.) |
| 0.3 | **Home** (`docs/index.html`): draft core message ("Build digital instincts for life, at every age"), Pause · Think · Act, four doors: Kids, Teens, Parents, Seniors | Within the first laptop screen, a visitor knows what this is and where to go |
| 0.4 | **Get help** (`docs/get-help/index.html`), **demo version.** A **work-in-progress banner** comes first: this is a design sample, not a working help service; the numbers on the page are not real; a link to real support (proposed wording below). Then Ngoc's line, and routes for talking to someone now, reporting exploitation, and other urgent help. The routes have generic names (no real service names next to sample numbers). Sample numbers come from the range set aside for fiction (555-0100 to 555-0199), each tagged "Sample" | Works with JavaScript off; the banner is the first thing on the page; its real-support links are checked live; Steve approves the banner wording before Pages is turned on |
| 0.5 | **Placeholder pages** for each menu item ("Coming soon", one line on what's coming). The Young people page has Kids and Teens sections, so the home doors land somewhere | No broken links |
| 0.6 | **Help at the bottom of every page,** above the footer: "Need help now? Get help" | On every page, placeholders included |
| 0.7 | **Footer:** a short, accurate privacy note (no accounts, no tracking; hosting may log visits), a credit to Ngoc's work, contact via email (address to be confirmed) | Privacy wording claims nothing untrue |
| 0.8 | **Checks:** Live Server on the laptop; a quick phone check at 390px (nothing broken; all links and Get help showing); keyboard only; JavaScript off; no console errors; the header and the bottom help line are identical on every page; `grep -rn 'href="/' docs/` finds nothing; `git ls-files docs/` lists only website files; no secrets | All pass; screenshots saved for Steve |

**Banner wording (live since Steve turned on Pages, 2026-11-09):**

> **Work in progress.** This page is a design sample, not a working help service. The numbers on it are not real. If you need help now: in the US, call or text **988** ([988lifeline.org](https://988lifeline.org)). Outside the US: [findahelpline.com](https://findahelpline.com).

**Reviews for Slice 0:** UX lead (shell, navigation, Get help), True North (Get help wording, safe messaging), security reviewer (before Pages is ever enabled: done 2026-11-09, see below).

**Live:** <https://scronk74.github.io/readyonline-steve-prealpha/>, published from `docs/` on `main`, with HTTPS enforced. Pre-publish security check (2026-11-09):
- Passed:
  - only website files are in `docs/`, and the history holds nothing private
  - no third-party scripts, fonts or embeds, and no repo workflows
  - every page and asset loads over HTTPS, and http redirects to https
- Gaps, and what covers them:
  - no Content Security Policy: the site has no scripts or forms, and a CSP would block Live Server's reload script
  - Steve's GitHub two-factor sign-in couldn't be checked from here; Steve should confirm it
- **Out of date (question from the planning repo, answered 2026-11-10):** the "no scripts" reason no longer holds. Revision 2 added `theme.js` (the dark mode switch) and revision 3 added `looks.js` (the design comparison). Both are our own small scripts: they load nothing, read no input and save only one setting each in the browser. Revision 4 adds font files saved in `docs/fonts/`, so nothing is loaded from another website. The pages have no inline scripts, inline styles or event-handler attributes, so a strict CSP would work as is. The risk is still low. **Recommendation:** when the comparison switch is removed, the security reviewer looks again and we add a `<meta>` CSP to every page: `default-src 'self'; script-src 'self'; style-src 'self'; font-src 'self'; img-src 'self' data:; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'`. It blocks Live Server's auto-reload (refresh by hand instead). `frame-ancestors` can't be set from a `<meta>` tag, so framing protection isn't available on GitHub Pages; the risk is low because nothing on the site can be triggered by framing.

**Dark mode comparison (2026-11-10, temporary):** after feedback that dark mode looks AI-made, Steve asked for three dark mode designs with a switch on the page, published so he can review them with Ngoc. A is the current design, B "Quieter", C "Example". The switch lives in `docs/looks.css` and `docs/looks.js` (plus the example text in `docs/index.html`). Light mode is unchanged. Once a design is chosen, fold it into `styles.css` and delete the switch.

**Revision 4 (2026-11-10):** Steve dropped B "Quieter" and asked for eight designs: four in Ngoc's colours (A Current, B Example (was C), C Bold, D Calm) and four new dark themes (E Kitchen table, F Signpost, G Field guide, H Night harbour). Each design except A may show one small example on the home page, as draft copy for True North and Ngoc. Steve approved free, open-licence fonts saved in `docs/fonts/` (from Fontsource, with their licence files), because the rule bans fonts loaded from other websites, not fonts served with the site. Codex wrote the six new designs from briefs in a scratch folder, and the writer (Claude) merged, checked and pushed them. When one design is chosen: fold it into `styles.css`; delete `looks.css`, `looks.js`, the `.ex` examples and any unused fonts; revert the privacy line; then the security recheck above.

## Later slices (outline; detailed when each starts)

- **Slice 1: Core audiences.** Young people hub (Kids and Teens), Parents, Seniors: first drafts from Ngoc's material by True North. Menu-label test ("Young people" vs "Kids & Teens") with kids and teens separately, with a parent's consent and the child's own agreement.
- **Slice 2: Trust and evidence.** Research highlights (checked totals and a methods note), About/contact/privacy, app teasers with the early-access link once Ngoc agrees to its use.
- **Slice 3: Guides and demo.** First setup guide (Snapchat) with a "last checked" date and approval; verified Get help details replace the sample numbers and the banner; then the teen practice demo (self-contained, nothing saved).

## Later, not yet scheduled

- **UI test plan** before phone design starts: phone layouts (including a hamburger menu option), 320px width, 200% zoom, other devices.
- **Page-by-page design Q&A** with Steve once design details get precise. First topic: what each home door promises (one concrete thing is too little).

## Open questions (asked in chat, one at a time)

- Whether the footer credit names Ngoc (it says "its founder" for now).
- Reusing text from Ngoc's current lessons needs her OK (Slice 1 onwards).
- The core message, to be agreed with Ngoc.
- The contact email for the footer.
