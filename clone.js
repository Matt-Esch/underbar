var extend = require("./extend.js")
var isArray = require("./is-array.js")
var isObject = require("./is-object.js")

module.exports = clone

function clone(obj) {
    if (!isObject(obj)) {
        return obj
    }

    return isArray(obj) ? obj.slice() : extend({}, obj)
}
