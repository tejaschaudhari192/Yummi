import React from 'react'
import ReactDOM from 'react-dom/client'
import AppLayout, { appRouter } from './components/App.jsx'
import { RouterProvider } from 'react-router-dom'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
