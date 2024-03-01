import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from './routes'
import './index.css'
// import { StrictMode } from 'react'

const router = createBrowserRouter(routes)

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
    // <StrictMode>
    <RouterProvider router={router} />
    // </StrictMode>
)