var has = require("./has.js")
var isObject = require("./is-object.js")

var nativeKeys = Object.keys

module.exports = nativeKeys || keys

function keys(obj) {
    if (!isObject(obj)) {
        return []
    }

    if (nativeKeys) {
        return nativeKeys(obj)
    }

    var k = []

    for (var key in obj) {
        if (has(obj, key)) {
            k.push(key)
        }
    }

    return k
}
