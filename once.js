module.exports = once

function once(func) {
    var ran = false
    var memo

    return function () {
        if (ran) {
            return memo
        }

        ran = true
        memo = func.apply(this, arguments)
        func = null

        return memo
    }
}
