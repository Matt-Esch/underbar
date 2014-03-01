var contains = require("./contains.js")

var ArrayProto = Array.prototype
var concat = ArrayProto.concat
var slice = ArrayProto.slice

module.exports = omit

function omit(obj) {
    var copy = {}
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1))

    for (var key in obj) {
        if (!contains(keys, key)) {
            copy[key] = obj[key]
        }
    }

    return copy
}
