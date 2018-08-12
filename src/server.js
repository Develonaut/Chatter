const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const server = require('http').createServer(app);
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', function(request, response) {
  console.log(path);
  response.sendFile(__dirname + '../build/index.html')
});

io.on('connection', function (client) {
  console.log('connect');

  client.on('register', () => {
    console.log('register');
  })

  client.on('join', (event) => {
    console.log(event);
  })

  client.on('leave',  (event) => {
    console.log(event);
  })

  client.on('message',  (event) => {
    console.log(event);
  })

  client.on('chatrooms',  (event) => {
    console.log(event);
  })

  client.on('availableUsers', (event) => {
    console.log(event);
  })

  client.on('disconnect', function () {
    console.log('client disconnect...', client.id)
  })

  client.on('error', function (err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })
})

server.listen(PORT, function (err) {
  if (err) throw err
  console.log(`Listening on port: ${PORT}`);
})