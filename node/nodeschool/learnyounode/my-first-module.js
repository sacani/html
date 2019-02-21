fs = require( 'fs' )
path = require( 'path' )
module.exports = obtain

function obtain( directory, extension, callback ){
  fs.readdir( directory, filter ) 

  function filter( error, files ){
    if( error ){
      callback( error )
      return
    }
    files.forEach( byExtension )

    function byExtension( file ){
      if( path.extname( file ) === '.' + extension ){
        callback( null, file )
      }
    }
  }
}
