// push()
//Array ke last m add karna hai toh push
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);
// let returnedValuee = arr.push(129)
// console.log(arr);
// let returnedValue = arr.push(100);

// console.log(arr);
// console.log(returnedValue); //return length
// console.log(returnedValuee);
// console.log(arr);

//----------------

// pop()
//pop m hamesha last value hi jati hai.
// let arr = [10, 20, 30, 40, 50];
//   let poppedVal = arr.pop(); //last value chali jayegi
//   console.log(arr); 
//   console.log(poppedVal);
// let returnedValue = arr.pop() 
// console.log(arr);

// console.log(returnedValue); // element which is popped

//---------------------------------------

//Length --> property

// console.log(arr.length);

//----------------------------------
//unshift...starting m add.
// let arr = [10, 20, 30, 40, 50];
//unshift..ye push kara rha hota hai starting se. Add karne ke liye. Starting m.
//push karne ke baad length milti hai waise hi unshift ke baad length milti hai.
// arr.unshift("John");
// let returnedValue = arr.unshift("Ashish"); //Add. Jo chiz add karni hai use as an argument bhi bhejna padega.
// console.log(arr);
// console.log(returnedValue); //length dega return m
// console.log(typeof(returnedValue));

//-----------------------
//shift...staring m bhr karega.
//shift() --> starting m pop. Shift array ko pop kara rha hota hai starting se.

// let arr = [10, 20, 30, 40, 50];
// arr.shift()
// let returnedValue = arr.shift();
// let returnedValuee = arr.shift("ashish");
// console.log(arr);
// arr.shift();
// console.log(returnedValue);// element which is being shifted
// console.log(arr);
// console.log(typeof(returnedValue))
// console.log(returnedValuee) 

//------------------------------------
//Join method. Array ke andar jo values hai use join kar dega. It returns a string. 
// let arr = [10, 20, 30, 40, 50];
//join: It's a method. Arrays ke andar ke values kp join kar dega.
// join()--> by default they are comma ',' separated

// arr.join();
// arr.join("humko join kar lo"); //The line arr.join("humko join kar lo") has no effect because you're not storing or logging it.
// console.log(arr.join());
// // let newValue = (arr.join()); //returns a string
// let newValue = (arr.join('-->')); //jis chiz se join karana chahtea hai wo bhej dete hai. Else ,(comma) separated hota hai by default. 
// // let newValue = (arr.join('ayein')); //jo value dete hai wo join ho jati hai
// console.log(newValue);
// // join() always returns a string, so:
// console.log(typeof(newValue)); //return type string hai

//------------------------------
//includes is also a method. 
//includes() --> boolean value return karta hai.

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.includes(10));// True bcoz 10 is there
// console.log(arr.includes(200)); //False cuz 200 isn't there

// let arr = ['ash', 'ashish', 'ranjan', 20, [20], ['john', 'boy']]
// console.log(arr.includes('ash'));
// console.log(arr.includes('ashish'));
// console.log(arr.includes('as')); //false cuz string not matched
// console.log(arr.includes('john'));
// console.log(arr.includes(["john", "boy"])); //Array ke andar Array nai check hota
// console.log(arr.includes("['john', 'boy']")); //String ke sath bhi nai match karega bcoz it's an array
// console.log(arr.includes(20));
// console.log(arr.includes([20]));

//Direct check nai kar sakte...nesting karni padegi. arr[2][1]...like this


//chatgpt
// let arr = [10, 20, 30];

// Array → String
// join() (Array → String)......Used on arrays to combine elements into a string with a custom separator.
// let str = arr.join('-->');
// console.log(str);

// String → Array
//toString() (Array → String)....Converts array into string, but you cannot control separator
// let backToArray = str.split('-->');
// console.log(backToArray);


// split() (String → Array)
// 👉 Opposite of join() — converts string into array
// Key points:
// Works on strings
// Breaks string into array based on separator
// Returns an array
// let str = "10-->20-->30";

// let result = str.split('-->');
// console.log(result);