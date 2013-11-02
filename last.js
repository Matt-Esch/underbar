var slice = Array.prototype.slice

module.exports = last

function last(array, n, guard) {
    if (array == null) {
        return void 0
    }

    if ((n == null) || guard) {
        return array[array.length - 1]
    } else {
        return slice.call(array, Math.max(array.length - n, 0))
    }
}
