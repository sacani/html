url = process.argv[ 2 ]
http = require( 'http' )
bl = require( 'bl' )

http.get( url, collect )

function collect( response ){
  response.pipe( bl( write ) )

  function write( error, data ){
    if( error ){
      console.error( error )
      return
    }
    string = data.toString()
    characters = string.length
    console.log( characters )
    console.log( string )
  }
}
