const port = process.argv[ 2 ]
const http = require( 'http' )
const map = require( 'through2-map' )
const server = http.createServer( function(request, response ){
  var body = '' 
  if( request.method === 'POST' ){
    request.on( 'data', function( chunk ){
      body = body + chunk.toString()  
    })
    request.on( 'end', function(){
      response.write( body.toUpperCase() )
      response.end()
    })
  } else {
    response.write( request.method )
    response.end()
  } 
})
server.listen( port )
