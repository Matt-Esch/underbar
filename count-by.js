var group = require("./lib/group.js")
var has = require("./has.js")

module.exports = group(countBy)

function countBy(result, key) {
    has(result, key) ? result[key]++ : result[key] = 1
}
