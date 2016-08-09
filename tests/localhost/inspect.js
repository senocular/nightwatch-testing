module.exports = {
  '@disabled': true,
  
  'classes': function (browser) {
    browser
        .url('http://127.0.0.1:8080/test-frame.html')
        .waitForElementPresent('body', 3000)
        .assert.cssClassPresent('#classCheck1', 'classA')
        .assert.cssClassPresent('#classCheck2', 'classA')
        .assert.cssClassPresent('#classCheck2', 'classB')
        .assert.cssClassNotPresent('#classCheck2', 'classA classB') // no multiple class names
        //.assert.cssClassPresent('#classCheck3', 'classB') // tab separating classes breaks class recognition
        .assert.attributeEquals("#classCheck2", "class", "classA classB")
        .end();
  }
};