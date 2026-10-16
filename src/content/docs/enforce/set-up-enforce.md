---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: [settings-enforce-card, wizard-check, wizard-lock, wizard-done, wizard-undo]
title: "Set up Enforce"
# Written S19 part 10 (2026-10-16), from the Enforce wizard. Delete the next line when the page is ready to go public.
draft: true
---

**Before you begin:**

- You need to be a Jira admin.
- Enforce needs Jira Standard or higher. On the Free plan, Jira doesn't let anyone change permission rules, so the Enforce card says so instead of showing a button.
- Enforce isn't available for team-managed projects. They have no permission rules to lock.
- Locking dates also takes away ranking on the board and backlog, dragging bars on the timeline and bulk editing due dates. People change dates through Slipwatch instead. See [Change a due date when it's locked](/enforce/change-a-due-date-when-its-locked/).

1. In the project, go to **Space settings** > **Apps** > **Slipwatch**.

2. Under **When a due date changes**, on the **Enforce** card, select **Lock due dates**.

   <img src="/screenshots/settings-enforce-card.png" width="616" height="198" alt="The Enforce card, showing Not on, with the Lock due dates button outlined.">

3. Read what will happen. Slipwatch checks the project's permission rules and your Jira plan, then lists each step in plain words:

   - If other projects use the same rules, Slipwatch first copies them as *your project's key* **- Slipwatch Enforce** and points this project at the copy, so the other projects are untouched. If the project already has its own rules, these two lines say **Already done**.
   - It removes **Schedule Issues** from everyone who holds it, and names each one.
   - It keeps it for Slipwatch, so Slipwatch can still change dates.

   Nothing else changes.

   <img src="/screenshots/wizard-check.png" width="616" height="398" alt="The first screen of Lock due dates in FLT: the four steps Slipwatch will take, with Cancel and Lock due dates.">

4. Select **Lock due dates**. Each step shows its result as it happens. Keep the page open until it finishes.

   <img src="/screenshots/wizard-lock.png" width="616" height="331" alt="The second screen: three steps ticked and the last one in progress.">

   If Jira refuses a step, Slipwatch stops there, shows Jira's own message and says what was already done. Nothing is retried on its own. Select **Undo what was done** to put things back, or **Close** to leave them.

5. When it says **Enforce is on.**, select **Done**. The Enforce card now reads **On**.

   <img src="/screenshots/wizard-done.png" width="616" height="381" alt="The last screen: Enforce is on, with Undo and Done.">

Slipwatch checks Jira once an hour. If someone gives people **Schedule Issues** back in Jira, the project goes back to **Ask**, and the settings page and the report say so.

## Undo

On the Enforce card, or on the last screen of the wizard, select **Undo**, then **Unlock due dates**. Slipwatch gives **Schedule Issues** back to everyone it took it from and the project goes back to **Ask**. The copied rules stay in Jira, so an admin can delete them there if they want.

<img src="/screenshots/wizard-undo.png" width="616" height="230" alt="Unlock due dates in FLT: who gets Schedule Issues back, with Cancel and Unlock due dates.">

**Next:** [Change a due date when it's locked](/enforce/change-a-due-date-when-its-locked/)
