---
type: Plan
title: Fable content plan for the Phase 1 demo
project: website
status: approved 2026-11-10
---

# Fable content plan for the Phase 1 demo

From Steve's 10-question Q&A with Claude (Opus), 2026-11-10. Steve decides; nothing here is final. Items marked **(Claude's call)** are Claude's defaults for Steve to overrule.

## Why

Steve has a Claude Fable usage window (a 5-hour reset) that expires in a few days. He wants Fable used where it helps most: the sensitive content that matters most, starting with young people. Fable should think deeply, and bring up things Steve may have missed.

The work goes on the demo site that Steve will show Ngoc. He'll walk her through it and talk, and may use a slide deck as well. The walk-through is honest, not a pitch:
- It shows that Steve has reviewed all of her work.
- It shows that his decisions and opinions are only opinions; they both want the same result.
- Anything on the demo can change after their talk.

## What the demo shows Ngoc

- **Phase 1: the start of the real site,** as an internal proof of concept. It covers content and the site's framework. It contains:
  - a simpler landing page: information, options and future potential
  - "Coming soon" where content isn't ready
  - **app teasers for each age group**, drawn as realistic phone screens
  - **at least one animated walk-through** (Steve wants to see what Fable can do)
  - **several design themes** to choose from: the current eight (A to H)
- **Phase 2: enhancements:** more app screens and simulated app videos.
- **Future potential** (Ngoc's goals, and one idea of Steve's):
  - mobile apps for each age group, tied to phone accounts
  - awareness certification for kids and teens, like yearly workplace awareness training (Steve's idea)

## Goals, non-goals, anti-goals

**Goals**
- Welcoming content options for each age group, most of all under-15s.
- One consistent set of age groups, in the header and the home page doors. An under-13 group says "with a parent", or words to that effect.
- Options that can be switched on the demo site and reviewed in every design.
- Drafts that another repo or session can reuse for future sites.

**Non-goals (for now)**
- final copy
- a polished slide deck (optional)
- testing with real kids, teens or seniors
- verified Get help details
- working apps

**Anti-goals**
- selling, flattery or "blowing smoke"
- presenting proposals as decisions, or Steve's views as final
- quizzes that catch kids out: hints teach the safe choice, they don't trick
- scary detail, blame or lectures
- presenting anything as Ngoc's view unless she gave it
- unsourced numbers
- anything private on the site

## Fable jobs, in order

- One Fable run at a time, launched by the writer session for this repo.
- Each run uses effort `high` (Steve's earlier instruction), resumes from saved files, and saves as it goes.
- If Fable is unavailable or out of usage, stop and tell Steve. **Never fall back to another model.**
- Each job has its own task file in `plan/tasks/`, in the same Part A and Part B format as Day 1.

1. **Young people options**
   - **Age groups:** Fable proposes the groups and their labels, with reasons (for example "Under 13, with a parent"; 13 to 14; 15 to 18). The build uses Fable's recommended set until Steve picks. Under-13 content is labelled a **proposal for Ngoc's review**, because her site has none, possibly on purpose.
   - **For each group:** one shared core (the facts, Pause · Think · Act and the route to help), plus 2 or 3 options **(Claude's call)**. Each option keeps the core and changes the framing, examples and format, for example "together" (parent and child), "story" and "quick card".
   - **Order:** under-15s first, then 15 to 18.
   - **App teasers:** what each age group's app screen shows, as content for drawn phone screens.
   - **Walk-through script:** at least one. A young teen gets a question, and hints guide them to the safe choice. Fable writes the situation, the question, each hint and the lesson.
   - **Ideas you didn't ask for:** a short list.
2. **Landing page and "What we're building"**
   - a workable draft of the home page: information, options and future potential
   - the phases on the "What we're building" page **(Claude's call)**
   - one page of talking points for Steve to use while he shows the site (in place of a deck; a deck stays optional)
3. **Seniors**
   - Topics: social media concerns, online learning, and scam awareness as it affects older adults.
   - The research behind it: why older adults get caught by scams, from published studies cited at the source.
   - Options as in job 1.
4. **Parents** (if Fable time remains): "no punishment" first, the words for the conversation, and what to do if something already happened. It covers the parent's side of the under-13 option.

Any Fable time left after that: Steve decides.

**Supersedes:** `plan/tasks/day2-parents-and-seniors-fable.md`, which this order replaces. The Day 1 drafts in `drafts/slice1/` are job 1's starting point, and Steve's Day 1 feedback (`drafts/slice1/steve-feedback-day1.md`) goes to Fable word for word.

## Guidance and sources

- **Ngoc's guidance first:** her tone rules, protocols, lessons and spec, by their paths in the planning repo (True North's "Read first" list).
- **Where she's silent:** trusted child-safety and consumer-protection organisations and safe-messaging guidance, each cited **(which ones: Fable's call, using True North's research)**.
- **Ngoc's wording:** see "Decided with Steve" below.
- **Survey figures:** only checked totals from `readyonline_brain/research/2026-11-08-survey-data-review.md`, each with its denominator. No incident-coding figures. No survey quotes.
- **Outside figures** (such as studies of scams against seniors): the fact-checker checks each one at the source before it goes on the site, with its source and what it counts.

## How it reaches the site

- **Fable writes private, portable drafts** in `drafts/<job>/`. Each draft keeps site-ready copy separate from notes, tags and questions.
- **Building:** Codex (or Claude) builds pages and parts from the site-ready copy. Claude merges, checks and pushes. Fable's time goes on thinking, not markup **(Claude's call)**.
- **Straight onto the demo site.** Steve reviews there, not in the drafts.
- **Content switch:** a second row in the existing review panel, only on pages with options.
  - Without JavaScript, option A shows.
  - It works in all eight designs.
  - It's checked at laptop width and at 390px: contrast, nothing under 14px, no sideways scroll.
- **Phone screens:** drawn in HTML and CSS with real text, so screen readers can read them. No images from other websites.
- **Walk-through:** Next and Back buttons, or a slow automatic play with a pause button.
  - No typing or pulsing animation.
  - Follows the "reduce motion" setting.
  - Without JavaScript, it shows as a numbered list.
  - Default home: the teen section of Young people, linked from "What we're building" **(Claude's call)**.
- **Age groups on the site:** the header keeps six items or fewer. "Young people" stays one menu item, and its page has a section for each age group. The home page doors use the same group names **(Claude's call)**.
- **Labels on the site:** proposals and under-13 content say "Proposal for Ngoc's review". The draft notice stays on every page.
- **Site copy carries no internal tags, notes or private material.**

## Constraints

This repo's `AGENTS.md` rules apply:
- relative links only
- no third-party scripts, fonts or embeds
- WCAG AA
- body text 16px or larger, and nothing under 14px
- six menu items or fewer
- Get help in the header of every page, with Ngoc's line
- privacy claims must be true

The repo is public and Pages has no access control, so nothing private goes on the site.

## Left to the builder

- the component markup and file layout
- the switch details, within the rules above
- how the phone screens are drawn

## Decided with Steve (2026-11-10)

- **Ngoc's wording:** wording that's already on her public website can be kept on the demo, with no special label. Anything from her unpublished material needs her OK first. Survey respondents' words are never used.
- **Approval:** Steve approved this plan on 2026-11-10. Everything stays flexible after his conversations with Ngoc.
