'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-react-reduxable:config', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/config')));
  });

  it('creates config in root', () => {
    assert.file(['.yo-rc.json']);
  });

  it('add default values to config', () => {
    assert.fileContent('.yo-rc.json', 'paths');
    assert.fileContent('.yo-rc.json', 'modules');
    assert.fileContent('.yo-rc.json', 'components');
    assert.fileContent('.yo-rc.json', 'store');
    assert.fileContent('.yo-rc.json', 'defaultModule');
  });
});
