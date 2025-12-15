
// let h1 = document.querySelector("h1");//select kar liya
// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");

// //1. adding classlist
// //multiple add bhi kar sakte hai
// //class ke upar kaam karna hai to classList. add karna hai to class1 ko toh add.
// // h1.classList.add("class1") //alag-alag
// // h1.classList.add("class2") //alag-alag
// // h1.classList.add("class3") //alag-alag

// //--------------------------------------
// // , separated class add
// h1.classList.add("class1", "class2", "class3");

// //---------------------------------------------
// //2. remove
// h1.classList.remove("class1") //agr 1 class remove karni ho
// h1.classList.remove("class1", "class3") //multiple remove 

// //------------------------------------------
// //3. Toggle. class present hai to hat jayegi and vice-versa
// h3.classList.toggle("class3") //pehle se kuch nai hai...toggle lga diya toh class3 aa jayegi

// //-------------------------------------------
// //4. contains
// //Hai to true nai hai to false...returns boolean value
// console.log(h3.classList.contains("class1")) //kya h3 ke pass class1 hai..nai hai to false
// console.log(h3.classList.contains("class3")); //h3 ke pass class3 hai...true

//----------------------------------------------------------------
//Practice

//sabse pehle select karna hai toh...

// let h1 = document.querySelector("h1")
// let h2 = document.querySelector("h2")
// let h3 = document.querySelector("h3")

//now we want h1 pe class add karu..and with the help of that class...style wgr change karna chah rahe
//css m classes bna di

//class pe kaam karna hai toh classList likha...and add kana hai toh add...class1 ko karna hai
// h1.classList.add('class1') //heading ka color red ho jayega toh mtlbb class1 add ho gayi
// h1.classList.add('class2') //
// h1.classList.add('class3')
// //teeno add ho gaye...par kya teeno alag-alag karna ?

// //-----------------------------------------
// //Multiple dena hai toh we can give them comma separated. This is how we add the classes.
//  h1.classList.add("class3", "class1", "class2")

//------------------------------------------------------
//Now we want multiple 

//2. Remove... suppose kisi ek ko remove karna chah rahe hai
// h1.classList.remove('class1') //class1 ko remove kar diya...
// h1.classList.remove('class1', 'class3') //multiple add and multiple remove ek sath kar sakta hu..

//--------------------------------------------------------

//3. Toggle... example switch... on hai toh off... off hai toh on... agr pehle se class hogi toh hat jayegai...and pehle se present nai hogi toh add ho jayegi

//class3 ko toggle kiya...
// h3.classList.toggle('class3')


//-----------------------------------
//4. contains
//chiz hogi toh true return kar dega and nahi hoga toh false return kar dega....boolean value return karega
//Class hai ya nahi...

//h3 ke paas class1 hai ? jo bhi ayega use console kaar liya
// console.log(h3.classList.contains('class1'))

// h3.classList.toggle('class3') //add kar di
// console.log(h3.classList.contains('class3')) //h3 ke pass class3 hai...toh true aa jayega


