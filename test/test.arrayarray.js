/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	ones = require( './../lib/arrayarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'ones-filled multidimensional array', function tests() {

	it( 'should export a function', function test() {
		expect( ones ).to.be.a( 'function' );
	});

	it( 'should return a ones-filled array of arrays', function test() {
		var actual, expected;

		actual = ones( [2,1] );
		expected = [ [1], [1] ];

		assert.deepEqual( actual, expected );

		actual = ones( [2,1,3] );
		expected = [ [[1,1,1]], [[1,1,1]] ];

		assert.deepEqual( actual, expected );
	});

});
