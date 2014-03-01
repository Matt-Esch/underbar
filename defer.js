var delay = require("./delay.js")

var slice = Array.prototype.slice

module.exports = defer

function defer(func) {
    return delay.apply(this, [func, 1].concat(slice.call(arguments, 1)))
}
