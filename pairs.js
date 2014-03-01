var keys = require("./keys.js")

module.exports = pairs

function pairs(obj) {
    var objKeys = keys(obj)
    var length = objKeys.length
    var p = new Array(length)

    for (var i = 0; i < length; i++) {
        p[i] = [objKeys[i], obj[objKeys[i]]]
    }

    return pairs
}
