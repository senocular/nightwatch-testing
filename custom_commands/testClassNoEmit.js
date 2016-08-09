function CustomCommand() {

  this.command = function() {
    console.log('Custom command class');

    this.api.pause(1);

    process.nextTick(function () {
      this.emit('complete');
    }.bind(this));
  };
}


module.exports = function CustomCommand2 () {

  this.command = function() {
    console.log('Custom command 2 class');

    this.api.pause(1); // OK

    // process.nextTick(function () {
    //   this.emit('complete');
    // }.bind(this));
  };
};
