import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "@fortawesome/fontawesome-free/css/all.min.css"
import Contextprovider from './context/Context.jsx'

createRoot(document.getElementById('root')).render(
 <Contextprovider>

   <App />
 </Contextprovider>
 
)
