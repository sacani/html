var file = process.argv[ 2 ]
const fs = require( 'fs' )
var buffer = fs.readFileSync( file )
var string = buffer.toString()
var array = string.split( '\n' )
var numberOfLines = array.length - 1
console.log( numberOfLines )
