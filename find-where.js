var where = require("./where.js")

module.exports = findWhere

function findWhere(obj, attrs) {
    return where(obj, attrs, true)
}
