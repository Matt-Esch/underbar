var individual = require("individual")
var index = individual("__UNDERBAR", { value: 0 })

module.exports = uniqueId

function uniqueId(prefix) {
    var id = ++index.value + ""
    return prefix ? prefix + id : id
}
