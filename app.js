var express = require('express')
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http)

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index');
});

io.on('connection', (socket) => {
    console.log('user connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
})

http.listen(3000, () => {
  console.log('listening on *:3000');
});