console.log('MODULE');
var assert = require('assert');

module.exports = {

  after: function(browser, done) {
    console.log('IN AFTER');
    browser.end();
    
    //setTimeout(function(){
        //throw new Error('myAfterError');
    //}, 100);
  },

  'simple-test-case': function(browser) {
    browser.assert.ok(1);
  }
};