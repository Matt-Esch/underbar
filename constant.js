module.exports = constant

function constant(value) {
    return function () {
        return value
    }
}
