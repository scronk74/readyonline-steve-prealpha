---
type: Task
title: "Fable job 2: landing page, phases and Steve's talking points"
project: website
status: done
runs_on: Claude Fable, as a subagent
---

# Fable job 2: landing page, phases and talking points

Job 2 of `plan/fable-content-plan.md` (approved by Steve on 2026-11-10). It runs after job 1 (`plan/tasks/fable-job1-young-people-options.md`).

## Part A: for the session that opens this file

Do the same as job 1, Part A, with these values:
- **subagent:** `description` is `Fable job 2 landing and phases`, and `prompt` is `You are the Fable worker for plan/tasks/fable-job2-landing-and-phases.md in /Users/scronk/Developer/readyonline-steve-prealpha. Read that file in full and carry out Part B exactly. End with the report Part B asks for.`
- **output folder:** `drafts/landing-and-phases/`
- **build:** the home page and the "What we're building" page only. The talking points are never put on the site.

## Part B: for the Fable subagent

**0. Model check.** If your system prompt doesn't name Claude Fable as your model, stop now and reply only: `NOT FABLE: <model name>`.

**1. Read first.**
- `plan/fable-content-plan.md`. Its "Why" and "What the demo shows Ngoc" sections are Steve's own answers, and they set the tone.
- `drafts/slice1/steve-feedback-day1.md`.
- Job 1's output in `drafts/young-people-options/`: `age-groups.md`, `app-teasers.md` and `notes.md`. The site now uses its age groups.
- Your True North role and its "Read first" list, as in job 1, Part B, step 1. Also Ngoc's site files, especially what she plans for the apps and the future.
- The current pages: `docs/index.html` and `docs/what-were-building/index.html`.

**2. Rules.** Follow every rule in job 1, Part B, step 2, with one change: write only in `drafts/landing-and-phases/`.

**3. Tone.** This is how Steve talks to Ngoc:
- It's honest, not a pitch. No selling and no flattery.
- It shows that the work builds on hers, and credits it plainly.
- Steve's views are opinions, not decisions; they both want the same result.
- It's fine to say what isn't known yet.
- The page is for a visitor first. Ngoc reads it as a sample of the real site.

**4. Resume.** If the output folder already has files, read them and carry on. Save each file as soon as it's done.

**5. Output** (Markdown, in `drafts/landing-and-phases/`)

Each file starts with:
- where it was written
- the date
- "written to be reused without this repo"

Site copy goes in `SITE COPY` blocks, as in job 1.

a. **`home.md`:** a workable draft of a simpler home page, with information, options and future potential.
   - **Keep:**
     - the core message (working draft: "Build digital instincts for life, at every age")
     - Pause · Think · Act
     - the doors for the job 1 age groups, plus Parents and Seniors
     - one way in to "What we're building"
   - **Give 2 options for the top of the page,** as A and B, with A the default. They're shown with the same content switch as job 1.
   - **A visitor should know within one laptop screen:**
     - what this is
     - who it's for
     - where to go
     - where help is
   - **Add builder notes** for any layout you have in mind.
b. **`what-were-building.md`:** the phases page.
   - Phase 1: the start of the real site. It covers content and framework, app teasers, several design themes, and "coming soon" where content isn't ready.
   - Phase 2: enhancements, such as more app screens and simulated app videos.
   - Future potential:
     - apps for each age group, tied to phone accounts (Ngoc's goal)
     - awareness certification for kids and teens, like yearly workplace awareness training (Steve's idea)
   - What is known, what is still being decided, and with whom.
   - Plain and short.
c. **`talking-points.md`:** one page for Steve to use while he shows Ngoc the site. **Private: never site copy.**
   - Order: what to show, in order; what to say; the questions to ask her; and the decisions only she can make.
   - Write it in Steve's plain voice, not a script.
   - **Include** the open questions from job 1 that need Ngoc. **Leave out** anything that would read as selling.
d. **`notes.md`:**
   - sources
   - claims for the fact-checker
   - questions for Steve, each with options and a recommendation
   - ideas you didn't ask for
   - lessons for the True North log
   - the drift check for each site file

**6. Before finishing,** check the site files against the playbook's "Draft-page checklist" and fix what fails.

**7. Report** (under 200 words):
- the files written
- the drift-check results
- the top three questions for Steve
- your best three ideas
- anything flagged
- anything you couldn't do
