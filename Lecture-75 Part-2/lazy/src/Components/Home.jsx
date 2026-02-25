import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      {/*link bna diya... / dashboard pe karenge toh Dashboard pe jayega */}
      <Link to="/dashboard">Dashboard</Link>
    </div>
  )
}

export default Home