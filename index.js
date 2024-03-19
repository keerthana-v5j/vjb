
let express = require("express");
let app = express();
let httpServer = require("http").createServer(app);
let io = require("socket.io")(httpServer,{
  cors: {
    origin: '*',
  }
} );
let connections = [`https://collabrative-whiteboard-580q.onrender.com`];

io.on("connect", (socket) => {
  connections.push(socket);
  console.log(`${socket.id} has connected`);

  socket.on("draw", (data) => {
    connections.forEach((con) => {
      if (con.id !== socket.id) {
      
      }
    });
  });
  socket.on('down',(data)=>{
    connections.forEach(con =>{
      if (con.id !== socket.id) {
       
      }
    })
  })

  socket.on("disconnect", (reason) => {
    console.log(`${socket.id} is disconnected`);
    connections = connections.filter((con) => con.id !== socket.id);
  });
});


app.use(express.static("public"));
let PORT = process.env.PORT || 5500;
httpServer.listen(PORT, () => console.log(`Server started on port ${PORT}`));