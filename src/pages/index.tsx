import { RouteObject } from 'react-router-dom'
import Todo from '@/modules/todo/components/todo/Todo'
import Calendar from '@/modules/calendar/components/Calendar'
import Health from '@/modules/health/components/Health'

type ArrayOfRouteElementPairs = RouteObject[]

export const pages: ArrayOfRouteElementPairs = [
  { path: '/', element: <Todo /> },
  { path: '/calendar', element: <Calendar /> },
  { path: '/health', element: <Health /> },
]
