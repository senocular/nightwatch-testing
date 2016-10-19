module.exports = {

  // issue #862 (dup)
  'Test': function (browser) {
    browser
      .url('http://127.0.0.1:8080/index.html')
      .waitForElementVisible('body', 1000);

    browser.expect.element('h1').text.to.contain('Test').before(3000);
  },

  after: function (browser) { browser.end(); }
};