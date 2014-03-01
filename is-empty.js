var has = require("./has.js")
var isArray = require("./is-array.js")
var isString = require("./is-string.js")

module.exports = isEmpty

function isEmpty(obj) {
    if (obj == null) {
        return true
    }

    if (isArray(obj) || isString(obj)) {
        return obj.length === 0
    }

    for (var key in obj) {
        if (has(obj, key)) {
            return false
        }
    }

    return true
}
