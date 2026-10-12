# How the help pages are written

Read this before writing or changing any help page. It comes from Joanna's review of the first
page on 2026-10-12. A page that breaks any rule here goes back before she sees it.

## What goes on a page

1. **Start with the task.** Title, then "Before you begin" only if something can stop the reader,
   then numbered steps. No "For:", no intro sentence, no "Use this when" scene. If the reader needs
   to know why a step exists, say it in that step.
2. **Only what the reader can see or do.** Never our demo project's numbers as if the reader will
   see them. Wrong: "You'll see: History read: 72 work items." Right: "When it's done, the message
   says **History read**."
3. **Check the real starting point first.** Before writing a step, check in the code or the app what
   a new customer actually has. Example: every project is watched from install, so "Get your first
   report" needs no settings step, but it does need what to do if an admin switched the project off.
4. **Exact on-screen words in bold.** Copy them from the screen, never from memory.
5. **Jira's current words:** work item (not issue), work type, space, Space settings.
6. **Every sentence must earn its place.** Ask: would a customer miss it if it were cut? If not, cut
   it.
7. **Steps follow the order the customer meets things.** Never show a finished result before the
   step that produces it (2026-10-13: the full report was shown in step 1, before reading history).
8. **Problems go to Common questions, not to the top of a task page.** The step where a reader
   could hit one links there in one line. Notes (`:::note`) hold text only, never a picture.
9. **The title must match what the page delivers.** "Get your first report" ends with the report and
   what its columns mean, not just with a button pressed.

## How it is written

- Never "problem", "issue" or "error" in a page title or menu (Joanna, 2026-10-13). The help page for
  questions is **Common questions**; its list of links at the top must match its questions.
- No long dashes. Use a colon, a short dash or a new sentence.
- Short sentences, everyday words. Contractions are fine (don't, can't, it's).
- Talk to the reader ("you"). No sales lines, no "simply", no "just".
- A limit that can stop someone goes before step 1, not at the end.

## Screenshots

- PNG at **double size**: captured with the page zoomed to 200%, and placed with an `<img>` tag
  whose width and height are half the file's. Zoomed browsers and high-resolution laptops then
  stay sharp, and a click shows it full size (`public/zoom.js`). A picture saved at normal size
  goes blurry the moment anyone's browser is zoomed (found 2026-10-12: Joanna's preview tab was at
  about 130%).
- At most 784 pixels wide as shown (1568 in the file), so a full report table fits without its
  dates wrapping. Never enlarge a picture.
- Crop tight to the part the step is about. Check the edges for stray lines from Jira's own bars.
- Stored in `public/screenshots`, named after the screen (`report-history-read.png`), and placed
  with an `<img>` tag carrying its exact width and height.
- From the demo project FLT. **Never a real person's name**, Joanna's included: before capturing,
  replace the names on the page with made-up ones (a few different people, so it looks like a real
  team), and hide the "Dev" label next to the Slipwatch tab. Customers never see that label.
- A step that says "select X" shows where X is, with a rounded box around it (colour #D6336C,
  6 pixels wide in the double-size file). Seen on HeroCoders' help.
- Don't repeat the same part of the screen in two pictures. Crop each one to what its step adds.
- The box needs air: at least 16 pixels (in the double-size file) between the box and what it
  frames, and the same between the box and the picture's edge. Add a white margin if the crop is
  too tight.
- Cut a table between two rows, never through one.
- Heading sizes come from `src/styles/help.css`. Don't change them page by page.

## Before showing a page to Joanna

1. Read it as a customer who has never seen FLT or this project.
2. Check every claim against the app on screen or in the code.
3. Run the rules above, one by one.
4. Render the page and check each screenshot shows at its real size.
5. Click each screenshot: it must grow from its place to the middle of the screen, and close on a
   click or Esc.
6. Give Joanna the page's link every time a page changes (2026-10-13).
