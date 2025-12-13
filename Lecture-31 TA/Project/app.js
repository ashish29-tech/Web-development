

// let num1 = document.getElementById('1num');
// let num2 = document.getElementById('2num');

// let button = document.getElementById("addbutton")
// // console.log(num1.textContent); //koi content nai hai to khali hai
// // console.log(button)

// let h3 = document.getElementById("addedcontent")

// button.addEventListener("click", function(){ //button ek object hai...jiske methods hai unme se ek addEvntLitnr. Isme 2 chiz hoti hai Parameter..1st is kis event pe apply karna chahte hai..2nd is kya function aap execute karana chahte hai
//   // console.log(num1.value );
//   // console.log(num2.value);

//   // console.log(`this is the output of ${num1.value}+ ${num2.value} ` + (+num1.value + +num2.value))

//   h3.textContent = `this is the output of ${num1.value} ${num2.value} ` +( +num1.value + +num2.value);

// })

//---------------------------------------------------------------------------------
//Practice

//Project. Addition perform karna hai
let num1 = document.getElementById("1num"); //element ko select kar liya
let num2 = document.getElementById("2num") //element ko select kar liya
let h3 = document.getElementById("addedContent")

console.log(num1)
// console.log(num1.value) // abhi kuch bhi nahi hai toh khai hai


let button = document.getElementById("addButton")

//button pe event listener lgana hai.. button is an object..jisme methods hai..addEventListener ek method hai
//button pe evnet lagata hai addEventListener..when we click on a button we want a particular function to execute
//click event use karenge
button.addEventListener("click", function(){ //ye 2 parameter accept karta hai...1. Kis event pe aplly karna chahte hai 2. Kon sa function execute karana chah rahe hai
  // console.log(num1.value) //jab hmara function chale matlab button pe click ho tabhi ye console statement chale
  // console.log(num2.value)
  //num1.value ka type kya hota hai? ALWAYS STRING
  // console.log(num1.value + num2.value) //string return kar diya...isliye yha concatinate ho gya
  // console.log(+num1.value + +num2.value)//  Using Unary +
  // console.log(`this is the putput of ${num1.value} ${num2.value} ` + (+num1.value + +num2.value))


  //console m jo value likhi hai wo hame h3 m dalna hai
  h3.textContent = `this is the putput of ${num1.value} ${num2.value} ` + (+num1.value + +num2.value)

}) 






