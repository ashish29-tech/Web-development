
const person = { //object bnaya
  first: "ashish",
  favColor: "blue",
  last: "ranjan"
}

console.log(person);

// //can I add a property in above object ? YESSSSSS
person.age = 49; //jo bhi property add karni hai uska naam
console.log(person); //ab new property add ho jayegi

// //------------------------------------------
// //can I change the existing value ? YESSSSSSSSSS
// person.first = "abhishek"
// console.log(person);

// //--------------------------------------------
// //can I delete a property ? YESSSSSSSSSSSS
// delete person.age; //delete object name and jo property delete karni hai
delete person.favColor;
// delete person.last;
console.log(person);

// //---------------------------------------
// //spread operator
//It works on both the arrays and objects.

let arr = [10, 20, 30, 40, 50, 60];
let arr2 = [80, 90, 100];

// //concatination
// let ans = arr.concat(arr2); //concat method...isme arr2 ko dal diya...output ko variable m le liya
// console.log(ans)


// //not from concatination...but from modern approach which is widely used
// arr2 = [...arr, 80, 90, 100]
// // arr2 = [...arr, 80, 90, 100]; //spread operator array ke andar aa gya. It's a concatination in a modern way
// console.log(arr2);

let anss = [...arr, ...arr2];
console.log(anss)







