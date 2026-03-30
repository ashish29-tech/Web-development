
let arr = [10, 20, 30, 40, 50];


//1. length --> Property

// console.log(arr.length);

//2. push() --> Method --> Last m add karna

// arr.push(60);
// console.log(arr);
// console.log(arr.length);

//Multiple Value

// arr.push(60, "ash", 80);
// console.log(arr);
// console.log(arr.length);

//-------------------------------
//3. Pop --> Method --> Last se hta deta hai
// Pop returns the last element


// arr.pop(50);
// arr.pop(40); //no need of argument

// console.log(arr);

//--------return types---------------
let ans = arr.pop(); //last value pop hui hai....Returns that removed value
let ans2 = arr.push(400); //return length....Returns the new length of the array

// push() does NOT return the pushed value — it returns the array length.

console.log(ans);
console.log(ans2);


