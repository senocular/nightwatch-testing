module.exports = {

  after: function (browser) {
    browser.end();
  }
};

module.exports['test' + 1] = function (browser) {
    browser.assert.ok(1);
    browser.pause(3000);
  };