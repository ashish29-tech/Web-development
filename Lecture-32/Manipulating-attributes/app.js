
//What are attributes ?
//Attributes in HTML are special key-value pairs added to HTML tags to provide extra information about an element.
// They help define the behavior, appearance, or properties of an HTML element.

//Manipulating attributes m 2 attributes hote hai...ye 2 properties hoti hai
//1. getAttribute()
//2. setAttribute()


//-----------------------------------------------
//1. getAttribute()....ye gettetr ka kaam kar rha hai
//anchor tag ko select kare and uske andar ki value mil jaye

let anchor = document.querySelector("a");

// console.log(anchor.getAttribute("href")); //anchor ke andar jakr uska attribute...jo chahiye wo specify karna padta hai

let inp = document.querySelector("input"); //input ko select kiya
// console.log(inp.getAttribute("type")); //getAttribute se uska type nikal liya


//---------------------------------------
// 2. setAttribute()..ye setter ka kaam karta hai

anchor.setAttribute("href", "http://instagram.com");//accepts 2 arguments...1st will be jisko change karna hai..2nd will be jis value se change karna hai

inp.setAttribute("type", "color"); //
inp.setAttribute("type", "date");


//---------------------------------------------
// setTimeout() --> it's a web API...delay provide karne ka kaam karti hai
// setInterval() --> repeat karne ke kaam ata hai after aparticular interval of time


//setInterval()... returns an ID. setInterval ko rokne ke liye clear method ka use karenge..



