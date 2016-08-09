module.exports = {

  testExecute: function (browser) {
    browser
      .execute(function(data) {
        try {
          document.body.innerHTML += "YOYOYOYOYOYOYYOYOYO"; // OK
          // document.write("hello"); // NUP
        }catch(e){
          return e.message;
        }
        return data + 1;
      }, [1], function(result) {
        console.log('EXEC COMPLETE', result);
      })
      .pause(1000)
      .perform(function(){
        console.log('COMPLETE');
      });

  },

    // browser
    //   .execute(function(data,done) {
    //     document.write(JSON.stringify(arguments));
    //     setTimeout(done,1000);
    //     //return data + 1;
    //   }, [1], function(result) {
    //     console.log('EXEC COMPLETE', result);
    //   })
    //   .pause(2000)
    //   .perform(function(){
    //     console.log('COMPLETE');
    //   });

  after: function (browser) {
    browser.end();
  }
};