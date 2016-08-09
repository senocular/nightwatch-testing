module.exports = {

  'sections have commands': function (browser) {
    var page = browser.page.simplePageObj();
    var section = page.section.signUp;
    var subPage = browser.page.sub.subPage();

    console.log('api parent:', typeof browser.parent); // element api
    console.log('api in section:', typeof section.getText); // element api
    console.log('custom command in section:', typeof section.testFunction); // custom commands (global)
    console.log('page command in section:', typeof section.testCommand); // page commands
    console.log('page section command in section:', typeof section.testSectionCommand); // page commands

    console.log('subPage in subdirectory', !!subPage.subCommand);
    console.log('page', browser.page);
  },

  after: function (browser) { browser.end(); }
};