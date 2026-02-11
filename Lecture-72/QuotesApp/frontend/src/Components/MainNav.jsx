import React from 'react'
import { Link } from 'react-router-dom'

function MainNav() {
  return (
    <nav className="nav">
      <h2>Main Quotes App</h2>
      <ul>
        <li>
          {/* page refresh ho raha hai..we can't give anchor tags */}
          {/* <a href="/">ash</a>  */}
          {/* toh react m anchor tag ka alternative hota hai jise link kehte hai. This link is a part of react-router-dom. Jaise anchor tag m href hota hai waise hi Link m hota hai to */}
          <Link to="/"> All Quotes</Link> {/* all quote slash route pe. Now you can see despite hitting diff urls page isn't getting refreshed */}
        </li>
        <li>
          <Link to="/new"> New Quotes</Link> {/* new quote /new route pe */}
        </li>
      </ul>
    </nav>
  )
}

export default MainNav