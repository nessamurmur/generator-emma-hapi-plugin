'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-emma-hapi-plugin:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'test'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/test/index.js',
      'src/test/package.json'
    ]);
  });
});
