var isNumber = require("./is-number.js")

module.exports = nan

function nan(obj) {
    return isNumber(obj) && obj != +obj
}
