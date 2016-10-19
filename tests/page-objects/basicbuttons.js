module.exports = {
  'nested': function (browser) {
    var page = browser.page.basicbuttons();
    var parent = page.section.parentSec;
    var child = parent.section.childSec;

    page.navigate();

    parent.getText('@anybutton', function (result) {
        console.log(result)
    });
    child.getText('@anybutton', function (result) {
        console.log(result)
    });
    child.getText('#parent', function (result) {
        console.log(result)
    });
  },

  'after': function (browser) {
    browser.end();
  }
}