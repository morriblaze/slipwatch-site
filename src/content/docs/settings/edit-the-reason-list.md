---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: [settings-reasons, settings-comment]
title: "Edit the reason list"
# Written S19 part 10 (2026-10-16), from the rebuilt settings page (types and reasons, and the comment switch).
---

**Before you begin:** only Jira admins can change Slipwatch's settings. Each project has its own list.

People pick one reason from this list when a date moves. Reasons are grouped by type: **Internal**, **Dependency**, **External**, **Correction** and **Other** to start with.

1. In the project, go to **Space settings** > **Apps** > **Slipwatch** and scroll to **Reasons**.

2. Change the list:
   - To add a reason, type it in **New reason** under its type and select **Add**.
   - To add a type, type it in **New type** under the list and select **Add type**. Then add its reasons.
   - To rename a type or a reason, select **Rename**, type the new words and select **Save**.
   - To take one off the list, select **Retire**. Select **Restore** to bring it back.
   - To change the order, drag a type or a reason by its **⠿** handle.

   <img src="/screenshots/settings-reasons.png" width="630" height="313" alt="The Reasons list: types with their reasons, each with Rename and Retire, a New reason box under each type, and the New type box and Add type button outlined.">

Each change is saved straight away. The reason box shows the new list the next time it opens.

Renaming or retiring never changes a reason already given: it keeps the words it was saved with.

**Correction** can be renamed but not retired. It's how people mark a date that was wrong rather than moved, and the report leaves those changes out of the numbers.

## Require a comment

Under **Comment**, turn the switch on if every reason must come with a written comment, for example in a regulated team. It's off to start with: a reason from the list is enough. **Other** always needs a comment.

<img src="/screenshots/settings-comment.png" width="616" height="87" alt="The Comment switch, off: Optional. A reason from the list is enough.">

**Next:** [Set up Enforce](/enforce/set-up-enforce/)
