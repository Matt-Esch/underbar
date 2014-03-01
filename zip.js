var max = require("./max.js")
var pluck = require("./pluck.js")

module.exports = zip

function zip() {
    var length = max(pluck(arguments, "length").concat(0))
    var results = new Array(length)

    for (var i = 0; i < length; i++) {
        results[i] = pluck(arguments, "" + i)
    }

    return results
}
