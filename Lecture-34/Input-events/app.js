//input field m type karte hai use input kehte hai
//jaise click ek event hai waise hi input bhi hamara event hai
//input field m jab kuch changes(kuch likhte hai, htate hai) karte hai tab trigger hoga input 
//input field hogi tab hi trigger hoga 

// const inpEl = document.querySelector("input")

// inpEl.addEventListener("input" , ()=>{//inpEl pe addEventListener se event add kar diya...2 argument accept karta hai..1st event kon sa hai...2nd event hone pe kaam kon sa karna hai
//   console.log("input chal gya...") //jab input trigger ho ye chal jaye
// }); 

//--------------------------------------------
// input field m kuch type karte hai to input evnet trigger hoga...
//we want us field ki value hamare paas aa jaye...for that we'll use .value property
//.value property works only on inputs...not for texts
//jab bhi event triggger karate hai, toh us event ka pura ka pura instance hame milta hai
//jis elelment pe hua hai uska pura instance mil jata hai...inside the function

// const inpEl = document.querySelector("input") //input select kiya

// inpEl.addEventListener("input" , (event)=>{ //input element pe event lagana hai. Jab bhi event trigger hota hai..ye function apne andar..ek object bhej deta hai jise kisi bhi name se catch kar sakte hai..so event ek object hai yha
//   // console.log(event);
//   // console.log(event.target);// Us object m kai properties hoti hai..one is target. target is jis bhi element pe event trigger ho rha
//   console.log(event.target.value); //value is only for inputs not for texts(h1,h2 etc). Event kon se target pe trigger ho rha hai uski value..
//   console.log(event.data);//shows last entered text
// })




