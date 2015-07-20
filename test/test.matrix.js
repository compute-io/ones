/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	ones = require( './../lib/matrix.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'ones-filled matrix', function tests() {

	it( 'should export a function', function test() {
		expect( ones ).to.be.a( 'function' );
	});

	it( 'should return a ones-filled matrix', function test() {
		var actual, expected;

		actual = ones( [2,2], 'int32' );

		expected = new Int32Array( 4 );
		for ( var i = 0; i < expected.length; i++ ) {
			expected[ i ] = 1;
		}

		assert.deepEqual( actual.shape, [2,2] );
		assert.strictEqual( actual.dtype, 'int32' );
		assert.deepEqual( actual.data, expected );
	});

});
