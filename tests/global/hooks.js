module.exports = {
    'test': function (browser) {
        console.log('browser same? ', browser === global._browser);
        browser.end();
    }
}