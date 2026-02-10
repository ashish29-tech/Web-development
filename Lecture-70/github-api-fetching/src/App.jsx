import React from 'react'
import GIthub from './Components/GIthub'

function App() {
  return (
    <div>
      {/* 3 baar call kar liya with 3 different username */}
    <GIthub username="ashish29-tech" />
    <GIthub username="vishalsharma12345678" />
    <GIthub username="ankur-ctrl-z" />
  </div>
  );
}

export default App