module.exports = {
  'Check that article title is visible': function(browser) {
    this.articlePage = browser.page.articlePage();
    this.articlePage.navigate();

    this.articlePage.expect.section('@middleColumn').to.be.visible;
    this.articlePage.section.middleColumn.expect.element('@articleTitle').to.be.visible;
  },
  'Check that \'Register\' pop-up is visible': function(browser) {
    browser.url('http://127.0.0.1:8080/errors/issue-1100.html');
    browser.waitForElementVisible('.register-popup', 1000);
    browser.expect.element('.register-popup').to.be.visible;
    browser.click('.close-btn');
    browser.end();
  }
};