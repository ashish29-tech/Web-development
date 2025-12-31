

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

// let para = $('p'); 

//----------------------------------------------------------
//Manipulation
//Yha pe direct CSS likhte hai

// para.css('color', 'red'); //css ek method hai...it'll accept 2 things...1st jo property change karni hai...2nd jo value ke sath change karni hai
// para.css('border' , '2px solid black');
// para.css('background-color', 'green'); //we are using kabab case...generally lijh rahe to CSS ki property use karni hoti hai

// //baar-baar para. karna pad rha hai...so better ke liye
// //We'll be using method

//para ke andar css method chalaya usme we are giving an object...
// para.css({ //object to key:value pair hi hote hai
//   color: 'blue',
//   border: '5px solid green',
//   fontSize: '40px',
//   backgroundColor: 'pink' //here we are using camel case..Remember Objects are part of js. And js m use camel case.. kabab case isn't used. Jab bhi object format m use karte hai...
// })

//----------------------------------------------------
//innerText, innerHTML, textContent..etc.....are these things available here in jQuery ?
//accessing text possible ?
//acting like a getter
// console.log(para.text()); //can we see paragraph text. Display none...wala bhi content dikh rha hau... This is brainless...and brainless is textContent

//can it act like setter also ? Yess
// para.text('FILMO KE SARE HERO HAI MERE AAGE ZERO');
// para.text('M kar ke hi manunga..I do not have any option')

//innerHTML ke liye....This works as GETTER AND SETTER AS WELL.
// console.log(para.html());


//-------------------------------------------------------
//Attributes --> attr()
//get and set attributes property hoti hai DOM m...
//yha get and set attribute ki jgah.. attr hai hamare paas

// let inp = $('input'); //select kar liya input ko

//html m input ko type and id di hui hai..
// console.log(inp.attr('type')); //getAttribute ka kaam karega
// console.log(inp.attr('id')); //2nd attribute ye hai 

//setter ka kaam karta hai ?.....Yess...setter m 2 arguments hote hai..1st jis chiz ko set karna hai...2nd jis chiz se set karna hai
// inp.attr('type' , 'color')
// inp.attr('type', 'date')
// inp.attr('type', 'checkbox')


//--------------------------------------
//ul bnai hai usme 3 li hai...
//1 li select karna chahte hai

//selecting first and last element
// let lis = $('ul li') //ul ke andar jo li hai use select karo...isse li select ho gya
// lis.css('color' , 'green') //ye sabpe hi lag rha hai we want ki 1 pe lage

// let lis = $('ul li').first(); //sirf pehla li select ho
// lis.css('color' , 'red')

// let liss = $('ul li').last();
// liss.css('color' , 'green')

//--------------------------------------------------------------
//Input se value chahiye
//.val method acts like getter as well as setter also

//sbse pehle select karna padega
// let inp = $('input');
// console.log(inp.val()); //input select kiya...val naam ka method. Getter ka kaam. Print this console statement in browser console.
// inp.val('mai nahi btaunga'); //setter ka kaam.........ye statement browser console m run krni hai and input m value set ho jayegi..


//-----------------------------------------------------------
//class attributes
//classlist.add , classlist.remove

// let para = $('p');

// para.addClass('a'); //class ko add karna..add kiya 'a' class. Link kiya stylesheet and style.css m a,b,c bna diya.
// para.addClass('a')

// can we add multiple classes as well ?
// para.addClass('a b c'); //Yess

// para.addClass('a' , 'b'); //comma separated not possible. Multiple arguments not possible

//remove 
//  para.removeClass('a')
//  para.removeClass('a b c')
//  para.removeClass('a')// Yess reomove ho jayega
  // para.removeClass('a b')


// // Toggle
// para.toggleClass('a'); //print this in browser console and we'll see a nahi hai toh add ho jayega
// para.toggleClass('a b'); //Ek sath 2 class de sakte hai

// //jo kaam contain karta tha wahi kaam hasClass karega
// //hasClass

// // console.log(para.hasClass('a')) //hogi to true nai toh false
//  para.hasClass('a')








