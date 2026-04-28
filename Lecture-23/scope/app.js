
// JavaScript uses lexical scoping, meaning a function can access variables defined in its outer scope.
// var b = 20;
// function a(){
  
//   console.log(b);

// }
// a();

// -----------------------------------------------------
//  it would print 10, because the local b would override the global one.
// var b = 20;
// function a() {
//   var b = 10;
//   console.log(b);
// }

// a();


// var a = 30;
// function c(){
//   console.log(a);
// }
// c();

//-------------------------
// Key concept: Lexical Scoping + Closure
// inner is defined inside outer, so it remembers the environment where it was created.
// This is a closure: inner has access to b even though b belongs to outer.
// function outer(){
//   var b = 10;

//   inner();
//   function inner(){
//     console.log(b);
    
//   }
// }
// outer();

//-----------------------------------------

function outer(){
  var b = 10;

  inner();
  function inner(){
    var b = 1000; //The b inside inner is a separate variable (it shadows the outer one).
    console.log(b);
  }
  console.log(b);
}

outer();

//---------------------------------------

// function outer(){
//   var b = 10;

  // inner();
  // function inner()
//   {
//     var b = 1000;
//     console.log(b);
//   }
//   console.log(b);
// }

// outer();











