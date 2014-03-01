var has = require("./has.js")

var toString = Array.prototype.toString

module.exports = isArguments(arguments) ? isArguments : safeIsArguments

function isArguments(obj) {
    return toString.call(obj) == "[object Arguments]"
}

function safeIsArguments(obj) {
    return !!(obj && has(obj, "callee"))
}
