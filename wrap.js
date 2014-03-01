var partial = require("./partial.js")

module.exports = wrap

function wrap(func, wrapper) {
    return partial(wrapper, func)
}
