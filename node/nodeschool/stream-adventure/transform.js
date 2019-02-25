through = require( 'through2' )
stream = through( write, end )
inUpperCase = process.stdin.pipe( stream )
inUpperCase.pipe( process.stdout )

function write( buffer, encoding, next ){
  string = buffer.toString()
  upperCase = string.toUpperCase()
  this.push( upperCase )
  next()
}

function end( done ){
  done()
}
