# AGENTS.md: instructions for AI agents in this repo

This is the **public** repo for ReadyOnline's Phase 1 website. Planning, decisions and research live in Steve's **private** planning repo, Lighthouse (brain). Nothing private is ever copied here. Steve decides everything.

## Start of every session

1. `git status --porcelain`. If clean, `git pull`; if not, tell Steve and don't pull.
2. Read `STATUS.md` and `plan/implementation-plan.md`.

## Who writes

- **One writer at a time.** The writer for this repo is named in `plan/implementation-plan.md`. Only the writer commits and pushes `main`; other agents are read-only.
- **Laptop boundary:** work only inside this repo's folder and owned `/tmp` scratch.

## Rules (public repo)

- **Website files live in `docs/`** (what GitHub Pages publishes). Planning files stay at the top level.
- **Relative links only.** Never use a leading `/`. Link to folders as `folder/index.html`. Everything must work the same under Live Server and at `…github.io/readyonline-site/`.
- **Nothing private:** no survey data, quotes, research or internal docs. Survey figures appear only as checked totals with their denominators.
- **No third-party scripts, fonts, embeds or analytics.** Forms are links only: Ngoc's existing Microsoft Form, and `mailto:` for contact.
- **Privacy claims must be true.** GitHub Pages logs visitor IP addresses, so never write "nothing is stored". "Nothing is saved" is fine only for features that truly save nothing, such as the demo.
- **Secrets:** none belong here. Before every push, check that no secrets are in the code or history.
- **Quality bar:**
  - WCAG AA; core content readable without JavaScript
  - body text 16px or larger, nothing under 14px
  - six menu items or fewer, all reachable on a phone
  - no pulsing or typing animation; contrast checked
  - every number sourced, with its denominator
- **Get help** appears in the header on every page and every device, never hidden in a phone menu. It uses Ngoc's line: *"You don't have to face this alone. Help is available right now."*

## Before every push

1. List what will be published: `git ls-files docs/`. Only website files.
2. Search for links starting with `/`: `grep -rn 'href="/' docs/`. There should be none.
3. Check for secrets.
4. Check it works under Live Server at phone and laptop sizes.

## Status (keep it current)

At each handoff, the agent that did the work updates `STATUS.md` (every field). Steve's planning repo reads it to track progress.
