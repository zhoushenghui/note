<template>
  <div class="row">
    <div class="list">
      <h4>todoList:</h4>
      <myTodo
        v-show="isShow"
        v-for="todoObj in newtodos"
        :key="todoObj.id"
        :todoObj="todoObj"
      />
      <h1 v-show="!isShow">loading...</h1>
      <button
        v-show="isShow"
        class="btn btn-primary send"
        @click="sureDone(newtodos)"
      >
        sure done!
      </button>
    </div>
  </div>
</template>

<script>
import myTodo from "../../components/myTodo";
export default {
  name: "myTodoList",
  components: { myTodo },
  // props: ["msg"],
  computed: {
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
        var falseObj = this.$store.state.falseObj;
        var newFalseObj = falseObj.filter((todo) => todo.complete == true);
        var idArry = newFalseObj.map((todo) => {
          return todo.id;
        });
        if (idArry.length > 1) {
          this.$store.dispatch("sureDone", idArry);
        } else if((idArry.length == 1)) {
          this.$store.dispatch("getId", idArry[0]);
        }
      }

      // var complete:Boolean,id,title=[];
      // [{complete:Boolean,id:Array,title:String}]=newFalseObj
      // console.log(complete,id,title)

      //
    },
  },
};
</script>
<style scoped>
.send {
  margin-top: 20px;
  margin-left: 50%;
}
</style>