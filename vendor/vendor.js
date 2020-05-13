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
  let vendorObj = {date, store, orderId, customer, address }
socket.write(JSON.stringify({event:'vendor', obj:vendorObj})
)}, 2500);

socket.connect({port:3000, host:'localhost'}, () => {
  console.log('I connected to Server')
})