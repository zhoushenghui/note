<template>
  <div>
    <transition
      appear
      name="animate_animated animate_bounce"
      enter-active-class="animate_swing"
      leave-active-class=""
    >
      <div class="todo-footer" v-show="tatol">
        <!-- <input type="checkbox" v-model="isAll" /> -->
        <h4>
          已完成<span>{{ doneNumber }}</span
          >/总共<span>{{ tatol }}</span>
        </h4>
        <button
          class="btn btn-danger"
          type="button"
          @click="deleteAllDone(trueObj)"
        >
          delete All Done
        </button>
      </div>
    </transition>
    <ul>
      <li v-for="todos in obj" :key="todos.id" class="listDown">
        <input type="checkbox" :checked="todos.complete" />
        <h4>{{ todos.title }}</h4>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "footerTodo",
  computed: {
    obj(){
      return this.$store.state.obj
    },
    trueObj(){
      return this.$store.state.trueObj
    },
    tatol() {
      return this.obj.length;
    },
    doneNumber() {
      return this.obj.reduce((pre, todo) => pre + (todo.complete ? 1 : 0), 0);
    }
  },
  methods: {
    deleteAllDone(obj) {
      if (confirm("确定删除吗？")) {
        this.$store.dispatch("deleteAllDone", obj);
      }
    },
  }
};
</script>
<style scoped>
.todo-footer {
  border: lightcoral 1px dashed;
  margin: 50px 20px 0px 20px;
  padding: 20px;
}
.listDown{
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
.todo-footer button {
  float: right;
  margin-bottom: 5px;
}
</style>