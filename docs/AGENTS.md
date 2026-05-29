# AGENTS.md

This folder is for a memo app built with static HTML, CSS, and JavaScript.

## Project Goal
- Build a simple, fast memo app that lets a user create, view, edit, delete, and persist notes locally.
- Keep the experience lightweight and easy to use on desktop and mobile.

## Likely File Roles
- `index.html`: main app shell or landing screen
- `memo.html`: memo list, editor, or detail view
- `script.js`: app state, rendering, and interactions
- `style.css`: core visual styling
- `style1.css`: optional alternate styles or page-specific overrides

## Working Rules
- Prefer small, targeted changes over rewrites.
- Keep the UI logic simple and avoid unnecessary abstractions.
- Preserve existing file names and page structure unless the user asks for a redesign.
- Do not add external dependencies unless the task clearly requires them.
- Use ASCII by default unless the existing content already uses non-ASCII text.
- Do not remove unrelated user changes.

## App Behavior Guidelines
- Use local persistence for memo data, unless the user asks for a backend.
- Keep memo data structure explicit and easy to extend, for example `id`, `title`, `content`, `createdAt`, `updatedAt`.
- Make create, update, delete, and selection flows obvious in the UI.
- Handle empty states, long text, and no-data cases gracefully.
- If search, sort, or filter is added later, keep them predictable and local-first.

## UI Guidance
- Use semantic HTML where possible.
- Keep layout responsive for desktop and mobile.
- Make controls easy to scan and tap.
- Avoid clutter; prioritize readability and quick note access.
- If styles are split across `style.css` and `style1.css`, keep responsibilities clear and avoid duplicated rules.

## Validation
- After edits, verify the app still opens without console errors.
- Check that memo actions still work after reload if persistence is used.
- Confirm the layout remains usable on narrow screens.

## Notes for Future Agents
- Inspect the current files before making assumptions.
- Implement the simplest working interpretation first.
- Favor reversible changes and keep the data flow understandable.
