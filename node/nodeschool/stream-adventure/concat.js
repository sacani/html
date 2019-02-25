concat = require( 'concat-stream' )
process.stdin.pipe( concat( reverse ) )

function reverse( buffer ){
  string = buffer.toString()
  matricedString = string.split( '' )
  reversedMatrix = matricedString.reverse()
  reversedString = reversedMatrix.join( '' )
  console.log( reversedString )
}
