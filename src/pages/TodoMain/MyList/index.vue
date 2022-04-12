<template>
  <div class="todolistup">
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
    <div class="todolist">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyList",
};
</script>
<style scoped>
.todolistbtn{
  height:30px;
  width: 100%;
}
</style>

