const miObjeto = {
  nombre: 'Antonio',
  apellido1: 'Fernández',
  apellido2: 'Cruz',
  prueba1: 'valor prueba 1',
  prueba2: 'valor prueba 2'
}

const myKeys = Object.keys( miObjeto )
const myValues = Object.values( miObjeto )

for( const currentKey of myKeys ){
  console.log( currentKey )
}

for( const currentValue of myValues ){
  console.log( currentValue )
}

myKeys.map( ( key ) => {
  console.log( 'keys dentro de un map', key)
})

myValues.map( ( value ) => {
  console.log( 'values dentro de un map', value )
})

console.log( 'de una tacada, devuelve una matriz' )
console.log( myKeys.map( ( key ) => key ) )
console.log( myValues.map( ( value )=> value ) )

console.log( 'de una tacada, devuelve una matriz y los parentesis son opcionales cuando solo hay un parámetro' )
console.log( myKeys.map( key => key ) )
console.log( myValues.map( value => value ) )

console.log( 'Function Object' )
const hello = new Function( 'string', 'return "Hello " + string')
console.log( hello( 'sacani') )

console.log( 'anonimous function expression' )
const function_hello = function( string ){
  return 'function_hello ' + string 
}
console.log( function_hello( 'sacani' ) )

console.log( 'named function expresion' )
const named_function_hello = function NamedFunctionHello( string ){
  return 'named function expresion ' + string
}
console.log( named_function_hello( 'sacani' ) )

console.log( 'function declaration' )
function declaredHello( string ){
  return 'declaredHello ' + string
}
console.log( declaredHello( 'sacani' ) )

var result = ( function(){
    var name = "Barry"
    return name 
})()
console.log(result)

function myFun( a, b, ...manyMoreArgs){
  console.log( "a", a )
  console.log( "b", b )
  
  manyMoreArgs.forEach( function( item, index, array ){
    console.log( item + ' ' + index )
  })
}

myFun( "one", "two", "three", "four", "five", "six" )