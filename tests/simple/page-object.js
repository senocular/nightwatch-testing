module.exports = {

  'test': function (browser) {
    var page = browser.page.asFunction();
    console.log('url', page.url())
  },

  after: function (browser) { browser.end(); }
};