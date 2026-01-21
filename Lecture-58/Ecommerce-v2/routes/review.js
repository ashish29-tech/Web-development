//sara ka sara product.js routes se copy kar liya

const express = require('express'); // Now products ke routes banane hai. Toh kya iske liye...express ki jarurat padti hai ? Yes. So express ko require karna padega...product.js m.
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router();//Puri ki puri application ko yha export nai kar sakte...iske liye we have...mini application naam ki chiz...jise router kehte hai...aur wo express ke andar hota hai. Jo kaam app kar pa rha tha..app.get, app.post, app.listen..wo sara kaam ab router kar payega..bcoz this is mini application..ye Router naam ka method expres ke andar available hai..
//so ultimately router ko export karna padega 

//review route likhenge jisse review dikhe
router.post('/products/:id/rating', async (req,res)=>{ //post request se jab bhi hit karte hai toh..toh sara data request ki body m milta hai
  // console.log(req.body); //toh request ki body ko console kar liya
  // res.send(req.body); //and kuch bhi response bhej dete hai taki server na fate.
  //now isko destructure kar ke kaam kar sakte hai.
  let { rating, comment } = req.body; //req ki body m se 2 chize nikalte hai..rating and comment jo schema m tha
  let { id } = req.params //id bhi nikal sakte hai

  let product = await Product.findById(id) //capital P wala Product cuz prodcut ke model m se find karna hai na..id ke base pe product ko find kar rahe. Ise require bhi karna padega..Product type kar ke click karenge toh upar require ho 
  //new review...using class syntax
  let review = new Review({rating, comment}); //review ki jarurat hai..review pe click karenge to upar require ho jayega. New review upar line m rating and comment se banega...ise store kar liya var review m. Save karne ki jrurat nai padti jab creation kar rahe..insertone, ya create many method se...but Ye ham class syntax se kar rahe hai...and class syntax apne aap store nai hote...isliye save lagana padega

  product.reviews.push(review) //product m reviews naam ka array hai use push kara denge new review(review) ko...isse product ke andar bhi change hua 

  //now product and review dono ko save kar lenge
  product.save(); //save method mongoDB ka hai toh await lga denge..cuz save method returns the promise
  review.save();
  res.redirect(`/products/${id}`); //redirect kar denge show wale page pe.
})


module.exports = router; //yha se module export kar diya and app.js m require kar lenge


 










