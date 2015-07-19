/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	recurse = require( './../lib/recurse.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'recursive creation', function tests() {

	it( 'should export a function', function test() {
		expect( recurse ).to.be.a( 'function' );
	});

	it( 'should create a ones-filled array', function test() {
		var expected, actual, i;

		expected = new Array( 10 );
		for ( i = 0; i < expected.length; i++ ) {
			expected[ i ] = 1;
		}

		actual = recurse( [10], 0 );

		assert.deepEqual( actual, expected );
	});

	it( 'should create a ones-filled multidimensional array', function test() {
		var expected, actual;

		expected = [
			[
				[1,1,1]
			],
			[
				[1,1,1]
			]
		];

		actual = recurse( [2,1,3], 0 );

		assert.deepEqual( actual, expected );
	});

});
