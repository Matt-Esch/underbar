var setTimeout = require("timers").setTimeout

var slice = Array.prototype.slice

module.exports = delay

function delay(func, wait) {
    var args = slice.call(arguments, 2)
    return setTimeout(function () {
        return func.apply(null, args)
    }, wait)
}
