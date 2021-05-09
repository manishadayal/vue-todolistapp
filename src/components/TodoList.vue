<template>
  <div class="">
    <div class="row justify-content-center">
        <div>
            <h2>List of tasks</h2>
            <p>This page is only visible to users that are currently logged in</p>
        </div>
    </div>
    <div class="row justify-content-center">
        <div class="col-12 col-sm-10 col-lg-6">
          <create-todo @on-new-todo="addTodo($event)" />
        </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
    name:'todolist',
    props: {
      listName: String,
    },
    data() {
      return {
        todos: [
          { description: "Do the dishes", completed: false },
          { description: "Take out the trash", completed: false },
          { description: "Finish doing laundry", completed: false },
        ],
      };
    },
    methods: {
      addTodo(newTodo) {
        this.todos.push({ description: newTodo, completed: false });
      },
      toggleTodo(todo) {
        todo.completed = !todo.completed;
      },
      deleteTodo(deletedTodo) {
        this.todos = this.todos.filter(todo => todo !== deletedTodo);
      },
      editTodo(todo, newTodoDescription) {
        todo.description = newTodoDescription;
      },
    },
    components: { 
        Todo,
        CreateTodo 
    },
};
</script>

<style scoped >
</style>
