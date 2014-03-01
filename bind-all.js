var bind = require("./bind.js")
var each = require("./each.js")

var slice = Array.prototype.slice

module.exports = bindAll

function bindAll(obj) {
    var funcs = slice.call(arguments, 1)

    if (funcs.length === 0) {
        throw new Error("bindAll must be passed function names")
    }

    each(funcs, function (f) {
        obj[f] = bind(obj[f], obj)
    })

    return obj
}
