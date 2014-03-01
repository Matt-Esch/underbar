var toString = Object.prototype.toString

module.exports = isBoolean

function isBoolean(obj) {
    return toString.apply(obj) === "[object Boolean]"
}
