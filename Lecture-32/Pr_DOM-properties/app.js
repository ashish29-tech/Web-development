
let p = document.querySelector("p");

//Value mil rahi hai isliye getter hai teeno.

//innerText getter and setter dono ka kaam kar rha hai
//kisi bhi element m se content dekhna hai toh innerText property ka use karte hai
//innerText brainful hota hai...this can read css..style diya html m toh use isne padh liya. 
// console.log(p.innerText)

//Ye textContent bhi getter and setter ka kaam kar rha hai
//Ye tettContent bhi text de rha hai...textContent brainless hota hai...unaware of the styling
// console.log(p.textContent)

//Ye innerHTML bhi getter and setter ka kaam kar rha hai
//innerHTML....this comes with the tag and styling itself. This is also brainful..read css + shows tags bhi
// console.log(p.innerHTML)


//---------------------------------
//can they act like a setter ? Yess
//setter....try these in browser console
console.log(p.innerText)
p.innerText = "Hello I am powerful" //try this in browser console

p.textContent = "Hello I am powerful" 

p.innerHTML = "Hello I <h1>am</h1> powerful" 








