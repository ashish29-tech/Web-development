//html ke andar bina jaye...js ki help se change kar rahe
// Using js we'll manipulate HTML

//document m jao HTML m se select karo is is way se

//way 1 --> getElementById


// let elem = document.getElementById(ashish) //trying to select and manipulate h2 but this is wrong way
// console.log(elem);

// let elem = document.getElementById("ashish") //trying to select and manipulate h2...right way.ashish naam ki ID find kar rha hai

//document.getElementById...it only returns 1 single entity...that is 1st occurnce. Agr 2 element ko same ID de di to 1st wali return hogi


//-------------------------------------------------
//styling...
//alag alag properties same element par. Yha individual property de rahe hai to camel case.
// elem.style.color = "red";
// elem.style.backgroundColor = "green";
// elem.style.border = "10px solid black"

//ek sath element par properties apply karna  
//ek sath element...yha camel case use nai hoga. Ye syntax yaad karna padega.
// elem.style.cssText = ` //backticks m
//   color : purple;
//   font-size : 50px;
//   background-color : gold; //yha camel case use nai hoga


//------------------------------------------------------------------

//way-2 --> getElementsByTagName....returns an Array(html collection)...and use looping

let allheading = document.getElementsByTagName("h1"); //plural hai. Returns Array(HTML Collection). Array ke methods(push, pop etc) work nai karenge

//kya hum CSS use kar sakte hai
// heading.style.color = "red"; //error. Dirctly use nai hoga..instead use loop

// for(let heading of allheading){ //
//   heading.style.color = "red" //heading pe color lage
//   heading.style.backgroundColor = "black"
// }

// for(let heading of allheading){ //
//   heading.style.cssText = `
//   color : red;
//   background-Color : green;
//   font-size : 100px
//   `;
// }


//-------------------------------
//way-3 --> getElementByClassName --> It also returns an array(html collection)
// html m class honi chahiye
// let classEle = document.getElementsByClassName("ash");

// for(let elem of classEle){
//   elem.style.textDecoration = "line-through"
// 

//multiple properties lagani hoti toh cssText

//--------------------------------------------------------------
//ek jagah getElementById hai ek jagah getElementByTagName hai, kahi singular..kahi plural...in sabse
//better....
//sab chize ek sath available ho

//way-4 --> querySelector..ye 3 in 1 kaam karta hai and only 1 element select karta hai

// //ID se getElementById: iska alternative..
// let qs1 = document.querySelector("#ashish") //starting m hash lga diya so that id se lga rahe hai. ID ka naam ashish hai...html m likha hua hai. Single selector

//Class Name...getElementByClassName....iska alternative.
//Jaise ID ke liye hash hai...waise class ke liye .(dot)
// let qs2 = document.querySelector(".ash") // . lga ke class ka name. Multiple selector possible nahi hai...single hai.

// //Tag name
// let qs3 = document.querySelector("p") //1st paragraph select ho jayega 

//------------------------------------------------------------------
//way-5 --> querySelectorAll..selects all the elements

//ID se getElementById: iska alternative..
let qs1 = document.querySelectorAll("#ashish") //starting m hash lga diya so that id se lga rahe hai. ID ka naam ashish hai...html m likha hua hai. Single selector

//Class Name...getElementByClassName....iska alternative.
//Jaise ID ke liye hash hai...waise class ke liye .(dot)
let qs2 = document.querySelectorAll(".ash") // . lga ke class ka name. Multiple selector possible nahi hai...single hai.

//Tag name
let qs3 = document.querySelectorAll("p") //1st paragraph select ho jayega 




