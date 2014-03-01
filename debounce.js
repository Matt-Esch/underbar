var setTimeout = require("timers").setTimeout

var now = require("./now.js")

module.exports = debounce

function debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result

    function later() {
        var last = now() - timestamp
        if (last < wait) {
            timeout = setTimeout(later, wait - last)
        } else {
            timeout = null
            if (!immediate) {
              result = func.apply(context, args)
              context = args = null
            }
        }
    }

    return function() {
        context = this
        args = arguments
        timestamp = now()
        var callNow = immediate && !timeout

        if (!timeout) {
            timeout = setTimeout(later, wait)
        }

        if (callNow) {
            result = func.apply(context, args)
            context = args = null
        }

        return result
    }
}
