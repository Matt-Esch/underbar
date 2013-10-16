var isFunction = require("./is-function.js")
var map = require("./map.js")

var slice = Array.prototype.slice

module.exports = invoke

function invoke(obj, method) {
    var args = slice.call(arguments, 2)
    var isFunc = isFunction(method)
    return map(obj, function(value) {
      return (isFunc ? method : value[method]).apply(value, args)
    })
}
