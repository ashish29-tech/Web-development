//Learn relationship...generally 3 kinds of... 1:1, 1:many, 1:few
//Hamne product bna rakha hai...har ek product ke paas ek unique id hai..which is an object id hai
//us object id m... name,img, price, desc...isme reviews field add kar di...toh reviews toh to kai sare ho sakte hai...toh reviews ka array bna sakte hai...
//review m rating and comment hoti hai..toh har review m ek object hoga and usme rating and comment hoga...aise multiple objects ho sakte hai cuz array hai na...toh review ka schema bnana hai..
//and review ke schema m rating and comment hoga...it's possible kisi ne 200 line ka review likh diya..and aise kai comments hai...toh kya ham likhte rahenge pura ka pura object ? no. Ham apne product ke andar pura ka pura review nai store kar sakte...wrna review hi itna bada ho jayega..toh iski alag se collection bnayenge...schema hai toh collection bnayenge..jiska naam review hai...usme sare reviews honge..
//uske andar...new review hoga toh new object id hogi...rating hogi...comment hoga then next ka hoga aise hi..
//toh actually m reviews ke array ke andar we'll actually store ids..cuz har ek id unique hai...and id actually m object id hai na....mongoosejs.com m docs m..SchemaTypes m object id...https://mongoosejs.com/docs/schematypes.html
//



const mongoose = require('mongoose'); //Mongoose require kar liya so that we can use it. Mongoose is an object.

//Schema.
// import mongoose from 'mongoose'; //copied from docs
// const { Schema } = mongoose; //copied from docs. Yha mongoose ke andar se schema naam ki chiz ko destructure ki hai...so rather than destructuring can we usi it like mongoose.schema
// const blogSchema = new Schema({ //copied. Yha new schema ki jgah...new mongoose.schema likh sakte hai.
//productSchema ki jagah review schema
const reviewSchema = new mongoose.Schema({ //Yha destructure nai kiya..docs m destrcture m kiya hai. Always accept an object
  rating: {
    type: Number, //rating 1,2,3,4,5 hota hai na the number
    min: 0,
    max: 5
  },
  comment: {
    type: String,
    trim: true,
  }
}, { timestamps: true}) //jab bhi new reviews ayegi toh 2 new entries add ho jayegi....1st created at and 2nd updated at

//model/collection..schema ki help se model banega. Model is a Js class. And class syntax se objects bante hai. So model/collection is a Js class jiski help se objects bante hai. And object every single entity hue and every single entity is a document...so objects/document

//model ka naam 'Review'....Review naam se bulana hai
let Review = mongoose.model('Review', reviewSchema); //product naam ka..productSchema ki help se bnana chahte hai. 1st model ka naam..ye hamesha singular cuz mongoose automatically plural and 1st letter small kar deta hai, 1st letter capital hi hoga..Ex: Products nai hoga. and 2nd is kis schema ki help se bna hai. let Product...means ye wala Prduct hamare project/vs code m kis naam se hoga
//Review naam se export karna hai
module.exports = Review; //vs code/project wala Product ko export kar liya....cuz bina export kare dusri jgah use nai kar payenge.










