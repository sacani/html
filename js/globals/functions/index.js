console.log( 'eval() function evaluates JavaScript code represented as a string' )
console.log( "eval( '2+2' )", eval( '2+2' ) )
console.log( "string", eval( "new String( '2+2' )" ) )
var uri = 'https://mozilla.org/?x=шеллы'
var encoded = encodeURI(uri)
console.log( encoded )

try {
  console.log( decodeURI( encoded ) )  
} catch( e ) {
  console.log( e )
}