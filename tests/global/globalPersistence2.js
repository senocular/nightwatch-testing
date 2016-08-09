module.exports = {

  'global before' : function (browser) {
    browser.expect.element('body2').to.be.present;

    console.log('global.foo: ' + browser.globals.foo);
    //browser.globals.foo = 'globalPersistence2';
  },

  'Demo test 3' : !function (browser) {

    console.log('GLOBALA: ' + browser.globals.capture);
    console.log('global.foo: ' + browser.globals.foo);
    console.log('global.value: ' + browser.globals.value);
    console.log('global.default: ' + browser.globals['default']);
  },

  after: function (browser) { browser.end(); }
};