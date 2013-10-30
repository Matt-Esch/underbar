// Collections
var each = require("./each.js")
var map = require("./map.js")
var reduce = require("./reduce.js")
var reduceRight = require("./reduce-right.js")
var find = require("./find.js")
var filter = require("./filter.js")
var where = require("./where.js")
var findWhere = require("./find-where.js")
var reject = require("./reject.js")
var every = require("./every.js")
var some = require("./some.js")
var contains = require("./contains.js")
var invoke = require("./invoke.js")
var pluck = require("./pluck.js")
var max = require("./max.js")
var min = require("./min.js")
var sortBy = require("./sort-by.js")
var groupBy = require("./group-by.js")
var indexBy = require("./index-by.js")
var countBy = require("./count-by.js")
var shuffle = require("./shuffle.js")
var sample = require("./sample.js")
var toArray = require("./to-array.js")
var size = require("./size.js")

// Arrays
var first = require("./first.js")

// Functions
var bind = require("./bind.js")

// Objects
var keys = require("./keys.js")
var values = require("./values.js")
var has = require("./has.js")
var isEmpty = require("./is-empty.js")
var isArray = require("./is-array.js")
var isFunction = require("./is-function.js")
var isString = require("./is-string.js")

// Utility
var identity = require("./identity.js")
var random = require("./random.js")

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

    // find
    find: find,
    detect: find,

    // filter
    filter: filter,
    select: filter,

    // where
    where: where,

    // find where
    findWhere: findWhere,

    // reject
    reject: reject,

    // every
    every: every,
    all: every,

    // some
    some: some,
    any: some,

    // contains
    contains: contains,
    include: contains,

    // invoke
    invoke: invoke,

    // pluck
    pluck: pluck,

    // max
    max: max,

    // min
    min: min,

    // sort by
    sortBy: sortBy,

    // group by
    groupBy: groupBy,

    // index by
    indexBy: indexBy,

    // count by
    countBy: countBy,

    // shuffle
    shuffle: shuffle,

    // sample
    sample: sample,

    // to array
    toArray: toArray,

    // size
    size: size,


    // ## Arrays

    // first
    first: first,
    head: first,
    take: first,

    initial: initial,

    // ## Functions
    bind: bind,

    // ## Objects
    keys: keys,
    values: values,
    has: has,
    isEmpty: isEmpty,
    isArray: isArray,
    isFunction: isFunction,
    isString: isString,

    // ## Utility
    identity: identity,
    random: random

    // ## Chaining
}
