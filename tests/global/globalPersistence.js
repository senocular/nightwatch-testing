module.exports = {
  '@disabled': false,

  'Demo test' : function (browser) {
    browser.expect.element('body').to.be.present;
    
    console.log('global.foo: ' + browser.globals.foo);
    //browser.globals.foo = 'globalPersistence';

    browser.globals.globalA = '1';
  },



  'Demo test 2' : !function (browser) {
    console.log('GLOBALA: ' + browser.globals.globalA);
    console.log('capture.value_id: ' + browser.globals.capture.value_id);
    console.log('myVal: ' + myVal);
  },

  // 'Submit Order': function (browser) {
    
  //   console.log('1 ' + browser.globals.capture.value_id); // 'bbq'

  //   browser.perform(function() {
  //     console.log('4 ' + browser.globals.capture.value_id); // 'bbq'
  //     browser.globals.capture.value_id = 'salad';
  //     console.log('5 ' + browser.globals.capture.value_id); // 'salad'
  //   });

  //   console.log('2 ' + browser.globals.capture.value_id); // 'bbq'

  //   browser.perform(function() {
  //     console.log('6 ' + browser.globals.capture.value_id); // 'salad'
  //   });

  //   console.log('3 ' + browser.globals.capture.value_id); // 'bbq'
  // },

  // 'Amend Order': function (browser) {
  //   console.log('7 ' + browser.globals.capture.value_id); // 'salad'
  // },

  // 'Cancel Order': function (browser) {
  //   console.log('8 ' + browser.globals.capture.value_id); // 'salad'
  // },

  after: function (browser) {
    browser.end();
  }
};