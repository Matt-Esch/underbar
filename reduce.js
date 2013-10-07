var bind = require("./bind.js")
var each = require("./each.js")

var nativeReduce = Array.prototype.reduce
var reduceError = "Reduce of empty array with no initial value"

module.exports = reduce

function reduce(obj, iterator, memo, context) {
    var initial = arguments.length > 2
    
    if (obj == null) {
        obj = []
    }

    if (nativeReduce && obj.reduce === nativeReduce) {
        if (context) {
            iterator = bind(iterator, context)
        }

        return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator)
    }

    each(obj, function(value, index, list) {
        if (!initial) {
            memo = value
            initial = true
        } else {
            memo = iterator.call(context, memo, value, index, list)
        }
    })

    if (!initial) {
        throw new TypeError(reduceError)
    }

    return memo
}
