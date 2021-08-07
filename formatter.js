exports.format = function (msgs) {
  const results = {}
  for (const [id, msg] of Object.entries(msgs)) {
    results[id] = msg.defaultMessage ?? 'Null'
  }
  return results
}

//ur >> https://formatjs.io/docs/getting-started/message-extraction/

//  formatjs extract "src/**/*.{ts,tsx,js}" "--out-file" "src/lang/en.json" "--id-interpolation-pattern" "'[sha512:contenthash:base64:6]'" "--format" "formatter.js"