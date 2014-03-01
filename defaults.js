var each = require("./each.js")

var slice = Array.prototype.slice

module.exports = defaults

function defaults(obj) {
    each(slice.call(arguments, 1), function(source) {
        if (source) {
            for (var prop in source) {
                if (obj[prop] === void 0) {
                    obj[prop] = source[prop]
                }
            }
        }
    })

    return obj
}
