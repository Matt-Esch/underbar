var breaker = require("./breaker.js")
var each = require("./each.js")
var identity = require("./identity.js")

var nativeSome = Array.prototype.some

module.exports = some

function some(obj, iterator, context) {
    iterator || (iterator = identity)
    var result = false
    if (obj == null) {
        return result
    }

    if (nativeSome && obj.some === nativeSome) {
        return obj.some(iterator, context)
    }

    each(obj, function(value, index, list) {
        if (result || (result = iterator.call(context, value, index, list))) {
            return breaker
        }
    })

    return !!result
}
