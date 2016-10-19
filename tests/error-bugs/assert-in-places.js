module.exports = {
  testA: function (browser) {
    browser.assert.ok(false, 'A1. assert');
    browser.perform(function () {
      browser.assert.ok(false, 'A2. perform assert'); // called
    });
  },
  testB: function (browser) {
    browser.perform(function () {
      browser.assert.ok(false, 'B1. perform assert');
      browser.perform(function () {
        browser.assert.ok(false, 'B2. perform perform assert'); // not called
      });
    });
  }
};