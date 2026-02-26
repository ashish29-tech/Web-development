//ye recive karega msg ko..server end pe

const express = require('express')
const app = express()
const http = require("http"); //Require kar liya. http node ka part hai..isliye ise install ki jarurat nahi hai just like path ki trah...use bhi install nahi karna padta...sirf require kar liya.
//ek server bnaya http ka...
const server = http.createServer(app) //nodejs m check karenge...1st chiz optional hai...2nd chiz requestListener. Toh app jo hai wo request handle kar leta hai.
const path = require('path') //path ki jarurat hogi toh path ko require kar liya
const socketio = require('socket.io'); //socket require kar liya
const io = socketio(server); //socketio ke andar wrap kar diya http server ko...

let users = {} //empty object bnaya


//sabe pehle wrapper bnana hai...


//jab bhi koi incoming request ayegi and hamne explicitly specify nahi kiya hai...toh public ke andar index.html file hogi wo...render ho jayegi...localhost:3000 karenge toh Bakk Bakk ayega browser m
app.use('/', express.static(path.join(__dirname, 'public'))); //app.use toh middleware hai.../ means sari request pe chalna chahiye...express.static se...public se path connect kiya..


io.on('connection', (socket) =>{ //io event accespt karta hai. it accepts a cb fn...jab connection ho jaye toh console kara do
  console.log(`connection established with ${socket.id}`);

//kuch data aya hoga frontend se...use catch kar liya
socket.on("send-msg", (data) =>{ //it's an event based communication. Jo client pe bna rakha hai usi event ko use karte hai. cb fn.
  // console.log(data); //console kara ke dekh lete hai data ko...
  //received-msg lga ke ye msg frontend ko bhej diya hai...script.js m listen karna padega.
  // socket.emit('received-msg', { //event based communication hai toh event banega received ka. msgs object ki form m jate hai
  //   msg: data.msg,  //data ke andar se msg ko extract kiya
  //   id: socket.id  //har socket ki unique id hoti hai...wo bhi bhej dete hai
  // }) 

  //io se emit karayenge chize...cuz same pipeline m rehna jaruri hai so that client 1, client 2...sab ek dusre ke msg dekh sake.
  io.emit('received-msg', {
    msg: data.msg,
    // id: socket.id
    username : users[socket.id] //is id ke corresponding m jo bhi naam pada ho...jo hamne login hone pe save karaya hai.
  })
}) 

  socket.on('login', (data) =>{ //jab login ho jaye...login wale event ko frontend pe handle karna hai. cb fn chale usme data catch hoga...jo bhi us user ne bheja hoga
    users [socket.id] = data.username; //us data ko set kar do users naam ke object m. socket.id naam ki field bnao usme set kar do..data.username...
    // console.log(`User logged in: ${data.username}`);

  })

})






// app.listen(3000, ()=>{
//   console.log("Server connected to port")
// })
const PORT = 3000;
server.listen(PORT, () => {
  console.log("Server connected to port");
});
