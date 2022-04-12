<template>
  <div class="add">
    <div class="addTodo">
      <h6>默认：todo</h6>
      <span class="input-group-addon">
        <label class="radio-inline">
          <input
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            v-model="change"
            value="false"
          />
          todo
        </label>
        <label class="radio-inline">
          <input
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            v-model="change"
            value="true"
          />
          done
        </label>
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
    <footerTodo />
  </div>
</template>
<script>
import footerTodo from "@/components/footerTodo.vue";
export default {
  name: "MyAdding",
  data() {
    return {
      change: false,
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
.addTodo {
  margin: 0px 20px 0px 20px;
  padding: 20px;
}
.input-group-addon {
  margin: auto;
  border: none;
  background-color: rgb(245, 225, 197);
  width: 70%;
}
.grid-content {
  margin: auto;
  width: 70%;
  border-radius: 4px;
  min-height: 36px;
}
</style>