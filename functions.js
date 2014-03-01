var isFunction = require("./is-function.js")

module.exports = functions

function functions(obj) {
    var names = []

    for (var key in obj) {
        if (isFunction(obj[key])) {
            names.push(key)
        }
    }

    return names.sort();
}
