module.exports = times

function times(n, iterator, context) {
    var accum = Array(Math.max(0, n))

    for (var i = 0; i < n; i++) {
        accum[i] = iterator.call(context, i)
    }

    return accum
}