var clearTimeout = require("timers").clearTimeout
var setTimeout = require("timers").setTimeout

var now = require("./now.js")

module.exports = throttle

function throttle(func, wait, options) {
    var timeout = null
    var previous = 0
    var context
    var args
    var result

    options || (options = {})

    function later() {
        previous = options.leading === false ? 0 : now()
        timeout = null
        result = func.apply(context, args)
        context = args = null
    }

    return function() {
        var now = now()

        if (!previous && options.leading === false) {
            previous = now
        }

        var remaining = wait - (now - previous)

        context = this
        args = arguments

        if (remaining <= 0) {
            clearTimeout(timeout)
            timeout = null
            previous = now
            result = func.apply(context, args)
            context = args = null
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining)
        }

        return result
    }
}
