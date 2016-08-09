module.exports = {
  
  'assert': !function (browser) {
    console.log('ASSERT:', browser.assert.testAssertion('foo'));
  },
  
  'expect visible': function (browser) {
    // browser.assert.hidden('body'); // fails (expected)

    browser.expect.element('body').to.be.visible; // Ok

    var exp = browser.expect.element('body');
    console.log(exp.to.be.visible === exp);
    // browser.expect.element('body').to.not.be.visible; // fails (expected)

    browser.expect.element('body').to.be.hidden.end;

    // console.log(browser.expect.element('body').to.fooBar); // -> undefined; hangs
    //browser.expect.element('body').to.be.hidden; // HANGS (does not exist)
  },

  after: function (browser) { browser.end(); }
};