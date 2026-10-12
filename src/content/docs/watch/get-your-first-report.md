---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: [project-tab-slipwatch, report-reading-history, report-history-read]
title: "Get your first report"
# Rewritten from scratch 2026-10-13 on Joanna's review. Delete the next line when the page is ready to go public.
draft: true
---

1. Open your project and select the **Slipwatch** tab.

   <img src="/screenshots/project-tab-slipwatch.png" width="745" height="116" alt="A Jira project's tabs, with the Slipwatch tab outlined.">

   No tab, or a message saying Slipwatch is off? See [Common questions](/help/common-questions/).

2. Slipwatch records due-date changes from the day it's installed. To add the older ones from Jira's history, select **Read this project's history**. You only need to do this once for each project.

   <img src="/screenshots/report-reading-history.png" width="774" height="211" alt="The Read this project's history button, outlined. Below it, a blue message: Reading history: 50 of about 72 work items.">

   The blue message counts the work items read so far. You can leave the page; reading carries on without you.

3. Wait for the message **History read**. The report now holds every due-date change in the project, newest first.

   <img src="/screenshots/report-history-read.png" width="774" height="258" alt="The blue message History read: 72 work items, outlined. Below it, the report's first rows.">

## What each column shows

Each row is one due-date change.

| Column | What it shows |
|---|---|
| **Work item** | The work item whose due date changed. |
| **Type** | Its work type, for example Story, Task or Bug. |
| **Changed by** | The person who changed the date. |
| **When** | The date and time of the change, in UTC (Coordinated Universal Time). |
| **Old date** | The due date before the change. A dash means it had none. |
| **New date** | The due date after the change. |
| **Days moved** | How far the date moved. **+** means later, **-** means earlier. **Date set** means the work item got its first due date. |
| **Reason** | Why the date moved. A dash means nobody has given a reason. |

Further down the page you'll find the changes with no reason, the dates moved most often, the totals and a week-by-week trend. [What the numbers mean](/watch/what-the-numbers-mean/) explains each one.

**Next:** [Find who moved a deadline](/watch/find-who-moved-a-deadline/)
