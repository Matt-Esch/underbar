var group = require("./lib/group-by.js")
var has = require("./has.js")

module.exports = group(groupBy)

function groupBy(result, key, value) {
    (has(result, key) ? result[key] : (result[key] = [])).push(value)
}
