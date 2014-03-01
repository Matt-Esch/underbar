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
var initial = require("./initial.js")
var last = require("./last.js")
var rest = require("./rest.js")
var compact = require("./compact.js")
var flatten = require("./flatten.js")
var without = require("./without.js")
var difference = require("./difference.js")
var union = require("./union.js")
var intersection = require("./intersection.js")
var uniq = require("./uniq.js")
var zip = require("./zip.js")
var object = require("./object.js")
var indexOf = require("./index-of.js")
var lastIndexOf = require("./last-index-of.js")
var sortedIndex = require("./sorted-index.js")
var range = require("./range.js")

// Functions
var bind = require("./bind.js")
var bindAll = require("./bind-all.js")
var partial = require("./partial.js")
var memoize = require("./memoize.js")
var delay = require("./delay.js")

// Objects
var keys = require("./keys.js")
var values = require("./values.js")
var has = require("./has.js")
var isEmpty = require("./is-empty.js")
var isArray = require("./is-array.js")
var isFunction = require("./is-function.js")
var isString = require("./is-string.js")
var finite = require("./is-finite.js")

// Utility
var identity = require("./identity.js")
var random = require("./random.js")
var times = require("./times.js")

// Chaining

module.exports = {
    // ## Collections
    each: each,
    forEach: each,
    map: map,
    collect: map,
    reduce: reduce,
    foldl: reduce,
    inject: reduce,
    reduceRight: reduceRight,
    foldr: reduceRight,
    find: find,
    detect: find,
    filter: filter,
    select: filter,
    where: where,
    findWhere: findWhere,
    reject: reject,
    every: every,
    all: every,
    some: some,
    any: some,
    contains: contains,
    include: contains,
    invoke: invoke,
    pluck: pluck,
    max: max,
    min: min,
    sortBy: sortBy,
    groupBy: groupBy,
    indexBy: indexBy,
    countBy: countBy,
    shuffle: shuffle,
    sample: sample,
    toArray: toArray,
    size: size,

    // ## Arrays
    first: first,
    head: first,
    take: first,
    initial: initial,
    last: last,
    rest: rest,
    tail: rest,
    drop: rest,
    compact: compact,
    flatten: flatten,
    without: without,
    union: union,
    intersection: intersection,
    difference: difference,
    uniq: uniq,
    unique: uniq,
    zip: zip,
    object: object,
    indexOf: indexOf,
    lastIndexOf: lastIndexOf,
    sortedIndex: sortedIndex,
    range: range,

    // ## Functions
    bind: bind,
    bindAll: bindAll,
    partial: partial,
    memoize: memoize,
    delay: delay,

    // ## Objects
    keys: keys,
    values: values,
    has: has,
    isEmpty: isEmpty,
    isArray: isArray,
    isFunction: isFunction,
    isString: isString,
    isFinite: finite,

    // ## Utility
    identity: identity,
    random: random,
    times: times

    // ## Chaining
}
