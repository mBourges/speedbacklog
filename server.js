if(process.env.NODE_ENV == 'production') {
    require('newrelic');
} else {
    require('dotenv').load();
}

const Hapi = require('hapi');
const Immutable = require('immutable');
const Boom = require('boom');
const Logger = require('./configuration/logger');
const Database = require('./configuration/database');
const Sequelize = require('sequelize');

const Projects = Database.define('Projects', {
  Name: {
    type: Sequelize.STRING,
  },
  ClientName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true
});
Projects.sync();

const server = new Hapi.Server();

server.connection({
    host: process.env.IP,
    port: process.env.PORT 
});

server.register([Logger], err => {
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
    
    server.route({
        method: 'POST',
        path: '/create',
        config: {
            payload: {
                output: 'data',
                parse: true,
                allow: 'application/json'
            }
        },
        handler: function(request, reply) {
            const entity = request.payload;
            
            Projects.create(entity)
                .then(newEntity => {
                    reply(newEntity);
                }).catch(err => {
                    reply(Boom.badRequest(err));
                });
        }
    });

    server.start(err => {
        if (err) {
            return server.error('server', err);
        }
        
        server.log('server', 'Server started on: ' + server.info.uri);
    });
    
});

