<template>
  <transition-group
    appear
    name="animate_animated animate_bounce"
    enter-active-class="animate_swing"
    leave-active-class="animate_backOutUp"
  >
    <li key="1">
      <input
        class="check"
        type="checkbox"
        :checked="todoObj.done"
        @change="getId(todoObj.id)"
      />
      <h4 v-show="!todoObj.isEdit" @dblclick="editTodo(todoObj)">
        {{ todoObj.title }}
      </h4>
      <input
        v-show="todoObj.isEdit"
        type="text"
        class="form-control"
        aria-label="..."
        :value="todoObj.title"
        @blur="updetaTodo(todoObj, $event)"
        ref="inputTitle"
      />
      <button
        class="edit"
        type="button"
        v-show="!todoObj.isEdit"
        @click="editTodo(todoObj)"
      >
        edit
      </button>
      <button
        type="button"
        v-show="!todoObj.isEdit"
        class="del"
        @click="deleteTodo(todoObj)"
      >
        delete
      </button>
    </li>
  </transition-group>
</template>
<script>
import "animate.css";

export default {
  name: "MyTodo",
  props: ["todoObj"],
  computed: {
    MyTodo() {
      return this.$store.state.falseObj;
    },
  },
  methods: {
    getId(id) {
      this.$store.commit("GETID", id);
    },
    deleteTodo(todo) {
      if (confirm("确定删除吗？")) {
        this.$store.dispatch("deleteTodo", todo);
      }
    },
    editTodo(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      // setTimeout(() => {
      //   console.log(this.$refs)
      // }, 100);
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    updetaTodo(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空！");
      const perem = {
        id: todo.id,
        title: e.target.value,
      };
      this.$store.dispatch("updetaTodo", perem);
    },
  },
};
</script>
<style scoped>
li {
  font-size: 18px;
  list-style: none;
  margin-left: 0;
  height: 40px;
  border-bottom: lawngreen 2px dashed;
}
li:hover {
  background-color: aquamarine;
}
li:hover button {
  display: inline-block;
}
li h4 {
  position: relative;
  bottom: -5px;
  line-height: 35px;
  display: inline;
  margin-left: 5px;
}
li .form-control {
  position: relative;
  top: -22px;
  left: 10px;
  margin-left: 5px;
  display: inline;
  margin-bottom: 10px;
}
li button {
  border:none;
  margin-left:5px;
  position: relative;
  bottom: -5px;
  border-radius: 10px;
}
.del {
  background-color: rgb(244, 92, 127);
}
.edit {
  background-color: rgb(62, 216, 109);
}
</style>