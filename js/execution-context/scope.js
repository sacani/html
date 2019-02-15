function foo(){
  console.log( 'hoisted', bar )
  var bar = 'Declared in foo'
  console.log( 'In execution phase: ', bar )
}

foo()

console.log( bar )
