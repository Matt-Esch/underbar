var each = require("./each.js")

var nativeFilter = Array.prototype.filter

module.exports = filter

function filter(obj, iterator, context) {
    var results = []
    if (obj == null) {
        return results
    }

    if (nativeFilter && obj.filter === nativeFilter) {
        return obj.filter(iterator, context)
    }

    each(obj, function(value, index, list) {
        if (iterator.call(context, value, index, list)) {
            results.push(value)
        }
    })

    return results
}
