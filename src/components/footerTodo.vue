<template>
  <div class="footerTodo">
    <div class="todo-footer" v-show="tatol">
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
    <ul class="ulLine">
      <li
        v-for="todos in obj"
        :key="todos.id"
        class="listDown"
        v-show="isAnimate"
      >
        <input type="checkbox" :checked="todos.complete" disabled />
        <h4>{{ todos.title }}</h4>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "footerTodo",
  data() {
    return {
      isAnimate: true,
    };
  },
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
.footerTodo {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: auto;
  align-items: flex-end;
  padding-right: 20px;
}
.ulLine {
  padding: 0px;
  height: 400px;
  width: 90%;
  overflow-y: scroll;
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-start;
}
.listDown {
  border: rgb(64, 238, 139) 1px solid;
  width: 100%;
  background-color: #f5c78a;
  list-style: none;
  margin-top: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
input {
  display: inline;
  margin-top: 5px;
}
h4 {
  display: inline;
  margin-left: 10px;
}
</style>