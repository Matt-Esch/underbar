var each = require("./each.js")
var isArray = require("./is-array.js")
var isEmpty = require("./is-empty.js")

var nativeMin = Math.min

module.exports = min

function min(obj, iterator, context) {
    if (!iterator && isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
        return nativeMin.apply(Math, obj)
    }

    if (!iterator && isEmpty(obj)) {
        return -Infinity
    }

    var result = -Infinity
    var lastComputed = -Infinity

    each(obj, function (value, index, list) {
        var computed = iterator ?
            iterator.call(context, value, index, list) :
            value

        if (computed < lastComputed) {
            result = value
            lastComputed = computed
        }

        return result
    })
}
