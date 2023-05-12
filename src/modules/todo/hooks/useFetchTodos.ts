import { useQuery } from '@tanstack/react-query'
import { TodoApiService } from '@/modules/todo/api'

export const FETCH_TODO_LIST_QUERY_KEY = 'todos'

export function useFetchTodos() {
  return useQuery({
    queryKey: [FETCH_TODO_LIST_QUERY_KEY],
    queryFn: TodoApiService.retrieve,
  })
}
