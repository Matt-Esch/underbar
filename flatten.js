var each = require("./each.js")
var every = require("./every.js")
var isArguments = require("./is-arguments.js")
var isArray = require("./is-array.js")

var concat = Array.prototype.concat
var push = Array.prototype.push

module.exports = flatten

function flatten(input, shallow, output) {
    if (shallow && every(input, isArray)) {
        return concat.apply(output, input)
    }

    each(input, function(value) {
        if (isArray(value) || isArguments(value)) {
            if(shallow) {
                push.apply(output, value)
            } else {
                flatten(value, shallow, output)
            }
        } else {
            output.push(value)
        }
    })

    return output
}
