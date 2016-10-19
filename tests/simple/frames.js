module.exports = {
  frames: function (browser) {
    browser
      .url('http://127.0.0.1:8080/test-has-frame.html');

      // browser
      // .waitForElementPresent('#section1', 2000)
      // .frame('test-frame', function(){
      //   browser
      //     .waitForElementPresent('#frame-msg', 2000)
      //     .frame(null);
      // })
      // .waitForElementPresent('#section2', 2000)
      // .pause(2000);

      // browser.element('css selector', '#test-frame', function (result) {
      //     this.assert.equal(result.status, 0, 'Status code finding a page object frame');
          
          
          var frameId = /*JSON.stringify(result.value)*//*result.value*//*0*/"test-frame";
          console.log('Picking frame ', typeof frameId, frameId);
          browser.frame(frameId, function (result) {
              browser.assert.equal(result.status, 0, 'Status code switching context to a page object frame');
          })

      //     .getText('css selector', '.common', function (result) {
      //       console.log('Common text: ' + result.value);
      //     });
      // });

  },

  after: function (browser) {
    browser.end();
  }
};