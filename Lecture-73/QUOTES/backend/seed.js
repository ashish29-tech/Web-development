//seed hamesha models ke base pe hota 
//models ka folder bnaya
//seed m dummy data seed hoga

//yha mongoose chahiye hoga
const mongoose = require("mongoose"); //yha import kar lete hai mongoose

const Quotes = require("./models/Quote"); //Quotes bhi chahiye hoga...ye require models/Quote se require ho rha hai

//array ko seed karate hai...toh dummy array bna lete hai
let dummyArray = [ //array of objects honge...
  {author: "ashish", text: "The key is to doing boring things consistently"},
  {author: "indian", text: "mera bharat mahan tha hai aur rahega"},
  {author: "Mahatma Gandhi", text: "Be the change that you wish to see in the world"},
  {author: "bakait", text: "baaz ki trah udna hai toh titliyo ke peeche jana band kar do"},
];

async function seedDB(){ 
  await Quotes.insertMany(dummyArray) //quotes ke andar insert karna hai...insertMany accepts an array. array ka naam dummyArray...and it's a DB operation so it'll await and await works with ar=sync
  console.log("DB seeded")
}

module.exports = seedDB; //seedDB ko export kar diya