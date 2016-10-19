module.exports = {

  before: function (browser) {
    browser.url('http://127.0.0.1:8080/basicbuttons.html');
    browser.timeoutsAsyncScript(10000)
  },

  'execute async': function (browser) {
      browser.executeAsync(function (input, done) {
        // ... do stuff with window ...
        setTimeout(function(){
          throw new Error('error thrown');
        }, 4000);
        setTimeout(done, 5000, 'result');
      },
      ['input'],
      function (result) {
        console.log('result =', result);
      })
      .perform(function(){
        console.log('logged after "result = "');
      });
  },

  'execute async so': !function (client) {

    // http://stackoverflow.com/questions/37044543/nightwatch-is-there-a-way-to-find-out-if-executeasync-has-executed-the-javascri#37046211
    client.executeAsync(function(data, done) {
        window._asyncResult = undefined;
        setTimeout(function(){
          window._asyncResult = "abcde";
          done(window._asyncResult);
        }, 2000);
      }, ["1234"],
      function(result) {
        // evaluate the result
        client.assert.equal(result.value, "abcde");
      });

  },

  after: function (browser) {
    browser.end();
  }
};
