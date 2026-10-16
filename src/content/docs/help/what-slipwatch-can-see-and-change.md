---
# The screens this page shows. Readers never see this list. When a screen changes,
# search the help for its name to find the pages to update. Screenshot files use
# the same names, for example report-empty.png.
screens: []
title: "What Slipwatch can see and change"
# Written S19 part 10 (2026-10-16), from the manifest's scopes. Delete the next line when the page is ready to go public.
draft: true
---

When Slipwatch is installed, Atlassian lists the permissions it asks for. This is what Slipwatch does with each one, and what it never does.

## What it reads

- **Work items and their history.** Slipwatch reads the change history of work items in the projects it covers and keeps only the due-date changes, with the work item's key, summary, work type and parent.
- **People's names** ("View user profiles"). Slipwatch reads the display name of whoever moves a date or gives a reason, once, at that moment. It never reads email addresses, and it keeps no profile pictures.
- **Your Jira plan** and **permission rules.** Slipwatch reads which plan your site is on, and each project's permission rules, so it can say whether due dates are locked and which projects share the same rules.

## What it changes

- **Due dates, under Enforce only.** When someone changes a date through Slipwatch's reason box, Slipwatch writes the new date to the work item. It changes no other field.
- **Permission rules, only when an admin asks** ("Manage Jira global settings", and the permission to manage project settings). When a Jira admin selects **Lock due dates**, Slipwatch copies the project's permission rules if other projects share them, points the project at the copy and takes **Schedule Issues** away from people. Every step runs as that admin, and **Undo** puts it back. Slipwatch never changes a permission rule on its own. See [Set up Enforce](/enforce/set-up-enforce/).

## What it keeps

Everything Slipwatch keeps stays in your Jira site's Slipwatch installation, inside Atlassian's cloud. That includes each person's own layout of the report page.

Once a week, Slipwatch asks Atlassian whether any of the people it names have closed their account. If so, it replaces that person's name with "Former user" everywhere. See the [privacy policy](/privacy/).

**Next:** [Common questions](/help/common-questions/)
