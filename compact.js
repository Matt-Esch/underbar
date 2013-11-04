var filter = require("./filter.js")
var identity = require("./identity.js")

module.exports = compact

function compact(array) {
    return filter(array, identity);
}
