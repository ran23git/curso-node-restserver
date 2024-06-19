require('dotenv').config();
const Server =require('./models/server');

console.log( MONGODB_CNN);

const server = new Server();

server.listen();








