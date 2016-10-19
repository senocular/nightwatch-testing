module.exports = {
    sanity: function () {
        console.log('Sanity test');
        this.client.assert.ok(true);
    },

    after: function (browser) {
        browser.end();
    }
};