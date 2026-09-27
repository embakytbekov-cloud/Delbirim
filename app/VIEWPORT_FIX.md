# Compact Telegram room after PR #1

Baseline: `d6b833d` on `main`, the merge of PR #1. The screen is implemented by `public/index.html`, `public/client.js`, `public/style.css` and `public/viewport.js`. `src/room.ts` is the socket server. The build copies `public/` into `dist/client/`; it does not generate another layout.

## Reproduced cause

PR #1 bounded the outer viewport but still assigned the table `flex:0 0 min(520px,calc(100% - min(140px,30%)))`. At a Telegram height of 650px with a 34px bottom inset, the table occupied 476px. Only 140px remained for chat, including the 58px composer: just 82px for messages. Earlier tests accepted 60px of messages, so they missed the table being too tall.

This reproduces directly from the merged source. It does not depend on an old deployment or a missing SDK. The previous investigation of a different served build does not explain away this defect in PR #1.

## CSS and JavaScript cascade audit

| Source / selector | Rule | Effect in the constrained room |
| --- | --- | --- |
| Base `html,body` / `.game` | `min-height:100%` / `min-height:100dvh` | Overridden by the constrained-room selectors |
| Base `.table` | `height:62dvh;min-height:700px` | Overridden by final `.roomViewport .game>.table` |
| Mobile `.table`, width <=520px | `min-height:660px` | Also overridden, not the winning minimum after PR #1 |
| Base `.chatArea` | `min-height:38dvh` | Overridden by `min-height:0;flex:1 1 0` |
| Base `.feed` | `min-height:340px;max-height:48dvh` | Overridden by `min-height:0;max-height:none`; only the feed scrolls |
| Base/refined `.composer` | Sticky; 72px then 66px height; bottom env() padding | Final rule is a non-shrinking 58px row; game reserves safe-area once |
| Previous final room `.table` | Up to 520px, only 140px reserved for chat | Actual cause; replaced with `min(400px,60%)` |
| Mobile/VIP `.people`, `.person`, `.photo` | Important insets/sizes and short-screen media queries | Retained; existing `fitPlayers()` fits cards to available space |
| Repeated `.centerBottle`, `.spin`, VIP rules | Percentage/px offsets, important transforms and positions | Retained without changing roulette/button placement rules |
| Theme rules / inline theme styles | Backgrounds, stacking and some relative positioning | No inline table/chat height override; appearance code is unchanged |
| Player/created-room rendering | Inline percentage `left`/`top` | Retained byte-for-byte; no coordinate, roster or order changes |
| Roulette/gift JavaScript | Bottle rotation and effect/canvas dimensions | Unchanged; these do not size the table or feed |
| `viewport.js` custom properties | Room height, safe insets, player scale | Existing behavior retained; new `--room-top` follows viewport panning |

Legacy desktop rules remain for ordinary desktop browsing. The more-specific room selectors own the Telegram/mobile layout. No blanket important layer or redesign was added.

## Fix

- Cap the table at **400px and 60% of usable height**, whichever is smaller. At least 40% remains for chat; messages receive all space above the composer.
- Anchor `#app` to the visible viewport. Track `visualViewport.height` and `offsetTop`, including scroll events: iOS can pan on focus without another resize. Keep the composer above the bottom safe-area/keyboard.
- Preserve stable Telegram height, SDK fallbacks, safe-area handling, existing card fitting, coordinates/order, roulette, gifts and backgrounds.
- Update CSS/client/module URLs together to `20260927-compact-table`.

## Browser measurements

WebKit, iPhone 11 CSS viewport **414x896**, ten real-roster players, 60 messages, 34px bottom inset, main room (rounded CSS pixels):

| Telegram visible height | Table before -> after | Message list before -> after | Composer bottom |
| --- | --- | --- | --- |
| 896px | 520 -> 400px | 284 -> 404px | 862px |
| 780px | 520 -> 400px | 168 -> 288px | 746px |
| 650px | 476 -> 370px | 82 -> 188px | 616px |

Screenshots of these cases are visually inspected. Main/VIP tests assert all ten cards, roulette and Spin fit inside the table; Spin is hit-testable; all coordinates are unchanged; chat begins at the table bottom; messages scroll without moving the page/composer. A keyboard case uses a 360px visual viewport panned down 100px, then 130px, checks input placement/message sending and restoration. External media/socket traffic is isolated, so no production game is changed. The original tests still cover the eleven-seat demo.

## Checks

From `app/`:

```sh
bun install --frozen-lockfile
bunx playwright install webkit
bun run test:viewport
bun run build
bun run test tests/room.test.ts tests/state.test.ts tests/meta.test.ts
```

Set `VIEWPORT_SCREENSHOTS` to an output directory to save the iPhone screenshots. These are WebKit checks with simulated Telegram events and keyboard geometry, not a physical iPhone Telegram session.

The unfiltered test command also discovers vendored packages. The previous run found missing React/Higgsfield dependencies and DOM APIs in the Workers environment. Those packages and runner configuration are unchanged; the application's three server-test files are verified separately.

## Delivery

This change is prepared as a new commit and PR against main. **No deployment is performed.** When the owner later publishes, verify the actual bot URL loads `20260927-compact-table` resources, then repeat the checks on a real iPhone.
