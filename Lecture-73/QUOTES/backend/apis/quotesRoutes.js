//jab ham e-commerce m bna rahe the toh routes naam se bna rahe the...cuz api se hame data milta hai and routing se pages etc.
//pages wala kaam toh frontend karega
//backend se toh data bhejna hai isliye api naam ka folder

//quote ke routes bnane hai
//isme ab apis ka kaam likhenge
//2 routes banane hai
//sare quotes dekhne hai toh.../allquotes pe
//new quotes bnane hai toh.../addquots pe

//router chahiye hoga...express chahiye hoga picture m
const express = require('express');
const Quotes = require('../models/Quote'); //niche Quotes type kar ke enter kiya toh yha import ho gya
const router = express.Router();

//app heavy hai isliye route ko alag se kiya hai
router.get('/allquotes', async (req,res)=>{ //db ke andar se sare quotes lekar ane hai
  try{ //try m db se sara ka sara quotes lekar ana hai
    let allQuotes = await Quotes.find({}) //find accepts an empty object..it's a DB operation so await and async
    // res.send kar denge toh json m data nahi milega
    res.status(200).json(allQuotes) //status(200 hota hai toh sab shi hota hai) bhi bhej diya...jo bhi aya hai use send kar sakte hai..send karaye ya json karaye ek hi mtlb hai...json is a better technique..allQuotes bhej diya
  }
  catch(e){
    res.status(400).json({msg: "something went wrong..."}) //status bhej diya...400 hota hai toh galat..and json us case m bhi and message bhej denge
  }
});

//form m generally ham method ko post kar dete hai
router.post('/addquotes', async (req,res)=>{ //add karna hai..new bnana hai toh post..na ki get
  try{
    //form submit kara lete hai...form ke andar se ayega data..post req ke through jo data ata hai wo req ki body se niklta hai..and we can destructure it
    //form submit hoke post request jati hai na...toh data request ki body m ata hai na...
    let {author, text} = req.body; //auhor and uska text aa jayega
    let newQuote = await Quotes.create({author, text}); //new quote create kar denge with the help of author and text...and it's a DB operation...newQuote var m dal ke niche console kar ke chech
    console.log(newQuote, "newQuote"); //newQuote dekh lenge
    //send kara dete hai ki sab shi hua hai..... search status code success on google
    res.status(201).json({msg: "New quote created successfully"}) //201 jab koi new chiz create hoti hai. new message bhijjwa dete hai ki new quote created successfully
  }
  catch(e){
    res.status(400).json({msg: "something went wrong while creating..."}) //status bhej diya...400 hota hai toh galat..
  }
 
})

//kisi button pe click kare toh ek particular page khul jaye..mtlb view quote pura khul jaye...uske liye hame ek route bnana padega
router.get('/quotes/:id' , async (req,res)=>{ //ise frontend pe handle karna hai jha ham button presska rahe the....NewQuote.jsx
  let quote = await Quotes.findById(req.params.id)//id ke basis pe karna hai find...toh findById and id req.params.id se aa jayega....destructure nai kiya....and time lagega toh await...and var m store kar liya
  res.status(200).json(quote); //json bhej diya..json m quote bhej diya
})

module.exports = router; //app ke andar is router ko import karenge