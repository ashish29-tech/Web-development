//make a file with the same name(i.e index.js) as made by node js in package.json.

//https://expressjs.com/en/5x/api.html
//express ki website se code copy-paste it...require and run

// const express = require('require')


// const express = require('express')
// const app = express()

//-----------
//Till now jitne bhi packages kiye hai..jab unhhe require karte hai to...kya har baar object milega ? no, it's not compulsoty
// For Example...In filesystem

// const fs = require('fs'); //fs is an object
// const path = require('path');//path ko require kiya. path is an object
 
// fs.writeFile('') //we were able to use .(dot) operator cuz it was an object
// path.join('ash' , 'ranjan')
//Means jab bhi require karenge kya hame object milega ? Not compulsory.

//-----------------------------------------------------------------

//When we require express...it gives us a function. 
const express = require('express'); //express ko require karte hai to ye function return karta hai. 1 variable m store kar liya.
//This app is the entire instance(mtlab sab kuch) of your application.
const app = express(); //jis variable m store kara function ko...use call kar liya. And function ka basic kaam hota hai to return something...to ye return karega to app(variable) m object ayega. And ye app matlb hamara main application which we are trying to create.
// console.log(app) ////jo object mil rha hai use console kiya. We'll get a huge massive object.
// console.log("ashish bhai backend fat gya"); 

//read notes in copy.
//App is an instance of our application that will listen all the command on port number 8080 and iska acknowlwdgement ki kya kaam hua ki nai hua ye hame callback fn de rha hai.
// app.listen(8080, ()=>{ ////it's a method. It'll accept a port number and callback function.
//   console.log("server connected at port 8080")
// }); 
//How to ensure server ban gya hai ? type...node index.js in terminal.
//It's(though not to me) waiting for some input. It means there is constant connection which is being created. And where can I get this connection ?
//mujhe baat karne ke liye apne local machine i.e local host ke port 8080
//type...localhost:8080 in chrome browser and see "cannot GET /" and when we change it to 8082..we'll see "this site can't be reached"
//is port number ke through apne server se baat kar sakta hu..cuz my connection is established
//Jo hamne bnaya hai..Servers are resource heavy...slows our computer. Toh hame server kill karna hai...use...ctrl + c
//We are running code with the help of node. So, everytime you make a change in your code you need to restart your server.
//Jab bhi kuch change karte hai code m to server detect nai kar pata. So we have to restart our server.
//Terminal m...connect server...node index.js se
//now make changes
app.listen(8080, ()=>{ //it's a method. It'll accept a port number and a callback function. app is an instance of our application...that will listen all the commands on port no. 8080 and iska acknowledgement mtlb kaaam hua ya nai ye call back function de rha hai.
  console.log("server connected at port 8080 Hi Baby..") //in server..."Cannot GET /" means 
}); 






