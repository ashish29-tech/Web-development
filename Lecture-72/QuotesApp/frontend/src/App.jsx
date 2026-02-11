import React from 'react'
import MainNav from './Components/MainNav'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './Components/AllQuotes'
import NewQuotes from './Components/NewQuotes'


function App() {
  return (
    <div>
       <MainNav/>
    {/* yha ab routes bnane wala kaam karte hai...routing create karni hai  */}
    {/* BrowserRouter toh main.jsx m bna diya hai */}
      <main> {/* main application ka part hai isliye main bna rahe hai...otherwise div bhi bna sakte hai */}
      {/* yha routes bna sakte hai...click karenge Routes likh ke toh upar require ho jayega */}
        <Routes>
          {/* har ek routes ke andar route hote hai. Route ke andar 2 chize hoti hai 1 is path and 2nd is element..
          element means kon sa component dikhana hai..path means kis path pe dikhana hai. 
          Ek all quotes naam se and ek new quotes naam se component bna lete hai */}
          <Route path="/" element={ <AllQuotes/> }/>
          <Route path="/new" element={ <NewQuotes/> }/>
        </Routes>
      </main>

    </div>
  )
  
  
}

export default App