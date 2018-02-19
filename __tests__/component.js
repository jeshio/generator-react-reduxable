'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const config = require('../generators/config/config').defaults();
const defaultComponentsPath = `${config.paths.modules}${config.defaultModule}/${
  config.paths.components
}`;

const run = () =>
  helpers
    .run(path.join(__dirname, '../generators/component'))
    .withArguments(['MyComponent']);

describe('generator-react-reduxable:component', () => {
  beforeAll(() => run());

  it('creates component file in default path', () => {
    assert.file([`${defaultComponentsPath}MyComponent.js`]);
  });

  it('creates test files in subdir', () => {
    assert.file([`${defaultComponentsPath}__tests__/MyComponent.spec.js`]);
  });

  it('creates component initialized by class', () => {
    assert.fileContent(`${defaultComponentsPath}MyComponent.js`, /extends/);
  });

  it('creates component by input name', () => {
    assert.fileContent(`${defaultComponentsPath}MyComponent.js`, 'MyComponent');
  });
});

describe('generator-react-reduxable:component with options', () => {
  it('creates stateless component', async () => {
    await run().withOptions({ stateless: true });
    assert.noFileContent(`${defaultComponentsPath}MyComponent.js`, /extends/);
  });

  it('generates component by prop path', async () => {
    await run().withOptions({ path: 'dir/childDir/' });
    assert.file(['dir/childDir/MyComponent.js']);
  });

  it('generates component by module', async () => {
    await run().withOptions({ module: 'TestModule' });

    assert.file([
      `${config.paths.modules}TestModule/${config.paths.components}MyComponent.js`
    ]);
  });
});
