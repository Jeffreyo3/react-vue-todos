<template>
  <ul>
    <li
      v-on:click="toggle"
      v-bind:id="item.id"
      v-bind:key="item.id"
      v-for="item in this.$props.todos"
      v-bind:class="item.completed ? 'completed' : null"
    >
      {{ item.name }}
      <button v-bind:id="item.id" v-on:click="deleteClick">X</button>
    </li>
    <!-- <li>{{props}}</li> -->
  </ul>
</template>

<script>
export default {
  name: "TodoList",
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
        props: "yeah"
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
