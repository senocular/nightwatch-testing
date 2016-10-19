module.exports = {
  tags: ['test'],

  "test 1" : function(client) {
    var googleSections = client.page.sections();
    var google = googleSections.section.test;

    client
     .init("https://google.com")
     .waitForElementVisible("body", 1000);

    google
       .assert.containsText("@testGoogle", "Terms-NUP");

    client.perform(function(){
      console.log('PERFORM:',google.client.locateStategy)
    })
    client.end();
  },

  "test 2" : function(client) {
    client
     .init("https://google.com")
     .waitForElementVisible("body", 1000);

    client
     .end();
  }
};