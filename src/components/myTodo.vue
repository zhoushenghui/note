<template>
  <li class="liList">
    <div class="todoUp">
      <input
        v-show="!todoObj.isEdit"
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
        :value="todoObj.title"
        @blur="updetaTodo(todoObj, $event)"
        ref="inputTitle"
      />
    </div>
    <div class="buttonDown">
      <button
        type="button"
        v-show="!todoObj.isEdit"
        class="btn btn-danger"
        @click="deleteTodo(todoObj)"
      >
        delete
      </button>
      <button
        class="btn btn-primary"
        type="button"
        v-show="!todoObj.isEdit"
        @click="editTodo(todoObj)"
      >
        edit
      </button>
    </div>
  </li>
</template>
<script>
export default {
  name: "MyTodo",
  props: ["todoObj"],
  data() {
    return {
      isPlay: true,
    };
  },
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
.liList {
  width: 100%;
  height: 45px;
  border-bottom: rgb(205, 240, 170) 2px dashed;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  list-style: none;
  align-items: flex-end;
}
.todoUp {
  flex: 7;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  list-style: none;
  align-items: flex-end;
}
.buttonDown {
  flex: 2;
}
.todoUp:hover {
  background-color: aquamarine;
}
.check {
  display: block;
  height: 20px;
  width: 20px;
}
.todoUp h4 {
  color: rgb(20, 47, 114);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  padding-left: 5px;
  margin: 0px;
}

li .form-control {
  width: 80%;
}
li button {
  margin-left: 10px;
}
</style>