
//Another important event...submit
//Ye submit event...form pe lagta hai...toh ye submit event tab trigger hoga jab form hoga

//form k jab submit karenge toh hi submit event trigger hoga...

// let formEL = document.querySelector("form"); //form select kar liya

//kon sa event trigger hoga ? Jaise click hota hai, input hota hai waise hi submit event hota hai
// //form ka by default ek nature hota hai...form..get method ke through request leta hai and browser ko refresh/reload kar deta hai...
//Jab id and password dal ke submit kar rahe the toh page refresh ho rha tha...we didn't want hamara page refresh ho..cuz we wanted the data...toh iske default nature ko rokna hpga
// formEL.addEventListener("submit" , ()=>{ //form element pe input add kar diya...submit event trigger kar diya..and submit ek call back function accept karta hai
//   console.log("form submitted")
// }); 

// formEL.addEventListener("submit" , ()=>{ //acepts a cb fun
//   console.log("form submitted")
// })

//--------------------------------------------------------
//form pe kitne methods hote hai ? 2. hote hai... get and post
//by default nature of form is get
//form ka by default ek nature hota hai...form..get method ke through request leta hai and browser ko refresh/reload kar deta hai...
//action kya hota hai ? Form submit hoke kha jayega..kis path pe jayega
//so iske default nature ko rokna hai
//event object sath ata hai uski help se...event.preventDefault property se.

// let formEL = document.querySelector("form"); //form select kar liya


// formEL.addEventListener("submit" , (event)=>{ //form element pe input add kar diya...submit event trigger kar diya..and submit ek call back function accept karta hai
//   event.preventDefault();//isse refresh nai hoga
//   console.log("form submitted")
// }); 

// formEL.addEventListener("submit" , (event)=>{ //jab bhi event trigger hota hai toh sath m event naam ka object uske sath ata hai..
//   event.preventDefault(); //property hoti hai... preventDefault. Isse refresh nahi hoga...and ab dikhega... form submitted
//   console.log("form submitted")
// })


//---------------------------------------------- 
//form ke bachhe se value kaise uthayenge ?
//form ke andar elements naam ki properties hoti hai

let formEL = document.querySelector("form"); //form select kar liya

//form ke andar property hoti hai elements...
formEL.addEventListener("submit" , (event)=>{ //form element pe input add kar diya...submit event trigger kar diya..and submit ek call back function accept karta hai
  event.preventDefault();
  console.log(formEL) //data fill kar ke check karenge console m form aa jayega...usme
  // console.log(formEL.elements) //isse collection dikhegi which is array. Toh isko 0,1,2,3 se access kar sakte hai
  // console.log(formEL.elements[0]); //pura ka pura input milega
  // console.log(formEL.elements[1]);
  // console.log(formEL.elements[2]);
  
  console.log(formEL.elements[0].value) //agr input ki bhi value chahiye to
  console.log(formEL.elements[1].value) //
}); 






