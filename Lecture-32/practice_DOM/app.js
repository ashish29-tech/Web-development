
//document: means html m se select kar is-is way se

//way-1 

// let elem = document.getElementById(ashish); //❌ bina string ke nahi hoga

//only returns 1 single entity
// let elem = document.getElementById("ashish"); //ashish naam ki id dedi html m h2 ko. In case 2 element ko same id dedi toh 1st wala hi ayega


//---------------------------------------------------
//styling
//alag-alag same element par properties provide karna
// elem.style.color = "red" //style property ka use kiya
// elem.style.backgroundColor = "green"
// elem.style.border = "10px solid black"

//ek sath element par properties apply karna
//cssText property hoti hai... backticks m chalega
//and yha kabab case use kiya hai na ki camel case...aise cssText m karte hai
// elem.style.cssText = `
//   color: purple;
//   font-size: 50px;
//   background-color : gold;
// `

//--------------------------------------------------------------------------------------------

//way-2 -> getElementsByTagName...It returns an array(html collection)
//Selecting elements by tagName: p, h1 etc. Yha elements hai mtlb plural
// let allheading = document.getElementsByTagName("h1") //html collection aya and use heading var m store kar diya...toh ye hading m array hai toh can we use array wale methods(heading.push(), heading.pop()) on hrading ? NO 
//type heading in browser console...we'll be getting html collection.... means ye array return karta hai

//kya heading pe css lga sakte hai ?
// heading.style.color = "red"; //directly nahi hoga...cuz alag-alag elements hai toh loop karna padega...

// for(let heading of allheading){
//   //heading pe css lagana chah rahe hai
//   heading.style.color = "red";
//   heading.style.backgroundColor = "green"
// }
//or we can use csstext

// for(let heading of allheading){
//   heading.style.cssText = `
//   color : red;
//   background-color : brown;
//   font-size : 40px
//   `;
// }

//-----------------------------------------------------------------
//way3 -> getElementsByClassName -> 

// let classEle = document.getElementsByClassName("ash") //we'll get array..
// //classEle..ye type in browser console...we'll get array...

// for(let elem of classEle){
//   elem.style.textDecoration = "line-through"
// }

//--------------------------------------
//Way4 --> querySelector...3 in 1 kaam karta haia and only 1 element ko select karta hai
//baar-baar selection ke way ko badal rahe the...
//isliye we'll use querySelector
//id ka alternative
// let qs1 = document.querySelector("#ashish") //id ke liye #....1st occurence mtlb 1st element jise id di hai ashish wo mil jayega..check in broser console. single selector

// className ka alternative
// let qs2 = document.querySelector(".ash") //class ke liye .(dot). single selector

//tagName ka alternative
// let qs3 = document.querySelector("p") //bina kisi hash ya dot ke likhenge...1 hi select hota hai querySelector m isliye 1 ayega..check in console..type qs3

//-----------------------------------------------------------------
//Way5 --> querySelectorAll

let qs1 = document.querySelectorAll("#ashish") //2 ko id di hui hai ashish ke naam se..toh dono ko select kar lega

// className ka alternative
let qs2 = document.querySelectorAll(".ash") //class ke liye .(dot). 

// tagName ka alternative
let qs3 = document.querySelectorAll("p") //bina kisi hash ya dot ke likhenge..

