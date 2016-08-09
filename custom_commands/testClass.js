var util = require('util');
var events = require('events');

function CustomCommand() {
  events.EventEmitter.call(this);
}

//util.inherits(CustomCommand, events.EventEmitter);

CustomCommand.prototype.command = function() {
  console.log('Custom command class', !!this.api.pause);

  this.api.pause(1);

  // process.nextTick(function () {
  //   this.emit('complete');
  // }.bind(this));
};


module.exports = CustomCommand;
