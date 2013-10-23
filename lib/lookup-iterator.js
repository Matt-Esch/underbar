var isFunction = require("../is-function.js")

module.exports = lookupIterator

function lookupIterator(value) {
    return isFunction(value) ? value : function (obj) {
        return obj[value]
    }
}
