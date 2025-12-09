
//Promise

//callback hell m ye sab itna confusion

//server se data manga rahe hai
// function getData(cb){ //niche cb call karna tha isliye cb chahiye tha
//   setTimeout (function(){
//     // let data = 'Hello to my family';

//     // cb(data, null); //jo data chahiye use kisi function ke andar send kar diya. Man lete hai koi error bhi chala gya sath m jab data aa rha hai..us error wali chiz ko null man lete hai
//     cb(null) //data nahi sirf null bhej ke dekhte hai
//   }, 4000)
// }

// getData(function(data, error){ //getData function m ek function accept kar liya jo data ko catch karega..mtlb getData ko call kiya and usme pura function as a callback bhej diya. null wala paramter ko error ne catch kar liya
//   if(error){
//     console.log(error, 'if'); //error hoga to error ko console
//   }else{
//     console.log(data, 'else'); //error nahi aya to data 
//   }
// })

//Practice
// function getData(cb){ //niche cb function call kiya toh hona bhi chahiye...toh yha paas kar diya
//   setTimeout(function(){
//     let data = 'Hello my family'; //4 second baad ye data milega. Ise comment kar de toh data nahi dega server mtlab...toh data not defined ayega
//     // cb(data, null) //data chahiye hoga toh kisi function ke andar send kar diya. Maan liya ki data lane m dikkat aa rahi thi toh.. null aa gya
//       cb( null) //ek baar data nahi bhejte...sirf null bhejte hai
//   } ,4000) //server thora time le sakta hai toh we are assiming it takes 4 second time.
// }

// getData(function(data, error){ //function accept kar liya...data catch kar liya. Yha null mtlab kuch error aya toh use error naam se catch kar liya
//   if(error){ //Agr error aya toh
//     console.log(error, 'if')
//   }
//   else{
//     console.log(data, 'else') //error nahi aya toh data console kar do
//   }
// })

//---------------------------------------------------

//Promise
//Why use Promise ? To tackle the problem caused by callback hell. error handling muskil hoti hai callback m

// Promise is a constructor function.
//1st letter of Constructor function is always capital.
//Promise use karenge to 1st letter capital hoga.
//Promise use hoga to new keyword ka istemal hoga cuz promise constructor function hai and cf uses new keyword
//jaise constructor function ki call ke liye new keyword ko use kiya tha..same goes with promise.
//It's a inbuilt constructor

// let promise1 = new Promise() //new create karta hai object...new object ka name hoga promise1

//----------------------------------------------------------------------
//Practice
// let promise1 = new Promise()
// let promise1 = new Promise(function(){ //promise constructor always accepts a cb function. This cb function always accepts 2 args.. resolve and reject. These resolve and reject are basically a function.

// }) 
// let myPromise = new Promise(function(resolve, reject){ //promise constructor always accepts a cb function. This cb function always accepts 2 args.. resolve and reject. These resolve and reject are basically a function.
//   setTimeout(function(){ //we want server 5 second baad data dede toh setTimeout
//     // let data = 'Hello my promise family' //data de diya
//     let err = 'mai server hu data nahi de rha' //if data nai diya toh
//     // resolve(data) //toh resolve chal gya and data de diya
//     reject(err) //reject hua toh usme phir err jayega
//   } ,3000)
// }) 

// // myPromise.then().catch() //actually m aise likha hota hai.. .then and .catch

// //data bheja hai toh yha catch kar liya. Jab bhi resolve karte hai toh sari chize milengi .then ke andar.
// myPromise.then(function(data){ //jab bhi promise resolve hota hai toh data .then m bhejta hai. .then always accepts a cb
//   console.log(data);
// }) 
// //jab bhi reject karte hai toh sari chize milti hai catch ke andar...
// .catch(function(errr){ // .catch always accepts a cb fn. errr naam se catch kar liya..kuch bhi naam ho sakta hai
//   console.log(errr)
// })

//--------------------------------------------------------

// let myPromise = new Promise(function(resolve, reject){ //promise constructor always accepts a cb function. This cb function always accepts 2 args.. resolve and reject. These resolve and reject are basically a function.
//   setTimeout(function(){ //we want server 5 second baad data dede toh setTimeout
//     //dono chalaye toh ? Promise chalega cuz Promise pehle ya toh reolve ho chuka hoga ya toh reject ho chuka hoga...
//     let data = 'Hello my promise family' //data de diya
//     let err = 'mai server hu data nahi de rha' //if data nai diya toh
//     resolve(data) //toh resolve chal gya and data de diya
//     reject(err) //reject hua toh usme phir err jayega
//   } ,3000)
// }) 

// // myPromise.then().catch() //actually m aise likha hota hai.. .then and .catch

// //data bheja hai toh yha catch kar liya. Jab bhi resolve karte hai toh sari chize milengi .then ke andar.
// myPromise.then(function(data){ //jab bhi promise resolve hota hai toh data .then m bhejta hai. .then always accepts a cb
//   console.log(data, 'resolve');
// }) 
// //jab bhi reject karte hai toh sari chize milti hai catch ke andar...
// .catch(function(errr){ // .catch always accepts a cb fn. errr naam se catch kar liya..kuch bhi naam ho sakta hai
//   console.log(errr, 'reject')
// })

//promise constructor always accaepts a callback function as it's argument.
//Meaning..jab bhi promise ka use karenge to jo promise constructor bnaya hai 
//wo hamesha callback function accept karega apne argument m...
//resolve and reject are functions. wada nibhana means resolve and nahi nibhana means reject.
//wada pura hua to resolve chalega else reject.

// let promise1 = new Promise(function(){ //jab bhi promise ka use karenge to jo promise constructor bnaya hai wo hamesha callback function accept karega apne argument m. cb function yha 2 arguments leta hai..resolve and reject...ye naam change ho sakta hai
  
// })

//------------------------------------------------------

// let myPromise = new Promise(function(resolve, reject){ //jab bhi promise ka use karenge to jo promise constructor bnaya hai wo hamesha callback function accept karega apne argument m. cb function yha 2 arguments leta hai..resolve and reject...ye naam change ho sakta hai
//   setTimeout(function(){
//     let data = 'Hello my promise family' //server dega 
//     let err = 'mai server hu data nahi de rha' //maan lo server data nai de rha and error de rha
//     // resolve(data); //wada pura karega to data dega. Resolve ho jayega pehle to reejct ke sw
//     // reject(err); //wada tootna...mtlb error de rha server
//     reject(err);
//     resolve(data);
//   }, 4000)
// })
// // .then m hamesha resolve wala data ata hai.
// // jab bhi ham resolve karte hai to sari chize milti hai .then ke andar
// // myPromise.then( function(data){//agr data mil rha hai to..mtlb jab promise resolve hota hai to wo data apne .then m bhejta hai. And ye .then accept karta hai cb function. function bna diya and send kara diya. Upae se data bheja hai to uske argument m catch kar lete hai
// //   console.log(data, 'resolve');
// // }); 

// //myPrimise.then().catch()   niche wala actual m aise likha hua hai
// myPromise.then( function(data){//agr data mil rha hai to..mtlb jab promise resolve hota hai to wo data apne .then m bhejta hai. And ye .then accept karta hai cb function. function bna diya and send kara diya. Upae se data bheja hai to uske argument m catch kar lete hai
//   console.log(data );
// })

// //jab bhi reject karte hai to sari chize milti hai catch ke andar
// .catch(function(errr){ //.catch hamesha callback function accept karta hai. Kisi bhi naam...err...se catch kar liya
//   console.log(errr, 'reject');
// })

//---------------------------------------
//step-1: Promise use hoga to new keyword ka istemal hoga
//step-1: P.constructor always aceepts a callback function as an argument
//step-3: Ye calback function always accepts 2 arguments. Namely: resolve and reject. These are just names and can be anything
// resolve and reject are functions

//----------------------------------
//callback hell ki wjah se pyramid of doom ban rha tha/
//cb hell se bachne ke liye promise hai.
//Toh ab purane wale code ko promise m convert karenge..mtlb cb hell se jo insta ka code likha tha wo code






//---------------------------------------------------
//Random chatGPT se practice

//callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("Ashish", function () { //Function call — yaha callback ACTUAL me pass hota hai. YAHI line me callback argument ke roop me pass ho raha hai.
  console.log("Welcome!");
});












