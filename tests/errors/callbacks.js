module.exports = {
    
    'click callback': function (browser) {
        browser.url('http://google.com');
        var google = browser.page.google();

        //google.click('@submitButton', null); // error
        //browser.click('button[name=btnG]', {}); // error
        browser.click('css selector', 'button[name=btnG]', function(){ console.log('CLICKED'); }); // works!
    },

    after: function (browser) { browser.end(); }
};