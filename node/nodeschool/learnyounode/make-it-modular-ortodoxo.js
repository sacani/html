directory = process.argv[ 2 ]
extension = process.argv[ 3 ]
myModule = require( './my-first-module-ortodoxo' )

myModule( directory, extension, function( error, data ){
  if( error ){
    console.log( error )
    return
  }
  console.log( data )
})
