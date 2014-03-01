var toString = Object.prototype.toString

module.exports = isNumber

function isNumber(obj) {
    return toString.apply(obj) === "[object Number]"
}
