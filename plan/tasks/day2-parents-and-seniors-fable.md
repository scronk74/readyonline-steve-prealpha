---
type: Task
title: "Day 2 (Fable): Parents and Seniors drafts"
project: website
status: ready
runs_on: Claude Fable, as a subagent
---

# Day 2 (Fable): Parents and Seniors drafts

Steve wants the content work in this task done by **Claude Fable**, not by the session that opens this file. Steve asked for this subagent; that is his go-ahead for one subagent under his token rule. It follows Day 1 (`plan/tasks/day1-content-brief-and-young-people-fable.md`).

- **Part A** is for the session that opens this file (usually Opus). It launches Fable, checks the result and reports.
- **Part B** is for the Fable subagent. It does the writing.

## Part A: for the session that opens this file

Don't write the drafts yourself.

1. **Start-of-session steps** from `AGENTS.md`.
2. **Check what Day 1 left.** `drafts/slice1/content-brief.md` and `drafts/slice1/young-people.md` must exist. If they don't, stop and tell Steve: run Day 1 first.
3. **Check access and privacy** as in Day 1, Part A steps 2 and 3: the planning repo is readable, and `.gitignore` lists `drafts/`.
4. **Ask Steve once** whether he has feedback on the Day 1 drafts, or answers to the brief's questions. Pass what he says to the subagent word for word. If he has none, say "No feedback yet."
5. **Launch exactly one subagent** with the Agent tool:
   - `subagent_type`: `general-purpose`
   - `model`: `fable`
   - `effort`: `high` (Steve's instruction; not max)
   - `description`: `Day 2 True North drafts`
   - `prompt`: `You are the Fable worker for plan/tasks/day2-parents-and-seniors-fable.md in /Users/scronk/Developer/readyonline-steve-prealpha. Read that file in full and carry out Part B exactly. End with the report Part B asks for. Steve's feedback on Day 1: <feedback, word for word, or "No feedback yet.">`

   If the tool rejects the `fable` model, or Fable is out of usage, **stop and tell Steve. Never fall back to doing Part B on another model.** Steve can instead switch a session to Fable with `/model` and ask it to do Part B of this file, giving it his feedback.
6. **While it runs,** don't touch `drafts/` or `docs/`. Wait for the completion notice; don't poll.
7. **When it reports,** do the same as Day 1, Part A step 6: check for `NOT FABLE`, check the output files exist, do the quick checks, tell Steve, update `STATUS.md`, set this file's `status:` to `done`, and commit only `STATUS.md` and this file. Never commit `drafts/`.
8. **Not in this task:** building pages in `docs/`. That comes after Steve approves the drafts.

## Part B: for the Fable subagent

**0. Model check.** Your system prompt names the model you are running on. If it isn't Claude Fable, stop now and reply only: `NOT FABLE: <model name>`.

**1. Rules.** Follow every rule in Part B, step 1 of `plan/tasks/day1-content-brief-and-young-people-fable.md`. You are True North; read the role and its "Read first" list. Then read `drafts/slice1/content-brief.md` and `drafts/slice1/young-people.md`, plus `docs/parents/index.html` and `docs/seniors/index.html`.

**2. Steve's feedback** (in your prompt) comes first: where it conflicts with the brief, follow Steve.
- If his feedback changes the brief, update `drafts/slice1/content-brief.md` and add a short **Changes after Steve's feedback** list at the top.
- If it affects `young-people.md`, fix that file too, and say so in your report.

**3. Resume.** If `parents.md` or `seniors.md` already exist from an earlier run, read them and carry on. Save each file as soon as it's done.

**4. Output** (both in Markdown, not HTML; each starts with the role's draft header and ends with its drift check):

a. `drafts/slice1/parents.md`, the Parents page. Calm and practical, "no punishment" first. Give parents the words for the conversation and what to do if something has already happened (aftermath before prevention, per the playbook template). Link to Get help; add no service details.

b. `drafts/slice1/seniors.md`, the Seniors page. Dignity: "your wisdom is still the asset". Checking another way: hang up and call back on a number you already know. No blame for being targeted. Link to Get help; add no service details.

Keep the voice and structure consistent with the brief and the Young people draft, so the three pages read as one site.

**5. Before finishing,** check both files against the playbook's "Draft-page checklist" and fix what fails. Add any new "For Ngoc" items, questions or lessons to the brief's lists.

**6. Report** (under 200 words): the files written or changed, the drift-check results, the top three questions for Steve, anything flagged for Ngoc, and anything you couldn't do.
