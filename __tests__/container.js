'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const config = require('../generators/config/config').defaults();
const defaultContainersPath = `${config.paths.modules}${config.defaultModule}/${
  config.paths.containers
}`;
const exampleName = 'MyContainer';

const run = () =>
  helpers
    .run(path.join(__dirname, '../generators/container'))
    .withArguments(['MyContainer']);

describe('generator-react-reduxable:container', () => {
  beforeAll(() => run());

  it('creates container file in default path', () => {
    assert.file([`${defaultContainersPath}${exampleName}.js`]);
  });

  it('creates test files in subdir', () => {
    assert.file([`${defaultContainersPath}__tests__/${exampleName}.spec.js`]);
  });

  it('creates container by input name', () => {
    assert.fileContent(`${defaultContainersPath}${exampleName}.js`, exampleName);
  });

  it('creates container with components import', () => {
    assert.fileContent(
      `${defaultContainersPath}${exampleName}.js`,
      config.paths.components
    );
  });
});

describe('generator-react-reduxable:container with options', () => {
  it('should generate container by prop path', async () => {
    await run().withOptions({ path: 'dir/childDir/' });
    assert.file([`dir/childDir/${exampleName}.js`]);
  });

  it('should generate container by module', async () => {
    await run().withOptions({ module: 'TestModule' });

    assert.file([
      `${config.paths.modules}TestModule/${config.paths.containers}${exampleName}.js`
    ]);
  });
});
