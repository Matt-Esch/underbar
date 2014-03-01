var contains = require("./contains.js")
var each = require("./each.js")
var isFunction = require("./is-function.js")
var map = require("./map.js")

module.exports = uniq

function uniq(array, isSorted, iterator, context) {
    if (isFunction(isSorted)) {
        context = iterator
        iterator = isSorted
        isSorted = false
    }

    var initial = iterator ? map(array, iterator, context) : array
    var results = []
    var seen = []

    each(initial, function(value, index) {
        var unique

        if (isSorted) {
            unique = !index || seen[seen.length - 1] !== value
        } else {
            unique = !contains(seen, value)
        }

        if (unique) {
            seen.push(value)
            results.push(array[index])
        }
    })

    return results;
}
