var filter = require("./filter.js")

module.exports = reject

function reject(obj, iterator, context) {
    return filter(obj, function(value, index, list) {
        return !iterator.call(context, value, index, list);
    }, context)
}
