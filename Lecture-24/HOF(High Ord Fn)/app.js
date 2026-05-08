
// functions are the heart of JS

// function sum(num1, num2){
//   console.log(num1 + num2);
// }
// sum(4, 5); //Arguments
// sum("ash", " ranjan") //Arguments m string bheji
// sum(true, false) // 1 + 0 is 1
// Primitives can be part of arguments

//-------------------------------------
//
// function a(){
//   console.log("mai hu a")
// }

// function b(){
//   console.log("mai hu b")
// }

// // kya argument kabhi function ho sakta hai ? Yes in case of js.
// //Yaha sirf b ko pass kiya ja raha hai…but upar a() koi parameter accept hi nahi kar raha!
// a(b);//a naam ke function m b naam ka function as an argument bheja
// a();
// b();
// b(a);

//--------------------------------------
//Higher Order Function. Yha a HOF hai.
//1st definition: When we pass the entire function as an argument in some other function then it is called HOF.

// call back function which is b in above case. It's the function which is being sent as an argument
//to some other function and therein called as well then it is a call back function.


// function a(fn){ //fn is parameter. Which is equal to the b in the argument
//   console.log("mai hu a");
//   //fn jo bhi value rakhta hai (iss case me ek function reference b), usko execute karega.
//   fn(); //fn is an entire function here. calling is important for call back function.
//   }
       
//   function b(){ // call back function
//   console.log("mai hu b");
//   }
//  //function b ka reference pass kar rahe ho, function ko execute nahi kar rahe.
//   a(b); //argument function ho sakta hai.
  // a();
// a(b());


//-------------------------------------------------------------

//✅ Example: HOF without Callback but closure is there
//Callback nahi hai kyunki humne koi function argument me pass hi nahi kiya
// function outer() {     // HOF because it RETURNS a function
//   let x = 10;

//   function inner() {
//     console.log("Inside inner:", x);
//   }

//   return inner;   // return kar raha hai → so outer = HOF
// }

// let fn = outer();  // outer() returns inner
// fn();              // calling inner

//--------------------------------

//So fn = b (function b)
//Parameter hai fn. fn ek variable jaisa kaam karega jo jo bhi argument pass kiya jayega usko hold karega.
// function a(fn){
//   console.log("mai a hu");
//fn abhi jo bhi value hold kar raha hai (yahan ek function reference) usko call karta hai.
//   fn(); //Calling isn't compulsory here. fn() actually means → run the function you passed
// }

// a(function b(){
//   console.log("mai b hu"); 
// });

//-----------------------------------
//2nd Definition: When you return an entire function from some 
//other function then the other function is your HOF.
//⭐ Kya yahan closure use hua hai? YES
//Jab a() return ho gaya, normally uske andar wali cheezein destroy ho jati.
//But JS me jab a() function ek inner function b() ko return karta hai,
// to JS b ke saath-saath uska lexical environment (memory/context) bhi save kar deta hai.
//That saved environment is called closure.
//Even after a() finishes, b() still remembers everything inside a().

//⭐ Closure Use Kab Hota Hai?
// Jab tum ek function ke andar inner function return karte ho
// Jab tum private variables banana chahte ho
//Jab outer function ka data, inner function ko baad me bhi accessible chahiye

// function a(){ //2nd definition.....function a ke andar se return kiya ja rha hai..that's why it is HOF

//   console.log("inside a");

//   function b(){
//   console.log("inside b");  
//   }
//   //Important: b() execute nahi ho raha, sirf b (function) return ho raha hai.
//   //Yahan function a return kar raha hai function b ka reference.
//   return b; //return kar diya function
//   // return;
//   // return b()
// }
// //a() ka return value = function b → isko temp me store kar diya. Iska matlab: temp ab ek function hai (jo b ke barabar hai).
// let temp = a(); //a ki calling se pura function return hua...and use temp m store kar liya
// temp(); //Ye b() ko execute karta hai (kyunki temp === b).


//---------------------------
// Callback Function (Function passed to another function)
//Ek aisa function jo kisi doosre function ko argument ke roop me diya jata hai
//Aur baad me wo doosra function isko call karta hai.

// function b() {
//   console.log("mai b hu");
// }
// //Isme ek parameter fn hai.
// //fn ek normal variable jaisa hi hai — bas usme kisi function ka reference store hoga.
// function a(fn) {   // fn = callback
//   //fn() ka matlab: "Jo bhi function parameter ke roop me mila hai → usko run kar do"
//   fn(); // calling callback
// }
// //Yahan tum a function ko call kar rahe ho. Aur argument me function b ka reference pass kar rahe ho.
// a(b); //a(b) ka matlab: ✔ fn = b.....✔ a() ke andar → fn() execute hoga....✔ fn() = b()


//-------------------------------------------------------------------

//Higher Order Function
// 1. When we pass the entire fn as an argument in some other function then it is called HOF.
//                               or
//2. When you return an entire function from some other function then the other function is your HOF.




//----------use case------------------

// let arr = ['ash', 100, 'bhaukaal', true, 400, false]

//Qn. Aisa function likhna hai jisme array(arr in above case) ko input lenge...and string ko alag
//kar diya, number ko alagg, boolean ko alag.... ex: getString(arr)..isme sirf array ki string value aye
//getNumber(arr)...isme array ki jitni bhi no. value hai sirf wahi return hogi
//getBool(arr)...is array ke andar jitne bhi mo. hai usme kya return hoga...boolean value

//solution

// function getString(arr){ //ek function bnaya and arr ko accept kiya
//   // Approach: har element pe jana hai aur check karna hai. 
//   let res = []; //initially ek result(res) naam ka array hai jo empty hai
//   for(let item of arr){ //
//       if(typeof(item)==='string') { // /String ke barabar hai typeof item
//        res.push(item)// response . push...item m. Us array ke andar push.
//   }
// }  

//   return res;//return kar diya array ko
// }


// function getNumber(arr){
//   let res = []; //initially ek result(res) naam ka array hai jo empty hai
//   for(let item of arr){ //
//       if(typeof(item)==='number') { // /Number ke barabar hai typeof item
//        res.push(item)// response . push...item m   
//   }
// }

//   return res;//return kar diya array ko
// }

// function getBool(arr){
//   let res = []; //initially ek result(res) naam ka array hai jo empty hai
//   for(let item of arr){ //
//       if(typeof(item)==='boolean') { // /boolean ke barabar hai typeof item
//        res.push(item)// response . push...item m   
//   }
// }

//   return res;//return kar diya array ko
// }

//   let arr = ['ash', 100, 'bhaukaal', true, 400, false]
// console.log(getString(arr)); //return kar ke yha aya hoga
// console.log(getNumber(arr));
// console.log(getBool(arr));


// -------------Upar hame baar-baar pura function likhna pad rha hai so we'll use.......HOF----------------

// let arr = ['ash', 100, 'bhaukaal', true, 400, false]

// //sari string value dena chahte hai toh string function bna diya...jo har item ko check karega
// //niche main function m jab fn call ho rha hai toh wha item aa rha hai...and yha accept kar liya item ko 
// function getString(item){ //function jo niche 153 line pe call ho rha hai jo har item ko check karega. This is CB(Call Back fn)
//     return typeof(item)=== 'string' //item string ke barabar hai to true return kar do wrna falase
// }

// function getNumber(item){
//   return typeof(item)=== 'number'
// }

// function getBoolan(item){ //item pehle 'ash' ko point karega
//   return typeof(item)=== 'boolean' //kya 'ash' boolean ke barabar hai.. no
// }

// //sbse pehle ye bna diya 
// function get(arr, fn){   //main function...jo HOF ka kaam karega. Jo accept karega array and ek aur function(getString,getNumber,getBoolan)
//   let res = []; //jo bhi chiz hai..array m bhejni hai..jo ki empty hai
//     for(let item of arr){ //Array ke har element pe jate hai and getString, getNumber, getBoolan...lgaynge
//       //function call kar liya and check kiya kya true val de rha hai
//         if(fn(item)) { //function call kar liya. if fn ke andar jo item bhej rahe hai...and check if it's giving me true or false
//           res.push(item); //true hai to item push kar denge wrna nai bhejenge res m
//         }
//     }
//     return res; //ultimately response return kar do
// }

// // let arr = ['ash', 100, 'bhaukaal', true, 400, false] //Sabse pehle ye chalegi 

// console.log(get (arr, getString)); //call yha se hua hai to return bhi yahi hoga. yha getString upar main function ke fn ko represent kar rha hai
// console.log(get (arr, getNumber));
// console.log(get (arr, getBoolan));
 

// -------------------------------------------------------------------------------
// Extra from chatgpt

// 🔥 Example jaha CALLBACK hai but CLOSURE nahi: 
// (Outer variables ka use nahi ho raha)
// function a(fn) {
//   fn(); 
// }

// a(function() {
//   console.log("callback!");
// });


//-----------------------------------------------
// 🔥 Example jaha CLOSURE hai but CALLBACK nahi:
//✔ Closure ✔ HOF
// function a() {
//   let x = 20;
//   function b() {
//     console.log(x);
//   }
//   return b;
// }

// let fn = a();
// fn();


//-------------------------------
// Chalo callback + closure dono ek hi example me dikhata hoon —

// function outer() {
//   let counter = 0; //counter outer function ka private data hai.

//   function innerCallback() {
//     //outer() closure banata hai → because inner function counter ko remember karega.
//     counter++;
//     console.log("Callback called, counter =", counter);
//   }

// // outer() //ek function return karta hai → HOF
//   return function(fn) {
//     fn();   // callback ko call kar rahe hai
//   };
// }
// //2. executor ban jata hai RETURNED FUNCTION
// //executor ke paas closure memory me counter=0 saved hai.
// let executor = outer();   // outer() call → closure create

// executor(function() {
//   console.log("I am simple callback");
// });

// executor(function() {
//   console.log("Another callback");
// });


//---------------------------------------------------

//⭐ Ab closure + callback ka REAL COMBO
//Agar callback outer function ke variables ko use kare, tab ye perfect closure+callback ban jata hai.
//✔ Callback ....→ fn ko argument me pass kiya aur call kiya
//✔ Closure........→ inner function ne count ko access kiya outer ke return ke baad bhi
//✔ HOF.......→ outer() function ek function return kar raha hai
// function outer() {
//   let count = 0;
// //Closure tab hota hai jab inner function..outer function ke variables ko access karta rahe outer ke khatam hone ke baad bhi.
//   return function(fn) {
//     count++;
//     fn(count);  // callback ko outer variable pass kar rahe hai
//   };
// }

// let exec = outer();
// //✔ Function ko argument me pass kiya → callback
// exec(function(a) {
//   console.log("callback uses closure value:", a);
// });

// exec(function(a) {
//   console.log("value again:", a);
// });


//-------------------------------------------------------------------------------------------------------

// let arr = ['ash', 100, 'bhaukaal', true, 400, false]

// function getString(arr){
//   let res = []; //empty
//   for(let item of arr){
//     if(typeof(item) == "String"){
//       res.push(item)
//     }
//   }
//   return res; //jab npush ho jayega toh return kar dunga array ko
// }


// function getNumber(arr){
//   let res = []; //empty
//   for(let item of arr){
//     if(typeof(item) == "number"){ 
//       res.push(item)
//     }
//   }
//   return res; //jab npush ho jayega toh return kar dunga array ko
// }

// function getBool(arr){
//   let res = []; //empty
//   for(let item of arr){
//     if(typeof(item) == "boolean"){
//       res.push(item)
//     }
//   }
//   return res; //jab npush ho jayega toh return kar dunga array ko
// }

// console.log(getNumber(arr));
// console.log(getString(arr));
// console.log(getBool(arr));







































































