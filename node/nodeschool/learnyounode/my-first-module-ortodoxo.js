fs = require( 'fs' )
path = require( 'path' )
module.exports = function( directory, extension, callback ){
  fs.readdir( directory, function( error, files ){
    if( error ){
      callback( error )
      return
    }
    files.forEach( function( file ){
      if( path.extname( file ) === '.' + extension ){
        callback( null, file )
      }
    })
  })
}
