var any = require("./some.js")

module.exports = find

function find(obj, iterator, context) {
    var result
    any(obj, function(value, index, list) {
      if (iterator.call(context, value, index, list)) {
            result = value
            return true
        }
    })
    return result
}