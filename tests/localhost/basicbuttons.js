module.exports = {
  before: function (browser) {
    browser
      .url('http://127.0.0.1:8080/basicbuttons.html')
      .waitForElementPresent('body', 3000);
  },
  
  'buttons': !function (browser) {
    browser
      .elements('css selector', '#child button', function (result) {
          console.log('elements => #child button', result.value);
      });
  },

  'isVisible': !function (browser) {
    browser
      .isVisible('#button', function (result) {
        console.log('isVisible #button', result.value);
      })
      .isVisible('.hidden', function (result) {
        console.log('isVisible .hidden', result.value);
      })
      .isVisible('.displaynone', function (result) {
        console.log('isVisible .displaynone', result.value);
      })
      // .waitForElementNotVisible('.doesnotexist', 1234, false, function (result) {
      //   console.log('waitForElementNotVisible .doesnotexist', result.value);
      // })
      // .isVisible('.doesnotexist', function (result) {
      //   console.log('isVisible .doesnotexist', result.value);
      // });
      .perform(function(){
        console.log('complete');
      });
  },

  'isPresent': !function (browser) {
    browser
      .isPresent('.hidden', function (result) {
        console.log('isPresent .hidden', result.value);
      })
      .isPresent('.doesnotexist', function (result) {
        console.log('isPresent .doesnotexist', result.value);
      })
      .perform(function(){
        console.log('complete');
      });
  },

  after: function (browser) { browser.end(); }
};