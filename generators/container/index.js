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
    const containersPath = config.paths.containers;
    const defaultModule = config.defaultModule;

    // Name of container
    this.argument('name', { type: String, required: true });

    // Options
    this.option('module', {
      default: defaultModule,
      desc: 'Module of container',
      type: String
    });

    const defaultPath = `${modulesPath}${this.options.module}/${containersPath}`;
    this.option('path', {
      default: defaultPath,
      desc: 'Custom path of container',
      type: String
    });

    this.option('componentsPath', {
      default: componentsPath,
      desc: 'Custom path of dumb components',
      type: String
    });
  }

  writing() {
    const { name, path, componentsPath } = this.options;
    this.fs.copyTpl(
      this.templatePath('container.js'),
      this.destinationPath(`${path}${name}.js`),
      { name, componentsPath }
    );
    this.fs.copyTpl(
      this.templatePath('__tests__/container.spec.js'),
      this.destinationPath(`${path}__tests__/${name}.spec.js`),
      { name }
    );
  }
};
