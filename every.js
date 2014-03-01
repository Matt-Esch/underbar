var breaker = require("./breaker.js")
var each = require("./each.js")
var identity = require("./identity.js")

var nativeEvery = Array.prototype.every

module.exports = every

function every(obj, iterator, context) {
    var result = true
    if (obj == null) {
        return result
    }

    iterator || (iterator = identity)

    if (nativeEvery && obj.every === nativeEvery) {
        return obj.every(iterator, context)
    }

    each(obj, function(value, index, list) {
        if (!(result = result && iterator.call(context, value, index, list))) {
            return breaker
        }
    })

    return !!result
}
