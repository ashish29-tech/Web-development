
// var → function-scoped
// let → block-scoped and safer in modern JavaScript
// var b = 20; //global variable b bna diya
// let b = 20;

// function ash(){
//   console.log(b);
// }

// ash(); //20...functions can access variables from outer (parent) scopes through scope chain and lexical scoping.


// if (true) {
//   var x = 10;
//   let y = 20;
// }

// console.log(x); // 10
// console.log(y); // Error...y is block-scoped, so it cannot be accessed outside the block.

//--------------------------------------------
// nested functions and lexical scope (closure)
// function bahar(){
//   var v = 10;

//   andar(); //call kar liya
//   function andar(){
//   console.log(v); //Inner functions can access variables of their outer function. So andar() can use v.This is called Lexical Scope.
//   }
// }
// bahar();

//------------------------
//Output= Undefined...Because var b is hoisted.
// function outer(){

//   inner();
//   function inner(){
//     console.log(b); 
//   }
//   var b = 1000;
//   // let b = 1000; //gives an error..Because let is hoisted differently and stays in the Temporal Dead Zone (TDZ) until initialization.
// }

// outer();


//-----------------------------------

function outer(){
  var a = 10;

  inner(); 
  function inner(){
    console.log(a);
    var a = 30;
    console.log(a);
  }
  var a = 1000;
}
// JS global scope me a dhundta hai.
  console.log(a); //global scope me chal raha hai, aur global me a exist hi nahi karta. Isliye program wahi ruk jaata hai.
  outer();

//------------------------------
//error ayega cuz a to kahi aur define hi nai hai
// function outer(){
//   var a = 10;
//   console.log(a);

//   function inner(){
//     console.log(a);
//     var a = 200;
//     console.log(a); 
//   }
//   console.log(a); 
// }
// //  console.log(a); //error ayega cuz a to kahi aur define hi nai hai

// outer();

//------------------------------------------
//inner function call hi nai hua to 4 output to aa hi nai sakte
// function outer(){
//   var a = 10;
//   console.log(a); //10 ayega

//   function inner(){
//     console.log(a);
//     var a = 200;
//     console.log(a); 
//   }
//   console.log(a); //10 ayega
// }

// outer();

//----------------------------------------------------

// function outer(){
//   var a = 10;
//   console.log(a); //10 output

//   inner(); //inner call hua to new EC bna...means abhi Local Memory m kuch bhi nai hai
//   function inner(){
//     console.log(a); //a ke run hone se pehle use kar rhe hai...var ki hoisting ho rahi hai isliye undefined ayega
//     var a = 200; //a ko value allot hui hai
//     console.log(a); //200 output
//   }
//   console.log(a); //var ka functional scope hota hai...function gya to var bhi gya.Yha a ki val main wale m se milegi..10
// }

// outer();

//-------------------------------------

// function outer(){

//   inner();
//   var a = 10;
//   console.log(a); 

//   function inner(){
//     console.log(a);
//     var a = 200; //
//     console.log(a);
//   }
//   console.log(a);
// }
// //  console.log(a);
// outer();


//------------------------------------

// function outer(){

//   var a = 10;
//   console.log(a); //

//   //var ka functional scope hota hai. And yha pe koi function nai tha...It's a simple block.
//   if(true){
//     console.log(a);
//     var a = 200; //
//     console.log(a);
//   }
//   console.log(a);
// }
// outer();

//-------------------------------------

// function outer(){

//   let a = 10;
//   console.log(a);
//   if(true){
//     console.log(a);// hoisting ho rahi hai. Let ke case m hoisting....DTZ m hoti hai. Usko acces nai akrne deta.
//     let a = 200; // let ko redeclare nai kar sakte. 
//     console.log(a);
//   }
//   console.log(a);
// }
// outer();

//-------------------------

// function outer(){

//   let a = 10;
//   console.log(a);
//   if(true){
//     console.log(a); //Yha Loc Memo m a hai ? nai hai to upar parent ke pass jayega.
//     a = 200; //Parent ko override kar diya
//     console.log(a);
//   }
//   console.log(a);
// }
// outer();

//--------------------------------------

// function outer(){

//   let a = 10;
//   console.log(a); //

//   inner();
//   function inner(){
//     let a = 200; 
//     console.log(a);
//   }
//   console.log(a);
// }

// outer();

//-----------------------------------

// function outer(){

//   let a = 10;
//   console.log(a); //

//   inner();
//   function inner(){
//     var a = 200; 
//     console.log(a);
//   }
//   console.log(a);
// }

// outer();

//------------------------------------------------

// function outer(){

//   let a = 10;
//   console.log(a); //

//   {  //let ka block scope hota hai and it's a block
//     let a = 200; 
//     console.log(a);
//   }
//   console.log(a);
// }

// outer();
