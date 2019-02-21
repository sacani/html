file = process.argv[ 2 ]
fs = require( 'fs' )
buffer = fs.readFile( file, 'utf8', countLines )
function countLines( error, string ){
  if( error ){
    console.log( error )
    return
  }
  array = string.split( '\n' )
  numberOfLines = array.length - 1
  console.log( numberOfLines )
}
