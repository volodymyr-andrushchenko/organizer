import { isSameDay } from "date-fns"

// This function finds in which week is the selected date
function getSelectedWeekIndex(selectedDate: Date, weeks: Date[][]): number {
    weeks.forEach((week, weekIndex) => {
        week.forEach((day) => {
            if (isSameDay(selectedDate, day)) {
                return weekIndex
            }
        })
    })

    return -1
}

export default getSelectedWeekIndex
