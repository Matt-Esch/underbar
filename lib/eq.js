var has = require("../has.js")
var isFunction = require("../is-function.js")

var toString = Object.prototype.toString

module.exports = eq

function eq(a, b, aStack, bStack) {

    if (a === b) {
        return a !== 0 || 1 / a == 1 / b
    }

    if (a == null || b == null) {
        return a === b
    }

    /* TODO resolve this issue with underscore reference
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    */

    var className = toString.call(a)

    if (className != toString.call(b)) {
        return false
    }

    switch (className) {
        case "[object String]":
            return a == String(b)
        case "[object Number]":
            return a != +a ? b != +b : (a == 0 ? 1 / a == 1 / b : a == +b)
        case "[object Date]":
        case "[object Boolean]":
            return +a == +b
        case "[object RegExp]":
            return a.source == b.source &&
                   a.global == b.global &&
                   a.multiline == b.multiline &&
                   a.ignoreCase == b.ignoreCase
    }

    if (typeof a != "object" || typeof b != "object") {
        return false
    }

    var length = aStack.length

    while (length--) {
        if (aStack[length] == a) {
            return bStack[length] == b
        }
    }

    var aCtor = a.constructor
    var bCtor = b.constructor

    if (aCtor !== bCtor && !(
            isFunction(aCtor) &&
            (aCtor instanceof aCtor) &&
            isFunction(bCtor) &&
            (bCtor instanceof bCtor)
        ) && ("constructor" in a && "constructor" in b)) {
        return false
    }

    aStack.push(a)
    bStack.push(b)

    var size = 0
    var result = true

    if (className == "[object Array]") {
        size = a.length
        result = size == b.length

        if (result) {
            while (size--) {
                if (!(result = eq(a[size], b[size], aStack, bStack))) {
                    break
                }
            }
        }
    } else {
      // Deep compare objects.
        for (var key in a) {
            if (has(a, key)) {
                size++

                if (!(result = has(b, key) &&
                        eq(a[key], b[key], aStack, bStack))) {
                    break
                }
            }
        }

        if (result) {
            for (key in b) {
                if (has(b, key) && !(size--)) {
                    break
                }
            }

            result = !size
        }
    }

    aStack.pop()
    bStack.pop()
    return result
}
