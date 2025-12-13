// /@/register-sw.js

async function registerSW() {
  // Require SW support
  if (!("serviceWorker" in navigator)) {
    console.warn("[UV] Service workers not supported");
    return;
  }

  // Require HTTPS for GitHub Pages
  const allowedHosts = ["localhost", "127.0.0.1"];
  if (
    location.protocol !== "https:" &&
    !allowedHosts.includes(location.hostname)
  ) {
    console.warn("[UV] HTTPS required for service workers");
    return;
  }

  try {
    // Use paths from uv.config.js
    const swUrl = __uv$config.sw;      // '/@/uv/uv.sw.js'
    const scope = __uv$config.prefix;  // '/@/uv/'

    const reg = await navigator.serviceWorker.register(swUrl, { scope });

    console.log("[UV] SW registered:", swUrl, "scope:", scope);
  } catch (err) {
    console.error("[UV] Service worker registration failed:", err);
  }
}

registerSW().catch(console.error);
