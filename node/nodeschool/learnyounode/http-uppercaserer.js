port = process.argv[ 2 ]
http = require( 'http' )
map = require( 'through2-map' )
server = http.createServer( answer )
server.listen( port )

function answer( request, response ){
  if( request.method !== 'POST' ){
    response.end( 'only POST' )
    return
  }
  inUpperCase = request.pipe( map( toUpperCase ) )
  inUpperCase.pipe( response )  
}

function toUpperCase( chunk ){
  string = chunk.toString()
  upperCaseString = string.toUpperCase()
  return upperCaseString
}
