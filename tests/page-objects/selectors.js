module.exports = {
  'by id': function (browser) {
    browser
      .url('http://127.0.0.1:8080/basicbuttons.html');
    var simplePage = browser.page.simplePage();

    simplePage.getAttribute('@child', 'id', function(result) {
      console.log(result);
    })
  },

  'after': function (browser) {
    browser.end();
  }
}