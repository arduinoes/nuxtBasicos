<script setup>
import useTodo from '~~/composables/todos';

const { todoList, addTodo } = useTodo()

const tarea = reactive({
    todo: '',
    hola: 'Carlos'
})

function addToList () {
    addTodo(tarea.todo)
    console.log ("Tarea: ", todoList)
    console.log ("todo: ", tarea.todo)
    console.log ("hola: ", tarea.hola)
}

</script>

<template>
    <h1>Index</h1>
    <div class="container">
    <Input
      v-model="tarea.todo"
      type="text"
      label="Tarea"
    />
    <button class="btn btn-primary" @click="addToList">Añadir tarea</button>
    </div>
    <ul>
        <li>{{todoList.value}}</li>
    </ul>
</template>