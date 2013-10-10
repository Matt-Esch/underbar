var filter = require("./filter.js")
var find = require("./find.js")
var isEmpty = require("./is-empty.js")

module.exports = where

function where(obj, attrs, first) {
    if (isEmpty(attrs)) {
        return first ? void 0 : []
    }

    var process = first ? find : filter

    return process(obj, function(value) {
        for (var key in attrs) {
            if (attrs[key] !== value[key]) {
                return false
            }
        }

        return true;
    })
}
