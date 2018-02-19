'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const config = require('../generators/config/config').defaults();
const defaultModulePath = `${config.paths.modules}${config.defaultModule}/`;

describe('generator-react-reduxable:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments(['MyApp'])
      .withOptions({ 'not-create-react-app': true });
  });

  it('creates constants file in core module', () => {
    assert.file([`${defaultModulePath}constants.js`]);
  });

  it('should create .yo-rc config', () => {
    assert.file(['.yo-rc.json']);
  });
});
