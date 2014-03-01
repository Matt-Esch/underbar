var keys = require("./keys.js")

var entityMap = require("./lib/entity-map.json")

var entities = keys(entityMap)
var escapeReg = new RegExp("[" + entities.join("") + "]", "g")

module.exports = escape

function escape(string) {
    if (string == null) {
        return ""
    }

    return ("" + string).replace(escapeReg, function (match) {
        return entityMap[match]
    })
}
