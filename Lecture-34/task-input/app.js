//Task
//1 input hai...usme jo bhi likh rahe hai...niche 1 h1 hai..usme wo value manipualate mtlb jo likh rahe hai wo chiz reflect honi chahiye

// let h1 = document.querySelector("h1");
// let inpEl = document.querySelector("input");


// //event tab trigger karna hai jab-jab mere elements m changes ho
// inpEl.addEventListener("input", (event)=>{ //add kar diya event listener...input event...phir callback fn chala diya..we have read jab bhi event trigger hota hai usme event naam ka obejct ata hai..jo ham function ke andar le lete hai
//   h1.innerText = event.target.value; //h1 ki value ko change karna hai to h1.innerText...bakio ka text chaiye hota hai to innerHTML, textContent. Input event se ata hai
// })

//------------------------------------------------------------

let inpEl = document.querySelector("input")
let h1 = document.querySelector("h1");

inpEl.addEventListener("input" , function(event){ //cb function chala diya. Event trigger hua toh 1 object aya use Event naam diya and use is function m rakh liya
  // console.log(event)
  // h1.innerText = event.target.value //❌ (avoid mostly) Sirf visible text set karta hai...CSS (display, visibility) ko consider karta hai
  // h1.textContent = event.target.value //✅ (RECOMMENDED)....Plain text set karta hai....HTML tags ko text ki tarah treat karta hai
  // h1.innerHTML = event.target.value //❌❌ Text ko HTML ke tarah parse karta hai
})





































