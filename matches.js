module.exports = matches

function matches(attrs) {
    return function(obj) {
        if (obj === attrs) {
            return true
        }

        for (var key in attrs) {
            if (attrs[key] !== obj[key]) {
                return false
            }
        }

        return true
    }
}
