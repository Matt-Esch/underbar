var contains = require("./contains.js")
var filter = require("./filter.js")

var ArrayProto = Array.prototype
var concat = ArrayProto.concat
var slice = ArrayProto.slice

module.exports = difference

function difference(array) {
    var rest = concat.apply(ArrayProto, slice.call(arguments, 1))
    return filter(array, function (value) {
        return !contains(rest, value)
    })
}
