var test = {

  test: function (browser) {
    browser.assert.ok(1);
    browser.pause(3000);
  },

  // after: function (browser, done) {
  //   //browser.end();
  //   done();
  // },

  after: function (browser) {
    browser.end();
  }
};

var featureEnabled = false;

// get ['@disabled'] () {
//   return !featureEnabled;
// }

Object.defineProperty(test, '@disabled', {
  get: function () {
    console.log('globals?', this)
    return !featureEnabled;
  },
  enumerable: true
});
 
module.exports = test;