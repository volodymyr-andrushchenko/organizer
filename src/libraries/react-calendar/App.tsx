import Calendar from "./components/Calendar"
import { CalendarContextProvider } from "./common/CalendarContext"

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
