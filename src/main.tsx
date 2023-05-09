import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'

import mockServer from './mockServer'

mockServer()

const root = createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
