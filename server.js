if(process.env.NODE_ENV == 'production') {
    require('newrelic');
} else {
    require('dotenv').load();
}

const Hapi = require('hapi');
const Boom = require('boom');
const Logger = require('./configuration/logger');

const db = require('./model');

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
    
    db.sequelize.sync()
        .then(() => {
            server.log('Database Ready');
        }).catch(err => {
            server.error('Database error:', err);
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
        path: '/project',
        handler: function(request, reply) {
            db.Project.findAll()
                .then(projects => {
                    reply(projects);
                }).catch(err => {
                    reply(Boom.badRequest(err));
                });
        }
    });
    
    server.route({
        method: 'GET',
        path: '/project/{id}',
        handler: function(request, reply) {
            const projectId = request.params.id;
            
            db.Project.findById(projectId, { include: ['UserStory'] })
                .then(project => {
                    reply(project);
                }).catch(err => {
                    reply(Boom.badRequest(err));
                });
        }
    });
    
    server.route({
        method: 'POST',
        path: '/project',
        config: {
            payload: {
                output: 'data',
                parse: true,
                allow: 'application/json'
            }
        },
        handler: function(request, reply) {
            const entity = request.payload;
            
            db.Project.create(entity)
                .then(newEntity => {
                    reply(newEntity);
                }).catch(err => {
                    reply(Boom.badRequest(err));
                });
        }
    });
    
    server.route({
        method: 'POST',
        path: '/project/{id}/userStory',
        config: {
            payload: {
                output: 'data',
                parse: true,
                allow: 'application/json'
            }
        },
        handler: function(request, reply) {
            const projectId = request.params.id;
            const entity = request.payload;
            
            db.Project.findById(projectId)
                .then(project => {
                    project.createUserStory(entity)
                        .then(userStory => {
                            reply(userStory);
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

