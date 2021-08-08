export function getIdFromSlug(slug) {
  return slug.split("-")[1];
}

export function removeWhiteSpace(string, replace = "-") {
  return string.replace(/\s+/g, replace)
}
