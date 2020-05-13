const net = require('net');
const server = net.createServer();
const faker = require('faker')

let port = 3000;
let socketPool = [];


server.listen(port, () => {
  console.log('Server is up and running on port ', 3000)
});


const logger = (payload) => {

    let jsonPayload = JSON.parse(payload.toString())

    for (let i = 0; i < socketPool.length; i++) {
      let socket = socketPool[i];
      socket.write(payload);
  }
  
  
    if (jsonPayload.event === 'pickup'){
    console.log('- Time: ', jsonPayload.obj.date)
    console.log('- Store: ', jsonPayload.obj.store)
    console.log('- OrderID: ', jsonPayload.obj.orderId)
    console.log('- Customer: ', jsonPayload.obj.customer)
    console.log('- Adress: ', jsonPayload.obj.address)
    console.log('--------------------------------------')
    }

    if(jsonPayload.event === 'in-transit'){
      console.log('in-transit order', jsonPayload.obj.orderId)
    }

    if(jsonPayload.event === 'delivered'){
      console.log('delivered', jsonPayload.obj.orderId)
    }



  }



server.on('connection', socket => {
  console.log('recived connection from driver', socket.address())
  socketPool.push(socket)

  socket.on('data',logger)
});



