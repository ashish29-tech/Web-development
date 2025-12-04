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

let arr = ["my", "name", "is", "ashish"]


console.log(arr); //BTS array apne aap ko object m convert kar leta hai.
//sare array...array ke prototype se bane hue hai. 
//arr.__proto__
//arr.__proto__ == Array.prototype......true
//arr.__proto__ == Object.prototype false....cuz ye object ke prototype se nahi bna hua hai.
//arr.__proto__.__proto__ == Object.prototype....true.....array ka prototype..object ke prototype ki wjah se bna.






















