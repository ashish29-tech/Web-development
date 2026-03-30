
//length....Number ke liye nai hoti

// let num = 999;
// console.log(num.length) //not possible isliye undefined
// console.log(num.length()); 

//-------------------------------------------
//Ek object hota hai math. 
//Math ek global object hai JavaScript me
// Matlab:
// Math.random()
// Math.floor()
// Math.PI
// Math.max(10, 20)
// Math.pow(2, 5)
// Ye sab functions Math object ke andar hote hain, aur console.log(Math) un sab ko dikhata hai.

// console.log(Math); //Math naam ka koi variable nahi bnaya...console m check...math naam ke object m kai sari properties dikh rahi hai.
//Since Math is an object I can use dot notation
//Properties of math object:
// console.log(Math.LN2); //LN is Natural Log
// console.log(Math.LN10);
// console.log(Math.PI);


// Math object ke methods:

// console.log(Math.ceil(4.3)); //5..Apne se upar wali value lega ceil
// console.log(Math.floor(4.3)); // 4


// console.log(Math.round(4.3)); //4
// console.log(Math.round(4.8)); //5
// console.log(Math.round(4.5)); //5

// console.log(Math.pow(2,3));
// console.log(Math.pow(2,5));
// console.log(Math.pow(2,8));

// Math.floor(Math.random() * n) → 0 se n-1 tak values

// console.log(Math.random()); //Generates random number from 0-1(0 inclusive and 1 isn't)...o aa sakta hai..1 nahi
// console.log(Math.random() * 10); //decimal ke baad ke number bhi ayenge
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.floor(Math.random() * 10)); //Will include 0-9 cuz 1*10 kabi nai hoga...cuz floor kr diya
// console.log(Math.floor(Math.random() * 1000)); //0-999 ki range m ayega

//Agar tumhe 3-digit random number (100–999) chahiye:
// console.log(Math.floor(Math.random() * 900) + 100) //100 to 999

//0-9 chahiye toh... 9-0 +1 => 9+1 = 10
//5-99 ke beech ka chahiye. Toh pehle range nikalenge... 99-5 + 1 => 94 + 1 = 95. And minimum value 5 thi usme se 5 add karna hai.
// console.log(Math.floor( (Math.random() * 95) + 5) ); //95 multiplication factor hai..iske output m minimum value 5 rahegi

//Generate 4 digit OTP
// console.log(Math.floor(Math.random() * 9000) + 1000); //Max: 9999, MinValue: 1000. Max-Min+1=9000



// console.log(Math.floor ( (Math.random() * 17) + 17) );
console.log(Math.floor(Math.random() * (33 - 17 + 1)) + 17);

// console.log(Math.floor( (Math.random() * 20)) )

// If you wanted a different range:
// Use this formula:
// Math.floor(Math.random() * (max - min + 1)) + min;
// Example (17 to 33):
// Math.floor(Math.random() * (33 - 17 + 1)) + 17;
// console.log(Math.floor(Math.random() * (33 - 17 + 1)) + 17)



//If 4 digit ka OTP generate karna hai toh.... min val 1000....max value 9999
