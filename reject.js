var filter = require("./filter.js")

module.exports = reject

function reject(obj, predicate, context) {
    return filter(obj, function(value, index, list) {
        return !predicate.call(context, value, index, list);
    }, context)
}
