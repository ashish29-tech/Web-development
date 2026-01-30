
//DOM: Operationally heavy

// let rootEl = document.getElementById('root')

// let h1 = document.createElement('h1');

// h1.innerHTML = 'hello h1 from DOM'

// //root element ke andar is h1 element ko append karna hai
// rootEl.append(h1);

//-----------------------------------------------------

//Now do the task with the help of React..

//-----------------------------------------------------------
//React 17

// let rootEl = document.getElementById("root");

//create naam ka method 3 args accept karta hai.
// let h1 = React.createElement('h1', null , 'hello h1 from react') //createElement se we create....and it accepts 3 args....1. Element kon sa hai. 2. Attribute..like id's, class, type etc. 3. content

// let h1 = React.createElement(
//   'h1',
//   // {id:"ashish", class:"ranjan"} , //agr attribute dena hi hota toh..object dete and id. Ham js m kar rahe hai isliye class use nai kar sakte..so it's wrong.
//   {id:"ashish", className:"ranjan"} , //class ki jgah classname
//   'hello h1 from react'
// ); 

//ReactDOM console kar ke dekho toh dikhega...render naam ka ek method hai..display karne ke kaam ata hai.
// ReactDOM.render(h1, rootEl) //h1 ko render karna hai...rootEl m


//input ke andar label lgta hai and label ke andar for lagta hai na.....and for hmara loop ka part hota hai...for is a reserve keyword so for ki jgah htmlFor

//Bnana React ka kaam hai..and dikhana React DOM ka kaam hai. 

//React: Create karne ka kaam
//React DOM: Chizo ko dikhane ka kaam. React ki bnai hui chize web app pe dikhani hai to ReactDOM.
//React Native: Mobile app bnana ho toh us time react se bane component dikhana ho...toh display ka kaam reactNative ka hota hai. Reacr Native ek framework hai.
//Ham web Development kar rahe hai toh reactDOM ki help lenge.

//------------------------------------------------
//React 18



// let h1 = React.createElement(
//   'h1',
//   {id:"ashish", className:"ranjan"} , //class ki jgah classname
//   'hello h1 from react 18'
// ); 

// // let h2 = React.createElement(
// //   'h2',
// //   null , //jab className kuch nai dena ho toh null
// //   'hello h2 from react 18'
// // );

// let h2 = React.createElement("h2", null, "hello h2 from React 18");

// // let rootEl = document.getElementById("root");
// //react 18 m pehle apna root chunna padega
// // let root = ReactDOM.createRoot(rootEl); //root variable name de diya...rootEl chun liya hai...uska naam root rakha hai.
// //or

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(h1, h2); //wrong


//-------------------------------------------------------------------------------------------------

// let h1 = React.createElement(
//   'h1',
//   {id:"ashish", className:"ranjan"} , //class ki jgah classname
//   'hello h1 from react 18'
// ); 

// // let h2 = React.createElement(
// //   'h2',
// //   null , //jab className kuch nai dena ho toh null
// //   'hello h2 from react 18'
// // );

// let h2 = React.createElement("h2", null, "hello h2 from React 18");

// // let rootEl = document.getElementById("root");
// //react 18 m pehle apna root chunna padega
// // let root = ReactDOM.createRoot(rootEl); //root variable name de diya...rootEl chun liya hai...uska naam root rakha hai.
// //or

// let root = ReactDOM.createRoot(document.getElementById("root"));

// root.render([h1, h2]); //array m daal diya. Array can have multiple elements.

//----------------------------------------------------------------------------------------

//Real react jo bheind the scene chal rha hai.
//inefficient way
// let div = React.createElement('div', null, [ //enclose kar diya in an array
//   React.createElement('h1', null, 'hi i am div ke andar h1'),
//   React.createElement('p', null, 'hi i am div ke andar p')
// ]); //react ek div create karega...div ke pass koi attribute nai hai toh null....kya div ke paas koi child hai ? Yes, toh create kar do...React.createElement will accept 3 args..react ka h1, null, 'hi...andar h1'

//  //now select root element
//  let root = ReactDOM.createRoot(document.getElementById("root")); //jo mera root hai use select kar ke root bnao

// root.render(div);

//----------------------------------------------
//new way provided by react
// JSX SYNTAX tareeka
//JSX means JS + XML(markup language..easy way m samajhne ke liye..ye HTML hai)
//JSX m JS and XML ek sath likh sakte hai...
//Toh js m html bhi likh sakte hai..


//ye work nai karega cuz JS ko ham browser m bhejte hai...and yha JSX ko bhej rahe hai joki browser ko nai smjh ati..so we'll have to convert our code it into Babel..
let div = (
  <div>
    <h1 id="ashish">hello from h1 jsx</h1>
    <p className="ranjan">hello from p jsx</p>
  </div>
);

let root = ReactDOM.createRoot(document.getElementById("root")); //jo mera root hai use select kar ke root bnao

root.render(div);




