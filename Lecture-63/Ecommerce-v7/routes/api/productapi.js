
// now hame AJAX request bhejne se kya koi page show karna hai ?
// No...mujhe bss like ko update karna hai...toh m API hit karunga ya Route hit karunga ? API
// Routes ke andar API folder bna lete hai...and usme ek ptoductapi.js


//jaise baki routes ko require karna padta hai waise hi ise bhi karna padega..app.js m
//jaise review route ko har incoming request pe check karna chahte waise hi is productapi.js route ko bhi check karenge

const express = require('express');
const { isLoggedIn } = require('../../middleware');
const User = require('../../models/User');
const router = express.Router();

//jaise hi ye api hit hoga toh isLoggedIn check hoga..
router.post('/products/:productId/like', isLoggedIn, async (req,res)=>{//yha hit karega. like tabhi kar payega jab wo logged in ho...isliye yha isLoggedIn wala middleware use kar rahe
  // console.log(req.params.id);
  // res.send(req.params.id)
  //ye upar ki id's ko destructure karenge
  //now user ki wishlist ke andar add ya check karana hai
  //id ke base pe us product ko find kar sakte hai...and is id ko user ke paas jo wishlist hai usko directly push kar sakte hai
  let {productId} = req.params; //destructure. User ko sirf id de rahe hai instead 0f req.params.id. Is id se product bhi find kar sakte hai and wishlist ke andar add/push(array ke andar) bhi kar sakte hai
  let user = req.user; //req.user ka access hota hai hmare paas
  let isLiked = user.wishlist.includes(productId)//now check user ke andar jo wishlist naam ka array hai usme include hai id...ye ya to true return karega ya false
  // console.log(isLiked);//pta chal jayega true hua ya false. Abhi include nai hai toh false ayega...
  //now task is...if id is not inside the array...it should get pushed...and if the id is already present insided it should be pulled out...mongoDB m kuch method hote hai jisse check kar ke pull ya push kar sakte hai...
  //now check condition...if liked hai to mujhe pull karna hai...and liked nai hai toh addtoset karna hai...
  if(isLiked){ //if true hai. 
      //1 updation karna hai...pura user update karna padega cuz user change bhi ho raha hai toh user ke andar save bhi hona chahiye...findById ka use kae ke,,,user ko find kar lenge uski id se...qur fir usko change
      //if array ko change kar diya...toh wo db ke andar reflect nai hoga...We want to reflect in the db as well...cuz since the wishlist is chaned...wishlist of the user changed...so the user needs to be saved
      await User.findByIdAndUpdate(req.user._id , {$pull: {wishlist : productId} }) //2 argument accept karta hai..1st field hai....2nd wo jo change leke ana hai..pehle seliked hai toh pull karna hai..wishlist ke andar se uski id. Rad docs for more info...https://www.mongodb.com/docs/manual/reference/operator/update/pull/
  }
  else{
      await User.findByIdAndUpdate(req.user._id , {$addToSet: {wishlist : productId} })
  }
}) 

module.exports = router;







