import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Login from './loginSignup/Login.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Login />
    {/* <App /> */}
  </StrictMode>,
)
