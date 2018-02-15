'use strict';
const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    // Name of component
    this.argument('name', { type: String, required: true });
    this.option('stateless');
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
    const stateless = this.options.stateless;
    this.log(stateless);
    this.fs.copyTpl(
      this.templatePath(stateless ? 'statelessComponent.js' : 'component.js'),
      this.destinationPath(`${name}.js`),
      { name }
    );
    this.fs.copyTpl(
      this.templatePath('__tests__/component.spec.js'),
      this.destinationPath(`__tests__/${name}.spec.js`),
      { name }
    );
  }
};
