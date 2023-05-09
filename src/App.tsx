import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { ReactQueryProvider } from './providers/ReactQueryProvider'
import { pages } from './pages'

function App() {
  return (
    <BrowserRouter>
      <ReactQueryProvider>
        <Routes>
          {pages.map(({ path, element }) => {
            return <Route key={path} path={path} element={element} />
          })}
        </Routes>
      </ReactQueryProvider>
    </BrowserRouter>
  )
}

export default App
