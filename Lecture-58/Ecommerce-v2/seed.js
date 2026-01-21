
// saman toh hona chahiye...4-5 entry...so can we send 4-5 entry with the help of insertMany(array accept)...so array bnana padega
// Ek sath sare saman ko bhejna chahte hai...in technical terms it's called seed karna.
//suppose we have 4-5 products and ek sath bhejna hai hame DB ke andar.. toh use DB seeding kehte hai.

// So seed.js file bnayenge...jisme array bna ke usme insertMany kar denge..

//seed db m dalega...uske liye hame mongoose chahiye..so require mongoose

const mongoose = require('mongoose'); //object
const Product = require('./models/Product');

const products = [ //Array bna diya
  {
    name:"iphone 17pro",
    img: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aSUyMHBob25lfGVufDB8fDB8fHww", //image link from unsplash
    price: 124000,
    desc: "Kafi sasta phone"
  },
  {
    name: "macbook pro",
    img: "https://images.unsplash.com/photo-1651747137395-065bd3af97bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjYm9vayUyMHByb3xlbnwwfHwwfHx8MA%3D%3D",
    price: 250000,
    desc: "hello I am a good machine"
  },
  {
    name: "apple pencil",
    img: "https://images.unsplash.com/photo-1593442883836-314c2ade7d0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFwcGxlJTIwcGVuY2lsfGVufDB8fDB8fHww",
    price: 10000,
    desc: "I can write future"
  },
]

//now insertMany ki command chalani hai toh...
// Jab JavaScript kisi asynchronous kaam ko karta hai (jaise DB connect karna, API call, file read, etc), us waqt Promise return hota hai — ek object jo future mein complete hoga ya fail karega. Ye promise abhi complete nahi hua hai. Ye future mein ya to: ✅ resolve hoga (kaam ho gaya), ya ❌ reject hoga (error aayi). Promise ko resolve karne ke 2 tareeke hote hain:Traditional way: ✅ 1. .then() and .catch()....Cleaner, readable way:async / await
async function seedDB(){ // function bna liya..iska kaam hai model ke andar sari chizo ko dalna. 
 await Product.insertMany(products);//Product type karenge toh suggestion m option ayega uspe click...toh upar Product apne aap require ho jayega. insertMany accepts an array(hamare case m products naam hai array ka) and insertMany and sari chize returns a promise..toh promise ke liye await and await ke liye function ko async bna diya...promise ko async and await ki help se resolve kar liya

 console.log("DB seeded")
}

module.exports = seedDB; //seedDB ko kisi aur file m use karna hai...toh export kar liya so that jha chahiye wha require kar ke run kar sake..hamare case m app.js m chahiye



