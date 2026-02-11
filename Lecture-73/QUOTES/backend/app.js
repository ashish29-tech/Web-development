
//json wali chiz karenge toh middleware lagega... expressjs.com > api refernce > req.body m 

const express = require('express');

const app = express();
const mongoose = require('mongoose');
const quotesRoutes = require('./apis/quotesRoutes'); //require kar liya hai routes ko..
const seedDB = require('./seed')
const cors = require('cors'); //cors ko require kiya

//databse/mongoose connect kar liya hai
mongoose
.connect('mongodb://127.0.0.1:27017/gian') //gian naam rakh diya... connect method returns a promise
.then(function(){
  console.log("DB CONNECTED")
})
.catch( function (err){
  console.log(err);
});

// app.use(cors()); //cors ko use kiya...ye middleware hai yha....aise kisi bhi origin port pe chal jayegi...anonymous ho gya...5173, 3000, 4999 etc. kisi bhi port se request aye to chal jayega
//open api na rahe isliye cors kiya
app.use(cors({  //api ko restrict karne ke liye..taki koi bhi kahi se apki api ko access na kar le...
  //multiple ports ko allow kar sakte hai isliye array de diya
   orgin: ["http://localhost:5173/"]//open to all sare port nai kar sakte...ham sirf apne hi origin ke liye rakhte hai..object kiya..origin add kiya...toh ab 5173 se request aye toh hi cors policy ko allow karna else nahi allow karna 
})) 

//json wali chize use kar rahe hai toh middleware lagega
//copy kar liya expressjs.com m request m..req.body m se..ye body parsing middleware use karne hote hai
app.use(express.json()); // for parsing application/json. jsob data ke sath kaam kar rahe...toh json ayega...toh uska body parsing...json ka body parsing
app.use(express.urlencoded({ extended: true })); 


app.get('/' , (req,res)=>{
  res.send("welcome to backend");
});

//db connect ho jaye toh seed kara lete hai db....initially toh data dena hi padega...toh seed.js
// seedDB(); 


app.use(quotesRoutes); //upar require kiya and yha use kiya


//seed kara sakte hai koi DB. Initially koi data toh dena hi padega...iske liye seed.js file.

let PORT = 8000;
app.listen(PORT, function(){
  console.log(`Backend server at PORT:  ${PORT}`);
})

//