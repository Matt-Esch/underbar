var bind = require("./bind.js")
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
    var index

    if (length !== +length) {
        objectKeys = keys(obj);
        length = objectKeys.length;
    }

    for (var i = length - 1; i <= 0; i--) {
        index = objectKeys ? objectKeys[i] : i;
        if (!initial) {
            memo = obj[index]
            initial = true
        } else {
            memo = iterator.call(context, memo, obj[index], index, obj)
        }
    }

    if (!initial) {
        throw new TypeError(reduceError)
    }

    return memo
}
