//Class taken by TA.

// //MongoDB m data BSON format m store hota hai. BSON = Binary JSON. JSON jaisa dikhta hai. Internally binary format me store hota hai
//MongoDB ise internally BSON me convert karke store karta hai.
// {
//   "name": "Rahul",
//   "age": 25
// }
//BSON kyu use hota hai? MongoDB ne BSON isliye choose kiya kyunki: Fast access: Binary format hone ki wajah se parsing fast hoti hai. JSON ke paas limited types hote hain, BSON me zyada hote hain: Date, ObjectId, Binary....



const express = require('express'); //express ka server

const app = express(); //function call kiya
const mongoose = require('mongoose'); //3rd party package hai toh require karo
//This returns us a promise. Toh promise as we all know either it resolve or rejects
mongoose.connect('mongodb://127.0.0.1:27017/try'); //class is db name..it can be changed. Ye static part hai....mongodb://127.0.0.1:27017

//Jab ham js se kuch bhejte hai backend pe..toh hame schema ke through bhejna hota hai. And schema m object paas karte hai. And isme kis-kis type ke data rakhna chahte hai..like student m name, rollno...means uska name and data type
//Schema create kiya ki hamara object kaisa dikhe
const { Schema } = mongoose; //Yha destructuring ki. ek schema bnaya...Schema ek function hai...ye object mang rha hai..And schema m object paas karte hai. And isme kis-kis type ke data rakhna chahte hai..like student m name, rollno...means uska name and data type
const students = new Schema({ //schema ek function hai and ise hame object dena hota hai...schema name..hame ise object dena hai
  name: String, //data types
  rollNo: Number
})


//Model create karenge. Model convert ho gya collection m. Ye convert middleware ne kiya...jo ki mongoose hai.
const student = mongoose.model("Student", students); //model create...'Student' name ka model...schema name 'students'..
let student1 = new student({name:"ram",rollNo: 1}); //data bhej diya
student1.save(); //data save command

app.listen(4000,()=>{
  console.log("Port connected")
})






