import { useMutation, useQueryClient } from '@tanstack/react-query'
import { TodoLayoutApiService, TodoApiService } from '@/modules/todo/api'
import type { PostNoteData } from '@/modules/todo/types/todo.types'
import { LAYOUTS } from './useFetchLayouts'
import { TODOS } from './useFetchTodos'
import type { TodoItem } from '../types/todo.types'
import type { Layout } from 'react-grid-layout'

export function useAddNote() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ layout, todo }: PostNoteData) => {
      return Promise.all([
        TodoLayoutApiService.create(layout),
        TodoApiService.create(todo),
      ])
    },
    onMutate: async (data: PostNoteData) => {
      await queryClient.cancelQueries()

      const previousTodos = queryClient.getQueryData<TodoItem[]>([TODOS])

      queryClient.setQueryData<TodoItem[]>(
        [TODOS],
        [...(previousTodos ?? []), data.todo]
      )

      queryClient.setQueriesData<Layout[]>([LAYOUTS], data.layout)
    },
    onSettled: () => {
      queryClient.invalidateQueries().catch((err) => console.error(err))
    },
  })
}
export default useAddNote
