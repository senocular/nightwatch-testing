module.exports = {
  after:function(b){b.end();},

  testPageObjectElementRecursion: function (browser) {
    var client;

    browser.getClient(function(c) {
      client = c;
    });

    browser.url('http://127.0.0.1:8080/testPageObjectElementRecursion.html')

    var section = browser.page.simplePageObj().section.signUp;
    section.click('@help', function callback(result) {
      console.log('CLICK CALLBACK');
      browser.assert.equal(result.status, 0);
    });

    browser.perform(function() {
      console.log('PERFORM CALLBACK');
      browser.assert.equal(client.locateStrategy, 'css selector');
    }.bind(this));
  }
};