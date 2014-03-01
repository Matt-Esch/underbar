module.exports = property

function property(key) {
    return function(obj) {
        return obj[key]
    }
}
