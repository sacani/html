file = process.argv[ 2 ]
fs = require( 'fs' )
stream = fs.createReadStream( file )
stream.pipe( process.stdout )
