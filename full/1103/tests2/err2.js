module.exports = {
    'secondary': function (browser) {
        browser.assert.ok(1);
    },

    after: function (browser) {
        console.log('=== IN AFTER [2]');
        browser.end();
    }
};