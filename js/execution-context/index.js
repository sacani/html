/*
console.log( 'name: ', name )
console.log( 'handle: ', handle )
console.log( 'getUser: ', getUser )

var name = 'Tyler'
var handle = '@tylermcginnis'

function getUser( string ){
  console.log( 'arguments inside function: ', arguments )
  return {
    name: name,
    handle: handle
  }
}

console.log( 'arguments', arguments )

getUser()

console.log( 'arguments after getUser:', arguments )
*/

var name = 'Tyler'
var handle = '@tylermcginnis'

function getURL( handle ){
  var twitterURL = 'https://twitter.com/'
  return twitterURL + handle
}
