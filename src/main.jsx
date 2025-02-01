import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Context_provider } from './COMPONENTS/Context_api/context_api.jsx'

createRoot(document.getElementById('root')).render(
  <Context_provider>
    {/* <StrictMode> */}
    <App />
    {/* </StrictMode>, */}
  </Context_provider>
)
