
//First class function= whenever you assign any function to a variable is called....
//Why functions are callled first class citizens ?
//Jabh bhi functions ko variable ke barabar assign karte hai isliye first class citizen
// let step1 = function(){

// }

//------------------------------------

//image selection
// let step1= function(){
//   console.log('Selecting image');//yha bhi de sakte hai selecting image
//   return new Promise(function(resolve, reject){ //naya promise banana hai isliye new....constructor function apne andar ek argument accept karta hai i.e function...and ye function 2 argument accept karta hai..resolve and reject. Ye new object bnata hai. Yha object bnane se acha return kar dete hai.
//     setTimeout(function(){ //setTimeout accepts a callback function
//       // console.log('Selecting image'); //image select kar liya
//       resolve('image.jpg'); //promise pura hua to resolve...and ham resolve karna chah rahe image.jpg ke sath
//     }, 4000)
//   }); 
// }

// let step2= function(image){ //catch kar liya image naam se
//   console.log(`Applying filter to ${image}`);//yha bhi de sakte hai selecting image...
//   return new Promise(function(resolve, reject){ //naya promise banana hai isliye new....constructor function apne andar ek argument accept karta hai i.e function...and ye function 2 argument accept karta hai..resolve and reject. Ye new object bnata hai. Yha object bnane se acha return kar dete hai.
//     setTimeout(function(){ //setTimeout accepts a callback function
//       // console.log('Selecting image'); //image select kar liya
//       resolve('filter applied to image.jpg'); //promise pura hua to resolve...and ham resolve karna chah rahe image.jpg ke sath
//     }, 2000)
//   }); 
// }

// let step3= function(filter){ //catch kar liya filter naam se
//   console.log(`Adding caption to ${filter}`);//yha bhi de sakte hai selecting image...
//   return new Promise(function(resolve, reject){ //naya promise banana hai isliye new....constructor function apne andar ek argument accept karta hai i.e function...and ye function 2 argument accept karta hai..resolve and reject. Ye new object bnata hai. Yha object bnane se acha return kar dete hai.
//     setTimeout(function(){ //setTimeout accepts a callback function
//       // console.log('Selecting image'); //image select kar liya
//       resolve('caption added'); //promise pura hua to resolve...and ham resolve karna chah rahe image.jpg ke sath
//     }, 3000)
//   }); 
// }

// let step4= function(comment){ //catch kar liya caption naam se
//   console.log(`finally uploading plz wait...`);//yha bhi de sakte hai selecting image...
//   return new Promise(function(resolve, reject){ //naya promise banana hai isliye new....constructor function apne andar ek argument accept karta hai i.e function...and ye function 2 argument accept karta hai..resolve and reject. Ye new object bnata hai. Yha object bnane se acha return kar dete hai.
//     setTimeout(function(){ //setTimeout accepts a callback function
//       // console.log('Selecting image'); //image select kar liya
//       resolve('all done, image uploaded plz like and share'); //promise pura hua to resolve...and ham resolve karna chah rahe image.jpg ke sath
//     }, 5000)
//   }); 
// }


// //step1().then()..catch()
// //promise chaining
// step1()
// .then(function(image){ //resolve ho gya to sari chiz .then m ati hai. .then ek callback function accept karta hai
//   // console.log(image);
//   console.log('image selected');
//   return step2(image) //.then m hi step2 ko call kar liya..and return kar diya.step2 ko call karte waqt image dal diya as an argument
//   })

// .then(function(filter){ //step2 ke liye .then cuz resolve ho rha hai. And ye .then...callback function accept karega. data aya to filter naam ke variable ke sath accept
//   console.log('filter applied');
//   // console.log(filter); //console karne ke bajay
//   return step3(filter) // step3 ko call kar liya filter ke sath...and ye return karega
// }) 

// .then(function(comment){ //step3 ke liye yha return hoakr aya. cb function return
//   console.log(`${comment} added to the image`);
//   return step4(comment)
// })
// .then(function(final){ //step4 return hua hai isliye .then. Ye cb function accept karega
//   console.log(final);
// })
// .catch(function(err){ //sirf ek hi baar .catch. Cuz resolve agr upar kahi bhi nahi chla to catch chal jaeyga
//   console.log(err);
// }); 

//sara code vertically ja rha hai..and code error handle karna asan ho gya.
//.then ki chaining ho rahi...ye bhi to redundant ho rha hai..
//isse bachne ke liye ek tarika hota hai...Async-await.
//cb hell se bachne ke liye promise and promise se bachne ke liye async-await


//-------------------------------------------------------------------------------------
//Practice

//Whenever we assign any function to a variable... we call it first class function
// let step1 = function(){

// }

//-------------------------------------------

//Image selection
// let step1 = function(){
//   console.log("Selecting image");
//   return new Promise(function(resolve, reject){ //ye cf apne andar 2 args accept karta hai. Ye pbject bnata hai..so rahther than object bnane ke we return
//     setTimeout(function(){ //setTimeout accepts a cb fn as well as delay.
//       resolve('image.jpg')
//     }, 4000)
//   });
// }

// let step2 = function(image){ //image naam se catch kar liya
//   console.log(`Applying filters to ${image}`)
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve("filter applied image");
//     }, 2000)
//   })
// }

// let step3 = function(filter){
//   console.log(`Adding caption to the ${filter}`)
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve("caption added")
//     }, 3000)
//   })
// }

// let step4 = function(comment){
//   console.log(`image uploading plz wait...`)
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       resolve("all done, image uploaded plz like and share")
//     } , 5000)
//   })
// }

// //Yha ham promise ki chaining karte hai 
// step1()
// .then(function(image){ //upar resolve hua hai toh image.jpg ko yha image se catch kar liya
//   console.log('image selected')
//   // console.log(image)
//   return step2(image) //step2 ko call kar liya and return kara diya. step2 ko call karte waqt image bhej diya
// })
// .then(function(filter){ //upar resolve hua to yha catch
//   console.log("filter applied")
//   // console.log(filter)
//   return step3(filter);
// })
// .then(function(comment){
//   console.log(`${comment} to the image`)
//   return step4(comment)
// })
// .then(function(final){ //Yha naam diya
//   console.log(final)
// })




//---------------------------------------
//Practice

// console.log(foo());
// var foo = function() {
//   return "Function Expression";
// };
// function foo() {
//   return "Function Declaration";
// }


// console.log("Start");

// setTimeout(() => {
//     console.log("setTimeout Callback");
// }, 0);

// Promise.resolve().then(() => {
//     console.log("Promise Resolved");
// });

// console.log("End");



//var has functional scope and let has...let (block scope)
// for (var i = 0; i < 3; i++) {

//   setTimeout(function() { //setTimeout callback baad me run hota hai

// console.log(i); }, 100);

// }

//-----------------------

// function step1() {
//   return Promise.resolve("A");
// }

// function step2(data) {
//   return Promise.resolve(data + "B");
// }

// function step3(data) {
//   return Promise.resolve(data + "C");
// }

// step1()
//   .then(step2)
//   .then(step3)
//   .then(console.log);   // ABC

//-------------------------

new Promise(function(resolve){
    resolve(10);
})
.then(function(n){
    console.log("Step 1:", n);  // 10
    return n * 2;
})
.then(function(n){
    console.log("Step 2:", n);  // 20
    return n * 3;
})
.then(function(n){
    console.log("Final:", n);  // 60
})

//Output:     
// Step 1: 10
// Step 2: 20
// Final: 60




