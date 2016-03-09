'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-emma-hapi-plugin:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: 'plugin'})
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      'src/plugin/index.js',
      'src/plugin/package.json',
      'test/src/plugin/index.js'
    ]);
  });
});
