module.exports = {
  tags: ['git'],
  'Demo test GitHub' : function (client) {
    client
      .url('https://github.com/nightwatchjs/nightwatch')
      .waitForElementVisible('body', 1000)
      .assert.visible('.container h1 strosssng a')
  },
  
  'Demo test GitHub 2' : function (client) {
    client
      .assert.containsText('.container h1 strong a', 'nightwatch', 'Checking project title is set to nightwatch');
  },

  after : function(client) {
    client.end();
  }
};