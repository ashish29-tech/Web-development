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
// const express = require('express'); //express ko require karte hai to ye function return karta hai. 1 variable m store kar liya.
//This app is the entire instance(mtlab sab kuch) of your application.
// const app = express(); //jis variable m store kara function ko...use call kar liya. And function ka basic kaam hota hai to return something...to ye return karega to app(variable) m object ayega. And ye app matlb hamara main application which we are trying to create.
// console.log(app) ////jo object mil rha hai use console kiya. We'll get a huge massive object.
// console.log("ashish bhai backend fat gya"); 

//read notes in copy.
//App is an instance of our application that will listen all the command on port number 8080 and iska acknowlwdgement ki kya kaam hua ki nai hua ye hame callback fn de rha hai.
//listen is a function attached to the app object. A function that belongs to an object is called a method. Therefore...listen is a method of the Express application object.
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
// app.listen(8080, ()=>{ //it's a method. It'll accept a port number and a callback function. app is an instance of our application...that will listen all the commands on port no. 8080 and iska acknowledgement mtlb kaaam hua ya nai ye call back function de rha hai.
//   console.log("server connected at port 8080 Hi Baby what's up ?..") //in server..."Cannot GET /" means 
// }); 

//chrome m...localhost:8080 means localhost:8080/...means slash hota hai. Default path is slash. 8080 is port number. Default method is GET. Ye kha se aya ? T know open docs
//If we are inside the form..how many type of methods do we hve inside form ? 2 types...GET and  POST. But right now we aren't working with form..toh ye GET method kha se aya ? 
//Open expressjs.com...click on API reference...and then on application...wha methods hai...click on app.METHOD(). So ye app ke andar 1 method hota hai.. aur jab kuch specify nai karte toh by default GET method chal rha hota hai. Isliye...localhost:8080/ m jo request bhej rahe hai..slash path pe request ja rahi hai..wo GET request hai..and mujhe GET request pe slash path pe kya dena hai..mujhe nai pta...
//Methods dekhne ke liye...http methods mdn.. 

// console.log(app) //ab strt karenge server toh dikhega Function:app.. abhi baar-baar restart karna pad raha hai server..to overcome this nodemon package..
//We are running code with the help of node...node index.js.
//So everytime you make a change in your code. You need to restart your server. Bcoz chnge is not detected by server. 
//So to avoid doing this again and again...we have to install a packacge...nodemon.
//Read doc....search...npm nodemon

//search nodemon npm
// install...gobal wala nai karna unless u r a good developer
//type...npm install nodemon...to install
//to check..package.json m..nodemon aa gya hoga...
//now script bnani hai..script means shortcut...start karne ke liye shortcut
//package.json m...script wale m likhenge..."start: "nodemon" 
//test nai karna tha isliye..."test": "echo \"Error: no test specified\" && exit 1", ye line hta di
//nodemon will restart our server but 1 baar to start karna padega.
//Type...npm start....in terminal to start server once

//------------------------------------------------------------------------

//now open expressjs.com
//open app...open app.use()....app.use([path,] callback [, callback...])....app ke andar use method use kar rahe hai to...[path] and [callback] optional hai...and callback(without square brackets)....jispe square bracket nahi hai wo compulsory and jispe hai wo optional...so callback is compulsory...and path du ya na du fark nai padta.
//app m use method...use kar rahe hai..
//https://expressjs.com/en/5x/api.html#app.use...
//app.use..ise entirely middleware kehte hai..for us middleware is a function which will run on every incoming request. Default path../(slash) hota hai. /ash, /ranjan, /abh ye sab request hai
//

const express = require('express');
const app = express();

// console.log("ashish bhai backend fat gya");
//middleware -> function
// app.use(()=>{ //path dena compulsory nai hai. Callback function dena mandatory hai. This will run on every incoming request. Chrome m reloading hoti rahegi cuz we are sending request to the server(we have created our own server..so we haven't did anything for server to respond) but not getting response.
//   console.log("you made a request")
// }) 





