'use strict';

// MODULES //

var recurse = require( './recurse.js' );


// ONES //

/**
* FUNCTION: ones( dims )
*	Creates a ones-filled multidimensional array.
*
* @param {Number[]} dims - dimensions
* @returns {Array} ones-filled multidimensional array
*/
function ones( dims ) {
	return recurse( dims, 0 );
} // end FUNCTION ones()


// EXPORTS //

module.exports = ones;
