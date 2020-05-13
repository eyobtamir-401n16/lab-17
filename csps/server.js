const net = require('net');
const server = net.createServer();
const faker = require('faker')

let port = 3000;
let socketpool = [];


server.listen(port, () => {
  console.log('Server is up and running on port ', 3000)
});

server.on('connection', socket => {
  console.log('recived connection from driver', socket.address())
});

server.on('connection', socket => {
  socketpool.push(socket)
  console.log('socket', socketpool)
  console.log('recived connection', socket.address())
  socket.on('data', (payload) => {
    console.log('payload', payload)
    let stringPayload = payload.toString();
    console.log('string', stringPayload)
    let jsonpayload = JSON.parse(stringPayload)
    console.log('json', jsonpayload)
 
    console.log('-----------------------------')

  })
});



