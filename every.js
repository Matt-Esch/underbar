var breaker = require("./breaker.js")
var each = require("./each.js")
var identity = require("./identity.js")

var nativeEvery = Array.prototype.every

module.exports = every

function every(obj, predicate, context) {
    var result = true

    if (obj == null) {
        return result
    }

    predicate = predicate || (predicate = identity)

    if (nativeEvery && obj.every === nativeEvery) {
        return obj.every(predicate, context)
    }

    each(obj, function(value, index, list) {
        if (!(result = result && predicate.call(context, value, index, list))) {
            return breaker
        }
    })

    return !!result
}
