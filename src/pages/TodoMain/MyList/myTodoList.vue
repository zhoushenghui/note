<template>
  <div class="suibian">
    <ul v-if="isShow" class="ulList">
      <myTodo
        v-show="isShow"
        v-for="todoObj in newtodos"
        :key="todoObj.id"
        :todoObj="todoObj"
      />
    </ul>
    <h1 v-if="!isShow" class="load">loading...</h1>
    <button
      v-if="isShow"
      class="btn btn-primary send"
      @click="sureDone(newtodos)"
    >
      sure done!
    </button>
  </div>
</template>

<script>
import myTodo from "@/components/myTodo.vue";
// import {mapState} from 'vuex'
export default {
  name: "myTodoList",
  components: { myTodo },
  // props: ["msg"],
  computed: {
    // ...mapState({newtodos:"falseObj"}),
    newtodos() {
      return this.$store.state.falseObj;
    },
    isShow() {
      return this.newtodos.length || this.newtodos.length > 0;
    },
  },
  methods: {
    sureDone() {
      if (confirm("确定添加到已完成列表吗？")) {
        var newFalseObj = this.newtodos.filter((todo) => todo.complete == true);
        var idArry = newFalseObj.map((todo) => todo.id);
        this.$store.dispatch("sureDone", idArry);
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
.btn {
  margin: 0px;
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
</style>