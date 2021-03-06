var each = require("./each.js")

var ArrayProto = Array.prototype
var concat = ArrayProto.concat
var slice = ArrayProto.slice

module.exports = pick

function pick(obj) {
    var copy = {}
    var keys = concat.apply(ArrayProto, slice.call(arguments, 1))

    each(keys, function(key) {
        if (key in obj) {
            copy[key] = obj[key]
        }
    })

    return copy
}
