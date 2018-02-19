'use strict';
const Generator = require('yeoman-generator');
const defaultConfig = require('./config');

module.exports = class extends Generator {
  writing() {
    this.config.defaults(defaultConfig.defaults());
  }
};
