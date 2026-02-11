
//json wali chiz karenge toh middleware lagega... expressjs.com > api refernce > req.body m 

const express = require('express');

const app = express();
const mongoose = require('mongoose');
const quotesRoutes = require('./apis/quotesRoutes'); //require kar liya hai routes ko..
const seedDB = require('./seed')
const cors = require('cors'); //cors ko require kiya

//mongoose connect kar liya hai
mongoose
.connect('mongodb://127.0.0.1:27017/gian') //gian naam rakh diya... connect method returns a promise
.then(function(){
  console.log("DB CONNECTED")
})
.catch( function (err){
  console.log(err);
});

// app.use(cors()); //cors ko use kiya...ye middleware hai yha....aise kisi bhi origin port pe chal jayegi
app.use(cors({  //api ko restrict karne ke liye..taki koi bhi kahi se apki api ko access na kar le...
   orgin: ["http://localhost:5173/"]//open to all sare port nai kar sakte...ham sirf apne hi origin ke liye rakhte hai..object kiya..origin add kiya...toh ab 5173 se request aye toh hi cors policy ko allow karna else nahi allow karna 
})) 

//copy kar liya expressjs.com se..ye body parsing middleware use karne hote hai
app.use(express.json()); // for parsing application/json. jsob data ke sath kaam kar rahe...toh json ayega...toh uska body parsing...json ka body parsing
app.use(express.urlencoded({ extended: true })); 


app.get('/' , (req,res)=>{
  res.send("welcome to backend");
});

// seedDB(); 


app.use(quotesRoutes);


//seed kara sakte hai koi DB. Initially koi data toh dena hi padega...iske liye seed.js file.

let PORT = 8000;
app.listen(PORT, function(){
  console.log(`Backend server at PORT:  ${PORT}`);
})

//