//google: npm give me a joke
//jis bhi package ko use karna hai use require karna padega...so we'll copy and paste it from give me a joke npm web site...
// npm install give-me-a-joke...run this in terminal. Now folder structure dekhe toh kuch files add ho gyi hai...
//npm init kiya tha toh..package.json. And when we install our package(joke wala)...tab aya node_modules and packaga-lock-json
//Kisi bhi package jo install kiya hai use..use karne ke liye...require karna padega

// const jokes = require('give-me-a-joke'); //we'll change var to const...bcz var can be changed. Name changed to jokes

// // To get a random dad joke
// jokes.getRandomDadJoke (function(joke) { //name changed to jokes
//     console.log(joke);
// });

//--------------------------------------------
//now figlet
//search npm figlet...
//ye copy kar liya....'npm install figlet' and paste it to terminal......we can avoid writing install and write just i
//now we want to know figlet mere package m aya ki nai...we'll check package.json...and see dependencies m...figlet and give me a joke 
//now ise use karne ke liye require kaenge

const figlet = require("figlet"); //figlet npm website se copy paste kar diya. 


figlet("ASH", function (err, data) { //yha mujhe ash word ko change karana hai...
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});







