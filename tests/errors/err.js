module.exports = {
    'fatal': !function (browser) {
        browser
            .getText(null, function (result) {
                console.log(result);
            })
            .perform(function(){
                console.log('AFTER ERROR');
            });
    },

    'expect': !function (browser) {
        try {
            browser.expect.element('doesnotexist').to.be.present;
        }catch(err){
            console.log('ERR?', err);
        }
        browser.perform(function () {
            console.log('AFTER EXPECT!');
        });
    },

    // before: function (browser, done) {
    //     console.log('=== IN BEFORE')
    //     counter = 0;
    // },

    beforeEach: function (browser, done) {
        console.log('=== IN BEFOREEACH');
    },

    // afterEach: function (browser, done) {
    //    console.log('=== IN AFTEREACH');
    // },

    'inert': function (browser) {
        browser.assert.ok(true);
    },

    'inert2': !function (browser) {
        browser.assert.ok(true);
    },

    after: function (browser) { 
        console.log('=== IN AFTER')
        browser.end();
    }
};
var counter = 0;

/*
empty string selector:
  selenium error
    status: -1,
    errorStatus: 32,
    error: 'Argument was an invalid selector (e.g. XPath/CSS).'
  + logged error in output: ERROR: Unable to locate element: "" using: css selector

null selector
  selenium error
    status: -1,
    errorStatus: 13,
    error: 'An unknown server-side error occurred while processing the command.'
  + ERROR: Unable to locate element: "null" using: css selector
*/