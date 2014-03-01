var isFunction = require("./is-function.js")

var ctor = function(){}
var nativeBind = Function.prototype.bind
var slice = Array.prototype.slice

module.exports = bind

function bind(func, context) {
    var args, bound

    if (nativeBind && func.bind === nativeBind) {
        return nativeBind.apply(func, slice.call(arguments, 1))
    }

    if (!isFunction(func)) {
        throw new TypeError()
    }

    args = slice.call(arguments, 2)
    bound = function () {
        if (!(this instanceof bound)) {
            return func.apply(context, args.concat(slice.call(arguments)))
        }

        ctor.prototype = func.prototype
        var self = new ctor()
        ctor.prototype = null

        var result = func.apply(self, args.concat(slice.call(arguments)))
        if (Object(result) === result) {
            return result
        }

        return self
    }

    return bound
}
