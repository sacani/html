port = process.argv[ 2  ]
http = require( 'http' )
url = require( 'url' )
server = http.createServer( answer )
server.listen( port )

function answer( request, response ){
  parsed_url = url.parse( request.url )
  response.end( JSON.stringify( parsed_url ) )  
}
