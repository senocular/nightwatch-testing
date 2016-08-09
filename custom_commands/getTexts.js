var util = require('util');
var events = require('events');

function GetTexts() {
  events.EventEmitter.call(this);
}

util.inherits(GetTexts, events.EventEmitter);

// TODO: todooooooooooooooooooooooooooooooo

GetTexts.prototype.command = function(selector, callback) {

  var Protocol = require('./protocol.js')(this.client);

  var getElsResult = Protocol.element('css selector', selector, function(result) {

    var getTextResult = Protocol.elementIdText(result.ELEMENT, function(result) {
      callback.call(this.api, result);
    }).once('complete', function() {
      this.complete(getTextResult, this);
    }.bind(this));

  }.bind(this));
};

GetTexts.prototype.complete = function() {
  process.nextTick(function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift('complete')
    this.emit.apply(this, args);
  }.bind(this));
};


module.exports = GetTexts;
