'use strict';

const net = require('net');
const socket = net.Socket();
const faker = require('faker')

setInterval( () => {
  let date = faker.date.recent()
  let store = faker.company.companyName();
  let orderId = faker.random.number();
  let customer = faker.name.firstName() + ' ' + faker.name.lastName();
  let address = faker.address.streetAddress() + ' ' + faker.address.city() + ' ' + faker.address.state();
 
socket.write(JSON.stringify({date, store, orderId, customer, address })
)}, 2500);

socket.connect({port:3000, host:'localhost'}, () => {
  console.log('I connected to Server')
})