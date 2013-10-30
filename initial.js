var slice = Array.prototype.slice

module.exports = initial

function initial(array, n, guard) {
    return slice.call(array, 0, array.length - ((n == null) || guard ? 1 : n))
}
