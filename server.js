require('newrelic');

if(process.env.NODE_ENV != 'production') {
    require('dotenv').load();
}

const Hapi = require('hapi');
const Immutable = require('immutable');
const Boom = require('boom');
const Good = require('good');
const GoodWinston = require('good-console');

const logger = {
    register: Good,
    options: {
        reporters: [{
            reporter: GoodWinston,
            events: {
                request: '*',
                response: '*',
                log: '*',
                error: '*'
            }
        }]
    }
};

const server = new Hapi.Server();

server.connection({
    host: process.env.IP,
    port: process.env.PORT 
});

server.register([logger], err => {
    if(err) {
        server.error('Error: ', err);
        return ;
    }
    
    server.route({
        method: 'GET',
        path: '/_health',
        handler: function(request, reply) {
            reply('ok');
        }
    });
    
    server.start(err => {
        if (err) {
            return server.error('server', err);
        }
        
        server.log('server', 'Server started on: ' + server.info.uri);
    });
    
});