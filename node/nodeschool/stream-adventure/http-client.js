request = require( 'request' )
response = request.post( 'http://localhost:8099' )
writing = process.stdin.pipe( response )
writing.pipe( process.stdout )
