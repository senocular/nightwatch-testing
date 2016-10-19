
module.exports = {

  'commands': function (browser) {


    //browser.element('xpath','dfsdsd', console.log.bind(console))

    // console.log('START TEST');
    // browser.perform(function(){
    //     console.log('START TEST CALLBACK');
    // });

    // browser.testClass()
    // .perform(function(){
    //   console.log('after testClass');
    // })

    //browser.testClassNoEmit();
    browser.testFunction();

    // browser.perform(function(){
    //     console.log('END TEST CALLBACK');
    // });
    // console.log('END TEST');

    browser.end();
  },

  'page objects': !function (browser) {
    var page = browser.page.simplePage();
    var pageReturn = page.useTestCommands();

    console.log('Return == 1? ', pageReturn === 1);

    browser.end();
  }
};