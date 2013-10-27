var identity = require("./identity.js")
var isArray = require("./is-array.js")
var map = require("./map.js")
var values = require("./values.js")

var slice = Array.prototype.slice

module.exports = toArray

function toArray(obj) {
    if (!obj) {
        return []
    }

    if (isArray(obj)) {
        return slice.call(obj)
    }

    if (obj.length === +obj.length) {
        return map(obj, identity)
    }

    return values(obj)
}
