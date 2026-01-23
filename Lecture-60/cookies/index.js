const express = require('express');
const app = express();


const cookieParser = require('cookie-parser'); //cookie parser required..code copied from google...npm cookie parser

//run karne ke liye cookie parser ko middleware chahiye hoga. This middleware can accept a secret. Secret key is basically an array or string....bhaiya always gives a string.
app.use(cookieParser('hiiamyoursecretteacher')); //secret......ye signed cookie ke liye. 'hiiamyoursecretteacher'....ye ham kahi aur dal dete and use yha import kara lete....but abhi ke liye dikha lete hai

//jo cookie parser require kiya hai and use run karna hai to as a middleware run karna padega
// app.use(cookieParser());


app.get('/', (req,res)=>{ //ye route bnaya..ye hame sare cookies lake de rha hai
  // console.log(req.cookies); // request m hoti hai cookies
  // res.send(req.cookies) //and ise send bhi kara lete hai...and if we see root route pe hit kare toh password nahi dikhega
  //signed cookies dekhne ke liye...//https://expressjs.com/en/5x/api.html#req.signedCookies  
  console.log(req.signedCookies); //expressjs.com...docs se. signedCookies kiya
  res.send(req.signedCookies); //signedCookies ko send kara diya. Ye pehle se toh comparatively secure hai.
})


//cookie server bhejta hai...so we make route jo server send karaye cookies ki to the client. To sabse pehle server send karega...and server response send karta hai
////cookie server bhejta hai to why not make a route jo ccokies ko send karvade to the client
app.get('/setcookies', (req,res)=>{ //ye /setcookies route hit karenge browser m(localhost:5050 ke sath) and we'll be able to see cookies
  //hover over cookie and see it accepts 2 things... cookie and record..mtlb actual value
  res.cookie('mode', 'dark') //set karna hai to cookies..singular hoga. Cookie server bhejta hai aur server response bhejta hai toh...cookie ko set karne ke liye...res.cookie and store client side pe hoti hai 
  res.cookie('location','delhi');
  res.cookie('username', 'ashish');
  res.cookie('age', 25);
  res.cookie('password', 'baby ko base pasand hai', {signed:true}); //password ko secure karna tha toh we can do with the help of signed cookies..we do it by passing third argument as an object..signed:true
  // res.cookie({'favColor' : 'red' , 'phone' : 'samsung'}) //object ke tarike se nai karna...ye wrong hai...individually karna padega
  res.send("maine cookies bhej di") //now start the server and open this http://localhost:5050/setcookies and applicatiion m see cookies
})

//https://expressjs.com/en/5x/api.html#req.cookies

//ek route bna lete hai to actually see the cookies
app.get('/getcookies', (req,res)=>{ // now hit the route...http://localhost:5050/getcookies...sari cookies nazar ayengi in thr format of object..toh we can destructure it
  //When using cookie-parser middleware, this property is an object that contains cookies sent by the request. If the request contains no cookies, it defaults to {}.
  //in the format of object mil sakta hai toh ise dekhne ke liye...req.cookies ko access karne ke liye console
  // console.log(req.cookies); //req.cookies from expressjs docs. get karne ke liye...request se mangenge and sari cookies mangenge isliye plural hoga toh s hoga cookies m. and store client side pe hoti hai and client request bhejta hai isliye req.cookies
  //pura object dega isliye req.cookies....
  //client request bhejta hai...toh use dekhne ke liye req.cookies
  let {username, age} = req.cookies; //jo bhi chahiye use destructure kar diya...like hame username and age chcahiye
  // res.send(req.cookies)
  res.send(`hi I am ${username} and my age is ${age}`) //destructure kar liya tph we can send something like this

})


app.listen(5050, ()=>{
  console.log("server at 5050")
})

