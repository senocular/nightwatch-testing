module.exports = {
  test: function (browser) {
    browser.assert.ok(1);
  },

  after: function (browser) {
    browser.end();
  }
};
