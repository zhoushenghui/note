<template>
  <li>
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
      <button
        type="button"
        v-show="!todoObj.isEdit"
        class="del"
        @click="deleteTodo(todoObj)"
      >
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
      <div class="qipaotu" v-show="!todoObj.isEdit">{{ todoObj.title }}</div>
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
li {
  font-size: 18px;
  list-style: none;
  margin-left: 0;
}
.todoUp {
  height: 40px;
  border-bottom: pink 1px solid;
}
.todoUp:hover {
  background-color: aquamarine;
}
.todoUp:hover .qipaotu {
  display: block;
}
.qipaotu {
  z-index: 999;
  width: 70%;
  position: relative;
  display: none;
  top: -22px;
  left: 15px;
  font-size: 12px;
  border-radius: 10px;
  padding: 0px 5px;
  background-color: rgb(162, 161, 159, 0.5);
}
.todoUp h4 {
  width: 55%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 35px;
  display: inline-block;
  padding-left: 5px;
}
.check {
  position: relative;
  top: -20px;
}
li .form-control {
  width: 80%;
  position: relative;
  top: 5px;
  left: 10px;
}
li button {
  border: none;
  float: right;
  height: 20px;
  font-size: 15px;
  border-radius: 7px;
  position: relative;
  bottom: -20px;
  margin-right: 2px;
}
.del {
  background-color: rgb(244, 92, 127);
}
.edit {
  background-color: rgb(62, 216, 109);
}
</style>