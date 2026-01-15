
//How to start backend pproject initialise ?
//cd path-query-parameter
//npm init -y
//npm i nodemon express
//make index.js file
//package.json m script m...test ko hta denge kisi kaam ka nahi hai. And write..."start": "nodemon ./index.js"


// open reddit and search dogs 
//https://www.reddit.com/r/cat/ ........ /r hai toh chal rha hai..hta denge toh nahi chalega
//this https is called protocol
//www.reddit.com...is resource url
// r is permanent path
// cat is temporary path
//Ye temporary path change hone pe aa rha hai toh we can have...infinite routes. Toh ye infinite routes kaise handle hote hai...bcoz of query and path parameter

//infinite routes bnana possible nahi hai

// const express = require('express'); //express ko require kiya 
// const app = express(); //express require kiya to app milegi

// app.get('/r/cat', (req,res)=>{ // /r/get request ayegi to req,res ka object hoga
//   res.send('cat')
// })

// app.get('/r/dog', (req,res)=>{ // /r/get request ayegi to req,res ka object hoga
//   res.send('dog')
// })

// app.listen(8080, ()=>{
//   console.log("server connected at 8080") //localhost: 8080/r/cat 
// })

//now npm start....

//--------------------------------------------------------------------

//infinite routes banana possible nahi hai. 
//Temporary path(cat, dog, butterfly....jaise reddit pe ho rha tha) change hone pe alag output de rha tha. Jo chiz change ho rahi hai wo ham path parameter se nikal sakte hai. 
// o chiz change hoti hai uske aage...colon and kuch bhi dalna hai.... /r/:___ (yha japan, samarth, subreddit kuch bhi aa sakta hai...ye act kar rha hai like variable)
//jha bhi colon dikh jaye know that...it is acting like a path parameter

// const express = require('express'); //express ko require kiya 
// const app = express(); //express require kiya to app milegi

// app.get('/r/cat', (req,res)=>{ // /r/get request ayegi to req,res ka object hoga
//   res.send('cat')
// })

// app.get('/r/dog', (req,res)=>{ // /r/get request ayegi to req,res ka object hoga
//   res.send('dog')
// })

// app.get('/r/:machhar', (req,res)=>{ //machhar ki jgah any router. Niche terminal m...machhar key hai..and 'kanpuriyababu' is value jo chrome m url m likhi thi
//   // console.log(req); ///request ko console kar diya
//   console.log(req.params); //object hota hai. When we hit this with...http://localhost:8080/r/baba-ka-gyaan...we'll see object in terminal with key as a machhar and 'baba-ka-gyan' as value. Object hai toh destructure kar sakte hai
//   res.send('req sent') //when we hit above route with machhar... we'll see massive object...and look for params..it's an object with machhar as a ket and 'kanpuriyababu' as a value
// // })

// app.listen(8080, ()=>{
//   console.log("server connected at 8080")
// })

//----------------------------------------------------------------
//can we destructure object ? destructure with the help of string.....

// const express = require('express'); //express ko require kiya 
// const app = express(); //express require kiya to app milegi

// app.get('/r/cat', (req,res)=>{ // /r/get request ayegi to req,res ka object hoga
//   res.send('cat')
// })

// app.get('/r/dog', (req,res)=>{ // /r/get request ayegi to req,res ka object hoga
//   res.send('dog')
// })


// //this is path parameter...jha temporary path picture m ata hai..ye req.params naam ke object ke andar milta hai...which is an object
// app.get('/r/:machhar', (req,res)=>{ //machhar ki jgah any router. Niche terminal m...machhar key hai..and 'kanpuriyababu' is value jo chrome m url m likhi thi
//   // console.log(req);
//   console.log(req.params); //object hota hai. Jo vast object terminal m dikh rha tha use console
//   //Object aya toh Yha destructure karenge
//   //can we destructure object ? destructure with the help of template literal
//   //Destructuring = extracting values from arrays or objects into variables in a clean, short way. Instead of accessing properties one by one, you “unpack” them.
//   let{machhar} = req.params; //jis naam se key hai usi naam se destructure kar lete hai....req.params ko
//   res.send(`req sent at: ${machhar}`) //destructure karne baad use use literals ki trah use kar rahe hai. Response ek output show karega...jha pe request gayi hai...http://localhost:8080/r/baba-ka-gyaan
// })

// app.listen(8080, ()=>{
//   console.log("server connected at 8080")
// })

//-------------------------------------------------------------------------------
//now let's see query parameter

const express = require('express'); //express ko require kiya 
const app = express(); //express require kiya to app milegi

// app.get('/r/cat', (req,res)=>{ // /r/get request ayegi to req,res ka object hoga
//   res.send('cat')
// })

// app.get('/r/dog', (req,res)=>{ // /r/get request ayegi to req,res ka object hoga
//   res.send('dog')
// })



//jha bhi url m question mark dikhe just know that...that is a query parameter... search in reddit and see ?
//https://www.reddit.com/search/?q=dogs&cId=5f3c57d3-4dbc-44f4-a482-6dbda139ab2a&iId=e8f5a209-8033-4814-9e16-df9e940b5e31 .........isme ? matlab query parameter...and aage q=dogs...q is key and dogs is value..jo search karte hai wo value hoti hai
//path parameter(:..mtlb colon)...jha temporary path picture m ata hai..ye req.params naam ke object ke andar milta hai...which is an object
// app.get('/r/:machhar', (req,res)=>{ //machhar ki jgah any router. Niche terminal m...machhar key hai..and 'kanpuriyababu' is value jo chrome m url m likhi thi
//   // console.log(req);
//   console.log(req.params); //object hota hai. Jo vast object terminal m dikh rha tha use console
//   //Yha destructure karenge
//   //can we destructure object ? destructure with the help of template literal
//   let{machhar} = req.params; //jis naam se key hai usi naam se destructure kar lete hai....req.params ko
//   res.send(`req sent at: ${machhar}`) //destructure karne baad use use literals ki trah use kar rahe hai. Response ek output show karega...jha pe request gayi hai
// })

//query parameter(?)...req.params..object. ? mtlb query parameter
app.get('/search', (req,res)=>{ //get request bhej rahe hai.../sesrch pe....request gayi hai to req,res ka oject hoga mere paas
  // console.log(req); //request console kar liya hai ki bhejenge to kya ayega.
  console.log(req.query);//request ke andar mil rha hai to req.query
  let {bhagwan, wife} = req.query; //we can destructure it well with the values jo mujhe wha mil rahi hai.....key: bhagwan, wife. 
  res.send(`query parameter aa gya ${bhagwan} and ${wife}`) //http://localhost:8080/search?bhagwan=krishna&wife=radha ye nai chal rha...mtlb niche terminal m empty aa rha hai object
})

app.listen(8080, ()=>{
  console.log("server connected at 8080")
})


//--------------------------------------------------------------------------
//Node chalta rahega
//infinite route se bachne ke liye path parameter ki help lete hai...
//and jab kuch search kar rahe hote hai...firstName, lastName...in sabke sath ? hota hai...tab ham use query parameter kehte hai





