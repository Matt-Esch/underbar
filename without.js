var difference = require("./difference.js")

var slice = Array.prototype.slice

module.exports = without

function without(array) {
    return difference(array, slice.call(arguments, 1))
}
