'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const config = require('../generators/app/config').defaults();
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

  it('should add default values to .yo-rc', () => {
    assert.fileContent('.yo-rc.json', 'paths');
    assert.fileContent('.yo-rc.json', 'modules');
    assert.fileContent('.yo-rc.json', 'components');
    assert.fileContent('.yo-rc.json', 'store');
    assert.fileContent('.yo-rc.json', 'defaultModule');
  });
});
