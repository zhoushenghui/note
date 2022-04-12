<template>
  <div>
    <div class="todo-footer" v-show="tatol">
      <!-- <input type="checkbox" v-model="isAll" /> -->
      <p>
        已完成<span> {{ doneNumber }}</span
        >/总共<span>{{ tatol }}</span>
      </p>
      <button
        class="btn btn-danger"
        type="button"
        @click="deleteAllDone(trueObj)"
      >
        delete All Done
      </button>
    </div>
    <ul>
      <li v-for="todos in obj" :key="todos.id" class="listDown">
        
          <div>
            <input type="checkbox" :checked="todos.complete" disabled />
            <h4>{{ todos.title }}</h4>
          </div>
        
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "footerTodo",
  computed: {
    obj() {
      return this.$store.state.obj;
    },
    trueObj() {
      return this.$store.getters.trueObj;
    },
    tatol() {
      return this.obj.length;
    },
    doneNumber() {
      return this.trueObj.length;
    },
  },
  methods: {
    deleteAllDone(trueObj) {
      if (confirm("确定删除吗？")) {
        const delObj = trueObj.map((todo) => todo.id);
        this.$store.dispatch("deleteAllDone", delObj);
      }
    },
  },
};
</script>
<style scoped>
.todo-footer {
  margin: 0px 20px 0px 20px;
  padding: 2px;
}
.listDown {
  list-style: none;
  margin-top: 30px;
}
input {
  display: inline;
  margin-top: 5px;
}
h4 {
  display: inline;
  margin-left: 10px;
}
p {
  margin-left: 50%;
}
.todo-footer button {
  margin-bottom: 5px;
  margin-left: 50%;
}
</style>