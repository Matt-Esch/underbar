var slice = Array.prototype.slice

module.exports = rest

function rest(array, n, guard) {
    return slice.call(array, (n == null) || guard ? 1 : n)
}
