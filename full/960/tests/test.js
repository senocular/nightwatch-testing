module.exports = {
    
    test: function (browser) {
        browser.myCommand();
    },

    after: function (browser) { browser.end(); }
};