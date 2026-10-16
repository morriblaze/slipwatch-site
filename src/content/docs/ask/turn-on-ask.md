---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: [settings-mode-cards]
title: "Turn on Ask"
# Written S19 part 10 (2026-10-16), from the rebuilt settings page.
---

**Before you begin:** only Jira admins can change Slipwatch's settings. Every new project starts on **Ask**, so you may not need to do anything.

1. In the project, go to **Space settings** > **Apps** > **Slipwatch**.

2. Under **When a due date changes**, select **Ask**.

   **Ask** records the change and asks the person who changed the date for a reason, on whichever Jira page they are. It never blocks a change.

   <img src="/screenshots/settings-mode-cards.png" width="616" height="256" alt="The three cards under When a due date changes: Watch, Ask (chosen and outlined) and Enforce, which shows Not on.">

   **Watch** records the change and asks nobody anything.

From now on, whoever changes a due date in this project sees the reason box. See [When Slipwatch asks you for a reason](/ask/when-slipwatch-asks-you-for-a-reason/).

**Good to know:** while **Enforce** is on, **Watch** and **Ask** can't be chosen. To leave Enforce, unlock due dates first. See [Set up Enforce](/enforce/set-up-enforce/).

**Next:** [Edit the reason list](/settings/edit-the-reason-list/)
