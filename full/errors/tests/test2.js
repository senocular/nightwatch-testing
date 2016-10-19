module.exports = {
    '@disabled': true,

    test2: function (browser) {
        console.log('--- test2 fn ---');
        browser.assert.ok(true, 'ok2');
    },

    //after: function (browser) { browser.end(); }
};