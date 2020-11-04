<template>
  <div id="app">
    <VueHeader message="Welcome to your VueJS Todos App" />

    <TodoForm
      v-bind:handleSubmit="handleSubmit"
      v-bind:todos="this.state.todos"
      v-bind:nextId="this.state.nextId"
      v-bind:incrementId="this.incrementId"
    />

    <button v-on:click="deleteCompleted">Clear Completed</button>

    <TodoList
      v-bind:todos="this.state.todos"
      v-bind:toggleComplete="this.toggleComplete"
      v-bind:deleteTodo="this.deleteTodo"
    />
  </div>
</template>

<script>
import VueHeader from "./components/VueHeader.vue";
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

import dummyData from "./dummyData.json";

export default {
  name: "App",
  components: { VueHeader, TodoForm, TodoList },
  data: function() {
    return {
      state: {
        todos: dummyData,
        nextId: dummyData.length + 1,
      },
    };
  },
  methods: {
    incrementId: function() {
      this.state.nextId++;
    },
    handleSubmit: function(newTodo) {
      console.log(newTodo);
      this.state.todos.push(newTodo);
    },
    toggleComplete: function(event) {
      this.state.todos = this.state.todos.map((item) => {
        if (Number(event.target.getAttribute("name")) === item.id) {
          return { ...item, completed: !item.completed };
        } else return item;
      });
    },
    deleteCompleted: function() {
      this.state.todos = this.state.todos.filter((item) => !item.completed);
    },
    deleteTodo: function(event) {
      this.state.todos = this.state.todos.filter(
        (item) => item.id !== Number(event.target.name)
      );
    },
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
