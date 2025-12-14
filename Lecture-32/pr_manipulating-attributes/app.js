
//attributes: attributes are extra info that we provide about that particular element to our browser

//manipulating attributes m 2 methods hote hai:
//1. get attributes
//2. set attributes

//index.html m... anchor tag m href is an attribute
//input m...type, name, id ye sare bhi attribute hai

//get attribute -> getter ka kaam kar rha hai
//anchor tag ko select kare and uske andar attribute hai uski value mil jaye
// let anchor = document.querySelector('a')

//anchor ke andar jakr uska attribute le sakta hu...
// console.log(anchor.getAttribute('href')) //kai sare attributes hai index.html m toh...jo attribute chahiye use specify karna hai...use console kara liya

//waise hi input ko select kar ke use hold kar liya and getAttribute se uska type attribute le liya... 
// let inp = document.querySelector("input")

// console.log(inp.getAttribute("type"))

//---------------------------------------------------------
//value nikal ke change karni hai toh setter ka kaam
//setAttribute karega

// let anchor = document.querySelector('a');

// //setAttributes accepts 2 args. 1st jisko change karna hai... 2nd jis value se change karna hai
// anchor.setAttribute('href' , 'http://facebook.com') //pehle href se google khul rha tha ab fb khulega

// let inp = document.querySelector("input");

// inp.setAttribute("type" ,"color") //jha text fill kar sakte the ab wha color aa jayega
// inp.setAttribute("type" ,"date")  //now it changes to date
// inp.setAttribute("type" ,"checkbox") 











