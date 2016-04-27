require('./configuration/monitoring')(process.env.NODE_ENV);

if(process.env.NODE_ENV == 'development') {
    require('dotenv').load();
}

const Hapi = require('hapi');
const Boom = require('boom');
const Logger = require('./configuration/logger');
const Inert = require('inert');
const Path = require('path');

const db = require('./model');
const server = new Hapi.Server();

server.connection({
    host: process.env.IP,
    port: process.env.PORT 
});

server.register([Logger, Inert], err => {
    if(err) {
        server.error('Error: ', err);
        return ;
    }
    
    db.sequelize.sync()
        .then(() => {
            server.log(['Database'], 'Ready');
        }).catch(err => {
            server.log(['Database', 'error'], err);
        });
        
    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: Path.join(__dirname, 'public')
            }
        }
    });
    
    server.route({
        method: 'GET',
        path: '/_health',
        handler: function(request, reply) {
            reply('ok');
        }
    });
    
    server.route({
        method: 'GET',
        path: '/issue',
        handler: function(request, reply) {
            db.Issue.findAll({
                order: 'createdDate DESC'
            })
                .then(issues => {
                    reply(issues);
                }).catch(err => {
                    reply(Boom.badRequest(err));
                });
        }
    });
    
    server.route({
        method: 'GET',
        path: '/issue/{id}',
        handler: function(request, reply) {
            const issueId = request.params.id;
            
            db.Issue.findById(issueId, { include: [ db.Comment ] })
                .then(issue => {
                    reply(issue);
                }).catch(err => {
                    reply(Boom.badRequest(err));
                });
        }
    });
    
    server.route({
        method: 'POST',
        path: '/issue',
        config: {
            payload: {
                output: 'data',
                parse: true,
                allow: 'application/json'
            }
        },
        handler: function(request, reply) {
            const entity = request.payload;
            
            db.Issue.create(entity)
                .then(newEntity => {
                    reply(newEntity);
                }).catch(err => {
                    reply(Boom.badRequest(err));
                });
        }
    });
    
    server.route({
        method: 'POST',
        path: '/issue/{id}/comment',
        config: {
            payload: {
                output: 'data',
                parse: true,
                allow: 'application/json'
            }
        },
        handler: function(request, reply) {
            const issueId = request.params.id;
            const comment = request.payload;
            
            db.Issue.findById(issueId)
                .then(issue => {
                    issue.createUserStory(comment)
                        .then(comment => {
                            reply(comment);
                        }).catch(err => {
                            reply(Boom.badRequest(err));
                        });
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

