port = process.argv[ 2 ]
net = require( 'net' )

server = net.createServer( answer )
server.listen( port )

function answer( socket ){
  date = new Date()	
  data = 
    date.getFullYear() + '-' +
    date.getMonth() + '-' +
    date.getDate() + ' ' +
    date.getHours() + ':' +
    date.getMinutes()
	
  socket.end( data )
}
