import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TodoApiService } from "@/modules/todo/api"
import { FETCH_TODO_LIST_QUERY_KEY } from "../constants"

export function useMutationToPostTodo() {
    const queryClient = useQueryClient()

    return useMutation({
        // if return is removed from TodoApiService.create, this error appears
        mutationFn: TodoApiService.create,
        onSuccess: () => {
            queryClient
                .invalidateQueries({ queryKey: [FETCH_TODO_LIST_QUERY_KEY] })
                .catch((err: unknown) => {
                    console.log(err)
                })
        },
    })
} 