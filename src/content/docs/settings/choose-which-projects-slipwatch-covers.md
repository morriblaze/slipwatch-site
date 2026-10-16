---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: [settings-watch-switch, settings-switch-off-panel]
title: "Choose which projects Slipwatch covers"
# Written S19 part 10 (2026-10-16), from the rebuilt settings page. Delete the next line when the page is ready to go public.
draft: true
---

**Before you begin:** only Jira admins can change Slipwatch's settings. Slipwatch watches every project from the day it's installed, so you only need this page to switch a project off, or back on.

Each project has its own Slipwatch settings.

## Switch a project off

1. In the project, go to **Space settings** > **Apps** > **Slipwatch**.
2. Under **Watch this project**, turn the switch off.
3. Choose what happens to what Slipwatch has recorded:
   - **Switch off and keep** keeps every change and reason. We recommend it.
   - **Switch off and delete** deletes every change and every reason recorded for the project. This can't be undone, so you type **delete** first.

While a project is off, Slipwatch records nothing for it, and nobody can read its history from the report. The report still shows what was recorded before.

## Switch it back on

Turn **Watch this project** back on. Slipwatch reads the project's history again, which also picks up the dates that changed while it was off. Nothing is counted twice.

**Next:** [Turn on Ask](/ask/turn-on-ask/)
