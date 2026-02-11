
const express = require ("express"); //Express module ko import kar lo....Express ek framework hai Node.js ke upar jo web server banana easy banata hai.
const app = express(); //Yahan express() function call hota hai jo ek app object (server instance) return karta hai...Isi app ke through hum routes, middlewares, aur server configuration karte hain.
const mongoose = require('mongoose');
const seedDB = require('./seed');

mongoose
.connect('mongodb://127.0.0.1:27017/quotes')
.then(function(){ //Ye copy kiya docs se. .then kar ke callback fn. lga diya. test ki jgah quotes kar diya.
  console.log("DB CONNECTED");
})
.catch((err)=>{ //error pakad lete hai
  console.log("Error in DB", err);
});

app.get("/", (req,res)=>{ //app.get route bna lete hai...request object (client se jo data aaya)...response object (jo data wapas bhejna hai)
  res.status(200).json({msg: "hello from root"}) //send ya json ek hi baat hai...json dena better hai. 
});

// seedDB();


const PORT = 8000;
app.listen(PORT, ()=>{ //call back function
  console.log(`Backend Server connected at PORT: ${PORT}`) //Callback sirf ek baar run hota hai jab server start successfully ho jaata hai.
})










