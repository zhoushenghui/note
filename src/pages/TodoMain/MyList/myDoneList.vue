<template>
  <div class="suibian">
    <ul v-if="isShow" class="ulList">
      <li v-for="todo in trueObj" :key="todo.id">
        <h4>{{ todo.title }}</h4>
        <button type="button" class="btn btn-danger" @click="deleteTodo(todo)">
          Delete done
        </button>
      </li>
    </ul>
    <h1 v-if="!isShow" class="load">loading...</h1>
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
  height: 100%;
  width: 100%;
  margin: 0px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
.load {
  margin: 200px auto;
}
.ulList {
  width: 100%;
  height: 577px;
  padding: 0px;
  overflow: hidden;
  overflow-y: scroll;
}
.suibian ul li {
  font-size: 18px;
  height: 45px;
  border-bottom: rgb(205, 240, 170) 2px dashed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
.suibian ul li:hover {
  background-color: aquamarine;
}
</style>