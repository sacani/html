const port = process.argv[ 2 ]
const http = require( 'http' )
const url = require( 'url' )
const server = http.createServer( function( request, response ){
  response.writeHead( 200, { 'Content-Type': 'application/json' } )
  var parsed_url = url.parse( request.url, true )
  var date = new Date( parsed_url.query.iso )
  if( parsed_url.pathname === '/api/parsetime' ){
    var jsoned_date = { 
      'hour' : date.getHours(),
      'minute' : date.getMinutes(),
      'second' : date.getSeconds()
    }
    response.write( JSON.stringify( jsoned_date ) )
  }
  if( parsed_url.pathname === '/api/unixtime' ){
    var unix_date = {
      'unixtime' : date.getTime()
    } 
    response.write( JSON.stringify( unix_date ) ) 
  }
  response.end()
})
server.listen( port )
