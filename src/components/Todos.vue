<template>
  <div>
    <div class="todo-tag" v-for="todo in allTodos" v-bind:key="todo.id">
      {{ todo.title }}
    </div>
    {{ JSON.stringify(allTodos) }}
    {{ JSON.stringify(allExample) }}
  </div>
</template>

<script>
//in order to use a getter property from module todo.js we make use of mapGetters
//mapGetters basically maps all the getters from vuex
import { mapGetters } from "vuex";

export default {
  name: "Todos",
  //which getters we want to use
  computed: mapGetters(["allTodos"]) //allTodos is the getter name define in todo.js
};
</script>

<style>
</style>