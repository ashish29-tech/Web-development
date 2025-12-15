// //h2 ko hta sakte hai ? Yess
// let h2 = document.querySelector("h2");

// h2.remove();
// //1 baar m 1 remove

//-------------------------------------------
//removeChild

// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");
// let div = document.querySelector("div") //div ko select kiya..

// div.removeChild(h2);
// div.removeChild(h2, h3); //wrong

//removeChild ke liye parent ka hona jaruri hai
//remove ke liye sirf us element ka hona jaruri hai...parent ka hona jaruri nai hai

//----------------------------------------------------
//practice

//can we remove h2 ? yes

let h2 = document.querySelector('h2')

// h2.remove()

//can we remove multiple elements ? No
let h3 = document.querySelector('h3')
// h2.remove() //only 1 remove

//-------------------------------
//remove child()

let div = document.querySelector('div')

div.removeChild(h2) //div ka h2 child remove karna hai

//can we have multiple removers ? No
// div.removeChild(h2, h3); //







