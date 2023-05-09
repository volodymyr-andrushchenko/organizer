import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Todo from './modules/todo/components/todo/Todo'
import Calendar from './modules/calendar/components/Calendar'
import { ReactQueryProvider } from './providers/ReactQueryProvider'

function App() {
  return (
    <BrowserRouter>
      <ReactQueryProvider>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
        </ReactQueryProvider> 
    </BrowserRouter>
  )
}

export default App
