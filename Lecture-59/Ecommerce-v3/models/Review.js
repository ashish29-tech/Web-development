
const mongoose = require('mongoose'); //Mongoose require kar liya so that we can use it. Mongoose is an object.

//Schema.
// import mongoose from 'mongoose'; //copied from docs mongoose
// const { Schema } = mongoose; //copied from docs. Yha mongoose ke andar se schema naam ki chiz ko destructure ki hai...so rather than destructuring can we usi it like mongoose.schema
// const blogSchema = new Schema({ //copied. Yha new schema ki jgah...new mongoose.schema likh sakte hai.
const reviewSchema = new mongoose.Schema({ //Yha destructure nai kiya..docs m destrcture m kiya hai. Always accept an object
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  comment: {
    type: String,
    trim: true,
  }
}, { timestamps: true})

//model/collection..schema ki help se model banega. Model is a Js class. And class syntax se objects bante hai. So model/collection is a Js class jiski help se objects bante hai. And object every single entity hue and every single entity is a document...so objects/document

let Review = mongoose.model('Review', reviewSchema); //product naam ka..productSchema ki help se bnana chahte hai. 1st model ka naam..ye hamesha singular cuz mongoose automatically plural and 1st letter small kar deta hai, 1st letter capital hi hoga..Ex: Products nai hoga. and 2nd is kis schema ki help se bna hai. let Product...means ye wala Prduct hamare project/vs code m kis naam se hoga

module.exports = Review; //vs code/project wala Product ko export kar liya....cuz bina export kare dusri jgah use nai kar payenge.










