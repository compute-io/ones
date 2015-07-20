'use strict';

// MODULES //

var matrix = require( 'dstructs-matrix' );


// ONES //

/**
* FUNCTION: ones( dims, dt )
*	Creates a ones-filled matrix.
*
* @param {Number[]} dims - dimensions
* @param {String} dt - data type
* @returns {Matrix} ones-filled matrix
*/
function ones( dims, dt ) {
	var out,
		i;

	out = matrix( dims, dt );
	for ( i = 0; i < out.length; i++ ) {
		out.data[ i ] = 1;
	}
	return out;
} // end FUNCTION ones()


// EXPORTS //

module.exports = ones;
