ones
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a ones-filled matrix or array.


## Installation

``` bash
$ npm install compute-ones
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var foo = require( 'compute-ones' );
```

#### foo( arr )

What does this function do?


## Examples

``` javascript
var foo = require( 'compute-ones' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2015. The [Compute.io](https://github.com/compute-io) Authors.


[npm-image]: http://img.shields.io/npm/v/compute-ones.svg
[npm-url]: https://npmjs.org/package/compute-ones

[travis-image]: http://img.shields.io/travis/compute-io/ones/master.svg
[travis-url]: https://travis-ci.org/compute-io/ones

[coveralls-image]: https://img.shields.io/coveralls/compute-io/ones/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/ones?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/ones.svg
[dependencies-url]: https://david-dm.org/compute-io/ones

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/ones.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/ones

[github-issues-image]: http://img.shields.io/github/issues/compute-io/ones.svg
[github-issues-url]: https://github.com/compute-io/ones/issues
