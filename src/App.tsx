import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Todo from './modules/todo/components/todo/Todo'
import Calendar from './modules/calendar/components/Calendar'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
