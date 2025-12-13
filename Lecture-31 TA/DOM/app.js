
//DOM
// Document hota hai yha HTML m jitna bhi code likha rehta hai. 
//Object hot hai JS. Everything in Js is Object.
//Modelling...means change

//DOM: HTML + change with the help of Js DOM ki help se ham HTML ko change karte hai.

//We have 5 types of selectors that helps..in selecting object

//HTML ka code browser ke pass jata hai..and Browser returns a DOM/Tree

// console.log(document); //document hame ek object return karta hai. And this contains pura HTML ka code

//Selectors: Help in changing HTML
// 1. getElementById //sirf ek element return kar ke dega
// 2. getElementByClass
// 3. getElementByTagName.....tagName contains h1, div...means html m jitne bhi elements hote hai HTML m sare tag contain karta hai
// 4. querySelector
// 5. querySelectorAll

//----------------------------------------------------------
//DOM purpose...runtime pe dynamically apni website ko kaise chnage kar sakte hai

// document contains all elements...ye isme hote hai method...and kisi bhi object m method ko access karne ke liye . operator ke through

// console.log(document.getElementsByTagName("h1")); //ye collection return kar ke dega..collection means array return kar rha. And array m functionality hoti hai indexing ki

// let h1arr = document.getElementsByTagName("h1");
// console.log(h1arr[0]); //first element select karna hai to 0th element ko select karenge..cuz 0 se indexing goti hai
// console.log(h1arr[1]);
// console.log(h1arr[2]);
// console.log(h1arr[4]);

// What if we have 1000s or lakhs element ? for that we'll use looping

// for (let item of h1arr){
//   console.log(item)
//   item.style.color = "red"; //string ki form m
//   item.style.border = "5px solid red"
// }

//sirf ek hi element select karna ho...to normal loop

// for(let i=0; i<h1arr.length; i++){
//   if(i==0){
//     h1arr[i].style.color ="red"; 
//     h1arr[i].style.border= "5px solid";
//   }
// }

//---------------------------------------
//id ke through select 

// let idElement = document.getElementById('ash');
// // console.log(idElement);
// idElement.style.color = "green"
//1 HTML m same name ki 1 se jyada id nahi de sakte....agr de bhi di to sirf 1st hi elemnt return kar ke dega


//------------------------
//getElementsByClassName...ye bhi same tagName ki trah chalega isme bhi HTML collection return mil rha
//HTML m same name ki ek se jyada classes ho sakti hai

// let classDiv = document.getElementsByClassName("div1")
// // console.log(classDiv); //collection return kar ke dega...array

// //manipulate kar ke dekhte hai
// classDiv[0].style.color = "green";



// for(let classitem of classDiv){
//   // console.log(classitem);
//   classitem.style.color = "blue";
//   classitem.style.border = "5px solid orange"
// }


//---------------------------------------------------
//querySelector

// let k = document.querySelector("#ash");
// console.log(k)

// let k = document.querySelector(".div1"); //class select karna hai to .operator ke through karenge
// k.style.color = "blue";
// let k1 = document.querySelectorAll(".div1");
// k1[3].style.color = 'red';
// k1[4].style.color = 'blue';

// console.log(k) // sare element de dega but 1st element hi dega
// console.log(k1); //collection/array return kar ke dega

//--------------------------------------------------------------------------------------------------------------------

//Practice

//browser..doceument return kar ke de raha hai..jo sare elements contain kar rah hai jo hamare HTML m hai
//Tree structure like form m return karta hai. Object ke form m return kar rha hai...jiska name document hai.
// console.log(document) //document hame ek object return karta hai..jisme pura html ka code hai


//Selectors hote hai 5 types ke that helps in changing HTML

// document.getElementById("id")
// document.getElementsByClassName("class")
// document.getElementsByTagName("p") .....h1, div, html elements..

// document.querySelector("selector")
// document.querySelectorAll("selector")

//-----------------------------------------------------------
//TagName ke through manipulate
//document ke andar hote hai method...to use method .(dot) lga ke 
// document.getElementByTagName("h1") //kuch nai ayega cuz console nahi karaya

// console.log(document.getElementsByTagName("h1")) //ek collection return kar ke dega array and array m functionality hoti hai indexing ki. h1 tag ke jitne bhi element honge sab de dega

// let h1arr = (document.getElementsByTagName("h1")) //store kara liya...TagName collection/array return kar ke deta hai
// console.log(h1arr[0]) //h1arr ka oth element
// console.log(h1arr[1]) //h1arr ka 1st element
// console.log(h1arr[2]) //h1arr ka 2nd element

//There can be multiple h1 tags...so we'll use loop
// for(let item of h1arr){
//   // console.log(item)
//   item.style.color = "red"; //strings ki form m dena hai. 
//   item.style.border = "2px solid black"
// }

// 1 element ho toh normal loop
// for(let i=0; i<h1arr.length; i++){
//   if(i == 0){
//     h1arr[i].style.color = "blue"; //h1arr pe apply karna hai and i = 0 hoga tab apply karna hai..uspe color apply kar diya
//     h1arr[i].style.border = "2px solid black" //
//   }
// }

//----------------------------------------------------------
//Now let's do with id.. getElementById
//same id de sakte hai html m alag-alag elements ko ?
// Can you give the same id to different HTML elements?
// Technically YES, but it is NOT valid HTML.
// And if you do it, the DOM will only return the first element with that id.
//sirf ek element return kar ke deta hai.
//Jitne bhi element ko id di hui hai..unhe select karne m help karta hai
// let idElement = document.getElementById('ash') //id jo di thi usse select kar liya and var m store kara diya
// // console.log(idElement) //id se related jo element hoga wo ajayega
// idElement.style.color = "green";


///----------------------------------------------------
//getElementByClassName
//same name ki ek se jyada classes ho sakti hai ? yes. Isliye yha collection return hoga.
// let classDiv = document.getElementsByClassName("div1");
// // console.log(classDiv)

// classDiv[0].style.color = "purple" //0th element pe apply hua
// //We can have multiple elements so we'll use looop

// for(let Classitem of classDiv){
//   // console.log(Classitem)
//   Classitem.style.color = "orange";
//   Classitem.style.border = "2px solid black"
// }

//-----------------------------------------------------
//querySelector...isme id ke liye "#ahdshd"...and class ke liye ".div1"
//2 element ko same id dedi..html m toh yha 1 hi element milega..1st wala
// let k = document.querySelector("#ash")
// let k = document.querySelector(".div1") //print sare hoge...but return sirf 1 element hoga
// k.style.color = "blue"
// console.log(k);
// let k1 = document.querySelectorAll(".div1") 
// // k1.style.color = "blue"  //error dega..cuz ye collection return kar ke de rha na ki element
// k1[3].style.color = "yellow" 
// console.log(k1) //ye sare return kar ke de dega...collection/array return kar ke dega





