/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	ones = require( './../lib/array.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'ones-filled array', function tests() {

	it( 'should export a function', function test() {
		expect( ones ).to.be.a( 'function' );
	});

	it( 'should return a ones-filled array', function test() {
		var actual, expected;

		actual = ones( 5 );
		expected = [ 1, 1, 1, 1, 1 ];

		assert.deepEqual( actual, expected );
	});

	it( 'should support fast elements', function test() {
		var actual, i;

		this.timeout( 0 );

		actual = ones( 100000 );
		for ( i = 0; i < actual.length; i++ ) {
			assert.strictEqual( actual[ i ], 1 );
		}
	});

});
