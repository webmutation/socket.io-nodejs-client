/**
 * Created by duartda on 21/10/2014.
 */
var io = require('socket.io-client'),
    socket = io.connect('http://localhost:8080');
//NOTE: Port must be specified! Otherwise return 503 errors

socket.on('connect', function () {
    console.log("socket connected");
});
socket.emit('private message', { user: 'me', msg: 'whazzzup?' });
socket.on('connect_error', function (error) {
    console.log(error)
});