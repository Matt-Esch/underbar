var slice = Array.prototype.slice

module.exports = partial

function partial(func) {
    var boundArgs = slice.call(arguments, 1)

    return function() {
        var position = 0
        var args = boundArgs.slice()

        for (var i = 0, length = args.length; i < length; i++) {
            var ai = args[i]
            if (ai && (ai === ai.none || ai.partial === partial)) {
                args[i] = arguments[position++]
            }
        }

        while (position < arguments.length) {
            args.push(arguments[position++])
        }

        return func.apply(this, args);
    }
}

// Allow standalone use of unspecified argument
partial.none = {}
