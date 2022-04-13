<template>
  <div class="suibian">
    <ul>
      <li v-for="todo in trueObj" :key="todo.id">
        <h4>{{ todo.title }}</h4>
        <button type="button" class="btn btn-danger" @click="deleteTodo(todo)">
          Delete done
        </button>
      </li>
    </ul>
    <h1 v-show="!isShow">loading...</h1>
  </div>
</template>
<script>
export default {
  name: "myDoneList",
  computed: {
    trueObj() {
      return this.$store.getters.trueObj;
    },
    isShow() {
      return this.trueObj.length && this.trueObj.length > 0;
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
.suibian {
  margin-top: 30px;
  width: 90%;
  padding-bottom: 20px;
  height: 444px;
  overflow-y: scroll;
}
.suibian ul li {
  font-size: 18px;
  margin-left: 0;
  margin-top: 30px;
  height: 35px;
  border-bottom: rgb(205, 240, 170) 2px dashed;
}
.suibian ul li:hover {
  background-color: aquamarine;
}
.suibian ul li:hover button {
  display: inline-block;
}
.suibian ul li h4 {
  width: 55%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 35px;
  display: inline;
  margin-left: 5px;
}
.suibian ul li input {
  margin-left: 5px;
}
.suibian ul li button {
  float:right;
  position: relative;
  bottom: 2px;
  border-radius: 10px;
  margin-top: 3px;
}
.del {
  background-color: rgb(244, 92, 127);
}
</style>