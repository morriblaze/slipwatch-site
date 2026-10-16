---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: [project-tab-slipwatch, report-reading-history, report-all-changes]
title: "Get your first report"
# Rewritten 2026-10-13 on Joanna's review; rewritten again S19 part 10 (2026-10-16) for the rebuilt report.
#
---

1. Open your project and select the **Slipwatch** tab.

   <img src="/screenshots/project-tab-slipwatch.png" width="745" height="116" alt="A Jira project's tabs, with the Slipwatch tab outlined.">

   No tab, or a message saying Slipwatch is switched off? See [Common questions](/help/common-questions/).

2. Slipwatch records due-date changes from the day it's installed. To add the older ones from Jira's history, select **Read this project's history**. You only need to do this once for each project.

   <img src="/screenshots/report-reading-history.png" width="784" height="80" alt="The Read this project's history button, outlined. Below it, a blue message: Reading history: 50 of about 72 work items.">

   The blue message counts the work items read so far, for example **Reading history: 50 of about 72 work items.** You can leave the page; reading carries on without you.

3. Wait for the message to go. The report now holds every due-date change in the project.

The page is a column of blocks, starting with **Summary**. Each block has its own table. [What the numbers mean](/watch/what-the-numbers-mean/) explains every block.

## What each column shows in All due-date changes

Each row is one due-date change, newest first.

<img src="/screenshots/report-all-changes.png" width="784" height="398" alt="The All due-date changes table: work item, summary, who changed it, assignee, when, old and new date, days moved, last-minute and reason.">

| Column | What it shows |
|---|---|
| **Work item** | The work item whose due date changed. Select it to open the work item. |
| **Summary** | The work item's summary. |
| **Changed by** | The person who changed the date. |
| **Assignee** | Who the work item was assigned to when the date changed. |
| **When** | The day of the change, in your own time zone and date format. |
| **Old date** | The due date before the change. A dash means it had none. |
| **New date** | The due date after the change. |
| **Days moved** | How far the date moved: **+** later, **−** earlier. **First due date set** means the work item got its first due date. |
| **Last-minute** | The date moved within 2 days of the old due date. |
| **Reason** | The reason type and the reason given. **Add** means nobody has given one yet. |

More columns are a click away: select **+** at the end of the headings to add **Work type**, **Epic**, **Time**, **For someone else** or **Comment**. Select any heading to sort by it or hide it, and drag headings to reorder them. Slipwatch keeps your choices for you.

**Next:** [Find who moved a deadline](/watch/find-who-moved-a-deadline/)
