'use strict';

/**
* FUNCTION: recurse( dims, d )
*	Recursively create a ones-filled multidimensional array.
*
* @param {Number[]} dims - dimensions
* @param {Number} d - current recursion depth
* @returns {Array} output array
*/
function recurse( dims, d ) {
	var out = [],
		len,
		i;

	len = dims[ d ];
	d += 1;
	if ( d < dims.length ) {
		for ( i = 0; i < len; i++ ) {
			out.push( recurse( dims, d ) );
		}
	} else {
		for ( i = 0; i < len; i++ ) {
			out.push( 1 );
		}
	}
	return out;
} // end FUNCTION recurse()


// EXPORTS //

module.exports = recurse;
