module.exports = range

function range(start, stop, step) {
    if (arguments.length <= 1) {
        stop = start || 0
        start = 0
    }

    step = arguments[2] || 1

    var length = Math.max(Math.ceil((stop - start) / step), 0)
    var idx = 0
    var r = new Array(length)

    while (idx < length) {
        r[idx++] = start
        start += step
    }

    return range
}
