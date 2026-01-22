//jab data ko validate karana hota hai... server side se sambhalna hota hai...tab joi ko use karte hai. Isko kaam karne ke liye 2 steps ko follow karna hota hai..
// 1. Schema define karte hai..joi ke hisab se. Pehle jo bnaya wo to hai hi.
// 2. Jo joi ki help se schema bnaya tha..use validate karna.
// schema.js file bna lete hai...so that uske andar chizo ko sambhal saku
//joi install kiya... npm i joi

//server side pe chizo ko validate kar sake isliye joi use karte hai

const Joi = require('joi'); //use karne ke liye require karna padega

const productSchema = Joi.object({ //joi ka object jata hai. Ye hamare product ka schema hai...
  //kon-kon si fields ko validate karna hai
  name: Joi.string().required().trim(), //docs m likha hai...waise hi karna hai. 
  img: Joi.string().trim(), 
  price: Joi.number().min(0).required(), 
  desc: Joi.string().trim(),
});

const reviewSchema = Joi.object({ //review bnaya hai isliye..review ka schema
  rating: Joi.number().min(0).max(5),
  comment: Joi.string().trim()
})


//product and review schema ready hai so ab export karenge
module.exports = {productSchema, reviewSchema} //2 chizo ko karna hai to 1 object bhej dete hai. Jha chahiye hoga wha require kar lenge..isliye yha se export kar diya.
//Ab ek aisa function chahiye jo ise validate kar sake

//suppose /product/new route hit kiya and product add karna hai toh add se pehle check karna padega...ise hi ham kehte hai middleware(jo har incoming request ke beech m ate hai). So we'll create a middleware.js




