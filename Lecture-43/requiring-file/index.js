
const PI = 3.145;

// const ans1 = (num)=>{
//   return num*num;
// }
//               or

const ans1 = num => num*num; //same as above...it's arrow function. When there is one argument we can remove (), {}, return

const ans2 = (a,b) => a+b; //2 parameter hai to...() ye gayab nai kar sakte.

console.log(PI);
console.log(ans1(7)); //function hai to call kar liya...1 argument de diya
console.log(ans2(3,8));//call kar liya..and 2 argument hai isliye...3,8

//When u don't export anything from ur file by default empty object is being sent. 

//Agr bhejna hota toh..

// module.exports = {}; //By default empty object ja rha tha...isliye ise likhe ya na likhe output same ayega.

//PI, ans1, ans2 bhej diya...
// module.exports = {  //object cuz key:value pair
//   //right side wala value hai...
//   Pi : PI, 
//   ans1 : ans1, //ye function hai isliye function aa rha hai terminal m
//   ans : ans2 //ye function hai isliye function aa rha hai terminal m
// }
//now if we run node app.js we'll see an object...it's not empty it's have value of PI, ans1 function, ans2 function


//or
//if key and value are the same then we can ignore writing our (: value) part
// module.exports = { 
//   PI, //key and value same hote hai toh colon and value ko hta sakte hai
//   ans1, 
//   ans2
// }

// module.exports = { 
//   PII : PI, //yha PII naam hai key ka...isi naam se export ho rha hai...to app.js m bhi isi naam ki key se destructure hoga
//   ans1, 
//   ans2
// }

//---------------------------------------
//Kya object ki jgah kuch aur bhi bhej sakte hai ? Yess. But generally object bhejte hai

// module.exports = "ashish" //string bhej diya hai


//random proactice
//arrow function

// const add = (a,b)=>{
//   return a + b;
// }
// console.log(add(2,3))
//         //or
// const addd = (a,b) => a+b;
// console.log(addd(2,6))








