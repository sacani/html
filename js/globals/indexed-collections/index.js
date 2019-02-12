console.log( 'Create an Array' )
var fruits = [ 'Apple', 'Banana' ]
console.log( fruits.length )

console.log( 'Access (index into) an Array item')
var first = fruits[0]
var last = fruits[ fruits.length - 1 ]
console.log( first + last )

console.log( 'Loop over an Array' )
fruits.forEach( function( item, index, array ){
  console.log( item + ' ' + index )
})

console.log( 'Add to the end of an Array' )
var newLength = fruits.push( 'Orange' )
console.log( 'Matrix length' + ' ' + newLength )
fruits.forEach( function( item, index, array ){
  console.log( item + ' ' + index )
})

console.log( 'Remove from the end of an Array' )
console.log( 'Antes:')
fruits.forEach( function( item, index, array ){
  console.log( item + ' ' + index )
})
var last = fruits.pop()
console.log( 'Despues: ' + last )
fruits.forEach( function( item, index, array ){
  console.log( item + ' ' + index )
})

console.log( 'Add to the front of an Array' )
var first = fruits.shift()
console.log( 'first: ' + first )
fruits.forEach( function( item, index, array ){
  console.log( item + ' ' + index )
})

console.log( 'Find the index of an item in the Array' )
fruits.push( 'Mango' )
fruits.forEach( function( item, index, array ){
  console.log( item + ' ' + index )
})
var pos = fruits.indexOf( 'Banana' )
console.log( 'Index of Banana ' + pos )