var identity = require("../identity.js")
var isFunction = require("../is-function.js")

module.exports = lookupIterator

function lookupIterator(value) {
    if (value == null) {
        return identity
    }

    return isFunction(value) ? value : function (obj) {
        return obj[value]
    }
}
