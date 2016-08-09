module.exports = {
    sanity: function () {
        console.log('Sanity test');
    },

    after: function (browser) {
        browser.end();
    }
};