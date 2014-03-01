var individual = require("individual")

var escape = require("./escape.js")
var defaults = require("./defaults.js")

// Ugly underscore-style global default template settings
var index = individual("__UNDERBAR", {})
var templateSettings = index.templateSettings || {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
}
index.templateSettings = templateSettings

var noMatch = /(.)^/
var escaper = /\\|'|\r|\n|\t|\u2028|\u2029/g
var escapes = {
    "'":      "'",
    "\\":     "\\",
    "\r":     "r",
    "\n":     "n",
    "\t":     "t",
    "\u2028": "u2028",
    "\u2029": "u2029"
}

var _escape = {
    escape: escape
}

module.exports = template

function template(text, data, settings) {
    var render
    settings = defaults({}, settings, templateSettings)

    var matcher = new RegExp([
        (settings.escape || noMatch).source,
        (settings.interpolate || noMatch).source,
        (settings.evaluate || noMatch).source
    ].join("|") + "|$", "g")


    var index = 0
    var source = "__p+='"

    var esc = function (match, escape, interpolate, evaluate, offset) {
        source += text.slice(index, offset)
            .replace(escaper, function(match) {
                return "\\" + escapes[match]
            })

        if (escape) {
            source += "'+\n((__t=(" +
                escape +
                "))==null?'':_.escape(__t))+\n'"
        }

        if (interpolate) {
            source += "'+\n((__t=(" +
                interpolate +
                "))==null?'':__t)+\n'"
        }

        if (evaluate) {
            source += "';\n" + evaluate + "\n__p+='"
        }

        index = offset + match.length

        return match
    }

    text.replace(matcher, esc)
    source += "';\n"

    if (!settings.variable) {
        source = "with(obj||{}){\n" + source + "}\n"
    }

    source = "var __t,__p='',__j=Array.prototype.join," +
        "print=function(){__p+=__j.call(arguments,'');};\n" +
        source +
        "return __p;\n"

    try {
        render = new Function(settings.variable || "obj", "_", source)
    } catch (e) {
        e.source = source
        throw e
    }

    if (data) {
        return render(data, _escape)
    }

    var tFunc = function (data) {
        return render.call(this, data, _escape)
    }

    tFunc.source = "function(" +
        (settings.variable || "obj") +
        "){\n" +
        source +
        "}"

    return tFunc
}
