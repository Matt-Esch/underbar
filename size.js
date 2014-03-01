var keys = require("./keys.js")

module.exports = size

function size(obj) {
    if (obj == null) {
        return 0
    }

    return (obj.length === +obj.length) ? obj.length : keys(obj).length
}
