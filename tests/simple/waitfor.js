module.exports = {
    'waitfor visible': function (browser) {

        browser.waitForElementVisible('.something', 1000)
        browser.end();
    }
};