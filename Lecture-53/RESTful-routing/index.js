
//So far we have done till Task 3
//We'll begin with Task 4


const express = require('express');//function
const app = express(); //Running the express file. Object
const path = require('path'); //node module already present
const methodOverride = require('method-override'); //require kar liya...https://www.npmjs.com/package/method-override ....for PUT/PATCH/DELETE method ke liye


let comments = [ //we are making an array of objects. Ye sare comments ko index ke page pe bhejna hai.
  {
    id: 0,
    username:"ash",
    comment: "live batch ke students kisi se kam hai kya?"
  },
  {
    id: 1,
    username:"abhishek",
    comment: "didi tera dewar deewana"
  },
  {
    id: 2,
    username:"mani",
    comment: "Mera bharat mahan"
  },
  {
    id: 3,
    username:"bhaskar",
    comment: "Hey prabhu, hey hari ram krishna jagan nathan premanand, ye kya hua"
  },
]

app.set('view engine', 'ejs'); //Engine
app.set('views', path.join(__dirname, 'views')); //Ye template ke liye
app.use(express.static(path.join(__dirname, 'public'))); //public..static file ke liye use hota hai

//https://expressjs.com/en/5x/api.html#req.body
//body parsing middlewares
// app.use(express.json()) // for parsing application/json.....ye json data ke liye
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded....ye form ke liye. We are working with form. 


app.use(methodOverride('_method')); //https://www.npmjs.com/package/method-override Ye task 6 ke liye hai...for method overriding. Uska name change kar diya..and _method rakh diya...iska mtlb jab bhi _method ko use karenge toh methodOverride use hoga mtlb POST se kisi aur m change karna chah rahe hai...and ye methodOverride mila methodOverride variablle se mila(upar)..jise install kiya tha




//RESTful route according to the RESTful table. Table...from Right to left
//TASK-1: Display a list of all blogs. Show all the comments...Where are my comments ? They are in DB. For now our DB is Array. So we'll create an array...

app.get('/comments', (req,res)=>{ //get request ja rahi hai../comments pe
  res. render('index', {comments}); //ek new page show karana hai...index.ejs. Render means views tak ka path use pata hai. views ke andar index.ejs bna lenge. And yha index dal denge. Objects bheja usme sara comments bhej diya..comments is an array. Toh comments naams ek file index.ejs m mil jayega
})





let PORT = 5050;
app.listen(PORT, ()=>{ //listener
  console.log(`Server connected at port: ${PORT}`)
})


