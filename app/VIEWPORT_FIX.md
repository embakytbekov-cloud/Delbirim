# Telegram room viewport

The room UI is `public/client.js` (markup and interactions), `public/style.css`
(layout), and `public/index.html` (entry point). `src/room.ts` is the socket/game
server, not the room screen. `scripts/build.mjs` copies `public/` to `dist/client/`;
the hosting platform serves those built assets before the Worker.

## Why the previous changes were not visible

The GitHub `main` baseline is `e4e8074` (`Fix Telegram iPhone viewport`). During
this investigation, the public origin referenced by the client,
`https://kiss-meet-club.higgsfield.app/`, still served HTML referencing
`?v=20260921-created-room`, without the Telegram SDK. Its served client lacked
`initTelegramViewport`, and its CSS retained `min-height:520px!important` on the
table, rather than `height:var(--tg-vh,100dvh)` on the room.

That origin was therefore serving an older build, not the GitHub viewport fix.
If the bot points to a different URL, inspect that URL separately. A GitHub push
does not establish that a Higgsfield deployment has occurred. This repository
has no GitHub Actions deployment workflow; `wrangler.jsonc` is explicitly a local
development configuration with a placeholder name. Do not deploy that placeholder
as a substitute for the existing application's hosting configuration.

## Changes

- `public/viewport.js` uses Telegram's stable height, with current height as an
  older-SDK fallback, and clamps to the visual viewport for keyboard changes.
  It listens for viewport, orientation, and both safe-area events. Device and
  Telegram content insets are reserved once; browsers fall back to CSS `env()`.
- The entire `html → body → #app → .game → .chatArea → .feed` chain is bounded.
  Only messages scroll; the composer has its own non-shrinking row. A 16px input
  font prevents iOS focus zoom. The same contract covers landscape Telegram.
- The table grows up to 520px while reserving chat space. Short screens reduce
  player card scale while retaining all existing seat coordinates, roster order,
  roulette placement, themes, and game logic.
- The SDK loads in the head before application code. Asset version URLs change
  together, including the new viewport module, to avoid reusing older cached CSS
  or JavaScript after deployment.

## Verification

From `app/`:

```sh
bun install --frozen-lockfile
bunx playwright install webkit
bun run test:viewport
bun run build
bun run test tests/room.test.ts tests/state.test.ts tests/meta.test.ts
```

Browser tests run the real HTML/CSS/client in WebKit, with deterministic Telegram
events, safe insets and keyboard viewport changes. Only external assets and the
production socket are replaced. They cover main/VIP rooms, message scrolling,
chat sending, settings, several phone sizes, rotation, SDK fallback and desktop
layout. These are browser regression checks, not a physical iPhone Telegram run.

The unfiltered `bun run test` also discovers vendored `packages/` tests. In this
checkout those suites fail on missing React/Higgsfield dependencies and missing
DOM APIs in the Workers test environment. The application's three test files
are checked separately; unrelated packages and runner configuration are unchanged.

## Publishing the fix

Build and publish this revision to the hosting project used by the Telegram bot.
Both `dist/client/` and `dist/worker/index.js` are the existing build outputs.
Verify that the actual bot URL serves `?v=20260927-room-fit` for CSS/client and
that `viewport.js?v=20260927-room-fit` loads successfully. Then reopen the Mini
App on an iPhone and check the home indicator, keyboard open/close, rotation,
long chat scrolling, player actions, gifts and media controls.
