module.exports = {
    before: function () {
        console.log('--- before fn ---')
    },
    beforeEach: function () {
        console.log('--- beforeEach fn ---')
       // var browser = this.client;
    },

    test: function (browser) {
        console.log('--- test fn ---')
        // browser.pause(500);
        // setTimeout(function(){
        //     throw new Error('async_err');
        // }, 250)
        // browser.assert.ok(true, 'truth')
        //throw new Error('sync_err');
        //browser.assert.ok(false, 'sync fail')
        //browser.assert.ok(true, 'sync pass')
    },
    
    // testB: function (browser) {
    //     console.log('--- testB fn ---');
    // },

    afterEach: function () {
        console.log('--- afterEach fn ---')
        // var browser = this.client;
        // browser.pause(500, function(){
        //     browser.assert.ok(true, 'paused')
        // });
    },
    after: function () {
        console.log('--- after fn ---')
    },
};