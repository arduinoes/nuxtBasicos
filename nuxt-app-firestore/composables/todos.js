export default function useTodo()

{
    let todoList = ref([])
    function addTodo(payload)
    {
        todoList.value = [...todoList.value, payload]
        console.log(todoList)
    }

    return {
        todoList,
        addTodo
    }
}