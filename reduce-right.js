var bind = require("./bind.js")
var each = require("./each.js")
var keys = require("./keys.js")

var nativeReduceRight = Array.prototype.reduceRight
var reduceError = "Reduce of empty array with no initial value"

module.exports = reduceRight


function reduceRight(obj, iterator, memo, context) {
    var initial = arguments.length > 2

    if (obj == null) {
      obj = []
    }

    if (nativeReduceRight && obj.reduceRight === nativeReduceRight) {
        if (context) {
            iterator = bind(iterator, context)
        }

        return initial ?
            obj.reduceRight(iterator, memo) :
            obj.reduceRight(iterator)
    }

    var length = obj.length
    var objectKeys

    if (length !== +length) {
        objectKeys = keys(obj);
        length = objectKeys.length;
    }

    each(obj, function(value, index, list) {
        index = objectKeys ? objectKeys[--length] : --length
        if (!initial) {
            memo = obj[index]
            initial = true
        } else {
            memo = iterator.call(context, memo, obj[index], index, list)
        }
    })

    if (!initial) {
        throw new TypeError(reduceError)
    }

    return memo
}
