var has = require("./has.js")
var identity = require("./identity.js")

module.exports = memoize

function memoize(func, hasher) {
    var memo = {}
    hasher || (hasher = identity)

    return function() {
        var key = hasher.apply(this, arguments);
        return has(memo, key) ?
            memo[key] :
            (memo[key] = func.apply(this, arguments))
    }
}
