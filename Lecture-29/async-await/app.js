
//async-await: It's a mixture of two properties.
//asynchronous property and await property
//async-await saves us from .then()/promise chaining

// function something(){

// }

// console.log(something());

//----------------------
//async hamesha function ke aage lagta hai
//jab bhi kisi function ke aage async likh dete hai to wo promise return karta hai with undefined
// async function something(){

// }

// console.log(something());

//--------------------------------------

// async function something(){
//   return 10 //return a promise with resolved value of 10
// }

// console.log(something());

//--------------------------------------------
//return ho rha hai pura ka pura promise which is being resolved with 10/bhaukaali babu
// async function something(){
//   // return 10 
//   return 'bhaukaali babu'
// }

// something().then(function(data){ //promise resolve hota hai .then ke sath....and ye .then cb function accept karta hai. Jo 10 aya tha use data maan lete hai
//   console.log(data);
// })

//--------------------------------------------

//await--> intzaar karo
//100% kaam ho jaye ya na ho jaye tab tak wait karo...us function ke aage mat badho mgr us function ke bhr ja sako
//in other words...jab tak server data lake dega ya nahi dega...tab tak wait karta hai..toh us function ke andar us await ke baad kitni bhi lines likho ho usnko execute nahi karega
//lekin is function ke bhr ja sakta hai and normal work karega...cuz js waits for none
















