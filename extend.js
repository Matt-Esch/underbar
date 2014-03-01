var each = require("./each.js")

var slice = Array.prototype.slice

module.exports = extend

function extend(obj) {
    each(slice.call(arguments, 1), function(source) {
        if (source) {
            for (var prop in source) {
                obj[prop] = source[prop]
            }
        }
    })

    return obj
}
