# generator-react-reduxable [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Create application with React + Redux based on modules.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-react-reduxable using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-react-reduxable
```

## How to use

Generate React + Redux project:

```bash
yo react-reduxable
```

If you will not want to generate full app, you can generate config and setup it:

```bash
yo react-reduxable:config
``` 

Generate component (using it from project root):

```bash
yo react-reduxable:component [--stateless, [--path, [--module]]]
```

## Configuration

You can set configuration in `.yo-rc.json` (generate it if it's not exists).

```
generator-react-reduxable
--paths           # where you
  --modules       # (root relative)
  --components    # dumb components (module relative)
  --containers    # (module relative)
  --store         # (module relative)
--defaultModule   # default module for generated elements
```

[npm-image]: https://badge.fury.io/js/generator-react-reduxable.svg
[npm-url]: https://npmjs.org/package/generator-react-reduxable
[travis-image]: https://travis-ci.org/jeshio/generator-react-reduxable.svg?branch=master
[travis-url]: https://travis-ci.org/jeshio/generator-react-reduxable
[daviddm-image]: https://david-dm.org/jeshio/generator-react-reduxable.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jeshio/generator-react-reduxable
