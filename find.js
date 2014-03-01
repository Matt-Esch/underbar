var any = require("./some.js")

module.exports = find

function find(obj, predicate, context) {
    var result
    any(obj, function(value, index, list) {
      if (predicate.call(context, value, index, list)) {
            result = value
            return true
        }
    })
    return result
}
