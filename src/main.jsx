import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
=======
import App from './App.jsx' //yha main m app ko use kiya hai 

createRoot(document.getElementById('root')).render( //root select kar ke root pe render karna
  <StrictMode>
    {/* component ki jab bhi baat hogi toh self closing.. */}
    <App />  
  </StrictMode>,
)

//this is our main file in vite...webpacks ke through kar rahe the toh index.js naam tha main file ka...yha main.jsx

>>>>>>> 27e94a0c28c0bc50bb67a64cf7be73c2eb80feb2
