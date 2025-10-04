import React, { useState } from 'react'

function Maverick() {

  let [titl, setTitl] = useState();//jab varible create karna hai toh uske liye useState..useState ki default/initial value "bhau bhau"


  function handleTodo(){ //iska kaam hai jo pehle wala MaveKeTodo hai uska title badal de..."bhau bhau"
    setTitl( Math.floor(Math.random()*10)) //titl niche change karna hai toh...setTitl function ko call kar liya..call kiya and isme random value bhej di.
  }

  return (
    <div>
      {/* call kar liya yha...call kiya toh kya require/import ki jarurat hai ? No, cuz 1 hi file m hai. Yha se title bhej diya and niche catch kar liya props m */}
      {/* <MavKeTodo title="bhau bhau"/>  */}
      <MavKeTodo title={titl}/> {/* faltu ki rerendering ho rahi hai...tit; ke sath baki sare bhi rerender ho rahe. Isse bachne ke liye.. */}
      <button onClick= {handleTodo}>Click</button> {/* click karne se event trigger hoga onClick...jise handleTodo keh rahe hai. */}
      
      <MavKeTodo title="eat treat"/>
      <MavKeTodo title="hi five"/>
      <MavKeTodo title="sit"/>
    </div>
  )
}

//kya 1 page pe multiple components bna sakte hai ? Components function hote hai...so jab functions bna sakte hai 1 se jyada toh components bhi.
//kya 1 component m dusra component call kar sakte hai ? Yess
function MavKeTodo(props){ //yha catch kar liya title ko..props m...
  return(
    <h1>task: {props.title} </h1>
  )
}

export default Maverick;




