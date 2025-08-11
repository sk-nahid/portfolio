import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "aos/dist/aos.css";
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import Aos from 'aos'

Aos.init({
  offset: window.innerHeight * 0.3,
  duration: 3000,
  
  once: false,
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
