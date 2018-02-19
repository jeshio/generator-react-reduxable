'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const defaultConfig = require('../config/config');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.config.defaults(defaultConfig.defaults());

    // Name of component
    this.argument('name', { type: String, required: false });
    this.option('not-create-react-app');
  }

  prompting() {
    const prompts = [];
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to the fine ' + chalk.red('generator-react-reduxable') + ' generator!'
      )
    );

    if (!this.options.name) {
      prompts.push({
        type: 'input',
        name: 'name',
        message: "What's the application name?"
      });
    }

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  install() {
    if (!this.options['not-create-react-app']) {
      this.spawnCommand('create-react-app', ['.']);
    }
  }

  writing() {
    const name = this.props.name || this.options.name;
    const config = this.config.getAll();
    const modulesPath = config.paths.modules;
    const defaultModule = config.defaultModule;

    this.fs.copyTpl(
      this.templatePath('constants.js'),
      this.destinationPath(`${modulesPath}${defaultModule}/constants.js`),
      { appName: name }
    );
  }
};
