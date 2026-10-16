---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: [panel-change-due-date, reason-box-date]
title: "Change a due date when it's locked"
# Written S19 part 10 (2026-10-16), from the rebuilt panel and reason box. Delete the next line when the page is ready to go public.
draft: true
---

In a project that uses **Enforce**, Jira's own due date field is locked. Clicking it does nothing, and Jira shows no message. You change the date in Slipwatch instead, with a reason.

1. Open the work item. On the right, open the **Slipwatch** panel and select **Change due date**.

   <img src="/screenshots/panel-change-due-date.png" width="483" height="125" alt="The top of the Slipwatch panel, with the Change due date button outlined.">

2. Under **New due date**, choose the date. The line under it shows today's due date.

3. Under **Reason**, choose why the date is moving. Add a few words under **Comment** if they help. A comment is optional, unless your project requires one or you chose **Other**.

   <img src="/screenshots/reason-box-date.png" width="568" height="499" alt="The box for changing FLT-48's due date: New due date, Reason, Comment, and the Change due date button.">

4. Select **Change due date**. The panel says **Due date changed. Your reason is saved.**

If the box says the reason wasn't saved, don't change the date again: the date did move. The change is now listed with no reason, so add the reason there. See [Fill in missing reasons](/ask/fill-in-missing-reasons/).

**Good to know:** the lock also stops people ranking the board or backlog, dragging bars on the timeline and bulk editing due dates.

**Next:** [Find who moved a deadline](/watch/find-who-moved-a-deadline/)
