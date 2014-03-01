var keys = require("./keys.js")

module.exports = invert

function invert(obj) {
    var result = {}
    var objKeys = keys(obj)

    for (var i = 0, length = keys.length; i < length; i++) {
        result[obj[objKeys[i]]] = objKeys[i]
    }

    return result
}
