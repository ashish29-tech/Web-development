
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

//TASK-2: Show Form for new comment 
//
app.get('/comment/new', (req, res)=>{ //singular m comment as in table m hai blog...
  res.render('new') //form ko show karna hai means new page ko show karna hai...views ke andar mew.ejs bna dete hai
})


//TASK-3: To actually add the comment in the DB/ARRAY
//GET vs POST ke diff m btaya tha ki "jab post request hoti hai to sara data kha nazar ata hai ? request ki body m."
app.post('/comments', (req, res)=>{ //post method pe request hai...and comments path hai
  // console.log(req.body); //by default req ki body undefined hoti hai...toh default value ko change karne ke liye we use middlewares. Change karne baad object ayega...toh object ko destructure kar sakte hai.
  let {username, comment } = req.body; //req ki body ko destructure...jis naam se available hai...username and comment
  //Now array ke andar obj bna ke add karna hai..cuz array m actually m array of objects hai...means jo yha aya hai use in the format of objects..array m add karna hai...Now us array m push kar sakte hai.
  // comments.push({username:username, comment:comment, id:comments.length}); //Ye and niche wali line same hai cuz ES6 m key:value same ho to koi 1 chiz likhte hai.
  comments.push({username, comment, id:comments.length}); //Now us array(aray name comments hai) m push kar sakte hai...to comments m push kar diya ek object..usme value username and comment....and id bhi deni hai. ID ke corresponding array ki length dedi....0,1,2,3...mtlb 4 hai. ES6 m aya tha rule ki key and value same hai to 1 chiz likh sakte hai..and yha username and comment ko isliye key:value nahi di gyi cuz dono same hai but id ko di gyi hai. Array ki length se ID increase kar rahi hai.
  //Push kar diya...now redirect(GET req dena to a particular path)...new element array m dal diya to phir se sare blogs dekhna chahtea hai..toh GET req /blogs se bhej sakte hai..isse benefit hoga ki create page bnane ki jrurat nai padegi...cuz jab redirect kar rahe hai(mtlb GET req bhej rahe hai) to already ek page bana hua hai index.ejs toh GET req ki help se sare blog dekh lenge...added blog bhi sidha index ke page pe.
  res.redirect('/comments') //redirect kisi ek particular path pe hota hai..mujhe comments pe karna hai....isse GET req gyi /comments par
  // res.send(req.body); //http://localhost:5050/comment/new isse form dikhega. Username and comment(kuch bhi dal ke) dal ke submit karenge toh...path change and terminal m undefined. Visit https://expressjs.com/en/5x/api.html#req.body.... Written there...req ki body bhi ek object hui..by default defined means req ki body m pehle se kuch defined rehta hai....undefined ko change karne ke liye 2 middleware ate hai....inhe kehte hai body parse(dekhna)...1 hai express.json and another is express.urlencoded()
})


//Task 4: To show a particular comment in the DB/ARRAY -> req.params
//Complete Flow...URL se ID aayi → req.params me mili → number me convert hui → array me comment mila → show.ejs me render ho gaya
//path diagram m.../blogs/:id...colon ham tab lagate hai jab hamara path fixed nahi hota tha...and id can be 1,2,3.../blogs/:1.../blogs/:2...and so on...kitna bada bhi ho sakta hai...infinte routes bnana possible nahi hai...toh iske liye subreddit wala concept...1 hi route bnayenge alag-alag id ke liye...and according to the request...ye request ke params m se alag-alag chize le payenge...and show.ejs banega..check diagram by sir

app.get('/comments/:commentId', (req, res)=>{ // /comments/:id path pe jayegi..jab bhi request karte hai kisi path pe toh we have 2 things req, res ka object
  // console.log(req.params); //console kar ke dekh rahe hai...ki id ki value mil rahi hai ya nai. Value(ID) mil jayegi..jo ki object hai..now id ki help se different comments dikha sakte hai. Is object ko destructure karenge.
  // res.send(req.params); //browser m req.params ayega...id mil gayi..id ki help se alag-alag particular comments dikha sakte hai
// object hai toh destructure kar lete hai
  let {commentId} = req.params; //req.params ko destructure kar liya...jo id(browser m localhost se mili jo). Is id ke base pe pura ka pura product find kar sakte hai...and find array m se karna hai. And array ka naam comments hai
  let foundComment = comments.find((comment)=>{ //find method lagaya array pe...read more at "find mdn method". Find method will accept a callback function and will return something. Item ka naam comment rakh diya(parameter m). foundComment m store kar liya
    // console.log(comment.id); //sath-sath comment bhi kar ke dekhte hai. Console karwa rahe hai to check value kon se pe hai
    // console.log(commentId);
    // res.send(req.params); //chize fat na jaye isliye send kara ke dekh rahe hai

//  req.params se jo mil rahi hai that is string and jo array m store kiya hai wo number...isliye === jab laga rahe hai tph... string is not equal to number...isliye strict equality se hta diya
    // return comment.id === commentId}) //upar console kara liya comment.id and commentId ko..agr value match kar gya to return kar dega foundComment. Yha strict check hai to page blank aa gya. Iske liye check karenge toh..id jo params se mil rahi hai..jo request.params se mil rah hai that is a string and jo array ke andar store kara hai that is a number....isliye number 1 is not equal to string 1. Isliye yha strict check htana pada...toh string ko number m convert kar de aisa method hai...parseint
    // return comment.id == commentId;//Way-1. Yha strict check hta diya to pura ka pura object aa gya. Strict equality also checks the data type. 
//  string ko num ke karne ke liye...parse int
    return comment.id === parseInt(commentId); //way-2. ParseInt m bhej diya commentId ko...jo bhi value hogi wo integer/number format m convert ho jayega.
  })
    // console.log(foundComment);//page blank ayeaga and terminal m undefined ayega

    // res.send(foundComment); //
    //yha se foundComment aya which is an object... toh uske upar .(dot)
    res.render('show', {foundComment}); //show.ejs pe bhejna hai according to the table...show ka page bnate hai and render kara denge show ke page m...and foundComment ko render...we'll be sending it with the help of an object. View kw andar show ka page bna diya...
})






let PORT = 5050;
app.listen(PORT, ()=>{ //listener
  console.log(`Server connected at port: ${PORT}`)
})


