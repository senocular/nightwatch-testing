module.exports = {
    url: 'http://nightwatch.org',
    elements: {
        body: 'body'
    },
    commands: [
        {

            empty: function () {},
            click: function () { return this; }
        }
    ]
};
