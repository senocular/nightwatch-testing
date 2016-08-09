module.exports = {
  
  'buttons': function (browser) {
    browser
        .url('http://127.0.0.1:8080/buttons.html')
        .waitForElementPresent('body', 3000)
        .assert.attributeEquals('#SaveBtn','disabled',"true")
        //.pause(30000)
        .end();
  }
};