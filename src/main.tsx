import React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@app/App'
import { BrowserRouter } from 'react-router-dom'
import '@styles/tokens.css'
import '@styles/global.css'

const container = document.getElementById('root')!
createRoot(container).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
