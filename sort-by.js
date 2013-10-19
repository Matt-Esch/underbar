var identity = require("./identity.js")
var isFunction = require("./is-function.js")
var map = require("./map.js")
var pluck = require("./pluck.js")

module.exports = sortBy

function sortBy(obj, value, context) {
    var iterator = value == null ? identity : lookupIterator(value)

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
        return left.index - right.index;
    }), "value")
}

function lookupIterator(value) {
    return isFunction(value) ? value : function (obj) {
        return obj[value]
    }
}
