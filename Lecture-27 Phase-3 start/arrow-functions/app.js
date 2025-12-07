
//Arrow functions is also a syntactical sugar.
//Use in writing functions efficient/alag tarike se lihne m.
//Ye bhi ES6 m aya hai


//Normal function definition
// function sum(a,b){
//   return a+b;
// } 

// console.log(sum(5,6));

//------------------------------------------
//Way 1 Arrow function
//function naam ka keyword nai hota isme

// const sum =(a,b)=>{
//   return a+b;
// }

// console.log(sum(5,6));

const sum =(a,b)=>{
  return a+b;
}

console.log(sum(3,7));
//---------------------------------------------
//way2 

// let sqr = (num)=>{
//   return num*num
// }
// console.log(6);

//jab sirf 1 kaam karna ho to return keyword ko hta sakte hai and swarg ka darwaja{} ko bhi. Jab return nahi karna ho to nahi kaam karega tab swarg ka darwaja lgana karega
// let sqr = (num)=>num*num //automatic smjh jata hai js ki ye(num*num) returned value hai
// console.log(sqr(6));

//Way3
//1 parameter hai to () parenthesis bhi remove kar sakte hai
// let sqr = num=>num*num 
// console.log(sqr(6));


//PHASE 2 COMPLETED HERE....
//60% JAVASCRIPT COMPLETED








