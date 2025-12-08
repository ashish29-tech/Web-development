
//Promise

//callback hell m ye sab itna confusion

//server se data manga rahe hai
function getData(cb){ //niche cb call karna tha isliye cb chahiye tha
  setTimeout (function(){
    // let data = 'Hello to my family';

    // cb(data, null); //jo data chahiye use kisi function ke andar send kar diya. Man lete hai koi error bhi chala gya sath m jab data aa rha hai..us error wali chiz ko null man lete hai
    cb(null) //data nahi sirf null bhej ke dekhte hai
  }, 4000)
}

getData(function(data, error){ //getData function m ek function accept kar liya jo data ko catch karega..mtlb getData ko call kiya and usme pura function as a callback bhej diya. null wala paramter ko error ne catch kar liya
  if(error){
    console.log(error, 'if'); //error hoga to error ko console
  }else{
    console.log(data, 'else'); //error nahi aya to data 
  }
})





//---------------------------------------------------

//Promise
//Why use Promise ? To tackle the problem caused by callback hell. error handling muskil hoti hai callback m

//Promise is a constructor function.
//1st letter of Constructor function is always capital.
//Promise use karenge to 1st letter capital hoga.
//Promise use hoga to new keyword ka istemal hoga
//jaise constructor function ki call ke liye new keyword ko use kiya tha..same goes with promise.
//It's a inbuilt constructor

// let promise1 = new Promise() //new create karta hai object...new object ka name hoga promise1

//promise constructor always accaepts a callback function as it's argument.
//Meaning..jab bhi promise ka use karenge to jo promise constructor bnaya hai 
//wo hamesha callback function accept karega apne argument m...
//resolve and reject are functions. wada nibhana means resolve and nahi nibhana means reject.
//wada pura hua to resolve chalega else reject.

// let promise1 = new Promise(function(){ //jab bhi promise ka use karenge to jo promise constructor bnaya hai wo hamesha callback function accept karega apne argument m. cb function yha 2 arguments leta hai..resolve and reject...ye naam change ho sakta hai
  
// })

//----------------------------

let myPromise = new Promise(function(resolve, reject){ //jab bhi promise ka use karenge to jo promise constructor bnaya hai wo hamesha callback function accept karega apne argument m. cb function yha 2 arguments leta hai..resolve and reject...ye naam change ho sakta hai
  setTimeout(function(){
    let data = 'Hello my promise family' //server dega 
    let err = 'mai server hu data nahi de rha' //maan lo server data nai de rha and error de rha
    // resolve(data); //wada pura karega to data dega. Resolve ho jayega pehle to reejct ke sw
    // reject(err); //wada tootna...mtlb error de rha server
    reject(err);
    resolve(data);
  }, 4000)
})
// .then m hamesha resolve wala data ata hai.
// jab bhi ham resolve karte hai to sari chize milti hai .then ke andar
// myPromise.then( function(data){//agr data mil rha hai to..mtlb jab promise resolve hota hai to wo data apne .then m bhejta hai. And ye .then accept karta hai cb function. function bna diya and send kara diya. Upae se data bheja hai to uske argument m catch kar lete hai
//   console.log(data, 'resolve');
// }); 

//myPrimise.then().catch()   niche wala actual m aise likha hua hai
myPromise.then( function(data){//agr data mil rha hai to..mtlb jab promise resolve hota hai to wo data apne .then m bhejta hai. And ye .then accept karta hai cb function. function bna diya and send kara diya. Upae se data bheja hai to uske argument m catch kar lete hai
  console.log(data );
})

//jab bhi reject karte hai to sari chize milti hai catch ke andar
.catch(function(errr){ //.catch hamesha callback function accept karta hai. Kisi bhi naam...err...se catch kar liya
  console.log(errr, 'reject');
})

//---------------------------------------
//step-1: Promise use hoga to new keyword ka istemal hoga
//step-1: P.constructor always aceepts a callback function as an argument
//step-3: Ye calback function always accepts 2 arguments. Namely: resolve and reject. These are just names and can be anything
// resolve and reject are functions

//----------------------------------
//callback hell ki wjah se pyramid of doom ban rha tha/
//cb hell se bachne ke liye promise hai.
//Toh ab purane wale code ko promise m convert karenge..mtlb cb hell se jo insta ka code likha tha wo code

















