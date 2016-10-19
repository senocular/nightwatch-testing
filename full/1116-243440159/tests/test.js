module.exports = {
    '@tags': ['sample'],
    
    test: function (browser) {
      browser.url('http://127.0.0.1:8080');
      // browser.page.po().section.firstSec.expect.element('@firstEl').to.be.visible.before(1000);


      // console.log('po.foo:', po.foo)
      // console.log('firstSec.foo:', firstSec.foo)
      // console.log('firstSec.bar:', firstSec.bar)
      // console.log('firstSec.props:', firstSec.props)

      var firstSec = browser.page.po().section.firstSec;
      firstSec.getText('@testEl', console.log.bind(console));
      firstSec.formatEl('milk').getText('@testEl', console.log.bind(console));

    },

    after: function (browser) { browser.end(); }
};