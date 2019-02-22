port = process.argv[ 2 ]
file = process.argv[ 3 ]
http = require( 'http' )
fs = require( 'fs' )

streamedFile = fs.createReadStream( file )

server = http.createServer( answer )
server.listen( port )

function answer( request, response ){
  streamedFile.pipe( response ) 
}
