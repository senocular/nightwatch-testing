module.exports = {

  asyncHookTimeout: 2000,

//   before: function (browser, done) {
//       console.log('GLOBAL BEFORE', arguments.length);
//       this.foo = 'bar';
//       (done || browser)();
//   },
//   beforeEach: function (browser, done) {
//       global._browser = browser;
      
//       console.log('GLOBAL BEFOREEACH', arguments.length);
//       //this.foo = 'bar';
//       (done || browser)();
//   },
//   after: function (browser, done) {
//       console.log('GLOBAL AFTER', arguments.length);
//       this.foo = 'bar';
//       (done || browser)();
//   },
//   afterEach: function (browser, done) {
//       console.log('GLOBAL AFTEREACH', arguments.length);
//       //this.foo = 'bar';
//       (done || browser)();
//   },

  'default': {
    value: 'hi-default'
  },
  'safari': {
    value: 'hi-safari'
  }
};