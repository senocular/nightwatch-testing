module.exports = {

    poop: 1,

    'what is this': function (browser) {
        console.log('client === browser', this.client === browser);
        console.log(browser.page.simplePage().client.locateStrategy);
        console.log(browser.page.simplePage().client.constructor.name);
        browser.end();
    }
};