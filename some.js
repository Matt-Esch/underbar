var breaker = require("./breaker.js")
var each = require("./each.js")
var identity = require("./identity.js")

var nativeSome = Array.prototype.some

module.exports = some

function some(obj, predicate, context) {
    var result = false

    if (obj == null) {
        return result
    }

    predicate || (predicate = identity)

    if (nativeSome && obj.some === nativeSome) {
        return obj.some(predicate, context)
    }

    each(obj, function(value, index, list) {
        if (result || (result = predicate.call(context, value, index, list))) {
            return breaker
        }
    })

    return !!result
}
