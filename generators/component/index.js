'use strict';
const Generator = require('yeoman-generator');
const defaultConfig = require('../config/config');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
    this.config.defaults(defaultConfig.defaults());
    const config = this.config.getAll();
    const modulesPath = config.paths.modules;
    const componentsPath = config.paths.components;
    const defaultModule = config.defaultModule;

    // Name of component
    this.argument('name', { type: String, required: true });
    this.option('stateless', {
      default: false,
      desc: 'Generate with stateless structure'
    });

    this.option('module', {
      default: defaultModule,
      desc: 'Module of component',
      type: String
    });

    const defaultPath = `${modulesPath}${this.options.module}/${componentsPath}`;
    this.option('path', {
      default: defaultPath,
      desc: 'Custom path of component',
      type: String
    });
  }

  prompting() {
    const prompts = [];

    if (!this.options.name) {
      prompts.push({
        type: 'input',
        name: 'name',
        message: "What's the component name?"
      });
    }

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const name = this.props.name || this.options.name;
    const { path } = this.options;
    this.log(path);
    const stateless = this.options.stateless;
    this.fs.copyTpl(
      this.templatePath(stateless ? 'statelessComponent.js' : 'component.js'),
      this.destinationPath(`${path}${name}.js`),
      { name }
    );
    this.fs.copyTpl(
      this.templatePath('__tests__/component.spec.js'),
      this.destinationPath(`${path}__tests__/${name}.spec.js`),
      { name }
    );
  }
};
