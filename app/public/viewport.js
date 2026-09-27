// Keep the room inside Telegram's viewport; let only its message list scroll.
export function initRoomViewport() {
  const root = document.documentElement;
  const tg = window.Telegram?.WebApp;
  const inTelegram = !!tg?.platform && tg.platform !== 'unknown';
  const visual = window.visualViewport;
  const mobile = window.matchMedia('(max-width: 520px), (max-height: 520px) and (pointer: coarse)');
  const people = document.querySelector('.people');
  let frame = 0;
  const positive = value => Number.isFinite(value) && value > 0;

  function fitPlayers() {
    const player = people?.querySelector('.person');
    if (!player || !root.classList.contains('roomViewport')) return;
    // Preserve all seat coordinates. Reduce card size only when adjacent seats
    // would overlap in a short viewport (including the on-screen keyboard).
    const scale = Math.min(1, people.clientHeight * .24 / player.offsetHeight,
      people.clientWidth * .18 / player.offsetWidth);
    people.style.setProperty('--room-player-scale', String(Math.max(0, scale)));
  }

  function refresh() {
    frame = 0;
    root.classList.toggle('roomViewport', inTelegram || mobile.matches);
    const stable = inTelegram && (positive(tg.viewportStableHeight) ? tg.viewportStableHeight : tg.viewportHeight);
    let height = positive(stable) ? stable : window.innerHeight;
    // iOS can resize the visual viewport for the keyboard before Telegram sends
    // a stable update. Do not resize the layout for pinch-to-zoom gestures.
    if (visual && positive(visual.height) && Math.abs(visual.scale - 1) < .01) {
      height = Math.min(height, visual.height);
    }
    root.style.setProperty('--room-height', `${height}px`);
    for (const edge of ['top', 'right', 'bottom', 'left']) {
      const device = inTelegram ? tg.safeAreaInset?.[edge] : undefined;
      const content = inTelegram ? tg.contentSafeAreaInset?.[edge] : undefined;
      // Device and Telegram chrome are separate insets. env() is the fallback
      // for browsers/older clients, not an extra inset to count a second time.
      if (Number.isFinite(device)) {
        root.style.setProperty(`--room-safe-${edge}`, `${Math.max(0,device) + Math.max(0,content || 0)}px`);
      } else {
        root.style.removeProperty(`--room-safe-${edge}`);
      }
    }
    fitPlayers();
  }
  function schedule() {
    if (!frame) frame = requestAnimationFrame(refresh);
  }

  if (inTelegram) {
    tg.ready();
    tg.expand();
    for (const event of ['viewportChanged','safeAreaChanged','contentSafeAreaChanged']) {
      tg.onEvent(event, schedule);
    }
  }
  window.addEventListener('resize', schedule);
  window.addEventListener('orientationchange', schedule);
  visual?.addEventListener('resize', schedule);
  mobile.addEventListener('change', schedule);
  if (people) {
    new ResizeObserver(fitPlayers).observe(people);
    new MutationObserver(fitPlayers).observe(people, {childList:true});
  }
  refresh();
}
