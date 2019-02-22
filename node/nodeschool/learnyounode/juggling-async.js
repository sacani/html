urls = [ 
  process.argv[ 2 ],
  process.argv[ 3 ],
  process.argv[ 4 ]
]
http = require( 'http' )
bl = require( 'bl' )
result = []
i = 0
urls.forEach( retrieve )

function retrieve( url ){
  let j = i
  i++

  http.get( url, collect )

  function collect( response ){
    response.pipe( bl( store ) )
  
    function store( error, data ){
      
      string = data.toString()
      result[ j ] = string 

      if( result.length === 3 ){
        result.forEach( write )
      }
    }
  }
}

function write( string ){
  console.log( string )
}
