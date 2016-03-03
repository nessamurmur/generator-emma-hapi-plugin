'use strict';

exports.register = function (server, options, next) {
    server.route({
        method: 'GET',
        path: '/<%= name %>',
        handler: function (request, reply) {
            return reply("Hello world");
        },
        config: { cors: false },
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json'),
};
