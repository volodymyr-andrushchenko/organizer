import { useMutation } from '@tanstack/react-query'
import { TodoLayoutApiService } from '@/modules/todo/api'

export function useSaveLayout() {
  return useMutation({
    mutationFn: TodoLayoutApiService.create,
  })
}
