
//JS: Interpreted, Single Threaded, Weakly Typed, Dynamically, Synchronous
//single threaded means ek baar m ek kaam..multiple statemanets ek baar m execute nai kar sakta...cuz 1 hi call stack hota hai.
//synchronous mtlb statements ko order wise run karenge. 
//JS engine waits for nobody..chalta jata hai code...it executes line by line
//But whai if I have to wait ?

//
// console.log('start');
// console.log('run after 4 seconds');
// console.log('end');

//--------------------------------
//setTimeout accepts  2 arguments...1st one is cb function, 2nd is uske andar ka delay
//isme time miliseconds
// console.log('start'); //console js ka part nai hai to ye webAPI's ke paas jayega..webAPI jayega console/output ke paas
// setTimeout(function(){ //setTimeout call hua...ye bhi js ka part nai hai.. 
//   console.log('run after 4 seconds');
  
// }, 4000)
// console.log('end');

// console.log('start')
// setTimeout(function(){
//   console.log('run after 3 seconds')
// }, 3000)


console.log("1");

setTimeout(() => { 
  console.log("2"); 
}, 2000);

console.log("3");



//setTimeout isn't a method..not a part of js.
//It's a part of browser...It's called webAPI.
//It's a webAPI jo ki browser ke paas hai.

//js ka sara code call stack m chalta hai
 
//------------------------------------------
//these next 2 questions asked in iterview

// console.log('start');

// setTimeout(function(){
//   console.log('after 2 seconds'); 
// }, 2000)
// setTimeout(function(){
//   console.log('after 4 seconds');
// }, 4000)
// console.log('end');

//Total time taken to execute whole code ?
//4 seconds

//---------------------------------------------
//pehle start chal rha tha phir 4 second and 2 second line wait kar rahi thi phir end chala...This is called asynchronous behaviour
// console.log('start');

// setTimeout(function(){
//   console.log('after 4 seconds');
// }, 4000)
// setTimeout(function(){
//   console.log('after 2 seconds'); 
// }, 2000)
// console.log('end');
//same 4 seconds total time

//------------------------------------

// console.log('start');

// setTimeout(function(){
//   console.log('after 0 seconds');
// }, 0)
// console.log('end');
//Total time ?
//0 second why ? cuz jab tak callstack empty nai hoga tab tak callback queue wala nai chalega






