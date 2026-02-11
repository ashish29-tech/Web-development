import React from 'react'
import { Link } from 'react-router-dom'

function MainNavigation() {
  return (
    // nav bar bnana hai
    <nav>
      <h2> GREAT QUOTES APP</h2>
      <ul>
        {/* We'll not use anchor tag...cuz it leads to refreshing of page. Refreshing se bachne ke liye... So we'll use link...which is part of react-router-dom
        and jab link ka use karte hai toh href ka use nai hota... to hota hai.. */}
        <li> <Link to="/">All Quotes</Link> </li> {/* 2 link bnaye. 1 sare quotes dikhayega */}
        <li> <Link to="/new">New Quote</Link> </li> {/* 1 sare new quotes create */}
      </ul>
    </nav>
  )
}

export default MainNavigation;