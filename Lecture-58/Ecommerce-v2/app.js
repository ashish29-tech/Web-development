const express = require('express');
const app = express(); //it's an instance.
const path = require('path'); // path require
const mongoose = require('mongoose');
const seedDB = require('./seed') //seed.js m function export kara yha require kar liya
const methodOverride = require('method-override')
const productRoutes = require('./routes/product') //yha require kar liya
const reviewRoutes= require('./routes/review') //review wale route ko..product wale route ki trah require karenge...taki har incoming request ko product wale route ki trah check kar sake 

//Why does .connect() return a Promise? Connecting to a database is an asynchronous task (it takes some time). Instead of blocking the entire program, Mongoose gives you back a Promise. A Promise represents a “future value”: Resolved → connection success. Rejected → connection failed (wrong URI, server down, etc.).
mongoose.connect('mongodb://127.0.0.1:27017/julybatch') //connect method returns a promise. And promise ko resolve karne ke liye...then and .catch ki chaining. DB name is julybatch.
.then(()=>{console.log('db connected')}) //You handle Promises using .then() and .catch(). .then(callback) → executes if the Promise is resolved...Example: MongoDB connection succeeded → "db connected" will print. 
.catch((err)=>{console.log("error is: " , err)}) //in case catch m error aya toh use alag se dikha sakte hai. .catch(callback) → executes if the Promise is rejected. Example: You stopped MongoDB service or wrong port → prints "error is: <details>"


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views') ) //views ka folder set kara...path.join..and path hame __dirname...views ke folder ke sath.
app.use(express.static(path.join(__dirname, 'public'))) //static folder ke liye middleware use karte hai


app.use(express.urlencoded({extended:true})) //dekhne ke liye yha...middleware lagana padega. Ye object lega. Form data ke liye body parser...
app.use(methodOverride('_method')) //ye middleware hai


// seedDB() //seedDB function ko run karna padega...seed.js m function paas kiya tha..and yha require(upar kara) kiya toh yha run kiya
//nodemon server ko baar-baar start kar deta hai...toh baar-baar seed ho raha hai...isliye ek baar seedDB kar ke use comment kar dena hai wrna DB m baar-baar store ho jayega.
//open cmd..mongosh. Then here in terminal start server by npm start and then in cmd show dbs...we'll see our db(julybatch). cmd m...use julybatch...show collections...db.products.find()(abhi khali ayega)...then uncomment and save seedDB() in app.js for 1 time and then...cmd.. db.products.find()..we'll see hamare DB m sari ki sari chize store ho gyi hai.

app.use(productRoutes); //har incoming request check karo ki kya ye /products, /products/new hai...isliye middleware m bhejna pada.
app.use(reviewRoutes); //yha middleware m run kiya to check ye karta hai ya nai

const PORT = 8080;
app.listen(PORT, ()=>{
  console.log(`Server running at port: ${PORT}`)
})




//1. Basic Server
//2. mongoose connection
//3. model -> seed data
//4. routes bnaye hai and routes ko views ke sath joda hai
//5. rating schema bnana hai-> Product schema m change karna hai -> form to add the rating and comment(show.ejs m milega)


