module.exports = {
    elements: {
        body: 'body',
        child: {
            selector: 'child',
            locateStrategy: 'id'
        }
    },
    commands: [
        {
            useTestCommands: function () {
                this.testFunction();
                this.api.testFunction();
                this.testClass();
                this.api.testClass();

                return 1;
            },

            empty: function () {

            },

            perform: function (fn) {
                this.api.perform(fn);
            }
        }
    ]
};
