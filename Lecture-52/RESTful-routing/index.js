const express = require('express');//function
const app = express(); //Running the express file. Object
const path = require('path'); //node module already present

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


//RESTful route according to the RESTful table. Table...from Right to left
//TASK-1: Display a list of all blogs. Show all the comments...Where are my comments ? They are in DB. For now our DB is Array. So we'll create an array...

app.get('/comments', (req,res)=>{ //get request ja rahi hai../comments pe
  res. render('index', {comments}); //ek new page show karana hai...index.ejs...toh res.reder. Render means views tak ka path use pata hai. views ke andar index.ejs bna lenge. And yha index dal denge. Objects bheja usme sara comments bhej diya..comments is an array. Toh comments naams se ek file index.ejs m mil jayega and aray hai toh loop kar sakte hai.
})

//TASK-2: Show Form for new comment 
app.get('/comment/new', (req, res)=>{ //singular m comment as in table m hai blog...
  res.render('new') //form ko show karna hai means new page ko show karna hai...
})

//TASK-3: To actually add the comment in the DB/ARRAY
//GET vs POST ke diff m btaya tha ki "jab post request hoti hai to sara data kha nazar ata hai ? request ki body m."
app.post('/comments', (req, res)=>{ //post method pe request hai...and comments path hai
  //POST request me data URL me nahi hota, balki request ki BODY me hota hai
  // console.log(req.body); //by default req ki body undefined hoti hai...toh default value ko change karne ke liye we use middlewares. Change karne baad object ayega...toh object ko destructure kar sakte hai.
  
  // res.send(req.body); //http://localhost:5050/comment/new isse form dikhega. Username and comment(kuch bhi dal ke) dal ke submit karenge toh...path change and terminal m undefined. Visit https://expressjs.com/en/5x/api.html#req.body.... Written there...req ki body bhi ek object hui..by default defined means req ki body m pehle se kuch defined rehta hai....undefined ko change karne ke liye 2 middleware ate hai....inhe kehte hai body parse(dekhna)...1 hai express.json and another is express.urlencoded()
})


let PORT = 5050;
app.listen(PORT, ()=>{ //listener
  console.log(`Server connected at port: ${PORT}`)
})


