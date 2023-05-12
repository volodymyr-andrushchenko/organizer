import Calendar from "./components/Calendar"
import { CalendarContextProvider } from "./providers/calendar-context/CalendarContext"

function App() {
    return (
        <div className='App'>
            <CalendarContextProvider>
                <Calendar />
            </CalendarContextProvider>
        </div>
    )
}

export default App
