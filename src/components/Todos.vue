<template>
  <div>
    <h2>Todos</h2>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" v-bind:key="todo.id">
        {{ todo.title }}
      </div>
    </div>
  </div>
</template>

<script>
//in order to use a getter property from module todo.js we make use of mapGetters
//mapGetters basically maps all the getters from vuex
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos", //which getters we want to use
  methods: {
    ...mapActions(["fetchTodos"]) //this is not a call command but component mapping cmd
  },

  computed: mapGetters(["allTodos"]), //allTodos is the getter name define in todo.js

  created() {
    //created() = lifecyle hook before the components loads
    this.fetchTodos(); //calls the fetchTodos actions from the methods
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}
.is-complete {
  background: #35495e;
  color: #fff;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>