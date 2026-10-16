---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: [reason-box]
title: "When Slipwatch asks you for a reason"
# Written S19 part 10 (2026-10-16), from the rebuilt reason box. Delete the next line when the page is ready to go public.
draft: true
---

When you change a due date in a project that uses **Ask**, a box opens in the middle of the screen a moment later. It opens on whichever Jira page you're on: the work item, the board or the timeline.

1. Read the title. It says which work item moved and by how much, for example **FLT-12's due date moved 7 days later**. Under it are the old and new dates, who changed the date and when.

2. Under **Reason**, choose the reason that fits. Reasons are grouped by type, such as **Internal**, **Dependency** and **External**.

   Choose **Correction** if the date was simply wrong and nothing really moved. Slipwatch leaves corrections out of every number in the report.

3. Add a few words under **Comment** if they help. A comment is optional, unless your project requires one or you chose **Other**.

4. Select **Save reason**. The box says **Reason saved.**

Not the right moment? Select **Not now**. The change waits in the work item's Slipwatch panel and in the report's **Changes with no reason**, so you can add the reason later. See [Fill in missing reasons](/ask/fill-in-missing-reasons/).

**Good to know:** a reason is never overwritten. If you give a new one later, the box keeps the old one underneath, under **Earlier reason**.

**Next:** [Fill in missing reasons](/ask/fill-in-missing-reasons/)
