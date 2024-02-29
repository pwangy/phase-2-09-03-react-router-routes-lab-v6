import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import routes from './routes'
import './index.css'

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

const router = createBrowserRouter(routes)

root.render(<RouterProvider router={router} />)
