module.exports = {

  'get button by index': function (browser) {
    browser
      .url('http://127.0.0.1:8080/basicbuttons.html')
      .waitForElementPresent('button', 3000)
      .getText({selector:'button', index:0}, function (result) {
        console.log('BUTTON 0 TEXT:', result.value);
      })
      .getText({selector:'button', index:1}, function (result) {
        console.log('BUTTON 1 TEXT:', result.value);
      })
      .getText({selector:'button', index:2}, function (result) {
        console.log('BUTTON 2 TEXT:', result.value);
      })
      // .getText('NUP-button', function (result) {
      //   console.log('BUTTON NUP TEXT:', result.value);
      // })
      // .getText({selector:'button', index:200}, function (result) {
      //   console.log('BUTTON 200 TEXT:', result.value);
      // })
      .pause(3000);
  },

  after: function (browser) { browser.end(); }
};