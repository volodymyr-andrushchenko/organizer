import { RouteObject } from 'react-router-dom'
import Todo from '../modules/todo/components/todo/Todo'
import Calendar from '../modules/calendar/components/Calendar'

type ArrayOfRouteElementPairs = RouteObject[]

export const pages: ArrayOfRouteElementPairs = [
  { path: '/', element: <Todo /> },
  { path: '/calendar', element: <Calendar /> },
]
