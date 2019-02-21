url = process.argv[ 2 ]
http = require( 'http' )

http.get( url, write )

function write( response ){
  response.setEncoding( 'utf8' )
  response.on( 'data', console.log )
  response.on( 'error', console.error )
  response.on( 'end', console.log )
}
