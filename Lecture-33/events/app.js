//events in simple words
//actions happens on document...jiske corresponding aap kuch reactions de sakte ho
//Types of events....many
//Then how to remember...use documentation...MDN/w3schools
//In how many ways can we listen(event pe kuch task perform karna) to the events ? 3 ways


//----------------------------------------------
//1. Inline...tarika hai naam nai hai

// function something(){
//   console.log("mai to ji dab gya")
// }

//--------------------------------------
//2nd way

// let btn = document.querySelector("button");
// btn.onclick = function(){ //button ko ek function ke barabar kar diya hai...btn(button pe click hoga..toh function trigger ho jayega)
//   console.log("jai hind")
// }

//or
//this way...both are correct

// let btn = document.querySelector("button");
//  let ash =  function(){ //button ko ek function ke barabar kar diya hai...btn(button pe click hoga..toh function trigger ho jayega)
//              console.log("jai hind")
//            }
// btn.onclick = ash; //


//------------------------------------
//interview question

// let btn = document.querySelector("button");

// function naacho(){
//   console.log("natu natu natuuuu...")
// }

// function gaao(){
//   console.log("sa re ga ma pa dha ni sa")
// }

//yha overriding ho rahi hai...ek event par 1 kaam
// btn.onclick = naacho;
// btn.onclick = gaao;

//---------------------------------------
//multiple kaam/functions karane ho
//3rd way...addEventListner()

// btn.addEventListener("click", function(){ // type mtlb kon sa event click hua hai...listener(call back function yha pe)..jo tumhe chalana hai 
//   console.log("event chal gya")
// })

//----------------------------------------
//multiple functions trigger
// btn.addEventListener("click", naacho); //addEventListener ek function hai jo 2 argument accept karta hai
// btn.addEventListener("click", gaao);

//-------------------------------------------
//task
//button hai html m...button pe jab click karte hai toh body ka background red ho jayega

let btn = document.querySelector("button"); //button pe kaam karna hai isliye button select kar liya
let body = document.querySelector("body"); //task body pe hona hai isliye body select kar liya...body bhi element hai na

btn.addEventListener("click", function(){ //button pe addEventListener...jab bhi button pe click ho to ye function chal jaye...button pe ek listener lga diya "click"...
  body.style.backgroundColor = "red"; //function..body ko uthayega and style ki help se backgroundColor change kar dega
});




