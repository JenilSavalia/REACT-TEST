import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Landing from './landing.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Landing />
  </StrictMode>,
)
