var identity = require("../identity.js")
var isFunction = require("../is-function.js")
var property = require("../property.js")

module.exports = lookupIterator

function lookupIterator(value) {
    if (value == null) {
        return identity
    }

    if (isFunction(value)) {
        return value
    }

    return property(value)
}
