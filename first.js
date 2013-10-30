var slice = Array.prototype.slice

module.exports = first

function first(array, n, guard) {
    if (array == null) {
        return void 0
    }

    return (n == null) || guard ? array[0] : slice.call(array, 0, n)
}
