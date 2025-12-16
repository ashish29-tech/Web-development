
let inpEl= document.querySelector("input");
let btnEl= document.querySelector("button");
let list= document.querySelector("#list"); //list ko id de di

//Jab add pe click kare to add ho jaye notes..
//so btnEl pe event trigger hoga

btnEl.addEventListener("click" , function(e){ //jab bhi event trigger hota hai toh event/e/kuchbhi naam ka object ata hai
   let noteText = inpEl.value; //input element ki value chahiye hogi


   //unordered list m list items hote hai
   let li = document.createElement("li"); //li create ho gya..but empty hai

   li.innerText = noteText; //ham chahte hai li ke andar noteText ki value aa jaye

   //ab text ko append karna hai list ke andar
   list.appendChild(li); //list karna hai li iten ko. 

   //add karne ke baad input khali hona chahiye...input mil rha hai...inpEl.value se
   inpEl.value = ""; //is value ko empty kar diya...ye value getter/setter dono ka kaam karti hai

   //jab kaam ho jaye to uspe click kare and wo remove ho jaye
   li.addEventListener("click" , (e)=>{ //jab li pe click ho to addEventListener. Yha define kiya hai...trigger nai kiya...trigger to click karne pe hoga.
  // li.remove(); //direct remove
  e.target.remove(); //indirect remove
}) 
})






