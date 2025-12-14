
//attributes: attributes are extra info that we provide about that particular element to our browser

//manipulating attributes m 2 methods hote hai:
//1. get attributes
//2. set attributes

//index.html m... anchor tag m href is an attribute
//input m...type, name, id ye sare bhi attribute hai

//get attribute -> getter ka kaam kar rha hai
//anchor tag ko select kare and uske andar attribute hai uski value mil jaye
let anchor = document.querySelector('a')

//anchor ke andar jakr uska attribute le sakta hu...
console.log(anchor.getAttribute('href')) //kai sare attributes hai index.html m toh...jo attribute chahiye use specify karna hai...use console kara liya

//waise hi input ko select kar ke use hold kar liya and getAttribute se uska type attribute le liya... 
let inp = document.querySelector("input")

console.log(inp.getAttribute("type"))


















