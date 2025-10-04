//Type rfce...this is how we can create our own component

import React from 'react'

function Person(props) { //is Person component ko dekhne ke liye App.jsx m include karna. App.jsx m function call kar ke args bhejte hai...toh use as a parameter catch bhi kar sakte hai...kisi bhi naam se
    console.log(props);
  return (
    <div>
      <h1>Naam: {props.name} </h1>
      <h1>Umar: {props.age} </h1>
      <h1>Fav Color: {props.fav} </h1>
    </div>
  )
}

export default Person