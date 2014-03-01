var isFunction = require("./is-function.js")

module.exports = result

function result(object, property) {
    if (object == null) {
        return void 0
    }

    var value = object[property]

    return isFunction(value) ? value.call(object) : value
}
