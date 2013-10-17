var map = require("./map.js")

module.exports = pluck

function pluck(obj, key) {
    return map(obj, function (value) {
        return value[key]
    })
}
