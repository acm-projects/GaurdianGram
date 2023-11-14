
// server side


import WebSocket from 'socket.io-client';
import server from 'socket.io';




function Tracking() {

    const io = new server

    io.on('connection', function(socket) {

        socket.on('marker', function(data) {
    
            socket.broadcast.emit('show-marker', data);
        });
    });

    // make google maps display all connceted sockets every 30 seconds
    // connect to socket
    // parse through user freinds and send it to sockcet
    // then make socket emit all those locations to google maps api


    // useEffect(() => {

    //     const ws = new WebSocket('ws://localhost:3000/tabs/map'); 
    
    //     ws.onopen = () => {
    //       console.log('connected');
    //     };
    
    //     }, []);


   


}
export default Tracking;


// //client side

//   var socket = io('http://localhost');

//   socket.emit('sendLocation', {  });




// //serverside


// io.on('connection', function(socket) {
//    // Socket is listening waiting for the client to send something to the server
//    socket.on('sendLocation', function(data) {
//        // Emit to everyone that is connected via socket.io
//        io.emit('sendToEveryone', data);
//    });
// });
