//Prototype
//todo object jo create hua hai wo object ke prototype ki wjah se create hua hai.
// let todo = {
//   title : "therapist",
//   desc : function (){
//     // return `You have to go to ${todo.title}`
//     return `You have to go to ${this.title }`
//   }
// }

// console.log(todo.title)
// console.log(todo.desc()) //method hai to run karna padega.

//ye todo.ashish ya todo.ashish() ko sabse pehle object m dhundha jata...agr nai miilta toh uske prototype m.
// console.log(todo.ashish) // undefined cuz pta nahi hai...
// console.log(todo.ashish()) //error cuz ashish naam ka method hai hi nai

// console.log(todo.toString()) //object object aa raha hai... 

// console.log(todo);

//Browser console m... todo.. todo.__proto__ object ayega. todo.__proto__ === object.prototype ...true
//todo.__proto__.__proto__ == null...true

//Parent ko check karne ke liye.... __proto__ 
//Ye chaining ho rahi hai...ise prototypal chaining.
//prototype nikalne ke method ko kehte hai dender proto....

//---------------------------------------------------------------------------------------------

//Method: Function defined inside an obejct.
//Push and Pop are method. Push and Pop work on Array.
//EVERYTHING INSIDE JS IS AN OBJECT.
//Aise hi string ke methods(toUppercase, concat etc.) string pe use karte hai.

// let arr = ["my", "name", "is", "ashish"]


// console.log(arr); //BTS array apne aap ko object m convert kar leta hai.
//sare array...array ke prototype se bane hue hai. 
//arr.__proto__
//arr.__proto__ == Array.prototype......true
//arr.__proto__ == Object.prototype false....cuz ye object ke prototype se nahi bna hua hai.
//arr.__proto__.__proto__ == Object.prototype....true.....array ka prototype..object ke prototype ki wjah se bna.
// arr.__proto__.__proto__.__proto__ === null.......true. 


//---------------------------------------------------------------

// let str = "pappu can't dance sala"

// console.log(str)
//str.__proto__ == String.prototype...true
//str.__proto__.__proto__ == Object.prototype...true

//----------------------------------------------------------------------------------------------------------------

//functions

// function user (){

// }
// let user1 = user();
// console.log(user1);
// console.log(user1())

//-----------------------------------
//new word use kiya.. it becomes a constructor function. Cf returns an object.
// function user (){

// }
// let user2 = new user()
// console.log(user2);

//---------------------------------------
//cf 
//convention... 1st letter capital
// function User (){
//   this.username = "ashish"; //Us object ko this ke andar daal deta hai.
//   this.age = "21";
//   this.colour = "white"
// }
// let user2 = new User() //Ek naya empty object banata hai:
// console.log(user2);

//----------------------------------------
//Multiple objects bnane hai with the same properties..toh instead of baar-baar bnane ke we create a template and call it multiple times.
// function User (naam, umr, rang){
//   this.username = naam; //Us object ko this ke andar daal deta hai.
//   this.age = umr;
//   this.colour = rang;
// }
// let user2 = new User("ashish", 21, "white") //Ek naya empty object banata hai:
// console.log(user2);
// let user3 = new User("ashima", 21, "blue") //Ek naya empty object banata hai:
// console.log(user3);
// console.log(user3.age);

//----------------------------------------

// function User (naam, umr, rang){
//   this.username = naam; //Us object ko this ke andar daal deta hai.
//   this.age = umr;
//   this.colour = rang;

//   //Ye function baar-baar aa rha hai jab bhi new object bna rahe hai...cf ki help se. Toh..ise iske prototype m bhej dena chahiye.
//   // this.desc = function(){
//   //   return `my name is ${this.username}`
//   // }
// }

//parent m bna diya method taki sare bacche access kar paye
//upar ke desc function ko user ke prototype m bhej dete hai...cuz baar-baar desc func aa raha hai jab new object bnate hai
// User.prototype.description = function(){
//   return `my name is ${this.username}`
// }

// let user2 = new User("ashish", 21, "white") //Ek naya empty object banata hai:
// console.log(user2);

////Constructor function ki help se object banta hai toh uska prototype....cf hi hota hai. 
//user3 ek object hai jo constructor function ki help se bna hai. Toh is object ka prototype constructor function hai.
//user3.__proto__.....{}  user3 ka prototype constructor function hai.
//user3.__proto__ == User.prototype...true ......user ke prototype ke barabar hai. Mtlb user3 ka object hai uska protype User.prtottype hai..means cf.
//user3.__proto__.__proto__ == Object.prototype......true...
// let user3 = new User("ashima", 21, "blue") //Ek naya empty object banata hai:
// console.log(user3);
// // console.log(user3.desc())

// console.log(user3.description()) //yha ham use kar paa rahe hai function ko jabki hamne User.prototype.description function bhr bnaya user function ke...cuz object nai mila toh uske prototype m gya..

// let user4 = new User("abhishek", 21, "black") //Ek naya empty object banata hai:
// console.log(user4);
// console.log(user4.desc())

//-------------------------------------------------------------------------------------------------------------------

//class

//cf bnaya... P capital hai.
//Is function ka kaam hai:
// 🔹 Naya object banana (through new)
// 🔹 Usme values fill karna using this
// function Person (naam, umar){
//   this.username = naam;
//   this.age = umar;
// }

// //STEP 2: Prototype me methods add kiye ja rahe hain
// Person.prototype.getFullName = function(){
//   return (`naam is ${this.username}`) //jo bhi value ayegi use return kar rahe hai.
// }

// Person.prototype.printlName = function(){
//   console.log(`my name is ${this.username}`)
// }


// //cf hai toh jab Person ko call karenge toh new keyword ayega... and cf object return karta hai
// let person1 = new Person("john", 18);
// console.log(person1)

//Prototype me methods honge (console me "hidden" section): getFullName: f, printlName: f, constructor: Person
//person1.getFullName().....'naam is john'.....ye browser console m run karenge toh chalega...→ Because object’s prototype is pointing to Person.prototype

//-------------------------------------------------------------------------
//cf ke sare kaam ab lipa poti kar ke karenge
//class syntax
//1st letter capital, calss bna di
// class Person{ //person naam se class hai

//   constructor(naam, umar){ //constructor word likh dete hai
//     this.username = naam;
//     this.age = umar;
//  }
//  //method bna diya
//   printName(){
//       console.log(`my name is ${this.username}`)

//   }
//   getFullName(){
//       return (`naam is ${this.username}`) //jo bhi value ayegi use return kar rahe hai.
//   }
// }


// let person2 = new Person("dhairya", 20) //
// console.log(person2);


//----------------------------------------------------

//random chatgpt
//HOF. example with returning a function (also uses closure):
function makeMultiplier(factor) {
  return function (x) { //Function ke andar ek anonymous inner function return ho rahi hai: 
    return x * factor; //Important: Yeh inner function factor ko remember kar leti hai (closure banta hai). So return hone ke baad: double variable is function ko hold kar raha hai:
  };
}
//Jab JavaScript me koi function return hota hai, return kiya gaya value jaha assign karte ho, waha store ho jata hai.
const double = makeMultiplier(2); //1. makeMultiplier(2) call hota hai
console.log(double(5)); // So x = 5






