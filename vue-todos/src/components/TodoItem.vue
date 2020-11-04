<template>
  <li v-bind:name="this.$props.item.id" v-on:click="toggle">
    <p
      v-bind:name="this.$props.item.id"
      v-bind:class="this.$props.item.completed ? 'completed' : null"
    >
      {{ this.$props.item.name }}
    </p>
    <button v-bind:name="this.$props.item.id" v-on:click="deleteClick">
      X
    </button>
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

<style>
li {
  user-select: none;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

li:hover {
  cursor: pointer;
  border: 1px solid black;
  border-radius: 8px;
  padding: 0.2rem;
}

li p {
  height: 100%;
  padding: 0.5rem 0;
  margin: 0;
  color: orangered;
}

.completed {
  text-decoration: line-through;
  color: blue;
}
</style>
