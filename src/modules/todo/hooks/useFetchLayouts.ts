import { useQuery } from '@tanstack/react-query'
import { TodoLayoutApiService } from '@/modules/todo/api'

export const LAYOUTS = 'layouts'

export function useFetchTodoLayouts() {
  return useQuery({
    queryKey: [LAYOUTS],
    queryFn: TodoLayoutApiService.retrive,
  })
}
