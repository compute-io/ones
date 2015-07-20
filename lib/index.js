'use strict';

// MODULES //

var isPositiveIntegerArray = require( 'validate.io-positive-integer-array' ),
	isPositiveInteger = require( 'validate.io-positive-integer' ),
	validate = require( './validate.js' ),
	compile = require( './compile.js' );


// FUNCTIONS //

var array = require( './array.js' ),
	typedarray = require( './typedarray.js' ),
	arrayarray = require( './arrayarray.js' ),
	matrix = require( './matrix.js' );


// ONES //

/**
* FUNCTION: ones( dims[, opts] )
*	Creates a ones-filled matrix or array.
*
* @param {Number|Number[]} dims - dimensions
* @param {Object} [opts] - function options
* @param {String} [opts.dtype="generic"] - output data type
* @returns {Array|Number[]|Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array|Matrix} ones
*/
function ones( dims, options ) {
	var opts = {},
		isArray,
		ndims,
		err,
		len,
		dt;

	isArray = isPositiveIntegerArray( dims );
	if ( !isArray && !isPositiveInteger( dims ) ) {
		throw new TypeError( 'ones()::invalid input argument. Dimensions argument must be either a positive integer or a positive integer array. Value: `' + dims + '`.' );
	}
	if ( arguments.length > 1 ) {
		err = validate( opts, options );
		if ( err ) {
			throw err;
		}
	}
	dt = opts.dtype || 'generic';
	if ( isArray ) {
		ndims = dims.length;
		if ( ndims < 2 ) {
			len = dims[ 0 ];
		}
	} else {
		ndims = 1;
		len = dims;
	}
	// 1-dimensional data structures...
	if ( ndims === 1 ) {
		if ( dt === 'generic' ) {
			return array( len );
		}
		return typedarray( len, dt );
	}
	// Multidimensional data structures...
	if ( dt !== 'generic' ) {
		if ( ndims === 2 ) {
			return matrix( dims, dt );
		}
		// TODO: dstructs-ndarray support goes here. Until then, fall through to plain arrays...
	}
	return arrayarray( dims );
} // end FUNCTION ones()


// EXPORTS //

module.exports = ones;
module.exports.compile = compile;
