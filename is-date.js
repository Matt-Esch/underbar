var toString = Object.prototype.toString

module.exports = isDate

function isDate(obj) {
    return toString.apply(obj) === "[object Date]"
}
