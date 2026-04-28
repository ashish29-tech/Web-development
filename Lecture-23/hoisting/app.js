
// b(); // hoisting ? Yess..function bhi hoist ho rha hai
// console.log(a); // Hoisting ? Yes

// var a = 30;
// function b(){
//   console.log(c); // Hoisting ? Yes
//   var c = 100;
// }
// console.log(b());

//Hoisting = Accessing a veriable/function before it's declaration.

//-------------------------------------------------

// let a = 10;
// console.log(a); //No hoisiting

// function b() {
//   console.log("aa dekhe zara kisme kitna hai dum");
  
// }

// b(); // No hoisting


//------------------------------------

// let a; //Declare. let a= undefined; No value defined means by default Undefined
// console.log(a); //No hoisting
// a= 100; //reinitialise
// function b() {
//   console.log("aa dekhe zara kisme kitna hai dum");
  
// }

// b(); // No hoisting

//-----------------------------------


// console.log(sam);
// a();

// var sam = 100;
// function a(){
//   console.log("insisde a"); 
// }
// console.log(sam);

//--------------------------------------

// console.log(sam);
// a();

// let sam = 100; // declarative change hua hai..rest upar jaisa hai
// function a(){
//   console.log("insisde a");
  
// }
// console.log(sam);


//---------------------

// var a;
// console.log(); //No hoisting

// console.log();
// var a; //Hoisting

// console.log(a); //undefined
// var a;
// a = 1000;
// console.log(a); //1000

// console.log(a); //error
// let a; //let allows hoisting but DTZ(Dead Temporal Zone) hoisting...so error
// a = 1000;
// console.log(a); //upar error ate hi aage nai jayega cuz Dynamically Typed...code runs line by line


// DTZ(Dead Temporal Zone) or TDZ(Temporal Dead Zone)...both are same thing









