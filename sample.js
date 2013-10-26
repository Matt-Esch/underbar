var random = require("./random.js")
var shuffle = require("./shuffle.js")
var values = require("./values.js")

module.exports = sample

function sample(obj, n, guard) {
    if (n == null || guard) {
        if (obj.length !== +obj.length) {
            obj = values(obj)
        }

        return obj[random(obj.length - 1)]
    }
    return shuffle(obj).slice(0, Math.max(0, n))
}
