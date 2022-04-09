<template>
  <div class="row">
    <div class="list">
      <h4>默认：todo</h4>
      <div class="col-lg-12">
        <div class="input-group">
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
          <input
            type="text"
            class="form-control"
            aria-label="..."
            placeholder="enter todo"
            @keyup.enter="add"
          />
        </div>
      </div>
      <footerTodo />
    </div>
  </div>
</template>
<script>
import footerTodo from "../components/footerTodo";
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
.input-group-addon {
  padding: 5px;
}
</style>