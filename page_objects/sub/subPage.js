module.exports = {
    elements: {},
    commands: [
        {
            subCommand: function(){
                console.log('SUBCOMMAND');
                return this;
            }
        }
    ]
};