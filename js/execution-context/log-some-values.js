console.log( 'name', name )
console.log( 'handle', handle )
console.log( 'getUser', getUser )

var name = 'Tyler'
var handle = '@tylermcginnis'

function getUser(){
  return {
    name: name,
    handle: handle
  }
}
