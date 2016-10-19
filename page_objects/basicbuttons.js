module.exports = {
    url: 'http://127.0.0.1:8080/basicbuttons.html',
    elements: {
        anybutton: { selector: 'button' },
    },
    sections: {
        parentSec: {
            selector: '#parent',
            elements: {
                anybutton: { selector: 'button' },
            },
            sections: {
                childSec: {
                    selector: '#child',
                    elements: {
                        anybutton: { selector: 'button' },
                    }
                }
            }
        }
    }
};
