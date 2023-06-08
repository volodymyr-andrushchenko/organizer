import {
  addMonths,
  addWeeks,
  addDays,
  subMonths,
  subWeeks,
  subDays,
} from 'date-fns'

export type Operation = 'add' | 'sub'

type Period = 'month' | 'week' | 'day'

type Action = `${Operation}/${Period}`

export function updatedDate(prevDate: Date, action: Action) {
  switch (action) {
    case 'add/month':
      return addMonths(prevDate, 1)
    case 'add/week':
      return addWeeks(prevDate, 1)
    case 'add/day':
      return addDays(prevDate, 1)
    case 'sub/month':
      return subMonths(prevDate, 1)
    case 'sub/week':
      return subWeeks(prevDate, 1)
    case 'sub/day':
      return subDays(prevDate, 1)
  }
}
