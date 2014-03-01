var test = require("tape")

var underbar = require("../index")

test("underbar is a function", function (assert) {
    assert.equal(typeof underbar, "function")
    assert.end()
})
