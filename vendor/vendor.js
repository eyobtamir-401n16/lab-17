'use strict';

const net = require('net');
const socket = net.Socket();
const faker = require('faker')


socket.on('data', (payload) => {
  let jsonPayload = JSON.parse(payload.toString())

  if(jsonPayload.event === 'delivered'){
    console.log('Thank you for delivering order', jsonPayload.obj.orderId)
  }
});


setInterval( () => {
  let date = faker.date.recent()
  let store = faker.company.companyName();
  let orderId = faker.random.number();
  let customer = faker.name.firstName() + ' ' + faker.name.lastName();
  let address = faker.address.streetAddress() + ' ' + faker.address.city() + ' ' + faker.address.state();
  let vendorObj = {date, store, orderId, customer, address }
socket.write(JSON.stringify({event:'pickup', obj:vendorObj})
)}, 5000);

socket.connect({port:3000, host:'localhost'}, () => {
  console.log('I connected to Server')
})