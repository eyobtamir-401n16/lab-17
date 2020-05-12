const net = require('net');
const server = net.createServer();
const faker = require('faker')

let port = 3000;
let socketpool = [];


server.listen(port, () => {
  console.log('Server is up and running on port ', 3000)
});



server.on('connection', socket => {
  socketpool.push(socket)
  console.log('recived connection', socket.address())
  socket.on('data', (payload) => {
    let stringPayload = payload.toString();
    let jsonpayload = JSON.parse(stringPayload)
    console.log('- Time: ', jsonpayload.date)
    console.log('- Store: ', jsonpayload.store)
    console.log('- OrderID: ', jsonpayload.orderId)
    console.log('- Customer: ', jsonpayload.customer)
    console.log('- Adress: ', jsonpayload.address)
    console.log('-----------------------------')

  })
});



