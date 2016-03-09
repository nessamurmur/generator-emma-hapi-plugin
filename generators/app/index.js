'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the shining ' + chalk.red('emma-hapi-plugin') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'name',
      message: 'What is your plugin\'s name?',
      default: 'my-plugin'
    }];

    this.prompt(prompts, function (props) {
      this.props = props;

      this.log(yosay(
        chalk.green(this.props.name) + ' is a great name!'
      ));

      done();
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('src/' + this.props.name + '/package.json'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('src/' + this.props.name + '/index.js'),
      this.props
    );

    this.fs.copyTpl(
      this.templatePath('test.js'),
      this.destinationPath('test/src/' + this.props.name + '/index.js'),
      this.props
    )
  },

  end: function() {
    this.log(yosay(
      chalk.red("Don't forget to add your new plugin to your config!")
    ));
  }
});
