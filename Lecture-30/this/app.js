
//this keyword is imp. for co. that pays above 15lpa
// 5 types
// 1. Regular function invocation/calling
// 2. method function
// 3. constructor invocation
// 4. indirect calling
// 5. arrow function

//---------------------------------
//Regular function invocation

//as we have already studied jab bhi 1 function ko 1 object ke andar lkhte hai to use method kehte hai.
//and jab this ka 
// let obj = {
//   number: 200,
//   fun: function(){ //this function is called a method 
//     console.log(this) //method ke andar this keyword ka use hota hai to this obj(object) ko point karta hai
//   }
// }

//1. this ketword exist even without obj
//people does this mistake thinking this keyword is made for object and not for function
// this always depends on how it is being called
// function fn(){
//   console.log(this)
// }

// fn();// yha direct function calling/invocation hai..matlab sidha call horha hai kisi pe depend nahi hai that means regular function calling
// in case of regular function calling --> "this" alwys points to the window object
// window = means global object
//console m.... console.log('ashish'), window.console.log('ashish')....this window is a global object.
//jab bhi js ka code execute hota hai GEC banta hai to sath m global object(jiske pass har chix ka access hota hai..browser ka) bhi banta hai
//in case of browser jo global object banta hai use window kehte hai...means browser ke case m uska naam window hai. window by default ek object hai..
//window.console.log()...yha window likhna compulspry nahi hota hai..wo by default present hoat hai
//ex:
// function ashish(){
//   console.log(this)
// }

// ashish(); //direct function invocation hai to window ko point karega

//----------------------------------------------------

//2. Method invocation

// let obj = {
//   number : 200,
//   fun : function(){
//     console.log(this) //object ki help se jab function call hoga tab chalega ye. this obj ko point karega. so answer pura object ayega
//   }
// }

// obj.fun(); //direct function calling nahi hai...obj ki help se ho rha...so this is method invocation
// Method invocation = In this...this always points to the object it is being called upon..means usko point karega jiski help se chal rha hai
//ex1:
// let obj2 = {
//   a: 100,
//   ash: function(){
//     console.log(this) //this obj2 ko point kar rha
//   }
// }
// obj2.ash(); //no direct function calling

//ex:2

// let obj2 = {
//   a: 100,
//   ash: function(){
//     console.log(this) //this obj2 ko point kar rha
//     console.log(this == window); //
//   }
// }
// let bhaukaal = obj2.ash; //calling ka tarika badal diya...function ko var ke barbar kar diya
// bhaukaal(); //direct function calling..so point to window

//ex:3

// let obj3 = {
//   a:10,
//   fn: function(){
//       console.log(this) //obj3
//       function ash(){
//         console.log(this) //window
//       }
//       ash(); //direct function calling hai...so it'll point to window
//   }
// }

// obj3.fn(); //method invocation

//---------------------------------------------------

//3. constructor invocation
//constructor: new keyword se chlte hai, 1st letter capital, create new obj, constructor ka syntactical sugar...class syntax
//In case of constructor invocation..."this" always points to the newly created object

// function CreateObj(){
//   this.x = 200;//this points to the newly created object..niche let obj ko
// }
// let obj = new CreateObj(); //new object create karega to varible assign kar deta

// console.log(obj.x);//newly created obj ko point kar rha hai to obj m 200 aa gya hoga

//4. indirect invocation
//call() and apply()
//call and apply are same bcuz they both changes the context of this

// let obj = {
//   ash : 20,
//   fn : function(a,b,c){
//     console.log(this,a,b,c)
//   }
// }

//yha obj2 m fn nai hai. But can I call ? Yes. How ? using Call()
//If I know that obj2 m fn nai hai but kisi aur objct m hai...toh ham object2 ki calling/reference badal deta hu
// let obj2={
//   ash : 50 
// }

// obj.fn(1,2,3);//upar 3 argument accept kar rha hai to yha bhi 3 bhej diye. Method invocation hai to object ko point karega this
// obj.fn(obj2) //indirect calling hoti hai to pehla argumrnt this ka rfernce hota hai...yha this ka rfernce obj2 hai
// obj.fn.call(obj2, 1,2,3); //call ki wjah se fn ka refernce obj2 ke pass aa jayega. call ke andar jo bhi provide karte hai..wo uska context chnage kar deta hai. /call m arguments are comma separated.
//this ke refernce ko obj2 pe change kar diya hai. 

//-----------------------------
//apply 

// obj.fn.call()
// obj.fn.apply(obj2 , 1,2,3) ❌ 
// obj.fn.apply(obj2, [1,2,3]) // apply ke case m array ke form m hote hai arguments. Apply ke case m 1st argunent this ko point karta hai.

//Indirect calling m hi..........Bind
//call and apply function run karta hai....bind run nai karta...function ki copy create karta hai and jo bhi variable bnaya hai use assign kar dega
// let obj3 = {
//   fn : function(){
//     console.log(this)
//   }
// }

// let myFun = obj3.fn.bind(obj3); //obj3 ke sath bind kar diya..and assign kar diya. No calling, but assigning...so obj3 ka depend function pe karega. Window ko point nai kar rha hoga.

// console.log(myFun); 
// myFun(); // this obj3 ko point kar rha hoga

//---------------------------------------------------------------

// let obj3 = {
//   fn : function(){
//     console.log(this);
//   }
// }

// function fn3(){
//   console.log(this); //ye this niche 100 ko point kar rha hoga
// }

// // fn3();
// let fn4 = fn3.bind(100) //this ki value ab 100 ko refer kar rahi hogi and fn4 ko assign kar diya
// fn4(); //fn4 ek functon hai isko call kiya and ye 100 ko point kar rha hai


//----------------------------------------------------
//Most asked 
//5. Arrow functions: syntactical sugar

// let obj5 = {
//   fn: function(){
//     console.log(this);
//   }
// }

// obj5.fn();//object ko point kar rha hai...cuz method invocation

//ex:2

// let obj5 = {
//   fn: function(){
//       function ash(){
//         console.log(this);
//       }
//       ash(); //direct calling ki wjah se window
//   }
// }

// obj5.fn();

//Ex:3
//In case of arrow function this refers to the lexical parent
// let obj5 = {
//   fn: function(){
//       console.log(this) //ye this parent ka. Ye this obj5 ko point kar rha
//       let ash = ()=>{ //arrow function bna diya  
//         console.log(this); //yha this parent ke this...fn wala function yha parent hai...so fn wale function ka this hoga wahi arrow wale function ka this hoga..so ye bhi obj5 ko point karega
//       }
//       ash(); //
//   }
// }

// obj5.fn();

//-------------------------------
// Ex:4

// let obj5 = { //ye obj5 ka this depend karta hai window pe...mtlb point kar rha hai window pe
//   fn: ()=>{ //isko bhi arrow function bna diya. Ye apne parent ke this pe point karta hai..yha obj5
//       console.log(this) //ye this parent ka. Ye this obj5 ko point kar rha
//       let ash = ()=>{ //arrow function bna diya  
//         console.log(this); //yha this parent ke this...fn wala function yha parent hai...so fn wale function ka this hoga wahi arrow wale function ka this hoga..so ye bhi obj5 ko point karega
//       }
//       ash(); //
//   }
// }

// obj5.fn();

//Arrow function apne parent pe depend hai..wo apne parent pe depend hai...and ye obj5 in ex:4...
//whenever a js code is run GEC is craeted..GEC ke sath global object banta hai..uska naam window.
//obj5 ka lexical environment...GEC m bna hoga...wo MCP ki help se lega..that is window


//--------------------------------------------------------------------------------------------------------
//practice:

//1. Regular/Direct function invocation

// let obj = {
//   number: 200,
//   fun: function(){ //function ko object ke andar likha to we call it method
//     console.log(this) //jab method ke andar this keyword use hota hai toh this object ko point karta hai...
//   }
// }

//bina object ke bhi this keyword exist karta hai.
//this always depends on how it is being called...kaise bula rahe hai uspe depend karti hai.
// function fn(){
//   console.log(this) //function ke andar bhi this keyword hota hai.
// }

// fn() //yha direct function call kar rahe hai so we call it regular function calling
//in case of regular function calling...this always points to the window object. What is this window ? It's a global object.
//Whenever js code is run a GEC is created...along with that...Global object is also created...jiske paas har chiz ka access hota hai
//Right now our whole js code is running on chrome...so in case of browser jo global object banta hai uska naam window hota hai. 

//---------------------------------------------------------------------------
//2. Method invocation

// let obj = {
//   number: 200,
//   fun: function(){
//     console.log(this)
//   }
// }

// //function ki calling ki wjah se this chal rha hai...and function ki calling obj ki wjah se ho rahi hai.. toh this..obj ko point karega. And pura object dega.
// obj.fun() //object ki help se function ko call kiya...function ki calling object pe depend hai...toh ye direct calling nahi hai...it's called method invocation.

//Ex1:
// let obj2 = {
//   a: 100,
//   ash: function(){
//     console.log(this) //this usko point karega jiski wjah se chal rha hai.
//   }
// }
// obj2.ash() //Is this a direct function invoaction ? No. Method invocation ? Yes

//Ex2:
// let obj2 = {
//   a: 100,
//   ash: function(){
//     console.log(this) //this usko point karega jiski wjah se chal rha hai.
//     console.log(this === window)
//   }
// }

// let bhaukaal = obj2.ash
// bhaukaal() //bhaukaal ko call kiya. Kya bhaukaal kisi pe depend hai ? No. Toh ye direct calling ho gai. And in direct function calling...this points to the window object.

// //Ex3:
// let obj3 = {
//   a: 10,
//   fn: function(){
//       console.log(this)
//       function ash(){
//         console.log(this)
//       }
//       ash(); //call kar diya. Direct function calling hai isliye this will point to the window obje
//   }
// }

// obj3.fn(); //method invocation

//-------------------------------------------------------------------------
//constructor function...new keyword se chalte hai, 1st letter capital hota hai, new objects create karta hai cf, cf ka syntactical sugar class syntax, 
//3. constructor invocation(calling)
//This always points to the newly crated object

// function CreateObj(){
//   this.X = 200;
// }

// //upar wala this..yha obj ko point kar raha hai.
// let obj = new CreateObj(); //object create karega and use variable m assign kar liya
// // console.log(obj)
// console.log(obj.X) //value mil jayegi.


//---------------------------------------------------------------
//4. indirect invocation

//Isme 3 types ate hai..call, bind, apply

//call and apply

let obj = {
  a: 20,
  fn: function(a,b,c){ //function 3 args accepts kar rha hai
    console.log(this, a,b,c)
  }
}

let obj2 = {
  a: 50
}

obj.fn(1,2,3)
//obj2 m fn nahi hai but can we call it ? Yes. How ? call()

//call methiod ke through calling ki 
//call ki wjah se fn ka refernce is obj2 ke paas aa jayega...this ke reference ko obj2 m change kar diya hai. call ke andar jo bhi provide karte hai uska context change kar deta hai. call m jo likhenge this use point karega.
// obj.fn.call(obj2) //obj ke andar jo fn hai...use direct call nahi kiya...call likh diya...and call method hai toh ()parenthesis se call kar liya...
// obj.fn.call(obj2, 1,2,3)  //args bhej diye


// obj.fn() //ye direct calling hai











