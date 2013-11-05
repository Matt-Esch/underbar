module.exports = random

function random(min, max) {
    if (max == null) {
        max = min
        min = 0
    }

    return min + Math.floor(Math.random() * (max - min + 1))
}