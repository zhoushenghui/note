<template>
  <div class="add">
    <div class="addTodo">
      <h6>默认：<del>done</del>...<em>todo</em></h6>
      <span class="input-group-addon">
        <el-radio v-model="change" label="false">todo</el-radio>
        <el-radio v-model="change" label="true">done</el-radio>
      </span>
      <div class="grid-content bg-purple-light">
        <input
          placeholder="Please input"
          type="text"
          class="form-control"
          aria-label="..."
          @keyup.enter="add"
        />
      </div>
    </div>
    <div class="footerTodo">
      <footerTodo />
    </div>
  </div>
</template>
<script>
import footerTodo from "@/components/footerTodo.vue";
export default {
  name: "MyAdding",
  data() {
    return {
      change: "false",
    };
  },
  components: { footerTodo },
  methods: {
    add(e) {
      if (!e.target.value.trim()) return alert("输入不能为空！");
      var inputer = e.target.value.replace(/\s*/g, "");
      const todoObj = {
        title: inputer,
        complete: this.change,
      };
      this.$store.dispatch("add", todoObj);

      e.target.value = "";
    },
  },
};
</script>
<style scoped>
.add {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
}
.addTodo {
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;
  margin: 0 20%;
}
.input-group-addon {
  border: none;
  background-color: rgb(245, 225, 197);
  width: 60%;
}
.grid-content {
  width: 60%;
  border-radius: 4px;
  min-height: 36px;
}
.footerTodo {
  width: 90%;
  height: 60%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: auto;
  align-items: flex-end;
}
</style>