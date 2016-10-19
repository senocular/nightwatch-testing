module.exports = {
  test: function (browser) {
    browser.assert.ok(true, 'first'); // runs
    browser
      .pause(browser.globals.userDefinedPauseOopsTypo) // point of failure: pause(undefined)
      .perform(function () {
        browser.assert.ok(true, 'second'); // never runs
      });
      
  },

  after: function (browser) { browser.end(); }
};