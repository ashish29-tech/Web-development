

// console.log($); // $ is equal to jQuery


//DOM m first rule btaya tha sbse pehle select karna hota hai
//Yha bhi yahi karenge...
//We have 5 types of selectors in vanilla js(jo ab tak karte aa rahe hai)
//but now we have only 1 way of selection
// $(); //This is how we select our element

// let h1 = $('h1'); // document.querySelectorAll('h1') ka kaam kar rha hai...jitne bhi h1 hai sabko select kar lega
// console.log(h1); //we'll get all the elements which have h1 as their element
// let para = $('p'); //It'll select paragraph


// let h1 = $('h1');

// //ID
// let idd = $('#ash');

// //Class
// let kilaas = $('.ashish'); //ashish naam ki class hai to .ashish

let para = $('p'); 

//----------------------------------------------------------
//Manipulation
//Yha pe direct CSS likhte hai

para.css('color', 'red'); //css ek method hai...it'll accept 2 things...1st jo property change karni hai...2nd jo value ke sath change karni hai
para.css('border' , '2px solid black');
para.css('background-color', 'green'); //we are using kabab case...generally lijh rahe to CSS ki property use karni hoti hai

// //baar-baar para. karna pad rha hai...so better ke liye
// //We'll be using method

//para ke andar css method chalaya usme we are giving an object...
para.css({ //object to key:value pair hi hote hai
  color: 'blue',
  border: '5px solid green',
  fontSize: '40px',
  backgroundColor: 'pink' //here we are using camel case..Remember Objects are part of js. And js m use camel case.. kabab case isn't used. Jab bhi object format m use karte hai...
})






