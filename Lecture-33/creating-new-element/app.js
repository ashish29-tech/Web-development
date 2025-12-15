

//can we create new element with the help of DOM ?
// Yes


// let section = document.querySelector("section") //section select kar liya



// let h2 = document.createElement("h2"); //document ke andar hi create hoga...createElement method se. h2 bna diya but isme koi content nai hai.
// let p  = document.createElement("p");

// h2.innerText = "ashish" //create kar diya but DOM ke andar show bhi to karna hai
// p.innerText = "galori bina chutney kaise bani"


//DOM m show karne ke liye
//appendChild

// section.appendChild(h2); //section ke andar h2 child ko append kar do
// section.appendChild(h2, p); //appendChild multiple chize append nai karne deti
// section.appendChild("h1"); //wrong...string not allowed

//------------------------------------------
//multiple chize, string append karne ke liye append method
//append()....method

// section.append(h2); //append ho gya
// section.append(h2, p);//ab dono ya multiple chize append ho sakti hai
// section.append("hello from chamgadar");// string bhi append ho jati hai
// section.append("<h1>hello from chamgadar</h1>");//tag ko string smjh lega...so tag wali chize nai hogi


//both appendChild() and append()...last m jakr add karte hai

//-----------------------------------------------------
//startng m add karne ke liye
//Prepend...s

// section.prepend(`<h1>hello from chamgadar</h1>`); //ye pehle ayega
// section.prepend(p); //paragraph prepend hoga ? No....ek chiz ya to append ya prepend...dono chize ek sath nahi ho sakti
// section.prepend(p, h2);// multiple chize prepend ? No


//------------------------------------------------------

// section.before(h2);
// section.after(h2);


//---------------------------------------------------------------------------------------------------
//Practice
//can we create new element with the help of DOM ?
// Yes... with the help of createElement..and arg m pass kar diya jo bnana hai
let h2 = document.createElement('h2'); //h2 create karna hai
let p = document.createElement('p')

//h2 m content add karne ke liye
h2.innerText = 'ashish' //innerText ki help se content add kar diya h2 m... but ye DOM m show bhi to karna hai
p.innerText = "lagan lagi tumse man ki lagan..."

//create kar diya and now DOM m add karne ke liye...2 method hote hai
//1. appendChild()
//2. append()

//khali section bnaya index.html m and use select kara
 
let section = document.querySelector('section')

//we want h2 hamara section ke andar aye
//section ke andar appendChild kar do...h2 ko. bachhe ko append kar liya
// section.appendChild(h2)
// section.appendChild(h2, p) //multiple child append nai karne deti appendChild..sirf single child append hota hai
// section.appendChild("hi mera naam hai ashish") //string nahi de sakte

//--------------------------------------------------
//append().. for multiple

// section.append(h2)
// section.append(h2, p) //more than 1 things can be added at a time
// section.append("Hi ashish") //yes we can append 
// section.append("<h1>Hi ashish</h1>") //tag wali chiz is wrong

//Both append() amd appendChild()...last m jakr add karte hai.

//--------------------------------------------------------

//prepend...starting m add karane ke liye. multiple, string...allow karta hai

// section.prepend("Hi ashish") //start m add kar diya
// section.prepend(p) //can we append and prepend paragraph at the same time ? N0. 
// section.prepend(h2) //ye pehle ayega cuz prepend top m add karta hai
// section.prepend(p, h2) //can we prepend multiple things ? Yes

//--------------------------------------------
//before and after bhi hote hai hamare paas

// section.before(h2) //section se pehle
// section.after(h2) //section ke baad
















