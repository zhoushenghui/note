<template>
  <div class="suibian">
    <div class="item">
      <ul>
        <myTodo
          v-show="isShow"
          v-for="todoObj in newtodos"
          :key="todoObj.id"
          :todoObj="todoObj"
        />
      </ul>
    </div>
    <h1 v-show="!isShow" class="load">loading...</h1>
    <button
      v-show="isShow"
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
  padding-bottom: 20px;
}
.load{
  position: relative;
  top:-370px;

}
.send {
  margin-top: 20px;
  margin-left: 50%;
}
.item {
  margin-top: 30px;
  width: 90%;
  height:370px;
  overflow: hidden;
  overflow-y: scroll;
}
</style>