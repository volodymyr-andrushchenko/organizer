import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

import mockServer from './mockServer'

mockServer()

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
