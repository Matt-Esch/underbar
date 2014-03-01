var toString = Object.prototype.toString

module.exports = typeof (/./) !== "function" ? isFunction : safeIsFunction

function isFunction(obj) {
    return typeof obj === "function"
}

function safeIsFunction(obj) {
    return toString.call(obj) === "[object Function]"
}
