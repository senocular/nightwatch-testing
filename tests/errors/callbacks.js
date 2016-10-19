module.exports = {
    
    'click callback': !function (browser) {
        browser.url('http://google.com');
        var google = browser.page.google();

        //google.click('@submitButton', null); // error
        //browser.click('button[name=btnG]', {}); // error
        browser.click('css selector', 'button[name=btnG]', function(){ console.log('CLICKED'); }); // works!
    },
    
    'selector response': function (browser) {
        browser.url('http://google.com');
        browser.element('css selector', '#foobarfoo', function (result) {
            console.log(result);
        })
    },

    after: function (browser) { browser.end(); }
};