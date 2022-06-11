const express = require('express');
const app = express();
const path = require('path');
const { Socket } = require("socket.io");

const port = process.env.PORT || 8080;
var server = app.listen(port, function(err){
    if (err) console.log("Error in server setup");
    console.log('Server started at http://localhost:' + port);
  });

const io = require("socket.io")(server);

app.use(express.static(path.join(__dirname, "")));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
});

var userConnections = [];

io.on("connection",(socket) => {
    console.log("socket id:", socket.id);

    socket.on("userconnect", (data) => {
        console.log("Server: " + data.userId)
        userConnections.push({
            connectionId: data.userId,
        })
        console.log(userConnections)
      });

      socket.on("opponent_choice", (data) => {
       /*  console.log(socket.id)
        console.log(data)
        var list = userConnections.filter((p) => p.connectionId != socket.id);
        socket.to(list).emit("result", {
            opponentChoice: data,
        }) */
        userConnections.forEach((v)=>{
            socket.to(v.connectionId).emit("result", {
                opponentChoice: data,
            })
          })
      });

      
    
  });