var googleCommands = {
  submit: function() {
    this.api.pause(1000);
    return this.waitForElementVisible('@submitButton', 1000)
      .click('@submitButton')
      .waitForElementNotPresent('#hplogo', 1000);
  }
};

module.exports = {
  url: function () {
      return 'http://google.com'
  },
  commands: [googleCommands,
  {
    testNavigate: function () {
      this.navigate();
      this.api.pause(500);
      console.log('done');
    }
  }],
  elements: {
    searchBar: {
      selector: 'input[type=text]'
    },
    submitButton: {
      selector: 'button[name=btnG]'
    }
  }
};