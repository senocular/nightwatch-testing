module.exports = {
  '@disabled': false,

  before: function (browser) {
    browser
        .url('http://127.0.0.1:8080/basicbuttons.html')
        .pause(3000);
  },
  after: function (browser) {

    browser
        .url('http://127.0.0.1:8080/buttons.html')
        .pause(3000)
        .end();
  },
  
  'go to url': function (browser) {
    browser
        .url('http://127.0.0.1:8080/test-frame.html')
        .click('doesnotexit')
        .pause(3000);
  }
};