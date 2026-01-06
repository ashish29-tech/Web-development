
// const person = { //object bnaya
//   first: "ashish",
//   last: "ranjan"
// }

// console.log(person);

// //can I add a property in above object ? YESSSSSS
// person.age = 49; //jo bhi property add karni hai uska naam
// console.log(person);

// //------------------------------------------
// //can I change the existing value ? YESSSSSSSSSS
// person.first = "abhishek"
// console.log(person);

// //--------------------------------------------
// //can I delete a property ? YESSSSSSSSSSSS
// delete person.age; //delete object name and jo property delete karni hai
// delete person.last;
// console.log(person);

// //---------------------------------------
// //spread operator
// //It works on both arrays and objects.

// let arr = [10, 20, 30, 40, 50, 60];
// let arr2 = [80, 90, 100];


// //concatination
// // let ans = arr.concat(arr2); //concat method...isme arr2 ko dal diya...output ko variable m le liya
// // console.log(ans)


// //not from concatination...but from modern approach which is widely used
// // arr2 = [...arr, 80, 90, 100]; //spread operator array ke andar aa gya. It's a concatination in a modern way
// // console.log(arr2);

// let anss = [...arr, ...arr2];
// console.log(anss)

// //--------------------------------------
// //Object par spread operator
// let obj = {
//   l: "ash",
//   m: "ran",
//   n: 10
// }

// let obj1 = {
//   ...obj, //upar ka object add kar diya yha
//   age: 45 //new property dedi
// }
// console.log(obj);
// console.log(obj1);

// obj1.l = 200;

// console.log(obj); //kya change ayega ? Noo. Cuz uska(upar wale obj ka) reference paas nai hua..uski sari chize uth ke yha aa gyi
// console.log(obj1); //kya change ayega ? Yess

//------------------------------------------------
//Destructuring(todna)
//It happens in both array and object

//Destructuring in array

// let fruits = ['apple', 'mango', 'pineapple', 'strawberry']

//bekar tarika
// console.log(fruits[2]);
// console.log(fruits[0]);

//modern way...array ki destructuring
// let [a,b,c,d] = fruits; //4 fruits hai to 4 variable. Since array is a ordered data structure...isliye 1st(a) wale ko 1st value mil gyi and so on
// let [a,b, ,d] = fruits; //c ki jgah khali kar diya to output kya hoga

// console.log(a);
// console.log(b);
// // console.log(c); //iski jgah kuch nai ayega
// console.log(d);

//-------------------------------

// let [a,b,c,d,e] = fruits; //Yha destructure 5 ko kar diya
// let [a,b,c,d,e="banana"] = fruits; //this is called default value. e ki value mil gyi to theek wrna banana se kaam chalana padega
// console.log(a);
// console.log(b);
// console.log(c); 
// console.log(d);
// console.log(e); //something is there par nai pta...isliye undefined
//------------------------------------------

// let fruits = ['apple', 'mango', 'pineapple', 'strawberry', 'litchi']

// let [a,b,c,d,e="banana"] = fruits; //this is called default value. e ki value mil gyi to theek wrna banana se kaam chalana padega. Yha e ko mil gyi value
// console.log(a);
// console.log(b);
// console.log(c); 
// console.log(d);
// console.log(e); //value mil gyi litchi...wrna banana ata

//----------------------------------------------
//Destructuring in object
//objects are unordered data structure
// const car = {
//   name: 'bmbabloo',
//   price: 150
// }

//normal way
// console.log(car.name);
// console.log(car.price);

//modern way is destructuring

// let {n , p} = car; //objects are unordered data structure...so we cannot call them with any name. We have to destructure with their name.
// console.log(n); //undefined
// console.log(p); //undefined

//Correct way
// let {name , price} = car; //objects ko destructure karte hai to key ka naam same hona chahiye
// console.log(name); //undefined
// console.log(price); //undefined

//-------------------------

// let {name:badlahuanaam , price} = car; //name change kar diya
// console.log(name); //ye chalega. Isse kuch nai ayega cuz pta hi nai hai kya hai
// console.log(badlahuanaam); // ya ye chalega. Ye chalega
// console.log(price); //undefined

//--------------------------------
const car = {
  // name: 'bmbabloo', //agr koi value na de...
  price: 150
}


let {name:badlahuanaam="ashishkicar" , price} = car; //koi value nai de upar...to yha default value de sakte hai.
console.log(name); //ye chalega. Isse kuch nai ayega cuz pta hi nai hai kya hai
console.log(badlahuanaam); // ya ye chalega. Ye chalega
console.log(price); //undefined

//------------------------------------------------------------

//Advance topic of js asked by big companies
//Event bubbling, Event delegation, Throttling, Debouncing, Polyfill
//Read docs for these topics

//Go to youtube..and learn and download Node.js







