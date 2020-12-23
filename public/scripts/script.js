var io = require('socket.io-client')
var socket = io();
var $ = require('jquery')
console.log('hello')

$(function () {
    $('form').submit(function(e) {
        e.preventDefault(); // prevents page reloading
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
});