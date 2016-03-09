'use strict';

exports.register = function (server, options, next) {
    server.route({
        method: 'GET',
        path: '/<%= name %>',
        handler: function (request, reply) {
            return reply("Hello world");
        }
    });

    next();
};

exports.register.attributes = {
    pkg: require('./package.json'),
};
