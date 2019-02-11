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