import { useQuery } from '@tanstack/react-query'
import { TodoApiService } from '@/modules/todo/api'

export const TODOS = 'todos'

export function useFetchTodos() {
  return useQuery({
    queryKey: [TODOS],
    queryFn: TodoApiService.retrieve,
  })
}
