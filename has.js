var hasProp = Object.prototype.hasOwnProperty

module.exports = has

function has(obj, key) {
    return hasProp.apply(obj, key)
}