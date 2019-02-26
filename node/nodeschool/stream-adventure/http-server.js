port = process.argv[ 2 ]
http = require( 'http' )
through = require( 'through2' )
server = http.createServer( answer )
server.listen( port )

function answer( request, response ){
  inUpperCase = request.pipe( through( write ) )
  inUpperCase.pipe( response ) 
}

function write( buffer, _, next ){
  string = buffer.toString()
  upperString = string.toUpperCase()
  this.push( upperString )
  next()
}
