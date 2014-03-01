module.exports = object

function object(list, values) {
    if (list == null) {
        return {}
    }

    var result = {}

    for (var i = 0, length = list.length; i < length; i++) {
        if (values) {
            result[list[i]] = values[i];
        } else {
            result[list[i][0]] = list[i][1];
        }
    }

    return result;
}
