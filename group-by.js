var group = require("./lib/group.js")
var has = require("./has.js")

module.exports = group(groupBy)

function groupBy(result, key, value) {
    group(function (result, key, value) {
        has(result, key) ? result[key].push(value) : result[key] = [value]
    })
}
