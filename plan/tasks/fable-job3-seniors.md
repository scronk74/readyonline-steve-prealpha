---
type: Task
title: "Fable job 3: Seniors (social media, online learning, scam awareness)"
project: website
status: done
runs_on: Claude Fable, as a subagent
---

# Fable job 3: Seniors

Job 3 of `plan/fable-content-plan.md` (approved by Steve on 2026-11-10).

## Part A: for the session that opens this file

Do the same as job 1, Part A, with these values:
- **subagent:** `description` is `Fable job 3 seniors`, and `prompt` is `You are the Fable worker for plan/tasks/fable-job3-seniors.md in /Users/scronk/Developer/readyonline-steve-prealpha. Read that file in full and carry out Part B exactly. End with the report Part B asks for.`
- **output folder:** `drafts/seniors/`
- **build:** the Seniors page (`docs/seniors/index.html`).
- **The fact-checker step is stricter here.** Every outside figure is checked at its source before it goes on the site. A figure that can't be checked stays off the page.

## Part B: for the Fable subagent

**0. Model check.** If your system prompt doesn't name Claude Fable as your model, stop now and reply only: `NOT FABLE: <model name>`.

**1. Read first.**
- `plan/fable-content-plan.md`: job 3.
- `drafts/slice1/content-brief.md`, for the Seniors outline, voice and reading level (Grade 6 at most, from Ngoc's spec).
- Job 1's and job 2's site copy, so the voice matches:
  - `drafts/young-people-options/`: `age-groups.md`, `notes.md` and one group file
  - `drafts/landing-and-phases/home.md`
- Your True North role and its "Read first" list, as in job 1, Part B, step 1. Also Ngoc's Seniors material: her `seniors.html` and the senior lessons in her site files.
- The current pages: `docs/seniors/index.html` and `docs/index.html`.

**2. Rules.** Follow every rule in job 1, Part B, step 2, with these changes:
- **Write only in `drafts/seniors/`.**
- **Outside figures** about scams and older adults come only from primary sources. For example: the FBI's IC3 Elder Fraud Report, the FTC's Consumer Sentinel data or "Protecting Older Consumers" report, AARP research, and peer-reviewed studies.
  - For each figure, give the exact number, what it counts (reports or people, losses reported or estimated), the year, the source's URL and the date you read it.
  - Don't use figures from Ngoc's pages unless you found them at the source; her national figures haven't been checked.
- **There is no seniors survey.** Use no ReadyOnline survey figures for seniors, except as the review allows: adults' views about older relatives, as totals with denominators.

**3. Voice.**
- Dignity first: "Your wisdom is still the asset."
- No blame for being targeted.
- No baby talk, no fear, and no hint of foolishness.
- Checking another way: hang up and call back on a number you already know.
- No promise of getting money back.
- Help goes through the Get help page, with Ngoc's line. Add no phone numbers or service names.

**4. Resume.** If `drafts/seniors/` already has files, read them and carry on. Save each file as soon as it's done.

**5. Output** (Markdown, in `drafts/seniors/`)

Each file starts with:
- where it was written
- the date
- "written to be reused without this repo"

Site copy goes in `SITE COPY` blocks, as in job 1.

a. **`research.md`:** why older adults get caught by scams, and what helps.
   - What the studies say, each point with its source.
   - A short "what this means for the page" list.
   - It isn't site copy.
b. **`seniors.md`:** the Seniors page.
   - **A shared core,** covering:
     - the habit (hang up, think, check another way)
     - "if you've already sent money or shared details" (first, as a short box)
     - common scams, as what each looks like and what to do: an urgent "bank" call, romance, a tech-support pop-up, a link in a text or email, a fake profile, and a voice or video that may be faked
     - social media concerns
     - online learning
     - the route to help
   - **2 or 3 options,** as in job 1. For example: "straight to it", "a story", and "a card to keep by the phone".
   - Option A is the default, and the only one shown without JavaScript.
   - At most one or two figures on the page, each checked and with its source.
   - Add builder notes.
c. **`notes.md`:**
   - sources
   - claims for the fact-checker (every figure)
   - questions for Steve, each with options and a recommendation
   - "For Ngoc" items
   - ideas you didn't ask for (for example, an app teaser for seniors, or a "pass it on" card for families)
   - lessons for the True North log
   - the drift check

**6. Before finishing,** check `seniors.md` against the playbook's "Draft-page checklist" and fix what fails.

**7. Report** (under 200 words):
- the files written
- the figures you'd put on the page, with their sources
- the drift-check result
- the top three questions for Steve
- your best three ideas
- anything flagged
- anything you couldn't do
