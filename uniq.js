var contains = require("./contains.js")
var isFunction = require("./is-function.js")

module.exports = uniq

function uniq(array, isSorted, iterator, context) {
    if (array == null) {
        return []
    }

    if (isFunction(isSorted)) {
        context = iterator
        iterator = isSorted
        isSorted = false
    }

    var result = []
    var seen = []

    for (var i = 0, length = array.length; i < length; i++) {
        var value = array[i]

        if (iterator) {
            value = iterator.call(context, value, i, array)
        }

        if (isSorted ? (!i || seen !== value) : !contains(seen, value)) {
            if (isSorted) {
                seen = value
            } else {
                seen.push(value)
            }

            result.push(array[i])
        }
    }

    return result
}
