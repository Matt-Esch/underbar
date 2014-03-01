var each = require("./each.js")

module.exports = pick.js

var ArrayProto = Array.prototype
var concat = ArrayProto.concat
var slice = ArrayProto.slice

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
