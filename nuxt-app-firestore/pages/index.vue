<script setup>
import useTodo from '~~/composables/todos';

const { todoList, addTodo } = useTodo()

const dato = reactive({
    tarea: ''
})

function addToList () {
    addTodo(dato.tarea)

    console.log ("Tarea: ", todoList)
    console.log ("tarea: ", dato.tarea)
 
}

</script>

<template>
    <h1>Index</h1>
    <div class="container">
    <Input
      v-model="dato.tarea"
      type="text"
      label="Tarea"
    />
    <button class="btn btn-primary" @click="addToList">Añadir tarea</button>
    </div>
    <ul v-for="todo in todoList">
        <li >{{ todo }}</li>
    </ul>
</template>