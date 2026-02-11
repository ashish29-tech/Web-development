
const mongoose = require('mongoose');

//new schema bnana hai
let quoteSchema = new mongoose.Schema({ //object banta hai
  author: {
    type:String,
    trim: true,
    required: true,
  },
  text: {
    type:String,
    trim: true,
    required: true,
  }
})



const Quotes = mongoose.model('Quote', quoteSchema);
module.exports = Quotes