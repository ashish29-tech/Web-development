//events in simple words
//actions happens on document...jiske corresponding aap kuch reactions de sakte ho
//events pe ham kuch kaam karate hai
//events ko listen karna...means actually kya hua hai use dekhna 
//Types of events....many
//Then how to remember...use documentation...MDN/w3schools
//In how many ways can we listen(event pe kuch task perform karna) to this events ? 3 ways

//onclick event kisi pe lga sakte hai sirf button ke liye hi ye event nahi hota....it works on each and every element

//----------------------------------------------
//1. Inline...tarika hai naam nai hai

// function something(){
//   console.log("mai to ji dab gya")
// }

//--------------------------------------
//2nd way

// let btn = document.querySelector("button"); //button select
//button pe onclick event lga diya..
//jan bhi is btn pe click hoga tab ye function trigger ho jayega
// btn.onclick = function(){ //button ko ek function ke barabar kar diya hai...btn(button pe click hoga..toh function trigger ho jayega)
//   console.log("jai hind")
// }

//or
//this way...both are correct

// let btn = document.querySelector("button"); //button select kiya
//  let ash =  function(){ //button ko ek function ke barabar kar diya hai...btn(button pe click hoga..toh function trigger ho jayega)
//              console.log("jai hind")
//            }
// btn.onclick = ash; // button pe click hote hi ash chal jayega

// let btn = document.querySelector("button")
// let ashish = function(){
//   console.log("Heya, what's up ?")
// }
// btn.onclick = ashish;


//------------------------------------
//interview question

// let btn = document.querySelector("button");

// function naacho(){
//   console.log("naatu naatu naatu...")
// }

// function gaao(){
//   console.log("sa re ga ma pa dha ni sa")
// }

//yha overriding ho rahi hai...ek event par 1 kaam...toh pehle naacho pe event chala phir gaaon pe chala toh ultmately gaao chalega
//mtlb ek event pe 1 se jyada kaam nai kara sakta
// btn.onclick = naacho; //jab bhi button pe click ho...toh ye naacho chalega
// btn.onclick = gaao; //jab bhi button pe click ho...toh ye gaao chalega

//---------------------------------------
//multiple kaam/functions karane ho
//3rd way...addEventListner()

//// it accepts 2 args...1st is type(event ka naam) and 2nd(function ka naam) is listener
// btn.addEventListener("click", function(){ // type mtlb kon sa event trigger hua hai... click hua hai na yha...listener(call back function yha pe)..jo tumhe chalana hai 
//   console.log("event chal gya")
// })

//----------------------------------------
//multiple functions trigger ho rha yha par
//naacho function hai hmara...click karne pe naacho
// btn.addEventListener("click", naacho); //addEventListener ek function hai jo 2 argument accept karta hai..1st is type and 2nd is listener
// //gaao function hai hmara...click karne pe gaao
// btn.addEventListener("click", gaao);

// btn.addEventListener("click", naacho)

//-------------------------------------------
//task
//button hai html m...button pe jab click karte hai toh body ka background red ho jayega

// let btn = document.querySelector("button"); //button pe kaam karna hai isliye button select kar liya
// let body = document.querySelector("body"); //task body pe hona hai isliye body select kar liya...body bhi element hai na

// btn.addEventListener("click", function(){ //button pe addEventListener...jab bhi button pe click ho to ye function chal jaye...button pe ek listener lga diya "click"...
//   body.style.backgroundColor = "red"; //function..body ko uthayega and style ki help se backgroundColor change kar dega
// });



let butn = document.querySelector("button")
// let body = document.querySelector("body") //body bhi ek element hai toh body ko select kar liya

//button pe ek listenet lga diya..click..and jaise hi click hoga toh ye function chal jayega
butn.addEventListener("click" , function(){
  // body.style.backgroundColor = "red"
  document.body.style.backgroundColor = "red" //isme body ko select karne ki jarurat nahi hai
})






























