// Collections
var each = require("./each.js")
var map = require("./map.js")
var reduce = require("./reduce.js")
var reduceRight = require("./reduceRight.js")
// Arrays


// Functions
var bind = require("./bind.js")

// Objects
var keys = require("./keys.js")
var isFunction = require("./isFunction.js")


// Utility


// Chaining

module.exports = {
    // ## Collections
    // each
    each: each,
    forEach: each,

    // map
    map: map,
    collect: map,

    // reduce
    reduce: reduce,
    foldl: reduce,
    inject: reduce,

    // reduce right
    reduceRight: reduceRight,
    foldr: reduceRight,

    // ## Arrays

    // ## Functions
    bind: bind,

    // ## Objects
    keys: keys,
    isFunction: isFunction

    // ## Utility

    // ## Chaining
}
