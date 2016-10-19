module.exports = {
    before: function () {
        console.log('--- before fn ---')
    },
    beforeEach: function (browser, done) {
        console.log('--- beforeEach fn ---')
        done();
    },

    test: function (browser) {
        console.log('--- test fn ---')
        browser.pause(500);
        setTimeout(function(){
            throw new Error('hi');
        }, 250)
    },
    
    testB: function (browser) {
        console.log('--- testB fn ---');
    },

    afterEach: function () {
        console.log('--- afterEach fn ---')
    },
    after: function () {
        console.log('--- after fn ---')
    },
};