var group = require("./lib/group.js")

module.exports = group(indexBy)

function indexBy(result, key, value) {
    result[key] = value
}
