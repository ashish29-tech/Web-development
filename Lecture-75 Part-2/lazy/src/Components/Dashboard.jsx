import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      {/* link bna diya. / slash pe jayeag jab m home pe click karunge */}
      <Link to="/">Home</Link>
    </div>
  )
}

export default Dashboard