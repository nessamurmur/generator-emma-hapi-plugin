'use strict';

var assert = require('assert');
var Glue = require('glue');
var testManifest = require('../../../config/test.json');

describe("/<% name %>", function () {
    var server;

    beforeEach(function (done) {
        Glue.compose(testManifest, { relativeTo: process.cwd() }, function (err, serv) {
            server = serv;
            done();
        });
    });

    it("should fix me", function (done) {
        server.inject('/<% name %>', function (res) {
            assert.equal(res.statusCode, 404);
            assert.equal(res.payload.length, 0);
            done();
        })
    });
});
