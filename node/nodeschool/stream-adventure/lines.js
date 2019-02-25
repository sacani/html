split = require( 'split' )
pipedLines = process.stdin.pipe( split() )
through = require( 'through2' )
evenOdd = through( write )
lineNumber = 1
transformedLine = pipedLines.pipe( evenOdd )
transformedLine.pipe( process.stdout )

function write( buffer, encoding, next ){
  string = buffer.toString()
  inCase = string.toLowerCase() 

  if( lineNumber % 2 === 0 ){
    inCase = string.toUpperCase() 
  }
  
  lineNumber ++
  this.push( inCase + '\n' )
  next()
}
