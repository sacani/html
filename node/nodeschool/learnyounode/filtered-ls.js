directory = process.argv[ 2 ]
extension = '.' + process.argv[ 3 ] 
fs = require( 'fs' )
path = require( 'path' )
fs.readdir( directory, filter )

function filter( error, files ){
  if( error ){
    console.log( error )
    return
  }
  files.forEach( byExtension )
}

function byExtension( file ){
  if( path.extname( file ) === extension ){
    console.log( file )
  }
}

