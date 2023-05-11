import { useMutationToPostTodo } from '@/modules/todo/hooks/useMutationToPostTodo'
import { useForm } from 'react-hook-form'

type AddTodoFormValues = {
    text: string
}

export default function AddTodoForm() {
    const { register, handleSubmit, reset } = useForm<AddTodoFormValues>()

    const mutation = useMutationToPostTodo()

    const onSubmit = handleSubmit(({ text }) => {
        mutation.mutate({
            text,
        })

        reset()
    })

    return < form onSubmit={onSubmit} >
        <label>
            Add New To-Do
            <br />
            <input type="text" {...register('text')} />
        </label>
        <input type="submit" value="Add To-Do" />
    </form >
}