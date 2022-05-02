<template>
  <div class="todolistup">
    <div class="todolist">
      <router-view></router-view>
    </div>
    <div class="todolistbtn">
      <router-link
        active-class="active"
        class="btn btn-primary"
        to="/todoMain/list/todo"
        >todo</router-link
      >
      <router-link
        class="btn btn-primary"
        active-class="active"
        to="/todoMain/list/done"
        >done</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "MyList",
};
</script>
<style scoped>
.todolistup {
  width: 90%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.todolist {
  height: 577px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  flex: 6;
}
.todolistbtn {
  flex: 1;
  height: 577px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.btn {
  margin: 10px 0px;
}
</style>

