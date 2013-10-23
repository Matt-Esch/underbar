var group = require("./lib/group.js")

module.exports group(function(result, key, value) {
    result[key] = value
})
