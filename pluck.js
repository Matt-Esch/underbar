var map = require("./map.js")
var property = require("./property.js")

module.exports = pluck

function pluck(obj, key) {
    return map(obj, property(key))
}
