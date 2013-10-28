var keys = require("./keys.js")

module.exports = size

function size(obj) {
    if (obj == null) {
        return 0
    }

    if (obj.length === +obj.length) {
        return obj.length
    } else {
        return keys(obj).length
    }
}
