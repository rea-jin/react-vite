import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import { Top } from './Top.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Top />
  </StrictMode>,
)
