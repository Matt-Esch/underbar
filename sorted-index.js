var lookupIterator = require("./lib/lookup-iterator.js")

module.exports = sortedIndex

function sortedIndex(array, obj, iterator, context) {
    iterator = lookupIterator(iterator)

    var value = iterator.call(context, obj)
    var low = 0, high = array.length

    while (low < high) {
        var mid = (low + high) >>> 1
        iterator.call(context, array[mid]) < value ? low = mid + 1 : high = mid
    }

    return low
}
