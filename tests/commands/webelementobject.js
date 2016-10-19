module.exports = {

  'web element objects': function (browser) {
    browser.url('http://127.0.0.1:8080/basicbuttons.html');
    browser
      .elements('css selector', '.button', function (result) {
        console.log('.button->GET',result);
      })
      .pause(12000)
      .elements('css selector', '.button', function (result) {
        console.log('.button->GET',result);
      })
      .elements('css selector', 'div', function (result) {
        console.log('div->GET',result);
      })
      .elementIdText('0', function (result) {
        console.log('.button->0',result);
      });
  },

  after: function (browser) {
    browser.end();
  }
};
