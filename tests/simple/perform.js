module.exports = {
  '@disabled': true,
  
  'perform': function (browser) {
    browser
        .perform(function(){
            console.log('perform() sync. Match?', arguments[0] === browser);
        })
        .perform(function(done){
            console.log('perform() async (1)');
            setTimeout(done, 1000);
        })
        .perform(function(client, done){
            console.log('perform() async (2). Match?', client === browser);
            setTimeout(done, 1000);
        })
        .end();
  }
};