const express = require('express');
const app = express(); //it's an instance.
const path = require('path'); // path require
const mongoose = require('mongoose');
const seedDB = require('./seed'); //seed.js m function export kara yha require kar liya
const methodOverride = require('method-override');
const productRoutes = require('./routes/product'); //yha require kar liya
const reviewRoutes= require('./routes/review'); //review wale route ko..product wale route ki trah require karenge...taki har incoming request ko product wale route ki trah check kar sake 
const flash = require('connect-flash'); //yha se require kar liya...https://www.npmjs.com/package/connect-flash
const session = require('express-session'); // session ko bhi require kar liya...session = require('express-session')

let configSession = { // ek configSession varible m pura object hold ho rha hai...jo session ke andar object tha wo wala copy-paste kar diya...so that is middlewaare ko better use kar pau
  secret: 'keyboard cat', //middleware copy kar liya...https://www.npmjs.com/package/express-session
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true } //isko abhi ke liye hta dete hai
}


//Why does .connect() return a Promise? Connecting to a database is an asynchronous task (it takes some time). Instead of blocking the entire program, Mongoose gives you back a Promise. A Promise represents a “future value”: Resolved → connection success. Rejected → connection failed (wrong URI, server down, etc.).
mongoose.connect('mongodb://127.0.0.1:27017/julybatch') //connect method returns a promise. And promise ko resolve karne ke liye...then and .catch ki chaining. DB name is julybatch.
.then(()=>{console.log('db connected')}) //You handle Promises using .then() and .catch(). .then(callback) → executes if the Promise is resolved...Example: MongoDB connection succeeded → "db connected" will print. 
.catch((err)=>{console.log("error is: " , err)}) //in case catch m error aya toh use alag se dikha sakte hai. .catch(callback) → executes if the Promise is rejected. Example: You stopped MongoDB service or wrong port → prints "error is: <details>"



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') ) //views ka folder set kara...path.join..and path hame __dirname...views ke folder ke sath.
app.use(express.static(path.join(__dirname, 'public'))) //static folder ke liye middleware use karte hai


app.use(express.json());
app.use(express.urlencoded({extended:true})) //dekhne ke liye yha...middleware lagana padega. Ye object lega. Form data ke liye body parser...
app.use(methodOverride('_method')) //ye middleware hai


// seedDB() //seedDB function ko run karna padega...seed.js m function paas kiya tha..and yha require(upar kara) kiya toh yha run kiya
//nodemon server ko baar-baar start kar deta hai...toh baar-baar seed ho raha hai...isliye ek baar seedDB kar ke use comment kar dena hai wrna DB m baar-baar store ho jayega.
//open cmd..mongosh. Then here in terminal start server by npm start and then in cmd show dbs...we'll see our db(julybatch). cmd m...use julybatch...show collections...db.products.find()(abhi khali ayega)...then uncomment and save seedDB() in app.js for 1 time and then...cmd.. db.products.find()..we'll see hamare DB m sari ki sari chize store ho gyi hai.

//flash wala middleware pehle chalega..flash wala baad m cuz flash is deppendent on session.
app.use(session(configSession)); //object ki jgah configSession use kar liya cuz upar variable m store kara diya object. 
//and make sure flash iske baad hoga cuz flash is dependent on the session
app.use(flash());//copy-paste from...npmjs.com/package/connect-flash 

//locals ke liye...middleware bnana hai...and middleware is a function
// (req,res,next)=>{} //ye middleware
app.use( (req,res,next)=>{ //middleware is a function which can have 3 states
  //response hamara locals ke andar ke present hota hai. 2 type ke message aa sakte hai...success and error..toh locals ke andar dono honge.
  res.locals.success = req.flash('success'); //request ke flash ke andar...jab bhi 'success' key se mile message...toh usko res.locals.success m store kar do.
  res.locals.error = req.flash('error');
  next(); //jab upar ke don(success and error) apna kaam kar de to ye next function ko chala do. We'll create a file jo mujhe flash message lake dega.
} ) //


app.use(productRoutes); //har incoming request check karo ki kya ye /products, /products/new hai...isliye middleware m bhejna pada.
app.use(reviewRoutes); //yha middleware m run kiya to check ye karta hai ya nai

let PORT = 8080;
app.listen(PORT, ()=>{
  console.log(`Server running at port: ${PORT}`)
})




//1. Basic Server
//2. mongoose connection
//3. model -> seed data
//4. routes bnaye hai and routes ko views ke sath joda hai
//5. rating schema -> Product change -> form to add the rating and comment(show.ejs m milega)


  