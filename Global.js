var capture = {
  value_id: 'bbq-Global.js',
};

module.exports = {

  asyncHookTimeout: 2000,

  // before: function (done) {
  //     console.log('GLOBAL BEFORE');
  //     this.foo = 'bar';
  //     done();
  // },
  // beforeEach: function (done) {
  //     console.log('GLOBAL BEFOREEACH');
  //     //this.foo = 'bar';
  //     done();
  // },


  capture: capture,
  'default': {
    value: 'hi-default'
  },
  'safari': {
    value: 'hi-safari'
  }
};