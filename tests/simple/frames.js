module.exports = {
  frames: function (browser) {
    browser
      .url('http://127.0.0.1:8080/test-has-frame.html')
      .waitForElementPresent('#section1', 2000)
      .frame('test-frame', function(){
        browser
          .waitForElementPresent('#frame-msg', 2000)
          .frame(null);
      })
      .waitForElementPresent('#section2', 2000)
      .pause(2000);

  },

  after: function (browser) {
    browser.end();
  }
};