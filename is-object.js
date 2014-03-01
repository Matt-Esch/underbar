module.exports = isObject

function isObject(obj) {
    return obj === Object(obj)
}
