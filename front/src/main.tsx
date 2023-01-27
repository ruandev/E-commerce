import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import SignIn from './pages/Sign-in'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
)
