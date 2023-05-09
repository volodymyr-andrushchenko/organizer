import { useQuery } from '@tanstack/react-query'
import { TodoApiService } from "../api"

export function useFetchTodos() {
    const { isLoading, data } = useQuery({
        queryKey: ['todos'],
        queryFn: TodoApiService.retrieve,
    })

    return { isLoading, data }
}