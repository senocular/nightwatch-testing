
module.exports = {
    url: 'http://127.0.0.1:8080/random.html',

    elements: {
        body: 'body'
    },

    commands: [
        {
            el: function (elementName, more){
                var element = this.elements[elementName.slice(1)];
                var sel = (typeof element === 'object') ? element.selector : element;
                return sel + more;
            }
        }
    ]
};
