var group = require("./lib/group.js")
var has = require("./has.js")

module.exports = group(function(result, key) {
    if (has(result, key)) {
        result[key]++
    } else {
        result[key] = 1
    }
})
