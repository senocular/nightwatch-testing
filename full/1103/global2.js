module.exports = {
    asyncHookTimeout: 2000,

    errorTesting: {
        locations: ['global', 'suite'],
        hooks: ['before', 'beforeEach', 'afterEach', 'after'],
        errors: ['timeout', 'throw', 'throw-async', 'done-throw', 'done-throw-async'],
        test: {
            location: 'global',
            hook: 'beforeEach',
            error: 'throw-async',
            logging: true,
        },
        history: [],
        runHook: function (location, hook, done) {

            var test =  this.test;
            var timeoutTime = 100;
            var isTesting = this.isValidTestDefined();
            var isTestMatch = isTesting && location === test.location && hook === test.hook;

            if (test.logging) {

                var loc = location + '.' + hook;
                this.history.push(loc);

                var msg = ('=== In ' + loc).toUpperCase();
                if (isTestMatch) {
                    msg += ' testing: ' + JSON.stringify(test);
                }
                console.log(msg);
            }

            if (isTestMatch) {

                switch (test.error) {

                    case 'timeout':
                        return;

                    case 'throw':
                        this.throwError();
                        return;

                    case 'throw-async':
                        setTimeout(function(){
                            this.throwError();
                        }.bind(this), timeoutTime);
                        return;

                    case 'done-throw':
                        done();
                        this.throwError();
                        return;

                    case 'done-throw-async':
                        setTimeout(function(){
                            done();
                            this.throwError();
                        }.bind(this), timeoutTime);
                        return;
                }
            }

            done();
        },

        isValidTestDefined: function() {
            var test =  this.test;
            if (this.locations.indexOf(test.location) !== -1 &&
                this.hooks.indexOf(test.hook) !== -1 &&
                this.errors.indexOf(test.error) !== -1) {

                return true;
            }
            return false;
        },

        throwError: function() {

            throw new Error('Message thrown for ' + JSON.stringify(this.test) + '.');
        }
    },


    before: function (done) {
        this.errorTesting.runHook('global', 'before', done);
    },
    beforeEach: function (browser, done) {
        this.errorTesting.runHook('global', 'beforeEach', done);
    },
    afterEach: function (browser, done) {
        this.errorTesting.runHook('global', 'afterEach', done);
    },
    after: function (done) {
        this.errorTesting.runHook('global', 'after', done);
    }
};