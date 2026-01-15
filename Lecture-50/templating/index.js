
//Templating
//It is derived from a word template. And template is basically a structure.
//wheb we open reddit and search for apple and dog... pages are same...means 2 oages nahi bane hai...ek template bna hua hai usi ke andar data change ho gya...
//data badal kar ke ham show kar pa rahe hai ki different pages hai...apple, dog, cat..ka data aa rha hai 1 template define kar diya uske andar hamne design kar diya hai
//Check notes
//How to make a template ? With the help of templating engines. What are all the possible templating engines with me ? 1. HBS 2. EJS 3. Jade 4. Nunjucks 5. Pug and so on
//We'll be using EJS. Bcoz it is very similar to js.
//ejs.co official docs.
//<% 'Scriptlet' tag, for control-flow, no output...docs m tag m...ye wala flow control ke liye hai
// <% ye start alag hoga and %> ending same hogi har tag ki...
//<%= Outputs the value into the template (HTML escaped)....  <% is sign ke aage = laga denge toh...ye output ke liye hai and ending toh same hogi hi
//

//we want our code to remain DRY. Do Not Repeat yourself.

//Template hai toh use view karna hai use we'll view it with the help of view engine. 
//https://expressjs.com/en/5x/api.html#app.set ........ view engine is the property name and right side m N/A (undefined) ye default value hai..

//Isko use karne ke liye ise install karna hoga

//Create templating profile
//cd templating
//npm init -y
//npm i express nodemon ejs.... ab ejs bhi ayega
//index.js bnayenge
//package.json m jake...."start"

//it's a convention that all the templates/pages are made inside folder views...

// views....String or Array	A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array.	.......process.cwd() + '/views'...y eby degault uska path hota hai
// alag-alag templates ko dekhna chahte hai toh...toh all the templates are always made inside this views naam ka folder
//path.join() = paths ko safely jodne ka tarika
//path module kyun chahiye? Different operating systems me path ka format alag hota hai
//path.join() kya karta hai? Multiple strings ko ek proper path me convert karta hai...Extra / ya \ ko automatically handle karta hai...OS-specific separator use karta hai
// process.cwd() + '/views' ......ye default path change karna hai but kyo karna hai ?
//process.cwd()..ye kon sa path deta hai ?
//process.cwd()...ki jgah __dirname


// const express = require('express');
// const app = express();
// const path = require('path'); //path ko use karne ke liye require karna padta hai

// //express m..website.
// app.set('view engine', 'ejs'); //templating engine ka naam ejs hai...usko set app.set se...'view engine' 1st property..i.e the key and right side(ejs) m uski value
//path.join ho gya...now jo-jo comma separated values denge...wo string ke format se jud jayengi
//views....String or Array	A directory or an array of directories for the application's views. If an array, the views are looked up in the order they occur in the array.	.......process.cwd() + '/views'...y eby degault uska path hota hai
// alag-alag templates ko dekhna chahte hai toh...toh all the templates are always made inside this views naam ka folder
//ye default path change karna hai but kyo karna hai ?
//jo-jo comma separated value denge...wo sring ke format se jud jayengi...
// views ki chiz views ke folder se kar rha hai find...
// app.set('views', path.join(__dirname, 'views')); //'views'..pehle wala key argument hai...and dusra wala view folder name hai. path.join use karne ke liye path ko require karna padta hai. With the helo of __dirname join karate hai rather than process.cwd...kyoki ham kahe bhi khade ho sakte hai.
// //convention ko dhyan rakhna padega....all templates/pages are made inside views folder
// //Views ke andar alag-alag template ki alag-alag files bna sakte hai


// //Home route
// //we want ki jab hamara koi 1 route hit ho. For ex: route route(roout) hit ho rah hai...and ye route, roout slash(/) pe hota hai
// app.get('/', (req, res)=>{ //route..roout....2 chizo ka access milta hai...req and res ke object ka
// // response ko bhejna hota hai toh... res.send but yha show karana hai...render
//   res.render('app')  //Template/page ko show karane ke liye render karte hai...app.ejs ko. But ejs ko likhne ki jarurat nai hai..cuz views tak ka path upar de rakha hai.
// })

// //star
// app.get('star' , (req,res)=>{// star pe hit hoga...req and res ko object dega
// //views ke andar ek new file bnana hai
// //star wale page ko show karana hai index ki help se
//   res.render('star')//page ko show karana hai to render...views tak ka to path pta hi hai...views ke baad star ayega. And .ejs likhne ki jrurat nai hai...cuz upar hai
// })

// app.listen(8080, ()=>{
//   console.log("server connected at port 8080")
// })

//-----------------------------------------------------------------------------------------
// Array bna lete hai...
// const express = require('express');
// const app = express();
// const path = require('path');

// let arr = ['hi', 'hello', 'bye']; //is array ko star wali file m chalana chahte hai...jis bhi file ke sath bhejna chahte..in this case star m bhejna chahte hai toh niche star wale route m ,(comma) dal ke object 
// let arr2 = ['hi', 'hello', 'bye']; 

// // //express m..website.
// app.set('view engine', 'ejs'); //templating engine ka naam ejs hai...usko set app.set se...'view engine' 1st peoperty..i.e the key and right side(ejs) m uski value
// app.set('views', path.join(__dirname, 'views')); //'views'..pehle wala key argument hai...and dusra wala view folder name hai. path.join use karne ke liye path ko require karna padta hai. With the helo of __dirname join karate hai rather than process.cwd...kyoki ham kahe bhi khade ho sakte hai.


// //Home route
// //we want ki jab hamara koi 1 route hit ho. For ex: route route(roout) hi ho rah hai...and ye route, roout slash(/) pe hota hai
// app.get('/', (req, res)=>{ //route..roout....2 chizo ka access milta hai...req and res ke object ka
//   res.render('app')  //Template/page ko show karane ke liye render karte hai...app.ejs ko. But ejs ko likhne ki jarurat nai hai..cuz views tak ka path upar de rakha hai.
// })


// // //star
// app.get('/star' , (req,res)=>{// star pe hit hoga...req and res ko object dega
// //views ke andar ek new file bnana hai
// //star wale page ko show karana hai index ki help se
//   res.render('star', {arr, arr2} )//is file ke sath bhejna chahte hai(upar ke arr2)...yha pe ,(comma) dal ke object. Is object m arr dal denge...jo bhi bhejna hai. Ye arr star naam ki file m aa jayega
// })

// app.listen(8080, ()=>{
//   console.log("server connected at port 8080")
// })

//----------------------------------------------------------------------------------------
//index.js m Random no. generate karna hai 6 to 31 and then send karna hai random.ejs m and show karana hai

const express = require('express');
const app = express();
const path = require('path');

let arr = ['hi', 'hello', 'bye']; //is array ko star wali file m chalana chahte hai
let arr2 = ['hi', 'hello', 'bye']; 

//Random...math object ki help se banta hai
let rn = Math.floor(Math.random()* (25) + 6); //Math.random()...isse random no. generate hua...then hamara multiplication factor 31-6 hoga..cuz isi ki range m karna hai...i.e 25(isse multiplication factor)...and then +6 cuz 6 se start karna hai..then in sabka Math.floor. Now jo ayrga use route(rooouuutt) m bhejenge


// //express m..website.
app.set('view engine', 'ejs'); //templating engine ka naam ejs hai...usko set app.set se...'view engine' 1st peoperty..i.e the key and right side(ejs) m uski value
app.set('views', path.join(__dirname, 'views')); //'views'..pehle wala key argument hai...and dusra wala view folder name hai. path.join use karne ke liye path ko require karna padta hai. With the helo of __dirname join karate hai rather than process.cwd...kyoki ham kahe bhi khade ho sakte hai.


// //Home route
//we want ki jab hamara koi 1 route hit ho. For ex: route route(roout) hi ho rah hai...and ye route, roout slash(/) pe hota hai
app.get('/', (req, res)=>{ //route..roout....2 chizo ka access milta hai...req and res ke object ka
  res.render('app')  //Template/page ko show karane ke liye render karte hai...app.ejs ko. But ejs ko likhne ki jarurat nai hai..cuz views tak ka path upar de rakha hai.
})


// // //star
app.get('/star' , (req,res)=>{// star pe hit hoga...req and res ko object dega
// // //views ke andar ek new file bnana hai
// // //star wale page ko show karana hai index ki help se
  res.render('star', {arr, arr2} )//is file ke sath bhejna chahte hai(upar ke arr2)...yha pe ,(comma) dal ke object. Is object m arr dal denge...jo bhi bhejna hai. Ye arr star naam ki file m aa jayega
})

app.get('/random' , (req, res)=>{
  res.render('random' , {rn}) //rn ko bhejna hai. Now 
})


app.listen(8080, ()=>{
  console.log("server connected at port 8080")
})






