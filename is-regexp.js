var toString = Object.prototype.toString

module.exports = isRegExp

function isRegExp(obj) {
    return toString.apply(obj) === "[object RegExp]"
}
