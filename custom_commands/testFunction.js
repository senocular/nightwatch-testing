var util = require('util');
var EventEmitter = require('events').EventEmitter;

exports.command = function () {
  console.log('Custom command function', !!this.pause);

  // this.assert.ok(true, 'end function'); // NOPE
  // this.assert.elementPresent("body"); // OK

  // this.pause(1); // OK

  // this.perform(function(done) {
  //   setTimeout(done, 3000); // OK
  // })


  // IF WE ADD EVENTEMITTER TO THIS, THIS INHERITS FROM API
  // process.nextTick(function () {
  //   //this.eventEmitter.emit('complete');
  //   this.emit('complete');
  // }.bind(this));


  // IF API IS AN EVENTEMITTER
  // setTimeout(function () {
  //   this.emit('complete');
  // }.bind(this), 3000);

  this.perform(function(){}); // OK
};
