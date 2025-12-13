// Simple helper using your search.js's search() function if available
function normalizeInput(input, tmpl) {
  input = input.trim();
  if (!input) return '';

  if (typeof search === 'function') {
    return search(input, tmpl);
  }

  // fallback if search.js is broken / missing
  const hasProtocol = /^https?:\/\//i.test(input);
  const looksLikeDomain = /^[^ ]+\.[^ ]+/.test(input);

  if (!hasProtocol && looksLikeDomain) {
    return 'https://' + input;
  }

  return input;
}

window.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('uv-form');
  const addressEl = document.getElementById('uv-address');
  const engineEl = document.getElementById('uv-search-engine');
  const errorEl = document.getElementById('uv-error');
  const errorCodeEl = document.getElementById('uv-error-code');

  if (!form || !addressEl || !engineEl) return;

  const showError = (msg, code = '') => {
    if (errorEl) errorEl.textContent = msg || '';
    if (errorCodeEl) errorCodeEl.textContent = code || '';
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showError('', '');

    if (!window.__uv$config || !__uv$config.encodeUrl || !__uv$config.prefix) {
      showError('Ultraviolet config not loaded.');
      return;
    }

    const raw = addressEl.value;
    const tmpl = engineEl.value || 'https://www.duckduckgo.com/?q=%s';
    const url = normalizeInput(raw, tmpl);

    if (!url) {
      showError('Please enter something to visit.');
      return;
    }

    try {
      const encoded = __uv$config.encodeUrl(url);
      const proxied = __uv$config.prefix + encoded;
      window.location.href = proxied; // e.g. /@/uv/<encoded>
    } catch (err) {
      console.error(err);
      showError('Failed to encode URL.', String(err));
    }
  });
});
