module.exports = {

  'pages have api': function (browser) {
    var page = browser.page.hasApi();
    console.log('url', typeof page.url);
    console.log('title', typeof page.title);
    // console.log('pause?', page === page.pause(1, function () {
    //     console.log('this page (callback)?', page === this);
    // }));

    // console.log('not perform?', page.perform !== page.api.perform);
  },
  
  'pagified commands': function (browser) {

    var page = browser.page.hasApi();
    var chain = page.click('body', function() {
      console.log('click callback context is page:', this === page);
    });
    console.log('click is page:', chain === page);

    chain = page.pause(1, function() {
      console.log('pause callback context is page:', this === page);
    });
    console.log('pause is page:', chain === page);
  },

  after: function (browser) { browser.end(); }
};