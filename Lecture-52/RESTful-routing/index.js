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
  //https://expressjs.com/en/5x/api.html#req.body .......req.body...Contains key-value pairs of data submitted in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded()....req ki body contain key value pair...mtlb req ki body bhi ek ebject hui...default value undefined hoti hai...and undefined ko change karne ke liye.. 2 middleware hote hai..body parse middleware..mtlb body ko dekhna...toh 2 hai dekhne ke liye...express.json...and express.urlencoded()....jab json data ke sath kaam karna hai toh json..and jab form ke sath kaam karna hai toh urlencoded
  // console.log(req.body); //by default req ki body undefined hoti hai...toh default value ko change karne ke liye we use middlewares. Change karne baad object ayega...toh object ko destructure kar sakte hai.
  let{username, comment} = req.body; //req ki body ko destructure...jis naam se available hai...username and comment
  //Now array ke andar obj bna ke add karna hai..cuz array m actually m array of objects hai...means jo yha aya hai use in the format of objects..array m add karna hai...Now us array m push kar sakte hai.
  // comments.push({username:username, comment:comment, id:comments.length}); //Ye and niche wali line same hai cuz ES6 m key:value same ho to koi 1 chiz likhte hai.
  comments.push({username, comment, id:comments.length}); //Now us array(aray name comments hai) m push kar sakte hai...to comments m push kar diya ek object..usme value username and comment....and id bhi deni hai. ID ke corresponding array ki length dedi....0,1,2,3...mtlb 4 hai. ES6 m aya tha rule ki key and value same hai to 1 chiz likh sakte hai..and yha username and comment ko isliye key:value nahi di gyi cuz dono same hai but id ko di gyi hai. Array ki length se ID increase kar rahi hai.
  //Push kar diya...now redirect(GET req dena to a particular path)...new element array m dal diya to phir se sare blogs dekhna chahtea hai..toh GET req /blogs se bhej sakte hai..isse benefit hoga ki create page bnane ki jrurat nai padegi...cuz jab redirect kar rahe hai(mtlb GET req bhej rahe hai) to already ek page bana hua hai index.ejs toh GET req ki help se sare blog dekh lenge...added blog bhi sidha index ke page pe.
  res.redirect('/comments') //redirect kisi ek particular path pe hota hai..mujhe comments pe karna hai....isse GET req gyi /comments par
  // res.send(req.body); //http://localhost:5050/comment/new isse form dikhega. Username and comment(kuch bhi dal ke) dal ke submit karenge toh...path change and terminal m undefined. Visit https://expressjs.com/en/5x/api.html#req.body.... Written there...req ki body bhi ek object hui..by default defined means req ki body m pehle se kuch defined rehta hai....undefined ko change karne ke liye 2 middleware ate hai....inhe kehte hai body parse(dekhna)...1 hai express.json and another is express.urlencoded()
})

let PORT = 5050;
app.listen(PORT, ()=>{ //listener
  console.log(`Server connected at port: ${PORT}`)
})

