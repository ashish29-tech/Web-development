//input field m type karte hai use input kehte hai
//jaise click ek event hai waise hi input bhi hamara event hai
//input field m jab kuch changes(kuch likhte hai, htate hai) karte hai tab trigger/fire hoga input 
//input field hogi tab hi trigger hoga 

// const inpEl = document.querySelector("input")

// inpEl.addEventListener("input" , ()=>{//inpEl pe addEventListener se event add kar diya...2 argument accept karta hai..1st event kon sa hai...2nd event hone pe kaam kon sa karna hai
//   console.log("input chal gya...") //jab input trigger ho ye chal jaye
// }); 

// const inpEl = document.querySelector("input")

// inpEl.addEventListener("input", function(){
//   console.log("input cha; gya")
// })


//--------------------------------------------
// input field m kuch type karte hai to input event trigger hoga...har word type karne pe
//we want us field ki value hamare paas aa jaye...for that we'll use .value(dot value) property
//.value property works only on inputs...not for texts
//jab bhi event triggger karate hai, toh us event ka pura ka pura instance hame milta hai
//jis element pe hua hai uska pura instance(uske bare m...puri info) mil jata hai...inside the function

const inpEl = document.querySelector("input") //input select kiya

//event ki jgah kuch bhi name aa sakta hai naam
// inpEl.addEventListener("input" , (event)=>{ //input element pe event lagana hai. Jab bhi event trigger hota hai..ye function apne andar..ek object bhej deta hai jise kisi bhi name se catch kar sakte hai..so event ek object hai yha
//   // console.log(event);
//   // console.log(event.target);// Us object m kai properties hoti hai..one is target. target is jis bhi element pe event trigger ho rha
//   console.log(event.target.value); //value is only for inputs not for texts(h1,h2 etc). Event kon se target pe trigger ho rha hai uski value..
//   console.log(event.data);//shows last entered text
// })


// inpEl.addEventListener("input" , function(event){ //event object...event ek object bhej deta hai jise kisi bhi name se catch kar sakte hai
//   // console.log(event); //browser m check karenge...kuch bhi type karenge toh pura ka pura object mil jata hai...expand karenge toh ayega...target hoga usme. 
//   //jo event ka object hai...toh ham event.target kar sakte hai
//   //event.target refers to the element on which the event actually occurred....by chatGPT
//   //target is jis bhi element pe hamara event trigger hua hai
//   console.log(event.target); //browser m kuch bhi type karenge box m toh input milega...toh kya input ke andar se uski value utha sakte hai ? Yess
//   // console.log(event.target.value)//event kon se target...pe trigger ho raha hai uski value chahiye hame
//   // console.log(event.data)
// })






















