// ✔️ Requests coming from the client are handled using app.get() and app.use()
// ✔️ Responses are sent back using these handlers
//Server se jo request milti hai server se wo ham..use ke through and app.get ke through use karte hai.
//And inhi ke through ham response accept karte hai. 
//They both provide three things...three parameters/objects provide karte hai.
//Ye hame series m likhni hoti hai..1st request, 2nd response, 3rd next...
//Request browser se data leke ata hai...and response data provide karata hai...
//Jab request server ke paas jati hai to server asks ki koi google.com naam ka parameter hai kya...google naam se koi hamne app.get, app.use bnaya hai...to usse related hame kya functionaity perform karani hai jisse hamara google.com hit ho

//mkdir ExpressNotes...se folder ban jayega
//npm init se server ban jayega and enter press karte rahenge to... package.json ban jayega
//package.lock.json tab banta hai jab third party package install karte hai
//npm install express.....se package-lock.json ban jayega....

//now express require karna hai...
const express = require('express'); //express require kar liya

const app = express(); //app ka variable. Express hame function return karta hai...and us function ko call karenge to ek object milega...

//app.use([path,] callback [, callback...])
//app.use....3 parameters leta hai...app.use([path,] callback [, callback...]).....ye callback mandatory hota hai square bracket wala nahi hota mandatory 
//1st is path, 2nd is callback..jo ki hamse function leta hai, 3rd is optional. Jitne bhi square brackets m likhe rehte hai wo optional hote hai.
app.use("/cat",function(req, res){ //route bna rahe hai. app.use m function bnana padega and ism hame req and res...series m parameter dena padega. Ye request sabke liye hit hogi...browser m localhost:4000/a,localhost:4000/ashish etc sab chal jayenge and terminal m route hit aa jayega.....ise ham chahte hai kisi particular ke liya hi hit ho...toh ek path dena padega.../cat
  console.log("route hit") //server se response ke liye
// apne response ko send karne ke liye...res.send
 // res.send('<h1>route hit</h1>') //isse sab route pe chal jayega 
 res.send('<h1>cat route hit</h1>') //isse sirf cat route pe chalega
})

// app.use("/dog",function(req, res){ //dog ke liye route bna diya. app.use m function bnana padega and ism hame req and res...series m parameter dena padega. Ye request sabke liye hit hogi...browser m localhost:4000/a,localhost:4000/ashish etc sab chal jayenge and terminal m route hit aa jayega.....ise ham chahte hai kisi particular ke liya hi hit ho...toh ek path dena padega.../cat
//   console.log("route hit") //server se response ke liye
//   // res.send('<h1>route hit</h1>')
//   res.send('<h1>dog route hit</h1>')
// })


// //Server chalane ke liye hame port use karna padta hai...jiske through ham listen karte hai...
app.listen(4000, ()=>{ //ek functionality deni hai
  console.log("Listening at port 4000")//isse hamara..app.js ka listening port ready
})





