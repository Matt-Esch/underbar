var eq = require("./lib/eq.js")

module.exports = isEqual

function isEqual(a, b) {
    return eq(a, b, [], []);
}