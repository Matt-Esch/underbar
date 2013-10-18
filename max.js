var each = require("./each.js")
var isArray = require("./is-array.js")
var isEmpty = require("./is-empty.js")

var nativeMax = Math.max

module.exports = max

function max(obj, iterator, context) {
    if (!iterator && isArray(obj) && obj[0] === +obj[0] && obj.length < 65535) {
        return nativeMax.apply(Math, obj)
    }

    if (!iterator && isEmpty(obj)) {
        return -Infinity
    }

    var result = {
        computed: -Infinity,
        value: -Infinity
    }

    each(obj, function (value, index, list) {
        var computed = iterator ?
            iterator.call(context, value, index, list) :
            value

        computed > result.computed && (result = {
            value: value,
            computed: computed
        })

        return result.value
    })
}