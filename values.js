var keys = require("./keys.js")

module.exports = values

function values(obj) {
    var objKeys = keys(obj)
    var length = objKeys.length
    var vals = new Array(length)
    for (var i = 0; i < length; i++) {
        vals[i] = obj[objKeys[i]]
    }
    return vals
}
