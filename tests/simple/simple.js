module.exports = {

  'test': function (browser) {
    browser
    .perform(function(){
      console.log('URL Started...')
    })
    .url('http://senocular.com/test/sleep.php')
    .perform(function(){
      console.log('URL Loaded!')
    })
  },

  after: function (browser) {
    browser.end();
  }
};