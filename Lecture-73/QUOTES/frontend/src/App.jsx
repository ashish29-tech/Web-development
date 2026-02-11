import React from 'react'
// import { BrowserRouter as Router } from "react-router-dom"
// import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Route, Routes } from "react-router-dom";
import MainNavigation from './components/mainNavigation/MainNavigation';
import AllQuotes from './components/pages/AllQuotes';
import NewQuote from './components/pages/NewQuote';
import ShowQuotes from './components/pages/ShowQuotes';

function App() {

  return (
    <React.Fragment> {/* to avoid extra nesting..React.Fragment instead of div */}
    <MainNavigation/>
      {/* wrap karenge chizo ko inside component called Browser Router...and ye react-router-dom se ayega..upar import kar lenge...<Router></Router> ye bhi kar sakte hai. Ye browser router ka app.jsx m hona jaruri nahi hai..*/}
      {/* <BrowserRouter> */}
        <Routes> {/* multiple routes likhne ke liye Routes m wrap kar dete hai */}
          {/* and ek route jo particularly specify karna hota hai */}
          {/* routes bnane hai...jis route pe hit kare wo wo page dikhaye... */}
          <Route path="/" element={ <AllQuotes/>} />  {/* jab bhi / path hit hoga...toh All Quotes component nazar aye.. */}
          <Route path="/new" element={ <NewQuote/>} />
          <Route path="/quotes/:id" element={ <ShowQuotes/>} /> {/* route hit ho.../quotes/:id pe..toh show quotes naam ka ek page dikha do...show quotes naam ka component mil jayega. Pages m bna lete hai ShowQuotes.jsx */}
          
          <Route/>
        </Routes>
      {/* </BrowserRouter> */}
    </React.Fragment>
  )
}

export default App