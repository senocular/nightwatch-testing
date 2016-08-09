module.exports = {
    '@tags': ['sample'],
    
    test: function (browser) {
        console.log('test');
    },

    after: function (browser) { browser.end(); }
};