---
type: Task
title: "Day 1 (Fable): Slice 1 content brief and Young people drafts"
project: website
status: done
runs_on: Claude Fable, as a subagent
---

# Day 1 (Fable): Slice 1 content brief and Young people drafts

Steve wants the content work in this task done by **Claude Fable**, not by the session that opens this file. Steve asked for this subagent; that is his go-ahead for one subagent under his token rule.

- **Part A** is for the session that opens this file (usually Opus). It launches Fable, checks the result and reports.
- **Part B** is for the Fable subagent. It does the writing.

## Part A: for the session that opens this file

Don't write the drafts yourself.

1. **Start-of-session steps** from `AGENTS.md`.
2. **Check access.** Confirm you can read `../readyonline_brain/agents/roles/true-north.md`. If you can't, stop: Steve needs to start Claude here with `claude --add-dir ../readyonline_brain`.
3. **Check that drafts stay private.** `.gitignore` must list `drafts/`. If it doesn't, stop and tell Steve. The drafts may contain Ngoc's wording and her internal material, which she hasn't cleared for this public repo.
4. **Launch exactly one subagent** with the Agent tool:
   - `subagent_type`: `general-purpose`
   - `model`: `fable`
   - `effort`: `high` (Steve's instruction; not max)
   - `description`: `Day 1 True North drafts`
   - `prompt`: `You are the Fable worker for plan/tasks/day1-content-brief-and-young-people-fable.md in /Users/scronk/Developer/readyonline-steve-prealpha. Read that file in full and carry out Part B exactly. End with the report Part B asks for.`

   If the tool rejects the `fable` model, or Fable is out of usage, **stop and tell Steve. Never fall back to doing Part B on another model.** Steve can instead switch a session to Fable with `/model` and ask it to do Part B of this file.
5. **While it runs,** don't touch `drafts/` or `docs/`. Wait for the completion notice; don't poll.
6. **When it reports:**
   - If it says `NOT FABLE`, set its output aside and tell Steve.
   - Check that the files listed under "Output" in Part B exist.
   - Do quick checks as fact-checker and scope guard:
     - every number has a source and a denominator
     - no survey quotes or identifying details
     - nothing presented as Ngoc's view unless it's marked "for Ngoc"
     - no incident-category figures (they haven't been verified yet)
     - nothing beyond Slice 1
   - Tell Steve in a few lines: what's ready to read (`drafts/slice1/`), the open questions and anything flagged. Ask questions one at a time.
   - Update `STATUS.md` (every field): drafts ready locally, not committed; waiting on Steve's review. Pass the "Lessons for the True North log" from the brief to Steve; a planning-repo session records them. Mention any decision Steve makes so it can be recorded there too.
   - Set this file's `status:` to `done` and commit `STATUS.md` and this file. Never commit `drafts/`. Push only after this repo's "Before every push" checks.
7. **Not in this task:** building pages in `docs/`. That comes after Steve approves the drafts.

## Part B: for the Fable subagent

**0. Model check.** Your system prompt names the model you are running on. If it isn't Claude Fable, stop now and reply only: `NOT FABLE: <model name>`.

**1. Rules.**
- You are **True North**. Read `../readyonline_brain/agents/roles/true-north.md`, then every file in its "Read first" list (paths there are relative to `../readyonline_brain/`). Its playbook's "Sources and authority" section says where Ngoc's material is; her site's files are in `../readyonline_brain/sources/ngoc-readyonline-site/`.
- Also read: this repo's `AGENTS.md` (public-repo rules), `plan/implementation-plan.md` (Slice 0 as built, Slice 1, open questions), and the current `docs/index.html` and `docs/young-people/index.html`, so the drafts continue the existing voice.
- **The planning repo is read-only.** Never write there.
- **Write only in `drafts/slice1/`** in this repo. Don't edit `docs/`, `plan/` or `STATUS.md`. Don't commit or push.
- Stay inside this folder, the planning folder (read only) and owned `/tmp` scratch.
- **Survey figures:** use only checked totals from `../readyonline_brain/research/2026-11-08-survey-data-review.md`, each with its denominator and that file as source. Don't open raw responses. Don't quote anyone. Don't use the incident categories (the q27 coding): they haven't been verified yet.
- **Help:** link to the Get help page with Ngoc's line (D-032). Add no phone numbers or service details.
- **Ngoc's wording:** keep it where it works, credit it, and mark each use `Ngoc's wording: needs her OK to publish`.

**2. Resume.** If `drafts/slice1/` already has files from an earlier run, read them and carry on rather than starting over. Save each file as soon as it's done, so a cut-off run loses little.

**3. Output.**

a. `drafts/slice1/content-brief.md`: one brief for all three Slice 1 pages (Young people, Parents, Seniors), about two pages long:
   - page type (Core) and how each page carries the core message (working draft: "Build digital instincts for life, at every age", with Pause · Think · Act)
   - the voice and reading-level target for each audience (kids, teens, parents, seniors)
   - an outline for each page: its sections, in order
   - what each home-page door promises (Kids, Teens, Parents, Seniors)
   - topics drawn from Ngoc's material, each with where it comes from
   - **For Ngoc:** wording she owns and views to confirm
   - **Questions for Steve:** each with options and a recommendation
   - **Lessons for the True North log:** for a planning-repo session to record

b. `drafts/slice1/young-people.md`: a full draft of the Young people page, with a **Kids** section and a **Teens** section (D-031): a shared factual core with tailored intros and examples. Write it in Markdown, not HTML. Start with the role's draft header: audience, reading-level target, sources, and claims for the fact-checker. End with the drift check (page type, then the result). A kid or teen should get the point in under two minutes.

**4. Before finishing,** check both files against the playbook's "Draft-page checklist" and fix what fails.

**5. Report** (under 200 words): the files written, the drift-check result, the top three questions for Steve, anything flagged for Ngoc, and anything you couldn't do.
