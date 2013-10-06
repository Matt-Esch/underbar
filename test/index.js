var test = require("tape")

var overbar = require("../index")

test("overbar is a function", function (assert) {
    assert.equal(typeof overbar, "function")
    assert.end()
})
