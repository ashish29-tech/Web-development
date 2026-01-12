//yha animal naam ke folder ko require karenge

// let jaanwar = require('./animal') //yha animal naam ke folder ko require kar rahe hai toh by default index.js joki animal folder m bnai hai wo ja rha hai

// console.log(jaanwar); //now run karenge toh empty object ayega

// let jaanwar = require('./animal') //folder hai

// console.log(jaanwar); //it's returning an empty object

//------------------------------------------------------------

// let jaanwar = require('./animal')

//sidha destructure
let {cat, dog} = require('./animal');
// console.log(cat) //ye bhi object dega...isse run nahi hoga
// console.log(dog) //ye bhi object dega...isse run nahi hoga

console.log(cat.cat()) //function hai cat toh run kiya ab chal jayega meoww
console.log(dog.dog()) //function hai dog toh run kiya ab chal jayega woof

// let {cat, dog} = jaanwar; //destructure
// console.log(jaanwar);


// let {cat:catty, dog:doggy} = require('./animal'); //destructure

// console.log(cat); //ye bhi object de rahe hai...that means 1 level aur deeper jana padega
// console.log(dog); //ye bhi object de rahe hai...that means 1 level aur deeper jana padega

// console.log(catty.cat()); //ab chal rha hai meoow 
// console.log(doggy.dog()); //ab chal rha hai woof



