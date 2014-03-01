var flatten = require("./flatten.js")
var uniq = require("./uniq.js")

module.exports = union

function union() {
    uniq(flatten(arguments, true))
}
