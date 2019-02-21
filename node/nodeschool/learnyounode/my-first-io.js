file = process.argv[ 2 ]
fs = require( 'fs' )
buffer = fs.readFileSync( file )
string = buffer.toString()
array = string.split( '\n' )
numberOfLines = array.length - 1
console.log( numberOfLines 
