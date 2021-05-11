<template>
  <div class="">
    <div class="row justify-content-center">
      <div>
        <h2>Create a new to-do</h2>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-lg-6">
        <create-todo @on-new-todo="addTodo($event)" />
      </div>
    </div>
    <div>
      <h2>List of tasks</h2>
      <p>
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat.
      </p>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in todos"
            :key="index"
            :title="todo.title"
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
  name: "todolist",
  props: {
    listName: String,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ title: newTodo, completed: false });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter((todo) => todo !== deletedTodo);
    },
    editTodo(todo, newTodoTitle) {
      todo.title = newTodoTitle;
    },
  },
  components: {
    Todo,
    CreateTodo,
  },
  // lifecycle hook
  created() {
    /*         this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.todos = data.body.slice(0,10);

        }) */
    this.$http
      .get("https://authenticate-2b945-default-rtdb.firebaseio.com/todos.json")
      .then(function (data) {
        //console.log(data);
        this.todos = data.body;
      });
  },
};
</script>

<style scoped >
</style>
