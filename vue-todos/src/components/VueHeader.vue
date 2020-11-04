<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  name: "VueHeader",
  props: {
    message: {
      type: String,
    },
  },
};
</script>

<style></style>