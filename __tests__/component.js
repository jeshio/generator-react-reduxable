'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const run = () =>
  helpers
    .run(path.join(__dirname, '../generators/component'))
    .withArguments(['MyComponent']);

describe('generator-react-reduxable:component', () => {
  beforeAll(() => run());

  it('creates component file', () => {
    assert.file(['MyComponent.js']);
  });

  it('creates test files in subdir', () => {
    assert.file(['__tests__/MyComponent.spec.js']);
  });

  it('created component initialized by class', () => {
    assert.fileContent('MyComponent.js', /extends/);
  });
});

describe('generator-react-reduxable:component --stateless', () => {
  beforeAll(() => run().withOptions({ stateless: true }));

  it('created component is stateless', () => {
    assert.noFileContent('MyComponent.js', /extends/);
  });
});
