import React from 'react'
import Person from './Components/Person'

function App() {
  return (
    <div>
      <h1>hello react</h1>
      <h1>hello react</h1>
      {/* yha include karenge Person component. And jab kisi component ko call karte hai toh args bhej sakte hai */}
      <Person/>
    </div>
  )
}

export default App