// import React, { useState } from 'react'

// function PropDrilling() {

//   //propDrilling is grand parent
//   //counter is patent 
//   //buttons is child...toh jo grandparent se sidha child pe bhejna tha..ham nai bhej pa rahe the sidha...counter ke through hi bhej pa rahe the....har ek level pe jate-jate bhejna pada throughout the journey...sidha grandparent se child access nai kar paya
//   //This is called propdrilling. It makes the code ugly and difficult to maintain...increase our code complecity.
//   //Isko avoid karne ke liye we have a concept...called context API.

//   let [count, setCount] = useState(0); //useState bna di...count hai uski inital value 0 hai. count ki value ko change karega setCount

//   return (
//     <div>
//       {/* count ko bhejna padega yha se tabhi niche Counter component m dikha sakte hai...niche direct nai dikha sakte cuz prop available nai hai */}
//       {/* setCount bhi yha se bhejenge tabhi niche destructure kar payenge */}
//       <Counter count={count} setCount={setCount}/> {/* counter naam ke component ko yha se call kiya */}
//       {/* counter ki value increase and decrease karni hai toh wo buttons karega....toh buttons ko call kar liya */} {/* count change karega setCount ko toh yha dono ko bhej denge */}
//       {/* <Buttons count={count} setCount={setCount}/>  */}
      
//     </div>
//   )
// }
//   // aur components bnayenge
//   function Counter({count, setCount}){ //count ko yha destructure kiya and setCount bhi upar se aya toh yha destructure kiya
//     return (
//       <div>
//         <h1>counter:{count}</h1> {/* destructure ho gya toh yha use kar sakte hai */}
//         <Buttons count={count} setCount={setCount}/> {/* yha pass kar diya upar se utha kar..component hi toh hai kahi bhi call kar do */}
        
//       </div>
//     )
//   }

//   //counter ki value increase and decrease karni hai toh wo buttons karega....toh buttons ko call kar liya
//   function Buttons({count, setCount}){//dono ko destructure kar liya
//     return(
//       <div>
//         {/* 2 button bna dete hai */}
//         <button onClick={()=>setCount(count+1)}>Inc</button> {/* ek function chal jaye..and fn kya kare setCount ko run kar ke..ek m count + 1 kar de.. */}
//         <button onClick={()=>setCount(count-1)}>Dec</button>
//       </div>
//     )
//   }

// export default PropDrilling


//--------------------------------------------------------------------
// context API

import React, { useContext, useState } from 'react'
import { CountContext } from './Context';

function PropDrilling() {


  let [count, setCount] = useState(0); //useState bna di...count hai uski inital value 0 hai. count ki value ko change karega setCount

  return (
    <div>
      {/* jis component ke andar istemal...karna tha apne CountContext ko...CountContext ek provider deta hai */}
      <CountContext.Provider value={count}> {/* conmponent ko wrap kar diya. Provider ke andar ek attribute dena padta hai called value...kis chiz ki value de rahe hai...count ki.. */}
        {/* <Counter count={count} setCount={setCount}/> */}
        <Counter setCount={setCount}/> {/* count ki jarurat nai hai ab toh hta diya...cuz hamne apne component ko wrap kar diya hai provider ke andar..jo count ki value leke ghum rha hai...jiski value 0 hai */}
      </CountContext.Provider>
      {/* count ko bhejna padega yha se tabhi niche Counter component m dikha sakte hai...niche direct nai dikha sakte cuz prop available nai hai */}
      {/* setCount bhi yha se bhejenge tabhi niche destructure kar payenge */}
      {/* counter naam ke component ko yha se call kiya */}
      {/* counter ki value increase and decrease karni hai toh wo buttons karega....toh buttons ko call kar liya */} {/* count change karega setCount ko toh yha dono ko bhej denge */}
      {/* <Buttons count={count} setCount={setCount}/>  */}
      
    </div>
  )
}
  // aur components bnayenge. Yha parent ke andar kahi bhi count ko nahi bheja. 
  function Counter({ setCount}){ //count bheja hi nai hai destructure ki jarurat nahi hai.
    return (
      <div>
        <CountRenderer/> {/* count renderer naam ka ek aur component bnaya jo count naam ka prop apne paas rakh raha hai*/}
        
        <Buttons setCount={setCount}/> {/* yha pass kar diya upar se utha kar..component hi toh hai kahi bhi call kar do */}
        
      </div>
    )
  }

  function CountRenderer(){
    //create karne ke baad next step is to use the context.
    let count = useContext(CountContext) //jo CountContext(comonent ka naam) hai use istemal karo. count naam se use karna chahte hai
    return(
      <div>
        <h1>Count: {count}</h1> {/* count ki value dikha dete hai */}
      </div>
    )
  }

  //counter ki value increase and decrease karni hai toh wo buttons karega....toh buttons ko call kar liya
  function Buttons({setCount}){//dono ko destructure kar liya
    let count = useContext(CountContext)
    return(
      <div>
        {/* 2 button bna dete hai */}
        <button onClick={()=>setCount(count+1)}>Inc</button> {/* ek function chal jaye..and fn kya kare setCount ko run kar ke..ek m count + 1 kar de.. */}
        <button onClick={()=>setCount(count-1)}>Dec</button>
      </div>
    )
  }

export default PropDrilling;





