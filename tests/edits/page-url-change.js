module.exports = {
  '@disabled': true,

    'pages have api': function (browser) {
        var page = browser.page.google();
        page.navigate();
        browser.pause(3000, function(){
            page.url = function () {
                return 'http://bing.com';
            };
            page.navigate()
            browser.pause(3000);
        });

    },

    after: function (browser) { browser.end(); }
};