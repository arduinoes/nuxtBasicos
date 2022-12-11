export default function useTodo()
{
    let todoList = reactive([''])

    function addTodo(payload: string)
    {
        todoList = [...todoList, payload]
    }

    return {
        todoList,
        addTodo
    }
}