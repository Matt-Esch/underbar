module.exports = isElement

function isElement(obj) {
    return !!(obj && obj.nodeType === 1)
}
