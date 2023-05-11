import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Todo from './modules/todo/components/todo/Todo'
import Calendar from './modules/calendar/components/Calendar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App
