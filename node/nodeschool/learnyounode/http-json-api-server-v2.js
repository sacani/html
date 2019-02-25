port = process.argv[ 2  ]
http = require( 'http' )
url = require( 'url' )
server = http.createServer( answer )
server.listen( port )

function answer( request, response ){
  parsed_url = url.parse( request.url, true )
  date = new Date( parsed_url.query.iso )

  if( parsed_url.pathname === '/api/parsetime' ){
    hour = date.getHours()
    minute = date.getMinutes()
    second = date.getSeconds()

    time = {
      'hour' : hour,
      'minute' : minute,
      'second' : second
    }
  }
 
  if( parsed_url.pathname === '/api/unixtime' ){
    unixTime = date.getTime()
    time = { 
      'unixtime' : unixTime
    } 
  }

  json_time = JSON.stringify( time )  
  response.end( json_time )
}
