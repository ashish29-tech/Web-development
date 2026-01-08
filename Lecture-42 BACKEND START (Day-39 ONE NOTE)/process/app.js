//Lecture-42 BACKEND START (dAY-39 ONE NOTE)


console.log(process.argv); //Ye ek array dega

//Terminal m...process.argv
//Now we'll run...process.argv..without going REPL ke andar
//.exit
//cd ..
// cd Lecture-42
//ls
//Lecture-42
//cd nodejs-basic
//ls
//nodejs-basic
//cd ..
//cd process
//ls
//process
//node app.js.... process wale folder m hote hue ye node app.js(file ka naam) run karte hai...
//  [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\my pc\\Desktop\\SamarthVohra Web Dev\\Lecture-42\\process\\app.js'
// ] //2 array mil rha hai..pehle sirf nodejs ka path mil rha tha..now 2 mil rahe hai...jha par hamara project run hota hai...us project ke run hone tak ka sara ka sara path

//node app.js ashish abhishek mani...ye likha to array ke andar aa gya
//why ?
//argv is an array. when we run....node filename..ye array to hai hi...ye multiple values deta hai..isme 1st hota hai path of nodejs...2nd is patha of project(running wala...app.js)...and kuch aur arguments paas kare like ashish abhishek mani..to wo bhi extra element dikh jayenge

//array ke 2nd index se leke last tak chahiye....toh slice kar sakte hai
let arr = process.argv.slice(2); //array pe slice method laga diya...array ke 2nd index se last tak jayega cuz kuch mention nahi kiya...aur sari chizo ko variable m rakha hai.
// console.log(arr); //terminal m...node app.js 10 20 30...likhenge to 10 20 30 ka array dikhega..
//array pe iterate
for(let item of arr){ //for loop lga diya us array par jo variable m hai.
  console.log(item) //sari chize aa jeyengi
}

//---------------------------------------
//Task
//node app.js 10......jo bhi number diya hai..in this case 10...us number tak sare print ho jaye
// console.log(process.argv);

// let n = process.argv.pop();
// // console.log(n)//n ki value mil rahi hai...terminal m dekh wha...node app.js 13...likh wha 13 milega
// for(let item=1; item<=n; item++){
//   console.log(item); 
// }




// //By chatGPT
// // Get the third argument (index 2)
// const input = process.argv[2];

// // Convert it to a number
// const limit = parseInt(input);

// // Check if it's a valid number
// if (isNaN(limit)) {
//   console.log("Please pass a valid number.");
// } else {
//   // Loop from 1 to that number
//   for (let i = 1; i <= limit; i++) {
//     console.log(i);
//   }
// }













