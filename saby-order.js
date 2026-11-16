(() => {
  'use strict';
  const raw = window.MACHETE_SABY?.orderUrl;
  let url;
  try {
    if (typeof raw !== 'string' || !raw.trim()) return;
    url = new URL(raw.trim());
    if (url.protocol !== 'https:' || url.username || url.password) return;
  } catch { return; }
  document.querySelectorAll('[data-order-link]').forEach(link => {
    link.href = url.href;
    link.rel = 'noopener';
  });
  const pending = document.querySelector('[data-order-pending]');
  const ready = document.querySelector('[data-order-ready]');
  if (pending && ready) {
    pending.hidden = true;
    ready.hidden = false;
  }
})();
