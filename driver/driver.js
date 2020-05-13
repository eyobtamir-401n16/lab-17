'use strict';
const net = require('net');
const socket = net.Socket();
const faker = require('faker');


socket.connect({port:3000, host:'localhost'}, () => {
  console.log('I connected to Server')
})