/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	ones = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-ones', function tests() {

	it( 'should export a function', function test() {
		expect( ones ).to.be.a( 'function' );
	});

	it( 'should export a function to compile a ones function', function test() {
		expect( ones.compile ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provided a positive integer or an array of positive integers', function test() {
		var values = [
			'5',
			0,
			Math.PI,
			-1,
			NaN,
			true,
			null,
			undefined,
			{},
			[1,0],
			[1,null],
			[1,Math.PI],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}

		function badValue( value ) {
			return function() {
				ones( value );
			};
		}
	});

	it( 'should throw an error if provided an invalid option', function test() {
		var values = [
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{},
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				ones( [1,2,3], {
					'dtype': value
				});
			};
		}
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
				ones( [10], {
					'dtype': value
				});
			};
		}
	});

	it( 'should return a ones-filled matrix', function test() {
		var actual, expected;

		actual = ones( [2,2], {
			'dtype': 'int32'
		});

		expected = new Int32Array( 4 );
		for ( var i = 0; i < expected.length; i++ ) {
			expected[ i ] = 1;
		}

		assert.deepEqual( actual.shape, [2,2] );
		assert.strictEqual( actual.dtype, 'int32' );
		assert.deepEqual( actual.data, expected );
	});

	it( 'should return a ones-filled typed-array', function test() {
		var actual, expected;

		actual = ones( 5, {
			'dtype': 'float32'
		});
		expected = new Float32Array( [1,1,1,1,1] );

		assert.deepEqual( actual, expected );

		actual = ones( [10], {
			'dtype': 'uint8_clamped'
		});
		expected = new Uint8ClampedArray( [1,1,1,1,1,1,1,1,1,1] );

		assert.deepEqual( actual, expected );
	});

	it( 'should return a ones-filled generic array', function test() {
		var actual, expected;

		actual = ones( 5 );
		expected = [ 1, 1, 1, 1, 1 ];

		assert.deepEqual( actual, expected );

		actual = ones( [1] );
		expected = [ 1 ];

		assert.deepEqual( actual, expected );

		actual = ones( [2,1] );
		expected = [ [1], [1] ];

		assert.deepEqual( actual, expected );

		actual = ones( [2,1,3] );
		expected = [ [[1,1,1]], [[1,1,1]] ];

		assert.deepEqual( actual, expected );
	});

	it( 'should support fast elements', function test() {
		var actual, i;

		this.timeout( 0 );

		actual = ones( [100000] );
		for ( i = 0; i < actual.length; i++ ) {
			assert.strictEqual( actual[ i ], 1 );
		}

		actual = ones( [100000,2] );
		for ( i = 0; i < actual.length; i++ ) {
			assert.deepEqual( actual[ i ], [1,1] );
		}
	});

	it( 'should, until ndarrays are supported, ignore the `dtype` option and return a generic multidimensional array for >2 dimensions', function test() {
		var actual, expected;

		actual = ones( [2,1,3], {
			'dtype': 'float32'
		});
		expected = [ [[1,1,1]], [[1,1,1]] ];

		assert.deepEqual( actual, expected );
	});

});
