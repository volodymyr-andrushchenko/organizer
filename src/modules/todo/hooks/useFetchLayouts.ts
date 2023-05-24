import { useQuery } from '@tanstack/react-query'
import { TodoLayoutApiService } from '@/modules/todo/api'

export const FETCH_TODO_LAYOUTS_QUERY_KEY = 'layouts'

export function useFetchTodoLayouts() {
  return useQuery({
    queryKey: [FETCH_TODO_LAYOUTS_QUERY_KEY],
    queryFn: TodoLayoutApiService.retrive,
  })
}
