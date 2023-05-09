import { useMutation, useQueryClient } from "@tanstack/react-query"
import { TodoApiService } from "../api"

export function useMutationToPostTodo() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: TodoApiService.create,
        onSuccess: () => {
            queryClient
                .invalidateQueries({ queryKey: ['todos'] })
                .catch((err: unknown) => {
                    console.log(err)
                })
        },
    })
} 