var map = require("./map.js")
var pluck = require("./pluck.js")

var lookupIterator = require("./lib/lookup-iterator.js")

module.exports = sortBy

function sortBy(obj, iterator, context) {
    iterator = lookupIterator(iterator)

    return pluck(map(obj, function(value, index, list) {
        return {
            value: value,
            index: index,
            criteria: iterator.call(context, value, index, list)
        }
    }).sort(function (left, right) {
        var a = left.criteria
        var b = right.criteria

        if (a !== b) {
            if (a > b || a === void 0) {
                return 1
            }

            if (a < b || b === void 0) {
                return -1
            }
        }
        return left.index - right.index
    }), "value")
}
