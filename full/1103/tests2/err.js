module.exports = {

    'ok': function (browser) {
        browser.assert.ok(1);
    },

    'ok2': function (browser) {
        browser.assert.ok(1);
    },



    before: function (browser, done) {
        browser.globals.errorTesting.runHook('suite', 'before', done);
    },
    beforeEach: function (browser, done) {
        browser.globals.errorTesting.runHook('suite', 'beforeEach', done);
    },
    afterEach: function (browser, done) {
        browser.globals.errorTesting.runHook('suite', 'afterEach', done);
    },
    after: function (browser, done) {
        browser.end();
        browser.globals.errorTesting.runHook('suite', 'after', done);
    }
};