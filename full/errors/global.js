module.exports = {
    asyncHookTimeout: 3000,

    // before: function (done) {
    //     done();
    // },

    beforeEach: function (browser, done) {
        console.log('--- global beforeEach fn ---')

    //     browser.pause(1);
    //     browser.assert.elementPresent('#doesnotexist');
    //     // setTimeout(function(){
    //     //     console.log('global.beforeEach.done()')
    //     //     done();
    //     // }, 1500);

    //     //throw new Error('ERRRRRRRRRR')
        done();
    },

    // beforeEach: function () {
    //     console.log('BARE global.beforeEach.done()');
    // },

    // after: function (done) {
    //     console.log('Global.After');
    //     done();
    // },

    // afterEach: function (browser, done) {
    //     console.log('Global.AfterEach');
    //     console.log('Global.AfterEach Starting...');
    //     setTimeout(function(){
    //         console.log('Global.AfterEach Completed.');
    //         done();
    //     }, 3000);
        
    //     browser.end()
    //     browser.perform(function(pdone){
    //         console.log('in gAE: perform')
    //         setTimeout(function(){
    //             console.log('in gAE: setTimeout 2')
    //             pdone();
    //         }, 500);
    //         console.log('in gAE: perform done')
    //         done();
    //     })
    //     browser.perform(function(){
    //         console.log('Second perform')
    //     })
    //    browser.end(); // 
    //    done();
    //}

    afterEach: function (browser, done) {
        console.log('--- global afterEach fn ---')
        // browser.end(function(){
        //     done();
        // });
       done();
    }
};