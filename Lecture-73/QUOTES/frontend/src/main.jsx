import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom' //import kara liya BrowserROuter ko 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* yha use kar liya browser router...main m. Isse pura app ka component..as a child..app ke andar wrap ho gya */}
    
      <App />
    </BrowserRouter>
    
  </StrictMode>,
)
