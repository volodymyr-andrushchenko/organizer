import { useContext, useState } from "react"
import { styled } from "@mui/system"
import CssBaseline from "@mui/material/CssBaseline"
import { addMonths, addWeeks, addDays, subMonths, subWeeks, subDays } from "date-fns"
import { CalendarContext } from "../common/CalendarContext"
import CalendarToolbar from "./CalendarToolbar"
import CalendarDrawer from "./CalendarDrawer"
import CalendarMain from "./CalendarMain"
import CalendarEventDialog from "./CalendarEventDialog"
import CalendarEventViewDialog from "./CalendarEventViewDialog"

const RootWrapper = styled('div')({
    display: "flex",
    height: "100%",
    width: "100%",
})


function Calendar() {
    const [open, setOpen] = useState(true)

    const { stateCalendar, setStateCalendar } = useContext(CalendarContext)

    const handleDrawerClose = () => {
        setOpen(false)
    }

    const [runAnimation, setRunAnimation] = useState(true)

    const goToToday = () => {
        setRunAnimation(false)
        const newDate = new Date()
        setStateCalendar({ ...stateCalendar, selectedDate: newDate })
    }

    const next = () => {
        setRunAnimation(false)
        let newDate

        switch (stateCalendar.layout) {
            case "week":
                newDate = addWeeks(stateCalendar.selectedDate, 1)
                break

            case "day":
                newDate = addDays(stateCalendar.selectedDate, 1)
                break

            default:
                // month
                newDate = addMonths(stateCalendar.selectedDate, 1)
                break
        }
        setStateCalendar({ ...stateCalendar, selectedDate: newDate })
    }

    const previous = () => {
        setRunAnimation(false)
        let newDate

        switch (stateCalendar.layout) {
            case "week":
                newDate = subWeeks(stateCalendar.selectedDate, 1)
                break

            case "day":
                newDate = subDays(stateCalendar.selectedDate, 1)
                break

            default:
                // month
                newDate = subMonths(stateCalendar.selectedDate, 1)
                break
        }
        setStateCalendar({ ...stateCalendar, selectedDate: newDate })
    }

    return (
        <CalendarContext.Provider value={{ stateCalendar, setStateCalendar }}>
            <RootWrapper>
                <CssBaseline />

                <CalendarToolbar
                    goToToday={goToToday}
                    next={next}
                    previous={previous}
                />

                <CalendarDrawer />

                {/*
                <CalendarMain
                    open={open}
                    runAnimation={runAnimation}
                />

                <CalendarEventDialog />
                <CalendarEventViewDialog /> */}
            </RootWrapper>
        </CalendarContext.Provider>
    )
}

export default Calendar
