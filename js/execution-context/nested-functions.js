var count = 0

function makeAdder( x ){
  return function inner( y ) {
    return x + y
  }
}

var add5 = makeAdder( 5 )
count += add5( 2 )
