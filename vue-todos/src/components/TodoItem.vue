<template>
  <li
    v-bind:id="this.$props.item.id"
    v-on:click="toggle"
    v-bind:class="this.$props.item.completed ? 'completed' : null"
  >
    {{ this.$props.item.name }}
    <button v-bind:id="this.$props.item.id" v-on:click="deleteClick">X</button>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    item: {
      type: Object,
    },
    toggleComplete: {
      type: Function,
    },
    deleteTodo: {
      type: Function,
    },
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
