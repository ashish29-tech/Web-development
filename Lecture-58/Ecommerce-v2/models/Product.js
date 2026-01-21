
const mongoose = require('mongoose'); //Mongoose require kar liya so that we can use it. Mongoose is an object.

//Schema.
// import mongoose from 'mongoose'; //copied from docs
// const { Schema } = mongoose; //copied from docs. Yha mongoose ke andar se schema naam ki chiz ko destructure ki hai...so rather than destructuring can we usi it like mongoose.schema
// const blogSchema = new Schema({ //copied. Yha new schema ki jgah...new mongoose.schema likh sakte hai.
const productSchema = new mongoose.Schema({ //Yha destructure nai kiya..docs m destrcture m kiya hai. Always accept an object
  name: {
    type: String,
    trim: true, //trim..sring ka method hai. We want ki agr koi space dal de to wo trim ho jaye.
    required: true //means is field ko fill karna mandatory hona chahiye...isliye true
  },
  img: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    min: 0,
    reqired: true //Ex: jaise * hota hai form fill karte time without filling you can't move ahead
  },
  desc:{
    type: String,
    trim: true
  },
  reviews:[
   //yha add karenge reviews ka array..isme object jayega but 2 thing...type and refernce
    {
      type: mongoose.Schema.Types.ObjectId, //Mongoose bhai mujhe dusre ke schema m jakr..uska type m objectId wala lakr store kar de
      ref: 'Review' //refernce kya hai...review ka array
    }
  ]
})

//model/collection..schema ki help se model banega. Model is a Js class. And class syntax se objects bante hai. So model/collection is a Js class jiski help se objects bante hai. And object every single entity hue and every single entity is a document...so objects/document

let Product = mongoose.model('Product', productSchema); //product naam ka..productSchema ki help se bnana chahte hai. 1st model ka naam..ye hamesha singular cuz mongoose automatically plural and 1st letter small kar deta hai, 1st letter capital hi hoga..Ex: Products nai hoga. and 2nd is kis schema ki help se bna hai. let Product...means ye wala Prduct hamare project/vs code m kis naam se hoga

module.exports = Product; //vs code/project wala Product ko export kar liya....cuz bina export kare dusri jgah use nai kar payenge.










