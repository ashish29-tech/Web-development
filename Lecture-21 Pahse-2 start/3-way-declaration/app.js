//Var can be reinitialised and redeclared
//1. var

// var something = 100;
// console.log(something);

//---------------------

// 
//------------------------

// var something = 100; //Decalaration
// var something = "ashish"; //redeclaration
// console.log(something); //


//-------------------------------
//2. let
//let se declared variables ko re-initialise kar sakte hai ? Yess Redeclare ? No

// let ashish_bhaiya = 6;

// ashish_bhaiya = true; //reinitialize
// console.log(ashish_bhaiya);

//------------------------------------

// let ashish_bhaiya = 6;

// let ashish_bhaiya = true; // can't redeclare 
// console.log(ashish_bhaiya);

//------------------------------------
//3. Const

// const bhai_ye_kya_ho_rha_hai = 100;

// bhai_ye_kya_ho_rha_hai = "Ashish"; //reinitialisation ❌

// console.log(bhai_ye_kya_ho_rha_hai); 

//-------------------------------------

// const bhai_ye_kya_ho_rha_hai = 100;

// const bhai_ye_kya_ho_rha_hai = "Ashish"; //redeclare ❌

// console.log(bhai_ye_kya_ho_rha_hai); 

//---------------------------------
// Questions

//1. 

// const ashish; // jab var ko koi value nahi mili toh js engine --> undefined
// ashish = 100; //reinitialise ❌
// console.log(ashish);

//2.

// person(ek variable..object pe point kar rha hai) ke refernce(matlab jisko point kar rha hai) ko change nai kar skte. Andar ki chize change ho skti hai
// const person = { //person object pe point kar rha hai. Person ka refernce object hai.
//   username : "Monikaaa ohh my darling",
//   lang : "study"
// }

// Agar tum let, var, ya const nahi lagate:
// JavaScript automatically ek global variable bana deta hai (non-strict mode me)
// Yeh variable global scope me chala jata hai. Kahin aur code me same naam use hua → conflict 💥
// persons = {
//   usernaam : "ashish",
//   kaam : "padhna"
// }
// console.log(persons);

//error
// const person : {
//   username: "ashishssss",
//   lang: "bhaukali"
// }

// person = [] //error

// console.log(person.username);
// person.username = "john"; //object ke andar ke value ko kitni baar bhi change kar sakte hai.
// console.log(person.username);
// person.lang = "hindi"; //object ke andar ke value ko kitni baar bhi change kar sakte hai.
// console.log(person.lang); 

//Yha reference(matlab jisko point kar rha hai) change ho rha hai isliye error...means ise object, array, string kuch nai bna sakta
// person = {
//   username : "ashsish",
//   lang : "bhaukali"
// }

// // person = [] //error  
// console.log(person.username);
// console.log(person.lang);

// person.lang = "ha ha ha";
// person.age = 26;

// console.log(person.lang);
// console.log(person);


// const person = { name: "ashish" };

// person.name = "rahul"; // ✅ allowed
// person.age = 25;       // ✅ allowed

// console.log(person);
// console.log(person.name);
// console.log(person.age);

