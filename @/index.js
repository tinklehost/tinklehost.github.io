// /@/index.js

window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("uv-form");
  const address = document.getElementById("uv-address");
  const engine = document.getElementById("uv-search-engine");
  const errEl = document.getElementById("uv-error");
  const errCodeEl = document.getElementById("uv-error-code");

  function showError(msg, code = "") {
    if (errEl) errEl.textContent = msg;
    if (errCodeEl) errCodeEl.textContent = code;
  }

  if (!form || !address) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    showError("");

    if (!window.__uv$config) {
      showError("Ultraviolet config missing.");
      return;
    }

    const raw = address.value.trim();
    if (!raw) {
      showError("Enter a URL or search term.");
      return;
    }

    const template =
      (engine && engine.value) ||
      "https://www.duckduckgo.com/?q=%s";

    // Uses search.js function below
    const targetUrl = search(raw, template);

    try {
      const encoded = __uv$config.encodeUrl(targetUrl);
      const finalUrl = __uv$config.prefix + encoded;
      window.location.href = finalUrl;
    } catch (err) {
      console.error(err);
      showError("Encoding failed.", String(err));
    }
  });
});
