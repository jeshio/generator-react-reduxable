'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-react-reduxable:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withArguments(['MyApp'])
      .withOptions({ 'not-create-react-app': true });
  });

  it('creates constants file in core module', () => {
    assert.file(['src/modules/core/constants.js']);
  });
});
