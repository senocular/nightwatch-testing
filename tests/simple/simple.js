module.exports = {
  '@disabled': false,
  
  'first': function (browser) {
    console.log('first');
  },

  'second': function (browser) {
    console.log('second');
  },

  after: function (browser) {
    browser.end();
  }
};