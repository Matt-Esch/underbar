var nativeLastIndexOf = Array.prototype.lastIndexOf

module.exports = lastIndexOf

function lastIndexOf(array, item, from) {
    if (array == null) {
        return -1
    }

    var hasIndex = from != null

    if (nativeLastIndexOf && array.lastIndexOf === nativeLastIndexOf) {
        return hasIndex ?
            array.lastIndexOf(item, from) :
            array.lastIndexOf(item)
    }

    var i = (hasIndex ? from : array.length)

    while (i--) {
        if (array[i] === item) {
            return i
        }
    }

    return -1;
}
