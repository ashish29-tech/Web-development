//Type rfce...this is how we can create our own component

import React from 'react'

function Person() { //is Person component ko dekhne ke liye App.jsx m include karna
  return (
    <div>
      <h1>Naam: </h1>
      <h1>Umar: </h1>
      <h1>Fav Color: </h1>
    </div>
  )
}

export default Person