module.exports = function GetClient () {
  this.command = function(callback) {
    var client = this.client;
    this.api.perform(function(){
      callback.call(this.api, client);
    });
  };
};
