const express = require('express')
const app = express();
const http = require("http")
const server = http.Server(app);
const io = require('socket.io')(server,{cors:{
    origin: true,
    methods: ["GET", "POST"],
    credentials: true

}})
//const cors = require("cors")




app.set("port",process.env.PORT || 3000)
//app.use(cors());
app.get('/',(req,res)=>{
    res.send("hello world")
})

app.get('/api',(req,res)=>{
    res.json({message:"my api"})

});
server.listen(app.set("port"));


io.on("connection",(socket)=>{
    
    socket.on("chat:message", (data)=>{
        io.sockets.emit('chat:message',data);
    })
})

