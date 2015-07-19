Ones
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Creates a ones-filled [matrix](https://github.com/dstructs/matrix) or array.


## Installation

``` bash
$ npm install compute-ones
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var ones = require( 'compute-ones' );
```

#### ones( dims[, opts] )

Creates a ones-filled [`matrix`](https://github.com/dstructs/matrix) or [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). The `dims` argument may either be a positive `integer` specifying a `length` or an `array` of positive `integers` specifying dimensions.

``` javascript
var out;

out = ones( 5 );
// returns [ 1, 1, 1, 1, 1 ];

out = ones( [2,1,2] );
// returns [ [ [1,1] ], [ [1,1] ] ]
```

The function accepts the following `options`:

*	__dtype__: output [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix) data type. Default: `generic`.

By default, the output data structure is a generic [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array). To output a [`typed array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays) or [`matrix`](https://github.com/dstructs/matrix), set the `dtype` option (see [`matrix`](https://github.com/dstructs/matrix) for a list of acceptable data types).

``` javascript
var out;

out = ones( 5, {
	'float32'
});
// returns Float32Array( [1,1,1,1,1] );

out = ones( [3,2], {
	'int32'
});
/*
	[ 1 1
	  1 1
	  1 1 ]
*/
```

__Notes__:
*	Currently, for more than `2` dimensions, the function outputs a __generic__ `array` and ignores any specified `dtype`.

	``` javascript
	var out = ones( [2,1,3], {
		'float32'
	});
	// returns [ [ [1,1,1] ], [ [1,1,1] ] ]
	```


#### ones.compile( dims )

Compiles a `function` for creating ones-filled [`arrays`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) having specified dimensions.

``` javascript
var fcn, out;

fcn = ones.compile( [2,1,3] );

out = fcn();
// returns [ [ [1,1,1] ], [ [1,1,1] ] ]

out = fcn();
// returns [ [ [1,1,1] ], [ [1,1,1] ] ]
```

__Notes__:
*	When repeatedly creating [`arrays`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) having the same shape, creating a customized `ones` function will provide performance benefits.




## Examples

``` javascript
var ones = require( 'compute-ones' ),
	out;

// Plain arrays...

// 1x10:
out = ones( 10 );

// 2x1x3:
out = ones( [2,1,3] );

// 5x5x5:
out = ones( [5,5,5] );

// 10x5x10x20:
out = ones( [10,5,10,20] );

// Typed arrays...
out = ones( 10, {
	'dtype': 'float32'
});

// Matrices...
out = ones( [3,2], {
	'dtype': 'int32'
});
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
