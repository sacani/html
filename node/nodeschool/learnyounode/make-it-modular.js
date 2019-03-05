directory = process.argv[ 2 ]
extension = process.argv[ 3 ]
myModule = require( './my-first-module' )

myModule( directory, extension, callback )

function callback( error, data ){
  if( error ){
    console.log( error )
    return
  }
  console.log( data )
  return
}
