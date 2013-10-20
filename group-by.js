var has = require("./has.js")

module.exports = groupBy

function groupBy(result, key, value) {
    (has(result, key) ? result[key] : (result[key] = [])).push(value)
}
