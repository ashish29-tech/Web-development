//seed karna hao toh seed.js bna liya
//isme mongoose chahiye hoga
//model chahiye hoga toh models folder m Quote.js bna liya

const mongoose = require('mongoose');
const Quotes = require("./models/Quote") //require kar liya quotes ko... ./models/Quote se


//seed karna hai..means array. Toh array bna dete hai quotes ka
let dummyQuotes = [
  {
    author: "Ashish Ranjan",
    // text: "Aadmi ka jeewan sangharsh hai, haarna ya jeetna nahi"...ye line auto m samarth bhaiya ko auto wale uncle ne bola
    text: "The key is to doing boring things consistently",
  },
  {
    author: "Abhishek",
    text: "Mai CA hu..bada admi ho gya hoon",
  },
  {
    author: "mani",
    text: "Mai sirf mahila mitro se baate karta hu",
  },
  {
    author: "cartoon",
    text: "I'm always right. In case i am wrong read the first sentence.",
  },
];

//function bna lete hai jo usko seed karega
async function seedDB(){ //async bna lete hai
  await  Quotes.insertMany(dummyQuotes) //sare ko seed karana hai ek sath toh...Quotes ke andar hoga. insertMany accepts an array...array ka naam dummyQuotes
  console.log("DB SEEDED WITH DATA 😎")
}

module.exports = seedDB;