<template>
  <!--learning material form https://www.youtube.com/watch?v=5lVQgZzLMHc -->
  <div class="container">
    <AddTodo />
    <Todos />
  </div>
</template>

<script>
import Todos from "@/components/Todos.vue";
import AddTodo from "@/components/AddTodo.vue";

export default {
  name: "App",
  components: {
    Todos,
    AddTodo
  }
};
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e6e5ee;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>