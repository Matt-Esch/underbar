module.exports = after

function after(times, func) {
    return function () {
        if (--times < 1) {
            return func.apply(this, arguments);
        }
    }
}
