numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
filtered = numbers.filter( isEven )
console.log( filtered )

function isEven( number ){
  return number % 2 === 0
}
