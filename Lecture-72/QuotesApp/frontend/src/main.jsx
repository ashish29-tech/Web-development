import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import {BrowserRouter} from 'react'  //kya naam change kar sakte hai ? Yeah
import {BrowserRouter as Router} from "react-router-dom"
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* ek baar App.jsx m kiya tha BrowserRouter...now yha kar ke dekhte hai. Dono m se kahi bhi kar sakte hai. */}
    <Router> {/* browser router toh bna diya hai */}
      <App />
    </Router>
  </StrictMode>,
)



