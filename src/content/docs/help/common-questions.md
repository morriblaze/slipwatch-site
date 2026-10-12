---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: [project-tabs-add-app, report-switched-off, report-empty, report-reading-history, report-history-read]
title: "Common questions"
# Started at Sitting 1 (2026-10-12) as "Questions and problems", renamed 2026-10-13. Every sitting adds to it.
# The list of links under the title must match the questions below: add a link with every new question.
# Delete the next line when the page is ready to go public.
draft: true
---

- [Why don't I see a Slipwatch tab?](#why-dont-i-see-a-slipwatch-tab)
- [What does "Slipwatch is off for this project" mean?](#what-does-slipwatch-is-off-for-this-project-mean)
- [Why does the report say "No due-date changes recorded yet"?](#why-does-the-report-say-no-due-date-changes-recorded-yet)
- [Can I select "Read this project's history" twice?](#can-i-select-read-this-projects-history-twice)
- [Why don't the times match my clock?](#why-dont-the-times-match-my-clock)
- [Why does a first due date count as a change but add no days?](#why-does-a-first-due-date-count-as-a-change-but-add-no-days)

## Why don't I see a Slipwatch tab?

Projects created after Slipwatch was installed don't get the tab. Select **+** at the end of the project's tabs. Under **Apps**, select **Slipwatch**.

<img src="/screenshots/project-tabs-add-app.png" width="268" height="161" alt="The bottom of Jira's + menu: Slipwatch, outlined, under Apps.">

## What does "Slipwatch is off for this project" mean?

A Jira admin has switched Slipwatch off for this project. To switch it on, go to **Space settings** > **Apps** > **Slipwatch** and turn on **Watch this project**. Changes recorded before are kept and show again.

## Why does the report say "No due-date changes recorded yet"?

Slipwatch records changes from the day it's installed, so a new install starts empty. To add older changes, select **Read this project's history**. See [Get your first report](/watch/get-your-first-report/).

## Can I select "Read this project's history" twice?

Yes. Slipwatch never counts a change twice. If it's still reading, the blue message shows how far it has got.

## Why don't the times match my clock?

Times in the **When** column are in UTC (Coordinated Universal Time), so they can differ from your local time. In the UK, for example, they're one hour behind from late March to late October.

## Why does a first due date count as a change but add no days?

When a work item gets its first due date, nothing moved, so it adds no days. It still counts as a change. The **Totals** section says how many changes are moves and how many are first due dates.
