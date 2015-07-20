'use strict';

/**
* FUNCTION: ones( len )
*	Creates a ones-filled array.
*
* @param {Number} len - array length
* @returns {Number[]} ones-filled array
*/
function ones( len ) {
	var out,
		i;

	// Ensure fast elements...
	if ( len < 64000 ) {
		out = new Array( len );
		for ( i = 0; i < len; i++ ) {
			out[ i ] = 1;
		}
	} else {
		out = [];
		for ( i = 0; i < len; i++ ) {
			out.push( 1 );
		}
	}
	return out;
} // end FUNCTION ones()


// EXPORTS //

module.exports = ones;
