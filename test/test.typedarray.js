/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	ones = require( './../lib/typedarray.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'ones-filled typed array', function tests() {

	it( 'should export a function', function test() {
		expect( ones ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided an unrecognized/unsupported data type option', function test() {
		var values = [
			'beep',
			'boop'
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( Error );
		}
		function badValue( value ) {
			return function() {
				ones( 10, value );
			};
		}
	});

	it( 'should return a ones-filled typed array', function test() {
		var actual, expected;

		actual = ones( 5, 'float32' );
		expected = new Float32Array( [1,1,1,1,1] );

		assert.deepEqual( actual, expected );

		actual = ones( 10, 'uint8_clamped' );
		expected = new Uint8ClampedArray( [1,1,1,1,1,1,1,1,1,1] );

		assert.deepEqual( actual, expected );
	});

});
