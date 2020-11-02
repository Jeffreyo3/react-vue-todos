<template>
  <form v-on:submit.prevent @submit="addTodo">
    <label htmlFor="newTodo">New Todo </label>
    <input id="newTodo" name="newTodo" v-model="state.formValue" type="text" />
    <button type="submit" v-bind:disabled="state.formValue.length < 1">
      Add
    </button>
  </form>
</template>

<script>
export default {
  name: "TodoForm",
  props: {
    todos: {
      type: Array,
    },
    handleSubmit: {
      type: Function,
    },
  },
  data: function() {
    return {
      state: {
        formValue: "",
      },
    };
  },
  methods: {
    addTodo: function() {
      const newTodo = {
        id: this.$props.todos[this.$props.todos.length - 1].id + 1,
        name: this.state.formValue,
        completed: false,
      };
      this.handleSubmit(newTodo);
      this.state.formValue = "";
    },
  },
};
</script>

<style></style>
