import { useQuery } from '@tanstack/react-query'
import { TodoApiService } from "@/modules/todo/api"
import { FETCH_TODO_LIST_QUERY_KEY } from '../constants'

export function useFetchTodos() {
    return useQuery({
        queryKey: [FETCH_TODO_LIST_QUERY_KEY],
        queryFn: TodoApiService.retrieve,
    })
}