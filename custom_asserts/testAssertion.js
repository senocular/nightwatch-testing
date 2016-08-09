exports.assertion = function(expected) {

  /**
   * The message which will be used in the test output and
   * inside the XML reports
   * @type {string}
   */
  this.message = 'testing custom assertion';

  /**
   * A value to perform the assertion on. If a function is
   * defined, its result will be used.
   * @type {function|*}
   */
  this.expected = expected;

  /**
   * The method which performs the actual assertion. It is
   * called with the result of the value method as the argument.
   * @type {function}
   */
  this.pass = function(value) {
    // setTimeout(function(){ // YES
    //   this.emit('complete');
    // }.bind(this), 1);
    
    //this.api.pause(1); // Only if you don't return this in command()
    
    //this.complete(); // YES
    
    return value == expected;
  };

  /**
   * The method which returns the value to be used on the
   * assertion. It is called with the result of the command's
   * callback as argument.
   * @type {function}
   */
  this.value = function(result) {
    return 'foo';
  };

  /**
   * Performs a protocol command/action and its result is
   * passed to the value method via the callback argument.
   * @type {function}
   */
  this.command = function(callback) {


    //this.api.pause(1, callback); // OK
    
    // setTimeout(function(){ // OK
    //   callback();
    // }.bind(this), 1);

    callback(); // requires workaround with deferred complete

    return null; // used in queue return when checks for instanceof EventEmitter
  };

};
