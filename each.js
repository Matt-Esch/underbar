var keys = require("./keys.js")
var breaker = require("./breaker.js")

var nativeForEach = Array.prototype.forEach
module.exports = each

function each(obj, iterator, context) {
    var i, length

    if (typeof obj !== "object") {
        return
    }

    if (nativeForEach && obj.forEach === nativeForEach) {
        obj.forEach(iterator, context)
    } else if (obj.length === +obj.length) {
        for (i = 0, length = obj.length; i < length; i++) {
            if (iterator.call(context, obj[i], i, obj) === breaker) {
                return
            }
        }
    } else {
        var objectKeys = keys(obj)
        for (i = 0, length = objectKeys.length; i < length; i++) {
            if (iterator.call(context, obj[keys[i]], keys[i], obj)) {
                return
            }
        }
    }
}