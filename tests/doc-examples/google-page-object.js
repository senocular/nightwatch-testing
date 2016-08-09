module.exports = {
  
  'Test': function (client) {
    var google = client.page.google();
    google
      .navigate()
      .waitForElementVisible('#hplogo', 3000, true, function() {
        console.log('API:', typeof this.api);
      })
      .setValue('@searchBar', 'nightwatch')
      .submit();

    client.end();
  }
};