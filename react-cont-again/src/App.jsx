import React from 'react'
import Person from './Components/Person'
import Logout from './Components/Logout'
import Counter from './Components/Counter'

function App() {
  return (
    <div>
      <h1>hello react</h1>
      {/* yha include karenge Person component. And jab kisi component ko call karte hai toh args bhej sakte hai */}
      {/* <Person name="ashish" age="21" fav="red"/>
      <Person name="bhaskar" age="24" fav="green"/>
      <Person name="vikas" age="26" fav="black"/> */}

        {/* logout */}
        {/* <Logout/> */}
        <Counter/>
    </div>
  )
}

export default App