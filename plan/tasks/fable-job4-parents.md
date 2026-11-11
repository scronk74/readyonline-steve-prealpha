---
type: Task
title: "Fable job 4: Parents"
project: website
status: ready
runs_on: Claude Fable, as a subagent
---

# Fable job 4: Parents

Job 4 of `plan/fable-content-plan.md` (approved by Steve on 2026-11-10), run because Fable time remained.

## Part A: for the session that opens this file

Do the same as job 1, Part A, with these values:
- **subagent:** `description` is `Fable job 4 parents`, and `prompt` is `You are the Fable worker for plan/tasks/fable-job4-parents.md in /Users/scronk/Developer/readyonline-steve-prealpha. Read that file in full and carry out Part B exactly. End with the report Part B asks for.`
- **output folder:** `drafts/parents/`
- **build:** the Parents page (`docs/parents/index.html`).
- **Facts:** every outside figure is checked at its source before it goes on the site, as in job 3.

## Part B: for the Fable subagent

**0. Model check.** If your system prompt doesn't name Claude Fable as your model, stop now and reply only: `NOT FABLE: <model name>`.

**1. Read first.**
- `plan/fable-content-plan.md`: job 4.
- `drafts/slice1/content-brief.md`: the Parents outline and voice (Grade 8).
- The site copy of jobs 1 to 3, so the four audience pages read as one site:
  - `drafts/young-people-options/`: all of it. The Parents page covers the parent's side of the "Under 13, with a grown-up" option, so its words and its "deal" must match.
  - `drafts/landing-and-phases/home.md`
  - `drafts/seniors/seniors.md`
- Your True North role and its "Read first" list, as in job 1, Part B, step 1. Also Ngoc's parent material: her tone rules, the "five things never to say", the trusted-adult framework and her parents page.
- The current page: `docs/parents/index.html`.

**2. Rules.** Follow every rule in job 1, Part B, step 2, and job 3's rule on outside figures, with one change: **write only in `drafts/parents/`.**

**Survey figures** for parents come only from the review's checked totals, each with its denominator:
- what helps young people ask for help (80%, 62%, 59% and 42% of 80)
- parents' confidence (47% of 122 and 47% of 125)
- 83% of 153 adults want controls and education together

**3. Voice.**
- Calm and practical.
- "No punishment" comes first: don't take the phone, stay calm, listen first.
- Give parents the words for the conversation.
- "If something has already happened" comes before prevention, as a short box first.
- No blame for the child or the parent.
- No promised outcomes.
- Settings and setup guides are a later phase, so say "coming".
- Help goes through the Get help page, with Ngoc's line. Add no phone numbers or service names.

**4. Resume.** If `drafts/parents/` already has files, read them and carry on. Save each file as soon as it's done.

**5. Output** (Markdown, in `drafts/parents/`)

Each file starts with:
- where it was written
- the date
- "written to be reused without this repo"

Site copy goes in `SITE COPY` blocks, as in job 1.

a. **`parents.md`:** the Parents page.
   - **A shared core,** in this order:
     1. the promise in the parent's words
     2. "if something has already happened": the first response, what not to say, and next steps together
     3. why it works: what young people told us, in checked totals
     4. the words for the conversation, including the phrases the Young people page teaches
     5. what pressure looks like online
     6. settings that help: coming
     7. supporting an older relative: a link to Seniors
   - **2 or 3 options,** as in job 1. For example: "straight to it", "a conversation, step by step", and "a card for the fridge".
   - Option A is the default, and the only one shown without JavaScript.
   - Add builder notes.
b. **`notes.md`:**
   - sources
   - claims for the fact-checker
   - questions for Steve, each with options and a recommendation
   - "For Ngoc" items
   - ideas you didn't ask for (for example, a parent app teaser, or a family "deal" card shared with the Under 13 page)
   - lessons for the True North log
   - the drift check

**6. Before finishing,** check `parents.md` against the playbook's "Draft-page checklist" and fix what fails.

**7. Report** (under 200 words):
- the files written
- the figures used, with their sources
- the drift-check result
- the top three questions for Steve
- your best three ideas
- anything flagged
- anything you couldn't do
