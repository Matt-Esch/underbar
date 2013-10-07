if (typeof (/./) !== "function") {
    module.exports = function(obj) {
        return typeof obj === "function"
    }
} else {
    var toString = Object.prototype.toString
    module.exports = function (obj) {
        return toString.call(obj) === "[object Function]"
    }
}
