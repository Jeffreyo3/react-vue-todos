<template>
  <ul>
    <TodoItem
      v-bind:key="item.id"
      v-bind:toggleComplete="toggle"
      v-bind:deleteTodo="deleteClick"
      v-for="item in this.$props.todos"
      v-bind:item="item"
    />
    <!-- <li
      v-on:click="toggle"
      v-bind:id="item.id"
      v-bind:key="item.id"
      v-for="item in this.$props.todos"
      v-bind:class="item.completed ? 'completed' : null"
    >
      {{ item.name }}
      <button v-bind:id="item.id" v-on:click="deleteClick">X</button>
    </li> -->
    <!-- <li>{{props}}</li> -->
    <!-- referencing props is different than $props -->
    <!-- props refers to a name/key/var in data and $props references the vue instance -->
  </ul>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  components: { TodoItem },
  props: {
    todos: {
      type: Array,
    },
    toggleComplete: {
      type: Function,
    },
    deleteTodo: {
      type: Function,
    },
  },
  data: function() {
    return {
      props: "yeah",
    };
  },
  methods: {
    toggle: function(event) {
      this.$props.toggleComplete(event);
    },
    deleteClick: function(event) {
      this.$props.deleteTodo(event);
    },
  },
};
</script>

<style></style>
