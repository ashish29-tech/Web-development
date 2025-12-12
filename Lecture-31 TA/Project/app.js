

let num1 = document.getElementById('1num');
let num2 = document.getElementById('2num');

let button = document.getElementById("addbutton")
// console.log(num1.textContent); //koi content nai hai to khali hai
// console.log(button)

let h3 = document.getElementById("addedcontent")

button.addEventListener("click", function(){ //button ek object hai...jiske methods hai unme se ek addEvntLitnr. Isme 2 chiz hoti hai Parameter..1st is kis event pe apply karna chahte hai..2nd is kya function aap execute karana chahte hai
  // console.log(num1.value );
  // console.log(num2.value);

  // console.log(`this is the output of ${num1.value}+ ${num2.value} ` + (+num1.value + +num2.value))

  h3.textContent = `this is the output of ${num1.value} ${num2.value} ` +( +num1.value + +num2.value);

})














