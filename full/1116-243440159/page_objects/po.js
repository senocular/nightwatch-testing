var util = require('util');

module.exports = {

  sections: {

    firstSec: {

      commands: [
        {
          formatEl: function (modifier) {

            // create new, temporary selector
            var options = Object.create(this);
            options.sections = {};
            options.elements = {};
            var name;
            for (name in this.section)
              options.sections[name] = Object.create(this.section[name]);
            for (name in this.elements)
              options.elements[name] = Object.create(this.elements[name]);
            var Section = this.constructor;
            var sec = new Section(options);

            // make the selector change
            sec.selector =  util.format(this.props.selector, modifier);
            return sec;
          }
        }
      ],

      props: {
        selector: '.product[data-product-name="%s"]' // format string for dynamic selector
      },

      selector: '.product', // default, unformated selector

      elements: {

        testEl: {
          selector: '.something',
        },
      },
    },
  },
};