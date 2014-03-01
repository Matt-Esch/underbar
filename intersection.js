var contains = require("./filter.js")
var every = require("./every.js")
var filter = require("./filter.js")
var uniq = require("./uniq.js")

var slice = Array.prototype.slice

module.exports = intersection

function intersection(array) {
    var rest = slice.call(arguments, 1)

    return filter(uniq(array), function(item) {
        return every(rest, function(other) {
            return contains(other, item)
        })
    })
}
