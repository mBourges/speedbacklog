const Good = require('good');
const GoodConsole = require('good-console');

module.exports = {
    register: Good,
    options: {
        reporters: [{
            reporter: GoodConsole,
            events: {
                request: '*',
                response: '*',
                log: '*',
                error: '*'
            }
        }]
    }
};