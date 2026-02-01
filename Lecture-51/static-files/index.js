//mkdir static-files
//npm init -y
//npm i express nodemon ejs


//What are static files ?
//Are imsges/videoes part of static files ? Yess
//Are css, html, and js part of static file ? Yess

//last class m we created views folder in which...we created all templates...for ex: index.ejs, app.ejs
//Static file ke sath kaam karna hai to public naam ka folder bnata hu. Isi ke andar css, js, html and other assets.
//Refer notes in register


const express = require('express'); //express ka server bana diya 
const app = express(); //app ka instance chahiye hota hai
const path = require('path'); //path ko reaquire kar liyaa

app.set('view engine', 'ejs'); //view engine...ejs dekh rha hai. key view engine hai...ejs which is value wo ham set kar rahe hai.
app.set('views', path.join(__dirname, 'views'));//views ka path set kiya...isme directory name. Path ko use karne kae liye path hona chahiye...upar path bna lenge..const. __dir ke sath jo views hai wo value hai aur pehle wala views key hai

//Mujhe static file ka kaam karna hai and static file har request ke liye chahiye and har request ke liye middleware ata hai. Expressjs.com...then API reference...then Application...then app.use()...then scroll down a bit and read "serve static count....application directory"
app.use(express.static(path.join(__dirname, 'public'))); //copy-pasted this line from...https://expressjs.com/en/5x/api.html#app.use. path.join ke liye upar path hai...directory name pta hai.."public" naam ka folder hai...bss btana hai static file serve kar rahe hai express ke andar. Use isliye ayega cuz har incoming req pe chaiye. Har incoming request pe static file ko serve karna hai

//Create a route. And us route ko hit karne pe...We'll show a page...us page ke andar we'll do styling...and wo styling actually m public folder m hai. Public ke andar js folder, and css folder and css folder m style.css ki file bna dete hai
app.get('/whatever', (req,res)=>{ //whatever path. And ise dikhane ke liye views ke andar whatever.ejs bna lenge. Whenever this whatever route will hit..
  res.render('whatever') //hit hone baad use render...and views tak ka path to hame pata hi hai..toh uske andar whatever m jana hai
})

//Ek new route....usse new page hit hoga...usme styling wahi use hogi but isme 2 component honge...style.css and bootstrap and DRY principle ko follow karenge. 
app.get('/horror', (req,res)=>{//Route bnana hai to app.get cuz application ka main instance hai and get uska method hai. We need to specify 2 things here....1st is path and 2nd is callback fn. 
  res.render('horror') //views tak ka path to pta hai...we'll create a new file(horror.ejs)...wha basuc h1 and ul, li bna lenge. Render horror pe karana hai...
}) 



let PORT = 8080;
app.listen(PORT, ()=>{ //app sun rha hoga isliye listen...and PORT no. assign kar diya 
  console.log(`server connected at PORT: ${PORT}`)
})

//--------------------------------------------------------------------






