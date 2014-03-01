var invert = require("./invert")
var keys = require("./keys.js")

var entityMap = require("./lib/entity-map.json")

var inverseMap = invert(entityMap)
var entities = keys(inverseMap)
var unescapeReg = new RegExp("[" + entities.join("|") + "]", "g")

module.exports = unescape

function unescape(string) {
    if (string == null) {
        return ""
    }

    return ("" + string).replace(unescapeReg, function (match) {
        return inverseMap[match]
    })
}
