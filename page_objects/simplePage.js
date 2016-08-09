module.exports = {
    elements: {
        body: 'body'
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
