import Calendar from './components/calendar/Calendar'
import { CalendarContextProvider } from './providers/calendar-context/CalendarContext'
import CalendarThemeProvider from './providers/theme-provider'

function App() {
  return (
    <div className="App">
      <CalendarContextProvider>
        <CalendarThemeProvider>
          <Calendar />
        </CalendarThemeProvider>
      </CalendarContextProvider>
    </div>
  )
}

export default App
