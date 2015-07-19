'use strict';

var ones = require( './../lib' ),
	out;

// ---
// Plain arrays...

// 1x10:
out = ones( 10 );
console.log( '1x10:' );
console.log( out );
console.log( '\n' );

// 2x1x3:
out = ones( [2,1,3] );
console.log( '2x1x3:' );
console.log( out );
console.log( '\n' );

// 5x5x5:
out = ones( [5,5,5] );
console.log( '5x5x5:' );
console.log( out );
console.log( '\n' );

// 10x5x10x20:
out = ones( [10,5,10,20] );
console.log( '10x5x10x20:' );
console.log( JSON.stringify( out ) );
console.log( '\n' );


// ---
// Typed arrays...
out = ones( 10, {
	'dtype': 'float32'
});
console.log( 'Typed arrays:' );
console.log( out );
console.log( '\n' );


// ---
// Matrices...
out = ones( [3,2], {
	'dtype': 'int32'
});
console.log( 'Matrix: %s\n', out.toString() );
