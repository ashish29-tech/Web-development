
const express = require('express');
const { isLoggedIn } = require('../middleware');
const User = require('../models/User');
const Product = require("../models/product");
const router = express.Router();

//
router.get('/user/cart', isLoggedIn, async (req,res)=>{ //yha bhi banda loggedIn chahiye isliye middleware lga ke check kara liya...
  let userId = req.user._id; //
  let user = await User.findById(userId).populate("cart"); //user bhi find kar lete hai...and logged in hai to user mil jayega
  // console.log(user, "ashish");
  //yha total amount calculate kar ke bhej sakte hai
  let totalAmount = user.cart.reduce( (sum, curr) => sum + curr.price, 0) //this reduce method accepts a callback function..1 hi hai toh ham {}ye ignore karenge. curr is the item. user.cart m pura product hai.
  // console.log(totalAmount);
   
  //cart ke andar cart.ejs hai...jisme sath m user ki sari information lelo
  res.render("cart/cart", { user, totalAmount }); //jis pagae pe render kar rahe us cart wale page pe user ko bhi bhej dunga...page bna lenge....views ke andar cart and isme cart.ejs
  ///user/:productId/add ye route tab hit karana hai jab koi add to cart pe click kare 
  ///user/cart ye wale route jab navbar m bhi bnda cart pe click kar de...mtlb agr kisi ko apni cart check karni hai to wo click kar ke dekh sake...so partials -> navbar. Ye wala route tab hit hoga...jab ham add to cart button pe click kare...par kya ham button se koi post request bhej sakte hai ? No..toh hame ise form m convert karna padega...product m shows.ejs m 
})

//agr koi banda cart naam ke array m add kar pa raha hai that means wo bnda logged in ho. Middleware lagega.
////agr cart naam ke andar kuch dal pa raha hai toh firstly we'll have to make sure...ki wo banda loggedin ho...toh middleware lagega
//db ke andar add karna hai means change karna hai toh post request...
router.post('/user/:productId/add' , isLoggedIn, async (req,res)=> { //isLoggedIn ko use kar lenge and upar require kar lenge
  let { productId } = req.params //product ki id chahiye hogi isliye req.params se destructure kar lete hai...
  let userId = req.user._id; //agr banda loggedIn hai toh req.user ka access toh hoga...id ko isliye find kiya so that user ko find kar pau and pure user ke andar jo cart naam ka array hoga...uske andar productId ko fek sakte hai
  let user = await User.findById(userId); //user find karna hai..use kar rahe hai toh...User pe click kar ke upar require kar lenge and since itls a momgoDB method...it'll give me a promise...and promise works with async. populate lagayenge taki cart ke array se..sari chize utha ke user ko de denge
  // console.log(user, "ashish");
  let product = await Product.findById(productId); //product ko bhi find kar lete hai. 
  user.cart.push(product); //user ki cart m push kar rahe hai pura ka pura product jo ultimately..productId hi bhejega 
  await user.save(); //user ko save kara lete hai...and since it's a DB method..
  //ye upar ke sare kaam ho jaye to user ko new page pe leke jana chahte hai..jha use sara cart dikhe
  res.redirect('/user/cart'); // /user/cart pe GET request jayegi...

});







module.exports = router;



