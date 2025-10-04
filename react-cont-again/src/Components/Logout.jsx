
import React, { useState } from 'react'
import Person from './Person'

function Logout() {

  //This is not the way to change varibales....means varible change ho jayega but re-render nai hoga
  // //naam to change hota rahega toh..variable
  // let userName = "ashish" //orginal value bnani hai isliye 
  // function handleClick (){
  //   //jaise hi hadleClick chalaye...userName ki value bhi badal jaye
  //   console.log(userName) //change hone se pehle console
  //   userName = "anonymous"
  //   console.log(userName) //change hone ke baad console
  // }

  //ek aisa varible chahiye mujhe jo dynamically change ho sakta hai...toh usko let variable(jaise upar kar rahe hai) ki trah use nai karenge..uski jgah banayenge state...
  //useState use karenge. Type and click..it will import above automatically
  let [userName , setUsername] = useState("ashish"); // useState call kiya..ye ek array return karta hai...isme 2 elements hote hai...1st is state and 2nd function. useState m jo args denge that becomes an inital value of this variable/state...userName is now pointing to ashish. call karte waqt jo argument dete hai wo us varible ki initial value hoti hai

  function handleClick(){ //is function ka kaam hai jab bhi ise click karo toh name ko badal do userName ki jgah.
    setUsername("anonymous"); //setUsername ko call kiya taki userName ki value badal pau. Ye setUsername ka function run karne se...userName naam ka state variable change hua...and whwnever there is a change in state varible toh iska jo component(hamare case m state varible ka component logout hai) hai..that tracks the changes...and track karne baad it re-renders. State ka change componenrt observe karta hai...jaise hi component observe kar leta hai..ye apne aap ko dobara se re-render kar leta hai...changed value ke sath.
  }

  //return statement render hoti hai...react kehta hai....jo chiz ek baar render kar di hai usme change nai ayega...means variable ek baar change kar diya toh us variable ka change nazar nai ayega
  return (
    <div>
      <h1>logout page</h1>
      {/* yha include karenge Person component. And jab kisi component ko call karte hai toh args bhej sakte hai. userName kabhi bhi change ho sakta hai isliye curly braces m likha...baki chize static hai...ye dono props hai */}
      <Person name={userName} age="21" fav="red"/>
      {/* Bande ko pta na chale kon sa user tha...naam anonymous aa jaye...toh onClick event */}
      <button onClick={handleClick}>Logout</button> {/* handle click function */}
      
    </div>
  )
}

export default Logout

