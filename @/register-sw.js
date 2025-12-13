async function registerSW() {
  // Only run on browsers that support SW
  if (!('serviceWorker' in navigator)) {
    console.warn('[UV] Service workers not supported');
    return;
  }

  // Require HTTPS unless localhost
  const swAllowedHostnames = ['localhost', '127.0.0.1'];
  if (
    location.protocol !== 'https:' &&
    !swAllowedHostnames.includes(location.hostname)
  ) {
    console.warn('[UV] Service workers require HTTPS');
    return;
  }

  try {
    // __uv$config is defined in uv.config.js
    const reg = await navigator.serviceWorker.register(__uv$config.sw, {
      scope: __uv$config.prefix,
    });

    console.log(
      '[UV] Service worker registered at',
      __uv$config.sw,
      'with scope',
      __uv$config.prefix
    );

    const statusEl = document.getElementById('uv-status');
    if (statusEl) {
      statusEl.textContent = 'Proxy ready.';
      statusEl.classList.add('ok');
    }
  } catch (err) {
    console.error('[UV] Service worker registration failed:', err);
    const statusEl = document.getElementById('uv-status');
    if (statusEl) {
      statusEl.textContent = 'Service worker failed to register.';
      statusEl.classList.add('err');
    }
  }
}

// run on load
registerSW().catch(console.error);
