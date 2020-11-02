<template>
  <div id="app">
    <VueHeader message="Welcome to your VueJS Todos App" />

    <TodoForm v-bind:handleSubmit="handleSubmit" v-bind:todos="state.todos" />

    <button v-on:click="deleteCompleted">Clear Completed</button>
    <!-- <ul>
      <li
        v-on:click="toggleComplete"
        v-bind:id="item.id"
        v-bind:key="item.id"
        v-for="item of state.todos"
        v-bind:class="item.completed ? 'completed' : null"
      >
        {{ item.name }}
        <button v-bind:id="item.id" v-on:click="deleteTodo">X</button>
      </li>
    </ul> -->

    <TodoList
      v-bind:todos="todos"
      v-bind:toggleComplete="toggleComplete"
      v-bind:deleteTodo="deleteTodo"
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
      },
    };
  },
  methods: {
    handleSubmit: function(newTodo) {
      console.log(newTodo);
      this.state.todos.push(newTodo);
    },
    toggleComplete: function(event) {
      this.state.todos = this.state.todos.map((item) => {
        if (Number(event.target.id) === item.id) {
          return { ...item, completed: !item.completed };
        } else return item;
      });
    },
    deleteCompleted: function() {
      this.state.todos = this.state.todos.filter((item) => !item.completed);
    },
    deleteTodo: function(event) {
      this.state.todos = this.state.todos.filter(
        (item) => item.id !== Number(event.target.id)
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  user-select: none;
}

li:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
}
</style>
