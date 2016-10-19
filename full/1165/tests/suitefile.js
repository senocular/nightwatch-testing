module.exports = {
  testcasefunction: function (browser) {
    browser.assert.ok(1);
  },

  after: function (browser, done) {
    setImmediate(function(){
      browser.end();
      done();
    })
  }
};
