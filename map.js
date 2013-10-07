var each = require("./each.js")

var nativeMap = Array.prototype.map
module.exports = map

function map(obj, iterator, context) {
    var results = []

    if (obj == null) {
        return results
    }

    if (nativeMap && obj.map === nativeMap) {
        return obj.map(iterator, context)
    }

    each(obj, function(value, index, list) {
        results.push(iterator.call(context, value, index, list))
    })

    return results
}
