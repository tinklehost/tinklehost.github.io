// /@/search.js

function search(input, template) {
  input = input.trim();

  // Full URL?
  try {
    return new URL(input).toString();
  } catch (err) {}

  // URL without protocol?
  try {
    const withProto = new URL("http://" + input);
    if (withProto.hostname.includes(".")) {
      return withProto.toString();
    }
  } catch (err) {}

  // Otherwise treat as search query
  return template.replace("%s", encodeURIComponent(input));
}
