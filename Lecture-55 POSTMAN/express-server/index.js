//npm init -y
//npm i express nodemon ejs
//start script in package.json...."start": "nodemon ./index.js"
//express require...const express = require('express');
// const app = express();
//app.listen(8080, ()=>{
//   console.log('server connexted on PORT 8080')
// })
//npm start.....
//server connexted on PORT 8080

//If I'm a backend developer and I want to test my APIs which I have written... I can check GET request in browser by starting server and opening localhost...but to check post and other request I'll have to use Postman
//API testing tool: Postman


//Simple express ka server bnana hai jisme GET request bhej sake
//package ko install karna padega.

const express = require('express');

const app = express();

app.use(express.json()); //hame json paas karna tha isliye json middleware use kiya. Depend karta hai kya chahiye us hisab se middleware bhejenge. Form data ke liye...url encoded.

//server pe get request kha se bhejenge ? Browser pe jake....localhost:8080
app.get('/', (req,res)=>{ //route define kar diya / se...means kahi se bhi server pe slash request ayegi to callback function paas karenge jisme..
  res.send('hello world'); // 
})

//POST request
// browser pe post request nai bhej sakte... by default browser pe get request jati hai.
// kaise bhejenge post request ? We'll use tool Postman through which we'll send multiple request to our server
// select body..then raw..then json....in postman below url input...
app.post('/', (req,res)=>{ //jaise hi post request ayegi / route pe...
  // res.send('POSTING on server') //ham ye send kar denge. But post request kaise bheju ? Browser se GET request bhej denge but server pe POST request bhejni hai to kaise bhejenge ? 1 way ye hai ki from bna sakte hai frontend pe. 
// jo bhi server pe request ati hai...wo data hame req.body m mil jata hai
  const data = req.body; //req.body m data milta hai jo bhi user send karta hai. 
  console.log('data', data); //console.log(req.body)..ya to direct console
  res.send('posting') //posting string send kar diya
})
//We'll be using POSTMAN(a tool)...through which we can send multiple requests to our server.

//kisi bhi port pe kar sakte hai but 1000 se niche nai hona chaihiye...cuz usse niche reserved hote hai.
app.listen(3001, ()=>{
  console.log('server connected on PORT 3001')
})

//now API route bnani hai jispe GET request bhej toh wo Hello world send kare

//http://localhost:8080?page=2&sort=date ...........ye request params ke liye

//Postman
//agr port change karte hai toh har baar localhost m port change karna padega to uske liye
//jaise js m variable bnate hai...let url = 'http://localhost:3000'.......waise hi postman m bhi bna sakte hai
//postman m...collection bna lena hai and get and post request bna lena hai usme...collection pe click karenge toh variable dikhega...uspe click and variable ka name...suppose URL de diya and uski value likh denge... http://localhost:3000 and current value bhi yahi likh denge..and now
//apne get reequest pe jayenge and url hta denge pura and double curly braces m apne url ka naam likh sakte hai... {{url}}
//


//---------------------------------------------------------------------
//practice
// const express = require('express')
// const app = express();

// app.use(express.json())


// app.get('/', (req,res)=>{
//   res.send("Hello World")
// })

// app.post('/', (req,res)=>{
//   const data = req.body
//   console.log('data', data)
//   res.send('POSTING on serverrrrrr')
// })


// app.listen(8080, ()=>{
//   console.log("Server started at Port: 8080")
// })






