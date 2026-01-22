//suppose 1 route hit kara hai.../product/new and new product add kar rahe hai...toh add karne se pehle check karna hai isliye
//jo server side pe validation laga rahe hai..ye pehle check hogi aur baad m add hoga...ise we call it middleware. so we made a file call middleware.
//mtlb chize validated hai ya nahi hai..shi hogi validation tabhi add kar payenge wrna nahi

//middleware ke andar kya-kya chahiye ? jo schema.js se export kiya hai
//toh pehle require kar lete hai
//validation shi hogi tabhi toh add karenge product
const {productSchema, reviewSchema}= require('./schema');

//Copied from docs. Schema ka naam likhta hai and uspe method lagata hai validate...const { error, value } = schema.validate({ a: 'a string' });

//2 function bna lete hai...
const validateProduct = (req,res,next)=>{ //middleware m req,res,next hota hai
  //is finction ke logic ke liye refer joi ki docs
  let {name, img,  price, desc} = req.body; //ye routes ke product.js se..actually adding se aya hai. req.body ka sara acces yha de diya..and request access toh hai hi hamare paas(parameter m req). toh destructure kar diya
  //validate method schema ke upar lagega...product ka schema
  const {error} = productSchema.validate({name, img,  price, desc}) //product ke schema ko jab validate karenge in sare properties(name, price etc) ke sath..toh ya toh error milega ya value but we don't need value...toh sirf error sambhal lete hai.
  if(error){ //joi.dev docs m errors ko read.
    const msg = error.details.map((err)=>err.message.join(',')) //error ki details(details ek array hai ispe map lga ke sare error dekh rahe hai)...and array pe map kar sakte hai..taki sare error ek sath dekh pau...and map accepts a callback function...details m message mil rha hai toh..err.message..means jitne bhi message hai un sabko map kar ke dedo..and isko join kar denge ,(comma) ke basis pe. And since map returns a new array toh ise variable m store kar liya.
    return res.render('error', {err:msg})//return kar denge. error ka page bna lete hai..error dikha denge wha pe...and iske sath ek object bhej denge...object kya hoga..mera jo error hai wo mera message hai...views m error.ejs bna lete hai. Jo bhi error mil use error page m bhej rahe hai...taki route fata hua nazar na aye
  }
  next (); //aisa nai hua toh next middleware call kar denge
}
const validateReview = ()=>{
  //jaisa product routes ke liye likha waisa same iske liye
  let {rating, comment} = req.body; //request ki body se 2 chize ayengi...
  const {error} = reviewSchema.validate({rating, comment}) //review schema ko validate kiya on the basis of rating and comment
  if(error){
    const msg = error.details.map((err)=>err.message) 
    return res.render('error', {err:msg}) //review.js m validate dal denge
  }
  next ();
}


module.exports = {validateProduct, validateReview }; //In dono ko bhi export kar denge cuz kahi aur bhi use kar rahe honge


