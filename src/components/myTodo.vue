<template>
  <div class="item">
    <ul>
      <li>
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
        <button type="button" class="del" @click="deleteTodo(todoObj)">
          delete
        </button>
        <button
          class="edit"
          type="button"
          v-show="!todoObj.isEdit"
          @click="editTodo(todoObj)"
        >
          edit
        </button>
      </li>
    </ul>
  </div>
</template>
<script>
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
.item {
  margin-top: 30px;
  width: 90%;
}
.item ul li {
  font-size: 18px;
  list-style: none;
  margin-left: 0;
  height: 35px;
  border-bottom: lawngreen 2px dashed;
}
.item ul li:hover {
  background-color: aquamarine;
}
.item ul li:hover button {
  display: block;
}
.item ul li h4 {
  line-height: 35px;
  display: inline;
  margin-left: 5px;
}
.item ul li input {
  margin-left: 5px;
}
.item ul li button {
  display: none;
  border-radius: 10px;
  float: right;
  margin-right: 25px;
  margin-top: 3px;
}
.del {
  background-color: rgb(244, 92, 127);
}
.edit {
  background-color: rgb(62, 216, 109);
}
</style>