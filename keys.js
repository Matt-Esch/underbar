var has = Object.prototype.hasOwnProperty
var nativeKeys = Object.keys

module.exports = nativeKeys || keys

function keys(obj) {
    if (obj !== Object(obj)) {
        throw new TypeError("Invalid object")
    }

    var objectKeys = []

    for (var key in obj) {
        if (has.call(obj, key)) {
            objectKeys.push(key)
        }
    }

    return objectKeys;
}
