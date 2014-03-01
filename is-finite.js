module.exports = finite

function finite(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj))
}
