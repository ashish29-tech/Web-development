// 4. ROUTES BANYENGE. RESTFUL ROUTING KI HELP SE SARI CHIZE DEKHNA CHAHENGE..AB SIMPLY ROUTES BNANE HAI. WE HAVE CREATED FOLDER FOR ROUTES.
// Toh alag-alag routes banane pad sakte hai....abhi products ke liye bna rahe  hai baad m user ke liye..
// Routes folder m...product.js(small p se) bna lenge. Capital P se model wala Product hai...model is js class and class syntax m 1st letter hamesha Capital hota hai isliye...bhaiya ne Product(P capital rakha model name)

const express = require('express'); // Now products ke routes banane hai. Toh kya iske liye...express ki jarurat padti hai ? Yes. So express ko require karna padega...product.js m.
const Product = require('../models/Product');
const Review = require('../models/Review');
const { validateProduct } = require('../middleware');

const router = express.Router();//Puri ki puri application ko yha export nai kar sakte...iske liye we have...mini application naam ki chiz...jise router kehte hai...aur wo express ke andar hota hai. Jo kaam app kar pa rha tha..app.get, app.post, app.listen..wo sara kaam ab router kar payega..bcoz this is mini application..ye Router naam ka method expres ke andar available hai..
//so ultimately router ko export karna padega 



// try and catch: JavaScript me error handling ke liye try...catch block use hota hai.
// try block: iske andar wo code likha jata hai jisme error aane ki possibility ho.
// catch block: agar try ke andar koi error aaya, to program crash hone ke bajay catch ke andar aa jata hai. Yaha tu error handle kar sakta hai (jaise ki error page dikhana, console me print karna, ya custom message dena).

//read
router.get('/products', async (req,res)=>{ //jo kaam app karta hai wo ab ye kar payega. Jab bhi products route hit hoga mujhe sare ke sare product dikhane hai
  try{ //ye route bhi to fat sakte hai..isliye...error aye to error page pe chale jaye rather than to any other page
    let products = await Product.find({}); //sare products..mere model(Product) ke andar hai. Prduct type karte hi upar require ho jayega. Empty object dena is a good practice. Jitne bhi mongoose ke methods hai jo ye model pe lagte hai..they will return a promise...toh promise return karenge toh time lagega isliye async, await kar dete hai...and jo chiz milegi use variable m store kar lenge.
  //Now according to the diagram/table...GET request done, /blogs done...new page pe sari ki sari chize show karni hai...
  res.render('index', {products} ) //response render kar diya index wali page pe aur sath m products bhej diya jo in the form of object bheja jata hai. Ab views ke folder m index.ejs bnayenge.
  }
  catch(e){
    res.render('error', {err : e.message})//error message pe chale jaye and error dikha de
  }
}); 

  

//new form dikhana hai...according to the table
router.get('/product/new', (req,res)=>{
  try{
    res.render('new') //render karna hai new wale page m. So new.ejs bna lenge
  }
  catch(e){
    res.render('error', {err : e.message})
  }
  
})



//actually adding to the DB..POST request
router.post('/products', validateProduct, async(req,res)=>{ //jab bhi product add hone wala hoga toh ye middleware(validateProduct) add kar denge...taki actually m add hone se pehle check kar le. validateProduct type kar ke click karenge toh upar apne aap upar require ho jayega.
  try {
    let {name, img,  price, desc} = req.body;//jo bhi chize POST request ke through jati hai wo request ki body m ati hai..and use destructure kar diya and ye by default undefined hoti hai....and iske liye middleware hoga..name,img,price,desc...naam se ayega...and isko dekhne ke liye app.js m middleware lagana padega. request ki body ka sara access hoga.
  //ek new product create karna hai..uske liye mongoose m ek method hota hai..create ke liye..go to mongooseejs docs -> read docs -> Models...await Tank.create({size: 'small'})...tank model hai..iski help se ek new object create kiya..so we'll be using this method to create single entity.
  await Product.create({name, img,  price, desc});//product hamare model ka naam hai..and ye create upar object({name,img..}) ki help se karega...so as it is copy kar diya...and ye create method apne mongodb ke upar chal rha hai..toh it'll be returning a new promise..so async function bna diya. Create..db ke andar automatically save bhi kar leta hai...so alg se save ki reqrmnt nai hai. 
  //last step is to redirect...redirect /blog pe
  res.redirect('/products');
  }
  catch(e){
    res.render('error', {err : e.message})
  }
  
})

//show particular product....Ab hame ek product ke bare m information deni hai..show and then edit karna hai..refer table.
router.get('/products/:id' , async(req, res)=>{ //ye id chahiye toh req.params se mil jayega
  try{ //routes bhi to fat sakte hai
    let {id} = req.params; //ise destructure kar liya req.params se
  // let foundProduct = await Product.findById(id) //find karna hai pure ke pure product ko on the basis of id..iske liye find by id method hota hai..mongoosejs.com docs m..Queries m..Model.findById()...direct id ke base pe pura ka pura object mil jayega...and since it is a mongoDB method..it'll return a promise..toh await and async function...varible m store kar liya..
   let foundProduct = await Product.findById(id).populate('reviews')////populate lagaya. Ye dusre collection m jayega and wha se sara data lake de dega...but product ke andar reviews ke basis pe populate karna hai...taki reviews ke andar id ke hisab se lake de...isliye yha reviews likhenge...passed as a string.
  // console.log(foundProduct); //ek baar print kara kar dekh lete hai....mtlb before populate aise hai
  res.render('show', {foundProduct})//found product ko send to the showpage pe dikha dete hai..res.render kar denge show page ke sath..and pura ka pura foundProduct as an object. Ab show page bnana padega.
  }
  catch(e){ //error aye toh error page pe chale jaye
    res.render('error', {err : e.message}) //sath m error message dikha de
  }
})

//show edit form
router.get('/products/:id/edit', async(req,res)=>{
  try{
    let {id} = req.params; //ise destructure kar liya req.params se
  let foundProduct = await Product.findById(id); 
  res.render('edit', {foundProduct}) //render karna hai edit.ejs. edit ke andar pura ka pura foundProduct hai. edit.ejs bna lenge.
  }
  catch(e){
    res.render('error', {err : e.message})
  }
  
})

//actually changing the product
router.patch('/products/:id', validateProduct, async (req,res)=>{
  try{
    let {id} = req.params; //id nikal li
    let {name, img,  price, desc} = req.body;//since post request ke through form bhra hai..toh hamare paas request ki body ka pura data aa sakkta hai
    await Product.findByIdAndUpdate(id, {name, img,  price, desc} );//mongooseejs docs pe..Queries m..Model.findByIdAndUpdate(). Id(params wali id) do find karo and 2nd argument is update karo..pura ka pura object in chizo ke sath update karo. And since it's a mongoDB method it'll return a promise...
    res.redirect('/products')
  }
    catch(e){
    res.render('error', {err : e.message})
  }
})

//DELETE is homework... Product.findByIdAndDelete...ye use karna hai
router.delete('/products/:id', async(req,res)=>{
  try{
    let {id} = req.params;
    let foundProduct = await Product.findById(id); //product ko delete karne se pehle reviews delete karu...toh id ki help se pura product find kar lete hai.
   //Deleting reviews before deleting product...ab is product ke paas reviews naam ka array hai..toh for loop
    for(let ids of foundProduct.reviews){ //ye reviews ki id hai...toh in id ke basis pe ham delete karna chahte hai
      await Review.findByIdAndDelete(ids)//ye jo id hai inko rreview ke collection m se hta do...Review type kar ke enter...upar require ho jayega. And since it's a mongoDB operation toh it'll return a promise..
   }
     await Product.findByIdAndDelete(id);
    res.redirect('/products') //route ko hit karne ke liye DELETE chahiye and DELETE ke liye POST ko override karna padega...index.ejs m jake form bnanyenge
  }
  catch(e){
    res.render('error', {err : e.message})
  }
})


module.exports = router; //yha se module export kar diya and app.js m require kar lenge


 










