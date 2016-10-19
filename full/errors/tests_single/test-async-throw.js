module.exports = {
    before: function () {
        console.log('--- before fn ---')
    },
    beforeEach: function (browser, done) {
        console.log('--- beforeEach fn ---')
        done();
    },
    afterEach: function () {
        console.log('--- afterEach fn ---')
    },
    after: function () {
        console.log('--- after fn ---')
        this.client.end();
    },

    test: function (browser) {
        console.log('--- test fn ---')
        browser.pause(1000);
        setTimeout(function testAsyncThrow(){
           throw new Error('test throw');
        }, 100)
    },
    
    testB: function (browser) {
        console.log('--- testB fn ---');
    },
};