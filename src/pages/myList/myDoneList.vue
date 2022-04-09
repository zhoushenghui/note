<template>
  <div class="row">
    <div class="list">
      <h4>doneList:</h4>
      <ul>
        <li v-for="todo in newtodos" :key="todo.id">
          <h4>{{ todo.title }}</h4>
          <button type="button" @click="deleteTodo(todo)">Delete item</button>
        </li>
      </ul>
      <h1 v-show="!isShow">loading...</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "myDoneList",
  // props: ["msg"],
  computed: {
    newtodos() {
      return this.$store.state.trueObj;
    },
    isShow() {
      return this.newtodos.length && this.newtodos.length > 0;
    },
  },
  methods: {
    deleteTodo(todo) {
      if (confirm("确定删除吗？")) {
        this.$store.dispatch("deleteTodo", todo);
      }
    },
  },
};
</script>
<style scoped>
.row ul li {
  font-size: 18px;
  margin-left: 20;
  height: 35px;
  border-bottom: lawngreen 2px dashed;
}
.row ul li:hover {
  background-color: aquamarine;
}
.row ul li:hover button {
  display: block;
}
.row ul li h4 {
  line-height: 35px;
  display: inline;
  margin-left: 50px;
}
.row ul li button {
  display: none;
  border-radius: 10px;
  background-color: rgb(244, 92, 127);
  float: right;
  margin-right: 25px;
  margin-top: 3px;
}
</style>