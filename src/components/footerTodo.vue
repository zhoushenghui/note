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
    <ul class="ulLine">
      <transition-group name="animated">
        <li
          v-for="todos in obj"
          :key="todos.id"
          class="listDown"
          v-show="isAnimate"
        >
          <input type="checkbox" :checked="todos.complete" disabled />
          <h4>{{ todos.title }}</h4>
        </li>
      </transition-group>
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
.todo-footer {
  margin: 0px 20px 0px 20px;
  padding: 2px;
}
.ulLine {
  height: 300px;
  width: 90%;
  overflow-y: scroll;
}
.listDown {
  border: rgb(64, 238, 139) 1px solid;
  width: 100%;
  background-color: #f5c78a;
  list-style: none;
  margin-top: 10px;
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
animated-enter {
  width: 0px;
}
anmimated-enter-to {
  width: 100%;
}
animated-enter-active {
  transition: all 2s linear;
}
</style>