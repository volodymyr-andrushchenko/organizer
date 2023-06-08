import { isSameDay } from 'date-fns'

// This function finds in which week is the selected date
export function getSelectedWeekIndex(
  selectedDate: Date,
  weeks: Date[][]
): number {
  let output: number | undefined

  weeks.forEach((week, weekIndex) => {
    week.forEach((day) => {
      if (isSameDay(selectedDate, day)) {
        output = weekIndex
      }
    })
  })

  if (!output) {
    throw new Error('could not find selected week')
  }

  return output
}
