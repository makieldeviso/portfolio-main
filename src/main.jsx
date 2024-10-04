import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { browserRouter } from './Router'
import './styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={browserRouter}/>
  </StrictMode>,
)