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
    nextId: {
      type: Number,
    },
    incrementId: {
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
        id: this.$props.nextId,
        name: this.state.formValue,
        completed: false,
      };
      this.handleSubmit(newTodo);
      this.state.formValue = "";
      this.$props.incrementId();
    },
  },
};
</script>

<style></style>
