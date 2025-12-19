
// let inpEl= document.querySelector("input");
// let btnEl= document.querySelector("button");
// let list= document.querySelector("#list"); //list ko id de di


// //Jab add pe click kare to add ho jaye notes...
// //so btnEl pe event trigger hoga

// btnEl.addEventListener("click" , function(e){ //jab bhi event trigger hota hai toh event/e/kuchbhi naam ka object ata hai
//    let noteText = inpEl.value; //input element ki value chahiye hogi


//    //unordered list m list items hote hai
//    let li = document.createElement("li"); //li create ho gya..but empty hai

//    li.innerText = noteText; //ham chahte hai li ke andar noteText ki value aa jaye

//    //ab text ko append karna hai list ke andar
//    list.appendChild(li); //list karna hai li iten ko. 

//    //add karne ke baad input khali hona chahiye...input mil rha hai...inpEl.value se
//    inpEl.value = ""; //is value ko empty kar diya...ye value getter/setter dono ka kaam karti hai

//    //jab kaam ho jaye to uspe click kare and wo remove ho jaye
//    li.addEventListener("click" , (e)=>{ //jab li pe click ho to addEventListener. Yha define kiya hai...trigger nai kiya...trigger to click karne pe hoga.
//   // li.remove(); //direct remove
//   e.target.remove(); //indirect remove
// }) 
// })

//------------------------------------------------------------------------------------------------
//practice

//ul bna diya index.html m...
//isme jo bhi elements ayenge...unko list item m create karna hai...append karna hai. 
//Kaise karenge ?
//input, button, ul ko slect karna padega



let inpEl = document.querySelector("input")
let btnEl = document.querySelector("button")
let list = document.querySelector("#list") //unordered list(ul) ko select kiya..use list id thi index.html m...toh # use kar ke select kar liya

//Look at the browser live server....
//jab bhi add button pe click kare tabhi niche list append ho jayegi
//that means hmara event button Element pe trigger hoga.

//button pe addEventListener add kar diya click...click event add kar diya...and we know jab bhi event trigger hota hai toh ek event ka object ata hai..use e naam se catch kar liya
btnEl.addEventListener("click", function(e){ //li ka scope isi scope tak hai iske bhr nahi
  //jaise hi button click ho jayega toh input ke andar se value chahiye
  //event button pe trigger hua hai..and value hame inpEl ki chahiye...toh e.target nahi ayega
  let noteText = inpEl.value  //inpEl ki value...use noteText var m store kar liya

  //ul m...list items hote hai. Toh we have to create it
  let li = document.createElement('li') //crate kya ho rha hai ? li. Use var li m store kar liya.

  //li toh empty hai. We want hamare li m noteText wali value aa jaye..
  li.innerText = noteText; //isse text aa jayega li m

  //ab text ko append karna hai list ke andar...
  list.appendChild(li); //list m appendChild...kisko karna hai ? li ko. Now whatever we write inside inputbox it will be appended below in li. But jab bhi add karte hai toh input khali ho jata hai na ? input mil raha hai inpEl(input ke element se)

  //toh inpEl ko empty bhi toh set kar sakte hai...inpEl ki value ko set kar ke use empty kar diya.
  inpEl.value = "" //ye getter and setter dono ka kaam karti hai

  //Jab bhi kisi ek list item pe click karte hai toh kaam ho jata hai toh delete ho jata hai
  //li pe kaam karenge remove ke liya

  //li pe jab addEventListener lgaya...click...
  li.addEventListener('click', function(){ //li ka scope upar wale function tak hi hai...isliye ye event upar wale block m hi karna padega
  li.remove();
})
})

// ❌
// //li pe jab addEventListener lgaya...click...
// li.addEventListener('click', function(){ //li ka scope upar wale function tak hi hai...isliye ye event upar wale block m hi karna padega
//   li.remove();
// })





















