
// let todo = { //object bna diya
//   title: "therapist", //title...therapist ho gya
//   desc: function(){
//     // return `You have to go to ${todo.title}` //this bhi use kar sakte hai
//     return `You have to go to ${this.title}`
//   }
// }

// console.log(todo.title);
// console.log(todo.desc()); //desc

//Apke object ke andar nai hai to use istemal nahi kar sakte
// console.log(todo.ashish); //nai hai par still proprty access kar ke dekh lete hai...pehle object m dhundte..nai milta to uske prtotype m dhundta hai
// console.log(todo.ashish()); //nai hai par still method access kar ke dekh lete hai

// console.log(todo.toString());


//Prototype is an another object. It acts like a fallback source of properties.


// console.log(todo);

//Console m
// todo
//todo.__proto__ ....isse ek object ayega. Confirm karne ke liye..
//todo.__proto__ === object.prototype .... true aya mtlb todo naam ka object bnaya hai uska proto kon hai ? object.prototype
//todo.__proto__.__proto__ === object.prototype // kya ye object ke prototype ke barabar ho sakta hai ? False
//todo.__proto__.__proto__ === null //null ke barabar check kiya...true



//Let= ["mai", "hu", "na"];

//Method ? Object ke andar jo function hota hai use method kehte hai
//Can we call a normal function a method ? No
// Push, pop ye method hote hai. But method object m hote hai. 
//And push, pop array pe kaaam karta hai
//EVERYTHING INSIDE JS IS AN OBJECT. WHETHER ARRAY, STRING, NUMBER, FUNCTION ETC.
//Everything is equal to object that's why we are able to use push and pop to the arrays.


//-------------------------------------

// let arr = ["my", "name", "is", "ashish"];
// console.log(arr); //output ko expand karenge console m toh we'll find...key:value pair. Meaning behind the scene array convert itself to object

//console m
//arr
//arr ka proto check karna hai... arr.__proto__ === object.prototype .....true ana chahiye par false ayega cuz ye array hai object nai
// arr.__proto__ === Array.prototype ......ye true ayega cuz array ke prototype ke barabar hai. Array apne prototype se bna.
// arr.__proto__.__proto__ === Objet.prototype //Array ka prototype..object ke prototype se bna
// Mtlb jab object create karte hai to object ke prototype se banta hai par jab array create karete hai to wo array ke prototype se bna hai lekin array ka prototype...object ke prototype se bna 

//--------------------------------------

// let str = "Ashish can't dance sala";

// console.log(str);

//Console m
// str.__proto__.__proto__ === Object.prototype //true
//str.__proto__.__proto__.__proto__ === null //true



//Array ka prototype, string, object ka prototype, boolean ka protottypr, function wgr...sab ultimately object.prototype ki help se ban rahe. That's why it's callled fallback source.

 














