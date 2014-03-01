var contains = require("./contains.js")
var filter = require("./filter.js")
var flatten = require("./flatten.js")

var slice = Array.prototype.slice

module.exports = difference

function difference(array) {
    var rest = flatten(slice.call(arguments, 1), true, true, [])
    return filter(array, function (value) {
        return !contains(rest, value)
    })
}
