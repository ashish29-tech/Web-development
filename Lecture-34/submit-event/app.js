
//Another important event...submit
//Ye submit event form pe lagta hai...toh ye submit event tab trigger hoga jab form hoga


// let formEL = document.querySelector("form"); //form select kar liya

// //form ka by default ek nature hota hai...form..get method ke through request leta hai and browser ko refresh/reload kar deta hai...
// formEL.addEventListener("submit" , ()=>{ //form element pe input add kar diya...submit event trigger kar diya..and submit ek call back function accept karta hai
//   console.log("form submitted")
// }); 

//--------------------------------------------------------
//form ka by default ek nature hota hai...form..get method ke through request leta hai and browser ko refresh/reload kar deta hai...
//so iske default nature ko rokna hai
//event object sath ata hai uski help se...event.preventDefault property se.

// let formEL = document.querySelector("form"); //form select kar liya


// formEL.addEventListener("submit" , (event)=>{ //form element pe input add kar diya...submit event trigger kar diya..and submit ek call back function accept karta hai
//   event.preventDefault();//isse refresh nai hoga
//   console.log("form submitted")
// }); 

//---------------------------------------------- 
//form ke bachhe se value kaise uthayenge ?
//form ke andar elements naam ki properties hoti hai

let formEL = document.querySelector("form"); //form select kar liya

formEL.addEventListener("submit" , (event)=>{ //form element pe input add kar diya...submit event trigger kar diya..and submit ek call back function accept karta hai
  event.preventDefault();
  // console.log(formEL)
  console.log(formEL.elements) //isse collection dikhegi which is array.
  console.log(formEL.elements[0]);
  console.log(formEL.elements[1]);
  console.log(formEL.elements[2]);
  console.log(formEL.elements[0].value) //agr input ki bhi value chahiye to
}); 






