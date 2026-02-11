//yha pe us quote naam se model create hoga
//yha pe model and schema banega

const mongoose = require('mongoose');

let quoteSchema = new mongoose.Schema({
  author:{
    type: String,
    trim: true,
    required: true,
  },
  text:{
    type: String,
    trim: true,
    required: true,
  }
});

let Quotes = mongoose.model('Quote', quoteSchema) //model bna lete hai..model ka naam Quote...Quote bna hai quotesSchema ki help se.


module.exports = Quotes;