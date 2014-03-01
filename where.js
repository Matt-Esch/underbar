var filter = require("./filter.js")
var matches = require("./matches.js")

module.exports = where

function where(obj, attrs) {
    return filter(obj, matches(attrs))
}
