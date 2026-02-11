import React from 'react'
import MainNav from './Components/MainNav'
import { Route, Routes } from 'react-router-dom'
import AllQuotes from './Components/AllQuotes'
import NewQuotes from './Components/NewQuotes'


function App() {
  return (
    <div>
       <MainNav/>

      <main> {/* main app ka part hai isliye main bna rahe hai...otherwise div bhi bna sakte hai */}
      {/* yha routes bna sakte hai */}
        <Routes>
          {/* har ek routes ke andar route hote hai. Route ke andar 2 chize hoti hai 1 is path and 2nd is element..element means kon sa component dikhana hai..path means kis path pe dikhana hai */}
          <Route path="/" element={ <AllQuotes/> }/>
          <Route path="/new" element={ <NewQuotes/> }/>
        </Routes>
      </main>

    </div>
  )
  
  
}

export default App