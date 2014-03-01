var find = require("./find.js")
var matches = require("./matches.js")

module.exports = findWhere

function findWhere(obj, attrs) {
    return find(obj, matches(attrs))
}
