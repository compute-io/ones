'use strict';

// MODULES //

var ctors = require( 'compute-array-constructors' );


// ONES //

/**
* FUNCTION: ones( len, dt )
*	Creates a ones-filled typed array.
*
* @param {Number} len - array length
* @param {String} dt - data type
* @returns {Int8Array|Uint8Array|Uint8ClampedArray|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array|Float64Array} ones-filled typed array
*/
function ones( len, dt ) {
	/* jshint newcap:false */
	var ctor,
		out,
		i;

	ctor = ctors( dt );
	if ( ctor === null ) {
		throw new Error( 'ones()::invalid value. Data type does not have a corresponding array constructor. Value: `' + dt + '`.' );
	}
	out = new ctor( len );
	for ( i = 0; i < len; i++ ) {
		out[ i ] = 1;
	}
	return out;
} // end FUNCTION ones()


// EXPORTS //

module.exports = ones;
