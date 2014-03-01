var each = require("./each.js")
var random = require("./random.js")

module.exports = shuffle

function shuffle(obj) {
    var rand
    var index = 0
    var shuffled = []

    each(obj, function(value) {
        rand = random(index++)
        shuffled[index - 1] = shuffled[rand]
        shuffled[rand] = value
    })

    return shuffled
}
