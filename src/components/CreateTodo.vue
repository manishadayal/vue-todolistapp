<template>
  <div class="row justify-content-center todo-wrapper">
    <form
      class="col-12 col-sm-8 col-md-8 cl-lg-6"
      
    >
      <div class="form-outline">
        <input
          v-model="newTodo.title"
          type="text"
          class="form-control"
          placeholder="Create a new to-do..."
        />
      </div>
      <button v-on:click.prevent="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: {
          title: "",
          completed: "",
          userid: ""
      },
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length > 0) {
        this.$emit("on-new-todo", this.newTodo);
      }
      this.newTodo = "";
    },
    submit: function () {
      this.$http
        .post("https://jsonplaceholder.typicode.com/todos", this.newTodo).then(function (data) {
          console.log(data);
          this.submitted = true;
        });
      /*           this.$http.post('https://todo-bbacb-default-rtdb.firebaseio.com/posts.json', this.newToDo).then(function(data){
              console.log(data);
              this.submitted = true;
          }); */
    },
  },

  components: {},
};
</script>

<style scoped>
.todo-wrapper {
  padding-bottom: 30px;
}
</style>