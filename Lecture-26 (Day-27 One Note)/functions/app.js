
// function user (){

// }

// let user1 = user();
// console.log(user1); //when nothing is returned from function by default undefined is returned

//--------------------------------------------
//constructer function: jab kisi function ko new keyword se call karte hai then it's not normal function it becomes constructor function.
//It returns an object
// function user (){

// }

// let user2 = new user(); //call karne ke pehle new word lga diya
// console.log(user2); //object returned ho rha

//----------------------------------------------------------------------------------
//Constructor function convention = 1st letter capital
// function User (){
//   this.username = "Ashish";
//   this.age = 25;
//   this.color = "purple";
// }

// let user3 = new User(); //call karne ke pehle new word lga diya....isne new object bnaya(user3)...is new object m 3 property(username,age,color) add kari
// console.log(user3);

//-----------------------------------------------------------------------------------
//Constructor function acts as a blueprint...jo ek jese objects create kar deta hai
// function User (naam, umar, rang){ //jo call karte waqt diya wo catch kar liya
//   this.username = naam;
//   this.age = umar;
//   this.color = rang;
// }

// let user3 = new User('Ashish', 25, 'Black'); //function ko call karte waqt diya...naam, umar, rang
// //Multiple object bna rahe hai with the same property...
// let user4 = new User('Abhishek', 23, 'Grey')

// console.log(user3);
// console.log(user4);

//-----------------------------------
//User bhi ek object hai jo constructer function ki help se bna hai.....
// function User (naam, umar, rang){ 
//   this.username = naam;
//   this.age = umar;
//   this.color = rang;

//   this.desc = function(){ //method add kar diya. Object ke andar method bhi to hote hai.
//     return `my name is ${this.username}`
//   }
// }

// let user3 = new User('Ashish', 25, 'Black'); 
// console.log(user3);
// console.log(user3.desc()); 

// let user4 = new User('Abhishek', 225, 'laal'); 
// console.log(user4);
// console.log(user4.desc());

//User bhi ek object hai jo constructer function ki help se bna hai.....
//console m..
//user3.__proto__ //user3 ka proto constructor function
//user3.__proto__ === User.prototype // User.prototype ke barabar hai ? Yes. Mtlb user3 ka jo object hai iska prototype kon hai...User.prototype hai mtlb...constructor function
//user3.__proto__.__proto__ === Object.prototype //true
//Constructor Function ki help se object banta hai to uska prototype..constructor function hi hota hai


//-----------------------------------
//Prototype is a simple object. When we create a object and us object ke andar koi method ya proprty nahi hoti to kya kaam khtm ho jata hai ? No. Wo uske fallback source m jata hai..agr object ki baat kare to uska fallback source hota hai object.prototype
//Similarly array ki baat kare to..array ka prototype hota hai array.prototype..means array m koi method na mile to wo array ke prototype m jayega..usme bhi na mila to object ke prototype m jayega...sam goes with string, boolean, number, normal function
function User (naam, umar, rang){ 
  this.username = naam;
  this.age = umar;
  this.color = rang;

  //iski jarurat nai hai ⬇
  // this.desc = function(){ //method add kar diya. Object ke andar method bhi to hote hai.
  //   return `my name is ${this.username}`
  // }
}

//description function baar-baar store ho rha tha. Ise object ke andar store nai karana hai.Ise iske prototype m bhed dena hai...iska prototype hai...User.prototype...toh ye function ko user ke prototype m fek denge
User.prototype.description = function(){ //user ke prototype ke andar gaye and ek new method banayenge jise description kahenge...and wo ek function hai
  return `my name is ${this.username}`
}

let user3 = new User('Ashish', 25, 'Black'); 
// console.log(user3);
console.log(user3.description()); 

// let user4 = new User('Abhishek', 225, 'laal'); 
// console.log(user4);
// console.log(user4.desc());





