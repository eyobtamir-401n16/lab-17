'use strict';
const net = require('net');
const socket = net.Socket();
const faker = require('faker');

socket.connect({port:3000, host:'localhost'}, () => {
  console.log('I connected to Server')
})

socket.on('data', (payload) => {
  let jsonPayload = JSON.parse(payload.toString())

  if (jsonPayload.event === 'pickup'){
    setTimeout(()=> {
      let driverPayload = {event: 'in-transit', obj: jsonPayload.obj}
      console.log('pick up order', jsonPayload.obj.orderId);
      socket.write(JSON.stringify(driverPayload));
    }, 1000)
  }

  if(jsonPayload.event === 'in-transit'){
    setTimeout(() => {
      let driverPayload = {event: 'delivered', obj: jsonPayload.obj}
      console.log('delivered order', jsonPayload.obj.orderId);
      socket.write(JSON.stringify(driverPayload));
    }, 3000)
  }
});


