var each = require("../each.js")
var identity = require("../identity.js")
var lookupIterator = require("./lookup-iterator.js")

module.exports = group

function group(behavior) {
    return function(obj, value, context) {
        var result = {}
        var iterator = value == null ? identity : lookupIterator(value)
        each(obj, function(value, index) {
            var key = iterator.call(context, value, index, obj)
            behavior(result, key, value)
        })
        return result
    }
}
