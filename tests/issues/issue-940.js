module.exports = {
  'Test iFrame support' : function (browser) {
    browser
      .url("http://127.0.0.1:8080/940/")
      .waitForElementVisible("#frameEl", 3000)
      .pause(2000)
      .frame('frameEl')
      .getText('h1', function(result) {
        console.log(result.value);
      })
      .assert.title('Frame Page')
      .end();
  }
}